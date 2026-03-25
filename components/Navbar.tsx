"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Menu, X, Phone, Instagram } from "lucide-react"
import { Button } from "@/components/ui/button"

const navLinks = [
  { href: "/", label: "Ana Sayfa" },
  { href: "/services", label: "Hizmetler" },
  { href: "/about", label: "Hakkımızda" },
  { href: "/contact", label: "İletişim" },
]

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <nav className="container mx-auto px-4">
        <div className="flex h-20 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <Image 
              src="/images/logo.png" 
              alt="Gül Aksu Güzellik Salonu Logo" 
              width={48} 
              height={48}
              className="h-12 w-auto"
            />
            <span className="font-serif text-lg text-foreground hidden sm:inline">Gül Aksu Güzellik Salonu</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden md:flex items-center gap-4">
            <a
              href="https://www.instagram.com/gulaksuguzelliksalonu/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full bg-muted/40 hover:bg-primary/10 transition-colors text-muted-foreground hover:text-primary"
              aria-label="Instagram"
            >
              <Instagram className="h-4 w-4" />
            </a>
            <a href="tel:+905307456058" className="flex items-center gap-2 text-sm text-muted-foreground">
              <Phone className="h-4 w-4" />
              <span>0530 745 60 58</span>
            </a>
            <Button asChild className="rounded-full bg-primary hover:bg-primary/90">
              <Link href="/contact">Randevu Al</Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-4 border-t border-border">
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary py-2"
                  onClick={() => setIsOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
              <a
                href="https://www.instagram.com/gulaksuguzelliksalonu/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary py-2 inline-flex items-center gap-2"
                onClick={() => setIsOpen(false)}
              >
                <Instagram className="h-4 w-4" />
                Instagram
              </a>
              <Button asChild className="rounded-full bg-primary hover:bg-primary/90 mt-4">
                <Link href="/contact">Randevu Al</Link>
              </Button>
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}
