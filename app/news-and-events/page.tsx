"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { Calendar, Clock, MapPin, Newspaper, Users, Award, Sparkles, ArrowRight, Zap, Target, Shield } from "lucide-react"
import { motion, useScroll, useTransform } from "framer-motion"
import { useTheme } from "next-themes"
import Image from "next/image"

export default function NewsAndEventsPage() {
  const { theme } = useTheme()
  const { scrollYProgress } = useScroll()
  const y = useTransform(scrollYProgress, [0, 1], [0, -50])
  
  const newsItems = [
    {
      title: "Program Introduces New Digital Intervention Features",
      date: "March 15, 2024",
      category: "Product Update",
      excerpt:
        "We're excited to announce the launch of new advanced assessment features including adaptive testing capabilities and enhanced analytics dashboard for educators.",
      image: "/educational-technology-dashboard.jpg",
    },
    {
      title: "Partnership Announcement with Ministry of Education",
      date: "March 10, 2024",
      category: "Partnership",
      excerpt:
        "EPA Item Bank signs strategic partnership agreement with the Ministry of Education to expand access to quality assessment tools across all regions of Ethiopia.",
      image: "/partnership-handshake-education.jpg",
    },
    {
      title: "Research Study Shows Improved Learning Outcomes",
      date: "February 28, 2024",
      category: "Research",
      excerpt:
        "New research demonstrates significant improvements in student learning outcomes in schools using EPA Item Bank assessments compared to traditional methods.",
      image: "/students-learning-classroom.jpg",
    },
    {
      title: "10,000 Practitioners Trained in Psychosocial Software Engineering",
      date: "February 20, 2024",
      category: "Milestone",
      excerpt:
        "We've reached a major milestone with over 10,000 teachers across Ethiopia now actively using the item bank to create and administer assessments.",
      image: "/teachers-celebrating-milestone.jpg",
    },
    {
      title: "New Training Program for Item Writers Launched",
      date: "February 5, 2024",
      category: "Training",
      excerpt:
        "Comprehensive training program launched to build capacity of educators in developing high-quality, psychometrically sound test items.",
      image: "/training-workshop-education.jpg",
    },
    {
      title: "Program Wins Innovation Award",
      date: "January 25, 2024",
      category: "Award",
      excerpt:
        "The platform has been recognized with the National Education Innovation Award for its contribution to improving assessment quality in Ethiopia.",
      image: "/award-trophy-education.jpg",
    },
  ]

  const upcomingEvents = [
    {
      title: "Annual Assessment Conference 2024",
      date: "April 15-17, 2024",
      time: "9:00 AM - 5:00 PM",
      location: "Addis Ababa Conference Center",
      type: "Conference",
      description:
        "Join educators, researchers, and policymakers for three days of presentations, workshops, and networking focused on educational assessment excellence.",
    },
    {
      title: "Item Writing Workshop",
      date: "April 22, 2024",
      time: "10:00 AM - 4:00 PM",
      location: "EPA Training Center",
      type: "Workshop",
      description:
        "Hands-on workshop for educators interested in developing high-quality test items. Learn best practices in item construction and validation.",
    },
    {
      title: "Webinar: Using Data to Improve Learning",
      date: "April 28, 2024",
      time: "2:00 PM - 3:30 PM",
      location: "Online",
      type: "Webinar",
      description:
        "Free online session exploring how to use assessment data effectively to identify learning gaps and inform instructional decisions.",
    },
    {
      title: "Regional Training - Oromia",
      date: "May 5-6, 2024",
      time: "9:00 AM - 5:00 PM",
      location: "Adama, Oromia Region",
      type: "Training",
      description:
        "Two-day intensive training for educators in Oromia region on using the EPA Item Bank platform and creating effective assessments.",
    },
  ]

  const getCategoryColor = (category: string) => {
    const colors: Record<string, string> = {
      "Product Update": "bg-blue-100 text-blue-700",
      Partnership: "bg-green-100 text-green-700",
      Research: "bg-purple-100 text-purple-700",
      Milestone: "bg-orange-100 text-orange-700",
      Training: "bg-teal-100 text-teal-700",
      Award: "bg-red-100 text-red-700",
    }
    return colors[category] || "bg-gray-100 text-gray-700"
  }

  const getEventTypeColor = (type: string) => {
    const colors: Record<string, string> = {
      Conference: "bg-blue-100 text-blue-700",
      Workshop: "bg-green-100 text-green-700",
      Webinar: "bg-purple-100 text-purple-700",
      Training: "bg-orange-100 text-orange-700",
    }
    return colors[type] || "bg-gray-100 text-gray-700"
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
                }`}>News & Events</span>
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
                News & Events
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
              Stay updated with the latest news, announcements, and upcoming events from the Master of Social Work in Psychosocial Software Engineering
            </motion.p>
          </div>
        </div>
      </motion.section>

      {/* Enhanced Latest News Section */}
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
            className="flex items-center gap-3 mb-12"
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
          >
            <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center shadow-lg">
              <Newspaper className="w-6 h-6 text-white" />
            </div>
            <h2 className={`text-4xl md:text-5xl font-black leading-tight transition-colors duration-500 ${
              theme === 'dark' ? 'text-white' : 'text-gray-900'
            }`}>
              <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                Latest News
              </span>
            </h2>
          </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {newsItems.map((news, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
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
                  <div className="relative">
                    <img 
                      src={news.image || "/placeholder.svg"} 
                      alt={news.title} 
                      className="w-full h-48 object-cover relative z-10" 
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent z-20"></div>
                  </div>
                  <div className="relative p-6 z-30">
                    <div className="flex items-center justify-between mb-4">
                      <Badge className={`${getCategoryColor(news.category)} backdrop-blur-sm border`}>
                        {news.category}
                      </Badge>
                      <span className={`text-sm transition-colors duration-500 ${
                        theme === 'dark' ? 'text-gray-300' : 'text-gray-600'
                      }`}>{news.date}</span>
                    </div>
                    <h3 className={`text-xl font-bold mb-3 transition-colors duration-500 ${
                      theme === 'dark' ? 'text-white' : 'text-gray-900'
                    }`}>{news.title}</h3>
                    <p className={`leading-relaxed mb-4 transition-colors duration-500 ${
                      theme === 'dark' ? 'text-gray-300' : 'text-gray-700'
                    }`}>{news.excerpt}</p>
                    <Button 
                      variant="link" 
                      className="p-0 h-auto text-blue-400 hover:text-blue-300 transition-colors duration-300 flex items-center gap-2"
                    >
                      Read More <ArrowRight className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Upcoming Events Section */}
      {/* <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
              <Calendar className="w-6 h-6 text-green-600" />
            </div>
            <h2 className="text-3xl font-bold text-gray-900">Upcoming Events</h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-6 max-w-6xl mx-auto">
            {upcomingEvents.map((event, index) => (
              <Card key={index} className="border-2 hover:border-blue-600 transition-colors">
                <CardHeader>
                  <div className="flex items-start justify-between mb-2">
                    <Badge className={getEventTypeColor(event.type)}>{event.type}</Badge>
                  </div>
                  <CardTitle className="text-xl">{event.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3 mb-4">
                    <div className="flex items-center gap-2 text-gray-700">
                      <Calendar className="w-4 h-4 text-blue-600 flex-shrink-0" />
                      <span className="text-sm">{event.date}</span>
                    </div>
                    <div className="flex items-center gap-2 text-gray-700">
                      <Clock className="w-4 h-4 text-blue-600 flex-shrink-0" />
                      <span className="text-sm">{event.time}</span>
                    </div>
                    <div className="flex items-center gap-2 text-gray-700">
                      <MapPin className="w-4 h-4 text-blue-600 flex-shrink-0" />
                      <span className="text-sm">{event.location}</span>
                    </div>
                  </div>
                  <p className="text-gray-700 leading-relaxed mb-4">{event.description}</p>
                  <Button className="w-full">Register Now</Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section> */}

      <SiteFooter />
    </div>
  )
}
