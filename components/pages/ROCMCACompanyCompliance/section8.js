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
											How often should I file ROC returns?

										</button>
									</h2>
									<div id="collapseOne" className={isAccordion == 1 ? "accordion-collapse collapse show" : "accordion-collapse collapse"} data-bs-parent="#accordionExample">
										<div className="accordion-body">
											Every company or LLP must file annual returns once a year within

											60 days of the Annual General Meeting, along with other event-
											based forms whenever changes occur.

										</div>
									</div>
								</div>
								<div className="accordion-item">
									<h2 className="accordion-header" onClick={() => handleAccordion(2)}>
										<button className={isAccordion == 2 ? "accordion-button collapsed" : "accordion-button"} type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="false" aria-controls="collapseOne">
											Can you manage ROC filings end-to-end?
										</button>
									</h2>
									<div id="collapseOne" className={isAccordion == 2 ? "accordion-collapse collapse show" : "accordion-collapse collapse"} data-bs-parent="#accordionExample">
										<div className="accordion-body">
											Yes. We prepare and file all ROC and MCA forms — including AOC-
											4, MGT-7, ADT-1, and DIR-3 KYC — ensuring accuracy, compliance,

											and timely acknowledgment.

										</div>
									</div>
								</div>
								<div className="accordion-item">
									<h2 className="accordion-header" onClick={() => handleAccordion(3)}>
										<button className={isAccordion == 3 ? "accordion-button collapsed" : "accordion-button"} type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="true" aria-controls="collapseTwo">
											What happens if we miss the ROC filing deadline?
										</button>
									</h2>
									<div id="collapseTwo" className={isAccordion == 3 ? "accordion-collapse collapse show" : "accordion-collapse collapse"} data-bs-parent="#accordionExample">
										<div className="accordion-body">
											Late filings attract penalties or additional fees. We help you
											regularize overdue compliance, file pending forms, and restore
											company standing under the Companies Act.
										</div>
									</div>
								</div>
								<div className="accordion-item">
									<h2 className="accordion-header" onClick={() => handleAccordion(4)}>
										<button className={isAccordion == 4 ? "accordion-button collapsed" : "accordion-button"} type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
											Do you assist with company changes and documentation?

										</button>
									</h2>
									<div id="collapseThree" className={isAccordion == 4 ? "accordion-collapse collapse show" : "accordion-collapse collapse"} data-bs-parent="#accordionExample">
										<div className="accordion-body">
											Absolutely. We handle share allotment, director appointments or
											resignations, registered-office changes, and other event filings with
											proper resolutions and MCA approvals.
										</div>
									</div>
								</div>
								<div className="accordion-item ">
									<h2 className="accordion-header" onClick={() => handleAccordion(5)}>
										<button className={isAccordion == 5 ? "accordion-button collapsed last" : "accordion-button last"} type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
											Who can benefit from ROC & MCA compliance services?
										</button>
									</h2>
									<div id="collapseFour" className={isAccordion == 5 ? "accordion-collapse collapse show" : "accordion-collapse collapse"} data-bs-parent="#accordionExample">
										<div className="accordion-body">
											Our services suit private limited companies, LLPs, and startups
											needing accurate filings, director compliance, and advisory to
											maintain good standing under Indian corporate law.
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
