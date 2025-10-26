"use client"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import Image from "next/image"
import { Target, Eye, Award, Users, BookOpen, BarChart3, Shield } from "lucide-react"
import { motion } from "framer-motion"
import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"

export default function AboutItemBankPage() {
  return (
    <div className="min-h-screen bg-white">
      <SiteHeader />

      {/* Hero Section with Animation */}
            {/* Hero Section */}
      <motion.section
        className="relative bg-gray-900 text-white py-20 overflow-hidden"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <Image
          src="/New folder/brain.jpg"
          alt="Background"
          fill
          className="object-cover opacity-20"
          priority
        />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-balance">About the Master of Social Work in Psychosocial Software Engineering</h1>
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
          <h2 className="text-3xl font-bold text-gray-900 mb-6">What is the Master of Social Work in Psychosocial Software Engineering?</h2>
          <div className="prose prose-lg max-w-none">
            <p className="text-gray-700 leading-relaxed mb-4">          
              The "Master of Social Work in Psychosocial Software Engineering" program is a pioneering initiative designed to address the pressing need for digital solutions in psychosocial and mental health services within Ethiopia. This interdisciplinary program integrates principles from social work, psychosocial, and software engineering, equipping students with the necessary skills to develop innovative technology-driven interventions tailored to the unique challenges faced in the field.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
            The project aims to establish a five-year graduate-level curriculum that will train 100 students as the first generation of Psychosocial Software Engineers. Graduates will be prepared to leverage mobile technologies, artificial intelligence, and machine learning to create scalable interventions that enhance psychosocial and mental health service delivery. The curriculum encompasses foundational courses that cover essential theories and principles, applied and technical courses focused on digital tools and ethical considerations, and practical components that include supervised research and fieldwork.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
            Collaboration with Ethiopian and international universities will enhance academic exchange and research opportunities, fostering a rich learning environment. The program emphasizes the importance of interdisciplinary collaboration, ensuring that technology is developed with a deep understanding of human behavior and social needs. This approach aims to address the shortage of psychosocial and mental health professionals in Ethiopia, particularly in underserved and rural areas, by expanding service accessibility through digital platforms.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
            The initiative also seeks to strengthen the psychosocial and mental health services sectors by integrating data-driven decision-making, predictive analytics and diagnosis, delivery of services, and integrating technology in therapy using different platforms, such as, augmented and virtual reality employing devices such as computers, biosensors, wearables, implants, etc., into practice. This focus on evidence-based approaches will empower professionals to make informed decisions that improve client-centered, customized, and easily available and accessible service delivery for vulnerable populations
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
            The project is hosted by the School of Social Work within the College of Social Sciences, Arts, and Humanities at Addis Ababa University, with the School of Information Technology and Engineering serving as a key partner. A dedicated team of experts from various disciplines will oversee the project's implementation, ensuring that it aligns with the strategic goals of the university and meets the needs of the community.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4"> 
              Through this innovative program, Ethiopia aims to develop local expertise in psychosocial software engineering, reducing reliance on foreign training and fostering self-sufficiency in psychosocial innovation. The establishment of this program represents a significant step toward enhancing the country’s capacity to address critical gaps in psychosocial and mental health service delivery through technology and initiating the first steps in instating an African training hub in psychosocial software engineering for students from different regions of the continent.
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
          <div className="grid md:grid-cols-2 gap-20 space-evenly max-w-6xl mx-auto">
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
                  To produce competent graduates with a strong foundation in psychosocial theories, digital technologies, and human-centered design to develop digital solutions that prioritize human dignity, mental health, social equity, and data ethics.
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
                  To cultivate a new generation of interdisciplinary professionals who integrate social work, psychosocial and software engineering to design ethical, inclusive, and impactful digital technologies for psychosocial well-being.
                </p>
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
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Required Resources</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="w-12 h-12  rounded-lg flex items-center justify-center">
                  
                </div>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Human Resource</h3>
                <p className="text-gray-700 leading-relaxed">
                  Potentially, there are staff members from the School of Social Work, School of Psychology and School of Software engineering who shall offer courses independently or collaboratively. Given that the program is new and contains more hybrid courses from social work and psychology; and more stand-alone courses from software engineering, recruitment and employment of expatriate staff will be mandatory until home grown staff will develop the necessary specialization to teach in the program. The following table summarizes the number of required academic staff in the program.

                </p>

                <div className="mt-8 md:mt-0">
                  <h3 className="text-xl  text-gray-900 mb-2"> Number of required staff to teach in the program</h3>
                  <Table className="text-sm">
                    <TableHeader className="bg-gray-50">
                      <TableRow>
                        <TableHead className="w-[50%]">Courses</TableHead>
                        <TableHead colSpan={2} className="text-center">Expatriate staff</TableHead>
                        <TableHead className="text-center">Local/national staff</TableHead>
                      </TableRow>
                      <TableRow>
                        <TableHead></TableHead>
                        <TableHead className="text-center">Sole-teaching</TableHead>
                        <TableHead className="text-center">Team Teaching</TableHead>
                        <TableHead className="text-center">Staff</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      <TableRow>
                        <TableCell colSpan={4} className="font-semibold bg-gray-50">Prerequisite Courses</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>Python Programming Language & Problem-Solving</TableCell>
                        <TableCell className="text-center">-</TableCell>
                        <TableCell className="text-center">1</TableCell>
                        <TableCell className="text-center">-</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>Introduction to Web Development (HTML, CSS, JavaScript)</TableCell>
                        <TableCell className="text-center">-</TableCell>
                        <TableCell className="text-center">1</TableCell>
                        <TableCell className="text-center">-</TableCell>
                      </TableRow>

                      <TableRow>
                        <TableCell colSpan={4} className="font-semibold bg-gray-50">Core Courses</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>Digital Social Work and Mental Health Foundations</TableCell>
                        <TableCell className="text-center">1</TableCell>
                        <TableCell className="text-center">-</TableCell>
                        <TableCell className="text-center">1</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>Human-Tech Interaction and User-Centered Design</TableCell>
                        <TableCell className="text-center">1</TableCell>
                        <TableCell className="text-center">-</TableCell>
                        <TableCell className="text-center">1</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>Intermediate Python for Psychosocial Applications</TableCell>
                        <TableCell className="text-center">-</TableCell>
                        <TableCell className="text-center">1</TableCell>
                        <TableCell className="text-center">-</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>Databases and Data Security for Psychosocial service Applications</TableCell>
                        <TableCell className="text-center">-</TableCell>
                        <TableCell className="text-center">1</TableCell>
                        <TableCell className="text-center">-</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>Psychosocial Aspects of Technology & Digital Ethics</TableCell>
                        <TableCell className="text-center">1</TableCell>
                        <TableCell className="text-center">-</TableCell>
                        <TableCell className="text-center">1</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>Agile Development and Project Management for Social Impact</TableCell>
                        <TableCell className="text-center">-</TableCell>
                        <TableCell className="text-center">1</TableCell>
                        <TableCell className="text-center">-</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>Mobile App Development (React Native or Flutter)</TableCell>
                        <TableCell className="text-center">-</TableCell>
                        <TableCell className="text-center">1</TableCell>
                        <TableCell className="text-center">-</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>Advanced Web & Mobile Frameworks (React, Django, or Node.js)</TableCell>
                        <TableCell className="text-center">-</TableCell>
                        <TableCell className="text-center">1</TableCell>
                        <TableCell className="text-center">-</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>APIs and Integration for Digital Psychosocial & Health Solutions</TableCell>
                        <TableCell className="text-center">1</TableCell>
                        <TableCell className="text-center">-</TableCell>
                        <TableCell className="text-center">1</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>Community-Centered Design Studio</TableCell>
                        <TableCell className="text-center">1</TableCell>
                        <TableCell className="text-center">-</TableCell>
                        <TableCell className="text-center">1</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>AI and Machine Learning for Psychosocial Interventions</TableCell>
                        <TableCell className="text-center">-</TableCell>
                        <TableCell className="text-center">1</TableCell>
                        <TableCell className="text-center">-</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>Low-Code/No-Code Tools for Rapid Prototyping</TableCell>
                        <TableCell className="text-center">-</TableCell>
                        <TableCell className="text-center">1</TableCell>
                        <TableCell className="text-center">-</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>Cloud Computing & Scalable Deployment for Digital psychosocial services</TableCell>
                        <TableCell className="text-center">-</TableCell>
                        <TableCell className="text-center">1</TableCell>
                        <TableCell className="text-center">-</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>Testing, Debugging, and Software Quality Assurance</TableCell>
                        <TableCell className="text-center">-</TableCell>
                        <TableCell className="text-center">1</TableCell>
                        <TableCell className="text-center">-</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>Cyber-security and Policy Compliance in Psychosocial Services</TableCell>
                        <TableCell className="text-center">-</TableCell>
                        <TableCell className="text-center">1</TableCell>
                        <TableCell className="text-center">-</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>MSW-PSE Capstone Project (Design, Development, Deployment)</TableCell>
                        <TableCell className="text-center">-</TableCell>
                        <TableCell className="text-center">5</TableCell>
                        <TableCell className="text-center">-</TableCell>
                      </TableRow>
                    </TableBody>
                    <TableCaption>Staffing plan by course category</TableCaption>
                  </Table>
                </div>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 rounded-lg flex items-center justify-center">
                </div>
              </div>
              <div>
                {/* <div className="mt-6 mb-8 md:mb-0">
                  <h4 className="text-lg font-semibold text-gray-900 mb-3">List of available staff, their location and academic rank</h4>
                  <Table className="text-sm">
                    <TableHeader className="bg-gray-50">
                      <TableRow>
                        <TableHead className="w-[35%]">Name</TableHead>
                        <TableHead className="w-[45%]">Location</TableHead>
                        <TableHead className="w-[20%] text-right">Academic rank</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      <TableRow>
                        <TableCell>Abebe Assefa</TableCell>
                        <TableCell>School of Social Work</TableCell>
                        <TableCell className="text-right">Assistant Professor</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>Abreham Tarekegn</TableCell>
                        <TableCell>School of Psychology</TableCell>
                        <TableCell className="text-right">PhD Candidate</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>Ashenafi Hagos</TableCell>
                        <TableCell>School of Social Work</TableCell>
                        <TableCell className="text-right">Associate Professor</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>Beakal Gizachew</TableCell>
                        <TableCell>School of Information Technology Engineering</TableCell>
                        <TableCell className="text-right">Assistant Professor</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>Daniel Tefera</TableCell>
                        <TableCell>School of Psychology</TableCell>
                        <TableCell className="text-right">Associate Professor</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>Fantahun Bogale</TableCell>
                        <TableCell>School of Information Technology Engineering</TableCell>
                        <TableCell className="text-right">Assistant Professor</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>Mengistu Legesse</TableCell>
                        <TableCell>School of Social Work</TableCell>
                        <TableCell className="text-right">Assistant Professor</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>Mesele Mengsteab</TableCell>
                        <TableCell>School of Social Work</TableCell>
                        <TableCell className="text-right">Assistant Professor</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>Wassie Kebede</TableCell>
                        <TableCell>School of Social Work</TableCell>
                        <TableCell className="text-right">Professor</TableCell>
                      </TableRow>
                    </TableBody>
                    <TableCaption>Program faculty and contributing academic staff</TableCaption>
                  </Table>
                </div> */}
                
                
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="w-12 h-12  rounded-lg flex items-center justify-center">
                  
                </div>
              </div>
              <div>
                <h3 className={`text-xl font-semibold mb-2 transition-colors duration-500 ${
                  theme === 'dark' ? 'text-white' : 'text-gray-900'
                }`}>Facilities</h3>
                <p className={`leading-relaxed transition-colors duration-500 ${
                  theme === 'dark' ? 'text-gray-300' : 'text-gray-700'
                }`}>
                  The program will be equipped with administrative office, classroom, and laboratory facilities to support teaching, research, and program administration.
                </p>
                <ul className={`mt-3 list-disc pl-6 space-y-2 transition-colors duration-500 ${
                  theme === 'dark' ? 'text-gray-300' : 'text-gray-700'
                }`}>
                  <li>
                    <strong className={theme === 'dark' ? 'text-white' : 'text-gray-900'}>Administrative Office:</strong> Equipped as per the specification in the project proposal (see Annex B for details).
                  </li>
                  <li>
                    <strong className={theme === 'dark' ? 'text-white' : 'text-gray-900'}>Classrooms:</strong> Equipped with inputs as per the specifications in the project proposal (see Annex C for details).
                  </li>
                  <li>
                    <strong className={theme === 'dark' ? 'text-white' : 'text-gray-900'}>Technical Software Engineering Laboratory:</strong> Equipped with the necessary inputs as per the specification in the project proposal (see Annex D for details).
                  </li>
                  <li>
                    <strong className={theme === 'dark' ? 'text-white' : 'text-gray-900'}>Psychosocial Software Engineering Laboratory:</strong> Equipped with the necessary inputs as per the specification in the project proposal (see Annex E for details).
                  </li>
                </ul>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 rounded-lg flex items-center justify-center">
                 
                </div>
              </div>
              <div>
                <h3 className={`text-xl font-semibold mb-2 transition-colors duration-500 ${
                  theme === 'dark' ? 'text-white' : 'text-gray-900'
                }`}>Financial Resources</h3>
                <p className={`leading-relaxed transition-colors duration-500 ${
                  theme === 'dark' ? 'text-gray-300' : 'text-gray-700'
                }`}>
                 The program is funded by outside sources. Students’ tuition fees will be fully covered by the program through external funding. In the future, students might be sponsored by specific organizations or join the program as self-sponsored students.

                </p>
              </div>
            </div>
          </div>
        </div>
        </div>
  </motion.section>

      {/* Stakeholders Engagement Section with Modern Design */}
      <motion.section
        className={`relative py-32 overflow-hidden transition-colors duration-500 ${
          theme === 'dark' 
            ? 'bg-gradient-to-br from-gray-900 via-blue-900 to-indigo-900' 
            : 'bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50'
        }`}
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-center mb-16"
            >
              <div className={`inline-flex items-center gap-3 backdrop-blur-sm border rounded-full px-6 py-3 mb-8 transition-all duration-500 ${
                theme === 'dark' 
                  ? 'bg-white/10 border-white/20' 
                  : 'bg-white/20 border-white/30'
              }`}>
                <div className="w-2 h-2 bg-purple-500 rounded-full animate-pulse"></div>
                <Users className="w-4 h-4 text-purple-500" />
                <span className={`font-medium transition-colors duration-500 ${
                  theme === 'dark' ? 'text-purple-300' : 'text-purple-700'
                }`}>Stakeholders Engagement</span>
              </div>
              
              <h2 className={`text-4xl md:text-5xl font-black mb-6 leading-tight transition-colors duration-500 ${
                theme === 'dark' ? 'text-white' : 'text-gray-900'
              }`}>
                <span className="bg-gradient-to-r from-purple-600 via-blue-600 to-indigo-600 bg-clip-text text-transparent">
                  Stakeholders
                </span>
                <br />
                <span className={theme === 'dark' ? 'text-white' : 'text-gray-900'}>Engagement</span>
              </h2>
            </motion.div>
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
                <div className={`relative backdrop-blur-xl rounded-3xl border shadow-2xl overflow-hidden group-hover:shadow-3xl transition-all duration-500 ${
                  theme === 'dark' 
                    ? 'bg-white/10 border-white/20' 
                    : 'bg-white/20 border-white/30'
                }`}>
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-purple-500/10 to-indigo-500/10 group-hover:from-blue-500/20 group-hover:via-purple-500/20 group-hover:to-indigo-500/20 transition-all duration-500"></div>
                  
                  <div className="relative p-8">
                    <div className="flex items-center gap-4 mb-6">
                      <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center shadow-lg">
                        <Globe className="w-8 h-8 text-white" />
                      </div>
                      <div>
                        <h3 className={`text-2xl font-bold transition-colors duration-500 ${
                          theme === 'dark' ? 'text-white' : 'text-gray-900'
                        }`}>Government Ministries</h3>
                        <div className="w-12 h-1 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full"></div>
                      </div>
                    </div>
                    <p className={`text-lg leading-relaxed transition-colors duration-500 ${
                      theme === 'dark' ? 'text-gray-300' : 'text-gray-700'
                    }`}>
                    Relevant government ministries, such as, the Ministry of Education, Ministry of Innovation and Technology, Ethiopian Institute of Artificial Intelligence, Ethiopian Telecommunication are key stakeholders since their involvement is essential for aligning the project with national policies and priorities in psychosocial and in mental health services.
                  </p>
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
                <div className={`relative backdrop-blur-xl rounded-3xl border shadow-2xl overflow-hidden group-hover:shadow-3xl transition-all duration-500 ${
                  theme === 'dark' 
                    ? 'bg-white/10 border-white/20' 
                    : 'bg-white/20 border-white/30'
                }`}>
                  <div className="absolute inset-0 bg-gradient-to-br from-green-500/10 via-emerald-500/10 to-teal-500/10 group-hover:from-green-500/20 group-hover:via-emerald-500/20 group-hover:to-teal-500/20 transition-all duration-500"></div>
                  
                  <div className="relative p-8">
                    <div className="flex items-center gap-4 mb-6">
                      <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-600 rounded-2xl flex items-center justify-center shadow-lg">
                        <Award className="w-8 h-8 text-white" />
                      </div>
                      <div>
                        <h3 className={`text-2xl font-bold transition-colors duration-500 ${
                          theme === 'dark' ? 'text-white' : 'text-gray-900'
                        }`}>Funding Agencies</h3>
                        <div className="w-12 h-1 bg-gradient-to-r from-green-500 to-emerald-600 rounded-full"></div>
                      </div>
                    </div>
                    <p className={`text-lg leading-relaxed transition-colors duration-500 ${
                      theme === 'dark' ? 'text-gray-300' : 'text-gray-700'
                    }`}>
                      Organizations and institutions that provide financial support for the project are critical stakeholders. Their investment is necessary for the project's sustainability and growth, and their expectations must be considered in project planning and reporting.
                    </p>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                whileHover={{ 
                  scale: 1.02, 
                  y: -5,
                  rotateX: 3,
                  rotateY: -3,
                  transition: { type: "spring", stiffness: 300, damping: 20 }
                }}
                className="perspective-1000"
              >
                <div className={`relative backdrop-blur-xl rounded-3xl border shadow-2xl overflow-hidden group-hover:shadow-3xl transition-all duration-500 ${
                  theme === 'dark' 
                    ? 'bg-white/10 border-white/20' 
                    : 'bg-white/20 border-white/30'
                }`}>
                  <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 via-pink-500/10 to-rose-500/10 group-hover:from-purple-500/20 group-hover:via-pink-500/20 group-hover:to-rose-500/20 transition-all duration-500"></div>
                  
                  <div className="relative p-8">
                    <div className="flex items-center gap-4 mb-6">
                      <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-600 rounded-2xl flex items-center justify-center shadow-lg">
                        <Users className="w-8 h-8 text-white" />
                      </div>
                      <div>
                        <h3 className={`text-2xl font-bold transition-colors duration-500 ${
                          theme === 'dark' ? 'text-white' : 'text-gray-900'
                        }`}>Non-governmental Organizations</h3>
                        <div className="w-12 h-1 bg-gradient-to-r from-purple-500 to-pink-600 rounded-full"></div>
                      </div>
                    </div>
                    <p className={`text-lg leading-relaxed transition-colors duration-500 ${
                      theme === 'dark' ? 'text-gray-300' : 'text-gray-700'
                    }`}>
                      NGOs that focus on psychosocial and in mental health services are important partners since their insights and collaboration can enhance the project's relevance and impact in addressing community needs.
                    </p>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, delay: 0.8 }}
                whileHover={{ 
                  scale: 1.02, 
                  y: -5,
                  rotateX: -3,
                  rotateY: 3,
                  transition: { type: "spring", stiffness: 300, damping: 20 }
                }}
                className="perspective-1000"
              >
                <div className={`relative backdrop-blur-xl rounded-3xl border shadow-2xl overflow-hidden group-hover:shadow-3xl transition-all duration-500 ${
                  theme === 'dark' 
                    ? 'bg-white/10 border-white/20' 
                    : 'bg-white/20 border-white/30'
                }`}>
                  <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/10 via-blue-500/10 to-cyan-500/10 group-hover:from-indigo-500/20 group-hover:via-blue-500/20 group-hover:to-cyan-500/20 transition-all duration-500"></div>
                  
                  <div className="relative p-8">
                    <div className="flex items-center gap-4 mb-6">
                      <div className="w-16 h-16 bg-gradient-to-br from-indigo-500 to-cyan-600 rounded-2xl flex items-center justify-center shadow-lg">
                        <Shield className="w-8 h-8 text-white" />
                      </div>
                      <div>
                        <h3 className={`text-2xl font-bold transition-colors duration-500 ${
                          theme === 'dark' ? 'text-white' : 'text-gray-900'
                        }`}>For Policymakers</h3>
                        <div className="w-12 h-1 bg-gradient-to-r from-indigo-500 to-cyan-600 rounded-full"></div>
                      </div>
                    </div>
                    <p className={`text-lg leading-relaxed transition-colors duration-500 ${
                      theme === 'dark' ? 'text-gray-300' : 'text-gray-700'
                    }`}>
                      Access reliable data for educational planning and policy development, monitor system-wide performance, and ensure accountability in the education sector.
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
  </motion.section>

      {/* Project Goal with Modern Design */}
      <motion.section
        className={`relative py-32 overflow-hidden transition-colors duration-500 ${
          theme === 'dark' 
            ? 'bg-gradient-to-br from-gray-800 via-blue-900 to-indigo-900' 
            : 'bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50'
        }`}
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
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
              <div className={`relative backdrop-blur-xl rounded-3xl border shadow-2xl overflow-hidden group-hover:shadow-3xl transition-all duration-500 ${
                theme === 'dark' 
                  ? 'bg-white/10 border-white/20' 
                  : 'bg-white/20 border-white/30'
              }`}>
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
                      <div className="w-2 h-2 bg-orange-500 rounded-full animate-pulse"></div>
                      <Target className="w-4 h-4 text-orange-500" />
                      <span className={`font-medium transition-colors duration-500 ${
                        theme === 'dark' ? 'text-orange-300' : 'text-orange-700'
                      }`}>Project Goal</span>
                    </div>
                    
                    <h2 className={`text-4xl md:text-5xl font-black mb-6 leading-tight transition-colors duration-500 ${
                      theme === 'dark' ? 'text-white' : 'text-gray-900'
                    }`}>
                      <span className="bg-gradient-to-r from-orange-600 via-red-600 to-pink-600 bg-clip-text text-transparent">
                        Our Project Goal
                      </span>
                    </h2>
                  </div>
                  
                  {/* Content with modern typography */}
                  <div className="prose prose-lg max-w-none">
                    <p className={`text-xl leading-relaxed font-medium transition-colors duration-500 ${
                      theme === 'dark' ? 'text-gray-300' : 'text-gray-700'
                    }`}>
              The goal of this project is to establish a five-year graduate-level program in Psychosocial Software Engineering Program in Addis Ababa University and train 100 students as the first generation of Psychosocial Software Engineers that fosters innovation at the intersection of mental health, social work, and technology.
            </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
  </motion.section>

      <SiteFooter />
    </div>
  )
}

                  </Table>

                </div>

              </div>

            </div>



            <div className="flex gap-4">

              <div className="flex-shrink-0">

                <div className="w-12 h-12 rounded-lg flex items-center justify-center">

                </div>

              </div>

              <div>

                {/* <div className="mt-6 mb-8 md:mb-0">

                  <h4 className="text-lg font-semibold text-gray-900 mb-3">List of available staff, their location and academic rank</h4>

                  <Table className="text-sm">

                    <TableHeader className="bg-gray-50">

                      <TableRow>

                        <TableHead className="w-[35%]">Name</TableHead>

                        <TableHead className="w-[45%]">Location</TableHead>

                        <TableHead className="w-[20%] text-right">Academic rank</TableHead>

                      </TableRow>

                    </TableHeader>

                    <TableBody>

                      <TableRow>

                        <TableCell>Abebe Assefa</TableCell>

                        <TableCell>School of Social Work</TableCell>

                        <TableCell className="text-right">Assistant Professor</TableCell>

                      </TableRow>

                      <TableRow>

                        <TableCell>Abreham Tarekegn</TableCell>

                        <TableCell>School of Psychology</TableCell>

                        <TableCell className="text-right">PhD Candidate</TableCell>

                      </TableRow>

                      <TableRow>

                        <TableCell>Ashenafi Hagos</TableCell>

                        <TableCell>School of Social Work</TableCell>

                        <TableCell className="text-right">Associate Professor</TableCell>

                      </TableRow>

                      <TableRow>

                        <TableCell>Beakal Gizachew</TableCell>

                        <TableCell>School of Information Technology Engineering</TableCell>

                        <TableCell className="text-right">Assistant Professor</TableCell>

                      </TableRow>

                      <TableRow>

                        <TableCell>Daniel Tefera</TableCell>

                        <TableCell>School of Psychology</TableCell>

                        <TableCell className="text-right">Associate Professor</TableCell>

                      </TableRow>

                      <TableRow>

                        <TableCell>Fantahun Bogale</TableCell>

                        <TableCell>School of Information Technology Engineering</TableCell>

                        <TableCell className="text-right">Assistant Professor</TableCell>

                      </TableRow>

                      <TableRow>

                        <TableCell>Mengistu Legesse</TableCell>

                        <TableCell>School of Social Work</TableCell>

                        <TableCell className="text-right">Assistant Professor</TableCell>

                      </TableRow>

                      <TableRow>

                        <TableCell>Mesele Mengsteab</TableCell>

                        <TableCell>School of Social Work</TableCell>

                        <TableCell className="text-right">Assistant Professor</TableCell>

                      </TableRow>

                      <TableRow>

                        <TableCell>Wassie Kebede</TableCell>

                        <TableCell>School of Social Work</TableCell>

                        <TableCell className="text-right">Professor</TableCell>

                      </TableRow>

                    </TableBody>

                    <TableCaption>Program faculty and contributing academic staff</TableCaption>

                  </Table>

                </div> */}

                

                

              </div>

            </div>



            <div className="flex gap-4">

              <div className="flex-shrink-0">

                <div className="w-12 h-12  rounded-lg flex items-center justify-center">

                  

                </div>

              </div>

              <div>

                <h3 className="text-xl font-semibold text-gray-900 mb-2">Facilities</h3>
                <p className="text-gray-700 leading-relaxed">
                  The program will be equipped with administrative office, classroom, and laboratory facilities to support teaching, research, and program administration.

                </p>

                <ul className="mt-3 list-disc pl-6 text-gray-700 space-y-2">
                  <li>

                    <strong>Administrative Office:</strong> Equipped as per the specification in the project proposal (see Annex B for details).
                  </li>

                  <li>

                    <strong>Classrooms:</strong> Equipped with inputs as per the specifications in the project proposal (see Annex C for details).
                  </li>

                  <li>

                    <strong>Technical Software Engineering Laboratory:</strong> Equipped with the necessary inputs as per the specification in the project proposal (see Annex D for details).
                  </li>

                  <li>

                    <strong>Psychosocial Software Engineering Laboratory:</strong> Equipped with the necessary inputs as per the specification in the project proposal (see Annex E for details).
                  </li>

                </ul>

              </div>

            </div>



            <div className="flex gap-4">

              <div className="flex-shrink-0">

                <div className="w-12 h-12 rounded-lg flex items-center justify-center">

                 

                </div>

              </div>

              <div>

                <h3 className="text-xl font-semibold text-gray-900 mb-2">Financial Resources</h3>
                <p className="text-gray-700 leading-relaxed">
                 The program is funded by outside sources. Students’ tuition fees will be fully covered by the program through external funding. In the future, students might be sponsored by specific organizations or join the program as self-sponsored students.



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

            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Stakeholders Engagement</h2>
            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="text-xl">Government Ministries</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700 leading-relaxed">
                    Relevant government ministries, such as, the Ministry of Education, Ministry of Innovation and Technology, Ethiopian Institute of Artificial Intelligence, Ethiopian Telecommunication are key stakeholders since their involvement is essential for aligning the project with national policies and priorities in psychosocial and in mental health services.

                  </p>

                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-xl">Funding Agencies</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700 leading-relaxed">
                    Organizations and institutions that provide financial support for the project are critical stakeholders. Their investment is necessary for the project’s sustainability and growth, and their expectations must be considered in project planning and reporting.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-xl">Non-governmental Organizations</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700 leading-relaxed">
                    NGOs that focus on psychosocial and in mental health services are important partners since their insights and collaboration can enhance the project’s relevance and impact in addressing community needs
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



      {/* Goal Process with Animation */}
      <motion.section

        className="container mx-auto px-4 py-16"
        initial={{ opacity: 0, y: 40 }}

        whileInView={{ opacity: 1, y: 0 }}

        viewport={{ once: true, amount: 0.2 }}

        transition={{ duration: 0.8, ease: "easeOut" }}

      >

        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Project Goal</h2>
          <div className="space-y-6">
            <p className="text-gray-700 leading-relaxed">
              The goal of this project is to establish a five-year graduate-level program in Psychosocial Software Engineering Program in Addis Ababa University and train 100 students as the first generation of Psychosocial Software Engineers that fosters innovation at the intersection of mental health, social work, and technology.

            </p>

          </div>

        </div>

  </motion.section>



      <SiteFooter />

    </div>

  )

}

