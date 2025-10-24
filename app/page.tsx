"use client"

import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { motion } from "framer-motion"
import { BookOpen, BarChart3, CheckCircle2, Database, TrendingUp, Shield, Zap } from "lucide-react"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { AuthModal } from "@/components/auth-modal"
import Image from "next/image"

import { useState, useEffect } from "react"


export default function HomePage() {
  const [authModalOpen, setAuthModalOpen] = useState(false)
  const [showMore, setShowMore] = useState(false)
  const [currentUser, setCurrentUser] = useState<{ name: string } | null>(null)

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
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <SiteHeader />

      {/* Hero Section with Animation */}
      <motion.section
        className="relative bg-gray-900 text-white py-30 overflow-hidden"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <Image
          src="/New folder/brain.jpg"
          alt="Background"
          fill
          className="object-cover opacity-20"
          priority
        />
        <div className="container mx-auto px-4 text-center relative z-10">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-5xl font-bold text-white mb-6 text-balance">
            Revolutionizing Educational Assessments with Data-Driven Insights
          </h2>
          <p className="text-xl text-blue-100 mb-8 text-pretty leading-relaxed">
            A multi-purpose  Psychosocial Software Engineering providing high-quality, validated test items for the Ethiopian education
            system
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.button
              whileHover={{ scale: 1.08 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              style={{ display: 'inline-block' }}
            >
              <Link href="/aboutUs">
                <Button size="lg" className="text-base">
                  Explore MSW-PSE
                </Button>
              </Link>
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.08 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              style={{ display: 'inline-block' }}
            >
            </motion.button>
          </div>
        </div>
        </div>
      </motion.section>

      {/* Features Section with Animation */}
      <motion.section
        id="features"
        className="container mx-auto px-4 py-20"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <div className="text-center mb-12">
          <h3 className="text-3xl font-bold text-gray-900 mb-4">Why Choose the Master of Social Work in Psychosocial Software Engineering?</h3>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Our platform ensures quality assessments and promotes resource efficiency across the education system
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            whileHover={{ scale: 1.08, zIndex: 2, boxShadow: "0 8px 32px rgba(0,0,0,0.18)" }}
            style={{ zIndex: 1 }}
          >
            <Card className="border-2 hover:border-blue-600 transition-colors">
              <CardHeader>
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                  <CheckCircle2 className="w-6 h-6 text-blue-600" />
                </div>
                <CardTitle className="text-xl">Quality Assessments</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base leading-relaxed">
                  High-quality, validated test items ensure accurate and reliable educational assessments
                </CardDescription>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            whileHover={{ scale: 1.08, zIndex: 2, boxShadow: "0 8px 32px rgba(0,0,0,0.18)" }}
            style={{ zIndex: 1 }}
          >
            <Card className="border-2 hover:border-blue-600 transition-colors">
              <CardHeader>
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                  <Database className="w-6 h-6 text-green-600" />
                </div>
                <CardTitle className="text-xl">Resource Efficiency</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base leading-relaxed">
                  Centralized platform reduces duplication and maximizes resource utilization
                </CardDescription>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            whileHover={{ scale: 1.08, zIndex: 2, boxShadow: "0 8px 32px rgba(0,0,0,0.18)" }}
            style={{ zIndex: 1 }}
          >
            <Card className="border-2 hover:border-blue-600 transition-colors">
              <CardHeader>
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                  <TrendingUp className="w-6 h-6 text-purple-600" />
                </div>
                <CardTitle className="text-xl">Continuous Improvement</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base leading-relaxed">
                  Regular updates and psychometric analysis support ongoing enhancement
                </CardDescription>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            whileHover={{ scale: 1.08, zIndex: 2, boxShadow: "0 8px 32px rgba(0,0,0,0.18)" }}
            style={{ zIndex: 1 }}
          >
            <Card className="border-2 hover:border-blue-600 transition-colors">
              <CardHeader>
                <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-4">
                  <BookOpen className="w-6 h-6 text-orange-600" />
                </div>
                <CardTitle className="text-xl">Enhanced Accessibility</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base leading-relaxed">
                  Easy access to quality assessment tools for educators nationwide
                </CardDescription>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </motion.section>

      {/* How It Works Section */}
      <motion.section 
        id="how-it-works" 
        className="bg-blue-200 py-20"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">How It Works</h3>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Simple, efficient process from item selection to psychometric insights
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <motion.div 
              className="text-center"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                1
              </div>
              <h4 className="text-xl font-semibold text-gray-900 mb-3">Select Test Items</h4>
              <p className="text-gray-600 leading-relaxed">
                Browse and select from our extensive database of validated test items tailored to your needs
              </p>
            </motion.div>
            <motion.div 
              className="text-center"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                2
              </div>
              <h4 className="text-xl font-semibold text-gray-900 mb-3">Generate Test</h4>
              <p className="text-gray-600 leading-relaxed">
                Automatically create assessments for placement, formative, diagnostic, or evaluative purposes
              </p>
            </motion.div>
            <motion.div 
              className="text-center"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                3
              </div>
              <h4 className="text-xl font-semibold text-gray-900 mb-3">Analyze Results</h4>
              <p className="text-gray-600 leading-relaxed">
                Gain valuable psychometric insights and data-driven analysis to improve learning outcomes
              </p>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* What is  Psychosocial Software Engineering*/}
      <motion.section 
        className="container mx-auto px-4 py-20"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Card className="border-2">
            <CardHeader>
              <CardTitle className="text-3xl text-center">What is  Psychosocial Software Engineering</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-lg text-gray-700 leading-relaxed">
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
              {showMore && (
                <div className="grid sm:grid-cols-2 gap-4 mt-6">
                <div className="flex items-start gap-3">
                  <Shield className="w-5 h-5 text-blue-600 mt-1 flex-shrink-0" />
                  <div>
                    <h5 className="font-semibold text-gray-900 mb-1">Placement Testing</h5>
                    <p className="text-sm text-gray-600">Determine appropriate learning levels</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Zap className="w-5 h-5 text-blue-600 mt-1 flex-shrink-0" />
                  <div>
                    <h5 className="font-semibold text-gray-900 mb-1">Formative Assessment</h5>
                    <p className="text-sm text-gray-600">Monitor ongoing learning progress</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <BarChart3 className="w-5 h-5 text-blue-600 mt-1 flex-shrink-0" />
                  <div>
                    <h5 className="font-semibold text-gray-900 mb-1">Diagnostic Testing</h5>
                    <p className="text-sm text-gray-600">Identify learning gaps and needs</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-blue-600 mt-1 flex-shrink-0" />
                  <div>
                    <h5 className="font-semibold text-gray-900 mb-1">Evaluative Testing</h5>
                    <p className="text-sm text-gray-600">Measure learning outcomes</p>
                  </div>
                </div>
              </div>
              )}
              <div className="flex justify-center mt-6">
                <Button 
                  onClick={() => setShowMore(!showMore)}
                  variant="outline"
                  className="text-blue-600 border-blue-600 hover:bg-blue-50"
                >
                  {showMore ? "Show Less" : "Show More"}
                </Button>
              </div>
            </CardContent>
          </Card>
          </motion.div>
        </div>
      </motion.section>

      {/* CTA Section - Only show if user is not logged in */}
      {!currentUser && (
        <section className="bg-blue-600 text-white py-20">
          <div className="container mx-auto px-4 text-center">
            <h3 className="text-3xl font-bold mb-4">Ready to Transform Your Assessments?</h3>
            <p className="text-xl mb-8 text-blue-100 max-w-2xl mx-auto">
              Join educators across Ethiopia in using data-driven insights to improve learning outcomes
            </p>
            <Button size="lg" variant="secondary" className="text-base" onClick={() => setAuthModalOpen(true)}>
              Sign Up / Login
            </Button>
          </div>
        </section>
      )}

      <SiteFooter />

      {/* AuthModal component */}
      <AuthModal open={authModalOpen} onOpenChange={setAuthModalOpen} />
    </div>
  )
}
