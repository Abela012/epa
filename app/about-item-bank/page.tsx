"use client"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"

import { Target, Eye, Award, Users, BookOpen, BarChart3, Shield } from "lucide-react"
import { motion } from "framer-motion"

export default function AboutItemBankPage() {
  return (
    <div className="min-h-screen bg-white">
      <SiteHeader />

      {/* Hero Section with Animation */}
      <motion.section
        className="bg-gradient-to-r from-blue-600 to-blue-700 text-white py-20"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-balance">About EPA Item Bank</h1>
            <p className="text-xl text-blue-100 leading-relaxed">
              A comprehensive national assessment platform revolutionizing education in Ethiopia through validated,
              high-quality test items and data-driven insights
            </p>
          </div>
        </div>
  </motion.section>

      {/* Overview Section with Animation */}
      <motion.section
        className="container mx-auto px-4 py-16"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">What is the EPA Item Bank?</h2>
          <div className="prose prose-lg max-w-none">
            <p className="text-gray-700 leading-relaxed mb-4">
              The EPA Item Bank is a multi-purpose national item bank developed by the Ethiopian Psychologists'
              Association (EPA) in collaboration with key educational partners. It serves as a centralized digital
              repository of high-quality, psychometrically validated test items designed to support various assessment
              needs across the Ethiopian education system.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              Our platform provides educators, institutions, and policymakers with access to scientifically validated
              assessment tools that ensure fairness, reliability, and validity in measuring student learning outcomes.
              By leveraging modern psychometric principles and technology, we aim to transform how educational
              assessments are created, administered, and analyzed in Ethiopia.
            </p>
          </div>
        </div>
  </motion.section>

      {/* Mission, Vision, Values with Animation */}
      <motion.section
        className="bg-gray-50 py-16"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <motion.div
              whileHover={{ scale: 1.08, zIndex: 2, boxShadow: "0 8px 32px rgba(0,0,0,0.18)" }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              style={{ zIndex: 1 }}
            >
              <Card className="border-2">
              <CardHeader>
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                  <Target className="w-6 h-6 text-blue-600" />
                </div>
                <CardTitle className="text-2xl">Our Mission</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 leading-relaxed">
                  To provide the Ethiopian education system with a comprehensive, scientifically validated item bank
                  that ensures quality assessments, promotes equity, and supports data-driven decision-making to improve
                  learning outcomes nationwide.
                </p>
              </CardContent>
              </Card>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.08, zIndex: 2, boxShadow: "0 8px 32px rgba(0,0,0,0.18)" }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              style={{ zIndex: 1 }}
            >
              <Card className="border-2">
              <CardHeader>
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                  <Eye className="w-6 h-6 text-green-600" />
                </div>
                <CardTitle className="text-2xl">Our Vision</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 leading-relaxed">
                  To be the leading national assessment platform in Ethiopia, recognized for excellence in educational
                  measurement, innovation in psychometric practices, and commitment to improving educational quality
                  through reliable and valid assessments.
                </p>
              </CardContent>
              </Card>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.08, zIndex: 2, boxShadow: "0 8px 32px rgba(0,0,0,0.18)" }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              style={{ zIndex: 1 }}
            >
              <Card className="border-2">
              <CardHeader>
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                  <Award className="w-6 h-6 text-purple-600" />
                </div>
                <CardTitle className="text-2xl">Our Values</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="text-gray-700 leading-relaxed space-y-2">
                  <li className="flex items-start gap-2">
                    <span className="text-blue-600 mt-1">•</span>
                    <span>Excellence in assessment quality</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-600 mt-1">•</span>
                    <span>Equity and fairness</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-600 mt-1">•</span>
                    <span>Scientific rigor</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-600 mt-1">•</span>
                    <span>Collaboration and partnership</span>
                  </li>
                </ul>
              </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
  </motion.section>

      {/* Key Features with Animation */}
      <motion.section
        className="container mx-auto px-4 py-16"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Key Features of the Item Bank</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                  <BookOpen className="w-6 h-6 text-blue-600" />
                </div>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Comprehensive Item Coverage</h3>
                <p className="text-gray-700 leading-relaxed">
                  Extensive collection of test items covering multiple subjects, grade levels, and cognitive domains
                  aligned with the Ethiopian curriculum.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                  <Shield className="w-6 h-6 text-green-600" />
                </div>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Psychometric Validation</h3>
                <p className="text-gray-700 leading-relaxed">
                  All items undergo rigorous psychometric analysis to ensure reliability, validity, and fairness across
                  diverse student populations.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
                  <BarChart3 className="w-6 h-6 text-purple-600" />
                </div>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Data-Driven Insights</h3>
                <p className="text-gray-700 leading-relaxed">
                  Advanced analytics and reporting tools provide actionable insights into student performance and
                  learning patterns.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center">
                  <Users className="w-6 h-6 text-orange-600" />
                </div>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">User-Friendly Platform</h3>
                <p className="text-gray-700 leading-relaxed">
                  Intuitive interface designed for educators, making it easy to search, select, and generate assessments
                  tailored to specific needs.
                </p>
              </div>
            </div>
          </div>
        </div>
  </motion.section>

      {/* Benefits Section with Animation */}
      <motion.section
        className="bg-blue-50 py-16"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Benefits for Stakeholders</h2>
            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="text-xl">For Educators</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700 leading-relaxed">
                    Save time on test development, access high-quality validated items, and gain insights into student
                    learning through detailed analytics and reporting.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-xl">For Educational Institutions</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700 leading-relaxed">
                    Ensure consistency and quality across assessments, reduce costs associated with test development,
                    and make data-driven decisions to improve educational outcomes.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-xl">For Students</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700 leading-relaxed">
                    Experience fair and valid assessments that accurately measure learning, receive targeted feedback,
                    and benefit from improved teaching practices informed by assessment data.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-xl">For Policymakers</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700 leading-relaxed">
                    Access reliable data for educational planning and policy development, monitor system-wide
                    performance, and ensure accountability in the education sector.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
  </motion.section>

      {/* Development Process with Animation */}
      <motion.section
        className="container mx-auto px-4 py-16"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Development Process</h2>
          <div className="space-y-6">
            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold">
                  1
                </div>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Item Development</h3>
                <p className="text-gray-700 leading-relaxed">
                  Expert item writers create test items aligned with curriculum standards and learning objectives.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold">
                  2
                </div>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Expert Review</h3>
                <p className="text-gray-700 leading-relaxed">
                  Subject matter experts and psychometricians review items for content accuracy, clarity, and
                  appropriateness.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold">
                  3
                </div>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Field Testing</h3>
                <p className="text-gray-700 leading-relaxed">
                  Items are pilot tested with representative student samples to gather empirical data on item
                  performance.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold">
                  4
                </div>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Psychometric Analysis</h3>
                <p className="text-gray-700 leading-relaxed">
                  Statistical analysis evaluates item difficulty, discrimination, and other psychometric properties.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold">
                  5
                </div>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Item Banking</h3>
                <p className="text-gray-700 leading-relaxed">
                  Validated items are cataloged in the database with detailed metadata for easy retrieval and use.
                </p>
              </div>
            </div>
          </div>
        </div>
  </motion.section>

      <SiteFooter />
    </div>
  )
}
