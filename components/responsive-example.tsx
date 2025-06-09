"use client"

import { useState } from "react"
import { useBreakpoint, ResponsiveContainer, ResponsiveGrid, ResponsiveText } from "@/components/responsive-utils"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export function ResponsiveExample() {
  const { breakpoint, isMobile, isTablet, isDesktop } = useBreakpoint()
  const [activeTab, setActiveTab] = useState("grid")

  return (
    <ResponsiveContainer className="py-8">
      <div className="space-y-8">
        <div className="text-center space-y-4">
          <ResponsiveText sizes={{ default: "text-2xl", md: "md:text-3xl", lg: "lg:text-4xl" }} className="font-bold">
            Responsive Design Examples
          </ResponsiveText>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Current breakpoint: <span className="font-semibold text-primary">{breakpoint}</span> (
            {isMobile ? "Mobile" : isTablet ? "Tablet" : "Desktop"})
          </p>
        </div>

        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="grid">Responsive Grid</TabsTrigger>
            <TabsTrigger value="layout">Responsive Layout</TabsTrigger>
            <TabsTrigger value="components">Responsive Components</TabsTrigger>
          </TabsList>

          <TabsContent value="grid" className="mt-6">
            <Card>
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold mb-4">Responsive Grid Example</h3>
                <ResponsiveGrid cols={{ default: 1, sm: 2, md: 3, lg: 4 }} gap="gap-4">
                  {[...Array(8)].map((_, i) => (
                    <div key={i} className="bg-muted p-4 rounded-md text-center">
                      Item {i + 1}
                    </div>
                  ))}
                </ResponsiveGrid>
                <div className="mt-4 text-sm text-muted-foreground">
                  <p>
                    This grid automatically adjusts columns based on screen size:
                    <br />
                    Mobile: 1 column | Tablet: 2-3 columns | Desktop: 4 columns
                  </p>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="layout" className="mt-6">
            <Card>
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold mb-4">Responsive Layout Example</h3>
                <div className="flex flex-col lg:flex-row gap-4">
                  <div className="lg:w-1/3 bg-muted p-4 rounded-md">
                    <h4 className="font-medium mb-2">Sidebar</h4>
                    <p className="text-sm text-muted-foreground">
                      This sidebar stacks on mobile and appears on the left on desktop.
                    </p>
                  </div>
                  <div className="lg:w-2/3 bg-muted p-4 rounded-md">
                    <h4 className="font-medium mb-2">Main Content</h4>
                    <p className="text-sm text-muted-foreground">
                      The main content area takes full width on mobile and 2/3 width on desktop.
                    </p>
                  </div>
                </div>
                <div className="mt-4 text-sm text-muted-foreground">
                  <p>
                    This layout uses flex-col on mobile and flex-row on desktop (lg:flex-row).
                    <br />
                    Elements stack vertically on mobile and align horizontally on desktop.
                  </p>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="components" className="mt-6">
            <Card>
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold mb-4">Responsive Components Example</h3>
                <div className="space-y-4">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 p-4 bg-muted rounded-md">
                    <div>
                      <h4 className="font-medium">Product Title</h4>
                      <p className="text-sm text-muted-foreground">Product description goes here</p>
                    </div>
                    <div className="flex flex-col sm:flex-row gap-2">
                      <Button size="sm" variant="outline">
                        Details
                      </Button>
                      <Button size="sm">Add to Cart</Button>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    {["xs only", "sm+ only", "md+ only", "lg+ only"].map((text, i) => (
                      <div key={i} className="p-4 bg-muted rounded-md text-center">
                        <div
                          className={`${i === 0 ? "block sm:hidden" : "hidden"} ${i === 1 ? "sm:block md:hidden" : ""} ${i === 2 ? "md:block lg:hidden" : ""} ${i === 3 ? "lg:block" : ""}`}
                        >
                          {text}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="mt-4 text-sm text-muted-foreground">
                  <p>
                    These components adapt their layout based on screen size.
                    <br />
                    The visibility examples show content only at specific breakpoints.
                  </p>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>

        <div className="bg-muted p-6 rounded-lg">
          <h3 className="text-lg font-semibold mb-4">Responsive Design Best Practices</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <span className="font-medium">Mobile-First Approach:</span> Always design for mobile first, then enhance
              for larger screens
            </li>
            <li>
              <span className="font-medium">Tailwind Breakpoints:</span> Use sm:, md:, lg:, xl: prefixes consistently
            </li>
            <li>
              <span className="font-medium">Flexible Grids:</span> Use grid-cols-* with responsive variants
            </li>
            <li>
              <span className="font-medium">Flexible Images:</span> Always use relative sizing for images (%, rem, em)
            </li>
            <li>
              <span className="font-medium">Test All Breakpoints:</span> Regularly test your UI at all screen sizes
            </li>
          </ul>
        </div>
      </div>
    </ResponsiveContainer>
  )
}
