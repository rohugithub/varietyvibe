import type { Metadata } from "next"
import { ContactForm } from "@/components/contact-form"
import { ContactInfo } from "@/components/contact-info"
// import { MapSection } from "@/components/map-section"
// import { FaqSection } from "@/components/faq-section"

export const metadata: Metadata = {
  title: "Contact Us - ECommerce",
  description: "Get in touch with our customer support team. We're here to help with any questions or concerns.",
}

export default function ContactPage() {
  return (
    <div>
      {/* Header Banner */}
      <div className="bg-teal-800 text-white py-12">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold mb-4">Contact Us</h1>
          <p className="max-w-2xl">
            We're here to help with any questions or concerns about our products and services.
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Contact Information Cards */}
          <div className="lg:col-span-1 space-y-6">
            <ContactInfo />
          </div>

          {/* Contact Form and Map */}
          <div className="lg:col-span-2 space-y-8">
            <ContactForm />
            {/* <MapSection /> */}
          </div>
        </div>

        {/* FAQ Section */}
        {/* <FaqSection /> */}
      </div>
    </div>
  )
}
