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
					Our services are ideal for registered businesses seeking seamless ROC and MCA compliance — ensuring
					accurate filings, transparent governance, and hassle-free coordination with authorities.
				</p>
				<div className="row">
					<div className="col-lg-12">


						{/* Feature Boxes */}
						<div className="feature-group overflow-hidden">
							{[
								{
									img: "/images/section/roc-icon-4.svg",
									title: "Private Limited Companies",
									text: "For companies requiring annual ROC filings, board resolutions, and director compliance under MCA norms.",
								},
								{
									img: "/images/section/roc-icon-5.svg",
									title: "Limited Liability Partnerships (LLPs)",
									text: "For LLPs managing partner changes, capital updates,or yearly statement submissions.",
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
									img: "/images/section/roc-icon-6.svg",
									title: "Funded Startups",
									text: "For startups backed by investors needing precise documentation, share allotments, and compliance accuracy.",
								},
								{
									img: "/images/section/roc-icon-7.svg",
									title: "Multi-Director Firms",
									text: "For growing firms handling frequent director or structural updates and needing reliable compliance tracking.",
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
