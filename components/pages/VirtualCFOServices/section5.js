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

export default function Section5() {
	return (
		<section className="s-contact tf-spacing-3">
			<div className="tf-container">
				<div className="row">
					<div className="col-lg-12">
						{/* ✅ Responsive Centered Content Wrapper */}
						<div
							className="content-wrap mx-auto flex flex-col lg:flex-row justify-center items-start gap-24"
							style={{
								maxWidth: "1200px", // limits width on large screens
								padding: "20px",
							}}
						>

							{/* LEFT SIDE */}
							<motion.div
								className="content-left w-full lg:w-1/2"
								variants={leftVariants}
								initial="hidden"
								whileInView="visible"
								viewport={{ once: false, amount: 0.2 }}
								style={{minWidth:"700px"}}
							>
								<p className="s-sub-title" style={{ color: "#0b1972" }}>
									<i className="icon-angles-right moveLeftToRight" />
									need consultations
								</p>
								<p className="s-title text-anime-wave" style={{ color: "#0b1972" }}>
									Ready to Get Free <span style={{ color: "#e6ac41" }}>Consultation ?</span>
								</p>

								<ul className="list space-y-6">
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
											<p className="infor">
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
											info@bisways.com <br />
											+91 99403 44774
										</p>
									</li>
								</ul>
							</motion.div>

							{/* RIGHT SIDE */}
							<motion.div
								className="content-right w-full lg:w-1/2"
								variants={rightVariants}
								initial="hidden"
								whileInView="visible"
								viewport={{ once: false, amount: 0.2 }}
								style={{minWidth:"700px"}}
							>
								<p
									className="title mb-6 text-center font-main-2"
									style={{ color: "#0b1972" }}
								>
									Get Free Consultation
								</p>

								<form action="#" className="form-contact style-3 space-y-4" style={{paddingTop:"35px"}}>
									<div className="cols mb-4 grid grid-cols-1 sm:grid-cols-2 gap-4">
										<fieldset>
											<input type="text" placeholder="Full Name" required />
										</fieldset>
										<fieldset>
											<input type="text" placeholder="Phone" required />
										</fieldset>
									</div>

									<div className="cols mb-4 grid grid-cols-1 sm:grid-cols-2 gap-4">
										<fieldset>
											<input type="email" placeholder="Email" required />
										</fieldset>
										<fieldset>
											<input type="text" placeholder="Subject" required />
										</fieldset>
									</div>

									<div className="cols mb-4">
										<fieldset>
											<textarea
												className="h-32 w-full"
												placeholder="Write message"
											/>
										</fieldset>
									</div>

									<button
										type="submit"
										className="tf-btn full text-anime-style-1 w-full flex items-center justify-center gap-2"
									>
										Get Consultation
										<i className="icon-chevron-right" />
									</button>
								</form>
							</motion.div>

						</div>
						{/* ✅ END CONTENT WRAP */}
					</div>
				</div>
			</div>
		</section>
	)
}
