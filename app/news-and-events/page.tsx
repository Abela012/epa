import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { Calendar, Clock, MapPin, Newspaper, Users, Award } from "lucide-react"
import Image from "next/image"

export default function NewsAndEventsPage() {
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
    <div className="min-h-screen bg-white">
      <SiteHeader />

      {/* Hero Section */}
      <section className="relative bg-gray-900 text-white py-20 overflow-hidden">
        <Image
          src="/New folder/brain.jpg"
          alt="Background"
          fill
          className="object-cover opacity-20"
          priority
        />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-balance">News & Events</h1>
            <p className="text-xl text-blue-100 leading-relaxed">
              Stay updated with the latest news, announcements, and upcoming events from the Master of Social Work in Psychosocial Software Engineering
            </p>
          </div>
        </div>
      </section>

      {/* Latest News Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="flex items-center gap-3 mb-8">
          <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
            <Newspaper className="w-6 h-6 text-blue-600" />
          </div>
          <h2 className="text-3xl font-bold text-gray-900">Latest News</h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {newsItems.map((news, index) => (
            <Card key={index} className="border-2 hover:border-blue-600 transition-colors overflow-hidden">
              <img src={news.image || "/placeholder.svg"} alt={news.title} className="w-full h-48 object-cover" />
              <CardHeader>
                <div className="flex items-center justify-between mb-2">
                  <Badge className={getCategoryColor(news.category)}>{news.category}</Badge>
                  <span className="text-sm text-gray-600">{news.date}</span>
                </div>
                <CardTitle className="text-xl">{news.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 leading-relaxed mb-4">{news.excerpt}</p>
                <Button variant="link" className="p-0 h-auto text-blue-600">
                  Read More →
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

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
