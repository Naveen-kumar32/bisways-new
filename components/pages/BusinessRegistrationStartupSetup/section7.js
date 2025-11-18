"use client"

import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"

export default function Section7() {
  const { ref, inView } = useInView({
    triggerOnce: false,
    threshold: 0.2,
  })

  const slideLeft = {
    hidden: { opacity: 0, x: -80 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: "easeOut" } },
  }

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
    <section className="s-we-do tf-spacing-3" ref={ref}>
      {/* make this section use full viewport width but keep content centered */}
      <div className="tf-container section-fullwidth">
        <div className="row">
          <div className="col-lg-12">
            <div className="heading mb-70" style={{ textAlign: "center" }}>
              {/* <motion.p
                className="s-sub-title mb-15"
                style={{ color: "#0b1972", display: "flex", alignItems: "center", gap: "6px", justifyContent: "center" }}
                initial="hidden"
                animate={inView ? "visible" : "hidden"}
                variants={slideLeft}
              >
                <i className="icon-angles-right moveLeftToRight" style={{ color: "#0b1972" }} />
                what we do
              </motion.p> */}

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

            <p style={{ justifyContent: "center", alignItems: "center", display: "flex", color: "#0b1972", fontSize: 23, width: "100%", padding: "0 200px", textAlign:"center" }}>
              We provide a comprehensive service for business registration and legal setup, ensuring you start your business on the right foot. Here’s what we do for you:
            </p>

            {/* Feature Boxes */}
            <div className="feature-group" >
              {features.map((item, i) => (
                <motion.div
                  key={i}
                  className="box-icon style-8 full-card"
                  initial="hidden"
                  animate={inView ? "visible" : "hidden"}
                  variants={slideUp}
                  transition={{ delay: 0.4 + i * 0.12 }}
                  style={{width:"330px"}}
                >
                  <div className="icon">
                    <Image
                      src={item.img}
                      alt={item.title}
                      width={88}
                      height={88}
                      style={{ objectFit: "contain" }}
                    />
                  </div>

                  <div className="title-wrap">
                    <p className="title" style={{color: "#0b1972"}}>
                      {item.title}
                    </p>
                  </div>

                  <span className="line mb-12" />

                  <p className="text card-text-box" >
                    {item.text}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .s-we-do .section-fullwidth {
          width: 100vw;               /* use full viewport width */
          position: relative;
          left: 50%;
          right: 50%;
          margin-left: -50vw;        /* neutralize parent container padding if any */
          margin-right: -50vw;
          box-sizing: border-box;
        }

        /* Centered inner area to constrain card width while allowing full-bleed background if needed */
        .s-we-do .tf-container {
          display: flex;
          justify-content: center;
        }

        /* The grid itself - centered within viewport, with a sensible max width */
        .s-we-do .feature-group {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 28px;
          align-items: stretch;
          width: min(1200px, 96%);   /* keep cards readable: expands up to 1200px but respects small screens */
          margin: 0 auto;            /* center the grid */
          justify-items: center;     /* center each grid cell content horizontally */
          padding: 0 12px 24px;
        }

        /* Each card is a column-flex with a controlled max width so spacing is equal */
        .s-we-do .full-card {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: flex-start;
          background: transparent;
          border-radius: 12px;
          width: 100%;
          max-width: 300px;          /* consistent card width */
          box-sizing: border-box;
          padding: 18px;
        }

        .s-we-do .icon {
          display: flex;
          justify-content: center;
          align-items: center;
          padding-top: 6px;
        }

        .s-we-do .title-wrap {
          width: 100%;
          // text-align: center;
          margin-top: 8px;
        }

        .s-we-do .box-icon .title {
          display: block;
          font-size: 20px;
          color: #0b1972;
          font-weight: 600;
          line-height: 1.2;
          margin: 0;
        }

        // .s-we-do .line {
        //   display: block;
        //   height: 2px;
        //   width: 48px;
        //   background: transparent;
        //   margin: 8px auto 0;
        // }

        .s-we-do .card-text-box {
          flex: 1 1 auto;
          min-height: 280px;
          width: 100%;               /* fill the card width for balanced spacing */
          display: flex;
          // align-items: center;
          justify-content: center;
          text-align: center;        /* center text inside the colored box */
          padding: 18px;
          border-radius: 12px;
          background: #e6ac41;
          // color: #0b1972;
          line-height: 1.45;
          box-sizing: border-box;
        }

        /* Hover lift */
        .s-we-do .full-card:hover {
          transform: translateY(-6px);
          transition: transform 220ms ease, box-shadow 220ms ease;
          box-shadow: 0 12px 28px rgba(14, 33, 77, 0.08);
        }

        /* Responsive: 2 columns on medium screens, 1 column on small screens */
        @media (max-width: 1100px) {
          .s-we-do .feature-group {
            grid-template-columns: repeat(2, 1fr);
            width: min(900px, 96%);
            gap: 22px;
          }
        }

        @media (max-width: 640px) {
          .s-we-do .feature-group {
            grid-template-columns: 1fr;
            width: 96%;
            gap: 16px;
          }

          .s-we-do .card-text-box {
            min-height: 100px;
            padding: 14px;
          }

          .s-we-do .heading { padding: 0 12px; }
        }
      `}</style>
    </section>
  )
}
