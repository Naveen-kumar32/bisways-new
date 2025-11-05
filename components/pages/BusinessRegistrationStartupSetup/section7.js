"use client"

import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"

export default function Section7() {
  const { ref, inView } = useInView({
    triggerOnce: false, // 👈 replay every scroll
    threshold: 0.2,
  })

  // Left slide
  const slideLeft = {
    hidden: { opacity: 0, x: -80 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: "easeOut" } },
  }

  // Bottom slide
  const slideUp = {
    hidden: { opacity: 0, y: 60 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  }

  const features = [
    {
      img: "/images/section/business-icon-1.svg",
      title: "Choosing Business Structure",
      text: "We advise you on the most suitable business structure, whether you're starting as a sole proprietorship, forming a Limited Liability Partnership (LLP), or establishing a Private Limited Company (Pvt Ltd) based on your goals.",
    },
    {
      img: "/images/section/business-icon-2.svg",
      title: "Tax & Legal Registration",
      text: "We handle all registrations, including PAN, TAN, GST, MSME, and DSC, ensuring full compliance with government regulations and tax laws for your business.",
    },
    {
      img: "/images/section/business-icon-3.svg",
      title: "Legal Document Filing",
      text: "We prepare and file the Memorandum of Association (MOA) and Articles of Association (AOA), key documents for the legal incorporation of your company.",
    },
    {
      img: "/images/section/business-icon-4.svg",
      title: "Professional Advisory",
      text: "We provide expert guidance on choosing the right business structure, managing your compliance, and ensuring that your business is fully equipped for growth and long-term success.",
    },
  ]

  return (
    <section className="s-we-do tf-spacing-3" ref={ref} >
      {/* NOTE: this container tweak is scoped to this section only */}
      <div className="tf-container section-fullwidth">
        <div className="row">
          <div className="col-lg-12">
            <div className="heading mb-70" style={{ textAlign: "center" }}>
              {/* Subtitle */}
              <motion.p
                className="s-sub-title mb-15 justify-center"
                style={{ color: "#0b1972", display: "flex", alignItems: "center", gap: "6px", justifyContent: "center" }}
                initial="hidden"
                animate={inView ? "visible" : "hidden"}
                variants={slideLeft}
              >
                <i className="icon-angles-right moveLeftToRight" style={{ color: "#0b1972" }} />
                what we do
              </motion.p>

              {/* Main Title */}
              <motion.p
                className="s-title text-center text-anime-style-2"
                style={{ color: "#0b1972", margin: 0 }}
                initial="hidden"
                animate={inView ? "visible" : "hidden"}
                variants={slideLeft}
                transition={{ delay: 0.2 }}
              >
                Empowering Your Business with<br />
                <span style={{ color: "#e6ac41" }}>Professional Setup</span>
              </motion.p>
            </div>

            <p style={{ justifyContent: "center", alignItems: "center", display: "flex", color: "#0b1972", fontSize: 23, width: "100%", padding: "0 40px", marginBottom: 32,textAlign:"center" }}>
              We provide a comprehensive service for business registration and legal setup, ensuring you start your business on the right foot. Here’s what we do for you:
            </p>

            {/* Feature Boxes */}
            <div className="feature-group overflow-hidden">
              {features.map((item, i) => (
                <motion.div
                  key={i}
                  className="box-icon style-8 full-card"
                  initial="hidden"
                  animate={inView ? "visible" : "hidden"}
                  variants={slideUp}
                  transition={{ delay: 0.4 + i * 0.12 }}
                >
                  <div className="icon" style={{ display: "flex", justifyContent: "center", paddingTop: 18 }}>
                    <Image
                      src={item.img}
                      alt={item.title}
                      width={88}
                      height={88}
                      style={{ objectFit: "contain" }}
                    />
                  </div>

                  <div style={{  height:"150px" }}>
                   <p href="/service-details" className="title" style={{ color: "#0b1972", height: "50px",fontSize:"22px", fontWeight:"600",fontStyle:"bold"  }}>
										{item.title}
									</p>
                  </div>

                  <span className="line mb-12" />

                  <p className="text card-text-box" style={{minHeight:"330px",width:"200px",textAlign:"center"}}>
                    {item.text}
                  </p>

                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        /**
         * SECTION-SCOPED LAYOUT FIXES
         * - keep changes scoped to this section only
         */

        /* Make the container wider for this section (overrides any outer container padding) */
        .s-we-do .section-fullwidth {
          max-width: 100%; /* expand the usable width for this section */
          padding-left: 12px;
          padding-right: 12px;
          // margin-left: auto;
          // margin-right: auto;
        }

        /* Feature grid: equal columns and full-width usage */
        .s-we-do .feature-group {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 10px;
          align-items: stretch;
          width: 100%;
          margin-top: 8px;
        }

        /* Card - full height column so text boxes align */
        .s-we-do .full-card {
          display: flex;
          flex-direction: column;
          justify-content: flex-start;
          background: transparent;
          border-radius: 12px;
          height: 100%;
          width: 100%;
          box-sizing: border-box;
        }

        .s-we-do .card-text-box {
          flex: 1 1 auto;
          min-height: 180px; /* increase if text still overflows */
          width: 100%;
          display: flex;
        //   align-items: center;
          justify-content: center;
          text-align: left;
          padding: 20px;
          border-radius: 16px;
          background: #e6ac41;
          color: #0b1972;
          line-height: 1.45;
          box-sizing: border-box;
        }

        /* Title spacing */
        .s-we-do .box-icon .title {
          display: block;
          font-size: 18px;
          color: #0b1972;
        }

        /* smaller gap under title line */
        .s-we-do .line {
          display: block;
          height: 2px;
          width: 48px;
          background: transparent;
          margin: 8px auto 0;
        }

        /* Responsive: 2 columns on medium screens, 1 column on small screens */
        @media (max-width: 1100px) {
          .s-we-do .feature-group {
            grid-template-columns: repeat(2, 1fr);
            gap: 20px;
          }

          .s-we-do .section-fullwidth {
            max-width: 1000px;
            padding-left: 12px;
            padding-right: 12px;
          }
        }

        @media (max-width: 640px) {
          .s-we-do .feature-group {
            grid-template-columns: 1fr;
          }

          .s-we-do .card-text-box {
            min-height: 140px;
            padding: 16px;
            text-align: left;
          }

          .s-we-do .heading { padding: 0 12px; }
        }

        /* Optional: subtle hover lift & shadow */
        .s-we-do .full-card:hover {
          transform: translateY(-6px);
          transition: transform 220ms ease, box-shadow 220ms ease;
          box-shadow: 0 12px 28px rgba(14, 33, 77, 0.08);
        }
      `}</style>
    </section>
  )
}
