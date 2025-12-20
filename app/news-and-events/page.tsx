"use client"
import { useEffect, useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { Calendar, Clock, MapPin, Newspaper, Plus } from "lucide-react"
import Image from "next/image"
import { PostNewsModal } from "@/components/post-news-modal"
import { PostEventModal } from "@/components/post-event-modal"

type NewsItem = {
  _id?: string
  title: string
  description: string
  image?: string | null
  createdAt?: string
}

type RenderItem = {
  id?: string
  title: string
  image?: string | null
  date?: string
  category?: string
  excerpt?: string
  description?: string
  createdAt?: string
}

export default function NewsAndEventsPage() {
  const [currentUser, setCurrentUser] = useState<{ name: string; isAdmin?: boolean } | null>(null)
  const [postModalOpen, setPostModalOpen] = useState(false)
  const [postEventModalOpen, setPostEventModalOpen] = useState(false)
  const [newsItems, setNewsItems] = useState<NewsItem[]>([])
  const [eventsItems, setEventsItems] = useState<any[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    let isMounted = true
    const loadUser = async () => {
      try {
        const res = await fetch('/api/auth/me', { credentials: 'include' })
        const data = await res.json()
        if (isMounted) setCurrentUser(data.user)
      } catch {}
    }
    const loadNews = async () => {
      try {
        const res = await fetch('/api/news')
        const data = await res.json()
        if (isMounted) setNewsItems(data.items || [])
      } finally {
        if (isMounted) setLoading(false)
      }
    }
    const loadEvents = async () => {
      try {
        const res = await fetch('/api/events')
        const data = await res.json()
        if (isMounted) setEventsItems(data.items || [])
      } finally {
        // no-op
      }
    }
    loadUser()
    loadNews()
    loadEvents()
    const onVis = () => loadUser()
    const onFocus = () => loadUser()
    const onAuth = () => loadUser()
    if (typeof window !== 'undefined') {
      document.addEventListener('visibilitychange', onVis)
      window.addEventListener('focus', onFocus)
      window.addEventListener('auth:changed', onAuth as EventListener)
      window.addEventListener('news:posted', loadNews as unknown as EventListener)
      window.addEventListener('events:posted', loadEvents as unknown as EventListener)
    }
    return () => { 
      isMounted = false 
      if (typeof window !== 'undefined') {
        document.removeEventListener('visibilitychange', onVis)
        window.removeEventListener('focus', onFocus)
        window.removeEventListener('auth:changed', onAuth as EventListener)
        window.removeEventListener('news:posted', loadNews as unknown as EventListener)
        window.removeEventListener('events:posted', loadEvents as unknown as EventListener)
      }
    }
  }, [])

  const dummyNews = [
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

  // Normalize items for rendering to avoid TS union issues
  const renderItems: RenderItem[] = (loading
    ? dummyNews
    : (newsItems as unknown as RenderItem[])
  )

  // Use the events fetched from the API. If there are none, the UI will show "No upcoming events." to non-admin users.
  const upcomingEvents = eventsItems

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
          src="/New folder/AAUgate.jpg"
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
              {/* Post button moved below news list */}
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
          {renderItems.length === 0 && !loading && (
            <div className="col-span-full text-center text-gray-600">
              No news has been posted yet.
            </div>
          )}
          {renderItems.map((news, index) => (
            <Card key={news.id || index} className="border-2 hover:border-blue-600 transition-colors overflow-hidden">
              <img src={news.image || "/placeholder.svg"} alt={news.title} className="w-full h-48 object-cover" />
              <CardHeader>
                <div className="flex items-center justify-between mb-2">
                  <Badge className="bg-blue-100 text-blue-700">{news.category || 'Update'}</Badge>
                  <span className="text-sm text-gray-600">{news.date || (news.createdAt ? new Date(news.createdAt).toLocaleDateString() : '')}</span>
                </div>
                <CardTitle className="text-xl">{news.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 leading-relaxed mb-4">{news.excerpt || (news.description?.slice(0, 140) + (news.description && news.description.length > 140 ? '…' : ''))}</p>
                <Button variant="link" className="p-0 h-auto text-blue-600">
                  Read More →
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Post button (visible only when signed in) */}
        {currentUser && (
          <div className="mt-8 flex justify-end">
            <Button onClick={() => setPostModalOpen(true)} className="bg-blue-600 hover:bg-blue-700 text-white">
              <Plus className="w-4 h-4 mr-2" /> Post News
            </Button>
          </div>
        )}
      </section>

      {/* Upcoming Events Section */}
      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
              <Calendar className="w-6 h-6 text-green-600" />
            </div>
            <h2 className="text-3xl font-bold text-gray-900">Upcoming Events</h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {upcomingEvents.length === 0 && (
              <div className="col-span-full text-center text-gray-600">No upcoming events.</div>
            )}
            {upcomingEvents.map((evt: any, idx: number) => (
              <Card key={evt.id || idx} className="border-2 hover:border-green-600 transition-colors overflow-hidden">
                <img src={evt.image || '/placeholder.jpg'} alt={evt.title} className="w-full h-48 object-cover" />
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <Badge className={getEventTypeColor(evt.type || 'Training')}>{evt.type || 'Event'}</Badge>
                    <span className="text-sm text-gray-600">{evt.date || ''} {evt.time ? ` • ${evt.time}` : ''}</span>
                  </div>
                  <CardTitle className="text-xl">{evt.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700 leading-relaxed mb-4">{evt.description?.slice(0, 140) || ''}</p>
                  <div className="text-sm text-gray-600"><MapPin className="w-4 h-4 inline-block mr-1" /> {evt.location || ''}</div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Post Event button (visible when signed in) */}
          {currentUser && (
            <div className="mt-8 flex justify-end">
              <Button onClick={() => setPostEventModalOpen(true)} className="bg-green-600 hover:bg-green-700 text-white">
                <Plus className="w-4 h-4 mr-2" /> Post Event
              </Button>
            </div>
          )}
        </div>
      </section>

      <SiteFooter />

      {/* Post News Modal */}
      <PostNewsModal open={postModalOpen} onOpenChange={setPostModalOpen} />
      {/* Post Event Modal (admin only) */}
      <PostEventModal open={postEventModalOpen} onOpenChange={setPostEventModalOpen} />
    </div>
  )
}
