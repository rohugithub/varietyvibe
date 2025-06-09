import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ShieldCheck, Heart, Zap, MapPin } from "lucide-react";

export const metadata: Metadata = {
  title: "About Us - ECommerce",
  description:
    "Discover the passion and craftsmanship behind our fashion store, where tradition meets contemporary style.",
};

export default function AboutPage() {
  return (
    <div>
      {/* Announcement Bar */}
      

      {/* Hero Section */}
      <section className="bg-emerald-800 text-white py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Story</h1>
            <p className="text-xl">
              Discover the passion and craftsmanship behind Your Fashion Store,
              where tradition meets contemporary style.
            </p>
          </div>
        </div>
      </section>

      {/* Our Journey Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-block text-emerald-600 font-medium mb-4">
                Our Journey
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                From Small Boutique to Fashion Destination
              </h2>
              <div className="space-y-4 text-gray-700">
                <p>
                  Founded in 2010, Your Fashion Store began as a small boutique
                  in New Delhi with a vision to bring authentic Indian
                  craftsmanship to the modern fashion landscape. What started as
                  a passion project by our founder, Priya Sharma, has grown into
                  one of India's most beloved ethnic wear destinations.
                </p>
                <p>
                  Over the years, we've expanded our collection to include a
                  wide range of traditional and contemporary designs, always
                  staying true to our roots while embracing innovation. Our
                  journey has been defined by a commitment to quality,
                  sustainability, and celebrating the rich textile heritage of
                  India.
                </p>
              </div>
            </div>
            <div className="relative">
              <Image
                src="/placeholder.svg?height=600&width=800&text=Traditional+Fashion+Image"
                alt="Traditional Indian Fashion"
                width={800}
                height={600}
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Our Values Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <div className="inline-block text-emerald-600 font-medium mb-4">
              Our Values
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              What Drives Us
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-sm">
              <div className="w-12 h-12 bg-emerald-50 rounded-full flex items-center justify-center mb-6">
                <ShieldCheck className="h-6 w-6 text-emerald-600" />
              </div>
              <h3 className="text-xl font-bold mb-4">Authenticity</h3>
              <p className="text-gray-600">
                We celebrate the rich heritage of Indian craftsmanship, working
                directly with artisans to preserve traditional techniques while
                creating contemporary designs.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-sm">
              <div className="w-12 h-12 bg-emerald-50 rounded-full flex items-center justify-center mb-6">
                <Heart className="h-6 w-6 text-emerald-600" />
              </div>
              <h3 className="text-xl font-bold mb-4">Sustainability</h3>
              <p className="text-gray-600">
                We're committed to ethical production practices, using
                eco-friendly materials and supporting fair wages for all
                artisans and workers in our supply chain.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-sm">
              <div className="w-12 h-12 bg-emerald-50 rounded-full flex items-center justify-center mb-6">
                <Zap className="h-6 w-6 text-emerald-600" />
              </div>
              <h3 className="text-xl font-bold mb-4">Innovation</h3>
              <p className="text-gray-600">
                While honoring tradition, we continuously explore new designs,
                techniques, and technologies to create fashion that resonates
                with the modern consumer.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Join Our Journey CTA */}
      {/* <section className="py-16 bg-emerald-700 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Join Our Fashion Journey
          </h2>
          <p className="text-xl max-w-3xl mx-auto mb-8">
            Discover our latest collections and be part of our story as we
            continue to celebrate the rich heritage of Indian fashion.
          </p>
          <Button
            asChild
            className="bg-white text-emerald-700 hover:bg-gray-100"
          >
            <Link href="/products">Explore Our Collections</Link>
          </Button>
        </div>
      </section> */}

      {/* Trust Badges */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            <div className="flex flex-col items-center">
              <div className="w-12 h-12 rounded-full border-2 border-emerald-600 flex items-center justify-center mb-4">
                <MapPin className="h-6 w-6 text-emerald-600" />
              </div>
              <h3 className="text-lg font-bold mb-1 uppercase">
                Made in India
              </h3>
              <p className="text-sm text-gray-600">
                Authentic products crafted in India
              </p>
            </div>

            <div className="flex flex-col items-center">
              <div className="w-12 h-12 rounded-full border-2 border-emerald-600 flex items-center justify-center mb-4">
                <ShieldCheck className="h-6 w-6 text-emerald-600" />
              </div>
              <h3 className="text-lg font-bold mb-1 uppercase">
                Assured Quality
              </h3>
              <p className="text-sm text-gray-600">
                Premium quality guaranteed
              </p>
            </div>

            <div className="flex flex-col items-center">
              <div className="w-12 h-12 rounded-full border-2 border-emerald-600 flex items-center justify-center mb-4">
                <svg
                  className="h-6 w-6 text-emerald-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                  />
                </svg>
              </div>
              <h3 className="text-lg font-bold mb-1 uppercase">
                Secure Payments
              </h3>
              <p className="text-sm text-gray-600">
                Safe and protected transactions
              </p>
            </div>

            <div className="flex flex-col items-center">
              <div className="w-12 h-12 rounded-full border-2 border-emerald-600 flex items-center justify-center mb-4">
                <svg
                  className="h-6 w-6 text-emerald-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"
                  />
                </svg>
              </div>
              <h3 className="text-lg font-bold mb-1 uppercase">
                Empowering Weavers
              </h3>
              <p className="text-sm text-gray-600">
                Supporting local artisans and communities
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      {/* <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            Subscribe to our newsletter
          </h2>
          <p className="text-gray-600 mb-8">
            Stay updated with our latest collections and exclusive offers.
          </p>
          <div className="flex flex-col md:flex-row gap-4 max-w-md mx-auto">
            <Input
              type="email"
              placeholder="Your email address"
              className="flex-grow"
            />
            <Button className="bg-emerald-700 hover:bg-emerald-800">
              Subscribe
            </Button>
          </div>
        </div>
      </section> */}

      {/* Contact Section */}
      {/* <section className="py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">Contact Us</h2>
          <div className="max-w-lg mx-auto">
            <p className="text-gray-600 mb-4">
              123 Fashion Street, Suite 100, Gwalior 474001, India
            </p>
            <p className="text-gray-600 mb-4">
              +91 123 456 7890, +91 123 456 7891
            </p>
            <p className="text-gray-600 mb-8">
              <a
                href="mailto:info@yourfashionstore.com"
                className="text-emerald-600 hover:underline"
              >
                info@yourfashionstore.com
              </a>
            </p>
            <Button asChild className="bg-emerald-700 hover:bg-emerald-800">
              <Link href="/contact">Get in Touch</Link>
            </Button>
          </div>
        </div>
      </section> */}
    </div>
  );
}
