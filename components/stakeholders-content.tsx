"use client"

import Image from "next/image"
import { motion } from "framer-motion"

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
  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-gray-900 text-white py-20 overflow-hidden">
        <Image
          src="/New folder/AAUgate.jpg"
          alt="Background"
          fill
          className="object-cover opacity-20"
          priority
        />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-balance">Stakeholders</h1>
            <p className="text-xl text-blue-100 leading-relaxed">
              Building a collaborative ecosystem to transform educational assessment in Ethiopia through strategic
              stakeholder engagement
            </p>
          </div>
        </div>
      </section>

      {/* Introduction */}
      <motion.section
        className="container mx-auto px-4 py-16"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={containerVariants}
      >
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Governmental</h2>
          <motion.div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-12" variants={containerVariants}>
            <motion.div className="flex flex-col items-center" variants={itemVariants}>
              <motion.div className="relative w-32 h-32 mb-4" whileHover={{ y: -6 }} transition={{ type: "spring", stiffness: 400, damping: 18 }}>
                <Image 
                  src="/New folder/Ministry_of_Education_(Ethiopia).png" 
                  alt="Ministry of Education Ethiopia"
                  fill
                  className="object-contain"
                />
              </motion.div>
              <p className="text-sm font-medium text-gray-700">Ministry of Education</p>
            </motion.div>
            
            <motion.div className="flex flex-col items-center" variants={itemVariants}>
              <motion.div className="relative w-32 h-32 mb-4" whileHover={{ y: -6 }} transition={{ type: "spring", stiffness: 400, damping: 18 }}>
                <Image 
                  src="/New folder/Ministry_of_Innovation_and_Technology_(Ethiopia).png" 
                  alt="Ministry of Innovation and Technology Ethiopia"
                  fill
                  className="object-contain"
                />
              </motion.div>
              <p className="text-sm font-medium text-gray-700">Ministry of Innovation & Technology</p>
            </motion.div>
            
            <motion.div className="flex flex-col items-center" variants={itemVariants}>
              <motion.div className="relative w-32 h-32 mb-4" whileHover={{ y: -6 }} transition={{ type: "spring", stiffness: 400, damping: 18 }}>
                <Image 
                  src="/New folder/Ethiopian Artificial Intelegence Institute.png" 
                  alt="Ethiopian Artificial Intelligence Institute"
                  fill
                  className="object-contain"
                />
              </motion.div>
              <p className="text-sm font-medium text-gray-700">Ethiopian AI Institute</p>
            </motion.div>
            
            <motion.div className="flex flex-col items-center" variants={itemVariants}>
              <motion.div className="relative w-32 h-32 mb-4" whileHover={{ y: -6 }} transition={{ type: "spring", stiffness: 400, damping: 18 }}>
                <Image 
                  src="/New folder/Ethio Telecom.png" 
                  alt="Ethio Telecom"
                  fill
                  className="object-contain"
                />
              </motion.div>
              <p className="text-sm font-medium text-gray-700">Ethio Telecom</p>
            </motion.div>
          </motion.div>
        </div>
      </motion.section>

      {/* International and Regional Organizations */}
      <motion.section
        className="bg-gray-50 py-16"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={containerVariants}
      >
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">International and Regional Organizations</h2>
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
    </>
  )
}
