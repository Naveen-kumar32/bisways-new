"use client"

import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"

export default function Section2() {
	const { ref, inView } = useInView({
		triggerOnce: false, // 👈 replay every time section comes into view
		threshold: 0.2,
	})

	// Left slide
	const slideLeft = {
		hidden: { opacity: 0, x: -80 },
		visible: {
			opacity: 1,
			x: 0,
			transition: { duration: 0.6, ease: "easeOut" },
		},
	}

	// Right slide
	const slideRight = {
		hidden: { opacity: 0, x: 80 },
		visible: {
			opacity: 1,
			x: 0,
			transition: { duration: 0.6, ease: "easeOut" },
		},
	}

	return (
		<section className="s-process tf-spacing-1" ref={ref} sty style={{ backgroundColor: "#0b1972" }}>
			<div className="tf-overlay" />

			<div className="content-wrap">
				<div className="tf-container">
					<div className="row">
						{/* Left Column */}
						<div className="col-lg-6">
							<div className="heading mb-50">
								{/* Sub Title */}
								<motion.p
									className="s-sub-title mb-15"
									style={{ color: "#ffffffff", display: "flex", alignItems: "center", gap: "6px" }}
									initial="hidden"
									animate={inView ? "visible" : "hidden"}
									variants={slideLeft}
								>
									<i className="icon-angles-right moveLeftToRight" style={{ color: "#ffffffff" }} />
									working process
								</motion.p>

								{/* Main Title */}
								<motion.p
									className="s-title text-anime-wave"
									style={{ color: "#ffffffff" }}
									initial="hidden"
									animate={inView ? "visible" : "hidden"}
									variants={slideLeft}
									transition={{ delay: 0.2, duration: 0.6 }}
								>
									Crafting your <br /> Success  <span style={{ color: "#e6ac41" }}>Roadmap</span>
								</motion.p>
							</div>

							{/* Paragraph */}
							<motion.div
								className="wg-step-skill"
								initial="hidden"
								animate={inView ? "visible" : "hidden"}
								variants={slideLeft}
								transition={{ delay: 0.4, duration: 0.6 }}
							>
								<p className="title font-main-2 mb-30">
									Step-by-Step Advisory for
									Business Structuring
								</p>
								<span className="line" />
								<ul className="benefit-list">
									<li>
										<div className="icon">
											<i className="icon-check-2" />
										</div>
										<p>Entity Evaluation & Planning</p>
									</li>
									<li>
										<div className="icon">
											<i className="icon-check-2" />
										</div>
										<p>Implementation & Documentation</p>
									</li>
									<li>
										<div className="icon">
											<i className="icon-check-2" />
										</div>
										<p>Audit & Compliance Support</p>
									</li>
								</ul>
							</motion.div>
						</div>

						{/* Right Column */}
						<div className="col-lg-6">
							{[
								{ step: "01", title: "Understanding Business Goals", text: "We assess your objectives, funding requirements, and operations to recommend the ideal legal and financial structure." },
								{ step: "02", title: "Planning & Documentation", text: "We prepare framework documents, SOPs, and governance policies for your chosen entity structure." },
								{ step: "03", title: "Execution & Alignment", text: "We execute filings, registrations, and internal process setups in line with best compliance practices." },
								{ step: "04", title: "Advisory & Continuous Support", text: "We provide ongoing structural and financial advisory as your business grows and diversifies." },
							].map((item, index) => (
								<motion.div
									key={index}
									className="wg-process mb-10"
									initial="hidden"
									animate={inView ? "visible" : "hidden"}
									variants={slideRight}
									transition={{ delay: 0.6 + index * 0.2, duration: 0.6 }}
								>
									<div className="right">
										<div className="step-number">
											<span>step {item.step}</span>
										</div>
										<p  className="name-process font-main-2" style={{ color: '#0b1972', fontSize:"22px", fontWeight:"600",fontStyle:"bold" }}>
											{item.title}
										</p>
									</div>
									<p className="text">{item.text}</p>
								</motion.div>
							))}
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}
