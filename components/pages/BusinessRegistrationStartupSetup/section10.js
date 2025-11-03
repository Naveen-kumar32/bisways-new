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
					For new founders, consultants, online sellers, API providers, retailers, and freelancers who want to simplify
					the business setup process, ensure legal compliance, and lay a strong foundation for long-term growth.
				</p>
				<div className="row">
					<div className="col-lg-12">


						{/* Feature Boxes */}
						<div className="feature-group overflow-hidden">
							{[
								{
									img: "/images/section/business-icon-5.svg",
									title: "New Founders",
									text: "For individuals starting a business and needing quick registration.",
								},
								{
									img: "/images/section/business-icon-6.svg",
									title: "Consultants",
									text: "For consultants setting up their professional business structure.",
								},
								{
									img: "/images/section/business-icon-7.svg",
									title: "Online Sellers",
									text: "For e-commerce entrepreneurs needing smooth registration and compliance.",
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
									<p className="text" style={{ color: "white", boxShadow: "2px", backgroundColor: "#0b1972", padding: "20px", borderRadius: "16px", height: "120px" }}>{item.text}</p>

								</motion.div>
							))}
						</div>
					</div>
					<div className="col-lg-12 ">


						{/* Feature Boxes */}
						<div className="feature-group overflow-hidden">
							{[
								{
									img: "/images/section/business-icon-8.svg",
									title: "API Providers",
									text: "For tech businesses requiring compliance with digital services and registration.",
								},
								{
									img: "/images/section/business-icon-9.svg",
									title: "Retailers",
									text: "For businesses expanding retail operations with proper legal setup.",
								},
								{
									img: "/images/section/business-icon-10.svg",
									title: "Freelancers",
									text: "For independent professionals setting up for tax and legal compliance.",
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
									<p className="text" style={{ color: "white", boxShadow: "2px", backgroundColor: "#0b1972", padding: "20px", borderRadius: "16px", height: "120px" }}>{item.text}</p>

								</motion.div>
							))}
						</div>
					</div>

				</div>
			</div>
		</section>
	)
}
