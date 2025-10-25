"use client"

import Link from "next/link"
import { Mail, Phone, MapPin, ArrowRight, Sparkles, Globe, Users, BookOpen } from "lucide-react"
import Image from "next/image"
import { motion } from "framer-motion"
import { useTheme } from "next-themes"

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 0.6, staggerChildren: 0.1 },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
}

export function SiteFooter() {
  const { theme } = useTheme()
  
  return (
    <footer className={`transition-colors duration-500 ${
      theme === 'dark' 
        ? 'bg-gradient-to-br from-gray-900 via-blue-900 to-indigo-900' 
        : 'bg-gradient-to-br from-gray-900 via-blue-800 to-indigo-900'
    } text-gray-300 py-12 relative overflow-hidden`}>
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div 
          className="absolute top-10 right-20 w-32 h-32 bg-blue-500/10 rounded-full blur-3xl"
          animate={{ 
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.6, 0.3]
          }}
          transition={{ 
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div 
          className="absolute bottom-10 left-20 w-40 h-40 bg-purple-500/10 rounded-full blur-3xl"
          animate={{ 
            scale: [1.2, 1, 1.2],
            opacity: [0.4, 0.7, 0.4]
          }}
          transition={{ 
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1
          }}
        />
        <motion.div 
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-60 h-60 bg-indigo-500/5 rounded-full blur-3xl"
          animate={{ 
            scale: [1, 1.3, 1],
            opacity: [0.2, 0.5, 0.2]
          }}
          transition={{ 
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2
          }}
        />
      </div>
      
      <motion.div 
        className="container mx-auto px-4 relative z-10"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={containerVariants}
      >
        <div className="grid md:grid-cols-4 gap-8">
          <motion.div variants={itemVariants}>
            <motion.div 
              className="flex items-center gap-3 mb-6"
              whileHover={{ 
                scale: 1.05,
                y: -2,
                transition: { type: "spring", stiffness: 300, damping: 20 }
              }}
            >
              <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-purple-600 rounded-xl flex items-center justify-center overflow-hidden relative shadow-lg">
                <Image 
                  src="/New folder/brain.jpg" 
                  alt="MSW-PSE Logo" 
                  fill
                  className="object-cover"
                />
              </div>
              <div>
                <h3 className="font-bold text-white text-lg">MSW-PSE</h3>
                <p className="text-xs text-blue-300">Master of Social Work in Psychosocial Software Engineering</p>
              </div>
            </motion.div>
            <p className="text-sm leading-relaxed text-gray-300 mb-6">
              Developed by the collaboration of School of Social Work under College of Social Science, Arts and Humanities and School of Information Technology and Engineering (SiTE) under College of Technology and Built Environment @ Addis Ababa University.
            </p>
            <motion.div
              whileHover={{ scale: 1.05, y: -2 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2"
            >
              <Sparkles className="w-4 h-4 text-blue-400" />
              <span className="text-sm font-medium text-blue-300">Innovation in Education</span>
            </motion.div>
          </motion.div>

          <motion.div variants={itemVariants}>
            <div className="flex items-center gap-2 mb-6">
              <Globe className="w-5 h-5 text-blue-400" />
              <h4 className="font-bold text-white text-lg">Quick Links</h4>
            </div>
            <ul className="space-y-3">
              <motion.li 
                whileHover={{ 
                  x: 8, 
                  scale: 1.02,
                  transition: { type: "spring", stiffness: 300, damping: 20 }
                }}
              >
                <Link href="/" className="flex items-center gap-3 text-sm hover:text-white transition-all duration-300 rounded-lg px-3 py-2 hover:bg-white/10 group">
                  <ArrowRight className="w-3 h-3 text-blue-400 group-hover:translate-x-1 transition-transform duration-300" />
                  Home
                </Link>
              </motion.li>
              <motion.li 
                whileHover={{ 
                  x: 8, 
                  scale: 1.02,
                  transition: { type: "spring", stiffness: 300, damping: 20 }
                }}
              >
                <Link href="/aboutUs" className="flex items-center gap-3 text-sm hover:text-white transition-all duration-300 rounded-lg px-3 py-2 hover:bg-white/10 group">
                  <ArrowRight className="w-3 h-3 text-blue-400 group-hover:translate-x-1 transition-transform duration-300" />
                  About Us
                </Link>
              </motion.li>
              <motion.li 
                whileHover={{ 
                  x: 8, 
                  scale: 1.02,
                  transition: { type: "spring", stiffness: 300, damping: 20 }
                }}
              >
                <Link href="/stakeholders-and-partners" className="flex items-center gap-3 text-sm hover:text-white transition-all duration-300 rounded-lg px-3 py-2 hover:bg-white/10 group">
                  <ArrowRight className="w-3 h-3 text-blue-400 group-hover:translate-x-1 transition-transform duration-300" />
                  Stakeholders
                </Link>
              </motion.li>
              <motion.li 
                whileHover={{ 
                  x: 8, 
                  scale: 1.02,
                  transition: { type: "spring", stiffness: 300, damping: 20 }
                }}
              >
                <Link href="/downloadables" className="flex items-center gap-3 text-sm hover:text-white transition-all duration-300 rounded-lg px-3 py-2 hover:bg-white/10 group">
                  <ArrowRight className="w-3 h-3 text-blue-400 group-hover:translate-x-1 transition-transform duration-300" />
                  Downloadables
                </Link>
              </motion.li>
            </ul>
          </motion.div>

          <motion.div variants={itemVariants}>
            <div className="flex items-center gap-2 mb-6">
              <BookOpen className="w-5 h-5 text-blue-400" />
              <h4 className="font-bold text-white text-lg">Resources</h4>
            </div>
            <ul className="space-y-3">
              <motion.li 
                whileHover={{ 
                  x: 8, 
                  scale: 1.02,
                  transition: { type: "spring", stiffness: 300, damping: 20 }
                }}
              >
                <Link href="/news-and-events" className="flex items-center gap-3 text-sm hover:text-white transition-all duration-300 rounded-lg px-3 py-2 hover:bg-white/10 group">
                  <ArrowRight className="w-3 h-3 text-blue-400 group-hover:translate-x-1 transition-transform duration-300" />
                  News & Events
                </Link>
              </motion.li>
              <motion.li 
                whileHover={{ 
                  x: 8, 
                  scale: 1.02,
                  transition: { type: "spring", stiffness: 300, damping: 20 }
                }}
              >
                <Link href="/contact-us" className="flex items-center gap-3 text-sm hover:text-white transition-all duration-300 rounded-lg px-3 py-2 hover:bg-white/10 group">
                  <ArrowRight className="w-3 h-3 text-blue-400 group-hover:translate-x-1 transition-transform duration-300" />
                  Contact Us
                </Link>
              </motion.li>
            </ul>
          </motion.div>

          <motion.div variants={itemVariants}>
            <div className="flex items-center gap-2 mb-6">
              <Users className="w-5 h-5 text-blue-400" />
              <h4 className="font-bold text-white text-lg">Contact</h4>
            </div>
            <ul className="space-y-4">
              <motion.li 
                className="flex items-start gap-3 p-3 rounded-lg hover:bg-white/10 transition-all duration-300 perspective-1000" 
                whileHover={{ 
                  x: 5, 
                  scale: 1.02,
                  transition: { type: "spring", stiffness: 300, damping: 20 }
                }}
              >
                <div className="w-8 h-8 bg-blue-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-4 h-4 text-blue-400" />
                </div>
                <div>
                  <p className="text-sm text-gray-300">Ethiopian Psychosocial Association</p>
                  <p className="text-xs text-gray-400">Addis Ababa, Ethiopia</p>
                </div>
              </motion.li>
              <motion.li 
                className="flex items-center gap-3 p-3 rounded-lg hover:bg-white/10 transition-all duration-300" 
                whileHover={{ 
                  x: 5, 
                  scale: 1.02,
                  transition: { type: "spring", stiffness: 300, damping: 20 }
                }}
              >
                <div className="w-8 h-8 bg-blue-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Mail className="w-4 h-4 text-blue-400" />
                </div>
                <div>
                  <a href="mailto:info@AAU.com" className="text-sm hover:text-white transition-colors">
                    info@AAU.com
                  </a>
                </div>
              </motion.li>
              <motion.li 
                className="flex items-center gap-3 p-3 rounded-lg hover:bg-white/10 transition-all duration-300" 
                whileHover={{ 
                  x: 5, 
                  scale: 1.02,
                  transition: { type: "spring", stiffness: 300, damping: 20 }
                }}
              >
                <div className="w-8 h-8 bg-blue-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Phone className="w-4 h-4 text-blue-400" />
                </div>
                <div>
                  <span className="text-sm text-gray-300">+251 11 XXX XXXX</span>
                </div>
              </motion.li>
            </ul>
          </motion.div>
        </div>

        <motion.div 
          className="border-t border-white/10 mt-12 pt-8 text-center"
          variants={itemVariants}
        >
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <motion.p 
              className="text-sm text-gray-400"
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              &copy; {new Date().getFullYear()} Master of Social Work in Psychosocial Software Engineering. All rights reserved.
            </motion.p>
            <motion.div 
              className="flex items-center gap-4"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <div className="flex items-center gap-2 text-xs text-gray-500">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                <span>Powered by Innovation</span>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </motion.div>
    </footer>
  )
}
