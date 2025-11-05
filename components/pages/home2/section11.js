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
  const circleVariants = {
    hidden: { opacity: 0, scale: 0.6, rotate: -30, x: 80 },
    visible: custom => ({
      opacity: 1,
      scale: [0.9, 1.03, 1],
      rotate: [-10, 6, 0],
      x: 0,
      transition: {
        delay: custom,                       // custom delay per circle
        duration: 1.1,
        ease: [0.22, 1, 0.36, 1],            // smooth 'springy' feel
      }
    })
  }


  return (
    <section ref={ref} className="s-about-company tf-spacing-2 relative z-5">
      <div className="tf-container">
        <div className="row">
          <div className="col-lg-6">
            <div className="content-section">

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

              <motion.p
                className="s-title mb-20 text-anime-wave-right text-clamp-4"
                variants={titleFromLeftVariants}
                initial="hidden"
                animate={controls}
                style={{ color: "#0b1972", paddingBottom: "5px" }}
              >
                Empowering Businesses to Build a<span style={{ color: "#e6ac41" }}> Brighter Future</span>
              </motion.p>

              <p className="text mb-30">
                We partner with entrepreneurs and organizations to deliver
                strategic consulting, financial clarity, and long-term success.
              </p>

              <ul className="list mb-50">
                <li>
                  <p className="font-main-2" style={{ color: "#0b1972" }}>Our Mission</p>
                  <p className="text">
                    To empower businesses through strategic financial and
                    regulatory consulting that drives measurable growth.
                  </p>
                </li>
                <li>
                  <p className="font-main-2" style={{ color: "#0b1972" }}>Our Vision</p>
                  <p className="text">
                    To be a trusted consulting partner enabling financial clarity,
                    operational excellence, and sustainable successe.
                  </p>
                </li>
              </ul>

              <Link href="/about-us" className="tf-btn">
                Learn More About Us <i className="icon-chevron-right" />
              </Link>
            </div>
          </div>

          <div className="col-lg-5 offset-lg-1">
            <div className="image-wrap">
              <div className="image">
                <Image
                  width="0"
                  height="0"
                  sizes="100vw"
                  style={{ width: "100%", height: "auto" }}
                  src="/images/section/hero-1.svg" data-src="/images/section/hero-1.svg" alt="" className="lazyload tf-animate-2" />
              </div>
              <span
                key={inView ? "anim1" : "noanim1"}
                className="half-circle item-1 rollInRight"
              />
              <span
                key={inView ? "anim2" : "noanim2"}
                className="half-circle item-2 rollInRight" data-wow-delay="0.5s"
              />
            </div>
          </div>
        </div>
      </div>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <div className="tf-marquee slider-saylo style-2" style={{ marginTop: "2px" }}>
        <div className="wrap-marquee">
          {[...Array(10)].map((_, i) => (
            <div className="marquee-item" key={i}>
              <p className="font-main-2 text">Bisways Consulting Group</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
