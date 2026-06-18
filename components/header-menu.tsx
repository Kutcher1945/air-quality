"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { useTheme } from "next-themes"
import { Menu, X, Map, Building2, Phone, Sun, Moon } from "lucide-react"
import { Button } from "@/components/ui/button"

const menuItems = [
  { name: "Карта датчиков", href: "/", icon: Map },
  { name: "Карта зданий без газа", href: "/buildings-without-gas", icon: Building2 },
  { name: "Исходящие звонки", href: "/outgoing-calls", icon: Phone },
]

export function HeaderMenu() {
  const [isOpen, setIsOpen] = useState(false)
  const { resolvedTheme, setTheme } = useTheme()
  const pathname = usePathname()
  // resolvedTheme is undefined during hydration — treat undefined as "light" so the
  // correct logo renders on first paint instead of briefly flashing the dark logo
  const logoSrc = resolvedTheme === "dark" ? "/logo_aqa.png" : "/logo_aqa_dark_letters.png"

  return (
    <nav className="sticky top-0 z-50 border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="w-full px-4">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <Image src={logoSrc} alt="AQA Logo" width={180} height={180} className="object-contain" />
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex md:items-center md:gap-1">
            {menuItems.map((item) => {
              const Icon = item.icon
              const active = pathname === item.href
              return (
                <Link key={item.href} href={item.href}>
                  <div
                    className={`
                      group relative flex items-center gap-2.5 rounded-xl px-4 py-2 text-sm font-medium
                      transition-all duration-200 cursor-pointer select-none
                      ${active
                        ? "bg-foreground text-background shadow-sm"
                        : "text-muted-foreground hover:text-foreground hover:bg-muted"
                      }
                    `}
                  >
                    <Icon className={`h-4 w-4 shrink-0 transition-transform duration-200 group-hover:scale-110 ${active ? "" : ""}`} />
                    <span>{item.name}</span>
                    {active && (
                      <span className="absolute bottom-0 left-1/2 h-0.5 w-4 -translate-x-1/2 rounded-full bg-background/40" />
                    )}
                  </div>
                </Link>
              )
            })}
          </div>

          {/* Right side: theme toggle + mobile menu */}
          <div className="flex items-center gap-1">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
              aria-label="Toggle theme"
              className="h-9 w-9 rounded-xl"
            >
              {resolvedTheme === "dark"
                ? <Sun className="h-4 w-4" />
                : <Moon className="h-4 w-4" />
              }
            </Button>
            <div className="md:hidden">
              <Button variant="ghost" size="icon" onClick={() => setIsOpen(!isOpen)} aria-label="Toggle menu">
                {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
              </Button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="border-t border-border py-3 md:hidden">
            <div className="flex flex-col gap-1">
              {menuItems.map((item) => {
                const Icon = item.icon
                const active = pathname === item.href
                return (
                  <Link key={item.href} href={item.href} onClick={() => setIsOpen(false)}>
                    <div
                      className={`
                        flex items-center gap-3 rounded-xl px-4 py-2.5 text-sm font-medium transition-all duration-200
                        ${active
                          ? "bg-foreground text-background"
                          : "text-muted-foreground hover:text-foreground hover:bg-muted"
                        }
                      `}
                    >
                      <Icon className="h-4 w-4 shrink-0" />
                      {item.name}
                    </div>
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
