"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Menu, X, User2, Sun, Moon, Monitor } from "lucide-react"
import { useEffect, useState } from "react"
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { HoverCard, HoverCardContent, HoverCardTrigger } from "@/components/ui/hover-card"
import { AuthModal } from "@/components/auth-modal"
import Image from "next/image"
import { motion } from "framer-motion"
import { useTheme } from "next-themes"

export function SiteHeader() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [authModalOpen, setAuthModalOpen] = useState(false)
  const [currentUser, setCurrentUser] = useState<{ name: string } | null>(null)
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  useEffect(() => {
    let isMounted = true
    const loadUser = async () => {
      try {
        const res = await fetch('/api/auth/me', { credentials: 'include' })
        const data = await res.json()
        if (isMounted) setCurrentUser(data.user)
      } catch {}
    }
    loadUser()
    // Recheck on visibility change in case of login in another tab
    const onVis = () => loadUser()
    document.addEventListener('visibilitychange', onVis)
    return () => { isMounted = false; document.removeEventListener('visibilitychange', onVis) }
  }, [])

  return (
    <>
      <header className={`border-b backdrop-blur-sm sticky top-0 z-50 transition-colors duration-500 ${
        theme === 'dark' 
          ? 'bg-gray-900/80 border-gray-700' 
          : 'bg-white/80 border-gray-200'
      }`}>
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center gap-2">
              <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center overflow-hidden relative">
                <Image 
                  src="/New folder/brain.jpg" 
                  alt="MSW-PSE Logo" 
                  fill
                  className="object-cover"
                />
              </div>
              <div>
                <h1 className={`text-xl font-bold transition-colors duration-500 ${
                  theme === 'dark' ? 'text-white' : 'text-gray-900'
                }`}>MSW-PSE</h1>
                <p className={`text-xs transition-colors duration-500 ${
                  theme === 'dark' ? 'text-gray-300' : 'text-gray-600'
                }`}>Master of Social Work in Psychosocial Software Engineering</p>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-4">
              <HoverCard openDelay={200} closeDelay={100}>
                <HoverCardTrigger asChild>
                  <motion.div 
                    whileHover={{ 
                      x: 5, 
                      y: -2,
                      scale: 1.05,
                      transition: { type: "spring", stiffness: 300, damping: 20 }
                    }}
                    className="perspective-1000"
                  >
                    <Link href="/" className={`text-sm font-medium transition-all duration-300 rounded-lg px-3 py-2 hover:shadow-lg ${
                      theme === 'dark' 
                        ? 'text-gray-300 hover:text-blue-400 hover:bg-blue-900/20' 
                        : 'text-gray-700 hover:text-blue-600 hover:bg-blue-50'
                    }`}>
                      Home
                    </Link>
                  </motion.div>
                </HoverCardTrigger>
                <HoverCardContent align="center" className="w-80">
                  <div className="space-y-2">
                    <div className="relative w-full h-52 rounded-md overflow-hidden border bg-white">
                      <iframe
                        title="Home preview"
                        src="/"
                        loading="lazy"
                        className="absolute top-0 left-0"
                        style={{ width: "1280px", height: "800px", transform: "scale(0.25)", transformOrigin: "top left", pointerEvents: "none", border: "0" }}
                      />
                    </div>
                    <div>
                      <h4 className="font-semibold text-sm">Home</h4>
                      <p className="text-xs text-gray-600">Live page preview</p>
                    </div>
                  </div>
                </HoverCardContent>
              </HoverCard>
              
              <HoverCard openDelay={0} closeDelay={100}>
                <HoverCardTrigger asChild>
                  <motion.div 
                    whileHover={{ 
                      x: 5, 
                      y: -2,
                      scale: 1.05,
                      transition: { type: "spring", stiffness: 300, damping: 20 }
                    }}
                    className="perspective-1000"
                  >
                    <Link
                      href="/the-project"
                      className={`text-sm font-medium transition-all duration-300 rounded-lg px-3 py-2 hover:shadow-lg ${
                        theme === 'dark' 
                          ? 'text-gray-300 hover:text-blue-400 hover:bg-blue-900/20' 
                          : 'text-gray-700 hover:text-blue-600 hover:bg-blue-50'
                      }`}
                    >
                      The Project
                    </Link>
                  </motion.div>
                </HoverCardTrigger>
                <HoverCardContent align="start" className="w-[28rem] p-3">
                  <div className="space-y-3">
                    <div className="relative w-full h-52 rounded-md overflow-hidden border bg-white">
                      <iframe
                        title="The Project preview"
                        src="/the-project"
                        loading="lazy"
                        className="absolute top-0 left-0"
                        style={{ width: "1280px", height: "800px", transform: "scale(0.25)", transformOrigin: "top left", pointerEvents: "none", border: "0" }}
                      />
                    </div>
                    <div className="grid grid-cols-2 gap-2">
                    <Link 
                      href="/the-project?tab=overview" 
                      className="px-3 py-2 text-sm rounded-md hover:bg-blue-50 hover:text-blue-600 transition-colors"
                    >
                      Overview
                    </Link>
                    <Link 
                      href="/the-project?tab=objectives" 
                      className="px-3 py-2 text-sm rounded-md hover:bg-blue-50 hover:text-blue-600 transition-colors"
                    >
                      Objectives
                    </Link>
                    <Link 
                      href="/the-project?tab=timeline" 
                      className="px-3 py-2 text-sm rounded-md hover:bg-blue-50 hover:text-blue-600 transition-colors"
                    >
                      Timeline
                    </Link>
                    <Link 
                      href="/the-project?tab=methodology" 
                      className="px-3 py-2 text-sm rounded-md hover:bg-blue-50 hover:text-blue-600 transition-colors"
                    >
                      Purpose
                    </Link>
                    <Link 
                      href="/the-project?tab=team" 
                      className="px-3 py-2 text-sm rounded-md hover:bg-blue-50 hover:text-blue-600 transition-colors"
                    >
                      Team
                    </Link>
                    </div>
                  </div>
                </HoverCardContent>
              </HoverCard>
              
              <HoverCard openDelay={200} closeDelay={100}>
                <HoverCardTrigger asChild>
                  <motion.div 
                    whileHover={{ 
                      x: 5, 
                      y: -2,
                      scale: 1.05,
                      transition: { type: "spring", stiffness: 300, damping: 20 }
                    }}
                    className="perspective-1000"
                  >
                    <Link
                      href="/aboutUs"
                      className={`text-sm font-medium transition-all duration-300 rounded-lg px-3 py-2 hover:shadow-lg ${
                        theme === 'dark' 
                          ? 'text-gray-300 hover:text-blue-400 hover:bg-blue-900/20' 
                          : 'text-gray-700 hover:text-blue-600 hover:bg-blue-50'
                      }`}
                    >
                      About Us
                    </Link>
                  </motion.div>
                </HoverCardTrigger>
                <HoverCardContent align="center" className="w-80">
                  <div className="space-y-2">
                    <div className="relative w-full h-52 rounded-md overflow-hidden border bg-white">
                      <iframe
                        title="About preview"
                        src="/aboutUs"
                        loading="lazy"
                        className="absolute top-0 left-0"
                        style={{ width: "1280px", height: "800px", transform: "scale(0.25)", transformOrigin: "top left", pointerEvents: "none", border: "0" }}
                      />
                    </div>
                    <div>
                      <h4 className="font-semibold text-sm">About Us</h4>
                      <p className="text-xs text-gray-600">Live page preview</p>
                    </div>
                  </div>
                </HoverCardContent>
              </HoverCard>
              
              <HoverCard openDelay={200} closeDelay={100}>
                <HoverCardTrigger asChild>
                  <motion.div 
                    whileHover={{ 
                      x: 5, 
                      y: -2,
                      scale: 1.05,
                      transition: { type: "spring", stiffness: 300, damping: 20 }
                    }}
                    className="perspective-1000"
                  >
                    <Link
                      href="/stakeholders-and-partners"
                      className={`text-sm font-medium transition-all duration-300 rounded-lg px-3 py-2 hover:shadow-lg ${
                        theme === 'dark' 
                          ? 'text-gray-300 hover:text-blue-400 hover:bg-blue-900/20' 
                          : 'text-gray-700 hover:text-blue-600 hover:bg-blue-50'
                      }`}
                    >
                      Stakeholders
                    </Link>
                  </motion.div>
                </HoverCardTrigger>
                <HoverCardContent align="center" className="w-80">
                  <div className="space-y-2">
                    <div className="relative w-full h-52 rounded-md overflow-hidden border bg-white">
                      <iframe
                        title="Stakeholders preview"
                        src="/stakeholders-and-partners"
                        loading="lazy"
                        className="absolute top-0 left-0"
                        style={{ width: "1280px", height: "800px", transform: "scale(0.25)", transformOrigin: "top left", pointerEvents: "none", border: "0" }}
                      />
                    </div>
                    <div>
                      <h4 className="font-semibold text-sm">Stakeholders & Partners</h4>
                      <p className="text-xs text-gray-600">Live page preview</p>
                    </div>
                  </div>
                </HoverCardContent>
              </HoverCard>
              
              <HoverCard openDelay={200} closeDelay={100}>
                <HoverCardTrigger asChild>
                  <motion.div 
                    whileHover={{ 
                      x: 5, 
                      y: -2,
                      scale: 1.05,
                      transition: { type: "spring", stiffness: 300, damping: 20 }
                    }}
                    className="perspective-1000"
                  >
                    <Link
                      href="/downloadables"
                      className={`text-sm font-medium transition-all duration-300 rounded-lg px-3 py-2 hover:shadow-lg ${
                        theme === 'dark' 
                          ? 'text-gray-300 hover:text-blue-400 hover:bg-blue-900/20' 
                          : 'text-gray-700 hover:text-blue-600 hover:bg-blue-50'
                      }`}
                    >
                      Downloadables
                    </Link>
                  </motion.div>
                </HoverCardTrigger>
                <HoverCardContent align="center" className="w-80">
                  <div className="space-y-2">
                    <div className="relative w-full h-52 rounded-md overflow-hidden border bg-white">
                      <iframe
                        title="Downloadables preview"
                        src="/downloadables"
                        loading="lazy"
                        className="absolute top-0 left-0"
                        style={{ width: "1280px", height: "800px", transform: "scale(0.25)", transformOrigin: "top left", pointerEvents: "none", border: "0" }}
                      />
                    </div>
                    <div>
                      <h4 className="font-semibold text-sm">Downloadables</h4>
                      <p className="text-xs text-gray-600">Live page preview</p>
                    </div>
                  </div>
                </HoverCardContent>
              </HoverCard>
              
              <HoverCard openDelay={200} closeDelay={100}>
                <HoverCardTrigger asChild>
                  <motion.div 
                    whileHover={{ 
                      x: 5, 
                      y: -2,
                      scale: 1.05,
                      transition: { type: "spring", stiffness: 300, damping: 20 }
                    }}
                    className="perspective-1000"
                  >
                    <Link
                      href="/news-and-events"
                      className={`text-sm font-medium transition-all duration-300 rounded-lg px-3 py-2 hover:shadow-lg ${
                        theme === 'dark' 
                          ? 'text-gray-300 hover:text-blue-400 hover:bg-blue-900/20' 
                          : 'text-gray-700 hover:text-blue-600 hover:bg-blue-50'
                      }`}
                    >
                      News & Events
                    </Link>
                  </motion.div>
                </HoverCardTrigger>
                <HoverCardContent align="center" className="w-80">
                  <div className="space-y-2">
                    <div className="relative w-full h-52 rounded-md overflow-hidden border bg-white">
                      <iframe
                        title="News preview"
                        src="/news-and-events"
                        loading="lazy"
                        className="absolute top-0 left-0"
                        style={{ width: "1280px", height: "800px", transform: "scale(0.25)", transformOrigin: "top left", pointerEvents: "none", border: "0" }}
                      />
                    </div>
                    <div>
                      <h4 className="font-semibold text-sm">News & Events</h4>
                      <p className="text-xs text-gray-600">Live page preview</p>
                    </div>
                  </div>
                </HoverCardContent>
              </HoverCard>
              
              <HoverCard openDelay={200} closeDelay={100}>
                <HoverCardTrigger asChild>
                  <motion.div 
                    whileHover={{ 
                      x: 5, 
                      y: -2,
                      scale: 1.05,
                      transition: { type: "spring", stiffness: 300, damping: 20 }
                    }}
                    className="perspective-1000"
                  >
                    <Link
                      href="/contact-us"
                      className={`text-sm font-medium transition-all duration-300 rounded-lg px-3 py-2 hover:shadow-lg ${
                        theme === 'dark' 
                          ? 'text-gray-300 hover:text-blue-400 hover:bg-blue-900/20' 
                          : 'text-gray-700 hover:text-blue-600 hover:bg-blue-50'
                      }`}
                    >
                      Contact Us
                    </Link>
                  </motion.div>
                </HoverCardTrigger>
                <HoverCardContent align="center" className="w-80">
                  <div className="space-y-2">
                    <div className="relative w-full h-52 rounded-md overflow-hidden border bg-white">
                      <iframe
                        title="Contact preview"
                        src="/contact-us"
                        loading="lazy"
                        className="absolute top-0 left-0"
                        style={{ width: "1280px", height: "800px", transform: "scale(0.25)", transformOrigin: "top left", pointerEvents: "none", border: "0" }}
                      />
                    </div>
                    <div>
                      <h4 className="font-semibold text-sm">Contact Us</h4>
                      <p className="text-xs text-gray-600">Live page preview</p>
                    </div>
                  </div>
                </HoverCardContent>
              </HoverCard>
              
              {/* Theme Toggle */}
              {mounted && (
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="ghost" size="sm" className="w-9 h-9 p-0">
                      <Sun className="h-4 w-4 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
                      <Moon className="absolute h-4 w-4 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
                      <span className="sr-only">Toggle theme</span>
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end">
                    <DropdownMenuItem onClick={() => setTheme("light")}>
                      <Sun className="mr-2 h-4 w-4" />
                      <span>Light</span>
                    </DropdownMenuItem>
                    <DropdownMenuItem onClick={() => setTheme("dark")}>
                      <Moon className="mr-2 h-4 w-4" />
                      <span>Dark</span>
                    </DropdownMenuItem>
                    <DropdownMenuItem onClick={() => setTheme("system")}>
                      <Monitor className="mr-2 h-4 w-4" />
                      <span>System</span>
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              )}
              
              {currentUser ? (
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <div className="w-9 h-9 rounded-full bg-blue-50 border border-blue-200 flex items-center justify-center cursor-pointer">
                      <User2 className="w-5 h-5 text-blue-700" />
                    </div>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end">
                    <div className="px-2 py-1.5 text-xs text-gray-500">{currentUser.name}</div>
                    <DropdownMenuItem onClick={async () => {
                      await fetch('/api/auth/logout', { method: 'POST' })
                      window.location.reload()
                    }} variant="destructive">
                      Logout
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              ) : (
                <Button size="sm" onClick={() => setAuthModalOpen(true)}>
                  Sign Up / Login
                </Button>
              )}
            </nav>

            {/* Mobile Menu Button */}
            <button className={`md:hidden transition-colors duration-500 ${
              theme === 'dark' ? 'text-white' : 'text-gray-700'
            }`} onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {mobileMenuOpen && (
            <motion.nav 
              className={`md:hidden mt-4 pb-4 flex flex-col gap-2 transition-colors duration-500 ${
                theme === 'dark' ? 'bg-gray-800/50' : 'bg-gray-50/50'
              } rounded-lg p-4 backdrop-blur-sm`}
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
            >
              <motion.div
                whileHover={{ x: 5, scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <Link
                  href="/"
                  className={`text-sm font-medium transition-all duration-300 rounded-lg px-3 py-2 hover:shadow-md ${
                    theme === 'dark' 
                      ? 'text-gray-300 hover:text-blue-400 hover:bg-blue-900/20' 
                      : 'text-gray-700 hover:text-blue-600 hover:bg-blue-50'
                  }`}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Home
                </Link>
              </motion.div>
              <motion.div
                whileHover={{ x: 5, scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <Link
                  href="/the-project"
                  className={`text-sm font-medium transition-all duration-300 rounded-lg px-3 py-2 hover:shadow-md ${
                    theme === 'dark' 
                      ? 'text-gray-300 hover:text-blue-400 hover:bg-blue-900/20' 
                      : 'text-gray-700 hover:text-blue-600 hover:bg-blue-50'
                  }`}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  The Project
                </Link>
              </motion.div>
              <motion.div
                whileHover={{ x: 5, scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <Link
                  href="/aboutUs"
                  className={`text-sm font-medium transition-all duration-300 rounded-lg px-3 py-2 hover:shadow-md ${
                    theme === 'dark' 
                      ? 'text-gray-300 hover:text-blue-400 hover:bg-blue-900/20' 
                      : 'text-gray-700 hover:text-blue-600 hover:bg-blue-50'
                  }`}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  About Item Bank
                </Link>
              </motion.div>
              <motion.div
                whileHover={{ x: 5, scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <Link
                  href="/stakeholders-and-partners"
                  className={`text-sm font-medium transition-all duration-300 rounded-lg px-3 py-2 hover:shadow-md ${
                    theme === 'dark' 
                      ? 'text-gray-300 hover:text-blue-400 hover:bg-blue-900/20' 
                      : 'text-gray-700 hover:text-blue-600 hover:bg-blue-50'
                  }`}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Stakeholders & Partners
                </Link>
              </motion.div>
              <motion.div
                whileHover={{ x: 5, scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <Link
                  href="/downloadables"
                  className={`text-sm font-medium transition-all duration-300 rounded-lg px-3 py-2 hover:shadow-md ${
                    theme === 'dark' 
                      ? 'text-gray-300 hover:text-blue-400 hover:bg-blue-900/20' 
                      : 'text-gray-700 hover:text-blue-600 hover:bg-blue-50'
                  }`}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Downloadables
                </Link>
              </motion.div>
              <motion.div
                whileHover={{ x: 5, scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <Link
                  href="/news-and-events"
                  className={`text-sm font-medium transition-all duration-300 rounded-lg px-3 py-2 hover:shadow-md ${
                    theme === 'dark' 
                      ? 'text-gray-300 hover:text-blue-400 hover:bg-blue-900/20' 
                      : 'text-gray-700 hover:text-blue-600 hover:bg-blue-50'
                  }`}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  News & Events
                </Link>
              </motion.div>
              <motion.div
                whileHover={{ x: 5, scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <Link
                  href="/contact-us"
                  className={`text-sm font-medium transition-all duration-300 rounded-lg px-3 py-2 hover:shadow-md ${
                    theme === 'dark' 
                      ? 'text-gray-300 hover:text-blue-400 hover:bg-blue-900/20' 
                      : 'text-gray-700 hover:text-blue-600 hover:bg-blue-50'
                  }`}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Contact Us
                </Link>
              </motion.div>
              {currentUser ? (
                <div className="mt-2">
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <div className="w-9 h-9 rounded-full bg-blue-50 border border-blue-200 flex items-center justify-center cursor-pointer">
                        <User2 className="w-5 h-5 text-blue-700" />
                      </div>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                      <div className="px-2 py-1.5 text-xs text-gray-500">{currentUser.name}</div>
                      <DropdownMenuItem onClick={async () => {
                        await fetch('/api/auth/logout', { method: 'POST' })
                        window.location.reload()
                      }} variant="destructive">
                        Logout
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </div>
              ) : (
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
              )}
            </motion.nav>
          )}
        </div>
      </header>

      {/* AuthModal Component */}
      <AuthModal open={authModalOpen} onOpenChange={setAuthModalOpen} />
    </>
  )
}
