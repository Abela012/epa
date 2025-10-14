"use client"

import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Target, Calendar, Users, Lightbulb, TrendingUp, FileText, CheckCircle2, Clock, Award } from "lucide-react"

export default function TheProjectPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <SiteHeader />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-blue-600 to-blue-800 text-white py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl">
              <h1 className="text-4xl md:text-5xl font-bold mb-4 text-balance">The Project</h1>
              <p className="text-xl text-blue-100 text-pretty">
                Comprehensive information about the EPA Item Bank project, its objectives, methodology, and impact on
                Ethiopian education.
              </p>
            </div>
          </div>
        </section>

        {/* Tabbed Content Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <Tabs defaultValue="overview" className="w-full">
              <TabsList className="grid w-full grid-cols-2 md:grid-cols-3 lg:grid-cols-6 h-auto gap-2 bg-transparent">
                <TabsTrigger
                  value="overview"
                  className="data-[state=active]:bg-blue-600 data-[state=active]:text-white"
                >
                  Overview
                </TabsTrigger>
                <TabsTrigger
                  value="objectives"
                  className="data-[state=active]:bg-blue-600 data-[state=active]:text-white"
                >
                  Objectives
                </TabsTrigger>
                <TabsTrigger
                  value="timeline"
                  className="data-[state=active]:bg-blue-600 data-[state=active]:text-white"
                >
                  Timeline
                </TabsTrigger>
                <TabsTrigger
                  value="methodology"
                  className="data-[state=active]:bg-blue-600 data-[state=active]:text-white"
                >
                  Methodology
                </TabsTrigger>
                <TabsTrigger value="team" className="data-[state=active]:bg-blue-600 data-[state=active]:text-white">
                  Team
                </TabsTrigger>
                <TabsTrigger value="impact" className="data-[state=active]:bg-blue-600 data-[state=active]:text-white">
                  Impact
                </TabsTrigger>
              </TabsList>

              {/* Overview Tab */}
              <TabsContent value="overview" className="mt-8">
                <div className="space-y-6">
                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <FileText className="w-6 h-6 text-blue-600" />
                        Project Overview
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <p className="text-gray-700 leading-relaxed">
                        The EPA Item Bank project is a groundbreaking initiative by the Ethiopian Psychologists'
                        Association aimed at revolutionizing educational assessment in Ethiopia. This comprehensive
                        platform serves as a centralized repository of high-quality, validated test items designed to
                        support educators, institutions, and policymakers in creating reliable and valid assessments.
                      </p>
                      <p className="text-gray-700 leading-relaxed">
                        Developed through extensive collaboration with educational experts, psychometricians, and
                        stakeholders across the Ethiopian education sector, the item bank represents a significant step
                        forward in standardizing and improving assessment practices nationwide.
                      </p>
                    </CardContent>
                  </Card>

                  <div className="grid md:grid-cols-3 gap-6">
                    <Card>
                      <CardHeader>
                        <CardTitle className="text-lg">Project Scope</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-sm text-gray-600">
                          National coverage across all educational levels, from primary to higher education
                        </p>
                      </CardContent>
                    </Card>
                    <Card>
                      <CardHeader>
                        <CardTitle className="text-lg">Duration</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-sm text-gray-600">
                          Multi-year initiative with ongoing development and updates
                        </p>
                      </CardContent>
                    </Card>
                    <Card>
                      <CardHeader>
                        <CardTitle className="text-lg">Funding</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-sm text-gray-600">
                          Supported by government agencies and international development partners
                        </p>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              </TabsContent>

              {/* Objectives Tab */}
              <TabsContent value="objectives" className="mt-8">
                <div className="space-y-6">
                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <Target className="w-6 h-6 text-blue-600" />
                        Project Objectives
                      </CardTitle>
                      <CardDescription>
                        Our strategic goals for transforming educational assessment in Ethiopia
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-6">
                        <div className="flex gap-4">
                          <div className="flex-shrink-0">
                            <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                              <CheckCircle2 className="w-5 h-5 text-blue-600" />
                            </div>
                          </div>
                          <div>
                            <h3 className="font-semibold text-lg mb-2">Standardize Assessment Quality</h3>
                            <p className="text-gray-600 leading-relaxed">
                              Establish consistent, high-quality assessment standards across all educational
                              institutions in Ethiopia through validated and reliable test items.
                            </p>
                          </div>
                        </div>

                        <div className="flex gap-4">
                          <div className="flex-shrink-0">
                            <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                              <CheckCircle2 className="w-5 h-5 text-blue-600" />
                            </div>
                          </div>
                          <div>
                            <h3 className="font-semibold text-lg mb-2">Enhance Resource Efficiency</h3>
                            <p className="text-gray-600 leading-relaxed">
                              Reduce duplication of effort by providing a centralized repository of test items that can
                              be shared and reused across institutions.
                            </p>
                          </div>
                        </div>

                        <div className="flex gap-4">
                          <div className="flex-shrink-0">
                            <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                              <CheckCircle2 className="w-5 h-5 text-blue-600" />
                            </div>
                          </div>
                          <div>
                            <h3 className="font-semibold text-lg mb-2">Support Data-Driven Decision Making</h3>
                            <p className="text-gray-600 leading-relaxed">
                              Provide psychometric insights and analytics to help educators and policymakers make
                              informed decisions about curriculum and instruction.
                            </p>
                          </div>
                        </div>

                        <div className="flex gap-4">
                          <div className="flex-shrink-0">
                            <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                              <CheckCircle2 className="w-5 h-5 text-blue-600" />
                            </div>
                          </div>
                          <div>
                            <h3 className="font-semibold text-lg mb-2">Promote Continuous Improvement</h3>
                            <p className="text-gray-600 leading-relaxed">
                              Enable ongoing refinement of test items based on usage data and feedback from the
                              educational community.
                            </p>
                          </div>
                        </div>

                        <div className="flex gap-4">
                          <div className="flex-shrink-0">
                            <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                              <CheckCircle2 className="w-5 h-5 text-blue-600" />
                            </div>
                          </div>
                          <div>
                            <h3 className="font-semibold text-lg mb-2">Increase Accessibility</h3>
                            <p className="text-gray-600 leading-relaxed">
                              Make high-quality assessment tools accessible to all educational institutions, regardless
                              of their resources or location.
                            </p>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </TabsContent>

              {/* Timeline Tab */}
              <TabsContent value="timeline" className="mt-8">
                <div className="space-y-6">
                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <Calendar className="w-6 h-6 text-blue-600" />
                        Project Timeline
                      </CardTitle>
                      <CardDescription>Key milestones and phases of the EPA Item Bank project</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-8">
                        <div className="relative pl-8 border-l-2 border-blue-200">
                          <div className="absolute -left-2 top-0 w-4 h-4 bg-blue-600 rounded-full"></div>
                          <div className="mb-1 flex items-center gap-2">
                            <Clock className="w-4 h-4 text-blue-600" />
                            <span className="text-sm font-semibold text-blue-600">Phase 1: Planning & Design</span>
                          </div>
                          <p className="text-sm text-gray-500 mb-2">2022 - 2023</p>
                          <p className="text-gray-700">
                            Initial project planning, stakeholder consultation, and system design. Development of
                            technical specifications and item development guidelines.
                          </p>
                        </div>

                        <div className="relative pl-8 border-l-2 border-blue-200">
                          <div className="absolute -left-2 top-0 w-4 h-4 bg-blue-600 rounded-full"></div>
                          <div className="mb-1 flex items-center gap-2">
                            <Clock className="w-4 h-4 text-blue-600" />
                            <span className="text-sm font-semibold text-blue-600">Phase 2: Item Development</span>
                          </div>
                          <p className="text-sm text-gray-500 mb-2">2023 - 2024</p>
                          <p className="text-gray-700">
                            Creation and validation of initial test items across multiple subjects and grade levels.
                            Pilot testing and psychometric analysis.
                          </p>
                        </div>

                        <div className="relative pl-8 border-l-2 border-blue-200">
                          <div className="absolute -left-2 top-0 w-4 h-4 bg-blue-600 rounded-full"></div>
                          <div className="mb-1 flex items-center gap-2">
                            <Clock className="w-4 h-4 text-blue-600" />
                            <span className="text-sm font-semibold text-blue-600">Phase 3: Platform Development</span>
                          </div>
                          <p className="text-sm text-gray-500 mb-2">2024</p>
                          <p className="text-gray-700">
                            Development of the digital platform, user interface design, and integration of assessment
                            tools and analytics features.
                          </p>
                        </div>

                        <div className="relative pl-8 border-l-2 border-blue-200">
                          <div className="absolute -left-2 top-0 w-4 h-4 bg-blue-600 rounded-full"></div>
                          <div className="mb-1 flex items-center gap-2">
                            <Clock className="w-4 h-4 text-blue-600" />
                            <span className="text-sm font-semibold text-blue-600">Phase 4: Pilot Implementation</span>
                          </div>
                          <p className="text-sm text-gray-500 mb-2">2024 - 2025</p>
                          <p className="text-gray-700">
                            Pilot launch with select institutions, user training, feedback collection, and system
                            refinement based on real-world usage.
                          </p>
                        </div>

                        <div className="relative pl-8 border-l-2 border-blue-200">
                          <div className="absolute -left-2 top-0 w-4 h-4 bg-green-600 rounded-full"></div>
                          <div className="mb-1 flex items-center gap-2">
                            <Clock className="w-4 h-4 text-green-600" />
                            <span className="text-sm font-semibold text-green-600">Phase 5: National Rollout</span>
                          </div>
                          <p className="text-sm text-gray-500 mb-2">2025 - Ongoing</p>
                          <p className="text-gray-700">
                            Full national deployment, continuous item development, ongoing support, and regular platform
                            updates based on user needs.
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </TabsContent>

              {/* Methodology Tab */}
              <TabsContent value="methodology" className="mt-8">
                <div className="space-y-6">
                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <Lightbulb className="w-6 h-6 text-blue-600" />
                        Project Methodology
                      </CardTitle>
                      <CardDescription>Our approach to developing and validating assessment items</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-6">
                      <div>
                        <h3 className="font-semibold text-lg mb-3">Item Development Process</h3>
                        <div className="grid md:grid-cols-2 gap-4">
                          <div className="bg-blue-50 p-4 rounded-lg">
                            <h4 className="font-semibold mb-2">1. Content Specification</h4>
                            <p className="text-sm text-gray-600">
                              Alignment with national curriculum standards and learning objectives
                            </p>
                          </div>
                          <div className="bg-blue-50 p-4 rounded-lg">
                            <h4 className="font-semibold mb-2">2. Item Writing</h4>
                            <p className="text-sm text-gray-600">
                              Expert educators create items following established guidelines
                            </p>
                          </div>
                          <div className="bg-blue-50 p-4 rounded-lg">
                            <h4 className="font-semibold mb-2">3. Expert Review</h4>
                            <p className="text-sm text-gray-600">Content and bias review by subject matter experts</p>
                          </div>
                          <div className="bg-blue-50 p-4 rounded-lg">
                            <h4 className="font-semibold mb-2">4. Field Testing</h4>
                            <p className="text-sm text-gray-600">Pilot testing with representative student samples</p>
                          </div>
                          <div className="bg-blue-50 p-4 rounded-lg">
                            <h4 className="font-semibold mb-2">5. Psychometric Analysis</h4>
                            <p className="text-sm text-gray-600">
                              Statistical analysis of item difficulty, discrimination, and reliability
                            </p>
                          </div>
                          <div className="bg-blue-50 p-4 rounded-lg">
                            <h4 className="font-semibold mb-2">6. Item Banking</h4>
                            <p className="text-sm text-gray-600">Validated items added to the database with metadata</p>
                          </div>
                        </div>
                      </div>

                      <div>
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
                      </div>
                    </CardContent>
                  </Card>
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
                            <div className="border rounded-lg p-4">
                              <h4 className="font-semibold mb-1">Project Director</h4>
                              <p className="text-sm text-gray-600 mb-2">Ethiopian Psychologists' Association</p>
                              <p className="text-sm text-gray-700">
                                Overall project leadership and strategic direction
                              </p>
                            </div>
                            <div className="border rounded-lg p-4">
                              <h4 className="font-semibold mb-1">Technical Lead</h4>
                              <p className="text-sm text-gray-600 mb-2">Platform Development Team</p>
                              <p className="text-sm text-gray-700">System architecture and technical implementation</p>
                            </div>
                            <div className="border rounded-lg p-4">
                              <h4 className="font-semibold mb-1">Psychometric Specialist</h4>
                              <p className="text-sm text-gray-600 mb-2">Assessment Research Team</p>
                              <p className="text-sm text-gray-700">Item validation and statistical analysis</p>
                            </div>
                            <div className="border rounded-lg p-4">
                              <h4 className="font-semibold mb-1">Content Coordinator</h4>
                              <p className="text-sm text-gray-600 mb-2">Curriculum Alignment Team</p>
                              <p className="text-sm text-gray-700">Subject matter expertise and content development</p>
                            </div>
                          </div>
                        </div>

                        <div>
                          <h3 className="font-semibold text-lg mb-4">Advisory Board</h3>
                          <div className="space-y-3">
                            <div className="flex items-start gap-3 p-3 bg-gray-50 rounded-lg">
                              <Award className="w-5 h-5 text-blue-600 flex-shrink-0 mt-1" />
                              <div>
                                <h4 className="font-semibold">Ministry of Education Representatives</h4>
                                <p className="text-sm text-gray-600">
                                  Policy guidance and national education alignment
                                </p>
                              </div>
                            </div>
                            <div className="flex items-start gap-3 p-3 bg-gray-50 rounded-lg">
                              <Award className="w-5 h-5 text-blue-600 flex-shrink-0 mt-1" />
                              <div>
                                <h4 className="font-semibold">University Professors</h4>
                                <p className="text-sm text-gray-600">Academic expertise and research methodology</p>
                              </div>
                            </div>
                            <div className="flex items-start gap-3 p-3 bg-gray-50 rounded-lg">
                              <Award className="w-5 h-5 text-blue-600 flex-shrink-0 mt-1" />
                              <div>
                                <h4 className="font-semibold">School Administrators</h4>
                                <p className="text-sm text-gray-600">
                                  Practical implementation insights and user needs
                                </p>
                              </div>
                            </div>
                            <div className="flex items-start gap-3 p-3 bg-gray-50 rounded-lg">
                              <Award className="w-5 h-5 text-blue-600 flex-shrink-0 mt-1" />
                              <div>
                                <h4 className="font-semibold">International Assessment Experts</h4>
                                <p className="text-sm text-gray-600">Global best practices and quality standards</p>
                              </div>
                            </div>
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
