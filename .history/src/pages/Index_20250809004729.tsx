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
      </section>

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
                    <h4 className="text-xl font-semibold mb-3">Opening Ceremony</h4>
                    <div>開会式</div>
                    <div className="space-y-2 text-muted-foreground">
                      <p>10:00 AM - Welcome and rules explanation</p>
                      <div>10:00 - 歓迎とルール説明</div>
                      <p>11:00 AM - Team formation</p>
                      <div>11:00 - チーム編成</div>
                      <p>12:00 PM - Hacking begins!</p>
                      <div>12:00 - ハッキング開始！</div>
                    </div>
                  </div>
                </div>
                <div className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-primary rounded-full border-4 border-background z-10"></div>
                <div className="flex-1 pl-8"></div>
              </div>

              {/* Day 2 */}
              <div className="relative flex items-center">
                <div className="flex-1 pr-8"></div>
                <div className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-secondary rounded-full border-4 border-background z-10"></div>
                <div className="flex-1 pl-8">
                  <div className="bg-card/80 backdrop-blur-sm p-6 rounded-lg border border-secondary/20">
                    <h3 className="text-2xl font-bold text-secondary mb-4">DAY 2</h3>
                    <div>2日目</div>
                    <h4 className="text-xl font-semibold mb-3">Midpoint Check-in</h4>
                    <div>中間チェックイン</div>
                    <div className="space-y-2 text-muted-foreground">
                      <p>10:00 AM - Progress presentations</p>
                      <div>10:00 - 進捗発表</div>
                      <p>12:00 PM - Workshop: Advanced combat mechanics</p>
                      <div>12:00 - ワークショップ：高度な戦闘メカニクス</div>
                      <p>6:00 PM - Kimetsu no Yaiba exhibition match</p>
                      <div>18:00 - 鬼滅の刃エキシビションマッチ</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Day 3 */}
              <div className="relative flex items-center">
                <div className="flex-1 pr-8 text-right">
                  <div className="bg-card/80 backdrop-blur-sm p-6 rounded-lg border border-primary/20">
                    <h3 className="text-2xl font-bold text-primary mb-4">DAY 3</h3>
                    <div>3日目</div>
                    <h4 className="text-xl font-semibold mb-3">Final Battle</h4>
                    <div>最終決戦</div>
                    <div className="space-y-2 text-muted-foreground"></div>
                      <p>10:00 AM - Final presentations</p>
                      <div>10:00 - 最終発表</div>
                      <p>2:00 PM - Judging & evaluation</p>
                      <div>14:00 - 審査・評価</div>
                      <p>5:00 PM - Awards ceremony</p>
                      <div>17:00 - 表彰式</div>
                    </div>
                  </div>
                </div>
                <div className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-primary rounded-full border-4 border-background z-10"></div>
                <div className="flex-1 pl-8"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tracks */}
      <section id="tracks" className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-cinzel font-bold text-center mb-6 demon-text">Hackathon Tracks</h2>
          <div>ハッカソン・トラック</div>
          <div className="text-center mb-16">
            <div className="inline-block bg-primary/20 px-4 py-2 rounded-full">
              <span className="text-primary font-semibold">Choose Your Path</span>
              <div>自分の道を選ぼう</div>
            </div>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {/* Track 1 */}
            <Card className="group relative overflow-hidden bg-card/50 backdrop-blur-sm border-2 border-transparent hover:border-primary/50 transition-all duration-500 cursor-blade">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative p-8 text-center">
                <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-primary/20 flex items-center justify-center">
                  <Sword className="h-10 w-10 text-primary animate-mystical-pulse" />
                </div>
                <div className="mb-4">
                  <span className="bg-primary text-primary-foreground px-3 py-1 rounded-full text-sm font-bold">Web3 & DeFi</span>
                  <div>Web3 & DeFi</div>
                </div>
                <h3 className="text-2xl font-bold mb-4">Blockchain Warriors</h3>
                <div>ブロックチェーン戦士</div>
                <p className="text-muted-foreground mb-6">Build decentralized applications that revolutionize finance and empower users through blockchain technology.</p>
                <div>金融を革新し、ブロックチェーン技術でユーザーに力を与える分散型アプリケーションを構築しよう。</div>
                <div className="space-y-2">
                  <p className="text-sm text-muted-foreground">• Smart Contracts</p>
                  <div>・スマートコントラクト</div>
                  <p className="text-sm text-muted-foreground">• DeFi Protocols</p>
                  <div>・DeFiプロトコル</div>
                  <p className="text-sm text-muted-foreground">• NFT Marketplaces</p>
                  <div>・NFTマーケットプレイス</div>
                </div>
                <div className="text-4xl font-bold text-primary mt-4">₹25,000 INR</div>
              </div>
            </Card>
            {/* Track 2 */}
            <Card className="group relative overflow-hidden bg-card/50 backdrop-blur-sm border-2 border-transparent hover:border-secondary/50 transition-all duration-500 cursor-blade">
              <div className="absolute inset-0 bg-gradient-to-br from-secondary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative p-8 text-center">
                <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-secondary/20 flex items-center justify-center">
                  <Flame className="h-10 w-10 text-secondary animate-mystical-pulse" />
                </div>
                <div className="mb-4">
                  <span className="bg-secondary text-secondary-foreground px-3 py-1 rounded-full text-sm font-bold">AI/ML</span>
                  <div>AI/ML</div>
                </div>
                <h3 className="text-2xl font-bold mb-4">AI Demon Slayers</h3>
                <div>AIデーモンスレイヤー</div>
                <p className="text-muted-foreground mb-6">Harness the power of artificial intelligence to solve real-world problems and create intelligent solutions.</p>
                <div>人工知能の力を活用して現実世界の課題を解決し、知的なソリューションを生み出そう。</div>
                <div className="space-y-2">
                  <p className="text-sm text-muted-foreground">• Machine Learning Models</p>
                  <div>・機械学習モデル</div>
                  <p className="text-sm text-muted-foreground">• Computer Vision</p>
                  <div>・コンピュータビジョン</div>
                  <p className="text-sm text-muted-foreground">• Natural Language Processing</p>
                  <div>・自然言語処理</div>
                </div>
                <div className="text-4xl font-bold text-secondary mt-4">₹15,000 INR</div>
              </div>
            </Card>
            {/* Track 3 */}
            <Card className="group relative overflow-hidden bg-card/50 backdrop-blur-sm border-2 border-transparent hover:border-accent/50 transition-all duration-500 cursor-blade">
              <div className="absolute inset-0 bg-gradient-to-br from-accent/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative p-8 text-center">
                <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-accent/20 flex items-center justify-center">
                  <Trophy className="h-10 w-10 text-accent animate-mystical-pulse" />
                </div>
                <div className="mb-4">
                  <span className="bg-accent text-accent-foreground px-3 py-1 rounded-full text-sm font-bold">Gaming</span>
                  <div>ゲーム</div>
                </div>
                <h3 className="text-2xl font-bold mb-4">Game Developers</h3>
                <div>ゲーム開発者</div>
                <p className="text-muted-foreground mb-6">Create immersive gaming experiences that captivate players and push the boundaries of interactive entertainment.</p>
                <div>プレイヤーを魅了し、インタラクティブエンターテインメントの限界を押し広げる没入型ゲーム体験を創造しよう。</div>
                <div className="space-y-2">
                  <p className="text-sm text-muted-foreground">• Web Games</p>
                  <div>・ウェブゲーム</div>
                  <p className="text-sm text-muted-foreground">• AR/VR Experiences</p>
                  <div>・AR/VR体験</div>
                  <p className="text-sm text-muted-foreground">• Multiplayer Platforms</p>
                  <div>・マルチプレイヤープラットフォーム</div>
                </div>
                <div className="text-4xl font-bold text-accent mt-4">₹10,000 INR</div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Rewards */}
                <div className="text-4xl font-bold text-accent">₹10,000 INR</div>
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl font-cinzel font-bold mb-6 demon-text">Prize Pool</h2>
          <div>賞金総額</div>
          <h3 className="text-2xl font-semibold mb-16 text-muted-foreground">Main Tournament Prizes</h3>
          <div>メイントーナメント賞品</div>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="relative group cursor-blade">
              <div className="absolute -inset-1 bg-gradient-to-r from-primary to-secondary rounded-lg blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
              <Card className="relative bg-card/90 backdrop-blur-sm p-8 rounded-lg border-0">
                <div className="absolute top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-primary text-primary-foreground px-4 py-1 rounded-full text-sm font-bold">CHAMPION</span>
                  <div>チャンピオン</div>
                </div>
                <div className="mt-8 mb-6">
                  <Trophy className="h-16 w-16 mx-auto text-primary animate-mystical-pulse" />
                </div>
                <h4 className="text-xl font-bold mb-2">Lone Survivor</h4>
                <div>唯一の生存者</div>
                <p className="text-sm text-muted-foreground mb-6">of Builder Base Hackathon 2024</p>
                <div>ビルダーベース・ハッカソン2024の</div>
                <div className="text-4xl font-bold text-primary">₹25,000</div>
                <div>₹25,000</div>
              </Card>
            </div>

            <div className="relative group cursor-blade"></div>
              <div className="absolute -inset-1 bg-gradient-to-r from-secondary to-accent rounded-lg blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
              <Card className="relative bg-card/90 backdrop-blur-sm p-8 rounded-lg border-0">
                <div className="absolute top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-secondary text-secondary-foreground px-4 py-1 rounded-full text-sm font-bold">RUNNER-UP</span>
                  <div>準優勝</div>
                </div>
                <div className="mt-8 mb-6">
                  <Sword className="h-16 w-16 mx-auto text-secondary animate-mystical-pulse" />
                </div>
                <h4 className="text-xl font-bold mb-2">Demon Hunter</h4>
                <div>デーモンハンター</div>
                <p className="text-sm text-muted-foreground mb-6">of Builder Base Hackathon 2024</p>
                <div>ビルダーベース・ハッカソン2024の</div>
                <div className="text-4xl font-bold text-secondary">₹15,000</div>
                <div>₹15,000</div>
              </Card>
            </div>

            <div className="relative group cursor-blade">
              <div className="absolute -inset-1 bg-gradient-to-r from-accent to-primary rounded-lg blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
              <Card className="relative bg-card/90 backdrop-blur-sm p-8 rounded-lg border-0"></Card>
                <div className="absolute top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-accent text-accent-foreground px-4 py-1 rounded-full text-sm font-bold">3RD PLACE</span>
                  <div>3位</div>
                </div>
                <div className="mt-8 mb-6">
                  <Flame className="h-16 w-16 mx-auto text-accent animate-mystical-pulse" />
                </div>
                <h4 className="text-xl font-bold mb-2">Rising Slayer</h4>
                <div>ライジング・スレイヤー</div>
                <p className="text-sm text-muted-foreground mb-6">of Builder Base Hackathon 2024</p>
                <div>ビルダーベース・ハッカソン2024の</div>
                <div className="text-4xl font-bold text-accent">₹10,000</div>
                <div>₹10,000</div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Sponsors */}
      <section id="sponsors" className="py-20 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl font-cinzel font-bold mb-16 demon-text">Our Sponsors</h2>
          <div>スポンサー</div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
            <Card className="p-8 hover-blade cursor-blade bg-card/50 backdrop-blur-sm group">
              <div className="h-16 flex items-center justify-center"></div>
                <div className="text-2xl font-bold text-primary group-hover:scale-110 transition-transform">Sponsor 1</div>
                <div>スポンサー1</div>
              </div>
            </Card>
            <Card className="p-8 hover-blade cursor-blade bg-card/50 backdrop-blur-sm group">
              <div className="h-16 flex items-center justify-center">
                <div className="text-2xl font-bold text-secondary group-hover:scale-110 transition-transform">Sponsor 2</div>
                <div>スポンサー2</div>
              </div>
            </Card>
            <Card className="p-8 hover-blade cursor-blade bg-card/50 backdrop-blur-sm group">
              <div className="h-16 flex items-center justify-center"></div>
                <div className="text-2xl font-bold text-accent group-hover:scale-110 transition-transform">Sponsor 3</div>
                <div>スポンサー3</div>
              </div>
            </Card>
            <Card className="p-8 hover-blade cursor-blade bg-card/50 backdrop-blur-sm group">
              <div className="h-16 flex items-center justify-center">
                <div className="text-2xl font-bold text-primary group-hover:scale-110 transition-transform">Sponsor 4</div>
                <div>スポンサー4</div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Team */}
      <section id="team" className="py-20 px-4 bg-muted/20">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-cinzel font-bold text-center mb-6 demon-text">Meet The Team</h2>
          <div>チーム紹介</div>
          <p className="text-center text-xl text-primary mb-16">Codeslayer Hackathon 2024</p>
          <div>Codeslayer Hackathon 2025</div>

          <div className="grid md:grid-cols-4 gap-8">
            <Card className="p-6 text-center hover-blade cursor-blade bg-card/50 backdrop-blur-sm group">
              <div className="relative mb-6">
                <div className="w-24 h-24 mx-auto rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
                  <Users className="h-12 w-12 text-white" />
                </div>
                <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-primary rounded-full flex items-center justify-center">
                  <span className="text-white text-xs">✓</span>
                  <div>✓</div>
                </div>
              </div>
              <h3 className="text-xl font-bold mb-2 text-primary">Team Lead</h3>
              <div>チームリーダー</div>
              <div className="mb-4">
                <span className="bg-primary/20 text-primary px-3 py-1 rounded-full text-sm">Lead Organizer</span>
                <div>主催者代表</div>
              </div>
              <p className="text-muted-foreground text-sm">Leading the charge in Web3 innovation</p>
              <div>Web3イノベーションを牽引</div>
            </Card>

            <Card className="p-6 text-center hover-blade cursor-blade bg-card/50 backdrop-blur-sm group">
              <div className="relative mb-6">
                <div className="w-24 h-24 mx-auto rounded-full bg-gradient-to-br from-secondary to-accent flex items-center justify-center">
                  <Users className="h-12 w-12 text-white" />
                </div>
                <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-secondary rounded-full flex items-center justify-center">
                  <span className="text-white text-xs">✓</span>
                  <div>✓</div>
                </div>
              </div>
              <h3 className="text-xl font-bold mb-2 text-secondary">Tech Lead</h3>
              <div>テックリード</div>
              <div className="mb-4">
                <span className="bg-secondary/20 text-secondary px-3 py-1 rounded-full text-sm">Lead Developer</span>
                <div>リード開発者</div>
              </div>
              <p className="text-muted-foreground text-sm">Building the future of decentralized apps</p>
              <div>分散型アプリの未来を構築</div>
            </Card>

            <Card className="p-6 text-center hover-blade cursor-blade bg-card/50 backdrop-blur-sm group">
              <div className="relative mb-6">
                <div className="w-24 h-24 mx-auto rounded-full bg-gradient-to-br from-accent to-primary flex items-center justify-center">
                  <Users className="h-12 w-12 text-white" />
                </div>
                <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-accent rounded-full flex items-center justify-center">
                  <span className="text-white text-xs">✓</span>
                  <div>✓</div>
                </div>
              </div>
              <h3 className="text-xl font-bold mb-2 text-accent">Community Manager</h3>
              <div>コミュニティマネージャー</div>
              <div className="mb-4">
                <span className="bg-accent/20 text-accent px-3 py-1 rounded-full text-sm">Lead Organizer</span>
                <div>主催者代表</div>
              </div>
              <p className="text-muted-foreground text-sm">Fostering the Web3 builder community</p>
              <div>Web3ビルダーコミュニティの育成</div>
            </Card>

            <Card className="p-6 text-center hover-blade cursor-blade bg-card/50 backdrop-blur-sm group">
              <div className="relative mb-6">
                <div className="w-24 h-24 mx-auto rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
                  <Users className="h-12 w-12 text-white" />
                </div>
                <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-primary rounded-full flex items-center justify-center">
                  <span className="text-white text-xs">✓</span>
                  <div>✓</div>
                </div>
              </div>
              <h3 className="text-xl font-bold mb-2 text-primary">Design Lead</h3>
              <div>デザインリード</div>
              <div className="mb-4">
                <span className="bg-primary/20 text-primary px-3 py-1 rounded-full text-sm">Lead Designer</span>
                <div>リードデザイナー</div>
              </div>
              <p className="text-muted-foreground text-sm">Crafting beautiful Web3 experiences</p>
              <div>美しいWeb3体験を創造</div>
            </Card>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section id="faqs" className="py-20 px-4">
          <div className="space-y-4">
            <Card className="p-6 hover-blade cursor-blade bg-card/50 backdrop-blur-sm">
              <h3 className="text-xl font-semibold text-primary mb-3">What is Builder Base Hackathon 2024?</h3>
              <div>ビルダーベース・ハッカソン2024とは？</div>
              <p className="text-muted-foreground">A 3-day intensive Web3 hackathon where developers, designers, and innovators come together to build the future of decentralized applications.</p>
              <div>開発者、デザイナー、イノベーターが集い、分散型アプリの未来を創造する3日間の集中Web3ハッカソンです。</div>
            </Card>

            <Card className="p-6 hover-blade cursor-blade bg-card/50 backdrop-blur-sm">
              <h3 className="text-xl font-semibold text-primary mb-3">Who can participate?</h3>
              <div>誰が参加できますか？</div>
              <p className="text-muted-foreground">Anyone with a passion for Web3 development! From beginners to experts, we welcome all skill levels. Teams of 2-4 members are encouraged.</p>
              <div>Web3開発に情熱がある方なら誰でも参加可能です！初心者から上級者まで、すべてのスキルレベルを歓迎します。2～4人のチーム参加を推奨します。</div>
            </Card>

            <Card className="p-6 hover-blade cursor-blade bg-card/50 backdrop-blur-sm">
              <h3 className="text-xl font-semibold text-primary mb-3">Can beginners participate in the hackathon?</h3>
              <div>初心者でもハッカソンに参加できますか？</div>
              <p className="text-muted-foreground">Absolutely! We encourage beginners to join. Our mentors and workshops are designed to help newcomers learn and build alongside experienced developers.</p>
              <div>もちろんです！初心者の参加も大歓迎です。メンターやワークショップが、経験豊富な開発者と一緒に学び、作ることをサポートします。</div>
            </Card>

            <Card className="p-6 hover-blade cursor-blade bg-card/50 backdrop-blur-sm">
              <h3 className="text-xl font-semibold text-primary mb-3">What does the prize pool mean?</h3>
              <div>賞金総額とは何ですか？</div>
              <p className="text-muted-foreground">The prize pool represents the total rewards distributed among winners across different tracks and categories, including cash prizes, mentorship opportunities, and exclusive Builder Base NFTs.</p>
              <div>賞金総額とは、現金賞、メンタリング機会、限定ビルダーベースNFTなど、さまざまなトラックやカテゴリーの受賞者に分配される総報酬のことです。</div>
            </Card>

            <Card className="p-6 hover-blade cursor-blade bg-card/50 backdrop-blur-sm">
              <h3 className="text-xl font-semibold text-primary mb-3">How do I register for Builder Base Hackathon 2024?</h3>
              <div>ビルダーベース・ハッカソン2024への登録方法は？</div>
              <p className="text-muted-foreground">Click the "Enter the Battle" button above to access our registration form. Early registration is recommended as spots are limited!</p>
              <div>上記の「バトルに参加する」ボタンをクリックして登録フォームにアクセスしてください。定員に限りがあるため、早めの登録をおすすめします！</div>
            </Card>
          </div>
              <p className="text-muted-foreground">Click the "Enter the Battle" button above to access our registration form. Early registration is recommended as spots are limited!</p>
              <div>上記の「バトルに参加する」ボタンをクリックして登録フォームにアクセスしてください。定員に限りがあるため、早めの登録をおすすめします！</div>
            </Card>
          </div>

          <div className="text-center mt-12">
            <Button className="bg-accent hover:bg-accent/90 text-accent-foreground px-8 py-4 cursor-blade">
              More Questions? Ask us on Discord
            </Button>
            <div>他に質問がありますか？Discordでお問い合わせください</div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-card/80 backdrop-blur-md py-16 px-4 border-t border-border">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-12">
            <div className="text-center md:text-left">
              <div className="flex items-center justify-center md:justify-start space-x-3 mb-6">
                <Sword className="h-8 w-8 text-primary animate-mystical-pulse" />
                <span className="font-cinzel font-bold text-2xl demon-text">Devsphere</span>
                <div>デブスフィア</div>
              </div>
              <p className="text-muted-foreground mb-4">Forged in fire. Powered by code.</p>
              <div>炎で鍛えられ、コードで動く。</div>
              <p className="text-sm text-muted-foreground">We are the battleground.</p>
              <div>私たちは戦いの舞台です。</div>
            </div>

            <div>
              <h4 className="font-semibold text-accent mb-4">Quick Links</h4>
              <div>クイックリンク</div>
              <div className="space-y-2">
                <a href="#home" className="block text-muted-foreground hover:text-primary transition-colors cursor-blade">Home</a>
                <div>ホーム</div>
                <a href="#about" className="block text-muted-foreground hover:text-primary transition-colors cursor-blade">About</a>
                <div>概要</div>
                <a href="#timeline" className="block text-muted-foreground hover:text-primary transition-colors cursor-blade">Timeline</a>
                <div>タイムライン</div>
                <a href="#tracks" className="block text-muted-foreground hover:text-primary transition-colors cursor-blade">Tracks</a>
                <div>トラック</div>
                <a href="#team" className="block text-muted-foreground hover:text-primary transition-colors cursor-blade">Team</a>
                <div>チーム</div>
                <a href="#faqs" className="block text-muted-foreground hover:text-primary transition-colors cursor-blade">FAQs</a>
                <div>よくある質問</div>
              </div>
            </div>

            <div>
              <h4 className="font-semibold text-accent mb-4">Contact</h4>
              <div>お問い合わせ</div>
              <div className="space-y-2 text-muted-foreground">
                <p className="text-sm">Location: TBA</p>
                <div>場所：後日発表</div>
                <p className="text-sm">Email: devsphere.dev.in</p>
                <div>メール：devsphere.dev.in</div>
                <p className="text-sm">Phone: (+91) 9876543210</p>
                <div>電話：（+91）9876543210</div>
              </div>
            </div>

            <div>
              <h4 className="font-semibold text-accent mb-4">Join Discord</h4>
              <div>Discordに参加</div>
              <Button
                asChild
                className="w-full bg-primary hover:bg-primary/90 cursor-blade mb-4"
              >
                <a
                  href="https://discord.gg/YOUR_DISCORD_INVITE"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Connect Now
                </a>
              </Button>
              <div>今すぐ参加</div>
              <div className="flex justify-center space-x-4">
                <div className="w-10 h-10 bg-primary/20 rounded-full flex items-center justify-center hover:bg-primary/40 transition-colors cursor-blade">
                  <span className="text-primary font-bold">X</span>
                  <div>X</div>
                </div>
                <div className="w-10 h-10 bg-secondary/20 rounded-full flex items-center justify-center hover:bg-secondary/40 transition-colors cursor-blade">
                  <span className="text-secondary font-bold">IG</span>
                  <div>インスタグラム</div>
                </div>
                <div className="w-10 h-10 bg-accent/20 rounded-full flex items-center justify-center hover:bg-accent/40 transition-colors cursor-blade">
                  <span className="text-accent font-bold">LI</span>
                  <div>リンクトイン</div>
                </div>
              </div>
            </div>
          </div>

          <div className="border-t border-border pt-8 text-center">
            <p className="text-sm text-muted-foreground">© 2025 Code Slayer Hackathon. Built with ❤️ by Developer Team</p>
            <div>© 2025 コードスレイヤー・ハッカソン。開発チームが心を込めて作りました。</div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
