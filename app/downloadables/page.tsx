
"use client"
import { useEffect, useState, useRef } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { FileText, Download, BookOpen, FileSpreadsheet, Presentation, Video } from "lucide-react"

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
      <section className="bg-gradient-to-r from-blue-600 to-blue-700 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-balance">Downloadables</h1>
            <p className="text-xl text-blue-100 leading-relaxed">
              Access user guides, technical documentation, training materials, templates, and more to help you make the
              most of the EPA Item Bank
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

      {/* Help Section */}
      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Card className="border-2">
              <CardHeader>
                <CardTitle className="text-2xl text-center">Need Help?</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-gray-700 leading-relaxed mb-6">
                  Can't find what you're looking for? Our support team is here to help you access the resources you
                  need.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button size="lg">
                    <FileText className="w-4 h-4 mr-2" />
                    View FAQ
                  </Button>
                  <Button size="lg" variant="outline">
                    Contact Support
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Usage Guidelines */}
      <section className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">Usage Guidelines</h2>
          <Card className="border-2">
            <CardContent className="pt-6">
              <div className="prose prose-lg max-w-none">
                <p className="text-gray-700 leading-relaxed mb-4">
                  All materials provided on this page are for authorized users of the EPA Item Bank. By downloading
                  these resources, you agree to the following terms:
                </p>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start gap-2">
                    <span className="text-blue-600 mt-1">•</span>
                    <span>
                      Materials are for educational and professional use within the Ethiopian education system only
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-600 mt-1">•</span>
                    <span>Redistribution or commercial use of materials is prohibited without written permission</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-600 mt-1">•</span>
                    <span>Proper attribution to the Ethiopian Psychologists' Association must be maintained</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-600 mt-1">•</span>
                    <span>Users must comply with all applicable data protection and privacy regulations</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-600 mt-1">•</span>
                    <span>
                      Test items and assessment materials must be kept secure and not shared with unauthorized parties
                    </span>
                  </li>
                </ul>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <SiteFooter />
    </div>
  )
}
