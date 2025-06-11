import type { Metadata } from "next"
import { ArrowRight, Truck, Clock, Globe, HelpCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Shipping Policy - ECommerce",
  description: "Learn about our shipping methods, delivery timeframes, and international shipping options.",
}

export default function ShippingPolicyPage() {
  return (
    <div className="bg-white">
      {/* Header Banner */}
      <div className="bg-gray-50 py-12 border-b">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">Shipping Policy</h1>
            <p className="text-gray-600">
              Everything you need to know about our shipping methods, delivery timeframes, and tracking your order.
            </p>
          </div>
        </div>
      </div>

      {/* Quick Links */}
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-wrap justify-center gap-4">
          <Button variant="outline" asChild>
            <a href="#domestic">Domestic Shipping</a>
          </Button>
          <Button variant="outline" asChild>
            <a href="#international">International Shipping</a>
          </Button>
          <Button variant="outline" asChild>
            <a href="#tracking">Order Tracking</a>
          </Button>
          <Button variant="outline" asChild>
            <a href="#special">Special Items</a>
          </Button>
          <Button variant="outline" asChild>
            <a href="#faq">FAQs</a>
          </Button>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-6 py-8">
        <div className="max-w-8xl mx-auto">
          {/* Shipping Highlights */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <Card>
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-[#b74d803c] rounded-full flex items-center justify-center mx-auto mb-4">
                  <Truck className="h-6 w-6 bg-[#b74d80]" />
                </div>
                <h3 className="font-semibold mb-2">Free Shipping</h3>
                <p className="text-sm text-gray-600">On orders over ₹500 within India</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-[#b74d803c] rounded-full flex items-center justify-center mx-auto mb-4">
                  <Clock className="h-6 w-6 bg-[#b74d80]" />
                </div>
                <h3 className="font-semibold mb-2">Fast Delivery</h3>
                <p className="text-sm text-gray-600">2-5 business days for most locations</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-[#b74d803c] rounded-full flex items-center justify-center mx-auto mb-4">
                  <Globe className="h-6 w-6 bg-[#b74d80]" />
                </div>
                <h3 className="font-semibold mb-2">Global Shipping</h3>
                <p className="text-sm text-gray-600">We ship to over 100 countries worldwide</p>
              </CardContent>
            </Card>
          </div>

          {/* Shipping Tabs */}
          <Tabs defaultValue="domestic" className="mb-12">
            <TabsList className="grid w-full grid-cols-2 md:grid-cols-4">
              <TabsTrigger value="domestic">Domestic Shipping</TabsTrigger>
              <TabsTrigger value="international">International</TabsTrigger>
              <TabsTrigger value="tracking">Order Tracking</TabsTrigger>
              <TabsTrigger value="special">Special Items</TabsTrigger>
            </TabsList>
            <TabsContent value="domestic" className="p-6 border rounded-md mt-6">
              <h2 className="text-xl font-semibold mb-4">Domestic Shipping</h2>
              <div className="space-y-4 text-gray-700">
                <p>
                  We offer multiple shipping options for deliveries within India to ensure you receive your order in a
                  timeframe that suits your needs.
                </p>
                <h3 className="font-medium mt-6 mb-2">Shipping Methods:</h3>
                <div className="overflow-x-auto">
                  <table className="min-w-full border-collapse">
                    <thead>
                      <tr className="bg-gray-50">
                        <th className="border p-2 text-left">Shipping Method</th>
                        <th className="border p-2 text-left">Estimated Delivery Time</th>
                        <th className="border p-2 text-left">Cost</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="border p-2">Standard Shipping</td>
                        <td className="border p-2">3-5 business days</td>
                        <td className="border p-2">₹49 (Free on orders over ₹500)</td>
                      </tr>
                      <tr>
                        <td className="border p-2">Express Shipping</td>
                        <td className="border p-2">1-2 business days</td>
                        <td className="border p-2">₹99</td>
                      </tr>
                      <tr>
                        <td className="border p-2">Same-Day Delivery</td>
                        <td className="border p-2">Same day (order before 12 PM)</td>
                        <td className="border p-2">₹199 (Select cities only)</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <p className="mt-4">
                  Please note that delivery times are estimates and may vary based on your location, especially for
                  remote areas. Orders placed after 2 PM may be processed the following business day.
                </p>
              </div>
            </TabsContent>
            <TabsContent value="international" className="p-6 border rounded-md mt-6">
              <h2 className="text-xl font-semibold mb-4">International Shipping</h2>
              <div className="space-y-4 text-gray-700">
                <p>
                  We're proud to ship our products to customers around the world. International shipping is available to
                  over 100 countries.
                </p>
                <h3 className="font-medium mt-6 mb-2">International Shipping Options:</h3>
                <div className="overflow-x-auto">
                  <table className="min-w-full border-collapse">
                    <thead>
                      <tr className="bg-gray-50">
                        <th className="border p-2 text-left">Region</th>
                        <th className="border p-2 text-left">Estimated Delivery Time</th>
                        <th className="border p-2 text-left">Starting Cost</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="border p-2">Asia</td>
                        <td className="border p-2">5-10 business days</td>
                        <td className="border p-2">₹499</td>
                      </tr>
                      <tr>
                        <td className="border p-2">North America</td>
                        <td className="border p-2">7-14 business days</td>
                        <td className="border p-2">₹999</td>
                      </tr>
                      <tr>
                        <td className="border p-2">Europe</td>
                        <td className="border p-2">7-14 business days</td>
                        <td className="border p-2">₹899</td>
                      </tr>
                      <tr>
                        <td className="border p-2">Australia & New Zealand</td>
                        <td className="border p-2">10-15 business days</td>
                        <td className="border p-2">₹1099</td>
                      </tr>
                      <tr>
                        <td className="border p-2">Rest of World</td>
                        <td className="border p-2">14-21 business days</td>
                        <td className="border p-2">₹1299</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <div className="bg-amber-50 border border-amber-200 rounded-md p-4 mt-6">
                  <h3 className="font-medium text-amber-800 mb-2">Important Information for International Orders</h3>
                  <p className="text-amber-800 text-sm">
                    International customers are responsible for all duties, import taxes, and customs fees. These are
                    not included in the order total and will be collected by the shipping carrier upon delivery.
                  </p>
                </div>
              </div>
            </TabsContent>
            <TabsContent value="tracking" className="p-6 border rounded-md mt-6">
              <h2 className="text-xl font-semibold mb-4">Order Tracking</h2>
              <div className="space-y-4 text-gray-700">
                <p>
                  We provide tracking information for all orders so you can monitor your package's journey from our
                  warehouse to your doorstep.
                </p>
                <h3 className="font-medium mt-6 mb-2">How to Track Your Order:</h3>
                <ol className="list-decimal pl-5 space-y-2">
                  <li>Log in to your ECommerce account</li>
                  <li>Navigate to "My Orders"</li>
                  <li>Select the order you wish to track</li>
                  <li>Click on "Track Package" to view the current status and location</li>
                </ol>
                <p className="mt-4">
                  Alternatively, you can use the tracking number provided in your shipping confirmation email directly
                  on our carrier's website.
                </p>
                <h3 className="font-medium mt-6 mb-2">Shipping Notifications:</h3>
                <p>You will receive email notifications at the following stages of the shipping process:</p>
                <ul className="list-disc pl-5 space-y-1">
                  <li>When your order is confirmed</li>
                  <li>When your order is processed and packed</li>
                  <li>When your order is shipped (with tracking information)</li>
                  <li>When your order is out for delivery</li>
                  <li>When your order has been delivered</li>
                </ul>
                <div className="bg-blue-50 border border-blue-200 rounded-md p-4 mt-6">
                  <h3 className="font-medium text-blue-800 mb-2">Need Help with Tracking?</h3>
                  <p className="text-blue-800 text-sm">
                    If your tracking information hasn't updated in 48 hours or shows unexpected information, please
                    contact our customer service team for assistance.
                  </p>
                </div>
              </div>
            </TabsContent>
            <TabsContent value="special" className="p-6 border rounded-md mt-6">
              <h2 className="text-xl font-semibold mb-4">Special Items & Considerations</h2>
              <div className="space-y-4 text-gray-700">
                <p>
                  Some products require special handling or have unique shipping considerations due to their size,
                  fragility, or value.
                </p>
                <h3 className="font-medium mt-6 mb-2">Oversized and Heavy Items:</h3>
                <p>
                  Products like furniture, large appliances, and other bulky items may incur additional shipping charges
                  and have longer delivery timeframes. These items are typically shipped via specialized carriers and
                  may require appointment delivery.
                </p>
                <h3 className="font-medium mt-6 mb-2">Fragile Items:</h3>
                <p>
                  Delicate products such as glassware, electronics, and artwork are packed with extra care using
                  specialized materials. While this ensures maximum protection, it may slightly increase the package
                  size and shipping cost.
                </p>
                <h3 className="font-medium mt-6 mb-2">High-Value Items:</h3>
                <p>
                  Products valued over ₹10,000 are shipped with signature confirmation required upon delivery for your
                  security. We may also use discreet packaging for these items to prevent theft.
                </p>
                <h3 className="font-medium mt-6 mb-2">Pre-Order and Backorder Items:</h3>
                <p>
                  Items marked as "Pre-Order" or "Backorder" will ship as soon as they become available. Your order may
                  be shipped in multiple packages if it contains both in-stock and backordered items, at no additional
                  shipping cost to you.
                </p>
              </div>
            </TabsContent>
          </Tabs>

          {/* Detailed Policy Sections */}
          <div className="space-y-12 mb-12">
            <section id="domestic">
              <h2 className="text-2xl font-semibold mb-4 pb-2 border-b">Domestic Shipping Details</h2>
              <div className="space-y-4 text-gray-700">
                <p>
                  We partner with India's leading courier services to ensure reliable and timely delivery of your orders
                  across the country.
                </p>
                <h3 className="font-medium mt-6 mb-2">Shipping Partners:</h3>
                <ul className="list-disc pl-5 space-y-1">
                  <li>Delhivery</li>
                  <li>BlueDart</li>
                  <li>DTDC</li>
                  <li>India Post</li>
                  <li>Ecom Express</li>
                </ul>
                <p className="mt-4">
                  The specific carrier used for your order will depend on your location and the items purchased. We
                  select the most efficient option to ensure timely delivery.
                </p>
                <h3 className="font-medium mt-6 mb-2">Delivery Timeframes by Region:</h3>
                <div className="overflow-x-auto">
                  <table className="min-w-full border-collapse">
                    <thead>
                      <tr className="bg-gray-50">
                        <th className="border p-2 text-left">Region</th>
                        <th className="border p-2 text-left">Standard Shipping</th>
                        <th className="border p-2 text-left">Express Shipping</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="border p-2">Metro Cities (Delhi, Mumbai, Bangalore, etc.)</td>
                        <td className="border p-2">2-3 business days</td>
                        <td className="border p-2">1 business day</td>
                      </tr>
                      <tr>
                        <td className="border p-2">Tier 2 Cities</td>
                        <td className="border p-2">3-4 business days</td>
                        <td className="border p-2">1-2 business days</td>
                      </tr>
                      <tr>
                        <td className="border p-2">Other Urban Areas</td>
                        <td className="border p-2">4-5 business days</td>
                        <td className="border p-2">2-3 business days</td>
                      </tr>
                      <tr>
                        <td className="border p-2">Remote Areas</td>
                        <td className="border p-2">5-7 business days</td>
                        <td className="border p-2">3-4 business days</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <div className="bg-blue-50 border border-blue-200 rounded-md p-4 mt-6">
                  <h3 className="font-medium text-blue-800 mb-2">Free Shipping Eligibility</h3>
                  <p className="text-blue-800 text-sm">
                    Orders with a subtotal of ₹500 or more qualify for free standard shipping within India. This applies
                    to most products except oversized or special handling items.
                  </p>
                </div>
              </div>
            </section>

            <section id="international">
              <h2 className="text-2xl font-semibold mb-4 pb-2 border-b">International Shipping Details</h2>
              <div className="space-y-4 text-gray-700">
                <p>
                  We ship to over 100 countries worldwide, bringing our products to customers across the globe. Our
                  international shipping partners include DHL, FedEx, and UPS to ensure reliable delivery.
                </p>
                <h3 className="font-medium mt-6 mb-2">International Shipping Process:</h3>
                <ol className="list-decimal pl-5 space-y-2">
                  <li>
                    <span className="font-medium">Order Processing:</span> International orders typically require 1-2
                    additional business days for processing and customs documentation.
                  </li>
                  <li>
                    <span className="font-medium">Customs Clearance:</span> All international shipments must go through
                    customs clearance in the destination country, which may cause delays beyond our control.
                  </li>
                  <li>
                    <span className="font-medium">Delivery:</span> Once cleared by customs, your local carrier will
                    deliver the package to your address.
                  </li>
                </ol>
                <h3 className="font-medium mt-6 mb-2">Customs, Duties, and Taxes:</h3>
                <p>
                  International customers are responsible for all customs duties, import taxes, and fees levied by the
                  destination country. These charges are not included in your order total and will be collected by the
                  shipping carrier upon delivery.
                </p>
                <p className="mt-2">
                  The amount of these fees varies by country and the value of the items purchased. We cannot predict the
                  exact amount as customs policies and tax rates differ worldwide.
                </p>
                <h3 className="font-medium mt-6 mb-2">Restricted Countries:</h3>
                <p>
                  Due to shipping restrictions and regulations, we currently cannot ship to the following countries:
                </p>
                <ul className="list-disc pl-5 space-y-1">
                  <li>North Korea</li>
                  <li>Iran</li>
                  <li>Cuba</li>
                  <li>Syria</li>
                  <li>Sudan</li>
                  <li>Crimea region</li>
                </ul>
                <div className="bg-amber-50 border border-amber-200 rounded-md p-4 mt-6">
                  <h3 className="font-medium text-amber-800 mb-2">International Return Information</h3>
                  <p className="text-amber-800 text-sm">
                    International customers are responsible for return shipping costs unless the return is due to our
                    error. Please see our Returns Policy for complete details on international returns.
                  </p>
                </div>
              </div>
            </section>

            <section id="tracking">
              <h2 className="text-2xl font-semibold mb-4 pb-2 border-b">Order Tracking & Delivery</h2>
              <div className="space-y-4 text-gray-700">
                <p>
                  We provide comprehensive tracking information for all orders to keep you informed about your package's
                  status from the moment it leaves our warehouse until it reaches your doorstep.
                </p>
                <h3 className="font-medium mt-6 mb-2">Understanding Tracking Statuses:</h3>
                <div className="overflow-x-auto">
                  <table className="min-w-full border-collapse">
                    <thead>
                      <tr className="bg-gray-50">
                        <th className="border p-2 text-left">Status</th>
                        <th className="border p-2 text-left">Description</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="border p-2">Order Confirmed</td>
                        <td className="border p-2">Your order has been received and payment confirmed</td>
                      </tr>
                      <tr>
                        <td className="border p-2">Processing</td>
                        <td className="border p-2">Your order is being prepared and packed</td>
                      </tr>
                      <tr>
                        <td className="border p-2">Shipped</td>
                        <td className="border p-2">Your order has been handed over to the shipping carrier</td>
                      </tr>
                      <tr>
                        <td className="border p-2">In Transit</td>
                        <td className="border p-2">Your package is on its way to the delivery address</td>
                      </tr>
                      <tr>
                        <td className="border p-2">Out for Delivery</td>
                        <td className="border p-2">Your package is on the delivery vehicle for final delivery</td>
                      </tr>
                      <tr>
                        <td className="border p-2">Delivered</td>
                        <td className="border p-2">Your package has been delivered</td>
                      </tr>
                      <tr>
                        <td className="border p-2">Exception</td>
                        <td className="border p-2">
                          There's an issue with delivery (weather delay, address issue, etc.)
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <h3 className="font-medium mt-6 mb-2">Delivery Attempts:</h3>
                <p>
                  Our carriers will make up to three delivery attempts. If no one is available to receive the package,
                  they may:
                </p>
                <ul className="list-disc pl-5 space-y-1">
                  <li>Leave the package in a secure location (if safe to do so)</li>
                  <li>Leave a delivery notice with instructions for pickup or rescheduling</li>
                  <li>Return the package to their facility for pickup</li>
                </ul>
                <p className="mt-4">
                  After three unsuccessful delivery attempts, the package may be returned to us, and you will be
                  contacted regarding redelivery options.
                </p>
                <h3 className="font-medium mt-6 mb-2">Address Accuracy:</h3>
                <p>
                  Please ensure your shipping address is complete and accurate. We are not responsible for delays or
                  non-delivery due to incorrect address information. Once an order has been shipped, we cannot change
                  the delivery address.
                </p>
              </div>
            </section>

            <section id="special">
              <h2 className="text-2xl font-semibold mb-4 pb-2 border-b">Special Shipping Considerations</h2>
              <div className="space-y-4 text-gray-700">
                <h3 className="font-medium mb-2">Oversized and Heavy Items:</h3>
                <p>
                  Large items such as furniture, appliances, and other bulky products have special shipping
                  considerations:
                </p>
                <ul className="list-disc pl-5 space-y-2">
                  <li>Additional shipping charges may apply based on weight, dimensions, and delivery location</li>
                  <li>
                    Delivery timeframes are typically longer (5-10 business days for domestic, 2-4 weeks for
                    international)
                  </li>
                  <li>Specialized carriers may contact you to schedule a delivery appointment</li>
                  <li>
                    Some locations may require curbside delivery only, with additional charges for inside delivery
                  </li>
                </ul>

                <h3 className="font-medium mt-6 mb-2">Perishable Items:</h3>
                <p>
                  For perishable products, we use expedited shipping methods and specialized packaging to ensure
                  freshness:
                </p>
                <ul className="list-disc pl-5 space-y-1">
                  <li>Perishable items are only shipped Monday-Wednesday to avoid weekend transit delays</li>
                  <li>Temperature-controlled packaging is used when necessary</li>
                  <li>Delivery signature is typically required</li>
                  <li>International shipping is not available for most perishable items</li>
                </ul>

                <h3 className="font-medium mt-6 mb-2">Pre-Orders and Backorders:</h3>
                <p>When you place an order for a pre-order or backordered item:</p>
                <ul className="list-disc pl-5 space-y-1">
                  <li>Your payment method will be authorized but not charged until the item ships</li>
                  <li>You'll receive an estimated shipping date in your order confirmation</li>
                  <li>We'll notify you of any changes to the estimated availability date</li>
                  <li>You can cancel a pre-order or backordered item at any time before it ships</li>
                </ul>

                <h3 className="font-medium mt-6 mb-2">Gift Orders:</h3>
                <p>When sending items as gifts:</p>
                <ul className="list-disc pl-5 space-y-1">
                  <li>Select the "This is a gift" option during checkout</li>
                  <li>Add a personalized message (up to 200 characters)</li>
                  <li>Choose gift wrapping for eligible items (additional fee applies)</li>
                  <li>Price information will be omitted from the package</li>
                </ul>
                <div className="bg-blue-50 border border-blue-200 rounded-md p-4 mt-6">
                  <h3 className="font-medium text-blue-800 mb-2">Shipping Insurance</h3>
                  <p className="text-blue-800 text-sm">
                    All orders are automatically insured up to ₹5,000 against loss or damage during transit. For orders
                    exceeding this value, additional shipping insurance is available at checkout for a nominal fee.
                  </p>
                </div>
              </div>
            </section>

            <section id="faq">
              <h2 className="text-2xl font-semibold mb-4 pb-2 border-b">Frequently Asked Questions</h2>
              <div className="space-y-6 text-gray-700">
                <div>
                  <h3 className="font-medium mb-2">How long will it take to receive my order?</h3>
                  <p>
                    Delivery timeframes depend on your location and the shipping method selected. Standard domestic
                    shipping typically takes 3-5 business days, while express shipping can deliver within 1-2 business
                    days. International orders generally take 7-21 business days depending on the destination country.
                  </p>
                </div>
                <div>
                  <h3 className="font-medium mb-2">Can I change my shipping address after placing an order?</h3>
                  <p>
                    Address changes can only be accommodated if the order has not yet been processed. Please contact our
                    customer service team immediately if you need to change your shipping address. Once an order has
                    been shipped, we cannot redirect it to a different address.
                  </p>
                </div>
                <div>
                  <h3 className="font-medium mb-2">Do you ship to PO boxes?</h3>
                  <p>
                    Yes, we can ship to PO boxes for standard shipping methods. However, express shipping and oversized
                    items typically require a physical street address for delivery.
                  </p>
                </div>
                <div>
                  <h3 className="font-medium mb-2">What happens if I'm not home when my package arrives?</h3>
                  <p>
                    For most standard deliveries, the carrier will attempt to leave the package in a secure location.
                    For items requiring signature, they will leave a delivery notice with instructions for rescheduling
                    or pickup. After three unsuccessful delivery attempts, the package may be returned to us.
                  </p>
                </div>
                <div>
                  <h3 className="font-medium mb-2">How do I track my international order?</h3>
                  <p>
                    International orders can be tracked the same way as domestic orders—through your account or using
                    the tracking number provided in your shipping confirmation email. Please note that there may be
                    periods during international shipping where tracking information is not updated, particularly during
                    customs processing.
                  </p>
                </div>
              </div>
            </section>
          </div>

          {/* Contact Section */}
          <div className="bg-gray-50 p-6 rounded-lg">
            <div className="flex flex-col md:flex-row items-center justify-between">
              <div className="mb-4 md:mb-0">
                <h3 className="text-lg font-semibold mb-2">Need help with your shipment?</h3>
                <p className="text-gray-600">Our customer service team is ready to assist you.</p>
              </div>
              <div className="flex space-x-4">
                <Button asChild>
                  <Link href="/contact">
                    Contact Us <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button variant="outline" asChild>
                  <Link href="/faq">
                    <HelpCircle className="mr-2 h-4 w-4" /> View FAQs
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
