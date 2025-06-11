

import type { Metadata } from "next"
import { Search, MessageCircle, Phone, Mail } from "lucide-react"
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger
} from "@/components/ui/accordion"

export const metadata: Metadata = {
  title: "FAQ - Frequently Asked Questions - ECommerce",
  description:
    "Find answers to common questions about shopping, shipping, returns, and more."
}

const faqCategories = [
  {
    id: "orders",
    title: "Orders & Payment",
    icon: "🛒",
    questions: [
      {
        question: "How do I place an order?",
        answer:
          "To place an order, browse our products, add items to your cart, and proceed to checkout. You'll need to provide shipping information and payment details to complete your purchase."
      },
      {
        question: "What payment methods do you accept?",
        answer:
          "We accept all major credit/debit cards, digital wallets (PayTM, PhonePe, Google Pay), net banking, UPI payments, and cash on delivery in select areas."
      },
      {
        question: "Can I modify or cancel my order?",
        answer:
          "You can modify or cancel your order within 1 hour of placing it. After that, the order enters processing and cannot be changed. Contact customer support for assistance."
      },
      {
        question: "Why was my payment declined?",
        answer:
          "Payment can be declined due to insufficient funds, incorrect card details, bank restrictions, or security checks. Please verify your information and try again, or contact your bank."
      },
      {
        question: "Do you offer EMI options?",
        answer:
          "Yes, we offer EMI options on orders above ₹3,000 through select credit cards and digital payment platforms. EMI options are displayed at checkout."
      }
    ]
  },
  // ... other categories (same as before, keep as-is)
]

export default function FAQPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b">
        <div className="container mx-auto px-4 py-8">
          <div className="max-w-5xl mx-auto text-center">
            <h1 className="text-3xl md:text-4xl font-bold text-[#b74d80] mb-4">
              Frequently Asked Questions
            </h1>
            <p className="text-lg text-gray-600 mb-6">
              Find quick answers to common questions about our products and
              services
            </p>

            {/* Search Bar */}
            <div className="relative max-w-md mx-auto">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
              <Input
                type="search"
                placeholder="Search for answers..."
                className="pl-10 pr-4 py-3 w-full focus:ring-2 focus:ring-[#b74d80]"
              />
            </div>
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="container mx-auto px-6 py-12">
        <div className="max-w-8xl mx-auto">
          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            {[
              { number: "50+", label: "Common Questions Answered" },
              { number: "24/7", label: "Customer Support Available" },
              { number: "95%", label: "Questions Resolved Instantly" }
            ].map((stat, index) => (
              <Card key={index} className="text-center">
                <CardContent className="p-6">
                  <div className="text-3xl font-bold text-[#b74d80] mb-2">
                    {stat.number}
                  </div>
                  <p className="text-gray-600">{stat.label}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* FAQ Categories */}
          <div className="space-y-8">
            {faqCategories.map((category) => (
              <Card key={category.id}>
                <CardHeader>
                  <CardTitle className="flex items-center text-xl text-[#b74d80]">
                    <span className="text-2xl mr-3">{category.icon}</span>
                    {category.title}
                    <Badge className="ml-3 bg-[#b74d80]/10 text-[#b74d80] border border-[#b74d80]">
                      {category.questions.length} questions
                    </Badge>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <Accordion type="single" collapsible className="w-full">
                    {category.questions.map((faq, index) => (
                      <AccordionItem
                        key={index}
                        value={`${category.id}-${index}`}
                      >
                        <AccordionTrigger className="text-left hover:text-[#b74d80] transition-colors duration-200">
                          {faq.question}
                        </AccordionTrigger>
                        <AccordionContent className="text-gray-600 leading-relaxed">
                          {faq.answer}
                        </AccordionContent>
                      </AccordionItem>
                    ))}
                  </Accordion>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Still Need Help Section */}
          <Card className="mt-12 bg-gradient-to-r from-rose-50 to-fuchsia-50 border-[#b74d80] border">
            <CardContent className="p-8 text-center">
              <h3 className="text-2xl font-bold text-[#b74d80] mb-4">
                Still need help?
              </h3>
              <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
                Can't find the answer you're looking for? Our customer support
                team is here to help you 24/7.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <Button className="bg-[#b74d80] hover:bg-[#a03e6e] text-white">
                  <MessageCircle className="h-4 w-4 mr-2" />
                  Live Chat
                </Button>
                <Button
                  variant="outline"
                  className="hover:text-[#b74d80] border-[#b74d80]"
                >
                  <Phone className="h-4 w-4 mr-2" />
                  Call +91 123 456 7890
                </Button>
                <Button
                  variant="outline"
                  className="hover:text-[#b74d80] border-[#b74d80]"
                >
                  <Mail className="h-4 w-4 mr-2" />
                  Email Support
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
