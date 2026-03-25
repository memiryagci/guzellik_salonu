import { Navbar } from "@/components/Navbar"
import { Footer } from "@/components/Footer"
import { Hero } from "@/components/Hero"
import { ServiceCard } from "@/components/ServiceCard"
import { TestimonialCard } from "@/components/TestimonialCard"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Award, Heart, Users, ArrowRight, Phone, MapPin, Clock } from "lucide-react"

const services = [
  {
    title: "Lazer Epilasyon",
    description: "En son teknoloji cihazlarla kalıcı ve ağrısız lazer epilasyon uygulamaları.",
    image: "/images/lazer.jpg",
    href: "/services/lazer-epilasyon",
  },
  {
    title: "Medikal Cilt Bakımı",
    description: "Cildinize özel profesyonel bakım protokolleri ile genç ve sağlıklı bir cilt.",
    image: "/images/cilt-bakimi.jpg",
    href: "/services/medikal-cilt-bakimi",
  },
  {
    title: "Bölgesel İncelme",
    description: "Hedefli teknolojilerle istenmeyen yağlardan kurtulun, formunuza kavuşun.",
    image: "/images/bolgesel-incelme.jpg",
    href: "/services/bolgesel-incelme",
  },
  {
    title: "Günlük Makyaj",
    description: "Doğal görünümlü günlük makyaj uygulamaları ile gün boyu taze ve bakımlı görünün.",
    image: "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?w=600&h=400&fit=crop",
    href: "/services/kalici-makyaj",
  },
  {
    title: "Kirpik Lifting",
    description: "Doğal kirpiklerinizi kaldırarak daha etkileyici bakışlara sahip olun.",
    image: "/images/kirpik-lifting.jpg",
    href: "/services/kirpik-lifting",
  },
  {
    title: "Protez Tırnak",
    description: "Profesyonel tırnak bakımı ve estetik protez tırnak uygulamaları.",
    image: "/images/protez-tirnak.jpg",
    href: "/services/protez-tirnak",
  },
]

const testimonials = [
  {
    name: "Ayşe Yılmaz",
    comment: "Lazer epilasyon seanslarım için buraya geliyorum ve sonuçlardan çok memnunum. Profesyonel ekip ve temiz ortam.",
    rating: 5,
    service: "Lazer Epilasyon",
  },
  {
    name: "Elif Demir",
    comment: "Günlük makyaj yaptırdım ve sonuçlar gerçekten çok doğal görünüyor. Gün boyu taze kalması da çok hoşuma gitti. Kesinlikle tavsiye ederim.",
    rating: 5,
    service: "Günlük Makyaj",
  },
  {
    name: "Zeynep Kaya",
    comment: "Cilt bakımı seansları sonrası cildim gözle görülür şekilde iyileşti. Uzman kadro ve kaliteli ürünler kullanılıyor.",
    rating: 5,
    service: "Medikal Cilt Bakımı",
  },
]

const features = [
  {
    icon: Award,
    title: "Profesyonellik",
    description: "Alanında uzman ve sertifikalı personelimizle en iyi hizmeti sunuyoruz.",
  },
  {
    icon: Heart,
    title: "Kaliteli Ürünler",
    description: "Uluslararası standartlarda, cildinize en uygun ürünleri kullanıyoruz.",
  },
  {
    icon: Users,
    title: "Müşteri Memnuniyeti",
    description: "Binlerce mutlu müşterimizle güvenilir hizmet anlayışımızı kanıtladık.",
  },
]

export default function HomePage() {
  return (
    <div className="min-h-screen">
      <Navbar />
      
      <main>
        {/* Hero Section */}
        <Hero />

        {/* Services Section */}
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-2xl mx-auto mb-12">
              <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
                Hizmetlerimiz
              </span>
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-4 text-balance">
                Size Özel Güzellik Çözümleri
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                Modern teknoloji ve uzman kadromuzla güzelliğinizi ortaya çıkaracak kapsamlı hizmetler sunuyoruz.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service) => (
                <ServiceCard key={service.href} {...service} />
              ))}
            </div>

            <div className="text-center mt-12">
              <Button asChild variant="outline" size="lg" className="rounded-full px-8 border-primary/30 hover:bg-primary/5">
                <Link href="/services">
                  Tüm Hizmetleri Gör
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Why Choose Us Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-2xl mx-auto mb-12">
              <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
                Neden Biz?
              </span>
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-4 text-balance">
                Güzelliğiniz İçin En İyisi
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                Profesyonel ekibimiz ve modern teknolojilerimizle güzellik sektöründe fark yaratıyoruz.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {features.map((feature) => (
                <div key={feature.title} className="text-center p-8 rounded-2xl bg-card border border-border/50 hover:shadow-lg transition-shadow">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 text-primary mb-6">
                    <feature.icon className="h-8 w-8" />
                  </div>
                  <h3 className="font-serif text-xl font-semibold text-card-foreground mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-2xl mx-auto mb-12">
              <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
                Müşteri Yorumları
              </span>
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-4 text-balance">
                Müşterilerimiz Ne Diyor?
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                Mutlu müşterilerimizin deneyimlerini okuyun.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {testimonials.map((testimonial) => (
                <TestimonialCard key={testimonial.name} {...testimonial} />
              ))}
            </div>
          </div>
        </section>

        {/* Contact Preview Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
                  Bize Ulaşın
                </span>
                <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-6 text-balance">
                  Randevu ve Sorularınız İçin
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-8">
                  Size en uygun zamanda randevu almak veya sorularınızı sormak için bizimle iletişime geçin. 
                  Uzman ekibimiz size yardımcı olmaktan mutluluk duyacaktır.
                </p>

                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-full bg-primary/10 text-primary">
                      <MapPin className="h-5 w-5" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-1">Adres</h3>
                      <p className="text-muted-foreground">
                        Abdurahman Gazi Mah. Sevenler Cad. Samyeli Sokak No: 9-11 A, Sancaktepe / İstanbul
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-full bg-primary/10 text-primary">
                      <Phone className="h-5 w-5" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-1">Telefon</h3>
                      <a href="tel:+905307456058" className="text-muted-foreground hover:text-primary transition-colors">
                        0530 745 60 58
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-full bg-primary/10 text-primary">
                      <Clock className="h-5 w-5" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-1">Çalışma Saatleri</h3>
                      <p className="text-muted-foreground">
                        Pazartesi - Cumartesi: 09:00 - 18:00
                      </p>
                    </div>
                  </div>
                </div>

                <div className="mt-8">
                  <Button asChild className="rounded-full bg-primary hover:bg-primary/90">
                    <Link href="/contact">
                      İletişim Sayfasına Git
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </div>

              <div className="bg-muted/30 rounded-2xl p-8">
                <div className="aspect-video bg-border/50 rounded-xl relative">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3009.6427046178056!2d29.2283!3d41.0177!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14cac77c2f8d8b2d%3A0x4a28f447fda5e8dc!2sAbdurahman%20Gazi%2C%20Sevenler%20Cd.%20Samyeli%20Sk.%20No%3A9-11%2C%2034885%20Sancaktepe%2F%C4%B0stanbul!5e0!3m2!1str!2str!4v1700000000000!5m2!1str!2str"
                    className="absolute inset-0 w-full h-full"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Gül Aksu Güzellik Salonu Konum"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
