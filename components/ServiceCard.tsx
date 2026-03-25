import Link from "next/link"
import Image from "next/image"
import { ArrowRight } from "lucide-react"

interface ServiceCardProps {
  title: string
  description: string
  image: string
  href: string
}

export function ServiceCard({ title, description, image, href }: ServiceCardProps) {
  return (
    <Link href={href} className="group block">
      <article className="bg-card rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 border border-border/50">
        {/* Image */}
        <div className="relative h-56 overflow-hidden">
          <Image
            src={image}
            alt={title}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-foreground/20 to-transparent" />
        </div>

        {/* Content */}
        <div className="p-6">
          <h3 className="font-serif text-xl font-semibold text-card-foreground mb-2 group-hover:text-primary transition-colors">
            {title}
          </h3>
          <p className="text-muted-foreground text-sm leading-relaxed mb-4">
            {description}
          </p>
          <div className="flex items-center text-primary text-sm font-medium">
            <span>Detayları Gör</span>
            <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
          </div>
        </div>
      </article>
    </Link>
  )
}
