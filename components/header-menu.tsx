"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, X, Home, Map, BarChart3, Info, Building2, Phone } from "lucide-react"
import { Button } from "@/components/ui/button"

export function HeaderMenu() {
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => setIsOpen(!isOpen)

  const menuItems = [
    {
      name: "Карта датчиков",
      href: "/",
      icon: Map,
    },
    {
      name: "Карта зданий без газа",
      href: "/buildings-without-gas",
      icon: Building2,
    },
    {
      name: "Исходящие звонки",
      href: "/outgoing-calls",
      icon: Phone,
    },
  ]

  return (
    <nav className="sticky top-0 z-50 border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          {/* Logo/Brand */}
          <div className="flex items-center gap-2">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br from-blue-500 to-cyan-500">
              <span className="text-xl font-bold text-white">AQ</span>
            </div>
            <div className="hidden md:block">
              <h1 className="text-lg font-bold text-foreground">Air Quality Almaty</h1>
              <p className="text-xs text-muted-foreground">Качество воздуха Алматы</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex md:items-center md:gap-1">
            {menuItems.map((item) => {
              const Icon = item.icon
              return (
                <Link key={item.name} href={item.href}>
                  <Button variant="ghost" size="sm" className="gap-2">
                    <Icon className="h-4 w-4" />
                    {item.name}
                  </Button>
                </Link>
              )
            })}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <Button variant="ghost" size="icon" onClick={toggleMenu} aria-label="Toggle menu">
              {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="border-t border-border py-4 md:hidden">
            <div className="flex flex-col gap-2">
              {menuItems.map((item) => {
                const Icon = item.icon
                return (
                  <Link key={item.name} href={item.href} onClick={() => setIsOpen(false)}>
                    <Button variant="ghost" size="sm" className="w-full justify-start gap-2">
                      <Icon className="h-4 w-4" />
                      {item.name}
                    </Button>
                  </Link>
                )
              })}
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
