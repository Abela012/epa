
"use client"
import { useEffect, useState, useRef } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { FileText, Download, BookOpen, FileSpreadsheet, Presentation, Video } from "lucide-react"
import Image from "next/image"

type DownloadableFile = {
  name: string
  url: string
}

export default function DownloadablesPage() {
  const [files, setFiles] = useState<DownloadableFile[]>([])


  useEffect(() => {
    fetch("/api/downloadables")
      .then((res) => res.json())
      .then((data) => setFiles(data))
      .catch(() => setFiles([]))
  }, [])



  const getColorClasses = (color: string) => {
    const colors: Record<string, { bg: string; text: string }> = {
      blue: { bg: "bg-blue-100", text: "text-blue-600" },
      green: { bg: "bg-green-100", text: "text-green-600" },
      purple: { bg: "bg-purple-100", text: "text-purple-600" },
      orange: { bg: "bg-orange-100", text: "text-orange-600" },
      red: { bg: "bg-red-100", text: "text-red-600" },
      teal: { bg: "bg-teal-100", text: "text-teal-600" },
    }
    return colors[color] || colors.blue
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
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-balance">Downloadables</h1>
            <p className="text-xl text-blue-100 leading-relaxed">
              Access user guides, technical documentation, training materials, templates, and more to help you make the
              most of the Master of Social Work in Psychosocial Software Engineering
            </p>
          </div>
        </div>
      </section>



      {/* Downloads Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {files.length === 0 && <p className="col-span-full text-center text-gray-500">No files available.</p>}
          {files.map((file, idx) => (
            <Card key={file.name + idx} className="border-2 hover:border-blue-600 transition-colors">
              <CardHeader>
                <CardTitle className="text-lg">{file.name}</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-between text-sm text-gray-600 mb-4">
                  <span className="font-medium">FILE</span>
                  <span>-</span>
                </div>
                <Button
                  className="w-full bg-transparent"
                  variant="outline"
                  asChild
                >
                  <a href={file.url} download>
                    <Download className="w-4 h-4 mr-2" />
                    Download
                  </a>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
      <SiteFooter />
    </div>
  )
}
