"use client"

import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { motion, useScroll, useTransform } from "framer-motion"
import { BookOpen, BarChart3, CheckCircle2, Database, TrendingUp, Shield, Zap, ArrowRight, Sparkles, Target, Rocket } from "lucide-react"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { AuthModal } from "@/components/auth-modal"
import Image from "next/image"
import { useTheme } from "next-themes"

import { useState, useEffect } from "react"


export default function HomePage() {
  const [authModalOpen, setAuthModalOpen] = useState(false)
  const [showMore, setShowMore] = useState(false)
  const [currentUser, setCurrentUser] = useState<{ name: string } | null>(null)
  const { theme } = useTheme()
  const { scrollYProgress } = useScroll()
  const y = useTransform(scrollYProgress, [0, 1], [0, -50])

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
    const onVis = () => loadUser()
    document.addEventListener('visibilitychange', onVis)
    return () => { isMounted = false; document.removeEventListener('visibilitychange', onVis) }
  }, [])

  return (
    <div className={`min-h-screen relative overflow-hidden transition-colors duration-500 ${
      theme === 'dark' 
        ? 'bg-gradient-to-br from-gray-900 via-blue-900 to-indigo-900' 
        : 'bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50'
    }`}>
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div 
          style={{ y }}
          className={`absolute -top-40 -right-40 w-80 h-80 rounded-full mix-blend-multiply filter blur-xl animate-pulse ${
            theme === 'dark' ? 'bg-blue-500 opacity-30' : 'bg-blue-400 opacity-20'
          }`}
        ></motion.div>
        <motion.div 
          style={{ y: useTransform(scrollYProgress, [0, 1], [0, 30]) }}
          className={`absolute -bottom-40 -left-40 w-80 h-80 rounded-full mix-blend-multiply filter blur-xl animate-pulse delay-1000 ${
            theme === 'dark' ? 'bg-purple-500 opacity-30' : 'bg-purple-400 opacity-20'
          }`}
        ></motion.div>
        <motion.div 
          style={{ y: useTransform(scrollYProgress, [0, 1], [0, -20]) }}
          className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full mix-blend-multiply filter blur-xl animate-pulse delay-500 ${
            theme === 'dark' ? 'bg-indigo-500 opacity-20' : 'bg-indigo-400 opacity-10'
          }`}
        ></motion.div>
      </div>
      
      <SiteHeader />

      {/* Hero Section with Modern Gen Z Styling */}
      <motion.section
        className="relative min-h-screen flex items-center justify-center overflow-hidden"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
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

        <div className="container mx-auto px-4 text-center relative z-10">
          <div className="max-w-6xl mx-auto">
            {/* Floating badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className={`inline-flex items-center gap-3 backdrop-blur-md border rounded-full px-6 py-3 mb-8 transition-all duration-500 ${
                theme === 'dark' 
                  ? 'bg-white/10 border-white/20' 
                  : 'bg-white/20 border-white/30'
              }`}
            >
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
              <Sparkles className="w-4 h-4 text-green-400" />
              <span className={`font-medium transition-colors duration-500 ${
                theme === 'dark' ? 'text-white/90' : 'text-white/90'
              }`}>Next-Gen Educational Platform</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-6xl md:text-7xl lg:text-8xl font-black text-white mb-8 leading-tight"
            >
              <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                Revolutionizing
              </span>
              <br />
              <span className="text-white">Educational</span>
              <br />
              <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-indigo-400 bg-clip-text text-transparent">
                Assessments
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="text-xl md:text-2xl text-blue-100 mb-12 max-w-4xl mx-auto leading-relaxed"
            >
              A cutting-edge <span className="font-semibold text-white">Psychosocial Software Engineering</span> platform 
              delivering high-quality, validated test items for the Ethiopian education system
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.7 }}
              className="flex flex-col sm:flex-row gap-6 justify-center items-center"
            >
              <motion.div
                whileHover={{ 
                  scale: 1.05, 
                  y: -2,
                  rotateX: 5,
                  rotateY: 5,
                  transition: { type: "spring", stiffness: 300, damping: 20 }
                }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                className="perspective-1000"
              >
                <Link href="/aboutUs">
                  <Button 
                    size="lg" 
                    className="text-lg px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white border-0 rounded-2xl shadow-2xl hover:shadow-blue-500/25 transition-all duration-300 flex items-center gap-3 transform-gpu"
                    style={{ transformStyle: 'preserve-3d' }}
                  >
                    <Rocket className="w-5 h-5" />
                    Explore MSW-PSE
                    <ArrowRight className="w-4 h-4" />
                  </Button>
                </Link>
              </motion.div>

              <motion.div
                whileHover={{ 
                  scale: 1.05, 
                  y: -2,
                  rotateX: -5,
                  rotateY: -5,
                  transition: { type: "spring", stiffness: 300, damping: 20 }
                }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                className="perspective-1000"
              >
                <Button 
                  size="lg" 
                  variant="outline"
                  className={`text-lg px-8 py-4 backdrop-blur-md border text-white hover:bg-white/20 rounded-2xl shadow-xl transition-all duration-300 flex items-center gap-3 transform-gpu ${
                    theme === 'dark' 
                      ? 'bg-white/10 border-white/30' 
                      : 'bg-white/20 border-white/40'
                  }`}
                  style={{ transformStyle: 'preserve-3d' }}
                >
                  <Target className="w-5 h-5" />
                  View Demo
                  <ArrowRight className="w-4 h-4" />
                </Button>
              </motion.div>
            </motion.div>

            {/* Floating stats */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.9 }}
              className="mt-16 grid grid-cols-3 gap-8 max-w-2xl mx-auto"
            >
              {[
                { number: "10K+", label: "Test Items" },
                { number: "500+", label: "Educators" },
                { number: "99%", label: "Accuracy" }
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 1 + index * 0.1 }}
                  className="text-center"
                >
                  <div className="text-3xl font-bold text-white mb-2">{stat.number}</div>
                  <div className="text-blue-200 text-sm font-medium">{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Features Section with Modern Design */}
      <motion.section
        id="features"
        className="relative py-32 overflow-hidden"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        {/* Background gradient */}
        <div className={`absolute inset-0 transition-colors duration-500 ${
          theme === 'dark' 
            ? 'bg-gradient-to-br from-gray-800 via-blue-900 to-indigo-900' 
            : 'bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50'
        }`}></div>
        
        <div className="container mx-auto px-4 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-center mb-20"
          >
            <div className={`inline-flex items-center gap-3 backdrop-blur-sm border rounded-full px-6 py-3 mb-8 transition-all duration-500 ${
              theme === 'dark' 
                ? 'bg-blue-900/30 border-blue-700/50' 
                : 'bg-blue-100/50 border-blue-200/50'
            }`}>
              <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
              <Sparkles className="w-4 h-4 text-blue-500" />
              <span className={`font-medium transition-colors duration-500 ${
                theme === 'dark' ? 'text-blue-300' : 'text-blue-700'
              }`}>Why Choose MSW-PSE?</span>
            </div>
            
            <h3 className={`text-5xl md:text-6xl font-black mb-6 leading-tight transition-colors duration-500 ${
              theme === 'dark' ? 'text-white' : 'text-gray-900'
            }`}>
              <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent">
                Next-Level
              </span>
              <br />
              <span className={theme === 'dark' ? 'text-white' : 'text-gray-900'}>Educational Innovation</span>
            </h3>
            <p className={`text-xl max-w-3xl mx-auto leading-relaxed transition-colors duration-500 ${
              theme === 'dark' ? 'text-gray-300' : 'text-gray-600'
            }`}>
              Our cutting-edge platform revolutionizes educational assessments with data-driven insights and 
              <span className="font-semibold text-blue-600"> psychometric excellence</span>
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: CheckCircle2,
                title: "Quality Assessments",
                description: "High-quality, validated test items ensure accurate and reliable educational assessments",
                gradient: "from-blue-500 to-cyan-500",
                bgColor: theme === 'dark' ? "bg-blue-900/30" : "bg-blue-50",
                iconColor: "text-blue-600",
                secondaryIcon: Sparkles
              },
              {
                icon: Database,
                title: "Resource Efficiency",
                description: "Centralized platform reduces duplication and maximizes resource utilization",
                gradient: "from-green-500 to-emerald-500",
                bgColor: theme === 'dark' ? "bg-green-900/30" : "bg-green-50",
                iconColor: "text-green-600",
                secondaryIcon: Zap
              },
              {
                icon: TrendingUp,
                title: "Continuous Improvement",
                description: "Regular updates and psychometric analysis support ongoing enhancement",
                gradient: "from-purple-500 to-pink-500",
                bgColor: theme === 'dark' ? "bg-purple-900/30" : "bg-purple-50",
                iconColor: "text-purple-600",
                secondaryIcon: Rocket
              },
              {
                icon: BookOpen,
                title: "Enhanced Accessibility",
                description: "Easy access to quality assessment tools for educators nationwide",
                gradient: "from-orange-500 to-red-500",
                bgColor: theme === 'dark' ? "bg-orange-900/30" : "bg-orange-50",
                iconColor: "text-orange-600",
                secondaryIcon: Target
              }
            ].map((feature, index) => (
            <motion.div
                key={index}
                initial={{ opacity: 0, y: 40, rotateY: -15 }}
                whileInView={{ opacity: 1, y: 0, rotateY: 0 }}
              viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ 
                scale: 1.05, 
                  y: -8,
                  rotateY: 5,
                  transition: { duration: 0.3 }
                }}
                className="group relative"
              >
                <div className="relative h-full">
                  {/* Glassmorphism card */}
                  <div className={`absolute inset-0 backdrop-blur-lg rounded-3xl border shadow-2xl group-hover:shadow-3xl transition-all duration-500 ${
                    theme === 'dark' 
                      ? 'bg-white/10 border-white/20' 
                      : 'bg-white/20 border-white/30'
                  }`}></div>
                  
                  {/* Gradient overlay */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} opacity-5 rounded-3xl group-hover:opacity-10 transition-opacity duration-500`}></div>
                  
                  <div className="relative p-8 h-full flex flex-col">
                    {/* Icon with modern styling */}
                    <div className="relative mb-6">
                      <div className={`w-16 h-16 ${feature.bgColor} rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                        <feature.icon className={`w-8 h-8 ${feature.iconColor}`} />
                      </div>
                      <div className="absolute -top-2 -right-2 w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 transform group-hover:scale-110">
                        <feature.secondaryIcon className="w-4 h-4 text-white" />
                      </div>
                    </div>
                    
                    <h4 className={`text-2xl font-bold mb-4 group-hover:text-blue-600 transition-colors duration-300 ${
                      theme === 'dark' ? 'text-white' : 'text-gray-900'
                    }`}>
                      {feature.title}
                    </h4>
                    
                    <p className={`leading-relaxed flex-grow transition-colors duration-300 ${
                      theme === 'dark' 
                        ? 'text-gray-300 group-hover:text-gray-200' 
                        : 'text-gray-600 group-hover:text-gray-700'
                    }`}>
                      {feature.description}
                    </p>
                    
                    {/* Hover effect line */}
                    <div className="absolute bottom-0 left-8 right-8 h-1 bg-gradient-to-r from-transparent via-blue-500 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-full"></div>
                  </div>
                </div>
                  </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* How It Works Section - Modern Design */}
      <motion.section 
        id="how-it-works" 
        className="relative py-32 overflow-hidden"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        {/* Animated background */}
        <div className={`absolute inset-0 transition-colors duration-500 ${
          theme === 'dark' 
            ? 'bg-gradient-to-br from-gray-800 via-blue-900 to-indigo-900' 
            : 'bg-gradient-to-br from-blue-100 via-indigo-100 to-purple-100'
        }`}></div>
        <div className="absolute inset-0">
          <div className={`absolute top-20 left-10 w-32 h-32 rounded-full blur-2xl animate-pulse ${
            theme === 'dark' ? 'bg-blue-400/20' : 'bg-blue-300/20'
          }`}></div>
          <div className={`absolute bottom-20 right-10 w-40 h-40 rounded-full blur-2xl animate-pulse delay-1000 ${
            theme === 'dark' ? 'bg-purple-400/20' : 'bg-purple-300/20'
          }`}></div>
          <div className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-60 h-60 rounded-full blur-3xl animate-pulse delay-500 ${
            theme === 'dark' ? 'bg-indigo-400/10' : 'bg-indigo-300/10'
          }`}></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-center mb-20"
          >
            <div className={`inline-flex items-center gap-3 backdrop-blur-sm border rounded-full px-6 py-3 mb-8 transition-all duration-500 ${
              theme === 'dark' 
                ? 'bg-white/10 border-white/20' 
                : 'bg-white/50 border-blue-200/50'
            }`}>
              <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
              <Target className="w-4 h-4 text-blue-500" />
              <span className={`font-medium transition-colors duration-500 ${
                theme === 'dark' ? 'text-blue-300' : 'text-blue-700'
              }`}>Simple Process</span>
            </div>
            
            <h3 className={`text-5xl md:text-6xl font-black mb-6 leading-tight transition-colors duration-500 ${
              theme === 'dark' ? 'text-white' : 'text-gray-900'
            }`}>
              <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent">
                How It
              </span>
              <br />
              <span className={theme === 'dark' ? 'text-white' : 'text-gray-900'}>Works</span>
            </h3>
            <p className={`text-xl max-w-3xl mx-auto leading-relaxed transition-colors duration-500 ${
              theme === 'dark' ? 'text-gray-300' : 'text-gray-600'
            }`}>
              From item selection to psychometric insights - 
              <span className="font-semibold text-blue-600"> streamlined for success</span>
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-12 max-w-6xl mx-auto">
            {[
              {
                step: "01",
                title: "Select Test Items",
                description: "Browse and select from our extensive database of validated test items tailored to your needs",
                icon: Target,
                gradient: "from-blue-500 to-cyan-500",
                bgGradient: theme === 'dark' ? "from-blue-900/30 to-cyan-900/30" : "from-blue-50 to-cyan-50"
              },
              {
                step: "02", 
                title: "Generate Test",
                description: "Automatically create assessments for placement, formative, diagnostic, or evaluative purposes",
                icon: Zap,
                gradient: "from-purple-500 to-pink-500",
                bgGradient: theme === 'dark' ? "from-purple-900/30 to-pink-900/30" : "from-purple-50 to-pink-50"
              },
              {
                step: "03",
                title: "Analyze Results", 
                description: "Gain valuable psychometric insights and data-driven analysis to improve learning outcomes",
                icon: BarChart3,
                gradient: "from-indigo-500 to-blue-500",
                bgGradient: theme === 'dark' ? "from-indigo-900/30 to-blue-900/30" : "from-indigo-50 to-blue-50"
              }
            ].map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40, scale: 0.9 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                whileHover={{ 
                  scale: 1.05, 
                  y: -10,
                  transition: { duration: 0.3 }
                }}
                className="group relative"
              >
                {/* Connection line (except for last item) */}
                {index < 2 && (
                  <div className="hidden md:block absolute top-1/2 -right-6 w-12 h-0.5 bg-gradient-to-r from-blue-300 to-purple-300 transform -translate-y-1/2 z-0"></div>
                )}
                
                <div className="relative">
                  {/* Main card */}
                  <div className={`relative backdrop-blur-lg rounded-3xl border shadow-2xl p-8 group-hover:shadow-3xl transition-all duration-500 ${
                    theme === 'dark' 
                      ? 'bg-white/10 border-white/20' 
                      : 'bg-white/40 border-white/50'
                  }`}>
                    {/* Gradient background */}
                    <div className={`absolute inset-0 bg-gradient-to-br ${step.bgGradient} opacity-30 rounded-3xl group-hover:opacity-50 transition-opacity duration-500`}></div>
                    
                    <div className="relative z-10">
                      {/* Step number with modern styling */}
                      <div className="flex items-center justify-between mb-6">
                        <div className={`w-20 h-20 bg-gradient-to-br ${step.gradient} rounded-2xl flex items-center justify-center text-white font-black text-2xl shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                          {step.step}
                        </div>
                        <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 transform group-hover:scale-110">
                          <step.icon className="w-6 h-6 text-white" />
                        </div>
                      </div>
                      
                      <h4 className={`text-2xl font-bold mb-4 group-hover:text-blue-600 transition-colors duration-300 ${
                        theme === 'dark' ? 'text-white' : 'text-gray-900'
                      }`}>
                        {step.title}
                      </h4>
                      
                      <p className={`leading-relaxed transition-colors duration-300 ${
                        theme === 'dark' 
                          ? 'text-gray-300 group-hover:text-gray-200' 
                          : 'text-gray-600 group-hover:text-gray-700'
                      }`}>
                        {step.description}
                      </p>
                      
                      {/* Progress indicator */}
                      <div className="mt-6 flex items-center gap-2">
                        <div className={`flex-1 h-1 rounded-full overflow-hidden ${
                          theme === 'dark' ? 'bg-gray-700' : 'bg-gray-200'
                        }`}>
                          <div className={`h-full bg-gradient-to-r ${step.gradient} rounded-full transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left`}></div>
                        </div>
                        <span className={`text-sm font-medium transition-colors duration-300 ${
                          theme === 'dark' ? 'text-gray-400' : 'text-gray-500'
                        }`}>Step {index + 1}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* What is Psychosocial Software Engineering - Modern Design */}
      <motion.section 
        className="relative py-32 overflow-hidden"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        {/* Animated background */}
        <div className={`absolute inset-0 transition-colors duration-500 ${
          theme === 'dark' 
            ? 'bg-gradient-to-br from-gray-800 via-blue-900 to-indigo-900' 
            : 'bg-gradient-to-br from-indigo-50 via-blue-50 to-purple-50'
        }`}></div>
        <div className="absolute inset-0">
          <div className={`absolute top-10 right-20 w-40 h-40 rounded-full blur-3xl animate-pulse ${
            theme === 'dark' ? 'bg-blue-400/20' : 'bg-blue-300/20'
          }`}></div>
          <div className={`absolute bottom-10 left-20 w-32 h-32 rounded-full blur-3xl animate-pulse delay-1000 ${
            theme === 'dark' ? 'bg-purple-400/20' : 'bg-purple-300/20'
          }`}></div>
          <div className={`absolute top-1/3 left-1/3 w-24 h-24 rounded-full blur-2xl animate-pulse delay-500 ${
            theme === 'dark' ? 'bg-indigo-400/20' : 'bg-indigo-300/20'
          }`}></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="group"
            >
              {/* Glassmorphism card */}
              <div className="relative bg-white/20 backdrop-blur-xl rounded-3xl border border-white/30 shadow-2xl overflow-hidden group-hover:shadow-3xl transition-all duration-500">
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-purple-500/5 to-indigo-500/5 group-hover:from-blue-500/10 group-hover:via-purple-500/10 group-hover:to-indigo-500/10 transition-all duration-500"></div>
                
                <div className="relative p-8 md:p-12">
                  {/* Header with modern styling */}
                  <div className="text-center mb-12">
                    <div className={`inline-flex items-center gap-3 backdrop-blur-sm border rounded-full px-6 py-3 mb-8 transition-all duration-500 ${
                      theme === 'dark' 
                        ? 'bg-white/20 border-white/30' 
                        : 'bg-white/30 border-white/40'
                    }`}>
                      <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
                      <Sparkles className="w-4 h-4 text-blue-500" />
                      <span className={`font-medium transition-colors duration-500 ${
                        theme === 'dark' ? 'text-blue-300' : 'text-blue-700'
                      }`}>Program Overview</span>
                    </div>
                    
                    <h3 className={`text-4xl md:text-5xl font-black mb-6 leading-tight transition-colors duration-500 ${
                      theme === 'dark' ? 'text-white' : 'text-gray-900'
                    }`}>
                      <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent">
                        What is
                    </span>
                    <br />
                      <span className={theme === 'dark' ? 'text-white' : 'text-gray-900'}>Psychosocial Software Engineering?</span>
                    </h3>
                  </div>
                  
                  {/* Content with modern typography */}
                  <div className="space-y-8">
                    <div className="prose prose-lg max-w-none">
                      <p className={`text-xl leading-relaxed font-medium transition-colors duration-500 ${
                        theme === 'dark' ? 'text-gray-300' : 'text-gray-700'
                      }`}>
                    {showMore ? (
                      <>
                        The Master of Social Work in Psychosocial Software Engineering (MSW-PSE) is a pioneering interdisciplinary graduate program designed to equip students with the unique ability to integrate psychosocial knowledge and software engineering expertise. This two-year, 120-ECTS program is structured around outcome-based education and aligned with international standards, including the Bologna Process and the European Standards and Guidelines (ESG) for quality assurance. The curriculum is designed to produce ethical, technically skilled, and socially conscious professionals capable of developing scalable, inclusive digital solutions for mental health and social well-being. Students engage in foundational training in software development, data analytics, mobile and web platforms, and cloud technologies, all contextualized within human-centered design and psychosocial principles. Through a combination of theory, applied practice, and a 30-ECTS capstone project, graduates will demonstrate competencies in programming, stakeholder engagement, ethical compliance, and community-embedded innovation. The program also emphasizes quality assurance through systematic auditing, faculty evaluation, student feedback, external reviews, and collaboration with professional associations. It prepares graduates for impactful careers in digital social services, mental health tech, nonprofit innovation, and responsible AI application, both locally and globally.
                      </>
                    ) : (
                      <>
                        The Master of Social Work in Psychosocial Software Engineering (MSW-PSE) is a pioneering interdisciplinary graduate program designed to equip students with the unique ability to integrate psychosocial knowledge and software engineering expertise. This two-year, 120-ECTS program prepares graduates for impactful careers in digital social services, mental health tech, nonprofit innovation, and responsible AI application.
                      </>
                    )}
                      </p>
                    </div>
                  
                  {showMore && (
                    <motion.div 
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.5 }}
                      className="grid sm:grid-cols-2 gap-6 mt-8"
                      >
                        {[
                          { icon: Shield, title: "Placement Testing", description: "Determine appropriate learning levels", color: "blue" },
                          { icon: Zap, title: "Formative Assessment", description: "Monitor ongoing learning progress", color: "purple" },
                          { icon: BarChart3, title: "Diagnostic Testing", description: "Identify learning gaps and needs", color: "indigo" },
                          { icon: CheckCircle2, title: "Evaluative Testing", description: "Measure learning outcomes", color: "green" }
                        ].map((item, index) => (
                      <motion.div 
                            key={index}
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.4, delay: index * 0.1 }}
                            className={`flex items-start gap-4 p-4 backdrop-blur-sm rounded-2xl border transition-all duration-300 ${
                              theme === 'dark' 
                                ? 'bg-white/10 border-white/20 hover:bg-white/20' 
                                : 'bg-white/20 border-white/30 hover:bg-white/30'
                            }`}
                          >
                            <div className={`w-10 h-10 bg-${item.color}-100 rounded-xl flex items-center justify-center flex-shrink-0`}>
                              <item.icon className={`w-5 h-5 text-${item.color}-600`} />
                        </div>
                        <div>
                              <h5 className="font-bold text-gray-900 mb-1">{item.title}</h5>
                              <p className="text-sm text-gray-600">{item.description}</p>
                        </div>
                      </motion.div>
                        ))}
                    </motion.div>
                  )}
                  
                    {/* Modern CTA button */}
                    <div className="flex justify-center mt-8">
                      <motion.button
                        whileHover={{ scale: 1.05, y: -2 }}
                      whileTap={{ scale: 0.95 }}
                        onClick={() => setShowMore(!showMore)}
                        className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 flex items-center gap-3"
                      >
                        {showMore ? "Show Less" : "Learn More"}
                        <ArrowRight className={`w-4 h-4 transition-transform duration-300 ${showMore ? 'rotate-180' : ''}`} />
                      </motion.button>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* CTA Section - Modern Design */}
      {!currentUser && (
        <motion.section 
          className="relative py-32 overflow-hidden"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          {/* Animated background */}
          <div className="absolute inset-0 bg-gradient-to-br from-blue-600 via-purple-600 to-indigo-600"></div>
          <div className="absolute inset-0">
            <div className="absolute top-20 left-20 w-40 h-40 bg-white/10 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute bottom-20 right-20 w-32 h-32 bg-white/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-60 h-60 bg-white/5 rounded-full blur-3xl animate-pulse delay-500"></div>
          </div>

          <div className="container mx-auto px-4 text-center relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="max-w-4xl mx-auto"
            >
              {/* Floating badge */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-md border border-white/30 rounded-full px-6 py-3 mb-8"
              >
                <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
                <span className="text-white/90 font-medium">Ready to Get Started?</span>
            </motion.div>
            
            <motion.h3 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.8, delay: 0.4 }}
                className="text-5xl md:text-6xl font-black text-white mb-8 leading-tight"
            >
                <span className="bg-gradient-to-r from-white via-blue-100 to-purple-100 bg-clip-text text-transparent">
                Ready to Transform
              </span>
              <br />
                <span className="text-white">Your Assessments?</span>
            </motion.h3>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="text-xl md:text-2xl mb-12 text-blue-100 max-w-3xl mx-auto leading-relaxed"
            >
                Join educators across Ethiopia in using 
                <span className="font-semibold text-white"> data-driven insights</span> to improve learning outcomes
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, delay: 0.8 }}
              className="flex flex-col sm:flex-row gap-6 justify-center items-center"
            >
              <motion.button
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setAuthModalOpen(true)}
                className="px-10 py-5 bg-white text-blue-600 font-bold text-lg rounded-2xl shadow-2xl hover:shadow-3xl transition-all duration-300 flex items-center gap-3"
              >
                <Rocket className="w-5 h-5" />
                Sign Up / Login
                <ArrowRight className="w-4 h-4" />
              </motion.button>
              
              <motion.button
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="px-10 py-5 bg-white/10 backdrop-blur-md border border-white/30 text-white font-semibold text-lg rounded-2xl shadow-xl hover:bg-white/20 transition-all duration-300 flex items-center gap-3"
              >
                <BookOpen className="w-5 h-5" />
                Learn More
                <ArrowRight className="w-4 h-4" />
              </motion.button>
              </motion.div>
              
              {/* Trust indicators */}
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.8, delay: 1 }}
                className="mt-16 grid grid-cols-3 gap-8 max-w-2xl mx-auto"
              >
                {[
                  { number: "500+", label: "Active Educators" },
                  { number: "10K+", label: "Test Items" },
                  { number: "99%", label: "Success Rate" }
                ].map((stat, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.5, delay: 1.2 + index * 0.1 }}
                    className="text-center"
                  >
                    <div className="text-3xl font-bold text-white mb-2">{stat.number}</div>
                    <div className="text-blue-200 text-sm font-medium">{stat.label}</div>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          </div>
        </motion.section>
      )}

      <SiteFooter />

      {/* AuthModal component */}
      <AuthModal open={authModalOpen} onOpenChange={setAuthModalOpen} />
    </div>
  )
}
