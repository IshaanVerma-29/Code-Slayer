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
            <br />コードスレイヤーハッカソン2025
          </h1>
          <h2 className="text-2xl md:text-4xl font-semibold mb-8 text-foreground animate-scroll-reveal">
            Demon Slayer: Kimetsu no Yaiba
            <br />鬼滅の刃
          </h2>
          <p className="text-lg md:text-xl mb-8 text-muted-foreground max-w-2xl mx-auto animate-scroll-reveal">
            Unleash your coding prowess in the ultimate Web3 hackathon. Build, innovate, and claim your place among the legends.
            <br />究極のWeb3ハッカソンであなたのプログラミング力を解放しよう。構築し、革新し、伝説の中でのあなたの地位を確立せよ。
          </p>
          <Button size="lg" className="flame-bg hover-blade font-semibold px-8 py-4 cursor-blade">
            <Sword className="mr-2 h-5 w-5" />
            Enter the Battle
            <br />戦いに参加する
          </Button>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-cinzel font-bold text-center mb-16 demon-text">
            About the Hackathon
            <br />ハッカソンについて
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="p-6 hover-blade cursor-blade bg-card/50 backdrop-blur-sm">
              <h3 className="text-xl font-semibold text-primary mb-3">
                What is CodeSlayer Hackathon 2025?
                <br />CodeSlayerハッカソン2025とは何ですか？
              </h3>
              <p className="text-muted-foreground">
                A 3-day intensive Web3 hackathon where developers, designers, and innovators come together to build the future of decentralized applications.
                <br />開発者、デザイナー、イノベーターが集まり、分散アプリケーションの未来を構築する3日間の集中的なWeb3ハッカソンです。
              </p>
            </Card>

            <Card className="p-6 hover-blade cursor-blade bg-card/50 backdrop-blur-sm">
              <h3 className="text-xl font-semibold text-primary mb-3">
                Who can participate?
                <br />誰が参加できますか？
              </h3>
              <p className="text-muted-foreground">
                Anyone with a passion for Web3 development! From beginners to experts, we welcome all skill levels. Teams of 2-4 members are encouraged.
                <br />Web3開発に情熱を持つ誰でも！初心者からエキスパートまで、すべてのスキルレベルを歓迎します。2〜4名のチームが推奨されます。
              </p>
            </Card>

            <Card className="p-6 hover-blade cursor-blade bg-card/50 backdrop-blur-sm">
              <h3 className="text-xl font-semibold text-primary mb-3">
                Can beginners participate in the hackathon?
                <br />初心者もハッカソンに参加できますか？
              </h3>
              <p className="text-muted-foreground">
                Absolutely! We encourage beginners to join. Our mentors and workshops are designed to help newcomers learn and build alongside experienced developers.
                <br />もちろんです！初心者の参加を歓迎しています。メンターとワークショップは、新参者が経験豊富な開発者と一緒に学び、構築できるように設計されています。
              </p>
            </Card>

            <Card className="p-6 hover-blade cursor-blade bg-card/50 backdrop-blur-sm">
              <h3 className="text-xl font-semibold text-primary mb-3">
                What does the prize pool mean?
                <br />賞金プールとは何を意味しますか？
              </h3>
              <p className="text-muted-foreground">
                The prize pool represents the total rewards distributed among winners across different tracks and categories, including cash prizes, mentorship opportunities, and exclusive Builder Base NFTs.
                <br />賞金プールは、異なるトラックとカテゴリーの勝者に配布される総報酬を表し、現金賞、メンターシップの機会、限定ビルダーベースNFTが含まれます。
              </p>
            </Card>

            <Card className="p-6 hover-blade cursor-blade bg-card/50 backdrop-blur-sm">
              <h3 className="text-xl font-semibold text-primary mb-3">
                How do I register for Builder Base Hackathon 2024?
                <br />ビルダーベースハッカソン2024にはどうやって登録しますか？
              </h3>
              <p className="text-muted-foreground">
                Click the "Enter the Battle" button above to access our registration form. Early registration is recommended as spots are limited!
                <br />上記の「戦いに参加する」ボタンをクリックして登録フォームにアクセスしてください。参加枠が限られているため、早期登録をお勧めします！
              </p>
            </Card>
          </div>

          <div className="text-center mt-12">
            <Button className="bg-accent hover:bg-accent/90 text-accent-foreground px-8 py-4 cursor-blade">
              More Questions? Ask us on Discord
              <br />他にご質問は？Discordでお聞きください
            </Button>
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
              </div>
              <p className="text-muted-foreground mb-4">
                Forged in fire. Powered by code.
                <br />炎で鍛えられ、コードで動く。
              </p>
              <p className="text-sm text-muted-foreground">
                We are the battleground.
                <br />我々が戦場だ。
              </p>
            </div>

            <div>
              <h4 className="font-semibold text-accent mb-4">
                Quick Links
                <br />クイックリンク
              </h4>
              <div className="space-y-2">
                <a href="#home" className="block text-muted-foreground hover:text-primary transition-colors cursor-blade">
                  Home
                  <br />ホーム
                </a>
                <a href="#about" className="block text-muted-foreground hover:text-primary transition-colors cursor-blade">
                  About
                  <br />概要
                </a>
                <a href="#timeline" className="block text-muted-foreground hover:text-primary transition-colors cursor-blade">
                  Timeline
                  <br />タイムライン
                </a>
                <a href="#tracks" className="block text-muted-foreground hover:text-primary transition-colors cursor-blade">
                  Tracks
                  <br />トラック
                </a>
                <a href="#team" className="block text-muted-foreground hover:text-primary transition-colors cursor-blade">
                  Team
                  <br />チーム
                </a>
                <a href="#faqs" className="block text-muted-foreground hover:text-primary transition-colors cursor-blade">
                  FAQs
                  <br />よくある質問
                </a>
              </div>
            </div>

            <div>
              <h4 className="font-semibold text-accent mb-4">
                Contact
                <br />お問い合わせ
              </h4>
              <div className="space-y-2 text-muted-foreground">
                <p className="text-sm">
                  Location: TBA
                  <br />場所：TBA
                </p>
                <p className="text-sm">
                  Email: devsphere.dev.in
                  <br />メール：devsphere.dev.in
                </p>
                <p className="text-sm">
                  Phone: (+91) 9876543210
                  <br />電話：(+91) 9876543210
                </p>
              </div>
            </div>

            <div>
              <h4 className="font-semibold text-accent mb-4">
                Join Discord
                <br />Discordに参加
              </h4>
              <Button className="w-full bg-primary hover:bg-primary/90 cursor-blade mb-4">
                Connect Now
                <br />今すぐ接続
              </Button>
              <div className="flex justify-center space-x-4">
                <div className="w-10 h-10 bg-primary/20 rounded-full flex items-center justify-center hover:bg-primary/40 transition-colors cursor-blade">
                  <span className="text-primary font-bold">X</span>
                </div>
                <div className="w-10 h-10 bg-secondary/20 rounded-full flex items-center justify-center hover:bg-secondary/40 transition-colors cursor-blade">
                  <span className="text-secondary font-bold">IG</span>
                </div>
                <div className="w-10 h-10 bg-accent/20 rounded-full flex items-center justify-center hover:bg-accent/40 transition-colors cursor-blade">
                  <span className="text-accent font-bold">LI</span>
                </div>
              </div>
            </div>
          </div>

          <div className="border-t border-border pt-8 text-center">
            <p className="text-sm text-muted-foreground">
              © 2025 Code Slayer Hackathon. Built with ❤️ by Developer Team
              <br />© 2025 コードスレイヤーハッカソン。開発者チームが❤️で構築
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;