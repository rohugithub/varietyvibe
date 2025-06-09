import Link from "next/link"
import { MapPin, Phone, Mail, Clock } from "lucide-react"

export function ContactInfo() {
  return (
    <>
      {/* Visit Us */}
      <div className="bg-white rounded-lg p-6 shadow-sm border">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-8 h-8 bg-teal-50 rounded-full flex items-center justify-center">
            <MapPin className="h-5 w-5 text-teal-600" />
          </div>
          <h2 className="text-lg font-semibold">Visit Us</h2>
        </div>
        <div className="space-y-1 mb-4">
          <p className="text-gray-700">123 Fashion Street, Suite 100</p>
          <p className="text-gray-700">Gwalior, 474001</p>
          <p className="text-gray-700">India</p>
        </div>
        <Link
          href="https://maps.google.com"
          target="_blank"
          className="text-teal-600 hover:text-teal-700 text-sm font-medium flex items-center"
        >
          Get directions
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="ml-1"
          >
            <path d="M5 12h14"></path>
            <path d="m12 5 7 7-7 7"></path>
          </svg>
        </Link>
      </div>

      {/* Call Us */}
      <div className="bg-white rounded-lg p-6 shadow-sm border">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-8 h-8 bg-teal-50 rounded-full flex items-center justify-center">
            <Phone className="h-5 w-5 text-teal-600" />
          </div>
          <h2 className="text-lg font-semibold">Call Us</h2>
        </div>
        <div className="space-y-4">
          <div>
            <p className="text-gray-600 text-sm">Customer Service:</p>
            <a href="tel:+911234567890" className="text-teal-600 font-medium hover:underline">
              +91 123 456 7890
            </a>
          </div>
          <div>
            <p className="text-gray-600 text-sm">Order Support:</p>
            <a href="tel:+911234567891" className="text-teal-600 font-medium hover:underline">
              +91 123 456 7891
            </a>
          </div>
        </div>
      </div>

      {/* Email Us */}
      <div className="bg-white rounded-lg p-6 shadow-sm border">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-8 h-8 bg-teal-50 rounded-full flex items-center justify-center">
            <Mail className="h-5 w-5 text-teal-600" />
          </div>
          <h2 className="text-lg font-semibold">Email Us</h2>
        </div>
        <div className="space-y-4">
          <div>
            <p className="text-gray-600 text-sm">General Inquiries:</p>
            <a href="mailto:info@yourfashionstore.com" className="text-teal-600 font-medium hover:underline">
              info@yourfashionstore.com
            </a>
          </div>
          <div>
            <p className="text-gray-600 text-sm">Customer Support:</p>
            <a href="mailto:support@yourfashionstore.com" className="text-teal-600 font-medium hover:underline">
              support@yourfashionstore.com
            </a>
          </div>
        </div>
      </div>

      {/* Business Hours */}
      <div className="bg-white rounded-lg p-6 shadow-sm border">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-8 h-8 bg-teal-50 rounded-full flex items-center justify-center">
            <Clock className="h-5 w-5 text-teal-600" />
          </div>
          <h2 className="text-lg font-semibold">Business Hours</h2>
        </div>
        <div className="space-y-2">
          <div className="flex justify-between">
            <span className="text-gray-600">Monday - Friday:</span>
            <span className="text-gray-800">10:00 AM - 7:00 PM</span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-600">Saturday:</span>
            <span className="text-gray-800">11:00 AM - 6:00 PM</span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-600">Sunday:</span>
            <span className="text-gray-800">Closed</span>
          </div>
        </div>
      </div>
    </>
  )
}
