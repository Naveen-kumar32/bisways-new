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
		<section className="s-we-do tf-spacing-3" ref={ref}>
			<div className="tf-container">
				<div className="row">
					<div className="col-lg-12">
						<div className="heading mb-70">
							{/* Subtitle */}
							<motion.p
								className="s-sub-title mb-15 justify-center"
								style={{ color: "#0b1972", display: "flex", alignItems: "center", gap: "6px" }}
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
								style={{ color: "#0b1972" }}
								initial="hidden"
								animate={inView ? "visible" : "hidden"}
								variants={slideLeft}
								transition={{ delay: 0.2 }}
							>
								Empowering Businesses with Expert
								<br />
								Virtual <span style={{ color: "#e6ac41" }}>CFO Consulting</span>
							</motion.p>
						</div>

						{/* Feature Boxes */}
						<div className="feature-group overflow-hidden">
							{[
								{
									img: "/images/section/cfo-icon-1.png",
									title: "Budget & Forecast Planning",
									text: "Manage cash flow effectively and create strategic, realistic business growth plans.",
								},
								{
									img: "/images/section/cfo-icon-2.png",
									title: "MIS & KPI Reporting     ",
									text: "Prepare monthly financial reports for performance tracking and informed management decisions.",
								},
								{
									img: "/images/section/cfo-icon-3.png",
									title: "Compliance & Tax Oversight",
									text: "Coordinate with auditors effectively to ensure transparency and strong financial discipline.",
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
									<Link href="/service-details" className="title" style={{ color: "#0b1972", height: "50px" }}>
										{item.title}
									</Link>
									<span className="line mb-30" />
									<p className="text" style={{ boxShadow: "2px", backgroundColor: "#e6ac41", padding: "20px", borderRadius: "20px", height: "170px",width:"300px",textAlign:"center" }}>{item.text}</p>
									
								</motion.div>
							))}
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}
