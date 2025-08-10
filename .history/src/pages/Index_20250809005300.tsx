import Navbar from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Flame, Sword, Trophy, Users } from "lucide-react";

const Index = () => {
  return (
    <>
      <div className="min-h-screen bg-background cursor-sword">
        <Navbar />
        {/* Hero Section */}
        <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden japanese-pattern">
          <div className="absolute inset-0 flame-bg opacity-20"></div>
          <div className="relative z-10 text-center max-w-4xl mx-auto px-4">
            <h1 className="font-cinzel text-6xl md:text-8xl font-bold mb-6 demon-text animate-scroll-reveal">
              Code Slayer Hackathon 2025
            </h1>
            <div>コードスレイヤー・ハッカソン 2025</div>
            <h2 className="text-2xl md:text-4xl font-semibold mb-8 text-foreground animate-scroll-reveal">
              Demon Slayer: Kimetsu no Yaiba
            </h2>
            <div>鬼滅の刃：デーモンスレイヤー</div>
            <p className="text-lg md:text-xl mb-8 text-muted-foreground max-w-2xl mx-auto animate-scroll-reveal">
              Unleash your coding prowess in the ultimate Web3 hackathon. Build, innovate, and establish your reputation among top innovators.
            </p>
            <div>究極のWeb3ハッカソンであなたのコーディング力を解き放とう。構築し、革新し、トップイノベーターの中であなたの名声を確立しよう。</div>
            <Button size="lg" className="flame-bg hover-blade font-semibold px-8 py-4 cursor-blade">
              <Sword className="mr-2 h-5 w-5" />
              Enter the Battle
            </Button>
            <div>バトルに参加する</div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-20 px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-cinzel font-bold text-center mb-16 demon-text">About the Hackathon</h2>
            <div>ハッカソンについて</div>
            <div className="grid md:grid-cols-3 gap-8">
              <Card className="p-6 hover-blade cursor-blade bg-card/50 backdrop-blur-sm">
                <Flame className="h-12 w-12 text-primary mb-4 animate-mystical-pulse" />
                <h3 className="text-xl font-semibold mb-3">Innovation</h3>
                <div>イノベーション</div>
                <p className="text-muted-foreground">Push the boundaries of Web3 technology</p>
                <div>Web3技術の限界を押し広げる</div>
              </Card>
              <Card className="p-6 hover-blade cursor-blade bg-card/50 backdrop-blur-sm">
                <Users className="h-12 w-12 text-primary mb-4 animate-mystical-pulse" />
                <h3 className="text-xl font-semibold mb-3">Community</h3>
                <div>コミュニティ</div>
                <p className="text-muted-foreground">Connect with fellow builders and creators</p>
                <div>仲間のビルダーやクリエイターとつながろう</div>
              </Card>
              <Card className="p-6 hover-blade cursor-blade bg-card/50 backdrop-blur-sm">
                <Trophy className="h-12 w-12 text-primary mb-4 animate-mystical-pulse" />
                <h3 className="text-xl font-semibold mb-3">Rewards</h3>
                <div>報酬</div>
                <p className="text-muted-foreground">Compete for incredible prizes and recognition</p>
                <div>素晴らしい賞品と名誉をかけて競い合おう</div>
              </Card>
            </div>
          </div>
        </section>
      </div>
    </>

      {/* Timeline */}
      <section id="timeline" className="py-20 px-4 bg-muted/20">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-cinzel font-bold text-center mb-16 demon-text">Event Timeline</h2>
          <div>イベントタイムライン</div>
          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-primary to-secondary"></div>
            
            <div className="space-y-12">
              {/* Day 1 */}
              <div className="relative flex items-center">
                <div className="flex-1 pr-8 text-right">
                  <div className="bg-card/80 backdrop-blur-sm p-6 rounded-lg border border-primary/20">
                    <h3 className="text-2xl font-bold text-primary mb-4">DAY 1</h3>
                    <div>1日目</div>
                    import Navbar from "@/components/Navbar";
                    import { Button } from "@/components/ui/button";
                    import { Card } from "@/components/ui/card";
                    import { Flame, Sword, Trophy, Users } from "lucide-react";

                    const Index = () => {
                      return (
                        <div className="min-h-screen bg-background cursor-sword">
                          <Navbar />
                          {/* Hero Section */}
                          <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden japanese-pattern">
                            <div className="absolute inset-0 flame-bg opacity-20"></div>
                            <div className="relative z-10 text-center max-w-4xl mx-auto px-4">
                              <h1 className="font-cinzel text-6xl md:text-8xl font-bold mb-6 demon-text animate-scroll-reveal">
                                Code Slayer Hackathon 2025
                              </h1>
                              <div>コードスレイヤー・ハッカソン 2025</div>
                              <h2 className="text-2xl md:text-4xl font-semibold mb-8 text-foreground animate-scroll-reveal">
                                Demon Slayer: Kimetsu no Yaiba
                              </h2>
                              <div>鬼滅の刃：デーモンスレイヤー</div>
                              <p className="text-lg md:text-xl mb-8 text-muted-foreground max-w-2xl mx-auto animate-scroll-reveal">
                                Unleash your coding prowess in the ultimate Web3 hackathon. Build, innovate, and establish your reputation among top innovators.
                              </p>
                              <div>究極のWeb3ハッカソンであなたのコーディング力を解き放とう。構築し、革新し、トップイノベーターの中であなたの名声を確立しよう。</div>
                              <Button size="lg" className="flame-bg hover-blade font-semibold px-8 py-4 cursor-blade">
                                <Sword className="mr-2 h-5 w-5" />
                                Enter the Battle
                              </Button>
                              <div>バトルに参加する</div>
                            </div>
                          </section>

                          {/* About Section */}
                          <section id="about" className="py-20 px-4">
                            <div className="max-w-6xl mx-auto">
                              <h2 className="text-4xl font-cinzel font-bold text-center mb-16 demon-text">About the Hackathon</h2>
                              <div>ハッカソンについて</div>
                              <div className="grid md:grid-cols-3 gap-8">
                                <Card className="p-6 hover-blade cursor-blade bg-card/50 backdrop-blur-sm">
                                  <Flame className="h-12 w-12 text-primary mb-4 animate-mystical-pulse" />
                                  <h3 className="text-xl font-semibold mb-3">Innovation</h3>
                                  <div>イノベーション</div>
                                  <p className="text-muted-foreground">Push the boundaries of Web3 technology</p>
                                  <div>Web3技術の限界を押し広げる</div>
                                </Card>
                                <Card className="p-6 hover-blade cursor-blade bg-card/50 backdrop-blur-sm">
                                  <Users className="h-12 w-12 text-primary mb-4 animate-mystical-pulse" />
                                  <h3 className="text-xl font-semibold mb-3">Community</h3>
                                  <div>コミュニティ</div>
                                  <p className="text-muted-foreground">Connect with fellow builders and creators</p>
                                  <div>仲間のビルダーやクリエイターとつながろう</div>
                                </Card>
                                <Card className="p-6 hover-blade cursor-blade bg-card/50 backdrop-blur-sm">
                                  <Trophy className="h-12 w-12 text-primary mb-4 animate-mystical-pulse" />
                                  <h3 className="text-xl font-semibold mb-3">Rewards</h3>
                                  <div>報酬</div>
                                  <p className="text-muted-foreground">Compete for incredible prizes and recognition</p>
                                  <div>素晴らしい賞品と名誉をかけて競い合おう</div>
                                </Card>
                              </div>
                            </div>
                          </section>
                        </div>
                      );
                    };

                    export default Index;
          <div>ハッカソン・トラック</div>
