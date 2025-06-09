"use client"

import type React from "react"

import { useState, useRef } from "react"
import Image from "next/image"
import { useMobile } from "@/hooks/use-mobile"

interface ImageMagnifierProps {
  src: string
  alt: string
  width?: number
  height?: number
  magnifierSize?: number
  zoomLevel?: number
}

export function ImageMagnifier({
  src,
  alt,
  width = 500,
  height = 500,
  magnifierSize = 150,
  zoomLevel = 2.5,
}: ImageMagnifierProps) {
  const [position, setPosition] = useState({ x: 0, y: 0 })
  const [showMagnifier, setShowMagnifier] = useState(false)
  const [touchStarted, setTouchStarted] = useState(false)
  const imgRef = useRef<HTMLDivElement>(null)
  const isMobile = useMobile()

  // Calculate magnifier position and background position based on mouse/touch coordinates
  const updateMagnifier = (clientX: number, clientY: number) => {
    if (imgRef.current) {
      const { left, top, width, height } = imgRef.current.getBoundingClientRect()

      // Calculate position relative to image
      const x = clientX - left
      const y = clientY - top

      // Ensure position is within image bounds
      if (x >= 0 && x <= width && y >= 0 && y <= height) {
        // Calculate relative position (0 to 1)
        const relativeX = x / width
        const relativeY = y / height

        setPosition({
          x: relativeX * width,
          y: relativeY * height,
        })

        if (!showMagnifier) {
          setShowMagnifier(true)
        }
      } else {
        setShowMagnifier(false)
      }
    }
  }

  // Handle mouse movement
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    updateMagnifier(e.clientX, e.clientY)
  }

  // Handle touch movement
  const handleTouchMove = (e: React.TouchEvent<HTMLDivElement>) => {
    if (touchStarted && e.touches[0]) {
      updateMagnifier(e.touches[0].clientX, e.touches[0].clientY)
      e.preventDefault() // Prevent scrolling while moving
    }
  }

  // Handle touch start
  const handleTouchStart = () => {
    setTouchStarted(true)
  }

  // Handle touch end
  const handleTouchEnd = () => {
    setTouchStarted(false)
    setShowMagnifier(false)
  }

  // Calculate magnifier styles
  const magnifierStyle = {
    display: showMagnifier ? "block" : "none",
    position: "absolute" as const,
    top: `${position.y - magnifierSize / 2}px`,
    left: `${position.x - magnifierSize / 2}px`,
    width: `${magnifierSize}px`,
    height: `${magnifierSize}px`,
    backgroundImage: `url(${src})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: `${width * zoomLevel}px ${height * zoomLevel}px`,
    backgroundPosition: `
      ${-position.x * zoomLevel + magnifierSize / 2}px 
      ${-position.y * zoomLevel + magnifierSize / 2}px
    `,
    border: "2px solid #ffffff",
    borderRadius: "50%",
    boxShadow: "0 3px 10px rgba(0, 0, 0, 0.2)",
    pointerEvents: "none" as const,
    zIndex: 100,
  }

  return (
    <div className="relative">
      <div
        ref={imgRef}
        className="relative cursor-crosshair overflow-hidden rounded-lg border"
        style={{ width: `${width}px`, height: `${height}px` }}
        onMouseMove={!isMobile ? handleMouseMove : undefined}
        onMouseEnter={() => !isMobile && setShowMagnifier(true)}
        onMouseLeave={() => !isMobile && setShowMagnifier(false)}
        onTouchStart={isMobile ? handleTouchStart : undefined}
        onTouchMove={isMobile ? handleTouchMove : undefined}
        onTouchEnd={isMobile ? handleTouchEnd : undefined}
      >
        <Image src={src || "/placeholder.svg"} alt={alt} fill className="object-cover" sizes={`${width}px`} priority />
      </div>
      {!isMobile && <div style={magnifierStyle} />}

      {/* Mobile zoom instructions */}
      {isMobile && <div className="mt-2 text-center text-sm text-muted-foreground">Touch and hold to zoom</div>}
    </div>
  )
}
