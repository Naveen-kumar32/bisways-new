"use client"
import Link from "next/link"
import { motion } from "framer-motion"
import Image from 'next/image'

const parentVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } }
}

const itemVariants = {
  hidden: { x: -80, opacity: 0 },
  visible: { x: 0, opacity: 1, transition: { duration: 0.6, ease: "easeOut" } }
}

export default function Section4() {
  return (
    <>
      <section className="s-solution tf-spacing-1" style={{ backgroundColor: "#0b1972" }}>
        <div className="mb-70">
          <div className="tf-container">
            <div className="row">
              <div className="col-lg-8">
                {/* Parent motion container — this handles triggering + staggering */}
                <motion.div
                  className="content"
                  variants={parentVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: false, amount: 0.25 }} // <- replay on re-entry
                >
                  <motion.p
                    className="s-title text-white text-anime-wave"
                    variants={itemVariants}
                    style={{ display: "block", willChange: "transform, opacity" }}
                  >
                    Driving Business Growth Through Smart {" "}
                    <span style={{ color: "#e6ac41" }}>Solutions</span>
                  </motion.p>

                  <motion.p
                    className="text text-white"
                    variants={itemVariants}
                    style={{ display: "block", willChange: "transform, opacity" }}
                  >
                    Our consulting approach integrates finance, strategy, and technology to create seamless,
                    intelligent solutions that simplify compliance and strengthen decision-making. By
                    combining analytical insight with practical experience, we empower businesses to
                    accelerate growth, enhance performance, and stay competitive in a dynamic market
                    through innovation, transparency, and measurable results.
                  </motion.p>
                </motion.div>
              </div>

              <div className="col-lg-4">
                <div className="content-right">
                  <div className="wg-curve-text tf-animate__box-2 animate__slow">
                    <div className="icon">
                      <Image
                        src="/images/section/background.svg"
                        alt="Background Decorative Icon"
                        width={80}
                        height={80}
                        style={{
                          objectFit: "contain",
                          filter: "drop-shadow(0 0 10px rgba(255,255,255,0.2))",
                        }} />
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

        {/* features unchanged */}
        <div className="tf-container w-1780">
          <div className="row">
            <div className="col-lg-4">
              <div className="wg-feature-item tf-hover-icon">
                <div className="icon-item hover-icon"><i className="flaticon-target" /></div>
                <p className="title font-main-2 fw-7"><Link href="/our-service">Consulting Strategy</Link></p>
                <p className="text"> We craft clear, data-driven strategies
                  that solve business challenges and build
                  a foundation for confident growth.</p>
                <span className="line mb-40" />
                <ul className="benefit-list style-3">
                  <li><div className="icon"><i className="icon-star-of-life" /></div><p><Link href="/service-details"> Strategic Financial Planning</Link></p></li>
                  <li><div className="icon"><i className="icon-star-of-life" /></div><p><Link href="/service-details">Data-Driven Decision Insights</Link></p></li>
                  <li><div className="icon"><i className="icon-star-of-life" /></div><p><Link href="/service-details">Scalable Business Frameworks</Link></p></li>
                </ul>
              </div>
            </div>

            <div className="col-lg-4">
              <div className="wg-feature-item style-2 tf-hover-icon">
                <div className="icon-item hover-icon"><i className="flaticon-rocket" /></div>
                <p className="title font-main-2 fw-7"><Link href="/our-service-02">Business Growth &amp; Solutions</Link></p>
                <p className="text"> We align structure, finance, and
                  compliance to strengthen operations
                  and enable measurable, long-term
                  expansion.</p>
                <span className="line mb-40" />
                <ul className="benefit-list style-3">
                  <li><div className="icon"><i className="icon-star-of-life" /></div><p><Link href="/service-details"> Market Opportunity Mapping</Link></p></li>
                  <li><div className="icon"><i className="icon-star-of-life" /></div><p><Link href="/service-details"> Client-Focused Business Approach</Link></p></li>
                  <li><div className="icon"><i className="icon-star-of-life" /></div><p><Link href="/service-details">Growth Performance Monitoring</Link></p></li>
                </ul>
              </div>
            </div>

            <div className="col-lg-4">
              <div className="wg-feature-item last style-3 tf-hover-icon">
                <div className="icon-item hover-icon"><i className="flaticon-megaphone" /></div>
                <p className="title font-main-2 fw-7"><Link href="/our-service" className="text-white hover-text-main-yellow">Marketing Growth Solutions</Link></p>
                <p className="text">We enhance visibility, efficiency, and
                  profitability through digital innovation
                  and smart process optimization.</p>
                <span className="line mb-40" />
                <ul className="benefit-list style-3">
                  <li><div className="icon"><i className="icon-star-of-life" /></div><p><Link href="/service-details" className="text-white hover-text-main-yellow"> Performance Review & Analytics</Link></p></li>
                  <li><div className="icon"><i className="icon-star-of-life" /></div><p><Link href="/service-details" className="text-white hover-text-main-yellow">Process Automation & Technology</Link></p></li>
                  <li><div className="icon"><i className="icon-star-of-life" /></div><p><Link href="/service-details" className="text-white hover-text-main-yellow">Digital Reach & Optimization</Link></p></li>
                </ul>
              </div>
            </div>

          </div>
        </div>
        <span className="line" />
      </section>
    </>
  )
}
