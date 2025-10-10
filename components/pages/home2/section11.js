'use client'
import { motion, useAnimation } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { useEffect } from "react"
import Image from 'next/image'
import Link from 'next/link'

export default function Section11() {
  const controls = useAnimation()
  const [ref, inView] = useInView({
    triggerOnce: false, // replay every time you visit/scroll in
    threshold: 0.3,
  })

  useEffect(() => {
    if (inView) controls.start("visible")
    else controls.start("hidden")
  }, [inView, controls])

  const subtitleVariants = {
    hidden: { opacity: 0, x: 80, y: 80 }, // starts bottom-right
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      transition: { duration: 2.0, ease: [0.25, 1, 0.5, 1] },
    },
  }

  const titleFromLeftVariants = {
    hidden: { opacity: 0, x: -140 }, // starts left
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 2.0, ease: [0.25, 1, 0.5, 1], delay: 0.06 },
    },
  }

  return (
    <section ref={ref} className="s-about-company tf-spacing-2 relative z-5">
      <div className="tf-container">
        <div className="row">
          {/* LEFT CONTENT */}
          <div className="col-lg-6">
            <div className="content-section">

              {/* ABOUT COMPANY SUBTITLE - slides from bottom-right */}
              <motion.p
                className="s-sub-title"
                style={{ color: "#0b1972" }}
                variants={subtitleVariants}
                initial="hidden"
                animate={controls}
              >
                <i className="icon-angles-right moveLeftToRight" style={{ color: "#0b1972" }} />
                about company
              </motion.p>

              {/* MAIN TITLE - slides in from LEFT */}
              <motion.p
                className="s-title mb-20 text-anime-wave-right text-clamp-4"
                variants={titleFromLeftVariants}
                initial="hidden"
                animate={controls}
                style={{ color: "#0b1972" }}
              >
                We Work For Building a Brighter Future Together
                and <span style={{ color: "#e6ac41" }}>Grow Business</span>
              </motion.p>

              {/* The intro paragraph remains static (no animation) */}
              <p className="text mb-30">
                We provide expert consulting services designed to help businesses
                thrive in today’s dynamic marketplace with an experienced team.
              </p>

              {/* THE TWO LIST POINTS (STATIC) */}
              <ul className="list mb-50">
                <li>
                  <p className="font-main-2" style={{ color: "#0b1972" }}>Company Mission</p>
                  <p className="text">
                    We provide expert consulting services designed help businesses
                    thrive in today’s dynamic marketplace team experienced
                  </p>
                </li>
                <li>
                  <p className="font-main-2" style={{ color: "#0b1972" }}>Company Vision</p>
                  <p className="text">
                    To be the trusted partner that empowers businesses worldwide to
                    unlock their full potential, driving sustainable growth
                  </p>
                </li>
              </ul>

              <Link href="/about-us" className="tf-btn">
                Learn More Us <i className="icon-chevron-right" />
              </Link>
            </div>
          </div>

          {/* RIGHT IMAGE (STATIC) */}
          <div className="col-lg-5 offset-lg-1">
            <div className="image-wrap">
              <div className="image">
                <Image
                  width="0"
                  height="0"
                  sizes="100vw"
                  style={{ width: "100%", height: "auto", borderRadius: "12px" }}
                  src="/images/section/home-1.jpg"
                  alt="About Saylo Consulting"
                  className="lazyload tf-animate-2"
                />
              </div>
              <span className="half-circle item-1" />
              <span className="half-circle item-2" />
            </div>
          </div>
        </div>
      </div>

      {/* MARQUEE SECTION */}
      <div className="tf-marquee slider-saylo style-2">
        <div className="wrap-marquee">
          {[...Array(10)].map((_, i) => (
            <div className="marquee-item" key={i}>
              <p className="font-main-2 text">Bisways Consulting</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
