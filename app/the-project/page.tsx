"use client"

import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Target, Calendar, Users, Lightbulb, TrendingUp, FileText, CheckCircle2, Clock, Award } from "lucide-react"
import { motion } from "framer-motion"
import { useSearchParams } from "next/navigation"
import { useEffect, useState } from "react"
import Image from "next/image"

export default function TheProjectPage() {
  const searchParams = useSearchParams()
  const tabParam = searchParams?.get('tab')
  const [activeTab, setActiveTab] = useState(tabParam || "overview")

  useEffect(() => {
    if (tabParam) {
      setActiveTab(tabParam)
    }
  }, [tabParam])

  return (
    <div className="min-h-screen flex flex-col">
      <SiteHeader />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative bg-gray-900 text-white py-16 overflow-hidden">
          <Image 
            src="/New folder/AAUgate.jpg" 
            alt="Brain background"
            fill
            className="object-cover opacity-20"
            priority
          />
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-3xl">
              <h1 className="text-4xl md:text-5xl font-bold mb-4 text-balance">The Project</h1>
              <p className="text-xl text-blue-100 text-pretty">
                The Master of Social Work in Psychosocial Software Engineering (MSW-PSE) is a groundbreaking interdisciplinary program that bridges technology and human-centered design to redefine how digital systems serve society.
              </p>
            </div>
          </div>
        </section>

        {/* Tabbed Content Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
              <TabsList className="ml-7 grid w-full grid-cols-2 md:grid-cols-3 lg:grid-cols-6 h-auto gap-2 bg-transparent">
                <motion.div whileHover={{ x: 5 }} transition={{ type: "spring", stiffness: 300 }}>
                  <TabsTrigger
                    value="overview"
                    className="data-[state=active]:bg-blue-600 data-[state=active]:text-white hover:bg-blue-50 rounded-md cursor-pointer"
                  >
                    Overview
                  </TabsTrigger>
                </motion.div>
                <motion.div whileHover={{ x: 5 }} transition={{ type: "spring", stiffness: 300 }}>
                  <TabsTrigger
                    value="objectives"
                    className="data-[state=active]:bg-blue-600 data-[state=active]:text-white hover:bg-blue-50 rounded-md cursor-pointer"
                  >
                    Objectives
                  </TabsTrigger>
                </motion.div>
                <motion.div whileHover={{ x: 5 }} transition={{ type: "spring", stiffness: 300 }}>
                  <TabsTrigger
                    value="timeline"
                    className="data-[state=active]:bg-blue-600 data-[state=active]:text-white hover:bg-blue-50 rounded-md cursor-pointer"
                  >
                    Timeline
                  </TabsTrigger>
                </motion.div>
                <motion.div whileHover={{ x: 5 }} transition={{ type: "spring", stiffness: 300 }}>
                  <TabsTrigger
                    value="methodology"
                    className="data-[state=active]:bg-blue-600 data-[state=active]:text-white hover:bg-blue-50 rounded-md cursor-pointer"
                  >
                    Purpose
                  </TabsTrigger>
                </motion.div>
                <motion.div whileHover={{ x: 5 }} transition={{ type: "spring", stiffness: 300 }}>
                  <TabsTrigger 
                    value="team" 
                    className="data-[state=active]:bg-blue-600 data-[state=active]:text-white hover:bg-blue-50 rounded-md cursor-pointer"
                  >
                    Team
                  </TabsTrigger>
                </motion.div>
                {/* <TabsTrigger value="impact" className="data-[state=active]:bg-blue-600 data-[state=active]:text-white">
                  Impact
                </TabsTrigger> */}
              </TabsList>

              {/* Overview Tab */}
              <TabsContent value="overview" className="mt-8">
                <div className="space-y-6">
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                  >
                    <Card>
                      <CardHeader>
                        <CardTitle className="flex items-center gap-2">
                          <FileText className="w-6 h-6 text-blue-600" />
                          Project Overview
                        </CardTitle>
                      </CardHeader>
                      <CardContent className="space-y-4">
                        <p className="text-gray-700 leading-relaxed">
                          The “Master of Social Work in Psychosocial Software Engineering” program is a pioneering initiative designed to address the pressing need for digital solutions in psychosocial and mental health services within Ethiopia. This interdisciplinary program integrates principles from social work, psychology, and software engineering, equipping students with the necessary skills to develop innovative technology-driven interventions tailored to the unique challenges faced in the field.
                        </p>
                      </CardContent>
                    </Card>
                  </motion.div>
                  <div className="grid md:grid-cols-3 gap-6">
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, margin: "-50px" }}
                      transition={{ duration: 0.5, delay: 0, ease: "easeOut" }}
                    >
                      <Card>
                        <CardHeader>
                          <CardTitle className="text-lg">Project Scope</CardTitle>
                        </CardHeader>
                        <CardContent>
                          <p className="text-sm text-gray-600">
                            All responsible parties engaged in the implementation of project, namely, the Team of Experts that independently created and developed the project; the School of Social Work, CSSAH, AAU, and School of Information Technology and Engineering, SITE, IT, AAU, stakeholders, funders, partners will be bound by the present Guideline following its endorsement.
                          </p>
                        </CardContent>
                      </Card>
                    </motion.div>
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, margin: "-50px" }}
                      transition={{ duration: 0.5, delay: 0.15, ease: "easeOut" }}
                    >
                      <Card>
                        <CardHeader>
                          <CardTitle className="text-lg">Duration</CardTitle>
                        </CardHeader>
                        <CardContent>
                          <p className="text-sm text-gray-600">
                            The Master of Social Work in Psychosocial Software Engineering [MSW-PSE] is a two-year, full-time program (120 ECTS[ In this program 1 European Credit Transfer and Accumulation System (ECTS) covers a total of 30 contact hours which translates to 0.625 Credit Hours.]) structured across four terms   to systematically integrate technical and psychosocial expertise.
                          </p>
                        </CardContent>
                      </Card>
                    </motion.div>
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, margin: "-50px" }}
                      transition={{ duration: 0.5, delay: 0.3, ease: "easeOut" }}
                    >
                      <Card>
                        <CardHeader>
                          <CardTitle className="text-lg">Funding</CardTitle>
                        </CardHeader>
                        <CardContent>
                          <p className="text-sm text-gray-600">
                            The program is funded by outside sources. Students’ tuition fees will be fully covered by the program through external funding. In the future, students might be sponsored by specific organizations or join the program as self-sponsored students.
                          </p>
                        </CardContent>
                      </Card>
                    </motion.div>
                  </div>
                </div>
              </TabsContent>

              {/* Objectives Tab */}
              <TabsContent value="objectives" className="mt-8">
                <div className="space-y-6">
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                  >
                    <Card>
                      <CardHeader>
                        <CardTitle className="flex items-center gap-2">
                          <Target className="w-6 h-6 text-blue-600" />
                          Specific Objectives
                        </CardTitle>
                        <CardDescription>
                          The project specific objectives are tuned to training at least 100 students in five years in the development of knowledge and skills to: 
                        </CardDescription>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-6">
                          {[
                            {
                              text: "plan, design, develop and implement digital psychosocial services",
                            },
                            {
                              text: "develop digital platforms, such as mobile counseling apps and tele-psychosocial services, etc., to improve access in rural and underserved populations;",
                            },
                            {
                              text: "design digital psychosocial services to guarantee equitable access to services through low-cost, AI-assisted digital interventions that reach vulnerable populations.",
                            },
                            {
                              text: "ensure the development of an interdisciplinary team with expertise in social work, psychology, and software engineering, ensuring the sustainability of the specialization.",
                            },
                          ].map((item, idx) => (
                            <motion.div
                              key={idx}
                              initial={{ opacity: 0, y: 20 }}
                              whileInView={{ opacity: 1, y: 0 }}
                              viewport={{ once: true, margin: "-50px" }}
                              transition={{ duration: 0.5, delay: idx * 0.15, ease: "easeOut" }}
                              className="flex gap-4"
                            >
                              <div className="flex-shrink-0">
                                <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                                  <CheckCircle2 className="w-5 h-5 text-blue-600" />
                                </div>
                              </div>
                              <div>
                                <h3 className="text-lg mb-2">{item.text}</h3>
                              </div>
                            </motion.div>
                          ))}
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                </div>
              </TabsContent>

              {/* Timeline Tab */}
              <TabsContent value="timeline" className="mt-8">
                <div className="space-y-6">
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                  >
                    <Card>
                      <CardHeader>
                        <CardTitle className="flex items-center gap-2">
                          <Calendar className="w-6 h-6 text-blue-600" />
                          Project Timeline
                        </CardTitle>
                        <CardDescription>The approach divides the project into distinct phases, each with specific objectives, activities, and deliverables.</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-8">
                          {[
                            {
                              color: "blue-600",
                              phase: "Phase 1: Planning & Design",
                              desc: "Initial project planning, stakeholder consultation, and system design. Development of technical specifications and item development guidelines.",
                            },
                            {
                              color: "blue-600",
                              phase: "Phase 2: Capacity Building and Infrastructure Setup",
                              desc: "The second phase will focus on preparing faculty and institutional infrastructure for the project launch. Faculty development will include training in interdisciplinary teaching methods and capacity building for the use of digital tools essential to psychosocial software engineering.",
                            },
                            {
                              color: "blue-600",
                              phase: "Phase 3:  Project Launch and Delivery",
                              desc: "This phase encompasses the official project launch, accepting students, and the commencement of course delivery.",
                            },
                            {
                              color: "blue-600",
                              phase: "Phase 4: Monitoring, Evaluation, and Continuous Improvement",
                              desc: "Following project deployment, systematic monitoring and evaluation will be conducted to assess academic performance, student satisfaction, faculty effectiveness, and overall project impact.",
                            },
                            {
                              color: "green-600",
                              phase: "Phase 5: Expansion and Sustainability ",
                              desc: "In the final phase, plans for scaling the project will be developed to include increased student intake, broader research collaborations, and deeper community engagement.",
                            },
                          ].map((item, idx) => (
                            <motion.div
                              key={idx}
                              initial={{ opacity: 0, y: 20 }}
                              whileInView={{ opacity: 1, y: 0 }}
                              viewport={{ once: true, margin: "-50px" }}
                              transition={{ duration: 0.5, delay: idx * 0.15, ease: "easeOut" }}
                              className="relative pl-8 border-l-2 border-blue-200"
                            >
                              <div className={`absolute -left-2 top-0 w-4 h-4 bg-${item.color} rounded-full`}></div>
                              <div className="mb-1 flex items-center gap-2">
                                <Clock className={`w-4 h-4 text-${item.color}`} />
                                <span className={`text-sm font-semibold text-${item.color}`}>{item.phase}</span>
                              </div>
                              <p className="text-gray-700">{item.desc}</p>
                            </motion.div>
                          ))}
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                </div>
              </TabsContent>

              {/* Purpose Tab */}
              <TabsContent value="methodology" className="mt-8">
                <div className="space-y-6">
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                  >
                    <Card>
                      <CardHeader>
                        <CardTitle className="flex items-center gap-2">
                          <Lightbulb className="w-6 h-6 text-blue-600" />
                          Project Purpose
                        </CardTitle>
                      <CardDescription>The purpose of this Project Management Guideline is to provide a comprehensive framework for the effective planning, implementation, and evaluation of the “Master of Social Work in Psychosocial Software Engineering” project at Addis Ababa University (AAU). </CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-6">
                      <div>
                        <h3 className="font-semibold text-lg mb-3">key functions</h3>
                        <div className="grid md:grid-cols-2 gap-4">
                          <motion.div
                            className="bg-blue-50 p-4 rounded-lg"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ duration: 0.5, delay: 0, ease: "easeOut" }}
                          >
                            <h4 className=" mb-2">Establishing a Clear Framework: It outlines the project management structure, including governance, oversight, and the roles of various team members with the appreciation that a clarity is essential for fostering collaboration and accountability among the project implementers, faculty, and administrative staff.</h4>
                          </motion.div>
                          <motion.div
                            className="bg-blue-50 p-4 rounded-lg"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ duration: 0.5, delay: 0.15, ease: "easeOut" }}
                          >
                            <h4 className="mb-2">Guiding Project Implementation: The guideline provides a phased approach to project implementation, detailing the steps necessary for curriculum development, faculty recruitment, and infrastructure setup with the understanding that a structured approach ensures that the project is developed systematically and efficiently, addressing the unique needs of Ethiopia's psychosocial education, training, and services landscape.</h4>
                          </motion.div>
                          <motion.div
                            className="bg-blue-50 p-4 rounded-lg"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ duration: 0.5, delay: 0.3, ease: "easeOut" }}
                          >
                            <h4 className="mb-2">Enhancing Capacity Building: The guideline, by integrating interdisciplinary knowledge from social work, psychology, and software engineering, emphasizes the importance of building local expertise, thus, aims to equip professionals with the skills needed to develop technology-driven interventions that address psychological and social challenges in Ethiopia.</h4>
                          </motion.div>
                          <motion.div
                            className="bg-blue-50 p-4 rounded-lg"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ duration: 0.5, delay: 0.45, ease: "easeOut" }}
                          >
                            <h4 className="mb-2">Promoting Stakeholder Engagement: The guideline outlines strategies for engaging key stakeholders, including academic institutions, government ministries, professional associations, and community organizations with the intent to foster collaboration and communication towards leveraging diverse resources and expertise to enhance its impact.</h4>
                          </motion.div>
                          <motion.div
                            className="bg-blue-50 p-4 rounded-lg"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ duration: 0.5, delay: 0.6, ease: "easeOut" }}
                          >
                            <h4 className="mb-2">Ensuring Sustainability: The guideline emphasizes the importance of developing a sustainable model for the project, which includes financial planning, risk management, and long-term strategies for maintaining the project's relevance and effectiveness in addressing psychosocial and mental health service needs.</h4>
                          </motion.div>
                          <motion.div
                            className="bg-blue-50 p-4 rounded-lg"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ duration: 0.5, delay: 0.75, ease: "easeOut" }}
                          >
                            <h4 className=" mb-2">Facilitating Monitoring and Evaluation: The guideline establishes a framework for monitoring and evaluating the project's progress and outcomes, thus, ensuring that the project remains aligned with its objectives and can adapt to changing needs and challenges in the field of psychosocial software engineering consistent with the policy instruments and guidelines of Addis Ababa University.</h4>
                          </motion.div>
                        </div>
                      </div>

                      {/* <div>
                        <h3 className="font-semibold text-lg mb-3">Quality Assurance Standards</h3>
                        <ul className="space-y-2">
                          <li className="flex items-start gap-2">
                            <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                            <span className="text-gray-700">
                              All items undergo rigorous validation using Classical Test Theory and Item Response Theory
                            </span>
                          </li>
                          <li className="flex items-start gap-2">
                            <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                            <span className="text-gray-700">
                              Bias and sensitivity reviews ensure cultural appropriateness and fairness
                            </span>
                          </li>
                          <li className="flex items-start gap-2">
                            <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                            <span className="text-gray-700">
                              Continuous monitoring and updating based on performance data
                            </span>
                          </li>
                          <li className="flex items-start gap-2">
                            <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                            <span className="text-gray-700">
                              Adherence to international assessment standards and best practices
                            </span>
                          </li>
                        </ul>
                      </div> */}
                    </CardContent>
                  </Card>
                  </motion.div>
                </div>
              </TabsContent>

              {/* Team Tab */}
              <TabsContent value="team" className="mt-8">
                <div className="space-y-6">
                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <Users className="w-6 h-6 text-blue-600" />
                        Project Team
                      </CardTitle>
                      <CardDescription>The dedicated professionals behind the EPA Item Bank</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-6">
                        <div>
                          <h3 className="font-semibold text-lg mb-4">Core Team</h3>
                          <div className="grid md:grid-cols-2 gap-4">
                            <motion.div 
                              className="border rounded-lg p-4"
                              initial={{ opacity: 0, y: 20 }}
                              whileInView={{ opacity: 1, y: 0 }}
                              viewport={{ once: true, margin: "-50px" }}
                              transition={{ duration: 0.5 }}
                              whileHover={{ y: -4 }}
                            >
                              <h4 className="font-semibold mb-1">Project Director</h4>
                              <p className="text-sm text-gray-600 mb-2">Accountable to: The Head of the School of Social Work (SoSW), AAU</p>
                              <p className="text-sm text-gray-700">
                               Provide overall leadership and strategic direction for the project.
                              </p>
                            </motion.div>
                            <motion.div 
                              className="border rounded-lg p-4"
                              initial={{ opacity: 0, y: 20 }}
                              whileInView={{ opacity: 1, y: 0 }}
                              viewport={{ once: true, margin: "-50px" }}
                              transition={{ duration: 0.5, delay: 0.1 }}
                              whileHover={{ y: -4 }}
                            >
                              <h4 className="font-semibold mb-1">International Project Coordinator</h4>
                              <p className="text-sm text-gray-600 mb-2">Accountable to: Project Director </p>
                              <p className="text-sm text-gray-700">Coordinate international collaboration and partnerships for the project.</p>
                            </motion.div>
                            <motion.div 
                              className="border rounded-lg p-4"
                              initial={{ opacity: 0, y: 20 }}
                              whileInView={{ opacity: 1, y: 0 }}
                              viewport={{ once: true, margin: "-50px" }}
                              transition={{ duration: 0.5, delay: 0.2 }}
                              whileHover={{ y: -4 }}
                            >
                              <h4 className="font-semibold mb-1">Technical Advisor in Software Engineering</h4>
                              <p className="text-sm text-gray-600 mb-2">Accountable to: Project Director</p>
                              <p className="text-sm text-gray-700">Provide technical expertise in software engineering relevant to the project. </p>
                            </motion.div>
                            <motion.div 
                              className="border rounded-lg p-4"
                              initial={{ opacity: 0, y: 20 }}
                              whileInView={{ opacity: 1, y: 0 }}
                              viewport={{ once: true, margin: "-50px" }}
                              transition={{ duration: 0.5, delay: 0.3 }}
                              whileHover={{ y: -4 }}
                            >
                              <h4 className="font-semibold mb-1">Assistant Project Coordinator</h4>
                              <p className="text-sm text-gray-600 mb-2">Accountable to: Project Director</p>
                              <p className="text-sm text-gray-700">Support the Project Director in day-to-day operations and project management.</p>
                            </motion.div>
                             <motion.div 
                              className="border rounded-lg p-4"
                              initial={{ opacity: 0, y: 20 }}
                              whileInView={{ opacity: 1, y: 0 }}
                              viewport={{ once: true, margin: "-50px" }}
                              transition={{ duration: 0.5, delay: 0.4 }}
                              whileHover={{ y: -4 }}
                            >
                              <h4 className="font-semibold mb-1">Monitoring and Evaluation Officer</h4>
                              <p className="text-sm text-gray-600 mb-2">Accountable to: Project Director</p>
                              <p className="text-sm text-gray-700">Develop and implement the monitoring and evaluation framework for the project.</p>
                            </motion.div>
                             <motion.div 
                              className="border rounded-lg p-4"
                              initial={{ opacity: 0, y: 20 }}
                              whileInView={{ opacity: 1, y: 0 }}
                              viewport={{ once: true, margin: "-50px" }}
                              transition={{ duration: 0.5, delay: 0.5 }}
                              whileHover={{ y: -4 }}
                            >
                              <h4 className="font-semibold mb-1">Administration and Finance Officer</h4>
                              <p className="text-sm text-gray-600 mb-2">Accountable to: Project Director</p>
                              <p className="text-sm text-gray-700">Manage the financial resources of the project, including budgeting and expenditures</p>
                            </motion.div>
                             <motion.div 
                              className="border rounded-lg p-4"
                              initial={{ opacity: 0, y: 20 }}
                              whileInView={{ opacity: 1, y: 0 }}
                              viewport={{ once: true, margin: "-50px" }}
                              transition={{ duration: 0.5, delay: 0.6 }}
                              whileHover={{ y: -4 }}
                            >
                              <h4 className="font-semibold mb-1">Secretary / Caretaker</h4>
                              <p className="text-sm text-gray-600 mb-2">Accountable to: Assistant Project Director</p>
                              <p className="text-sm text-gray-700">Facilitates collaboration with the Finance Office of the College of Social Sciences and Humanities, Addis Ababa University.</p>
                            </motion.div>
                          </div>
                        </div>

                        <div>
                          <h3 className="font-semibold text-lg mb-4">Academic Staff Members</h3>
                          <div className="space-y-3">
                            <motion.div 
                              className="flex items-start gap-3 p-3 bg-gray-50 rounded-lg"
                              initial={{ opacity: 0, y: 15 }}
                              whileInView={{ opacity: 1, y: 0 }}
                              viewport={{ once: true, margin: "-50px" }}
                              transition={{ duration: 0.45 }}
                              whileHover={{ x: 5 }}
                            >
                              <Award className="w-5 h-5 text-blue-600 flex-shrink-0 mt-1" />
                              <div>
                                <h4 className="font-semibold">Academic Staff Members</h4>
                                <p className="text-sm text-gray-600">
                                 Deliver courses independently within the project curriculum
                                </p>
                              </div>
                            </motion.div>
                            <motion.div 
                              className="flex items-start gap-3 p-3 bg-gray-50 rounded-lg"
                              initial={{ opacity: 0, y: 15 }}
                              whileInView={{ opacity: 1, y: 0 }}
                              viewport={{ once: true, margin: "-50px" }}
                              transition={{ duration: 0.45, delay: 0.1 }}
                              whileHover={{ x: 5 }}
                            >
                              <Award className="w-5 h-5 text-blue-600 flex-shrink-0 mt-1" />
                              <div>
                                <h4 className="font-semibold">International Faculty Members Engaging in Team-Teaching</h4>
                                <p className="text-sm text-gray-600">Collaborate with local faculty to deliver courses in the project.</p>
                              </div>
                            </motion.div>
                            <motion.div 
                              className="flex items-start gap-3 p-3 bg-gray-50 rounded-lg"
                              initial={{ opacity: 0, y: 15 }}
                              whileInView={{ opacity: 1, y: 0 }}
                              viewport={{ once: true, margin: "-50px" }}
                              transition={{ duration: 0.45, delay: 0.2 }}
                              whileHover={{ x: 5 }}
                            >
                              <Award className="w-5 h-5 text-blue-600 flex-shrink-0 mt-1" />
                              <div>
                                <h4 className="font-semibold">Local Faculty Members Engaging in Team-Teaching</h4>
                                <p className="text-sm text-gray-600">
                                  Collaborate with international and local faculty to deliver courses.
                                </p>
                              </div>
                            </motion.div>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </TabsContent>

              {/* Impact Tab */}
              <TabsContent value="impact" className="mt-8">
                <div className="space-y-6">
                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <TrendingUp className="w-6 h-6 text-blue-600" />
                        Project Impact
                      </CardTitle>
                      <CardDescription>Measuring the difference we're making in Ethiopian education</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-6">
                        <div>
                          <h3 className="font-semibold text-lg mb-4">Expected Outcomes</h3>
                          <div className="grid md:grid-cols-2 gap-6">
                            <div>
                              <div className="flex items-center gap-2 mb-2">
                                <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                                  <CheckCircle2 className="w-5 h-5 text-green-600" />
                                </div>
                                <h4 className="font-semibold">Improved Assessment Quality</h4>
                              </div>
                              <p className="text-sm text-gray-600 ml-10">
                                Higher reliability and validity of educational assessments across all levels
                              </p>
                            </div>
                            <div>
                              <div className="flex items-center gap-2 mb-2">
                                <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                                  <CheckCircle2 className="w-5 h-5 text-green-600" />
                                </div>
                                <h4 className="font-semibold">Time Savings</h4>
                              </div>
                              <p className="text-sm text-gray-600 ml-10">
                                Reduced time spent on test development, allowing educators to focus on teaching
                              </p>
                            </div>
                            <div>
                              <div className="flex items-center gap-2 mb-2">
                                <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                                  <CheckCircle2 className="w-5 h-5 text-green-600" />
                                </div>
                                <h4 className="font-semibold">Data-Driven Insights</h4>
                              </div>
                              <p className="text-sm text-gray-600 ml-10">
                                Better understanding of student learning through comprehensive analytics
                              </p>
                            </div>
                            <div>
                              <div className="flex items-center gap-2 mb-2">
                                <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                                  <CheckCircle2 className="w-5 h-5 text-green-600" />
                                </div>
                                <h4 className="font-semibold">Equitable Access</h4>
                              </div>
                              <p className="text-sm text-gray-600 ml-10">
                                All institutions have access to high-quality assessment tools regardless of resources
                              </p>
                            </div>
                          </div>
                        </div>

                        <div>
                          <h3 className="font-semibold text-lg mb-4">Key Performance Indicators</h3>
                          <div className="grid md:grid-cols-3 gap-4">
                            <div className="bg-blue-50 p-6 rounded-lg text-center">
                              <div className="text-3xl font-bold text-blue-600 mb-2">10,000+</div>
                              <div className="text-sm text-gray-600">Validated Test Items</div>
                            </div>
                            <div className="bg-blue-50 p-6 rounded-lg text-center">
                              <div className="text-3xl font-bold text-blue-600 mb-2">500+</div>
                              <div className="text-sm text-gray-600">Participating Institutions</div>
                            </div>
                            <div className="bg-blue-50 p-6 rounded-lg text-center">
                              <div className="text-3xl font-bold text-blue-600 mb-2">50,000+</div>
                              <div className="text-sm text-gray-600">Students Assessed</div>
                            </div>
                          </div>
                        </div>

                        <div>
                          <h3 className="font-semibold text-lg mb-4">Long-Term Vision</h3>
                          <p className="text-gray-700 leading-relaxed mb-4">
                            The EPA Item Bank project aims to become the cornerstone of educational assessment in
                            Ethiopia, supporting continuous improvement in teaching and learning outcomes. By providing
                            reliable, valid, and accessible assessment tools, we envision a future where:
                          </p>
                          <ul className="space-y-2">
                            <li className="flex items-start gap-2">
                              <CheckCircle2 className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                              <span className="text-gray-700">
                                Every student receives fair and accurate assessment of their learning
                              </span>
                            </li>
                            <li className="flex items-start gap-2">
                              <CheckCircle2 className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                              <span className="text-gray-700">
                                Educators have the tools and data they need to personalize instruction
                              </span>
                            </li>
                            <li className="flex items-start gap-2">
                              <CheckCircle2 className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                              <span className="text-gray-700">
                                Policymakers can make informed decisions based on comprehensive assessment data
                              </span>
                            </li>
                            <li className="flex items-start gap-2">
                              <CheckCircle2 className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                              <span className="text-gray-700">
                                Ethiopian education system is recognized for its commitment to quality and equity
                              </span>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  )
}
