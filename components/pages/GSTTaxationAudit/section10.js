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
	const titleVariant = {
		hidden: { x: 120, y: 40, opacity: 0 },
		visible: { x: 0, y: 0, opacity: 1 },
	}

	return (
		<section className="s-we-do tf-spacing-3" ref={ref}>
			<div className="tf-container">
				<div className="heading mb-70">
					{/* Subtitle */}
<motion.p
						className="s-sub-title mb-15 justify-center"
						style={{ color: '#0b1972' }}
						variants={titleVariant}
						initial="hidden"
						animate={inView ? 'visible' : 'hidden'}
						transition={{ duration: 0.7, ease: 'easeOut' }}
					>
						<i
							className="icon-angles-right moveLeftToRight"
							style={{ color: '#0b1972' }}
						/>
						WHO WE SERVE
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
						Who It’s Best For


					</motion.p>
				</div>
				<p style={{ justifyContent: "center", alignItems: "center", display: "flex", color: "#0b1972", fontSize: '23px' }}>
					Our services are ideal for individuals and organizations that require structured tax management,
					compliance assistance, and complete audit coordination under one trusted consulting partner.
				</p>
				<div className="row">
					<div className="col-lg-12">


						{/* Feature Boxes */}
						<div className="feature-group overflow-hidden">
							{[
								{
									img: "/images/section/gst-icon-7.svg",
									title: "GST-Registered Businesses",
									text: "For firms and traders filing GST monthly or quarterly with consistent reconciliation support.",
								},
								{
									img: "/images/section/gst-icon-8.svg",
									title: "Trust’s & NGO’s",
									text: "For institutions handling donations and grants requiring tax compliance and annual audit reviews.",
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
									img: "/images/section/gst-icon-9.svg",
									title: "Salaried Professionals",
									text: "For individuals with multiple income sources needing tax filing, TDS, and audit coordination.",
								},
								{
									img: "/images/section/gst-icon-10.svg",
									title: "LLPs / Pvt Ltd Companies",
									text: "For entities managing complex tax obligations needing expert audit and financial compliance assistance.",
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
