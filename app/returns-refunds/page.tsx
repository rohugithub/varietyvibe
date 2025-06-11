import type { Metadata } from "next"
import { ArrowRight, ShieldCheck, RefreshCw, Clock, HelpCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Returns & Refunds Policy - ECommerce",
  description: "Learn about our returns and refunds policy, including eligibility, process, and timeframes.",
}

export default function ReturnsRefundsPage() {
  return (
    <div className="bg-white">
      {/* Header Banner */}
      <div className="bg-gray-50 py-12 border-b">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">Returns & Refunds Policy</h1>
            <p className="text-gray-600">
              We want you to be completely satisfied with your purchase. Learn about our hassle-free returns process and
              refund policy.
            </p>
          </div>
        </div>
      </div>

      {/* Quick Links */}
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-wrap justify-center gap-4">
          <Button variant="outline" asChild>
            <a href="#eligibility">Return Eligibility</a>
          </Button>
          <Button variant="outline" asChild>
            <a href="#process">Return Process</a>
          </Button>
          <Button variant="outline" asChild>
            <a href="#refunds">Refund Information</a>
          </Button>
          <Button variant="outline" asChild>
            <a href="#exceptions">Exceptions</a>
          </Button>
          <Button variant="outline" asChild>
            <a href="#faq">FAQs</a>
          </Button>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-8 py-8">
        <div className="max-w-8xl mx-auto">
          {/* Policy Highlights */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <Card>
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-[#b74d803c] rounded-full flex items-center justify-center mx-auto mb-4">
                  <RefreshCw className="h-6 w-6 text-[#b74d80]" />
                </div>
                <h3 className="font-semibold mb-2">30-Day Returns</h3>
                <p className="text-sm text-gray-600">Return most items within 30 days of delivery</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-[#b74d803c] rounded-full flex items-center justify-center mx-auto mb-4">
                  <Clock className="h-6 w-6 text-[#b74d80]" />
                </div>
                <h3 className="font-semibold mb-2">Quick Refunds</h3>
                <p className="text-sm text-gray-600">Refunds processed within 5-7 business days</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-[#b74d803c] rounded-full flex items-center justify-center mx-auto mb-4">
                  <ShieldCheck className="h-6 w-6 text-[#b74d80]" />
                </div>
                <h3 className="font-semibold mb-2">Hassle-Free Process</h3>
                <p className="text-sm text-gray-600">Simple online return initiation process</p>
              </CardContent>
            </Card>
          </div>

          {/* Policy Tabs */}
          <Tabs defaultValue="general" className="mb-12">
            <TabsList className="grid w-full grid-cols-2 md:grid-cols-4">
              <TabsTrigger value="general">General Policy</TabsTrigger>
              <TabsTrigger value="process">Return Process</TabsTrigger>
              <TabsTrigger value="refunds">Refunds</TabsTrigger>
              <TabsTrigger value="exceptions">Exceptions</TabsTrigger>
            </TabsList>
            <TabsContent value="general" className="p-6 border rounded-md mt-6">
              <h2 className="text-xl font-semibold mb-4">General Return Policy</h2>
              <div className="space-y-4 text-gray-700">
                <p>
                  At ECommerce, we stand behind the quality of our products. If you're not completely satisfied with
                  your purchase, we're here to help.
                </p>
                <p>
                  You have 30 calendar days from the date of delivery to return most items purchased from ECommerce. To
                  be eligible for a return, your item must be in the same condition that you received it, unworn or
                  unused, with tags, and in its original packaging.
                </p>
                <p>
                  Different products may have different return eligibility criteria. Please check the product page or
                  product category specific return policy for detailed information.
                </p>
              </div>
            </TabsContent>
            <TabsContent value="process" className="p-6 border rounded-md mt-6">
              <h2 className="text-xl font-semibold mb-4">Return Process</h2>
              <div className="space-y-4 text-gray-700">
                <p>To initiate a return, please follow these simple steps:</p>
                <ol className="list-decimal pl-5 space-y-2">
                  <li>Log in to your ECommerce account and go to "My Orders"</li>
                  <li>Select the order containing the item(s) you wish to return</li>
                  <li>Click on "Return Items" and select the specific products</li>
                  <li>Choose a return reason from the dropdown menu</li>
                  <li>Select your preferred refund method</li>
                  <li>Print the return shipping label (if eligible for free returns)</li>
                  <li>Pack the item(s) securely in the original packaging if possible</li>
                  <li>Attach the return shipping label to the outside of the package</li>
                  <li>Drop off the package at the designated shipping carrier</li>
                </ol>
                <p>
                  Once we receive your return, we'll inspect the item and notify you about the status of your refund. If
                  approved, your refund will be processed according to your selected refund method.
                </p>
              </div>
            </TabsContent>
            <TabsContent value="refunds" className="p-6 border rounded-md mt-6">
              <h2 className="text-xl font-semibold mb-4">Refund Information</h2>
              <div className="space-y-4 text-gray-700">
                <p>
                  Once your return is received and inspected, we will send you an email to notify you that we have
                  received your returned item. We will also notify you of the approval or rejection of your refund.
                </p>
                <p>
                  If approved, your refund will be processed, and a credit will automatically be applied to your
                  original method of payment within 5-7 business days. Please note that depending on your payment
                  provider, it may take additional time for the refund to reflect in your account.
                </p>
                <h3 className="font-medium mt-6 mb-2">Refund Methods:</h3>
                <ul className="list-disc pl-5 space-y-1">
                  <li>
                    <span className="font-medium">Original payment method:</span> Credit/debit card refunds typically
                    take 5-7 business days to process
                  </li>
                  <li>
                    <span className="font-medium">Store credit:</span> Instantly available in your ECommerce account
                  </li>
                  <li>
                    <span className="font-medium">Bank transfer:</span> May take 7-10 business days depending on your
                    bank
                  </li>
                </ul>
                <p className="mt-4">
                  Shipping costs are non-refundable. If you receive a refund, the cost of return shipping will be
                  deducted from your refund unless your return is due to our error or a defective product.
                </p>
              </div>
            </TabsContent>
            <TabsContent value="exceptions" className="p-6 border rounded-md mt-6">
              <h2 className="text-xl font-semibold mb-4">Exceptions & Non-Returnable Items</h2>
              <div className="space-y-4 text-gray-700">
                <p>
                  While we want you to be satisfied with your purchase, certain items cannot be returned due to health,
                  safety, or other reasons:
                </p>
                <ul className="list-disc pl-5 space-y-2">
                  <li>Personal care items and cosmetics (if opened or used)</li>
                  <li>Intimate apparel, swimwear, and undergarments</li>
                  <li>Downloadable software products and digital content</li>
                  <li>Gift cards and e-gift certificates</li>
                  <li>Perishable goods such as food, flowers, or plants</li>
                  <li>Custom-made or personalized items</li>
                  <li>Items marked as "Final Sale" or "Non-Returnable"</li>
                  <li>Products with tampered or missing serial numbers</li>
                </ul>
                <p className="mt-4">
                  Additionally, items that show signs of excessive use, damage caused by misuse, or missing parts may
                  not be eligible for return or may receive only partial refunds.
                </p>
                <p className="mt-4">
                  For certain electronics and appliances, a restocking fee of 15% may apply if the product has been
                  opened or shows signs of use.
                </p>
              </div>
            </TabsContent>
          </Tabs>

          {/* Detailed Policy Sections */}
          <div className="space-y-12 mb-12">
            <section id="eligibility">
              <h2 className="text-2xl font-semibold mb-4 pb-2 border-b">Return Eligibility</h2>
              <div className="space-y-4 text-gray-700">
                <p>To be eligible for a return, please make sure that:</p>
                <ul className="list-disc pl-5 space-y-2">
                  <li>
                    The item was purchased within the last 30 days (or applicable return window for your specific
                    product)
                  </li>
                  <li>The item is in its original condition</li>
                  <li>The item is in the original packaging with all tags attached</li>
                  <li>You have the receipt or proof of purchase</li>
                </ul>
                <h3 className="font-medium mt-6 mb-2">Category-Specific Return Windows:</h3>
                <div className="overflow-x-auto">
                  <table className="min-w-full border-collapse">
                    <thead>
                      <tr className="bg-gray-50">
                        <th className="border p-2 text-left">Product Category</th>
                        <th className="border p-2 text-left">Return Window</th>
                        <th className="border p-2 text-left">Condition Requirements</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="border p-2">Electronics</td>
                        <td className="border p-2">7 days</td>
                        <td className="border p-2">Unopened or defective only</td>
                      </tr>
                      <tr>
                        <td className="border p-2">Clothing & Fashion</td>
                        <td className="border p-2">30 days</td>
                        <td className="border p-2">Unworn with tags attached</td>
                      </tr>
                      <tr>
                        <td className="border p-2">Home Furnishing</td>
                        <td className="border p-2">14 days</td>
                        <td className="border p-2">Unused in original packaging</td>
                      </tr>
                      <tr>
                        <td className="border p-2">Books</td>
                        <td className="border p-2">30 days</td>
                        <td className="border p-2">Unmarked and undamaged</td>
                      </tr>
                      <tr>
                        <td className="border p-2">Gaming Products</td>
                        <td className="border p-2">10 days</td>
                        <td className="border p-2">Unopened or defective only</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </section>

            <section id="process">
              <h2 className="text-2xl font-semibold mb-4 pb-2 border-b">Return Process</h2>
              <div className="space-y-4 text-gray-700">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
                  <div className="text-center">
                    <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <span className="font-bold text-gray-700">1</span>
                    </div>
                    <h3 className="font-medium mb-2">Initiate Return</h3>
                    <p className="text-sm text-gray-600">Log in to your account and select the items to return</p>
                  </div>
                  <div className="text-center">
                    <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <span className="font-bold text-gray-700">2</span>
                    </div>
                    <h3 className="font-medium mb-2">Package Items</h3>
                    <p className="text-sm text-gray-600">Pack items securely with all tags and original packaging</p>
                  </div>
                  <div className="text-center">
                    <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <span className="font-bold text-gray-700">3</span>
                    </div>
                    <h3 className="font-medium mb-2">Ship & Refund</h3>
                    <p className="text-sm text-gray-600">Ship the package and receive your refund after processing</p>
                  </div>
                </div>
                <p>
                  For detailed step-by-step instructions on how to initiate a return through your account, please refer
                  to our Return Process tab above.
                </p>
                <h3 className="font-medium mt-6 mb-2">Return Shipping Options:</h3>
                <ul className="list-disc pl-5 space-y-2">
                  <li>
                    <span className="font-medium">Free Return Shipping:</span> Available for most items. Print the
                    prepaid return label from your account.
                  </li>
                  <li>
                    <span className="font-medium">Drop-off Points:</span> Return your items at any of our partner
                    drop-off locations nationwide.
                  </li>
                  <li>
                    <span className="font-medium">Pickup Service:</span> For large items, schedule a pickup (additional
                    fees may apply).
                  </li>
                </ul>
              </div>
            </section>

            <section id="refunds">
              <h2 className="text-2xl font-semibold mb-4 pb-2 border-b">Refund Information</h2>
              <div className="space-y-4 text-gray-700">
                <p>
                  Once your return is received and inspected, we will process your refund according to the original
                  payment method. The time it takes for the refund to appear in your account depends on your payment
                  provider.
                </p>
                <h3 className="font-medium mt-6 mb-2">Refund Processing Times:</h3>
                <div className="overflow-x-auto">
                  <table className="min-w-full border-collapse">
                    <thead>
                      <tr className="bg-gray-50">
                        <th className="border p-2 text-left">Payment Method</th>
                        <th className="border p-2 text-left">Processing Time</th>
                        <th className="border p-2 text-left">Additional Information</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="border p-2">Credit/Debit Card</td>
                        <td className="border p-2">5-7 business days</td>
                        <td className="border p-2">After return is approved</td>
                      </tr>
                      <tr>
                        <td className="border p-2">Store Credit</td>
                        <td className="border p-2">Immediate</td>
                        <td className="border p-2">Available in your account</td>
                      </tr>
                      <tr>
                        <td className="border p-2">Bank Transfer</td>
                        <td className="border p-2">7-10 business days</td>
                        <td className="border p-2">Depends on your bank</td>
                      </tr>
                      <tr>
                        <td className="border p-2">Digital Wallets</td>
                        <td className="border p-2">3-5 business days</td>
                        <td className="border p-2">PayPal, Google Pay, etc.</td>
                      </tr>
                      <tr>
                        <td className="border p-2">Gift Card</td>
                        <td className="border p-2">Immediate</td>
                        <td className="border p-2">New gift card issued</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <p className="mt-4">
                  Please note that original shipping charges are non-refundable unless the return is due to our error
                  (such as you receiving an incorrect or defective item).
                </p>
                <div className="bg-amber-50 border border-amber-200 rounded-md p-4 mt-6">
                  <h3 className="font-medium text-amber-800 mb-2">Partial Refunds</h3>
                  <p className="text-amber-800 text-sm">
                    We may issue partial refunds in cases where items are returned with signs of use, missing parts, or
                    damaged packaging. Restocking fees may apply for certain categories.
                  </p>
                </div>
              </div>
            </section>

            <section id="exceptions">
              <h2 className="text-2xl font-semibold mb-4 pb-2 border-b">Exceptions & Special Cases</h2>
              <div className="space-y-4 text-gray-700">
                <h3 className="font-medium mb-2">Non-Returnable Items:</h3>
                <ul className="list-disc pl-5 space-y-1">
                  <li>Personal care items and cosmetics (if opened or used)</li>
                  <li>Intimate apparel, swimwear, and undergarments</li>
                  <li>Downloadable software products and digital content</li>
                  <li>Gift cards and e-gift certificates</li>
                  <li>Perishable goods such as food, flowers, or plants</li>
                  <li>Custom-made or personalized items</li>
                  <li>Items marked as "Final Sale" or "Non-Returnable"</li>
                  <li>Products with tampered or missing serial numbers</li>
                </ul>

                <h3 className="font-medium mt-6 mb-2">Damaged or Defective Items:</h3>
                <p>
                  If you receive a damaged or defective item, please contact our Customer Service within 48 hours of
                  delivery. We may request photos of the damage for verification purposes. Depending on availability, we
                  will offer:
                </p>
                <ul className="list-disc pl-5 space-y-1">
                  <li>Replacement of the same item</li>
                  <li>Store credit for the purchase amount</li>
                  <li>Full refund to the original payment method</li>
                </ul>

                <h3 className="font-medium mt-6 mb-2">International Returns:</h3>
                <p>
                  For international orders, the customer is responsible for return shipping costs and any applicable
                  customs duties or taxes. Please contact our International Customer Service team for specific
                  instructions before returning any items.
                </p>

                <div className="bg-red-50 border border-red-200 rounded-md p-4 mt-6">
                  <h3 className="font-medium text-red-800 mb-2">Important Notice</h3>
                  <p className="text-red-800 text-sm">
                    Attempting to return items that do not meet our return policy criteria may result in the return
                    being rejected and the items being sent back to you. Additional shipping charges may apply.
                  </p>
                </div>
              </div>
            </section>

            <section id="faq">
              <h2 className="text-2xl font-semibold mb-4 pb-2 border-b">Frequently Asked Questions</h2>
              <div className="space-y-6 text-gray-700">
                <div>
                  <h3 className="font-medium mb-2">How do I check the status of my return?</h3>
                  <p>
                    You can check the status of your return by logging into your account and navigating to the "My
                    Orders" section. Select the order with the returned item(s) and click on "View Return Status."
                  </p>
                </div>
                <div>
                  <h3 className="font-medium mb-2">What if I received a gift and want to return it?</h3>
                  <p>
                    For gift returns, you'll need the order number and the email address of the person who purchased the
                    gift. If you don't have this information, please contact our Customer Service for assistance. Gift
                    returns are typically issued as store credit.
                  </p>
                </div>
                <div>
                  <h3 className="font-medium mb-2">Can I exchange an item instead of returning it?</h3>
                  <p>
                    We currently don't offer direct exchanges. Instead, you'll need to return the unwanted item for a
                    refund and place a new order for the item you want. If the item you want is available, you can place
                    the new order immediately.
                  </p>
                </div>
                <div>
                  <h3 className="font-medium mb-2">What if my return is rejected?</h3>
                  <p>
                    If your return is rejected, you'll receive an email explaining the reason. Common reasons include
                    items being used, damaged, or returned outside the eligible return window. You can contact our
                    Customer Service team if you believe there's been an error.
                  </p>
                </div>
                <div>
                  <h3 className="font-medium mb-2">Do I need to return all items in my order?</h3>
                  <p>
                    No, you can return individual items from an order. Simply select the specific items you wish to
                    return when initiating the return process in your account.
                  </p>
                </div>
              </div>
            </section>
          </div>

          {/* Contact Section */}
          <div className="bg-gray-50 p-6 rounded-lg">
            <div className="flex flex-col md:flex-row items-center justify-between">
              <div className="mb-4 md:mb-0">
                <h3 className="text-lg font-semibold mb-2">Still have questions?</h3>
                <p className="text-gray-600">Our customer service team is here to help.</p>
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
