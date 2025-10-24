"use client"

import Link from "next/link"
import { Mail, Phone, MapPin } from "lucide-react"
import Image from "next/image"
import { motion } from "framer-motion"

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
  return (
    <footer className="bg-gray-900 text-gray-300 py-6">
      <motion.div 
        className="container mx-auto px-4"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={containerVariants}
      >
        <div className="grid md:grid-cols-4 gap-6">
          <motion.div variants={itemVariants}>
            <motion.div 
              className="flex items-center gap-2 mb-3"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <div className="w-9 h-6 bg-blue-600 rounded-lg flex items-center justify-center overflow-hidden relative">
                <Image 
                  src="/New folder/brain.jpg" 
                  alt="MSW-PSE Logo" 
                  fill
                  className="object-cover"
                />
              </div>
              <span className="font-bold text-white">Master of Social Work in Psychosocial Software Engineering</span>
            </motion.div>
            <p className="text-sm leading-relaxed">
              Developed by the collaboration of School of Social Work under College of Social Science, Arts and Humanities and School of Information Technology and Engineering (SiTE) under College of Technology and Built Environment @ Addis Ababa University.
            </p>
          </motion.div>

          <motion.div variants={itemVariants}>
            <h4 className="font-semibold text-white mb-3">Quick Links</h4>
            <ul className="space-y-1.5 text-sm">
              <motion.li whileHover={{ x: 5 }} transition={{ type: "spring", stiffness: 300 }}>
                <Link href="/" className="hover:text-white transition-colors">
                  Home
                </Link>
              </motion.li>
              <motion.li whileHover={{ x: 5 }} transition={{ type: "spring", stiffness: 300 }}>
                <Link href="/aboutUs" className="hover:text-white transition-colors">
                  About Us
                </Link>
              </motion.li>
              <motion.li whileHover={{ x: 5 }} transition={{ type: "spring", stiffness: 300 }}>
                <Link href="/stakeholders-and-partners" className="hover:text-white transition-colors">
                  Stakeholders
                </Link>
              </motion.li>
              <motion.li whileHover={{ x: 5 }} transition={{ type: "spring", stiffness: 300 }}>
                <Link href="/downloadables" className="hover:text-white transition-colors">
                  Downloadables
                </Link>
              </motion.li>
            </ul>
          </motion.div>

          <motion.div variants={itemVariants}>
            <h4 className="font-semibold text-white mb-3">Resources</h4>
            <ul className="space-y-1.5 text-sm">
              <motion.li whileHover={{ x: 5 }} transition={{ type: "spring", stiffness: 300 }}>
                <Link href="/news-and-events" className="hover:text-white transition-colors">
                  News & Events
                </Link>
              </motion.li>
              <motion.li whileHover={{ x: 5 }} transition={{ type: "spring", stiffness: 300 }}>
                <Link href="/contact-us" className="hover:text-white transition-colors">
                  Contact Us
                </Link>
              </motion.li>
            </ul>
          </motion.div>

          <motion.div variants={itemVariants}>
            <h4 className="font-semibold text-white mb-3">Contact</h4>
            <ul className="space-y-2 text-sm">
              <motion.li className="flex items-start gap-2" whileHover={{ x: 5 }} transition={{ type: "spring", stiffness: 300 }}>
                <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0" />
                <span>Ethiopian Psychosocial Association, Addis Ababa, Ethiopia</span>
              </motion.li>
              <motion.li className="flex items-center gap-2" whileHover={{ x: 5 }} transition={{ type: "spring", stiffness: 300 }}>
                <Mail className="w-4 h-4 flex-shrink-0" />
                <a href="mailto:info@epaitembank.com" className="hover:text-white transition-colors">
                  info@AAU.com
                </a>
              </motion.li>
              <motion.li className="flex items-center gap-2" whileHover={{ x: 5 }} transition={{ type: "spring", stiffness: 300 }}>
                <Phone className="w-4 h-4 flex-shrink-0" />
                <span>+251 11 XXX XXXX</span>
              </motion.li>
            </ul>
          </motion.div>
        </div>

        <motion.div 
          className="border-t border-gray-800 mt-6 pt-4 text-center text-sm"
          variants={itemVariants}
        >
          <p>&copy; {new Date().getFullYear()} Master of Social Work in Psychosocial Software Engineering. All rights reserved.</p>
        </motion.div>
      </motion.div>
    </footer>
  )
}
