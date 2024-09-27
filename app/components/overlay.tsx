'use client'
import React, { useState, useEffect } from 'react'
import LineSVG from './signature' // Adjust the import path according to your folder structure
import '../styles.css' // Import the CSS file for styles

const LoadingOverlay = () => {
  const [loading, setLoading] = useState(true)
  const [fadeOut, setFadeOut] = useState(false) // New state for fade-out effect

  useEffect(() => {
    // Simulate loading for 3 seconds (replace this with your actual loading logic)
    const timer = setTimeout(() => {
      setFadeOut(true) // Trigger fade-out
      setTimeout(() => setLoading(false), 500) // Hide the overlay after fade-out
    }, 3000)

    return () => clearTimeout(timer) // Cleanup on component unmount
  }, [])

  if (!loading) {
    return null // Don't show the overlay after loading
  }

  return (
    <div
      className={`fixed inset-0 flex items-center justify-center bg-gray-800 z-50 transition-opacity duration-500 ${
        fadeOut ? 'opacity-0' : 'opacity-100'
      }`}
    >
      <div className='text-white text-3xl font-bold '>
        {/* Your signature or custom content */}
        <LineSVG width='300' height='100'></LineSVG>
      </div>
    </div>
  )
}

export default LoadingOverlay
