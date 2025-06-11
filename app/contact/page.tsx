import type { Metadata } from "next";
import { ContactForm } from "@/components/contact-form";
import { ContactInfo } from "@/components/contact-info";

 import { MapSection } from "@/components/map-section"
// import { FaqSection } from "@/components/faq-section"

export const metadata: Metadata = {
  title: "Contact Us - ECommerce",
  description:
    "Get in touch with our customer support team. We're here to help with any questions or concerns.",
};

export default function ContactPage() {
  return (
    <div>
      {/* Header Banner */}
      <div className="relative h-[40vh] md:h-[50vh] text-white">
        {/* Background image or color can be placed here if needed */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#b74d80] via-[#b74d809d] to-transparent z-10" />

        <div className="relative z-20 flex items-center h-full">
          <div className="container mx-auto px-4">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 ml-2 sm:ml-4">
              Contact Us
            </h1>
            <p className="text-sm sm:text-base md:text-lg lg:text-xl opacity-90 ml-2 sm:ml-4">
              Discover the passion and craftsmanship behind Your Fashion Store,
              where tradition meets contemporary style.
            </p>
          </div>
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
            <MapSection />
          </div>
        </div>

        {/* FAQ Section */}
        {/* <FaqSection /> */}
      </div>
    </div>
  );
}
