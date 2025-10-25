"use client"

import type React from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { Mail, Phone, MapPin, Clock, Sparkles, Send, ArrowRight, Zap, Target, Shield } from "lucide-react"
import { motion, useScroll, useTransform } from "framer-motion"
import { useTheme } from "next-themes"
import { useState } from "react"

export default function ContactUsPage() {
  const { theme } = useTheme()
  const { scrollYProgress } = useScroll()
  const y = useTransform(scrollYProgress, [0, 1], [0, -50])
  
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })

  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>("idle")
  const [error, setError] = useState("")

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus("loading")
    setError("")
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      })
      if (res.ok) {
        setStatus("success")
        setFormData({ name: "", email: "", subject: "", message: "" })
      } else {
        const data = await res.json()
        setError(data.error || "Failed to send message.")
        setStatus("error")
      }
    } catch (err) {
      setError("Network error. Please try again later.")
      setStatus("error")
    }
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
                }`}>Contact Us</span>
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
                Contact Us
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
              Get in touch with the Master of Social Work in Psychosocial Software Engineering team. We're here to help with your
              <motion.span 
                className="font-semibold text-white"
                whileHover={{ 
                  rotateX: 2,
                  rotateY: 2,
                  transition: { type: "spring", stiffness: 300, damping: 20 }
                }}
              >
                {" "}questions and inquiries{" "}
              </motion.span>
            </motion.p>
          </div>
        </div>
      </motion.section>

      {/* Enhanced Contact Information and Form */}
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
          <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Enhanced Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              whileHover={{ 
                scale: 1.02, 
                y: -5,
                rotateX: 3,
                rotateY: 3,
                transition: { type: "spring", stiffness: 300, damping: 20 }
              }}
              className="perspective-1000"
            >
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
                  Get in Touch
                </span>
              </motion.h2>
              
              <motion.p 
                className={`text-lg leading-relaxed mb-8 transition-colors duration-500 ${
                  theme === 'dark' ? 'text-gray-300' : 'text-gray-700'
                }`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                Have questions about the Master of Social Work in Psychosocial Software Engineering? Need support or want to learn more about our program?
                We'd love to hear from you. Reach out to us using any of the methods below.
              </motion.p>

              <div className="space-y-8">
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
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
                  className="perspective-1000"
                >
                  <div className={`relative backdrop-blur-xl rounded-3xl border shadow-2xl overflow-hidden transition-all duration-500 ${
                    theme === 'dark' 
                      ? 'bg-white/10 border-white/20' 
                      : 'bg-white/20 border-white/30'
                  }`}>
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-purple-500/10 to-indigo-500/10"></div>
                    <div className="relative p-6">
                      <div className="flex items-start gap-4">
                        <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center shadow-lg">
                          <MapPin className="w-6 h-6 text-white" />
                        </div>
                        <div>
                          <h3 className={`font-semibold text-lg mb-2 transition-colors duration-500 ${
                            theme === 'dark' ? 'text-white' : 'text-gray-900'
                          }`}>Office Address</h3>
                          <p className={`leading-relaxed transition-colors duration-500 ${
                            theme === 'dark' ? 'text-gray-300' : 'text-gray-700'
                          }`}>
                            Ethiopian Psychosocial Association
                            <br />
                            Addis Ababa, Ethiopia
                            <br />
                            P.O. Box: XXXX
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  whileHover={{ 
                    scale: 1.02, 
                    y: -5,
                    rotateX: -3,
                    rotateY: -3,
                    transition: { type: "spring", stiffness: 300, damping: 20 }
                  }}
                  className="perspective-1000"
                >
                  <div className={`relative backdrop-blur-xl rounded-3xl border shadow-2xl overflow-hidden transition-all duration-500 ${
                    theme === 'dark' 
                      ? 'bg-white/10 border-white/20' 
                      : 'bg-white/20 border-white/30'
                  }`}>
                    <div className="absolute inset-0 bg-gradient-to-br from-green-500/10 via-emerald-500/10 to-teal-500/10"></div>
                    <div className="relative p-6">
                      <div className="flex items-start gap-4">
                        <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-600 rounded-2xl flex items-center justify-center shadow-lg">
                          <Mail className="w-6 h-6 text-white" />
                        </div>
                        <div>
                          <h3 className={`font-semibold text-lg mb-2 transition-colors duration-500 ${
                            theme === 'dark' ? 'text-white' : 'text-gray-900'
                          }`}>Email</h3>
                          <p className={`transition-colors duration-500 ${
                            theme === 'dark' ? 'text-gray-300' : 'text-gray-700'
                          }`}>
                            General Inquiries:{" "}
                            <a href="mailto:info@epaitembank.com" className="text-blue-400 hover:text-blue-300 hover:underline transition-colors duration-300">
                              info@epaitembank.com
                            </a>
                          </p>
                          <p className={`transition-colors duration-500 ${
                            theme === 'dark' ? 'text-gray-300' : 'text-gray-700'
                          }`}>
                            Technical Support:{" "}
                            <a href="mailto:support@epaitembank.com" className="text-blue-400 hover:text-blue-300 hover:underline transition-colors duration-300">
                              support@epaitembank.com
                            </a>
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>

              <Card>
                <CardContent className="pt-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Phone className="w-6 h-6 text-purple-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-2">Phone</h3>
                      <p className="text-gray-700">Office: +251 11 XXX XXXX</p>
                      <p className="text-gray-700">Mobile: +251 9XX XXX XXX</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="pt-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Clock className="w-6 h-6 text-orange-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-2">Office Hours</h3>
                      <p className="text-gray-700">Monday - Friday: 8:00 AM - 5:00 PM</p>
                      <p className="text-gray-700">Saturday: 9:00 AM - 1:00 PM</p>
                      <p className="text-gray-700">Sunday: Closed</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
            </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            whileHover={{ 
              scale: 1.02, 
              y: -5,
              rotateX: -3,
              rotateY: -3,
              transition: { type: "spring", stiffness: 300, damping: 20 }
            }}
            className="perspective-1000"
          >
            <Card className="border-2">
              <CardHeader>
                <CardTitle className="text-2xl">Send Us a Message</CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="space-y-2">
                    <Label htmlFor="name">Full Name *</Label>
                    <Input
                      id="name"
                      placeholder="Enter your full name"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email">Email Address *</Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="your.email@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="subject">Subject *</Label>
                    <Input
                      id="subject"
                      placeholder="What is this regarding?"
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Message *</Label>
                    <Textarea
                      id="message"
                      placeholder="Tell us more about your inquiry..."
                      rows={6}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      required
                    />
                  </div>

                  <Button type="submit" className="w-full" size="lg" disabled={status === "loading"}>
                    {status === "loading" ? "Sending..." : "Send Message"}
                  </Button>
                  {status === "success" && (
                    <p className="text-green-600 text-center">Your message has been sent successfully!</p>
                  )}
                  {status === "error" && (
                    <p className="text-red-600 text-center">{error}</p>
                  )}
                </form>
              </CardContent>
            </Card>
          </motion.div>
        </div>
        </div>
      </motion.section>

      <SiteFooter />
    </div>
  )
}
