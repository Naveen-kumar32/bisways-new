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

	return (
		<section className="s-we-do tf-spacing-3 " ref={ref}>
			<div className="tf-container flex justify-center">
				<div className="row">
					<div className="col-lg-12">
						<div className="heading mb-70">
							{/* Subtitle */}
							{/* <motion.p
								className="s-sub-title mb-15 justify-center"
								style={{ color: "#0b1972", display: "flex", alignItems: "center", gap: "6px" }}
								initial="hidden"
								animate={inView ? "visible" : "hidden"}
								variants={slideLeft}
							>
								<i className="icon-angles-right moveLeftToRight" style={{ color: "#0b1972" }} />
								what we do
							</motion.p> */}

							{/* Main Title */}
							<motion.p
								className="s-title text-center text-anime-style-2"
								style={{ color: "#0b1972" }}
								initial="hidden"
								animate={inView ? "visible" : "hidden"}
								variants={slideLeft}
								transition={{ delay: 0.2 }}
							>
								Empowering Digital Businesses with
								<br />
								<span style={{ color: "#e6ac41" }}>Expert Consulting</span>
							</motion.p>
						</div>
						<p style={{ justifyContent: "center", alignItems: "center", display: "flex", color: "#0b1972", fontSize: 23, width: "100%", padding: "0 200px", marginBottom: 32,textAlign:"center" }}>
							From compliance to credibility — we simplify the complex legal and financial landscape for
							digital, fintech, and online enterprises.
						</p>


						{/* Feature Boxes */}
						<div className="feature-group overflow-hidden">
							{[
								{
									img: "/images/section/digital-icon-1.svg",
									title: "API & Fintech Business Setup",
									text: "We assist in DMT, BBPS, or API-based registration and compliance documentation.",
								},
								{
									img: "/images/section/digital-icon-2.svg",
									title: "Policy & Trademark Advisory",
									text: "We prepare refund, privacy, and T&C policies with trademark and brand registration support. ",
								},
								{
									img: "/images/section/digital-icon-3.svg",
									title: "Influencer & Creator Taxation",
									text: "We manage GST, ITR, and expense planning for creators, freelancers, and digital professionals.",
								},
							].map((item, i) => (
								<motion.div
									key={i}
									className="box-icon style-8"
									initial="hidden"
									animate={inView ? "visible" : "hidden"}
									variants={slideUp}
									transition={{ delay: 0.4 + i * 0.2 }}

								>
									<div className="icon">
										<Image
											src={item.img}
											alt={item.title}
											width={100}
											height={100}
											style={{ objectFit: "contain" }}
										/>
									</div>
									<p href="/service-details" className="title" style={{ color: "#0b1972", height: "50px",fontSize:"22px", fontWeight:"600",fontStyle:"bold"  }}>
										{item.title}
									</p>
									<span className="line mb-30" />
									<p className="text" style={{ boxShadow: "2px", backgroundColor: "#e6ac41", padding: "20px", borderRadius: "20px", height: "170px",textAlign:"center",width:"300px" }}>{item.text}</p>

								</motion.div>
							))}
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}
