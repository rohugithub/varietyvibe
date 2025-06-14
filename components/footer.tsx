import Link from "next/link";
import Image from "next/image";
import {
  Truck,
  CreditCard,
  Shield,
  RotateCcw,
  Phone,
  Mail,
  Globe2,
} from "lucide-react";
import PhonePe from "../public/Payment-icons/PhonePe.png";
import Cash from "../public/Payment-icons/cash.png";
import Upi from "../public/Payment-icons/upi.png";
import Paytm from "../public/Payment-icons/Paytm.png";

export function Footer() {
  return (
    <footer className="mt-auto">
      {/* Features Banner */}
      <div className="text-black bg-[#F9FAFB] border-t font-light py-10 px-8">
        <div className="container mx-auto shadow-[0_4px_12px_0_rgba(192,99,143,0.15)] px-5 py-10 rounded-2xl bg-[#e992bc20] ">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 text-center">
            <div className="flex flex-col items-center ">
              <Truck className="w-12 h-12 mb-4 font-light text-[#b74d80e0]" />
              <h3 className="font-medium text-2xl text-black">Free Delivery</h3>
              <p className="text-black text-sm">On orders over $50</p>
            </div>
            <div className="flex flex-col items-center">
              <CreditCard className="h-12 w-12 mb-4 text-[#b74d80e0]" />
              <h3 className="font-medium text-xl text-black">
                Cash on Delivery
              </h3>
              <p className="text-black text-sm">Pay when you receive</p>
            </div>
            <div className="flex flex-col items-center">
              <Shield className="h-12 w-12 mb-4 text-[#b74d80e0]" />
              <h3 className="font-medium text-xl text-black ">
                Original Products
              </h3>
              <p className="text-black text-sm">100% authentic items</p>
            </div>
            <div className="flex flex-col items-center">
              <RotateCcw className="h-12 w-12 mb-4 text-[#b74d80e0]" />
              <h3 className="font-medium text-xl text-black">
                Easy Replacement
              </h3>
              <p className=" text-sm text-black">30-day return policy</p>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className=" py-6 px-12 bg-[#b74d80e0]">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Company Info */}
            <div className="lg:col-span-1">
              <div className="flex items-start mb-4  mr-4">
                <Link href="/">
                <Image
                  src="/logo/VarietyVibesLogo-white.png"
                  alt="logo"
                  width={400}
                  height={400}
                />
                </Link>
              </div>
              <p className="text-white mb-6 leading-relaxed text-md">
                Variety Vibes – Your One-Stop Shop for Everything You Love! From
                fashion to home essentials, we’ve got it all. Shop trendy,
                smart, and effortlessly with Variety Vibes.
              </p>
              {/* <div className="flex space-x-3">
                <Link
                  href="#"
                  className="w-10 h-10 bg-pink-500 rounded-full flex items-center justify-center text-white hover:bg-pink-600 transition-colors"
                >
                  <Instagram className="h-5 w-5" />
                </Link>
                <Link
                  href="#"
                  className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center text-white hover:bg-blue-700 transition-colors"
                >
                  <Facebook className="h-5 w-5" />
                </Link>
                <Link
                  href="#"
                  className="w-10 h-10 bg-sky-500 rounded-full flex items-center justify-center text-white hover:bg-sky-600 transition-colors"
                >
                  <Twitter className="h-5 w-5" />
                </Link>
              </div> */}
            </div>

            {/* Our Links */}
            <div>
              <h3 className="font-semibold text-3xl mb-4 text-white">
                Our Links
              </h3>
              <ul className="space-y-3 text-md">
                <li>
                  <Link
                    href="/about"
                    className="text-white  hover:text-gray-400 transition-colors"
                  >
                    About Us
                  </Link>
                </li>
                <li>
                  <Link
                    href="/contact"
                    className="text-white hover:text-gray-400 transition-colors"
                  >
                    Contact Us
                  </Link>
                </li>
                <li>
                  <Link
                    href="/blog"
                    className="text-white hover:text-gray-400 transition-colors"
                  >
                    Blogs
                  </Link>
                </li>
                <li>
                  <Link
                    href="/wholesale"
                    className="text-white hover:text-gray-400 transition-colors"
                  >
                    ECommerce Wholesale
                  </Link>
                </li>
                <li>
                  <Link
                    href="/sell"
                    className="text-white hover:text-gray-400 transition-colors"
                  >
                    Sell with Us
                  </Link>
                </li>
              </ul>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="font-semibold text-3xl mb-4 text-white">
              Customer Policy 
              </h3>
              <ul className="space-y-3 text-md">
                <li>
                  <Link
                    href="/track-order"
                    className="text-white hover:text-gray-400 transition-colors"
                  >
                    Track Order
                  </Link>
                </li>
                <li>
                  <Link
                    href="/shipping-policy"
                    className="text-white hover:text-gray-400 transition-colors"
                  >
                    Shipping Policy
                  </Link>
                </li>
                <li>
                  <Link
                    href="/faq"
                    className="text-white hover:text-gray-400 transition-colors"
                  >
                    FAQs
                  </Link>
                </li>
                <li>
                  <Link
                    href="/privacy-policy"
                    className="text-white hover:text-gray-400 transition-colors"
                  >
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link
                    href="/returns-refunds"
                    className="text-white hover:text-gray-400 transition-colors"
                  >
                    Returns & Refunds
                  </Link>
                </li>
              </ul>
            </div>

            {/* Support */}
            <div>
              <h3 className="font-semibold text-3xl mb-4 text-white">
                Support
              </h3>
              <div className="space-y-4 text-md">
                <div className="flex items-center space-x-3">
                  <Phone className="h-5 w-5 text-white" />
                  <div>
                    <p className="text-white">Call : 90501 11218</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <Mail className="h-5 w-5 text-white" />
                  <div>
                    <p className="text-white">Email : cs@ecommerce.com</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="w-full bg-[#b74d80e0]">
        <div className="container mx-auto flex flex-col md:flex-row justify-between items-center gap-6 px-4 py-6">
          {/* Left section - Country and Shipping */}
          <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-4 text-white text-center sm:text-left">
            <div className="flex items-center gap-2">
              <Globe2 className="w-6 h-6" />
              <span className="text-lg">India</span>
            </div>

            <div className="flex items-center gap-3 flex-wrap justify-center sm:justify-start">
              <span className="font-bold text-md">FedEx</span>
              <span className="font-bold text-md">
                <span className="text-blue-400">BLUE</span>
                <span className="text-yellow-400">DART</span>
              </span>
              <span className="font-bold text-md">DELHIVERY</span>
            </div>
          </div>

          {/* Center section - Copyright */}
          <div className="text-sm sm:text-md text-white text-center">
            © 2025 VARIETY VIBES Ltd. All rights reserved.
          </div>

          {/* Right section - Payment methods */}
          <div className="flex flex-col sm:flex-row items-center sm:items-start gap-2  sm:gap-4 text-white text-center sm:text-left">
            <span className="text-sm sm:text-md whitespace-nowrap mt-3">
              100% Secure Payments
            </span>
            <div className="flex flex-wrap gap-2 justify-center sm:justify-start">
              {[Paytm, Cash, Upi, PhonePe].map((src, i) => (
                <div
                  key={i}
                  className="bg-white rounded h-10 w-20 flex items-center justify-center"
                >
                  <Image
                    src={src}
                    alt={`Payment ${i}`}
                    width={80}
                    height={40}
                    className="object-contain"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
