import { Navbar } from "@/components/Navbar"
import { Footer } from "@/components/Footer"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowRight, Award, Users, Heart, Sparkles, Calendar } from "lucide-react"

const values = [
  {
    icon: Award,
    title: "Profesyonellik",
    description: "Alanında uzman ve sertifikalı personelimizle en yüksek standartlarda hizmet sunuyoruz.",
  },
  {
    icon: Heart,
    title: "Müşteri Odaklılık",
    description: "Her müşterimizin ihtiyaçlarını anlıyor ve kişiselleştirilmiş çözümler sunuyoruz.",
  },
  {
    icon: Sparkles,
    title: "Kalite",
    description: "Uluslararası standartlarda ürün ve cihazlar kullanarak en iyi sonuçları elde ediyoruz.",
  },
  {
    icon: Users,
    title: "Güven",
    description: "Müşterilerimizle kurduğumuz güven bağı ile güvenilirliğimizi kanıtladık.",
  },
]

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      <Navbar />
      
      <main>
        {/* Hero Section */}
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
                Hakkımızda
              </span>
              <h1 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-6 text-balance">
                Gül Aksu Güzellik Salonu
              </h1>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16 bg-primary">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-2 gap-8 max-w-2xl mx-auto">
              <div className="text-center">
                <div className="flex items-center justify-center gap-2 mb-2">
                  <Calendar className="h-6 w-6 text-primary-foreground/70" />
                  <div className="font-serif text-3xl md:text-4xl font-bold text-primary-foreground">
                    21.08.2022
                  </div>
                </div>
                <div className="text-primary-foreground/70 text-sm">
                  Kuruluş Tarihi
                </div>
              </div>
              <div className="text-center">
                <div className="flex items-center justify-center gap-2 mb-2">
                  <Users className="h-6 w-6 text-primary-foreground/70" />
                  <div className="font-serif text-3xl md:text-4xl font-bold text-primary-foreground">
                    4
                  </div>
                </div>
                <div className="text-primary-foreground/70 text-sm">
                  Çalışan
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Main Content Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <div className="prose prose-lg text-muted-foreground leading-relaxed space-y-6">
                <p>
                  Gül Aksu Güzellik Salonu, modern güzellik anlayışını profesyonel hizmetle birleştiren bir bakım merkezidir. Kurulduğumuz günden bu yana amacımız; müşterilerimize güvenli, hijyenik ve konforlu bir ortamda en kaliteli hizmeti sunmaktır.
                </p>
                <p>
                  Saç tasarımı, protez tırnak, kalıcı makyaj, lazer epilasyon ve bölgesel zayıflama gibi birçok alanda uzman kadromuzla, kişiye özel bakım ve güzellik çözümleri sunuyoruz. Teknolojiyi yakından takip eden merkezimizde, güncel ve güvenilir cihazlarla çalışarak her müşterimizin kendini daha iyi ve daha özgüvenli hissetmesini hedefliyoruz.
                </p>
                <p>
                  Gül Aksu Güzellik Salonu olarak inanıyoruz ki;
                </p>
                <p className="font-serif text-xl text-foreground font-semibold text-center py-4 border-l-4 border-primary pl-6 bg-primary/5 rounded-r-lg">
                  Güzellik, doğru dokunuşlarla ortaya çıkan bir ışıltıdır.
                </p>
                <p className="text-center">
                  Biz de bu ışıltıyı ortaya çıkarmak için buradayız.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-2xl mx-auto mb-12">
              <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
                Değerlerimiz
              </span>
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-4 text-balance">
                Bizi Biz Yapan Değerler
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                Her adımımızda bu değerleri yaşatıyor ve hizmet kalitemizin temelini oluşturuyoruz.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value) => (
                <div key={value.title} className="text-center p-6 rounded-2xl bg-card border border-border/50 hover:shadow-lg transition-shadow">
                  <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-primary/10 text-primary mb-4">
                    <value.icon className="h-7 w-7" />
                  </div>
                  <h3 className="font-serif text-lg font-semibold text-card-foreground mb-2">
                    {value.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {value.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-primary">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-primary-foreground mb-4 text-balance">
                Güzellik Yolculuğunuza Başlayın
              </h2>
              <p className="text-primary-foreground/80 text-lg mb-8 leading-relaxed">
                Ücretsiz danışmanlık için hemen randevu alın ve uzman ekibimizle tanışın.
              </p>
              <Button asChild size="lg" variant="secondary" className="rounded-full px-8 bg-background text-primary hover:bg-background/90">
                <Link href="/contact">
                  Randevu Al
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
