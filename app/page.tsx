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
  const [currentUser, setCurrentUser] = useState<{ name: string; isAdmin?: boolean } | null>(null)

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
          src="/New folder/AAUgate.jpg"
          alt="Background"
          fill
          className="object-cover opacity-20"
          priority
        />
        <div className="container mx-auto px-4 text-center relative z-10">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-5xl font-bold text-white mb-6 text-balance">
           Where psychology, social work, and software engineering unite to advance human well-being
          </h2>
          <p className="text-xl text-blue-100 mb-8 text-pretty leading-relaxed">
            Bridging empathy and technology, the MSW-PSE program empowers a new generation of professionals to design digital systems that understand people—not just process them. It’s where human insight meets software innovation for a more inclusive and mentally resilient digital world.
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
           The MSW-PSE program pioneers a new academic frontier where psychology, social work, and software engineering converge to create ethical, inclusive, and human-centered technologies that advance mental health, social equity, and community well-being.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            whileHover={{ scale: 1.04 }}
          >
            <Card className="border-2 hover:border-blue-600 transition-colors">
              <CardHeader>
                <div className="w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                 
                </div>
                <CardTitle className="text-xl">Interdisciplinary Innovation for Human Well-being</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base leading-relaxed">
                 This program is the first of its kind to unite psychology, social work, and software engineering, training professionals who design ethical, inclusive, and human-centered digital systems. It bridges technology with empathy — ensuring that digital tools enhance mental health, social equity, and community well-being rather than merely optimizing efficiency.
                </CardDescription>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            whileHover={{ scale: 1.04 }}
          >
            <Card className="border-2 hover:border-blue-600 transition-colors">
              <CardHeader>
                <div className="w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                </div>
                <CardTitle className="text-xl"> Career-Ready Skills for a Digital Care Economy</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base leading-relaxed">
                  Graduates gain both technical mastery (AI, mobile and web app development, cloud computing, cybersecurity) and psychosocial insight (behavioral analysis, ethical auditing, participatory design). This dual skill set prepares them for emerging global roles such as mental health tech developer, digital ethics specialist, or social innovation architect.
                </CardDescription>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            whileHover={{ scale: 1.04 }}
          >
            <Card className="border-2 hover:border-blue-600 transition-colors">
              <CardHeader>
                <div className="w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                </div>
                <CardTitle className="text-xl">National and Global Relevance</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base leading-relaxed">
                 The program was developed through national stakeholder workshops and needs assessments involving government, NGOs, and tech industries (e.g., Ethio-Telecom, UNICEF, Africa CDC). It responds to the rising demand for digital mental health interventions and data ethics in Africa, positioning graduates as pioneers in a globally relevant, socially impactful field.
                </CardDescription>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            whileHover={{ scale: 1.04 }}
          >
            <Card className="border-2 hover:border-blue-600 transition-colors">
              <CardHeader>
                <div className="w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                </div>
                <CardTitle className="text-xl"> Commitment to Quality, Ethics, and Real-World Impact</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base leading-relaxed">
                 Structured under the Bologna Process and European Standards for Quality Assurance, the MSW-PSE emphasizes evidence-based learning, ethical compliance, and community engagement. Through a 30-ECTS Capstone Project, students collaborate with industry or social service organizations to build real digital solutions addressing mental health and social care challenges.
                </CardDescription>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </motion.section>

      {/* How It Works Section */}
      <motion.section 
        id="how-it-works" 
        className="bg-gray-50 py-20"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">Who created this program?</h3>
           
          </div>
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
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
              <h4 className="text-xl font-semibold text-gray-900 mb-3">School of Social Work</h4>
              <p className="text-gray-600 leading-relaxed">
               College of Social Sciences, Arts and Humanities
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
              <h4 className="text-xl font-semibold text-gray-900 mb-3">School of Information Technology Engineering</h4>
              <p className="text-gray-600 leading-relaxed">
                College of Technology and Built Environment
              </p>
            </motion.div>
          </div>
          <div className="flex justify-center items-center mt-12">
            <div className="text-center">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Addis Ababa University</h3>
              <div className="relative w-48 h-48 mx-auto">
                <Image
                  src="/New folder/AAUlogo.png"
                  alt="Addis Ababa University Logo"
                  fill
                  className="object-contain mix-blend-multiply"
                />
              </div>
            </div>
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
      {/* {!currentUser && (
        <section className="bg-blue-600 text-white py-20">
          <div className="container mx-auto px-4 text-center">
            <h3 className="text-3xl font-bold mb-4">Ready to Engineer Human Well-being?</h3>
            <p className="text-xl mb-8 text-blue-100 max-w-2xl mx-auto">
              Become part of a new generation of professionals blending psychosocial insight with technology to create digital systems that care, connect, and empower communities.
            </p>
            <Button size="lg" variant="secondary" className="text-base" onClick={() => setAuthModalOpen(true)}>
              Sign Up / Login
            </Button>
          </div>
        </section>
      )} */}

      <SiteFooter />

      {/* AuthModal component */}
      <AuthModal open={authModalOpen} onOpenChange={setAuthModalOpen} />
    </div>
  )
}
