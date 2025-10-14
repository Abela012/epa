import Link from "next/link"
import { BookOpen, Mail, Phone, MapPin } from "lucide-react"

export function SiteFooter() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
                <BookOpen className="w-5 h-5 text-white" />
              </div>
              <span className="font-bold text-white">EPA Item Bank</span>
            </div>
            <p className="text-sm leading-relaxed">
              Developed by the Ethiopian Psychologists' Association in collaboration with partners to revolutionize
              educational assessments.
            </p>
          </div>

          <div>
            <h4 className="font-semibold text-white mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/" className="hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about-item-bank" className="hover:text-white transition-colors">
                  About Item Bank
                </Link>
              </li>
              <li>
                <Link href="/stakeholders-and-partners" className="hover:text-white transition-colors">
                  Stakeholders & Partners
                </Link>
              </li>
              <li>
                <Link href="/downloadables" className="hover:text-white transition-colors">
                  Downloadables
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-white mb-4">Resources</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/news-and-events" className="hover:text-white transition-colors">
                  News & Events
                </Link>
              </li>
              <li>
                <Link href="/contact-us" className="hover:text-white transition-colors">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-white mb-4">Contact</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0" />
                <span>Ethiopian Psychologists' Association, Addis Ababa, Ethiopia</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4 flex-shrink-0" />
                <a href="mailto:info@epaitembank.com" className="hover:text-white transition-colors">
                  info@epaitembank.com
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4 flex-shrink-0" />
                <span>+251 11 XXX XXXX</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm">
          <p>&copy; {new Date().getFullYear()} EPA Item Bank. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
