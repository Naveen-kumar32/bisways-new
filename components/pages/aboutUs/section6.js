"use client"
import { motion } from "framer-motion"
import Link from "next/link"

const leftVariants = {
  hidden: { x: -100, opacity: 0 },
  visible: { x: 0, opacity: 1, transition: { duration: 0.8, ease: "easeOut" } },
}

const rightVariants = {
  hidden: { x: 100, opacity: 0 },
  visible: { x: 0, opacity: 1, transition: { duration: 0.8, ease: "easeOut" } },
}

export default function Section6() {
  return (
    <>
      <section className="s-contact tf-spacing-3">
        <div className="tf-container">
          <div className="row">
            <div className="col-lg-12">
              <div className="content-wrap">

                {/* LEFT SIDE */}
                <motion.div
                  className="content-left"
                  variants={leftVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: false, amount: 0.2 }}
                >
                  <p className="s-sub-title" style={{ color: "#0b1972" }}>
                    <i className="icon-angles-right moveLeftToRight" />
                    need consultations
                  </p>
                  <p className="s-title text-anime-wave" style={{ color: "#0b1972" }}>
                    Ready to Get Free <span style={{ color: "#e6ac41" }}>Consultation ?</span>
                  </p>
                  <ul className="list">
                    <li
                      className="wow fadeInUp"
                      data-wow-delay="0s"
                      style={{
                        color: "#0b1972",
                        backgroundColor: "#e6ac41",
                        padding: "15px",
                        borderRadius: "20px",
                      }}
                    >
                      <p className="cap" style={{ color: "#0b1972" }}>Office Address</p>
                      <Link
											href="https://maps.app.goo.gl/DBK8NaH68CQ6wkeg8"
											className="infor"
											target="_blank"
										>
											<p className="infor" style={{ color: "#0b1972",fontWeight:"500",fontSize:"15px" }}>
												Plot no. 31, Lisa Ponnammal St, 3rd Floor,
												<br />
												Golden George Nagar, Nerkundram,
												<br />
												Chennai, Tamil Nadu - 600107
											</p>
										</Link>
                    </li>
                    <li
                      className="wow fadeInUp"
                      data-wow-delay="0.1s"
                      style={{
                        color: "#0b1972",
                        backgroundColor: "#e6ac41",
                        padding: "15px",
                        borderRadius: "20px",
                      }}
                    >
                      <p className="cap" style={{ color: "#0b1972" }}>Contact Us</p>
                      <p className="infor">
                       <Link style={{ color: "#0b1972",fontWeight:"500" }} href="mailto:info@bisways.com" className="infor">
												info@bisways.com
											</Link> <br />
											<Link style={{ color: "#0b1972",fontWeight:"500" }} href="tel:+919940344774" className="infor">
												+91 99403 44774
											</Link>
                      </p>
                    </li>
                  </ul>
                </motion.div>

                {/* RIGHT SIDE */}
                <motion.div
                  className="content-right"
                  variants={rightVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: false, amount: 0.2 }}
                >
                  <p className="title mb-30 text-center font-main-2" style={{ color: "#0b1972" }}>
                    Get Free Consultation
                  </p>
                  <form action="#" className="form-contact style-3">
                    <div className="cols mb-20">
                      <fieldset>
                        <input type="text" placeholder="Full Name" required />
                      </fieldset>
                      <fieldset>
                        <input type="text" placeholder="Phone" required />
                      </fieldset>
                    </div>
                    <div className="cols mb-20">
                      <fieldset>
                        <input type="email" placeholder="Email" required />
                      </fieldset>
                      <fieldset>
                        <input type="text" placeholder="Subject" required />
                      </fieldset>
                    </div>
                    <div className="cols mb-20">
                      <fieldset>
                        <textarea className="h-100px" placeholder="Write message" />
                      </fieldset>
                    </div>
                    <button type="submit" className="tf-btn full text-anime-style-1">
                      Get Consultation
                      <i className="icon-chevron-right" />
                    </button>
                  </form>
                </motion.div>

              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
