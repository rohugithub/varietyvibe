"use client"

import { ResponsiveExample } from "@/components/responsive-example"

export default function ResponsiveGuidePage() {
  return (
    <div className="py-8">
      <div className="container px-4 md:px-6">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h1 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">Responsive Design Guide</h1>
          <p className="mt-4 text-lg text-muted-foreground">
            A comprehensive guide to maintaining responsive design across all screen sizes
          </p>
        </div>
      </div>

      <ResponsiveExample />

      <div className="container px-4 md:px-6 max-w-3xl mx-auto mt-12">
        <div className="space-y-8">
          <section>
            <h2 className="text-2xl font-bold mb-4">Responsive Design Principles</h2>
            <p className="text-muted-foreground mb-4">
              Our e-commerce platform follows these key responsive design principles to ensure a great experience on all
              devices:
            </p>
            <ul className="list-disc pl-5 space-y-2">
              <li>Mobile-first approach - design for smallest screens first</li>
              <li>Fluid layouts that adapt to different screen sizes</li>
              <li>Flexible images and media that scale appropriately</li>
              <li>Appropriate touch targets for mobile users (min 44px)</li>
              <li>Consistent spacing and typography across breakpoints</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">Tailwind CSS Breakpoints</h2>
            <p className="text-muted-foreground mb-4">
              We use Tailwind's default breakpoints for consistent responsive behavior:
            </p>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="bg-muted">
                    <th className="border p-2 text-left">Breakpoint</th>
                    <th className="border p-2 text-left">Prefix</th>
                    <th className="border p-2 text-left">Width</th>
                    <th className="border p-2 text-left">Device Type</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border p-2">Default</td>
                    <td className="border p-2">(none)</td>
                    <td className="border p-2">0px+</td>
                    <td className="border p-2">Small mobile</td>
                  </tr>
                  <tr>
                    <td className="border p-2">Small</td>
                    <td className="border p-2">sm:</td>
                    <td className="border p-2">640px+</td>
                    <td className="border p-2">Mobile</td>
                  </tr>
                  <tr>
                    <td className="border p-2">Medium</td>
                    <td className="border p-2">md:</td>
                    <td className="border p-2">768px+</td>
                    <td className="border p-2">Tablet</td>
                  </tr>
                  <tr>
                    <td className="border p-2">Large</td>
                    <td className="border p-2">lg:</td>
                    <td className="border p-2">1024px+</td>
                    <td className="border p-2">Laptop</td>
                  </tr>
                  <tr>
                    <td className="border p-2">Extra Large</td>
                    <td className="border p-2">xl:</td>
                    <td className="border p-2">1280px+</td>
                    <td className="border p-2">Desktop</td>
                  </tr>
                  <tr>
                    <td className="border p-2">2X Large</td>
                    <td className="border p-2">2xl:</td>
                    <td className="border p-2">1536px+</td>
                    <td className="border p-2">Large desktop</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">Responsive Utilities</h2>
            <p className="text-muted-foreground mb-4">
              We've created several utility components to make responsive development easier:
            </p>
            <ul className="list-disc pl-5 space-y-2">
              <li>
                <code className="bg-muted px-1 py-0.5 rounded">useBreakpoint()</code> - Hook to detect current
                breakpoint
              </li>
              <li>
                <code className="bg-muted px-1 py-0.5 rounded">ResponsiveContainer</code> - Container with responsive
                padding
              </li>
              <li>
                <code className="bg-muted px-1 py-0.5 rounded">ResponsiveGrid</code> - Grid with configurable columns
                per breakpoint
              </li>
              <li>
                <code className="bg-muted px-1 py-0.5 rounded">ResponsiveText</code> - Text with different sizes per
                breakpoint
              </li>
              <li>
                <code className="bg-muted px-1 py-0.5 rounded">ResponsiveShow</code> - Component to show/hide content at
                specific breakpoints
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">Testing Responsiveness</h2>
            <p className="text-muted-foreground mb-4">Always test your changes at these key breakpoints:</p>
            <ul className="list-disc pl-5 space-y-2">
              <li>320px - Small mobile</li>
              <li>375px - Average mobile</li>
              <li>428px - Large mobile</li>
              <li>768px - Tablet</li>
              <li>1024px - Laptop</li>
              <li>1440px - Desktop</li>
            </ul>
            <p className="mt-4 text-muted-foreground">
              Use browser developer tools to test different screen sizes and orientations.
            </p>
          </section>
        </div>
      </div>
    </div>
  )
}
