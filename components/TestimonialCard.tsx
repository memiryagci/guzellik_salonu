import { Star, Quote } from "lucide-react"

interface TestimonialCardProps {
  name: string
  comment: string
  rating: number
  service: string
}

export function TestimonialCard({ name, comment, rating, service }: TestimonialCardProps) {
  return (
    <article className="bg-card rounded-2xl p-6 shadow-sm border border-border/50 relative">
      {/* Quote Icon */}
      <div className="absolute top-4 right-4 text-primary/20">
        <Quote className="h-10 w-10" />
      </div>

      {/* Rating */}
      <div className="flex gap-1 mb-4">
        {Array.from({ length: 5 }).map((_, i) => (
          <Star
            key={i}
            className={`h-4 w-4 ${i < rating ? "fill-primary text-primary" : "fill-muted text-muted"}`}
          />
        ))}
      </div>

      {/* Comment */}
      <p className="text-card-foreground leading-relaxed mb-4">
        &ldquo;{comment}&rdquo;
      </p>

      {/* Author */}
      <div className="pt-4 border-t border-border">
        <div className="font-medium text-card-foreground">{name}</div>
        <div className="text-sm text-muted-foreground">{service}</div>
      </div>
    </article>
  )
}
