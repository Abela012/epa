"use client"

import Image from "next/image"
import { motion, useScroll, useTransform } from "framer-motion"
import { useTheme } from "next-themes"
import { Sparkles, Users, Globe, Building2, Award, Handshake, ArrowRight, Zap, Target, Shield } from "lucide-react"

const containerVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, staggerChildren: 0.08 },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
}

export function StakeholdersContent() {
  const { theme } = useTheme()
  const { scrollYProgress } = useScroll()
  const y = useTransform(scrollYProgress, [0, 1], [0, -50])
  
  return (
    <div className={`min-h-screen transition-colors duration-500 ${
      theme === 'dark' 
        ? 'bg-gradient-to-br from-gray-900 via-blue-900 to-indigo-900' 
        : 'bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50'
    }`}>
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
                }`}>Stakeholders & Partners</span>
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
                Stakeholders
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
              Building a collaborative ecosystem to transform educational assessment in Ethiopia through strategic
              <motion.span 
                className="font-semibold text-white"
                whileHover={{ 
                  rotateX: 2,
                  rotateY: 2,
                  transition: { type: "spring", stiffness: 300, damping: 20 }
                }}
              >
                {" "}stakeholder engagement{" "}
              </motion.span>
            </motion.p>
          </div>
        </div>
      </motion.section>

      {/* Enhanced Introduction Section */}
      <motion.section
        className={`relative py-32 overflow-hidden transition-colors duration-500 ${
          theme === 'dark' 
            ? 'bg-gradient-to-br from-gray-800 via-blue-900 to-indigo-900' 
            : 'bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50'
        }`}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={containerVariants}
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
          <div className="max-w-6xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              whileHover={{ 
                scale: 1.02, 
                y: -5,
                rotateX: 3,
                rotateY: 3,
                transition: { type: "spring", stiffness: 300, damping: 20 }
              }}
              className="perspective-1000 mb-12"
            >
              <div className={`inline-flex items-center gap-3 backdrop-blur-md border rounded-full px-6 py-3 mb-8 transition-all duration-500 ${
                theme === 'dark' 
                  ? 'bg-white/10 border-white/20' 
                  : 'bg-white/20 border-white/30'
              }`}>
                <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
                <Building2 className="w-4 h-4 text-blue-500" />
                <span className={`font-medium transition-colors duration-500 ${
                  theme === 'dark' ? 'text-white/90' : 'text-gray-700'
                }`}>Governmental</span>
              </div>
            </motion.div>
            
            <motion.h2 
              className={`text-4xl md:text-5xl font-black mb-8 leading-tight transition-colors duration-500 ${
                theme === 'dark' ? 'text-white' : 'text-gray-900'
              }`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              whileHover={{ 
                scale: 1.02,
                transition: { type: "spring", stiffness: 300, damping: 20 }
              }}
            >
              <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                Governmental
              </span>
            </motion.h2>
          <motion.div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-12" variants={containerVariants}>
            <motion.div 
              className="flex flex-col items-center" 
              variants={itemVariants}
              whileHover={{ 
                scale: 1.05, 
                y: -10,
                rotateX: 5,
                rotateY: 5,
                transition: { type: "spring", stiffness: 300, damping: 20 }
              }}
              className="perspective-1000"
            >
              <motion.div 
                className={`relative w-32 h-32 mb-4 backdrop-blur-xl rounded-3xl border shadow-2xl overflow-hidden transition-all duration-500 ${
                  theme === 'dark' 
                    ? 'bg-white/10 border-white/20' 
                    : 'bg-white/20 border-white/30'
                }`}
                whileHover={{ 
                  y: -6,
                  rotateX: 3,
                  rotateY: 3,
                  transition: { type: "spring", stiffness: 400, damping: 18 }
                }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-purple-500/10 to-indigo-500/10"></div>
                <Image 
                  src="/New folder/Ministry_of_Education_(Ethiopia).png" 
                  alt="Ministry of Education Ethiopia"
                  fill
                  className="object-contain relative z-10"
                />
              </motion.div>
              <p className={`text-sm font-medium transition-colors duration-500 ${
                theme === 'dark' ? 'text-gray-300' : 'text-gray-700'
              }`}>Ministry of Education</p>
            </motion.div>
            
            <motion.div 
              className="flex flex-col items-center" 
              variants={itemVariants}
              whileHover={{ 
                scale: 1.05, 
                y: -10,
                rotateX: -5,
                rotateY: -5,
                transition: { type: "spring", stiffness: 300, damping: 20 }
              }}
              className="perspective-1000"
            >
              <motion.div 
                className={`relative w-32 h-32 mb-4 backdrop-blur-xl rounded-3xl border shadow-2xl overflow-hidden transition-all duration-500 ${
                  theme === 'dark' 
                    ? 'bg-white/10 border-white/20' 
                    : 'bg-white/20 border-white/30'
                }`}
                whileHover={{ 
                  y: -6,
                  rotateX: -3,
                  rotateY: -3,
                  transition: { type: "spring", stiffness: 400, damping: 18 }
                }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-green-500/10 via-emerald-500/10 to-teal-500/10"></div>
                <Image 
                  src="/New folder/Ministry_of_Innovation_and_Technology_(Ethiopia).png" 
                  alt="Ministry of Innovation and Technology Ethiopia"
                  fill
                  className="object-contain relative z-10"
                />
              </motion.div>
              <p className={`text-sm font-medium transition-colors duration-500 ${
                theme === 'dark' ? 'text-gray-300' : 'text-gray-700'
              }`}>Ministry of Innovation & Technology</p>
            </motion.div>
            
            <motion.div 
              className="flex flex-col items-center" 
              variants={itemVariants}
              whileHover={{ 
                scale: 1.05, 
                y: -10,
                rotateX: 5,
                rotateY: -5,
                transition: { type: "spring", stiffness: 300, damping: 20 }
              }}
              className="perspective-1000"
            >
              <motion.div 
                className={`relative w-32 h-32 mb-4 backdrop-blur-xl rounded-3xl border shadow-2xl overflow-hidden transition-all duration-500 ${
                  theme === 'dark' 
                    ? 'bg-white/10 border-white/20' 
                    : 'bg-white/20 border-white/30'
                }`}
                whileHover={{ 
                  y: -6,
                  rotateX: 3,
                  rotateY: -3,
                  transition: { type: "spring", stiffness: 400, damping: 18 }
                }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 via-pink-500/10 to-rose-500/10"></div>
                <Image 
                  src="/New folder/Ethiopian Artificial Intelegence Institute.png" 
                  alt="Ethiopian Artificial Intelligence Institute"
                  fill
                  className="object-contain relative z-10"
                />
              </motion.div>
              <p className={`text-sm font-medium transition-colors duration-500 ${
                theme === 'dark' ? 'text-gray-300' : 'text-gray-700'
              }`}>Ethiopian AI Institute</p>
            </motion.div>
            
            <motion.div 
              className="flex flex-col items-center" 
              variants={itemVariants}
              whileHover={{ 
                scale: 1.05, 
                y: -10,
                rotateX: -5,
                rotateY: 5,
                transition: { type: "spring", stiffness: 300, damping: 20 }
              }}
              className="perspective-1000"
            >
              <motion.div 
                className={`relative w-32 h-32 mb-4 backdrop-blur-xl rounded-3xl border shadow-2xl overflow-hidden transition-all duration-500 ${
                  theme === 'dark' 
                    ? 'bg-white/10 border-white/20' 
                    : 'bg-white/20 border-white/30'
                }`}
                whileHover={{ 
                  y: -6,
                  rotateX: -3,
                  rotateY: 3,
                  transition: { type: "spring", stiffness: 400, damping: 18 }
                }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/10 via-blue-500/10 to-cyan-500/10"></div>
                <Image 
                  src="/New folder/Ethio Telecom.png" 
                  alt="Ethio Telecom"
                  fill
                  className="object-contain relative z-10"
                />
              </motion.div>
              <p className={`text-sm font-medium transition-colors duration-500 ${
                theme === 'dark' ? 'text-gray-300' : 'text-gray-700'
              }`}>Ethio Telecom</p>
            </motion.div>
          </motion.div>
        </div>
        </div>
      </motion.section>

      {/* Enhanced International and Regional Organizations */}
      <motion.section
        className={`relative py-32 overflow-hidden transition-colors duration-500 ${
          theme === 'dark' 
            ? 'bg-gradient-to-br from-gray-800 via-blue-900 to-indigo-900' 
            : 'bg-gradient-to-br from-gray-50 via-blue-50 to-indigo-50'
        }`}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={containerVariants}
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
          <div className="max-w-6xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              whileHover={{ 
                scale: 1.02, 
                y: -5,
                rotateX: 3,
                rotateY: 3,
                transition: { type: "spring", stiffness: 300, damping: 20 }
              }}
              className="perspective-1000 mb-12"
            >
              <div className={`inline-flex items-center gap-3 backdrop-blur-md border rounded-full px-6 py-3 mb-8 transition-all duration-500 ${
                theme === 'dark' 
                  ? 'bg-white/10 border-white/20' 
                  : 'bg-white/20 border-white/30'
              }`}>
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                <Globe className="w-4 h-4 text-green-500" />
                <span className={`font-medium transition-colors duration-500 ${
                  theme === 'dark' ? 'text-white/90' : 'text-gray-700'
                }`}>International & Regional</span>
              </div>
            </motion.div>
            
            <motion.h2 
              className={`text-4xl md:text-5xl font-black mb-12 leading-tight transition-colors duration-500 ${
                theme === 'dark' ? 'text-white' : 'text-gray-900'
              }`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              whileHover={{ 
                scale: 1.02,
                transition: { type: "spring", stiffness: 300, damping: 20 }
              }}
            >
              <span className="bg-gradient-to-r from-green-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
                International and Regional Organizations
              </span>
            </motion.h2>
          </div>
          <motion.div className="grid grid-cols-2 md:grid-cols-5 gap-8 max-w-6xl mx-auto" variants={containerVariants}>
            <motion.div className="flex flex-col items-center" variants={itemVariants}>
              <motion.div className="relative w-32 h-32 mb-4" whileHover={{ y: -6 }} transition={{ type: "spring", stiffness: 400, damping: 18 }}>
                <Image 
                  src="/New folder/UNESCO.png" 
                  alt="UNESCO"
                  fill
                  className="object-contain"
                />
              </motion.div>
              <p className="text-sm font-medium text-gray-700">UNESCO</p>
            </motion.div>
            
            <motion.div className="flex flex-col items-center" variants={itemVariants}>
              <motion.div className="relative w-32 h-32 mb-4" whileHover={{ y: -6 }} transition={{ type: "spring", stiffness: 400, damping: 18 }}>
                <Image 
                  src="/New folder/UNICEF.png" 
                  alt="UNICEF"
                  fill
                  className="object-contain"
                />
              </motion.div>
              <p className="text-sm font-medium text-gray-700">unicef</p>
            </motion.div>
            
            <motion.div className="flex flex-col items-center" variants={itemVariants}>
              <motion.div className="relative w-32 h-32 mb-4" whileHover={{ y: -6 }} transition={{ type: "spring", stiffness: 400, damping: 18 }}>
                <Image 
                  src="/New folder/Africa Union.jpeg" 
                  alt="African Union"
                  fill
                  className="object-contain"
                />
              </motion.div>
              <p className="text-sm font-medium text-gray-700">African Union</p>
            </motion.div>
            
            <motion.div className="flex flex-col items-center" variants={itemVariants}>
              <motion.div className="relative w-32 h-32 mb-4" whileHover={{ y: -6 }} transition={{ type: "spring", stiffness: 400, damping: 18 }}>
                <Image 
                  src="/New folder/Africa development bank.jpeg" 
                  alt="African Development Bank"
                  fill
                  className="object-contain"
                />
              </motion.div>
              <p className="text-sm font-medium text-gray-700">African Development Bank</p>
            </motion.div>
            
            <motion.div className="flex flex-col items-center" variants={itemVariants}>
              <motion.div className="relative w-32 h-32 mb-4" whileHover={{ y: -6 }} transition={{ type: "spring", stiffness: 400, damping: 18 }}>
                <Image 
                  src="/New folder/European Union.webp" 
                  alt="European Union"
                  fill
                  className="object-contain"
                />
              </motion.div>
              <p className="text-sm font-medium text-gray-700">European Union</p>
            </motion.div>
          </motion.div>
        </div>
      </motion.section>

      {/* Multi-lateral and Bilateral Organizations */}
      <motion.section
        className="container mx-auto px-4 py-16"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={containerVariants}
      >
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Multi-lateral and Bilateral Organizations</h2>
          <motion.div className="grid grid-cols-2 md:grid-cols-5 gap-8 max-w-6xl mx-auto" variants={containerVariants}>
            <motion.div className="flex flex-col items-center" variants={itemVariants}>
              <motion.div className="relative w-32 h-32 mb-4" whileHover={{ y: -6 }} transition={{ type: "spring", stiffness: 400, damping: 18 }}>
                <Image 
                  src="/New folder/German Agency for International Cooperation.png" 
                  alt="German Agency for International Cooperation"
                  fill
                  className="object-contain"
                />
              </motion.div>
              <p className="text-sm font-medium text-gray-700 text-center">German Agency for International Cooperation</p>
            </motion.div>
            
            <motion.div className="flex flex-col items-center" variants={itemVariants}>
              <motion.div className="relative w-32 h-32 mb-4" whileHover={{ y: -6 }} transition={{ type: "spring", stiffness: 400, damping: 18 }}>
                <Image 
                  src="/New folder/Swedish International Development Cooperation Agency.jpg" 
                  alt="Swedish International Development Cooperation Agency"
                  fill
                  className="object-contain"
                />
              </motion.div>
              <p className="text-sm font-medium text-gray-700 text-center">Swedish International Development Cooperation Agency</p>
            </motion.div>
            
            <motion.div className="flex flex-col items-center" variants={itemVariants}>
              <motion.div className="relative w-32 h-32 mb-4" whileHover={{ y: -6 }} transition={{ type: "spring", stiffness: 400, damping: 18 }}>
                <Image 
                  src="/New folder/Japan International Cooperation Agency.jpg" 
                  alt="Japan International Cooperation Agency"
                  fill
                  className="object-contain"
                />
              </motion.div>
              <p className="text-sm font-medium text-gray-700 text-center">Japan International Cooperation Agency</p>
            </motion.div>
            
            <motion.div className="flex flex-col items-center" variants={itemVariants}>
              <motion.div className="relative w-32 h-32 mb-4" whileHover={{ y: -6 }} transition={{ type: "spring", stiffness: 400, damping: 18 }}>
                <Image 
                  src="/New folder/Norwegian Program for Capacity Development in Higher Education and Research for Development.png" 
                  alt="Norwegian Program for Capacity Development"
                  fill
                  className="object-contain"
                />
              </motion.div>
              <p className="text-sm font-medium text-gray-700 text-center">Norwegian Program for Capacity Development</p>
            </motion.div>
            
            <motion.div className="flex flex-col items-center" variants={itemVariants}>
              <motion.div className="relative w-32 h-32 mb-4" whileHover={{ y: -6 }} transition={{ type: "spring", stiffness: 400, damping: 18 }}>
                <Image 
                  src="/New folder/Department for International Development.png" 
                  alt="Department for International Development"
                  fill
                  className="object-contain"
                />
              </motion.div>
              <p className="text-sm font-medium text-gray-700 text-center">Department for International Development</p>
            </motion.div>
          </motion.div>
        </div>
      </motion.section>

      {/* Professional Associations */}
      <motion.section
        className="bg-blue-50 py-16"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={containerVariants}
      >
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Professional Associations</h2>
            <motion.div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-12" variants={containerVariants}>
              <motion.div className="flex flex-col items-center" variants={itemVariants}>
                <motion.div className="relative w-32 h-32 mb-4" whileHover={{ y: -6 }} transition={{ type: "spring", stiffness: 400, damping: 18 }}>
                  <Image 
                    src="/New folder/American Psychological Association.png" 
                    alt="American Psychological Association"
                    fill
                    className="object-contain"
                  />
                </motion.div>
                <p className="text-sm font-medium text-gray-700 text-center">American Psychological Association</p>
              </motion.div>
              
              <motion.div className="flex flex-col items-center" variants={itemVariants}>
                <motion.div className="relative w-32 h-32 mb-4" whileHover={{ y: -6 }} transition={{ type: "spring", stiffness: 400, damping: 18 }}>
                  <Image 
                    src="/New folder/Ethiopian Psychologists Association.jpeg" 
                    alt="Ethiopian Psychologists Association"
                    fill
                    className="object-contain"
                  />
                </motion.div>
                <p className="text-sm font-medium text-gray-700 text-center">Ethiopian Psychologists Association</p>
              </motion.div>
              
              <motion.div className="flex flex-col items-center" variants={itemVariants}>
                <motion.div className="relative w-32 h-32 mb-4" whileHover={{ y: -6 }} transition={{ type: "spring", stiffness: 400, damping: 18 }}>
                  <Image 
                    src="/New folder/European Federation of Psychologists Association.png" 
                    alt="European Federation of Psychologists Association"
                    fill
                    className="object-contain"
                  />
                </motion.div>
                <p className="text-sm font-medium text-gray-700 text-center">European Federation of Psychologists Association</p>
              </motion.div>
              
              <motion.div className="flex flex-col items-center" variants={itemVariants}>
                <motion.div className="relative w-32 h-32 mb-4" whileHover={{ y: -6 }} transition={{ type: "spring", stiffness: 400, damping: 18 }}>
                  <Image 
                    src="/New folder/International Association of Schools of Social Work.jpeg" 
                    alt="International Association of Schools of Social Work"
                    fill
                    className="object-contain"
                  />
                </motion.div>
                <p className="text-sm font-medium text-gray-700 text-center">International Association of Schools of Social Work</p>
              </motion.div>
              
              <motion.div className="flex flex-col items-center" variants={itemVariants}>
                <motion.div className="relative w-32 h-32 mb-4" whileHover={{ y: -6 }} transition={{ type: "spring", stiffness: 400, damping: 18 }}>
                  <Image 
                    src="/New folder/International Federation of Social Workers.jpeg" 
                    alt="International Federation of Social Workers"
                    fill
                    className="object-contain"
                  />
                </motion.div>
                <p className="text-sm font-medium text-gray-700 text-center">International Federation of Social Workers</p>
              </motion.div>
              
              <motion.div className="flex flex-col items-center" variants={itemVariants}>
                <motion.div className="relative w-32 h-32 mb-4" whileHover={{ y: -6 }} transition={{ type: "spring", stiffness: 400, damping: 18 }}>
                  <Image 
                    src="/New folder/International Union of Psychological Science.png" 
                    alt="International Union of Psychological Science"
                    fill
                    className="object-contain"
                  />
                </motion.div>
                <p className="text-sm font-medium text-gray-700 text-center">International Union of Psychological Science</p>
              </motion.div>
              
              <motion.div className="flex flex-col items-center" variants={itemVariants}>
                <motion.div className="relative w-32 h-32 mb-4" whileHover={{ y: -6 }} transition={{ type: "spring", stiffness: 400, damping: 18 }}>
                  <Image 
                    src="/New folder/The Association for Psychological Science.png" 
                    alt="The Association for Psychological Science"
                    fill
                    className="object-contain"
                  />
                </motion.div>
                <p className="text-sm font-medium text-gray-700 text-center">The Association for Psychological Science</p>
              </motion.div>
              
              <motion.div className="flex flex-col items-center" variants={itemVariants}>
                <motion.div className="relative w-32 h-32 mb-4" whileHover={{ y: -6 }} transition={{ type: "spring", stiffness: 400, damping: 18 }}>
                  <Image 
                    src="/New folder/The Ethiopian Social Work Professionals Association.jpeg" 
                    alt="The Ethiopian Social Work Professionals Association"
                    fill
                    className="object-contain"
                  />
                </motion.div>
                <p className="text-sm font-medium text-gray-700 text-center">The Ethiopian Social Work Professionals Association</p>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Private Companies */}
      <motion.section
        className="bg-white-50 py-16"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={containerVariants}
      >
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Private Companies</h2>
            <motion.div className="grid grid-cols-2 md:grid-cols-2 gap-8 mt-12 max-w-2xl mx-auto" variants={containerVariants}>
              <motion.div className="flex flex-col items-center" variants={itemVariants}>
                <motion.div className="relative w-32 h-32 mb-4" whileHover={{ y: -6 }} transition={{ type: "spring", stiffness: 400, damping: 18 }}>
                  <Image 
                    src="/New folder/Aha Psychological.png" 
                    alt="Aha Psychological"
                    fill
                    className="object-contain"
                  />
                </motion.div>
                <p className="text-sm font-medium text-gray-700 text-center">Aha Psychological</p>
              </motion.div>
              
              <motion.div className="flex flex-col items-center" variants={itemVariants}>
                <motion.div className="relative w-32 h-32 mb-4" whileHover={{ y: -6 }} transition={{ type: "spring", stiffness: 400, damping: 18 }}>
                  <Image 
                    src="/New folder/iCog Labs AI Research and Software Development.jpeg" 
                    alt="iCog Labs AI Research and Software Development"
                    fill
                    className="object-contain"
                  />
                </motion.div>
                <p className="text-sm font-medium text-gray-700 text-center">iCog Labs AI Research and Software Development</p>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </motion.section>
    </div>
  )
}
