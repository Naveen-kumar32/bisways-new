'use client'
import { useState, useEffect } from 'react'
import { motion, useAnimation } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

export default function Hero1() {
  const { ref, inView } = useInView({ threshold: 0.3, triggerOnce: false })

  const leftControls = useAnimation()
  const rightControls = useAnimation()

  const [mousePos, setMousePos] = useState({ x: 0, y: 0 })
  const [windowSize, setWindowSize] = useState({ w: 0, h: 0 })

  useEffect(() => {
    const updateSize = () => {
      setWindowSize({ w: window.innerWidth, h: window.innerHeight })
    }
    updateSize()
    window.addEventListener('resize', updateSize)
    return () => window.removeEventListener('resize', updateSize)
  }, [])

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePos({ x: e.clientX, y: e.clientY })
    }
    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  useEffect(() => {
    if (inView) {
      leftControls.start({ x: 0, opacity: 1, rotate: 0, transition: { duration: 1, ease: 'easeOut' } })
      rightControls.start({ x: 0, opacity: 1, rotate: 0, transition: { duration: 1, ease: 'easeOut' } })
    } else {
      leftControls.start({ x: -300, opacity: 0, rotate: -20 })
      rightControls.start({ x: 300, opacity: 0, rotate: 20 })
    }
  }, [inView, leftControls, rightControls])

  const xPercent = (mousePos.x / windowSize.w) * 100
  const yPercent = (mousePos.y / windowSize.h) * 100

  return (
    <div
      ref={ref}
      style={{
        height: 'auto',
        minHeight: '600px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        flexDirection: 'column',
        padding: '40px 20px',
        background: `
          radial-gradient(
            circle at ${xPercent}% ${yPercent}%,
      
             rgba(11, 25, 114, 0.5) 0%,
             rgba(11, 25, 114, 0.4) 10%,
             rgba(11, 25, 114, 0.3) 20%,
              rgba(50, 50, 50, 0.2) 40%,
            rgba(0,0,0,0.85) 80%

          ),
          linear-gradient(135deg, #182fc2ff 0%, #0e23b0ff 50%, #0b1972 100%)
        `,
        transition: 'background 0.05s linear',
        boxShadow: 'inset 0 0 120px rgba(0,0,0,1)',
        borderRadius:"0px 0px 16px 16px"
      }}
    >
      {/* Title */}
      <div
        style={{
          fontSize: '65px',
          fontWeight: '900',
          color: '#e6ac41',
          lineHeight: '1.2',
          marginBottom: '20px',
        }}
      >
        <div>Strategic Consulting.</div>
        <div>Trusted Advisory.</div>
        <div>Seamless Compliance.</div>
      </div>

      {/* Subtitle */}
      <p
        style={{
          fontSize: '20px',
          maxWidth: '800px',
          color: 'rgba(255,255,255,0.85)',
          marginBottom: '30px',
          lineHeight: '1.5',
        }}
      >
        Bisways is your end-to-end business partner — from setting up and scaling your entity,
        to managing finance, compliance, trust governance, and strategic advisory.
      </p>

      {/* Buttons */}
      <div style={{ display: 'flex', gap: '50px', flexWrap: 'wrap', justifyContent: 'center', marginTop: "50px" }}>
        <button
          style={{
            padding: '12px 28px',
            borderRadius: '50px',
            border: '2px solid #ffffff',
            background: 'transparent',
            color: '#ffffff',
            fontSize: '16px',
            cursor: 'pointer',
            transition: 'all 0.3s ease',
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.background = '#ffffff'
            e.currentTarget.style.color = '#000000'
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.background = 'transparent'
            e.currentTarget.style.color = '#ffffff'
          }}
        >
          Get Started
        </button>
        <button
          style={{
            padding: '12px 28px',
            borderRadius: '50px',
            border: '2px solid #ffffff',
            background: 'transparent',
            color: '#ffffff',
            fontSize: '16px',
            cursor: 'pointer',
            transition: 'all 0.3s ease',
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.background = '#ffffff'
            e.currentTarget.style.color = '#000000'
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.background = 'transparent'
            e.currentTarget.style.color = '#ffffff'
          }}
        >
          Learn More
        </button>
      </div>

      {/* Image Section */}
      <motion.img
        src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1600&q=80"
        alt="Business Consulting"
        style={{
          marginTop: '200px',
          maxWidth: '80%',
          borderRadius: '20px',
          boxShadow: '0px 8px 30px rgba(0,0,0,0.5)',
        }}
        initial={{ scale: 0.8, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1, ease: 'easeOut' }}
      />
    </div>
  )
}
