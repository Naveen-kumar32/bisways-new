"use client"

import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"

export default function Section10() {
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
				<div className="heading mb-70">
					{/* Subtitle */}


					{/* Main Title */}
					<motion.p
						className="s-title text-center text-anime-style-2"
						style={{ color: "#0b1972" }}
						initial="hidden"
						animate={inView ? "visible" : "hidden"}
						variants={slideLeft}
						transition={{ delay: 0.2 }}
					>
						Who It’s Best For


					</motion.p>
				</div>
				<p style={{ justifyContent: "center", alignItems: "center", display: "flex", color: "#0b1972", fontSize: '23px' }}>
					Our services are ideal for socially driven organisations that require structured compliance, transparent

					reporting, and consistent regulatory support.
				</p>
				<div className="row">
					<div className="col-lg-12">


						{/* Feature Boxes */}
						<div className="feature-group overflow-hidden">
							{[
								{
									img: "/images/section/ngo-icon-4.svg",
									title: "Foundations & Public Charitable Trusts",
									text: "For organisations managing welfare, education, or relief programs requiring 12A and 80G compliance.",
								},
								{
									img: "/images/section/ngo-icon-5.svg",
									title: "Corporate CSR Divisions",
									text: "For CSR teams executing community development or donation programs needing CSR-1 and audit compliance.",
								},

							].map((item, i) => (
								<motion.div
									key={i}
									className="box-icon style-8 items-center text-center"
									initial="hidden"
									animate={inView ? "visible" : "hidden"}
									variants={slideUp}
									transition={{ delay: 0.4 + i * 0.2 }}

								>
									<div className="icon" style={{ display: "flex", justifyContent: "center", alignItems: "center", width: "100%", marginBottom: 8 }}>
										<Image
											src={item.img}
											alt={item.title}
											width={100}
											height={100}
											style={{ objectFit: "contain" }}
										/>
									</div>
									<Link href="#" className="title" style={{ color: "#0b1972", height: "20px" }}>
										{item.title}
									</Link>
									<span className="line mb-30" />
									<p className="text" style={{ color: "white", boxShadow: "2px", backgroundColor: "#0b1972", padding: "20px", borderRadius: "16px", height: "100px" }}>{item.text}</p>

								</motion.div>
							))}
						</div>
					</div>
					<div className="col-lg-12 ">


						{/* Feature Boxes */}
						<div className="feature-group overflow-hidden">
							{[
								{
									img: "/images/section/ngo-icon-6.svg",
									title: "Donor-Funded Programs",
									text: "For institutions handling grants, donor aid, or CSR funding with strict utilisation reporting needs.",
								},
								{
									img: "/images/section/ngo-icon-7.svg",
									title: "Educational & Healthcare Institutions",
									text: "For Section 8 companies, schools, and hospitals registered under 12A or FCRA for project funding.",
								},

							].map((item, i) => (
								<motion.div
									key={i}
									className="box-icon style-8  items-center text-center"
									initial="hidden"
									animate={inView ? "visible" : "hidden"}
									variants={slideUp}
									transition={{ delay: 0.4 + i * 0.2 }}
									style={{ justifyContent: "center", alignItems: "center" }}
								>
									<div className="icon " style={{ display: "flex", justifyContent: "center", alignItems: "center", width: "100%", marginBottom: 8 }}>
										<Image
											src={item.img}
											alt={item.title}
											width={100}
											height={100}
											style={{ objectFit: "contain" }}
										/>
									</div>
									<Link href="/service-details" className="title" style={{ color: "#0b1972", height: "20px" }}>
										{item.title}
									</Link>
									<span className="line mb-30" />
									<p className="text" style={{ color: "white", boxShadow: "2px", backgroundColor: "#0b1972", padding: "20px", borderRadius: "16px", height: "100px" }}>{item.text}</p>

								</motion.div>
							))}
						</div>
					</div>

				</div>
			</div>
		</section>
	)
}
