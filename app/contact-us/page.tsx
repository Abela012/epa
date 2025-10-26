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
import { Mail, Phone, MapPin, Clock } from "lucide-react"
import { useState } from "react"

export default function ContactUsPage() {
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
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-balance">Contact Us</h1>
            <p className="text-xl text-blue-100 leading-relaxed">
              Get in touch with the Master of Social Work in Psychosocial Software Engineering team. We're here to help with your questions and inquiries.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Information and Form */}
      <section className="container mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Information */}
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Get in Touch</h2>
            <p className="text-gray-700 leading-relaxed mb-8">
              Have questions about the Master of Social Work in Psychosocial Software Engineering? Need support or want to learn more about our program?
              We'd love to hear from you. Reach out to us using any of the methods below.
            </p>

            <div className="space-y-6">
              <Card>
                <CardContent className="pt-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-6 h-6 text-blue-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-2">Office Address</h3>
                      <p className="text-gray-700 leading-relaxed">
                        Addis Ababa University
                        <br />
                        Addis Ababa, Ethiopia
                        <br />
                        P.O. Box: XXXX
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="pt-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Mail className="w-6 h-6 text-green-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-2">Email</h3>
                      <p className="text-gray-700">
                        General Inquiries:{" "}
                        <a href="mailto:info@eps.org" className="text-blue-600 hover:underline">
                          info@eps.org
                        </a>
                      </p>
                      <p className="text-gray-700">
                        Technical Support:{" "}
                        <a href="mailto:support@epaitembank.com" className="text-blue-600 hover:underline">
                          support@epaitembank.com
                        </a>
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

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
          </div>

          {/* Contact Form */}
          {/* <div>
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
          </div> */}
        </div>
      </section>

      

      <SiteFooter />
    </div>
  )
}
