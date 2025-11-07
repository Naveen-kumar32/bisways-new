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
					Founders, business owners, NGOs, and educational institutions that<br />
					want to keep finances organized and investor / audit-ready.
				</p>
				<div className="row">
					<div className="col-lg-12">


						{/* Feature Boxes */}
						<div className="feature-group overflow-hidden">
							{[
								{
									img: "/images/section/cfo-icon-4.svg",
									title: "Startup Founders",
									text: "For early-stage ventures seeking financial clarity and structure.",
								},
								{
									img: "/images/section/cfo-icon-5.svg",
									title: "Business Owners",
									text: "For SMEs focused on better control,compliance, and reporting.",
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
									<p style={{ justifyContent: "center", alignItems: "center", display: "flex", color: "#0b1972", fontSize: 23, width: "100%", padding: "0 40px", marginBottom: 32 }} className="title" >
										{item.title}
									</p>
									<span className="line mb-30" />
									<p className="text" style={{width:"550px", color: "white", boxShadow: "2px", backgroundColor: "#0b1972", padding: "20px", borderRadius: "16px", height: "100px" }}>{item.text}</p>

								</motion.div>
							))}
						</div>
					</div>
					<div className="col-lg-12 ">


						{/* Feature Boxes */}
						<div className="feature-group overflow-hidden">
							{[
								{
									img: "/images/section/cfo-icon-6.svg",
									title: "Educational Institutions",
									text: "For schools and colleges improving transparency and budgeting.",
								},
								{
									img: "/images/section/cfo-icon-7.svg",
									title: "NGOs / Trusts",
									text: "For nonprofits maintaining donor confidence and statutory compliance.",
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
									<p style={{ justifyContent: "center", alignItems: "center", display: "flex", color: "#0b1972", fontSize: 23, width: "100%", padding: "0 40px", marginBottom: 32 }} className="title" >
										{item.title}
									</p>
									<span className="line mb-30" />
									<p className="text" style={{width:"550px", color: "white", boxShadow: "2px", backgroundColor: "#0b1972", padding: "20px", borderRadius: "16px", height: "100px" }}>{item.text}</p>

								</motion.div>
							))}
						</div>
					</div>

				</div>
			</div>
			<style jsx>{`
			
			/* Card text area - grows to equalize card heights */
			.card-text {
				margin-top: auto; /* push to bottom area */
				padding: 16px;
				border-radius: 12px;
				background: #0b1972;
				color: #fff;
				box-sizing: border-box;
				width: 100%;
				flex: 1 1 auto; /* allow it to grow/shrink to equalize height */
				display: flex;
				align-items: center; /* vertical center the text */
				justify-content: center;
				text-align: center;
			}

			/* Optional: if you want to clamp text to a fixed number of lines instead of growing */
			/* Uncomment the rules below and comment out .card-text { flex: 1 1 auto; } */
			/*
			.card-text {
				display: -webkit-box;
				-webkit-box-orient: vertical;
				overflow: hidden;
				-webkit-line-clamp: 3; // change number to how many lines you want
				padding: 16px;
				border-radius: 12px;
				background: #0b1972;
				color: #fff;
				width: 100%;
			}
			*/

			/* Responsive tweaks */
			@media (max-width: 768px) {
				.lead-text { font-size: 18px; padding: 0 12px; }
				.card { min-height: 200px; }
			}
			`}</style>
		</section>
	)
}
