'use client';
import Image from 'next/image';
import Link from 'next/link';
import { useInView } from 'react-intersection-observer';
import { motion } from "framer-motion";
import { useState, useRef, useEffect } from 'react'

export default function Section1() {
  const { ref: sectionRef, inView } = useInView({
    triggerOnce: false, // 👈 animate every time in view
    threshold: 0.2
  });
  const syncTransition = { duration: 0.3, ease: 'easeInOut' }

  const circleVariants = {
    rest: { x: 0, transition: syncTransition },
    hover: { x: 7, transition: syncTransition },
  }

  const arrowVariants = {
    // NOTE: negative rotation -> up-right (↗)
    rest: { rotate: -45, transition: syncTransition },
    hover: { rotate: 0, transition: syncTransition }, // to right (→)
  }
  const circleContainerRef = useRef(null)
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Trigger reflow to restart CSS animation
            const element = entry.target  // removed "as HTMLElement"
            element.style.animation = 'none'
            // Force reflow
            void element.offsetWidth
            element.style.animation = ''
          }
        })
      },
      { threshold: 0.5 } // Trigger when 50% visible
    )

    if (circleContainerRef.current) {
      observer.observe(circleContainerRef.current)
    }

    return () => {
      if (circleContainerRef.current) {
        observer.unobserve(circleContainerRef.current)
      }
    }
  }, [])

  return (
    <section ref={sectionRef} className="s-about-company-2 tf-spacing-3">
      <div className="tf-container">
        <div className="row">
          <div className="col-lg-9">
            <div className="wrap">
              <div>
                {/* Heading Animation */}
                <motion.p
                  className="s-sub-title mb-15"
                  initial={{ x: 100, y: 50, opacity: 0 }}
                  animate={inView ? { x: 0, y: 0, opacity: 1 } : { x: 100, y: 50, opacity: 0 }}
                  transition={{ duration: 0.8, ease: "easeOut" }}
                  style={{ color: "#0b1972" }}
                >

                  <i className="icon-angles-right moveLeftToRight" style={{ color: "#0b1972" }} />
                  WHO WE ARE

                </motion.p>

                <p className="s-title text-main-green-3 mb-70 text-anime-wave">
                  A Consulting Partner <br />
                  You Can <span style={{ color: "#e6ac41" }}>Trust</span>
                </p>

                {/* Left Image */}
                <div className="image-1 tf-hover">
                  <div className="hover-1">
                    <Image
                      width="0"
                      height="0"
                      sizes="100vw"
                      style={{ width: "100%", height: "auto" }}
                      src="/images/section/consulting-small.svg"
                      alt=""
                      className={`lazyload ${inView ? 'tf-animate-1' : ''}`}
                    // 👆 add animation class only when in view
                    />
                  </div>
                </div>
              </div>

              {/* Right Image */}
              <div className="image-right tf-hover">
                <div className="image-2 hover-1">
                  <Image
                    width="0"
                    height="0"
                    sizes="100vw"
                    style={{ width: "100%", height: "auto", minWidth: "626.6px", minHeight: "418.22px" }}
                    src="/images/section/consulting.svg"
                    alt=""
                    className={`lazyload ${inView ? 'tf-animate-2' : ''}`}
                  // 👆 same logic for second image
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Right Side Content */}
          <div className="col-lg-3">
            <div className="content">
              <div
                ref={circleContainerRef}
                className="wg-curve-text style-2 tf-animate__box animate__slow"
                style={{backgroundColor:"white"}}
              >
                <div className="icon">
                  <Image
                    src="/images/section/background.svg"
                    alt="Background Decorative Icon"
                    width={80}
                    height={80}
                    style={{
                      objectFit: "contain",
                      filter: "drop-shadow(0 0 10px rgba(255,255,255,0.2))",
                    }}
                  />
                </div>
                <div className="text-rotate">
                  <div className="circle" style={{ color: "#0b1972" }}>
                    <div id="circularText" className="text" style={{ color: "#0b1972" }} />
                  </div>
                </div>
              </div>
              <p className="text mb-40">
                At Bisways, we bring clarity to complexity.
                We’re a multi-disciplinary consulting firm
                offering Virtual CFO, compliance, audit,
                taxation, NGO, and digital advisory —
                helping clients grow with confidence.


              </p>
              <Link href="/our-service">


                <div
                  style={{
                    display: 'flex',
                    gap: '36px', // gap between button+circle pairs
                    flexWrap: 'wrap',
                    justifyContent: 'center',
                    marginTop: '50px',
                  }}
                >
                  {['Learn More About Us'].map((label, idx) => (
                    // parent group: hovering either button or circle triggers variants
                    <motion.div
                      key={idx}
                      initial="rest"
                      whileHover="hover"
                      animate="rest"
                      style={{ display: 'flex', alignItems: 'center', cursor: 'pointer' }}
                    >
                      {/* Button (fixed, doesn't move) */}
                      <button
                        style={{
                          padding: '16px 36px',
                          borderRadius: '50px',
                          // border: '2px solid #ffffff',
                          background: '#e6ac41',
                          color: '#ffffff',
                          fontSize: '17px',
                          fontWeight: '600',
                          cursor: 'pointer',
                          // ensure no gap: right margin zero
                          marginRight: 0,
                        }}
                      >
                        {label}
                      </button>

                      {/* Circle (separate element touching edge) */}
                      <motion.div
                        variants={circleVariants}
                        transition={syncTransition}
                        style={{
                          width: '50px',
                          height: '50px',
                          borderRadius: '50%',
                          // border: '2px solid #ffffff',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          // edges touch: no margin between elements
                          marginLeft: 0,
                          background: '#e6ac41',
                          // keep pointer events so hovering circle also triggers parent hover
                          pointerEvents: 'auto',
                        }}
                      >
                        {/* Right-pointing arrow base; rotate from center */}
                        <motion.svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="22"
                          height="22"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="white"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          variants={arrowVariants}
                          style={{
                            transformOrigin: '50% 50%',
                            transformBox: 'fill-box', // make transform-origin work reliably for SVG
                          }}
                        >
                          {/* horizontal shaft */}
                          <line x1="5" y1="12" x2="19" y2="12" />
                          {/* arrow head pointing right */}
                          <polyline points="12 5 19 12 12 19" />
                        </motion.svg>
                      </motion.div>
                    </motion.div>
                  ))}
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
