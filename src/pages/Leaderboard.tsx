import { Trophy, Medal, Award } from 'lucide-react';
import { useState, useEffect } from 'react';

interface TeamData {
  serialNumber: number;
  teamName: string;
  teamLeader: string;
}

const Leaderboard = () => {
  const [selectedTeams, setSelectedTeams] = useState<TeamData[]>([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  // Automatically load data from CSV file in public folder
  useEffect(() => {
    loadTeamsFromCSV();
  }, []);

  const loadTeamsFromCSV = async () => {
    try {
      const response = await fetch('/Selected.csv');
      if (!response.ok) {
        console.log('Selected.csv not found in public folder');
        setIsLoading(false);
        return;
      }
      
      const text = await response.text();
      const lines = text.split('\n').filter(line => line.trim());
      const teams: TeamData[] = [];
      
      // Parse CSV data (skip header row if present)
      const startIndex = lines[0].includes('Team') ? 1 : 0;
      
      for (let i = startIndex; i < lines.length && teams.length < 1000; i++) {
        const columns = lines[i].split(',').map(col => col.trim().replace(/"/g, ''));
        
        if (columns.length >= 2) {
          const teamName = columns[0] || `Team ${teams.length + 1}`;
          const teamLeader = columns[1] || `Leader ${teams.length + 1}`;
          
          teams.push({
            serialNumber: teams.length + 1,
            teamName: teamName,
            teamLeader: teamLeader,
          });
        }
      }
      
      if (teams.length > 0) {
        setSelectedTeams(teams);
      }
    } catch (error) {
      console.error('Error loading teams:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const filteredTeams = selectedTeams.filter(team =>
    team.teamName.toLowerCase().includes(searchTerm.toLowerCase()) ||
    team.teamLeader.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // const getRankIcon = (rank: number) => {
  //   switch (rank) {
  //     case 1:
  //       return <Trophy className="w-6 h-6 text-yellow-400" />;
  //     case 2:
  //       return <Medal className="w-6 h-6 text-gray-300" />;
  //     case 3:
  //       return <Award className="w-6 h-6 text-orange-400" />;
  //     default:
  //       return <span className="text-lg font-bold text-primary">{rank}</span>;
  //   }
  // };

  // const getRowStyle = (rank: number) => {
  //   switch (rank) {
  //     case 1:
  //       return "bg-gradient-to-r from-yellow-500/20 to-yellow-600/20 border-yellow-500/50";
  //     case 2:
  //       return "bg-gradient-to-r from-gray-400/20 to-gray-500/20 border-gray-400/50";
  //     case 3:
  //       return "bg-gradient-to-r from-orange-500/20 to-orange-600/20 border-orange-500/50";
  //     default:
  //       return "bg-gradient-to-r from-primary/10 to-secondary/10 border-primary/30";
  //   }
  // };

  return (
    <section className="py-20 bg-gradient-to-br from-background via-primary/5 to-secondary/5 min-h-screen relative overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 z-0 opacity-10"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1517180102446-f3ece451e9d8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1920&q=80')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      />
      
      {/* Dark overlay for better text readability */}
      <div className="absolute inset-0 z-0 bg-gradient-to-b from-background/80 via-background/60 to-background/80"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="flex justify-center items-center gap-4 mb-6">
            <Trophy className="w-12 h-12 text-yellow-400" />
            <h1 className="text-3xl md:text-6xl font-bold font-cinzel text-primary">
              Leaderboard
            </h1>
            <Trophy className="w-12 h-12 text-yellow-400" />
          </div>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Congratulations to all the selected teams who have made it to the Finale of the Code Slayer Hackathon 2025!
          </p>
        </div>

        {/* Loading State */}
        {isLoading && (
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-card/30 backdrop-blur-sm rounded-2xl border border-border p-12">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto mb-4"></div>
              <h3 className="text-2xl font-bold text-primary mb-2">Loading Teams...</h3>
              <p className="text-muted-foreground">
                Please ensure Selected.csv is placed in the public folder.
              </p>
            </div>
          </div>
        )}

        {/* Search Controls */}
        {!isLoading && selectedTeams.length > 0 && (
          <div className="max-w-4xl mx-auto mb-8">
            <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
              {/* Search Bar */}
              <div className="relative flex-1 max-w-md">
                <div className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                </div>
                <input
                  type="text"
                  placeholder="Search teams or team leaders..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 bg-card/50 backdrop-blur-sm border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary"
                />
              </div>
              
              {/* Results Info */}
              <div className="text-sm text-muted-foreground">
                Showing {filteredTeams.length} of {selectedTeams.length} teams
              </div>
            </div>
          </div>
        )}

        {/* Leaderboard Table */}
        {!isLoading && selectedTeams.length > 0 && (
          <div className="max-w-4xl mx-auto">
            <div className="bg-card/50 backdrop-blur-sm rounded-2xl border border-border overflow-hidden shadow-2xl">
              {/* Table Header */}
              <div className="bg-gradient-to-r from-primary/20 to-secondary/20 p-4 md:p-6 border-b border-border">
                <div className="grid grid-cols-12 gap-2 md:gap-4 text-sm md:text-lg font-semibold text-primary">
                  <div className="col-span-2 md:col-span-1 text-center">S.No</div>
                  <div className="col-span-5 md:col-span-5">Team Name</div>
                  <div className="col-span-5 md:col-span-6">Team Leader</div>
                </div>
              </div>

              {/* Table Body */}
              <div className="divide-y divide-border/50">
                {filteredTeams.map((team) => (
                  <div
                    key={team.serialNumber}
                    className={`p-6 transition-all duration-300 hover:scale-[1.02] hover:shadow-lg border-l-4`}
                  >
                    <div className="grid grid-cols-12 gap-2 md:gap-4 items-center">
                      {/* Serial Number */}
                      <div className="col-span-2 md:col-span-1 text-center">
                        <span className="text-base md:text-lg font-bold text-muted-foreground">
                          {team.serialNumber}
                        </span>
                      </div>

                      {/* Team Name */}
                      <div className="col-span-5 md:col-span-5">
                        <h3 className="text-base md:text-xl font-bold text-foreground group-hover:text-primary transition-colors break-words">
                          {team.teamName}
                        </h3>
                      </div>

                      {/* Team Leader */}
                      <div className="col-span-5 md:col-span-6">
                        <p className="text-sm md:text-lg text-muted-foreground flex items-center gap-1 md:gap-2">
                          <span className="w-6 h-6 md:w-8 md:h-8 rounded-full bg-primary/20 flex items-center justify-center text-xs md:text-sm font-bold text-primary">
                            {team.teamLeader.charAt(0)}
                          </span>
                          <span className="truncate">{team.teamLeader}</span>
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Empty State */}
        {!isLoading && selectedTeams.length === 0 && (
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-card/30 backdrop-blur-sm rounded-2xl border border-border p-12">
              <Trophy className="w-16 h-16 text-primary mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-primary mb-2">Leaderboard Coming Soon</h3>
              <p className="text-muted-foreground">
                Please save your Selected.csv file in the public folder to display teams.
              </p>
            </div>
          </div>
        )}

        {/* Footer Stats */}
        {!isLoading && selectedTeams.length > 0 && (
          <div className="max-w-4xl mx-auto mt-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="bg-card/30 backdrop-blur-sm rounded-lg p-4 text-center border border-border">
                <div className="text-2xl font-bold text-primary">{selectedTeams.length}</div>
                <div className="text-sm text-muted-foreground">Total Teams</div>
              </div>
              <div className="bg-card/30 backdrop-blur-sm rounded-lg p-4 text-center border border-border">
                <div className="text-2xl font-bold text-primary">{selectedTeams.length}</div>
                <div className="text-sm text-muted-foreground">Team Leaders</div>
              </div>
              <div className="bg-card/30 backdrop-blur-sm rounded-lg p-4 text-center border border-border">
                <div className="text-2xl font-bold text-primary">1</div>
                <div className="text-sm text-muted-foreground">Grand Winner</div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Leaderboard;