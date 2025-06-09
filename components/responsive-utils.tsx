"use client"

import type React from "react"

import { useState, useEffect } from "react"

// Breakpoint constants for consistent responsive design
export const breakpoints = {
  sm: 640,
  md: 768,
  lg: 1024,
  xl: 1280,
  "2xl": 1536,
}

// Hook to detect current breakpoint
export function useBreakpoint() {
  const [breakpoint, setBreakpoint] = useState<string>("sm")
  const [dimensions, setDimensions] = useState({
    width: 0,
    height: 0,
  })

  useEffect(() => {
    // Function to update dimensions and current breakpoint
    const updateDimensions = () => {
      setDimensions({
        width: window.innerWidth,
        height: window.innerHeight,
      })

      const width = window.innerWidth
      if (width < breakpoints.sm) {
        setBreakpoint("xs")
      } else if (width >= breakpoints.sm && width < breakpoints.md) {
        setBreakpoint("sm")
      } else if (width >= breakpoints.md && width < breakpoints.lg) {
        setBreakpoint("md")
      } else if (width >= breakpoints.lg && width < breakpoints.xl) {
        setBreakpoint("lg")
      } else if (width >= breakpoints.xl && width < breakpoints["2xl"]) {
        setBreakpoint("xl")
      } else {
        setBreakpoint("2xl")
      }
    }

    // Set initial dimensions
    if (typeof window !== "undefined") {
      updateDimensions()
      window.addEventListener("resize", updateDimensions)
    }

    // Clean up event listener
    return () => {
      if (typeof window !== "undefined") {
        window.removeEventListener("resize", updateDimensions)
      }
    }
  }, [])

  return {
    breakpoint,
    width: dimensions.width,
    height: dimensions.height,
    isMobile: breakpoint === "xs" || breakpoint === "sm",
    isTablet: breakpoint === "md",
    isDesktop: breakpoint === "lg" || breakpoint === "xl" || breakpoint === "2xl",
  }
}

// Responsive container component
export function ResponsiveContainer({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return <div className={`container px-4 md:px-6 lg:px-8 mx-auto ${className}`}>{children}</div>
}

// Responsive grid component with configurable columns
export function ResponsiveGrid({
  children,
  cols = { default: 1, sm: 2, md: 3, lg: 4 },
  gap = "gap-6",
  className = "",
}: {
  children: React.ReactNode
  cols?: { default: number; sm?: number; md?: number; lg?: number; xl?: number }
  gap?: string
  className?: string
}) {
  // Build grid classes based on provided column configuration
  const gridCols = [
    `grid-cols-${cols.default}`,
    cols.sm && `sm:grid-cols-${cols.sm}`,
    cols.md && `md:grid-cols-${cols.md}`,
    cols.lg && `lg:grid-cols-${cols.lg}`,
    cols.xl && `xl:grid-cols-${cols.xl}`,
  ]
    .filter(Boolean)
    .join(" ")

  return <div className={`grid ${gridCols} ${gap} ${className}`}>{children}</div>
}

// Responsive text component
export function ResponsiveText({
  children,
  sizes = { default: "text-base", sm: "sm:text-lg", md: "md:text-xl", lg: "lg:text-2xl" },
  className = "",
}: {
  children: React.ReactNode
  sizes?: { default: string; sm?: string; md?: string; lg?: string; xl?: string }
  className?: string
}) {
  // Build text classes based on provided size configuration
  const textSizes = [sizes.default, sizes.sm, sizes.md, sizes.lg, sizes.xl].filter(Boolean).join(" ")

  return <div className={`${textSizes} ${className}`}>{children}</div>
}

// Responsive visibility component
export function ResponsiveShow({
  children,
  showOn = [],
  className = "",
}: {
  children: React.ReactNode
  showOn: ("xs" | "sm" | "md" | "lg" | "xl" | "2xl")[]
  className?: string
}) {
  const visibilityClasses = []

  if (showOn.includes("xs")) {
    visibilityClasses.push("flex")
  } else {
    visibilityClasses.push("hidden")
  }

  if (showOn.includes("sm")) {
    visibilityClasses.push("sm:flex")
  } else if (!showOn.includes("xs")) {
    visibilityClasses.push("sm:hidden")
  }

  if (showOn.includes("md")) {
    visibilityClasses.push("md:flex")
  } else if (!showOn.includes("sm")) {
    visibilityClasses.push("md:hidden")
  }

  if (showOn.includes("lg")) {
    visibilityClasses.push("lg:flex")
  } else if (!showOn.includes("md")) {
    visibilityClasses.push("lg:hidden")
  }

  if (showOn.includes("xl")) {
    visibilityClasses.push("xl:flex")
  } else if (!showOn.includes("lg")) {
    visibilityClasses.push("xl:hidden")
  }

  if (showOn.includes("2xl")) {
    visibilityClasses.push("2xl:flex")
  } else if (!showOn.includes("xl")) {
    visibilityClasses.push("2xl:hidden")
  }

  return <div className={`${visibilityClasses.join(" ")} ${className}`}>{children}</div>
}
