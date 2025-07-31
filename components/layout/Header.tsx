'use client'

import * as React from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"

import { cn } from "../../lib/utils"
import Button from "../ui/Button"

const navigationItems = [
  { id: 'hero', name: 'Home', href: '#hero' },
  { id: 'features', name: 'Features', href: '#features' },
  { id: 'pricing', name: 'Pricing', href: '#pricing' },
  { id: 'testimonials', name: 'Testimonials', href: '#testimonials' },
  { id: 'faq', name: 'FAQ', href: '#faq' },
  { id: 'blog', name: 'Blog', href: '#blog' },
  { id: 'contact', name: 'Contact', href: '#contact' },
]

// Hamburger Menu Icon Component
const HamburgerIcon = ({ isOpen }: { isOpen: boolean }) => (
  <div className="flex flex-col justify-center w-6 h-6">
    <span className={`block w-full h-0.5 bg-current mb-1 transition-all duration-300 transform ${isOpen ? 'rotate-45 translate-y-1.5' : ''}`} />
    <span className={`block w-full h-0.5 bg-current mb-1 transition-all duration-300 ${isOpen ? 'opacity-0' : ''}`} />
    <span className={`block w-full h-0.5 bg-current transition-all duration-300 transform ${isOpen ? '-rotate-45 -translate-y-1.5' : ''}`} />
  </div>
)

export default function Header() {
  const [activeSection, setActiveSection] = React.useState('hero')
  const [isScrolled, setIsScrolled] = React.useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false)
  const pathname = usePathname()
  const isHomePage = pathname === '/'

  // Handle scroll effects and active section detection
  React.useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY
      setIsScrolled(scrollTop > 10)

      // Only track sections on home page
      if (!isHomePage) return

      // Find active section based on scroll position
      const sections = navigationItems.map(item => {
        const element = document.getElementById(item.id)
        if (element) {
          const rect = element.getBoundingClientRect()
          return {
            id: item.id,
            top: rect.top + scrollTop,
            bottom: rect.bottom + scrollTop,
            height: rect.height
          }
        }
        return null
      }).filter(Boolean)

      // Find the section that's most visible in viewport
      const viewportTop = scrollTop + 100 // Offset for header
      const viewportBottom = scrollTop + window.innerHeight

      let mostVisibleSection = 'hero'
      let maxVisibleArea = 0

      sections.forEach(section => {
        if (!section) return
        
        const visibleTop = Math.max(viewportTop, section.top)
        const visibleBottom = Math.min(viewportBottom, section.bottom)
        const visibleHeight = Math.max(0, visibleBottom - visibleTop)
        const visibilityRatio = visibleHeight / section.height

        if (visibilityRatio > maxVisibleArea) {
          maxVisibleArea = visibilityRatio
          mostVisibleSection = section.id
        }
      })

      setActiveSection(mostVisibleSection)
    }

    handleScroll()
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [isHomePage])

  // Smooth scroll handler
  const handleSmoothScroll = (e: React.MouseEvent, targetId: string) => {
    e.preventDefault()
    
    const targetElement = document.getElementById(targetId)
    if (targetElement) {
      const headerHeight = 80
      const targetPosition = targetElement.offsetTop - headerHeight
      
      window.scrollTo({
        top: targetPosition,
        behavior: 'smooth'
      })
    }
  }

  // Handle mobile menu toggle
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }

  // Handle mobile menu item click
  const handleMobileMenuClick = (e: React.MouseEvent, targetId: string) => {
    handleSmoothScroll(e, targetId)
    setIsMobileMenuOpen(false)
  }

  return (
    <header 
      className={cn(
        "sticky top-0 z-50 w-full border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60 transition-all duration-200",
        isScrolled && "shadow-sm border-gray-200"
      )}
    >
      <div className="container mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        
        {/* Logo */}
        <Link href="/" className="flex items-center space-x-3">
          <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-blue-600 to-purple-600 transition-transform hover:scale-105">
            <span className="text-lg font-bold text-white">A</span>
          </div>
          <span className="text-xl font-bold text-gray-900 transition-colors hover:text-blue-600">
            ADmyBRAND
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-1">
          {navigationItems.map((item) => (
            <a
              key={item.id}
              href={item.href}
              onClick={(e) => handleSmoothScroll(e, item.id)}
              className={cn(
                "inline-flex h-9 items-center justify-center rounded-md px-4 py-2 text-sm font-medium transition-colors hover:bg-gray-50 hover:text-gray-900 focus:bg-gray-50 focus:text-gray-900 focus:outline-none",
                isHomePage && activeSection === item.id
                  ? "bg-blue-50 text-blue-600 font-semibold"
                  : "text-gray-600"
              )}
            >
              {item.name}
            </a>
          ))}
        </nav>

        {/* Desktop Actions */}
        <div className="hidden md:flex items-center space-x-4">
          <button
            onClick={(e) => e.preventDefault()}
            className="text-sm font-medium text-gray-600 transition-colors hover:text-gray-900 cursor-pointer"
          >
            Sign In
          </button>
          <Button 
            size="sm" 
            className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 shadow-lg hover:shadow-xl transition-all duration-200"
          >
            Get Started
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={toggleMobileMenu}
          className="md:hidden flex items-center justify-center p-2 rounded-md text-gray-600 hover:text-gray-900 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
          aria-label="Toggle navigation menu"
          aria-expanded={isMobileMenuOpen}
        >
          <HamburgerIcon isOpen={isMobileMenuOpen} />
        </button>
      </div>

      {/* Mobile Navigation Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden border-t border-gray-200 bg-white">
          <div className="container mx-auto px-4 py-4 space-y-2">
            {navigationItems.map((item) => (
              <a
                key={item.id}
                href={item.href}
                onClick={(e) => handleMobileMenuClick(e, item.id)}
                className={cn(
                  "block rounded-lg px-3 py-2 text-sm font-medium transition-colors",
                  isHomePage && activeSection === item.id 
                    ? "bg-blue-50 text-blue-600 font-semibold" 
                    : "text-gray-600 hover:bg-gray-50 hover:text-gray-900"
                )}
              >
                {item.name}
              </a>
            ))}
            
            {/* Mobile Actions */}
            <div className="pt-4 border-t border-gray-100 space-y-2">
              <button
                onClick={(e) => e.preventDefault()}
                className="block rounded-lg bg-gray-50 px-3 py-2 text-center text-sm font-medium text-gray-600 transition-colors hover:bg-gray-100 hover:text-gray-900 w-full"
              >
                Sign In
              </button>
              <Button 
                className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700" 
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Get Started
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
