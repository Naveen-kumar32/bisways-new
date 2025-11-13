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

	const features = [
		{
			img: "/images/section/gst-icon-1.svg",
			title: "GST Return Filings (GSTR-1, 3B, 9, 9C)",
			text: `We prepare and file monthly, quarterly, and annual GST returns accurately, ensuring compliance and avoiding late-filing penalties.`,
		},
		{
			img: "/images/section/gst-icon-2.svg",
			title: "Sales & Purchase Reconciliation",
			text: `We reconcile purchase and sales data with your books, eliminating mismatches before submission to maintain error-free compliance.`,
		},
		{
			img: "/images/section/gst-icon-3.svg",
			title: "TDS Return Filings (Form 24Q, 26Q)",
			text: `We handle preparation, verification, and filing of employee and vendor TDS returns in compliance with tax regulations.`,
		},
		{
			img: "/images/section/gst-icon-4.svg",
			title: "Income Tax Return Filing",
			text: `We compute and file income-tax returns for individuals, businesses, and trusts with complete accuracy and documentation.`,
		},
		{
			img: "/images/section/gst-icon-5.svg",
			title: "Tax Audit Reports & Coordination",
			text: `We coordinate with auditors, compile required data, and assist in preparing tax audit reports efficiently.`,
		},
		{
			img: "/images/section/gst-icon-6.svg",
			title: "Handling Notices & Mismatches",
			text: `We review and respond promptly to GST or Income-Tax notices, ensuring quick resolution and regulatory compliance.`,
		},
	]

	return (
		<section className="s-we-do tf-spacing-3" ref={ref}>
			<div className="tf-container flex justify-center" flex justify-center>
				<div className="row">
					<div className="col-lg-12">
						<div className="heading mb-70">
							{/* Main Title */}
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
							<motion.p
								className="s-title text-center text-anime-style-2"
								style={{ color: "#0b1972" }}
								initial="hidden"
								animate={inView ? "visible" : "hidden"}
								variants={slideLeft}
								transition={{ delay: 0.2 }}
							>
								Empowering Your Business with
								<br />
								<span style={{ color: "#e6ac41" }}>Professional Setup</span>
							</motion.p>

						</div>

						<p style={{ justifyContent: "center", alignItems: "center", display: "flex", color: "#0b1972", fontSize: 23, width: "100%", padding: "0 200px", marginBottom: 32, textAlign: "center" }}>
							We manage every aspect of your taxation and audit process with precision, ensuring timely compliance,
							accurate filings, seamless coordination with authorities, and complete peace of mind for your business growth.
						</p>

						{/* Feature Boxes in two rows of three */}
						<div className="feature-group overflow-hidden ">
							{features.slice(0, 3).map((item, i) => (
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
									<p href="/service-details" className="title" style={{ width: "350px", color: "#0b1972", height: "50px", fontSize: "22px", fontWeight: "600", fontStyle: "bold" }}>
										{item.title}
									</p>
									<span className="line mb-30" />
									<p className="text" style={{ boxShadow: "2px", padding: "20px", borderRadius: "20px", height: "180px", width: "350px", backgroundColor: "#e6ac41", textAlign: "center" }}>{item.text}</p>

								</motion.div>
							))}
						</div>

						<div className="feature-group overflow-hidden">
							{features.slice(3, 6).map((item, i) => (
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
									<p href="/service-details" className="title" style={{ width: "350px", color: "#0b1972", height: "50px", fontSize: "22px", fontWeight: "600", fontStyle: "bold" }}>
										{item.title}
									</p>
									<span className="line mb-30" />
									<p className="text" style={{ width: "350px", boxShadow: "2px", padding: "20px", borderRadius: "20px", height: "170px", backgroundColor: "#e6ac41", textAlign: "center" }}>{item.text}</p>

								</motion.div>
							))}
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}
