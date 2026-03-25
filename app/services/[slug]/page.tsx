import { Navbar } from "@/components/Navbar"
import { Footer } from "@/components/Footer"
import { Button } from "@/components/ui/button"
import { servicesData, getServiceBySlug } from "@/lib/services-data"
import Link from "next/link"
import Image from "next/image"
import { notFound } from "next/navigation"
import { ArrowRight, Check, Clock, CalendarDays, ArrowLeft } from "lucide-react"

export function generateStaticParams() {
  return servicesData.map((service) => ({
    slug: service.slug,
  }))
}

interface ServicePageProps {
  params: Promise<{ slug: string }>
}

export default async function ServicePage({ params }: ServicePageProps) {
  const { slug } = await params
  const service = getServiceBySlug(slug)

  if (!service) {
    notFound()
  }

  return (
    <div className="min-h-screen">
      <Navbar />
      
      <main>
        {/* Hero Section */}
        <section className="relative py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <Link 
              href="/services" 
              className="inline-flex items-center text-muted-foreground hover:text-primary transition-colors mb-6"
            >
              <ArrowLeft className="mr-2 h-4 w-4" />
              Tüm Hizmetler
            </Link>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
                  Hizmetlerimiz
                </span>
                <h1 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-6 text-balance">
                  {service.title}
                </h1>
                <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                  {service.fullDescription}
                </p>
                
                <div className="flex flex-wrap gap-6 mb-8">
                  <div className="flex items-center gap-2">
                    <Clock className="h-5 w-5 text-primary" />
                    <span className="text-sm text-muted-foreground">{service.duration}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CalendarDays className="h-5 w-5 text-primary" />
                    <span className="text-sm text-muted-foreground">{service.sessions}</span>
                  </div>
                </div>

                <Button asChild size="lg" className="rounded-full bg-primary hover:bg-primary/90">
                  <Link href="/contact">
                    Randevu Al
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>

              <div className="relative h-[400px] rounded-2xl overflow-hidden">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <h2 className="font-serif text-3xl font-bold text-foreground mb-8">
                Faydaları
              </h2>
              <div className="space-y-4">
                {service.benefits.map((benefit, index) => (
                  <div key={index} className="flex items-start gap-4 p-4 rounded-xl bg-card border border-border/50">
                    <div className="p-1 rounded-full bg-primary/10 text-primary">
                      <Check className="h-5 w-5" />
                    </div>
                    <p className="text-card-foreground">{benefit}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* How It Works Section */}
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <h2 className="font-serif text-3xl font-bold text-foreground mb-8">
                Nasıl Uygulanır?
              </h2>
              <div className="space-y-6">
                {service.howItWorks.map((step, index) => (
                  <div key={index} className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-semibold">
                      {index + 1}
                    </div>
                    <div className="pt-2">
                      <p className="text-foreground">{step}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Who Is It For Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <h2 className="font-serif text-3xl font-bold text-foreground mb-8">
                Kimler İçin Uygundur?
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {service.whoIsItFor.map((item, index) => (
                  <div key={index} className="flex items-start gap-3 p-4 rounded-xl bg-card border border-border/50">
                    <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <p className="text-card-foreground">{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-primary">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-primary-foreground mb-4 text-balance">
                {service.title} Hizmeti İçin Randevu Alın
              </h2>
              <p className="text-primary-foreground/80 text-lg mb-8 leading-relaxed">
                Uzman ekibimizle tanışın ve size özel tedavi planınızı oluşturalım.
              </p>
              <Button
                asChild
                size="lg"
                variant="secondary"
                className="rounded-full px-8 bg-background text-primary hover:bg-background/90"
              >
                <Link href="/contact">
                  Hemen Randevu Al
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
