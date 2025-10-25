
"use client"
import { useEffect, useState, useRef } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { FileText, Download, BookOpen, FileSpreadsheet, Presentation, Video, Sparkles, ArrowRight, Zap, Target, Shield } from "lucide-react"
import { motion, useScroll, useTransform } from "framer-motion"
import { useTheme } from "next-themes"
import Image from "next/image"

type DownloadableFile = {
  name: string
  url: string
}

export default function DownloadablesPage() {
  const { theme } = useTheme()
  const { scrollYProgress } = useScroll()
  const y = useTransform(scrollYProgress, [0, 1], [0, -50])
  
  const [files, setFiles] = useState<DownloadableFile[]>([])

  useEffect(() => {
    fetch("/api/downloadables")
      .then((res) => res.json())
      .then((data) => setFiles(data))
      .catch(() => setFiles([]))
  }, [])



  const getColorClasses = (color: string) => {
    const colors: Record<string, { bg: string; text: string }> = {
      blue: { bg: "bg-blue-100", text: "text-blue-600" },
      green: { bg: "bg-green-100", text: "text-green-600" },
      purple: { bg: "bg-purple-100", text: "text-purple-600" },
      orange: { bg: "bg-orange-100", text: "text-orange-600" },
      red: { bg: "bg-red-100", text: "text-red-600" },
      teal: { bg: "bg-teal-100", text: "text-teal-600" },
    }
    return colors[color] || colors.blue
  }


  return (
    <div className={`min-h-screen transition-colors duration-500 ${
      theme === 'dark' 
        ? 'bg-gradient-to-br from-gray-900 via-blue-900 to-indigo-900' 
        : 'bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50'
    }`}>
      <SiteHeader />

      {/* Enhanced Hero Section with 3D Design */}
      <motion.section 
        className="relative min-h-screen flex items-center justify-center overflow-hidden"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        {/* Enhanced animated background elements */}
        <div className="absolute inset-0 overflow-hidden">
          <motion.div 
            style={{ y }}
            className={`absolute -top-40 -right-40 w-80 h-80 rounded-full mix-blend-multiply filter blur-xl animate-pulse ${
              theme === 'dark' ? 'bg-blue-500 opacity-30' : 'bg-blue-400 opacity-20'
            }`}
          ></motion.div>
          <motion.div 
            style={{ y: useTransform(scrollYProgress, [0, 1], [0, 50]) }}
            className={`absolute -bottom-40 -left-40 w-96 h-96 rounded-full mix-blend-multiply filter blur-xl animate-pulse delay-1000 ${
              theme === 'dark' ? 'bg-purple-500 opacity-25' : 'bg-purple-400 opacity-15'
            }`}
          ></motion.div>
          <motion.div 
            style={{ y: useTransform(scrollYProgress, [0, 1], [0, -30]) }}
            className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 rounded-full mix-blend-multiply filter blur-xl animate-pulse delay-2000 ${
              theme === 'dark' ? 'bg-indigo-500 opacity-20' : 'bg-indigo-400 opacity-10'
            }`}
          ></motion.div>
        </div>
        
        <Image
          src="/New folder/brain.jpg"
          alt="Background"
          fill
          className={`object-cover transition-opacity duration-500 ${
            theme === 'dark' ? 'opacity-20' : 'opacity-10'
          }`}
          priority
        />
        
        {/* Glassmorphism overlay */}
        <div className={`absolute inset-0 backdrop-blur-sm transition-all duration-500 ${
          theme === 'dark' 
            ? 'bg-gradient-to-br from-gray-900/40 via-blue-900/30 to-indigo-900/40' 
            : 'bg-gradient-to-br from-blue-900/20 via-indigo-900/30 to-purple-900/20'
        }`}></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-6xl mx-auto text-center">
            {/* Enhanced floating badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              whileHover={{ 
                scale: 1.05, 
                y: -5,
                rotateX: 5,
                rotateY: 5,
                transition: { type: "spring", stiffness: 300, damping: 20 }
              }}
              className="perspective-1000"
            >
              <div className={`inline-flex items-center gap-3 backdrop-blur-md border rounded-full px-8 py-4 mb-8 transition-all duration-500 shadow-lg hover:shadow-2xl ${
                theme === 'dark' 
                  ? 'bg-white/10 border-white/20 hover:bg-white/15' 
                  : 'bg-white/20 border-white/30 hover:bg-white/25'
              }`}>
                <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse shadow-lg"></div>
                <Sparkles className="w-5 h-5 text-green-400" />
                <span className={`font-semibold text-lg transition-colors duration-500 ${
                  theme === 'dark' ? 'text-white/90' : 'text-white/90'
                }`}>Downloadables</span>
              </div>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              whileHover={{ 
                scale: 1.02,
                transition: { type: "spring", stiffness: 300, damping: 20 }
              }}
              className="text-5xl md:text-6xl lg:text-7xl font-black text-white mb-8 leading-tight perspective-1000"
            >
              <motion.span 
                className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent"
                whileHover={{ 
                  rotateX: 5,
                  rotateY: 5,
                  transition: { type: "spring", stiffness: 300, damping: 20 }
                }}
              >
                Downloadables
              </motion.span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              whileHover={{ 
                scale: 1.01,
                transition: { type: "spring", stiffness: 300, damping: 20 }
              }}
              className="text-xl md:text-2xl text-blue-100 mb-12 max-w-4xl mx-auto leading-relaxed perspective-1000"
            >
              Access user guides, technical documentation, training materials, templates, and more to help you make the
              <motion.span 
                className="font-semibold text-white"
                whileHover={{ 
                  rotateX: 2,
                  rotateY: 2,
                  transition: { type: "spring", stiffness: 300, damping: 20 }
                }}
              >
                {" "}most of the EPA Item Bank{" "}
              </motion.span>
            </motion.p>
          </div>
        </div>
      </motion.section>



      {/* Enhanced Downloads Section */}
      <motion.section 
        className={`relative py-32 overflow-hidden transition-colors duration-500 ${
          theme === 'dark' 
            ? 'bg-gradient-to-br from-gray-800 via-blue-900 to-indigo-900' 
            : 'bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50'
        }`}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        {/* Animated background elements */}
        <div className="absolute inset-0">
          <motion.div 
            style={{ y }}
            className={`absolute top-20 right-20 w-40 h-40 rounded-full blur-3xl animate-pulse ${
              theme === 'dark' ? 'bg-blue-500/20' : 'bg-blue-300/20'
            }`}
          />
          <motion.div 
            style={{ y: useTransform(scrollYProgress, [0, 1], [0, 30]) }}
            className={`absolute bottom-20 left-20 w-32 h-32 rounded-full blur-3xl animate-pulse delay-1000 ${
              theme === 'dark' ? 'bg-purple-500/20' : 'bg-purple-300/20'
            }`}
          />
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <motion.div 
            className="max-w-6xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {files.length === 0 && (
                <motion.div 
                  className="col-span-full text-center"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                >
                  <div className={`relative backdrop-blur-xl rounded-3xl border shadow-2xl overflow-hidden transition-all duration-500 ${
                    theme === 'dark' 
                      ? 'bg-white/10 border-white/20' 
                      : 'bg-white/20 border-white/30'
                  }`}>
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-purple-500/10 to-indigo-500/10"></div>
                    <div className="relative p-8 text-center">
                      <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center shadow-lg mx-auto mb-4">
                        <FileText className="w-8 h-8 text-white" />
                      </div>
                      <p className={`text-lg transition-colors duration-500 ${
                        theme === 'dark' ? 'text-gray-300' : 'text-gray-500'
                      }`}>No files available.</p>
                    </div>
                  </div>
                </motion.div>
              )}
          {files.map((file, idx) => (
                <motion.div
                  key={file.name + idx}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.6, delay: idx * 0.1 }}
                  whileHover={{ 
                    scale: 1.05, 
                    y: -10,
                    rotateX: 5,
                    rotateY: 5,
                    transition: { type: "spring", stiffness: 300, damping: 20 }
                  }}
                  className="perspective-1000"
                >
                  <div className={`relative backdrop-blur-xl rounded-3xl border shadow-2xl overflow-hidden transition-all duration-500 ${
                    theme === 'dark' 
                      ? 'bg-white/10 border-white/20' 
                      : 'bg-white/20 border-white/30'
                  }`}>
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-purple-500/10 to-indigo-500/10"></div>
                    <div className="relative p-6">
                      <div className="flex items-center gap-3 mb-4">
                        <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center shadow-lg">
                          <FileText className="w-6 h-6 text-white" />
                        </div>
                        <h3 className={`text-lg font-bold transition-colors duration-500 ${
                          theme === 'dark' ? 'text-white' : 'text-gray-900'
                        }`}>{file.name}</h3>
                      </div>
                      <div className={`flex items-center justify-between text-sm mb-6 transition-colors duration-500 ${
                        theme === 'dark' ? 'text-gray-300' : 'text-gray-600'
                      }`}>
                  <span className="font-medium">FILE</span>
                  <span>-</span>
                </div>
                <Button
                        className="w-full bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white border-0 shadow-lg hover:shadow-xl transition-all duration-300"
                  asChild
                >
                  <a href={file.url} download>
                    <Download className="w-4 h-4 mr-2" />
                    Download
                  </a>
                </Button>
                    </div>
                  </div>
                </motion.div>
          ))}
            </div>
          </motion.div>
        </div>
      </motion.section>
      <SiteFooter />
    </div>
  )
}
