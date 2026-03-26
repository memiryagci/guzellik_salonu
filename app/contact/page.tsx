import { Navbar } from "@/components/Navbar"
import { Footer } from "@/components/Footer"
import { Phone, MapPin, Clock, MessageCircle, Instagram, Mail } from "lucide-react"
import { Button } from "@/components/ui/button"

const contactInfo = [
  {
    icon: MapPin,
    title: "Adres",
    content: "Abdurahman Gazi Mah. Sevenler Cad. Samyeli Sokak No: 9-11 A, Sancaktepe / İstanbul",
    href: "https://maps.app.goo.gl/Ug919d7D1cnritkT7",
  },
  {
    icon: Mail,
    title: "E-posta",
    content: "gul@gulaksuguzelliksalonu.com.tr",
    href: "mailto:gul@gulaksuguzelliksalonu.com.tr",
  },
  {
    icon: Mail,
    title: "E-posta",
    content: "info@gulaksuguzelliksalonu.com",
    href: "mailto:info@gulaksuguzelliksalonu.com",
  },
  {
    icon: Phone,
    title: "Telefon",
    content: "0530 745 60 58",
    href: "tel:+905307456058",
  },
  {
    icon: Clock,
    title: "Çalışma Saatleri",
    content: "Pazartesi - Cumartesi: 09:00 - 18:00",
    href: null,
  },
]

export default function ContactPage() {
  return (
    <div className="min-h-screen">
      <Navbar />
      
      <main>
        {/* Hero Section */}
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
                İletişim
              </span>
              <h1 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-6 text-balance">
                Bize Ulaşın
              </h1>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Randevu almak, sorularınızı sormak veya daha fazla bilgi edinmek için 
                bizimle iletişime geçin. Size yardımcı olmaktan mutluluk duyarız.
              </p>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              {/* Contact Info */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
                {contactInfo.map((info) => (
                  <div key={info.href ?? info.title} className="flex flex-col items-center text-center gap-4 p-6 rounded-2xl bg-card border border-border/50">
                    <div className="p-3 rounded-full bg-primary/10 text-primary">
                      <info.icon className="h-6 w-6" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-card-foreground mb-1 text-lg">
                        {info.title}
                      </h3>
                      {info.href ? (
                        <a 
                          href={info.href}
                          target={info.href.startsWith("http") ? "_blank" : undefined}
                          rel={info.href.startsWith("http") ? "noopener noreferrer" : undefined}
                          className="text-muted-foreground hover:text-primary transition-colors text-sm"
                        >
                          {info.content}
                        </a>
                      ) : (
                        <p className="text-muted-foreground text-sm">{info.content}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              {/* WhatsApp Button */}
              <div className="text-center mb-12">
                <p className="text-muted-foreground mb-4">
                  Hızlı randevu ve sorularınız için WhatsApp üzerinden bize ulaşabilirsiniz.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button 
                    asChild 
                    size="lg"
                    className="rounded-full bg-[#25D366] hover:bg-[#25D366]/90 text-white px-8"
                  >
                    <a 
                      href="https://wa.me/905307456058?text=Merhaba,%20randevu%20almak%20istiyorum." 
                      target="_blank" 
                      rel="noopener noreferrer"
                    >
                      <MessageCircle className="mr-2 h-5 w-5" />
                      WhatsApp ile İletişime Geçin
                    </a>
                  </Button>

                  <Button
                    asChild
                    size="lg"
                    variant="outline"
                    className="rounded-full px-8 border-primary/30 hover:bg-primary/5"
                  >
                    <a
                      href="https://www.instagram.com/gulaksuguzelliksalonu/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Instagram className="mr-2 h-5 w-5" />
                      Instagram
                    </a>
                  </Button>
                </div>
              </div>

              {/* Map */}
              <div>
                <h3 className="font-serif text-2xl font-semibold text-foreground mb-6 text-center">Konum</h3>
                <div className="aspect-video bg-muted rounded-2xl overflow-hidden border border-border/50 relative">
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
