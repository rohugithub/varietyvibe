import type { Metadata } from "next"
import { Shield, ArrowRight, HelpCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Privacy Policy - ECommerce",
  description: "Learn about how we collect, use, and protect your personal information.",
}

export default function PrivacyPolicyPage() {
  return (
    <div className="bg-white">
      {/* Header Banner */}
      <div className="bg-gray-50 py-12 border-b">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">Privacy Policy</h1>
            <p className="text-gray-600">
              We value your privacy. This policy explains how we collect, use, and protect your personal information.
            </p>
            <p className="text-gray-500 text-sm mt-4">Last Updated: June 1, 2024</p>
          </div>
        </div>
      </div>

      {/* Quick Links */}
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-wrap justify-center gap-4">
          <Button variant="outline" asChild>
            <a href="#information">Information We Collect</a>
          </Button>
          <Button variant="outline" asChild>
            <a href="#use">How We Use Information</a>
          </Button>
          <Button variant="outline" asChild>
            <a href="#sharing">Information Sharing</a>
          </Button>
          <Button variant="outline" asChild>
            <a href="#security">Data Security</a>
          </Button>
          <Button variant="outline" asChild>
            <a href="#rights">Your Rights</a>
          </Button>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          {/* Introduction */}
          <div className="mb-12">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-purple-50 rounded-full flex items-center justify-center">
                <Shield className="h-5 w-5 text-purple-600" />
              </div>
              <h2 className="text-2xl font-semibold">Introduction</h2>
            </div>
            <div className="space-y-4 text-gray-700">
              <p>
                At ECommerce ("we," "our," or "us"), we are committed to protecting your privacy and the security of
                your personal information. This Privacy Policy explains how we collect, use, disclose, and safeguard
                your information when you visit our website, mobile application, and use our services.
              </p>
              <p>
                Please read this Privacy Policy carefully. By accessing or using our services, you acknowledge that you
                have read, understood, and agree to be bound by all the terms outlined in this policy. If you do not
                agree with our policies and practices, please do not use our services.
              </p>
              <p>
                We may change our Privacy Policy from time to time. We encourage you to review the Privacy Policy
                whenever you access our services to stay informed about our information practices and the choices
                available to you.
              </p>
            </div>
          </div>

          {/* Policy Tabs */}
          <Tabs defaultValue="collect" className="mb-12">
            <TabsList className="grid w-full grid-cols-2 md:grid-cols-5">
              <TabsTrigger value="collect">Information</TabsTrigger>
              <TabsTrigger value="use">Usage</TabsTrigger>
              <TabsTrigger value="sharing">Sharing</TabsTrigger>
              <TabsTrigger value="security">Security</TabsTrigger>
              <TabsTrigger value="rights">Your Rights</TabsTrigger>
            </TabsList>
            <TabsContent value="collect" className="p-6 border rounded-md mt-6">
              <h2 className="text-xl font-semibold mb-4">Information We Collect</h2>
              <div className="space-y-4 text-gray-700">
                <p>We collect several types of information from and about users of our services, including:</p>
                <h3 className="font-medium mt-6 mb-2">Personal Information:</h3>
                <ul className="list-disc pl-5 space-y-2">
                  <li>
                    <span className="font-medium">Contact Information:</span> Name, email address, postal address, phone
                    number
                  </li>
                  <li>
                    <span className="font-medium">Account Information:</span> Username, password, account preferences
                  </li>
                  <li>
                    <span className="font-medium">Payment Information:</span> Credit card details, billing address,
                    payment history
                  </li>
                  <li>
                    <span className="font-medium">Demographic Information:</span> Age, gender, interests, preferences
                  </li>
                </ul>
                <h3 className="font-medium mt-6 mb-2">Automatically Collected Information:</h3>
                <ul className="list-disc pl-5 space-y-2">
                  <li>
                    <span className="font-medium">Device Information:</span> IP address, browser type, operating system,
                    device identifiers
                  </li>
                  <li>
                    <span className="font-medium">Usage Data:</span> Pages visited, time spent on site, click patterns,
                    search queries
                  </li>
                  <li>
                    <span className="font-medium">Location Data:</span> General geographic location based on IP address
                  </li>
                  <li>
                    <span className="font-medium">Cookies and Tracking:</span> Information collected through cookies,
                    web beacons, and similar technologies
                  </li>
                </ul>
                <h3 className="font-medium mt-6 mb-2">Information from Third Parties:</h3>
                <ul className="list-disc pl-5 space-y-2">
                  <li>Social media platforms when you connect your accounts</li>
                  <li>Payment processors for transaction verification</li>
                  <li>Marketing partners and analytics providers</li>
                  <li>Public databases and data aggregators</li>
                </ul>
              </div>
            </TabsContent>
            <TabsContent value="use" className="p-6 border rounded-md mt-6">
              <h2 className="text-xl font-semibold mb-4">How We Use Your Information</h2>
              <div className="space-y-4 text-gray-700">
                <p>We use the information we collect about you for various purposes, including:</p>
                <h3 className="font-medium mt-6 mb-2">Service Provision:</h3>
                <ul className="list-disc pl-5 space-y-2">
                  <li>Process and fulfill your orders</li>
                  <li>Manage your account and provide customer support</li>
                  <li>Send order confirmations, shipping updates, and delivery notifications</li>
                  <li>Process payments and prevent fraudulent transactions</li>
                </ul>
                <h3 className="font-medium mt-6 mb-2">Communication:</h3>
                <ul className="list-disc pl-5 space-y-2">
                  <li>Respond to your inquiries and provide customer service</li>
                  <li>Send you promotional emails and marketing communications (with your consent)</li>
                  <li>Notify you about changes to our services or policies</li>
                  <li>Conduct surveys and collect feedback</li>
                </ul>
                <h3 className="font-medium mt-6 mb-2">Personalization and Improvement:</h3>
                <ul className="list-disc pl-5 space-y-2">
                  <li>Personalize your shopping experience and product recommendations</li>
                  <li>Analyze usage patterns to improve our website and services</li>
                  <li>Conduct research and analytics to enhance user experience</li>
                  <li>Develop new features and services</li>
                </ul>
                <h3 className="font-medium mt-6 mb-2">Legal and Security:</h3>
                <ul className="list-disc pl-5 space-y-2">
                  <li>Comply with legal obligations and regulatory requirements</li>
                  <li>Protect against fraud, unauthorized access, and security threats</li>
                  <li>Enforce our terms of service and other agreements</li>
                  <li>Resolve disputes and investigate complaints</li>
                </ul>
              </div>
            </TabsContent>
            <TabsContent value="sharing" className="p-6 border rounded-md mt-6">
              <h2 className="text-xl font-semibold mb-4">Information Sharing and Disclosure</h2>
              <div className="space-y-4 text-gray-700">
                <p>
                  We do not sell, trade, or otherwise transfer your personal information to third parties without your
                  consent, except as described in this policy:
                </p>
                <h3 className="font-medium mt-6 mb-2">Service Providers:</h3>
                <ul className="list-disc pl-5 space-y-2">
                  <li>Payment processors to handle transactions securely</li>
                  <li>Shipping companies to deliver your orders</li>
                  <li>Cloud storage providers to host our data</li>
                  <li>Marketing platforms to send communications</li>
                  <li>Analytics providers to understand user behavior</li>
                </ul>
                <h3 className="font-medium mt-6 mb-2">Business Transfers:</h3>
                <p>
                  In the event of a merger, acquisition, or sale of all or a portion of our assets, your information may
                  be transferred as part of that transaction. We will notify you via email and/or prominent notice on
                  our website of any change in ownership or uses of your personal information.
                </p>
                <h3 className="font-medium mt-6 mb-2">Legal Requirements:</h3>
                <p>
                  We may disclose your information when required by law or in response to valid requests by public
                  authorities, including to meet national security or law enforcement requirements.
                </p>
                <h3 className="font-medium mt-6 mb-2">Protection of Rights:</h3>
                <p>
                  We may disclose your information to protect and defend our rights and property, to protect the safety
                  of our users or others, to investigate fraud, or to respond to a government request.
                </p>
                <div className="bg-blue-50 border border-blue-200 rounded-md p-4 mt-6">
                  <h3 className="font-medium text-blue-800 mb-2">Data Processing Agreements</h3>
                  <p className="text-blue-800 text-sm">
                    All third-party service providers are required to sign data processing agreements that ensure they
                    handle your information in accordance with this Privacy Policy and applicable data protection laws.
                  </p>
                </div>
              </div>
            </TabsContent>
            <TabsContent value="security" className="p-6 border rounded-md mt-6">
              <h2 className="text-xl font-semibold mb-4">Data Security</h2>
              <div className="space-y-4 text-gray-700">
                <p>
                  We implement appropriate technical and organizational security measures to protect your personal
                  information against unauthorized access, alteration, disclosure, or destruction.
                </p>
                <h3 className="font-medium mt-6 mb-2">Technical Safeguards:</h3>
                <ul className="list-disc pl-5 space-y-2">
                  <li>SSL/TLS encryption for data transmission</li>
                  <li>Encrypted storage of sensitive information</li>
                  <li>Regular security audits and vulnerability assessments</li>
                  <li>Secure data centers with physical access controls</li>
                  <li>Multi-factor authentication for administrative access</li>
                </ul>
                <h3 className="font-medium mt-6 mb-2">Organizational Measures:</h3>
                <ul className="list-disc pl-5 space-y-2">
                  <li>Employee training on data protection and privacy</li>
                  <li>Access controls limiting data access to authorized personnel only</li>
                  <li>Regular review and update of security policies</li>
                  <li>Incident response procedures for data breaches</li>
                  <li>Data retention policies to minimize data storage</li>
                </ul>
                <h3 className="font-medium mt-6 mb-2">Payment Security:</h3>
                <p>
                  We use industry-standard payment processing systems that comply with PCI DSS (Payment Card Industry
                  Data Security Standard) requirements. We do not store complete credit card information on our servers.
                </p>
                <div className="bg-amber-50 border border-amber-200 rounded-md p-4 mt-6">
                  <h3 className="font-medium text-amber-800 mb-2">Important Security Notice</h3>
                  <p className="text-amber-800 text-sm">
                    While we strive to protect your personal information, no method of transmission over the internet or
                    electronic storage is 100% secure. We cannot guarantee absolute security of your information.
                  </p>
                </div>
              </div>
            </TabsContent>
            <TabsContent value="rights" className="p-6 border rounded-md mt-6">
              <h2 className="text-xl font-semibold mb-4">Your Privacy Rights</h2>
              <div className="space-y-4 text-gray-700">
                <p>Depending on your location, you may have certain rights regarding your personal information:</p>
                <h3 className="font-medium mt-6 mb-2">Access and Portability:</h3>
                <ul className="list-disc pl-5 space-y-2">
                  <li>Request access to the personal information we hold about you</li>
                  <li>Receive a copy of your data in a structured, machine-readable format</li>
                  <li>Request transfer of your data to another service provider</li>
                </ul>
                <h3 className="font-medium mt-6 mb-2">Correction and Deletion:</h3>
                <ul className="list-disc pl-5 space-y-2">
                  <li>Request correction of inaccurate or incomplete information</li>
                  <li>Request deletion of your personal information (subject to legal requirements)</li>
                  <li>Request restriction of processing in certain circumstances</li>
                </ul>
                <h3 className="font-medium mt-6 mb-2">Consent and Objection:</h3>
                <ul className="list-disc pl-5 space-y-2">
                  <li>Withdraw consent for processing where consent is the legal basis</li>
                  <li>Object to processing for direct marketing purposes</li>
                  <li>Object to automated decision-making and profiling</li>
                </ul>
                <h3 className="font-medium mt-6 mb-2">How to Exercise Your Rights:</h3>
                <p>
                  To exercise any of these rights, please contact us using the information provided in the "Contact Us"
                  section. We will respond to your request within 30 days and may require verification of your identity.
                </p>
                <div className="bg-green-50 border border-green-200 rounded-md p-4 mt-6">
                  <h3 className="font-medium text-green-800 mb-2">No Discrimination</h3>
                  <p className="text-green-800 text-sm">
                    We will not discriminate against you for exercising any of your privacy rights. You will not receive
                    different pricing or service levels based on your privacy choices.
                  </p>
                </div>
              </div>
            </TabsContent>
          </Tabs>

          {/* Detailed Policy Sections */}
          <div className="space-y-12 mb-12">
            <section id="information">
              <h2 className="text-2xl font-semibold mb-4 pb-2 border-b">Information We Collect</h2>
              <div className="space-y-4 text-gray-700">
                <p>
                  We collect information about you in several ways when you visit or use our services. This information
                  helps us provide you with a better shopping experience and improve our services.
                </p>
                <h3 className="font-medium mt-6 mb-2">Information You Provide Directly:</h3>
                <ul className="list-disc pl-5 space-y-2">
                  <li>
                    <span className="font-medium">Account Registration:</span> When you create an account, we collect
                    your name, email address, password, and other profile information.
                  </li>
                  <li>
                    <span className="font-medium">Purchase Information:</span> When you make a purchase, we collect
                    billing and shipping addresses, payment information, and order details.
                  </li>
                  <li>
                    <span className="font-medium">Communication:</span> When you contact us, we collect the information
                    you provide in your messages, including support requests and feedback.
                  </li>
                  <li>
                    <span className="font-medium">Reviews and Ratings:</span> When you leave product reviews or ratings,
                    we collect that content along with your account information.
                  </li>
                  <li>
                    <span className="font-medium">Surveys and Contests:</span> When you participate in surveys or
                    contests, we collect the information you provide.
                  </li>
                </ul>
                <h3 className="font-medium mt-6 mb-2">Information Collected Automatically:</h3>
                <ul className="list-disc pl-5 space-y-2">
                  <li>
                    <span className="font-medium">Log Data:</span> Our servers automatically record information when you
                    use our services, including IP address, browser type, pages visited, and timestamps.
                  </li>
                  <li>
                    <span className="font-medium">Cookies and Similar Technologies:</span> We use cookies, web beacons,
                    and similar technologies to collect information about your browsing behavior and preferences.
                  </li>
                  <li>
                    <span className="font-medium">Mobile Device Information:</span> When you use our mobile app, we may
                    collect device identifiers, operating system information, and app usage data.
                  </li>
                  <li>
                    <span className="font-medium">Location Information:</span> We may collect general location
                    information based on your IP address or more precise location data if you grant permission.
                  </li>
                </ul>
              </div>
            </section>

            <section id="use">
              <h2 className="text-2xl font-semibold mb-4 pb-2 border-b">How We Use Your Information</h2>
              <div className="space-y-4 text-gray-700">
                <p>
                  We use your information for legitimate business purposes to provide and improve our services,
                  communicate with you, and ensure the security of our platform.
                </p>
                <h3 className="font-medium mt-6 mb-2">Primary Uses:</h3>
                <div className="overflow-x-auto">
                  <table className="min-w-full border-collapse">
                    <thead>
                      <tr className="bg-gray-50">
                        <th className="border p-2 text-left">Purpose</th>
                        <th className="border p-2 text-left">Legal Basis</th>
                        <th className="border p-2 text-left">Data Types</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="border p-2">Order Processing</td>
                        <td className="border p-2">Contract Performance</td>
                        <td className="border p-2">Contact, Payment, Shipping Info</td>
                      </tr>
                      <tr>
                        <td className="border p-2">Customer Support</td>
                        <td className="border p-2">Legitimate Interest</td>
                        <td className="border p-2">Account, Communication Data</td>
                      </tr>
                      <tr>
                        <td className="border p-2">Marketing Communications</td>
                        <td className="border p-2">Consent</td>
                        <td className="border p-2">Contact, Preference Data</td>
                      </tr>
                      <tr>
                        <td className="border p-2">Fraud Prevention</td>
                        <td className="border p-2">Legitimate Interest</td>
                        <td className="border p-2">Payment, Device, Usage Data</td>
                      </tr>
                      <tr>
                        <td className="border p-2">Service Improvement</td>
                        <td className="border p-2">Legitimate Interest</td>
                        <td className="border p-2">Usage, Analytics Data</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <h3 className="font-medium mt-6 mb-2">Marketing and Personalization:</h3>
                <p>
                  With your consent, we may use your information to send you promotional emails, personalized product
                  recommendations, and targeted advertisements. You can opt out of marketing communications at any time
                  by clicking the unsubscribe link in our emails or updating your account preferences.
                </p>
              </div>
            </section>

            <section id="sharing">
              <h2 className="text-2xl font-semibold mb-4 pb-2 border-b">Information Sharing and Disclosure</h2>
              <div className="space-y-4 text-gray-700">
                <p>
                  We are committed to protecting your privacy and do not sell your personal information to third
                  parties. We only share your information in the limited circumstances described below.
                </p>
                <h3 className="font-medium mt-6 mb-2">Categories of Third Parties:</h3>
                <div className="overflow-x-auto">
                  <table className="min-w-full border-collapse">
                    <thead>
                      <tr className="bg-gray-50">
                        <th className="border p-2 text-left">Category</th>
                        <th className="border p-2 text-left">Purpose</th>
                        <th className="border p-2 text-left">Data Shared</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="border p-2">Payment Processors</td>
                        <td className="border p-2">Process transactions</td>
                        <td className="border p-2">Payment and billing information</td>
                      </tr>
                      <tr>
                        <td className="border p-2">Shipping Partners</td>
                        <td className="border p-2">Deliver orders</td>
                        <td className="border p-2">Name, shipping address, order details</td>
                      </tr>
                      <tr>
                        <td className="border p-2">Cloud Providers</td>
                        <td className="border p-2">Host and store data</td>
                        <td className="border p-2">All data types (encrypted)</td>
                      </tr>
                      <tr>
                        <td className="border p-2">Analytics Providers</td>
                        <td className="border p-2">Analyze usage patterns</td>
                        <td className="border p-2">Anonymized usage data</td>
                      </tr>
                      <tr>
                        <td className="border p-2">Marketing Platforms</td>
                        <td className="border p-2">Send communications</td>
                        <td className="border p-2">Contact information (with consent)</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <h3 className="font-medium mt-6 mb-2">International Transfers:</h3>
                <p>
                  Some of our service providers may be located outside of India. When we transfer your information
                  internationally, we ensure appropriate safeguards are in place, such as standard contractual clauses
                  or adequacy decisions by relevant authorities.
                </p>
              </div>
            </section>

            <section id="security">
              <h2 className="text-2xl font-semibold mb-4 pb-2 border-b">Data Security and Retention</h2>
              <div className="space-y-4 text-gray-700">
                <p>
                  We implement comprehensive security measures to protect your personal information from unauthorized
                  access, use, or disclosure.
                </p>
                <h3 className="font-medium mt-6 mb-2">Security Measures:</h3>
                <ul className="list-disc pl-5 space-y-2">
                  <li>
                    <span className="font-medium">Encryption:</span> All sensitive data is encrypted both in transit and
                    at rest using industry-standard encryption protocols.
                  </li>
                  <li>
                    <span className="font-medium">Access Controls:</span> We implement role-based access controls to
                    ensure only authorized personnel can access personal information.
                  </li>
                  <li>
                    <span className="font-medium">Regular Audits:</span> We conduct regular security audits and
                    penetration testing to identify and address vulnerabilities.
                  </li>
                  <li>
                    <span className="font-medium">Employee Training:</span> All employees receive regular training on
                    data protection and privacy best practices.
                  </li>
                  <li>
                    <span className="font-medium">Incident Response:</span> We have established procedures for
                    detecting, responding to, and reporting security incidents.
                  </li>
                </ul>
                <h3 className="font-medium mt-6 mb-2">Data Retention:</h3>
                <p>
                  We retain your personal information only for as long as necessary to fulfill the purposes for which it
                  was collected, comply with legal obligations, resolve disputes, and enforce our agreements.
                </p>
                <div className="overflow-x-auto">
                  <table className="min-w-full border-collapse">
                    <thead>
                      <tr className="bg-gray-50">
                        <th className="border p-2 text-left">Data Type</th>
                        <th className="border p-2 text-left">Retention Period</th>
                        <th className="border p-2 text-left">Reason</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="border p-2">Account Information</td>
                        <td className="border p-2">Until account deletion</td>
                        <td className="border p-2">Service provision</td>
                      </tr>
                      <tr>
                        <td className="border p-2">Order History</td>
                        <td className="border p-2">7 years</td>
                        <td className="border p-2">Legal compliance, warranty</td>
                      </tr>
                      <tr>
                        <td className="border p-2">Payment Information</td>
                        <td className="border p-2">As required by payment processors</td>
                        <td className="border p-2">Fraud prevention, chargebacks</td>
                      </tr>
                      <tr>
                        <td className="border p-2">Marketing Data</td>
                        <td className="border p-2">Until consent withdrawal</td>
                        <td className="border p-2">Marketing communications</td>
                      </tr>
                      <tr>
                        <td className="border p-2">Analytics Data</td>
                        <td className="border p-2">2 years (anonymized)</td>
                        <td className="border p-2">Service improvement</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </section>

            <section id="rights">
              <h2 className="text-2xl font-semibold mb-4 pb-2 border-b">Your Privacy Rights and Choices</h2>
              <div className="space-y-4 text-gray-700">
                <p>
                  We respect your privacy rights and provide you with choices about how your personal information is
                  collected and used.
                </p>
                <h3 className="font-medium mt-6 mb-2">Account Management:</h3>
                <ul className="list-disc pl-5 space-y-2">
                  <li>
                    <span className="font-medium">Access Your Data:</span> Log into your account to view and update your
                    personal information at any time.
                  </li>
                  <li>
                    <span className="font-medium">Download Your Data:</span> Request a copy of your personal information
                    in a portable format.
                  </li>
                  <li>
                    <span className="font-medium">Delete Your Account:</span> You can delete your account and associated
                    data through your account settings or by contacting us.
                  </li>
                </ul>
                <h3 className="font-medium mt-6 mb-2">Communication Preferences:</h3>
                <ul className="list-disc pl-5 space-y-2">
                  <li>
                    <span className="font-medium">Email Marketing:</span> Unsubscribe from promotional emails using the
                    link in each email or through your account settings.
                  </li>
                  <li>
                    <span className="font-medium">SMS Marketing:</span> Reply STOP to any promotional SMS to opt out of
                    text message marketing.
                  </li>
                  <li>
                    <span className="font-medium">Push Notifications:</span> Manage push notification preferences
                    through your device settings or app preferences.
                  </li>
                </ul>
                <h3 className="font-medium mt-6 mb-2">Cookie Preferences:</h3>
                <p>
                  You can manage cookie preferences through your browser settings or our cookie preference center. Note
                  that disabling certain cookies may affect the functionality of our website.
                </p>
                <h3 className="font-medium mt-6 mb-2">Exercising Your Rights:</h3>
                <p>
                  To exercise any of your privacy rights, please contact us at privacy@ecommerce.com or use the contact
                  information provided below. We will verify your identity and respond to your request within 30 days.
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 pb-2 border-b">Children's Privacy</h2>
              <div className="space-y-4 text-gray-700">
                <p>
                  Our services are not intended for children under the age of 13. We do not knowingly collect personal
                  information from children under 13. If you are a parent or guardian and believe your child has
                  provided us with personal information, please contact us immediately.
                </p>
                <p>
                  If we become aware that we have collected personal information from a child under 13 without
                  verification of parental consent, we will take steps to remove that information from our servers.
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 pb-2 border-b">Changes to This Privacy Policy</h2>
              <div className="space-y-4 text-gray-700">
                <p>
                  We may update this Privacy Policy from time to time to reflect changes in our practices, technology,
                  legal requirements, or other factors. When we make changes, we will:
                </p>
                <ul className="list-disc pl-5 space-y-2">
                  <li>Update the "Last Updated" date at the top of this policy</li>
                  <li>Notify you via email if the changes are material</li>
                  <li>Post a notice on our website highlighting the changes</li>
                  <li>Obtain your consent if required by applicable law</li>
                </ul>
                <p>
                  We encourage you to review this Privacy Policy periodically to stay informed about how we protect your
                  information.
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 pb-2 border-b">Contact Information</h2>
              <div className="space-y-4 text-gray-700">
                <p>
                  If you have any questions, concerns, or requests regarding this Privacy Policy or our data practices,
                  please contact us:
                </p>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h3 className="font-medium mb-2">Privacy Officer</h3>
                  <p>ECommerce Private Limited</p>
                  <p>123 Fashion Street, Suite 100</p>
                  <p>Gwalior, 474001, India</p>
                  <p>Email: privacy@ecommerce.com</p>
                  <p>Phone: +91 123 456 7890</p>
                </div>
                <p>
                  We will respond to your inquiry within 30 days. If you are not satisfied with our response, you may
                  have the right to lodge a complaint with your local data protection authority.
                </p>
              </div>
            </section>
          </div>

          {/* Contact Section */}
          <div className="bg-gray-50 p-6 rounded-lg">
            <div className="flex flex-col md:flex-row items-center justify-between">
              <div className="mb-4 md:mb-0">
                <h3 className="text-lg font-semibold mb-2">Questions about your privacy?</h3>
                <p className="text-gray-600">Our privacy team is here to help you understand your rights.</p>
              </div>
              <div className="flex space-x-4">
                <Button asChild>
                  <Link href="/contact">
                    Contact Privacy Team <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button variant="outline" asChild>
                  <Link href="/faq">
                    <HelpCircle className="mr-2 h-4 w-4" /> Privacy FAQs
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
