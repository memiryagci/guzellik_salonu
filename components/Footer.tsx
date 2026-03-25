import Link from "next/link"
import Image from "next/image"
import { Instagram, Phone, MapPin, Clock } from "lucide-react"

const quickLinks = [
  { href: "/services", label: "Hizmetler" },
  { href: "/about", label: "Hakkımızda" },
  { href: "/contact", label: "İletişim" },
]

const services = [
  { href: "/services/lazer-epilasyon", label: "Lazer Epilasyon" },
  { href: "/services/medikal-cilt-bakimi", label: "Medikal Cilt Bakımı" },
  { href: "/services/bolgesel-incelme", label: "Bölgesel İncelme" },
  { href: "/services/kalici-makyaj", label: "Günlük Makyaj" },
  { href: "/services/kirpik-lifting", label: "Kirpik Lifting" },
]

export function Footer() {
  return (
    <footer className="bg-foreground text-background">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="space-y-4">
            <Link href="/" className="flex items-center gap-2">
              <Image 
                src="/images/logo.png" 
                alt="Gül Aksu Güzellik Salonu Logo" 
                width={48} 
                height={48}
                className="h-12 w-auto"
              />
              <span className="font-serif text-lg text-background">Gül Aksu Güzellik Salonu</span>
            </Link>
            <p className="text-background/70 text-sm leading-relaxed">
              Profesyonel ekibimiz ve modern teknolojilerimizle güzelliğinize değer katıyoruz.
            </p>
            <div className="flex gap-4">
              <a
                href="https://www.instagram.com/gulaksuguzelliksalonu/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-background/10 hover:bg-primary transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-serif text-lg font-semibold mb-4">Hızlı Bağlantılar</h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-background/70 hover:text-primary transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-serif text-lg font-semibold mb-4">Hizmetlerimiz</h3>
            <ul className="space-y-3">
              {services.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-background/70 hover:text-primary transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-serif text-lg font-semibold mb-4">İletişim</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                <span className="text-background/70 text-sm">
                  Abdurahman Gazi Mah. Sevenler Cad. Samyeli Sokak No: 9-11 A, Sancaktepe / İstanbul
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-primary flex-shrink-0" />
                <a href="tel:+905307456058" className="text-background/70 hover:text-primary transition-colors text-sm">
                  0530 745 60 58
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Clock className="h-5 w-5 text-primary flex-shrink-0" />
                <span className="text-background/70 text-sm">
                  Pzt-Cmt: 09:00 - 18:00
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-background/10 mt-12 pt-8 text-center">
          <p className="text-background/50 text-sm">
            © 2024 Gül Aksu Güzellik Salonu. Tüm hakları saklıdır.
          </p>
        </div>
      </div>
    </footer>
  )
}
