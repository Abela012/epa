"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { BookOpen, Menu, X } from "lucide-react"
import { useState } from "react"
import { AuthModal } from "@/components/auth-modal"

export function SiteHeader() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [authModalOpen, setAuthModalOpen] = useState(false)

  return (
    <>
      <header className="border-b bg-white/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center gap-2">
              <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center">
                <BookOpen className="w-6 h-6 text-white" />
              </div>
              <div>
                <h1 className="text-xl font-bold text-gray-900">EPA Item Bank</h1>
                <p className="text-xs text-gray-600">Ethiopian Psychologists' Association</p>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-6">
              <Link href="/" className="text-sm font-medium text-gray-700 hover:text-blue-600 transition-colors">
                Home
              </Link>
              <Link
                href="/the-project"
                className="text-sm font-medium text-gray-700 hover:text-blue-600 transition-colors"
              >
                The Project
              </Link>
              <Link
                href="/about-item-bank"
                className="text-sm font-medium text-gray-700 hover:text-blue-600 transition-colors"
              >
                About Item Bank
              </Link>
              <Link
                href="/stakeholders-and-partners"
                className="text-sm font-medium text-gray-700 hover:text-blue-600 transition-colors"
              >
                Stakeholders & Partners
              </Link>
              <Link
                href="/downloadables"
                className="text-sm font-medium text-gray-700 hover:text-blue-600 transition-colors"
              >
                Downloadables
              </Link>
              <Link
                href="/news-and-events"
                className="text-sm font-medium text-gray-700 hover:text-blue-600 transition-colors"
              >
                News & Events
              </Link>
              <Link
                href="/contact-us"
                className="text-sm font-medium text-gray-700 hover:text-blue-600 transition-colors"
              >
                Contact Us
              </Link>
              <Button size="sm" onClick={() => setAuthModalOpen(true)}>
                Sign Up / Login
              </Button>
            </nav>

            {/* Mobile Menu Button */}
            <button className="md:hidden" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {mobileMenuOpen && (
            <nav className="md:hidden mt-4 pb-4 flex flex-col gap-3">
              <Link
                href="/"
                className="text-sm font-medium text-gray-700 hover:text-blue-600 transition-colors py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                Home
              </Link>
              <Link
                href="/the-project"
                className="text-sm font-medium text-gray-700 hover:text-blue-600 transition-colors py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                The Project
              </Link>
              <Link
                href="/about-item-bank"
                className="text-sm font-medium text-gray-700 hover:text-blue-600 transition-colors py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                About Item Bank
              </Link>
              <Link
                href="/stakeholders-and-partners"
                className="text-sm font-medium text-gray-700 hover:text-blue-600 transition-colors py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                Stakeholders & Partners
              </Link>
              <Link
                href="/downloadables"
                className="text-sm font-medium text-gray-700 hover:text-blue-600 transition-colors py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                Downloadables
              </Link>
              <Link
                href="/news-and-events"
                className="text-sm font-medium text-gray-700 hover:text-blue-600 transition-colors py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                News & Events
              </Link>
              <Link
                href="/contact-us"
                className="text-sm font-medium text-gray-700 hover:text-blue-600 transition-colors py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                Contact Us
              </Link>
              <Button
                size="sm"
                className="w-full"
                onClick={() => {
                  setAuthModalOpen(true)
                  setMobileMenuOpen(false)
                }}
              >
                Sign Up / Login
              </Button>
            </nav>
          )}
        </div>
      </header>

      {/* AuthModal Component */}
      <AuthModal open={authModalOpen} onOpenChange={setAuthModalOpen} />
    </>
  )
}
