'use client'

import CounterUp from '@/components/elements/CounterUp'
import Image from 'next/image'
import Link from 'next/link'
import { useState, useRef } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

export default function Section8() {
	const [isAccordion, setIsAccordion] = useState(1)

	const handleAccordion = (key) => {
		setIsAccordion(prevState => prevState === key ? null : key)
	}

	// in-view setup so animation replays every time the section enters viewport
	const { ref: inViewRef, inView } = useInView({
		triggerOnce: false,
		threshold: 0.18,
	})
	const localRef = useRef(null)
	function setRefs(node) {
		localRef.current = node
		inViewRef(node)
	}

	const headingVariant = {
		hidden: { x: -140, opacity: 0 },
		visible: { x: 0, opacity: 1 },
	}

	const imageVariant = {
		hidden: { scale: 1 },
		visible: { scale: 1.03 }, // subtle zoom when section in view
	}
	const titleVariant = {
		hidden: { x: 120, y: 40, opacity: 0 },
		visible: { x: 0, y: 0, opacity: 1 },
	}

	return (
		<section ref={setRefs} className="s-faq-2 tf-spacing-1">
			<div className="tf-container">
				<div className="row">
					<div className="col-lg-5">
						<div className="content">

							<motion.p
								className="s-sub-title mb-15"
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
								FAQS
							</motion.p>

							<motion.p
								className="s-title mb-40 text-anime-wave"
								style={{ color: "#0b1972" }}
								variants={headingVariant}
								initial="hidden"
								animate={inView ? 'visible' : 'hidden'}
								transition={{ duration: 0.7, ease: 'easeOut' }}
							>
								Frequently Asked
								<br /><span style={{ color: "#e6ac41" }}> Questions	</span>
							</motion.p>

							<div className="tf-accordion style-3 accordion" id="accordionExample">
								<div className="accordion-item">
									<h2 className="accordion-header" onClick={() => handleAccordion(1)}>
										<button className={isAccordion == 1 ? "accordion-button collapsed" : "accordion-button"} type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="false" aria-controls="collapseOne">
											What types of entities can I register?

										</button>
									</h2>
									<div id="collapseOne" className={isAccordion == 1 ? "accordion-collapse collapse show" : "accordion-collapse collapse"} data-bs-parent="#accordionExample">
										<div className="accordion-body">
											You can register as a Proprietorship, LLP, or Private Limited
											Company depending on your business goals, size, and future
											plans for scalability and compliance.

										</div>
									</div>
								</div>
								<div className="accordion-item">
									<h2 className="accordion-header" onClick={() => handleAccordion(2)}>
										<button className={isAccordion == 2 ? "accordion-button collapsed" : "accordion-button"} type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="false" aria-controls="collapseOne">
											What documents are required for registration?
										</button>
									</h2>
									<div id="collapseOne" className={isAccordion == 2 ? "accordion-collapse collapse show" : "accordion-collapse collapse"} data-bs-parent="#accordionExample">
										<div className="accordion-body">
											You’ll need PAN, Aadhaar, address proof, and digital signatures
											(DSC) for directors or owners. For companies, MOA and AOA are
											also required.

										</div>
									</div>
								</div>
								<div className="accordion-item">
									<h2 className="accordion-header" onClick={() => handleAccordion(3)}>
										<button className={isAccordion == 3 ? "accordion-button collapsed" : "accordion-button"} type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="true" aria-controls="collapseTwo">
											How long does the registration process take?
										</button>
									</h2>
									<div id="collapseTwo" className={isAccordion == 3 ? "accordion-collapse collapse show" : "accordion-collapse collapse"} data-bs-parent="#accordionExample">
										<div className="accordion-body">
											Typically, registration is completed within 5–10 working days,
											depending on government approval timelines and document
											readiness from your side.

										</div>
									</div>
								</div>
								<div className="accordion-item">
									<h2 className="accordion-header" onClick={() => handleAccordion(4)}>
										<button className={isAccordion == 4 ? "accordion-button collapsed" : "accordion-button"} type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
											Can Bisways help with post-registration compliance?

										</button>
									</h2>
									<div id="collapseThree" className={isAccordion == 4 ? "accordion-collapse collapse show" : "accordion-collapse collapse"} data-bs-parent="#accordionExample">
										<div className="accordion-body">
											Yes, we provide end-to-end support, including tax registration, bank
											account setup, and periodic compliance filings for smooth business
											operations.
										</div>
									</div>
								</div>
								<div className="accordion-item ">
									<h2 className="accordion-header" onClick={() => handleAccordion(5)}>
										<button className={isAccordion == 5 ? "accordion-button collapsed last" : "accordion-button last"} type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
											What if I’m unsure which entity type to choose?
										</button>
									</h2>
									<div id="collapseFour" className={isAccordion == 5 ? "accordion-collapse collapse show" : "accordion-collapse collapse"} data-bs-parent="#accordionExample">
										<div className="accordion-body">
											Our experts guide you in selecting the best legal structure based on

											liability, taxation, funding needs, and business objectives for long-
											term sustainability.
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div className="col-lg-6 offset-lg-1" style={{ borderRadius: "16px" }}>
						<div className="image-wrap">
							<motion.div
								className="image"
								variants={imageVariant}
								initial="hidden"
								animate={inView ? 'visible' : 'hidden'}
								transition={{ duration: 0.6, ease: 'easeOut' }}

							>
								<Image
									width={1200}
									height={800}
									sizes="(max-width: 768px) 100vw, 50vw"
									style={{ width: "100%", height: "auto", display: 'block', }}
									src="/images/section/cfo-faq.svg"
									alt="faq"
									className="lazyload"
								/>
							</motion.div>
						</div>
					</div>
				</div>
			</div>

			<style jsx>{`
				.image-wrap { overflow: hidden; border-radius: 12px; }
				.image-wrap :global(img) {
					transition: transform 420ms cubic-bezier(0.2,0.8,0.2,1), filter 420ms;
					transform-origin: center center;
					will-change: transform;
				}

				/* on hover zoom (smooth) */
				.image-wrap:hover :global(img) {
					transform: scale(1.06);
				}

				/* ensure motion-scale + hover play nicely: keep a baseline transform */
				.image-wrap :global(img) { backface-visibility: hidden; }

				@media (max-width: 768px) {
					.s-title { font-size: 18px; }
				}
			`}</style>
		</section>
	)
}
