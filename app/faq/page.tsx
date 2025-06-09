import type { Metadata } from "next"
import { Search, MessageCircle, Phone, Mail } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export const metadata: Metadata = {
  title: "FAQ - Frequently Asked Questions - ECommerce",
  description: "Find answers to common questions about shopping, shipping, returns, and more.",
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
          "To place an order, browse our products, add items to your cart, and proceed to checkout. You'll need to provide shipping information and payment details to complete your purchase.",
      },
      {
        question: "What payment methods do you accept?",
        answer:
          "We accept all major credit/debit cards, digital wallets (PayTM, PhonePe, Google Pay), net banking, UPI payments, and cash on delivery in select areas.",
      },
      {
        question: "Can I modify or cancel my order?",
        answer:
          "You can modify or cancel your order within 1 hour of placing it. After that, the order enters processing and cannot be changed. Contact customer support for assistance.",
      },
      {
        question: "Why was my payment declined?",
        answer:
          "Payment can be declined due to insufficient funds, incorrect card details, bank restrictions, or security checks. Please verify your information and try again, or contact your bank.",
      },
      {
        question: "Do you offer EMI options?",
        answer:
          "Yes, we offer EMI options on orders above ₹3,000 through select credit cards and digital payment platforms. EMI options are displayed at checkout.",
      },
    ],
  },
  {
    id: "shipping",
    title: "Shipping & Delivery",
    icon: "🚚",
    questions: [
      {
        question: "What are your shipping charges?",
        answer:
          "Shipping is free on orders above ₹999. For orders below ₹999, standard shipping costs ₹49, express shipping costs ₹99, and same-day delivery costs ₹199.",
      },
      {
        question: "How long does delivery take?",
        answer:
          "Standard delivery takes 3-5 business days in metro cities, 4-6 days in tier 2 cities, and 5-8 days in rural areas. Express delivery is 1-3 days faster.",
      },
      {
        question: "Do you deliver internationally?",
        answer:
          "Yes, we deliver to select countries. International shipping takes 7-14 business days and costs vary by destination. Customs duties may apply.",
      },
      {
        question: "Can I track my order?",
        answer:
          "Yes, you'll receive tracking information via SMS and email once your order ships. You can also track your order in the 'My Orders' section of your account.",
      },
      {
        question: "What if I'm not available for delivery?",
        answer:
          "Our delivery partner will attempt delivery 3 times. If unsuccessful, the package will be returned to our warehouse. You can reschedule delivery through the tracking link.",
      },
    ],
  },
  {
    id: "returns",
    title: "Returns & Refunds",
    icon: "↩️",
    questions: [
      {
        question: "What is your return policy?",
        answer:
          "We offer a 30-day return policy for most items. Products must be in original condition with tags attached. Some items like intimate wear and personalized products are non-returnable.",
      },
      {
        question: "How do I return an item?",
        answer:
          "Log into your account, go to 'My Orders', select the item to return, choose a reason, and print the return label. Pack the item and drop it off at any courier location.",
      },
      {
        question: "When will I receive my refund?",
        answer:
          "Refunds are processed within 5-7 business days after we receive the returned item. The amount will be credited to your original payment method.",
      },
      {
        question: "Can I exchange an item instead of returning it?",
        answer:
          "Yes, we offer free exchanges for size and color within 15 days of delivery, subject to availability. The exchange process is similar to returns.",
      },
      {
        question: "Who pays for return shipping?",
        answer:
          "We provide free return shipping for defective items or wrong products shipped. For other returns, return shipping is free if you use our prepaid return label.",
      },
    ],
  },
  {
    id: "account",
    title: "Account & Profile",
    icon: "👤",
    questions: [
      {
        question: "How do I create an account?",
        answer:
          "Click 'Sign Up' at the top of our website, enter your email and create a password. You can also sign up using your Google or Facebook account for faster registration.",
      },
      {
        question: "I forgot my password. How do I reset it?",
        answer:
          "Click 'Forgot Password' on the login page, enter your email address, and we'll send you a password reset link. Follow the instructions in the email to create a new password.",
      },
      {
        question: "How do I update my profile information?",
        answer:
          "Log into your account and go to 'My Profile'. You can update your personal information, addresses, and communication preferences from there.",
      },
      {
        question: "Can I delete my account?",
        answer:
          "Yes, you can delete your account by contacting customer support. Please note that this action is permanent and cannot be undone. All your order history and saved information will be lost.",
      },
      {
        question: "How do I change my email address?",
        answer:
          "Go to 'My Profile' in your account settings and update your email address. You'll need to verify the new email address before the change takes effect.",
      },
    ],
  },
  {
    id: "products",
    title: "Products & Stock",
    icon: "📦",
    questions: [
      {
        question: "How do I know if a product is in stock?",
        answer:
          "Product availability is shown on each product page. If an item is out of stock, you can sign up for restock notifications to be alerted when it's available again.",
      },
      {
        question: "Are product images accurate?",
        answer:
          "We strive to provide accurate product images and descriptions. However, colors may vary slightly due to monitor settings and lighting conditions.",
      },
      {
        question: "Do you offer product warranties?",
        answer:
          "Yes, most products come with manufacturer warranties. Warranty terms vary by product and are mentioned on the product page. We also offer extended warranty options for electronics.",
      },
      {
        question: "Can I get product recommendations?",
        answer:
          "Yes, our website provides personalized recommendations based on your browsing and purchase history. You can also contact our customer support for personalized assistance.",
      },
      {
        question: "How do I know my size?",
        answer:
          "Each product page includes a detailed size chart. You can also use our virtual try-on feature for select items or contact customer support for sizing advice.",
      },
    ],
  },
  {
    id: "technical",
    title: "Technical Support",
    icon: "⚙️",
    questions: [
      {
        question: "The website is not loading properly. What should I do?",
        answer:
          "Try clearing your browser cache and cookies, or try accessing the site from a different browser. If the problem persists, contact our technical support team.",
      },
      {
        question: "I'm having trouble with the mobile app. How can I fix it?",
        answer:
          "Make sure you have the latest version of the app installed. Try restarting the app or your device. If issues continue, uninstall and reinstall the app.",
      },
      {
        question: "Why can't I add items to my cart?",
        answer:
          "This could be due to browser issues, the item being out of stock, or technical problems. Try refreshing the page, clearing your browser cache, or using a different browser.",
      },
      {
        question: "How do I enable notifications?",
        answer:
          "Go to your account settings and select 'Notification Preferences'. You can choose to receive notifications via email, SMS, or push notifications through our mobile app.",
      },
      {
        question: "Is your website secure for online shopping?",
        answer:
          "Yes, our website uses SSL encryption and is PCI DSS compliant. We never store your payment information, and all transactions are processed through secure payment gateways.",
      },
    ],
  },
]

export default function FAQPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b">
        <div className="container mx-auto px-4 py-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h1>
            <p className="text-lg text-gray-600 mb-6">
              Find quick answers to common questions about our products and services
            </p>

            {/* Search Bar */}
            <div className="relative max-w-md mx-auto">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
              <Input type="search" placeholder="Search for answers..." className="pl-10 pr-4 py-3 w-full" />
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          {/* Quick Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <Card className="text-center">
              <CardContent className="p-6">
                <div className="text-3xl font-bold text-emerald-600 mb-2">50+</div>
                <p className="text-gray-600">Common Questions Answered</p>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardContent className="p-6">
                <div className="text-3xl font-bold text-emerald-600 mb-2">24/7</div>
                <p className="text-gray-600">Customer Support Available</p>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardContent className="p-6">
                <div className="text-3xl font-bold text-emerald-600 mb-2">95%</div>
                <p className="text-gray-600">Questions Resolved Instantly</p>
              </CardContent>
            </Card>
          </div>

          {/* FAQ Categories */}
          <div className="space-y-8">
            {faqCategories.map((category) => (
              <Card key={category.id}>
                <CardHeader>
                  <CardTitle className="flex items-center text-xl">
                    <span className="text-2xl mr-3">{category.icon}</span>
                    {category.title}
                    <Badge variant="secondary" className="ml-3">
                      {category.questions.length} questions
                    </Badge>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <Accordion type="single" collapsible className="w-full">
                    {category.questions.map((faq, index) => (
                      <AccordionItem key={index} value={`${category.id}-${index}`}>
                        <AccordionTrigger className="text-left hover:text-emerald-600">{faq.question}</AccordionTrigger>
                        <AccordionContent className="text-gray-600 leading-relaxed">{faq.answer}</AccordionContent>
                      </AccordionItem>
                    ))}
                  </Accordion>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Still Need Help Section */}
          <Card className="mt-12 bg-gradient-to-r from-emerald-50 to-blue-50">
            <CardContent className="p-8 text-center">
              <h3 className="text-2xl font-bold mb-4">Still need help?</h3>
              <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
                Can't find the answer you're looking for? Our customer support team is here to help you 24/7.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <Button className="bg-emerald-600 hover:bg-emerald-700">
                  <MessageCircle className="h-4 w-4 mr-2" />
                  Live Chat
                </Button>
                <Button variant="outline">
                  <Phone className="h-4 w-4 mr-2" />
                  Call +91 123 456 7890
                </Button>
                <Button variant="outline">
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
