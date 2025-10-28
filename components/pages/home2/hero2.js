'use client'
import Image from 'next/image'
import Link from 'next/link'
import { useState, useRef, useEffect } from 'react'
import ModalVideo from 'react-modal-video'
import { TypeAnimation } from "react-type-animation"

export default function Hero2() {
  const [isOpen, setOpen] = useState(false)
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
    <>
      <div className="page-title-home-1" style={{ backgroundColor: "#0b1972" }}>
        <div className="mb-50">
          <div className="tf-container w-1780">
            <div className="row">
              <div className="col-lg-6" >
                <div className="content" >
                  <p className="s-sub-title text-white ">
                    <i className="icon-angles-right moveLeftToRight" />
                    consulting agency
                  </p>
                  <p className="s-title text-white-yellow mb-40 text-fs-70">
                    Empowering Business
                    Through <br />
                    <span className="animationtext clip">
                      <TypeAnimation
                        sequence={[
                          'Finance',
                          1000,
                          'Compliance',
                          1000,
                          'Audit',
                          1000,
                        ]}
                        wrapper="span"
                        speed={50}
                        style={{ display: 'inline-block', marginLeft: "15px" }}
                        repeat={Infinity}
                        className="cd-words-wrapper ms-3"
                      />
                    </span>
                  </p>
                  <span className="line mb-40" />
                  <p className="text font-main-2 fw-5 mb-40">
                    From Virtual CFO to Complete Business
                    Setup & Advisory — we’re your growth
                    partner at every step.
                  </p>
                  <div className="bot">
                    <Link href="/our-service" className="tf-btn">
                      Explore Services
                      <i className="icon-chevron-right" />
                    </Link>
                  </div>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="image-wrap">
                  <div className="image">
                    <Image
                      width={0}
                      height={0}
                      sizes="100vw"
                      style={{ width: "100%", height: "789.6px" }}
                      src="/images/section/hero.svg"
                      data-src="/images/section/page-title-home-1.jpg"
                      alt=""
                      className="lazyload"
                    />
                  </div>
                  <div
                    ref={circleContainerRef}
                    className="wg-curve-text tf-animate__box animate__slow"
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
                      <div className="circle">
                        <div id="circularText" className="text" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <ModalVideo
        channel='youtube'
        autoplay
        isOpen={isOpen}
        videoId="JXMWOmuR1hU"
        onClose={() => setOpen(false)}
      />
    </>
  )
}
