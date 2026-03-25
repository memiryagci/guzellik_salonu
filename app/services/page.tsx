import { Navbar } from "@/components/Navbar"
import { Footer } from "@/components/Footer"
import { ServiceCard } from "@/components/ServiceCard"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

const services = [
  {
    title: "Lazer Epilasyon",
    description: "En son teknoloji cihazlarla kalıcı ve ağrısız lazer epilasyon uygulamaları. Tüm cilt tiplerine uygun, FDA onaylı cihazlarımızla güvenli bir deneyim.",
    image: "/images/lazer.jpg",
    href: "/services/lazer-epilasyon",
  },
  {
    title: "Medikal Cilt Bakımı",
    description: "Cildinize özel profesyonel bakım protokolleri ile genç ve sağlıklı bir cilt. Dermatolojik analizle kişiselleştirilmiş tedavi planları.",
    image: "/images/cilt-bakimi.jpg",
    href: "/services/medikal-cilt-bakimi",
  },
  {
    title: "Bölgesel İncelme",
    description: "Hedefli teknolojilerle istenmeyen yağlardan kurtulun, formunuza kavuşun. Non-invaziv yöntemlerle güvenli zayıflama.",
    image: "/images/bolgesel-incelme.jpg",
    href: "/services/bolgesel-incelme",
  },
  {
    title: "Günlük Makyaj",
    description: "Doğal görünümlü günlük makyaj uygulamaları ile her an taze ve bakımlı görünün. Kaş-göz ve yüz hatlarınıza uygun şekilde tamamlanır.",
    image: "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?w=600&h=400&fit=crop",
    href: "/services/kalici-makyaj",
  },
  {
    title: "Kirpik Lifting",
    description: "Doğal kirpiklerinizi kaldırarak daha etkileyici bakışlara sahip olun. Uzun süre kalıcı, bakım gerektirmeyen sonuçlar.",
    image: "/images/kirpik-lifting.jpg",
    href: "/services/kirpik-lifting",
  },
  {
    title: "Protez Tırnak",
    description: "Profesyonel tırnak bakımı ve estetik protez tırnak uygulamaları. Jel, akrilik ve nail art seçenekleri.",
    image: "/images/protez-tirnak.jpg",
    href: "/services/protez-tirnak",
  },
]

export default function ServicesPage() {
  return (
    <div className="min-h-screen">
      <Navbar />
      
      <main>
        {/* Hero Section */}
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
                Hizmetlerimiz
              </span>
              <h1 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-6 text-balance">
                Profesyonel Güzellik Hizmetleri
              </h1>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Modern teknoloji ve uzman kadromuzla güzelliğinizi ortaya çıkaracak kapsamlı hizmetler sunuyoruz. 
                Her hizmetimiz, alanında uzman personelimiz tarafından titizlikle uygulanmaktadır.
              </p>
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service) => (
                <ServiceCard key={service.href} {...service} />
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-primary">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-primary-foreground mb-4 text-balance">
                Hangi Hizmeti Seçeceğinizden Emin Değil misiniz?
              </h2>
              <p className="text-primary-foreground/80 text-lg mb-8 leading-relaxed">
                Ücretsiz danışmanlık hizmetimizle size en uygun tedavi planını birlikte belirleyelim.
              </p>
              <Button asChild size="lg" variant="secondary" className="rounded-full px-8 bg-background text-primary hover:bg-background/90">
                <Link href="/contact">
                  Ücretsiz Danışmanlık Al
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
