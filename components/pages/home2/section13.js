'use client'
import Image from 'next/image'
import { useState } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer';
export default function Section13() {
	const [isAccordion, setIsAccordion] = useState(1)

	const handleAccordion = (key) => {
		setIsAccordion(prevState => prevState === key ? null : key)
	}
	const { ref: sectionRef, inView } = useInView({
    triggerOnce: false, // 👈 animate every time section comes into view
    threshold: 0.2
  });

  const subtitleVariants = {
    hidden: { opacity: 0, x: 50, y: 50 },
    visible: { opacity: 1, x: 0, y: 0, transition: { duration: 1.2, ease: 'easeOut' } }
  }

  const titleFromLeftVariants = {
    hidden: { opacity: 0, x: -140 },
    visible: { opacity: 1, x: 0, transition: { duration: 1.8, ease: [0.25, 1, 0.5, 1], delay: 0.1 } }
  }
	return (
		<>

			<section className="s-working tf-spacing-1" ref={sectionRef}>
				<div className="tf-container">
					<div className="row">
						<div className="col-lg-12">
							<div className="content">
								<motion.p
									className="s-sub-title mb-18 justify-center"
									variants={subtitleVariants}
									initial="hidden"
									animate={inView ? 'visible' : 'hidden'}
									style={{color:"#0b1972"}}
								>
									<i className="icon-angles-right moveLeftToRight" style={{color:"#0b1972"}} />
									working process
								</motion.p>

								{/* Main Title - slides from left */}
								<motion.p
									className="s-title mb-70 text-center text-anime-wave"
									variants={titleFromLeftVariants}
									initial="hidden"
									animate={inView ? 'visible' : 'hidden'}
									style={{color:"#0b1972"}}
								>
									From Concept to Execution <br />
									Our Consulting	<span style={{ color: "#e6ac41" }}> Process</span>
								</motion.p>

								<div className="tf-accordion-type-3 accordion" id="accordionExample">
									<div className={`accordion-item ${isAccordion === 1 ? 'active' : ''}`} onClick={() => handleAccordion(1)}>
										<h2 className="accordion-header">
											<button className={`accordion-button  ${isAccordion === 1 ? '' : 'collapsed'}`} type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
												<span className="step">
													Step 01
												</span>
												<span>
													Discovery &amp; Assessment
												</span>
											</button>
										</h2>
										<div id="collapseOne" className={`accordion-collapse collapse ${isAccordion === 1 ? 'show' : ''}`} data-bs-parent="#accordionExample">
											<div className="accordion-body">
												<p className="title text-white" >
													Discovery &amp; Assessment
												</p>
												<p className="text mb-25 tf-fade-item fade-1 text-white">
													This initial phase involves understanding the client’s
													needs,
													<br />
													challenges, and goals. Consultants conduct in-depth.
												</p>
												<ul className="benefit-list text-white">
													<li className="tf-fade-item fade-2">
														<div className="icon">
															<i className="flaticon-check-mark" />
														</div>
														<p>
															Stakeholder Interviews &amp; Data Gathering
														</p>
													</li>
													<li className="tf-fade-item fade-3">
														<div className="icon">
															<i className="flaticon-check-mark" />
														</div>
														<p>
															Comprehensive Business Analysis
														</p>
													</li>
												</ul>
											</div>
										</div>
										<div className="image tf-hover">
											<div className="hover-1">
												<Image
													width="0"
													height="0"
													sizes="100vw"
													style={{ width: "100%", height: "auto" }}
													src="/images/section/home-3.jpg" data-src="/images/widget/accordion-type-3.jpg" alt="" className="lazyload" />
											</div>
										</div>
									</div>
									<div className={`accordion-item ${isAccordion === 2 ? 'active' : ''}`} onClick={() => handleAccordion(2)}>
										<h2 className="accordion-header">
											<button className={`accordion-button  ${isAccordion === 2 ? '' : 'collapsed'}`} type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
												<span className="step">
													Step 02
												</span>
												<span>
													Strategy Development
												</span>
											</button>
										</h2>
										<div id="collapseTwo" className={`accordion-collapse collapse ${isAccordion === 2 ? 'show' : ''}`} data-bs-parent="#accordionExample">
											<div className="accordion-body">
												<p className="title text-white">
													Strategy Development
												</p>
												<p className="text mb-25 tf-fade-item fade-1 text-white">
													This initial phase involves understanding the client’s
													needs,
													<br />
													challenges, and goals. Consultants conduct in-depth.
												</p>
												<ul className="benefit-list text-white">
													<li className="tf-fade-item fade-2">
														<div className="icon">
															<i className="flaticon-check-mark" />
														</div>
														<p>
															Stakeholder Interviews &amp; Data Gathering
														</p>
													</li>
													<li className="tf-fade-item fade-3">
														<div className="icon">
															<i className="flaticon-check-mark" />
														</div>
														<p>
															Comprehensive Business Analysis
														</p>
													</li>
												</ul>
											</div>
										</div>
										<div className="image tf-hover">
											<div className="hover-1">
												<Image
													width="0"
													height="0"
													sizes="100vw"
													style={{ width: "100%", height: "auto" }}
													src="/images/section/home-3.jpg" data-src="/images/widget/accordion-type-3-2.jpg" alt="" className="lazyload" />
											</div>
										</div>
									</div>
									<div className={`accordion-item ${isAccordion === 3 ? 'active' : ''}`} onClick={() => handleAccordion(3)}>
										<h2 className="accordion-header">
											<button className={`accordion-button  ${isAccordion === 3 ? '' : 'collapsed'}`} type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
												<span className="step">
													Step 03
												</span>
												<span>
													Implementation &amp; Execution
												</span>
											</button>
										</h2>
										<div id="collapseThree" className={`accordion-collapse collapse ${isAccordion === 3 ? 'show' : ''}`} data-bs-parent="#accordionExample">
											<div className="accordion-body">
												<p className="title text-white">
													Implementation &amp; Execution
												</p>
												<p className="text mb-25 tf-fade-item fade-1 text-white">
													This initial phase involves understanding the client’s
													needs,
													<br />
													challenges, and goals. Consultants conduct in-depth.
												</p>
												<ul className="benefit-list text-white">
													<li className="tf-fade-item fade-2">
														<div className="icon">
															<i className="flaticon-check-mark" />
														</div>
														<p>
															Stakeholder Interviews &amp; Data Gathering
														</p>
													</li>
													<li className="tf-fade-item fade-3">
														<div className="icon">
															<i className="flaticon-check-mark" />
														</div>
														<p>
															Comprehensive Business Analysis
														</p>
													</li>
												</ul>
											</div>
										</div>
										<div className="image tf-hover">
											<div className="hover-1">
												<Image
													width="0"
													height="0"
													sizes="100vw"
													style={{ width: "100%", height: "auto" }}
													src="/images/section/home-3.jpg" data-src="/images/widget/accordion-type-3-3.jpg" alt="" className="lazyload" />
											</div>
										</div>
									</div>
									<div className={`accordion-item last ${isAccordion === 4 ? 'active' : ''}`} onClick={() => handleAccordion(4)}>
										<h2 className="accordion-header">
											<button className={`accordion-button  ${isAccordion === 4 ? '' : 'collapsed'}`} type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
												<span className="step">
													Step 04
												</span>
												<span>
													Monitoring &amp; Continuous Improvement
												</span>
											</button>
										</h2>
										<div id="collapseFour" className={`accordion-collapse collapse ${isAccordion === 4 ? 'show' : ''}`} data-bs-parent="#accordionExample">
											<div className="accordion-body">
												<p className="title text-white">
													Monitoring &amp; Continuous Improvement
												</p>
												<p className="text mb-25 tf-fade-item fade-1 text-white">
													This initial phase involves understanding the client’s
													needs,
													<br />
													challenges, and goals. Consultants conduct in-depth.
												</p>
												<ul className="benefit-list text-white">
													<li className="tf-fade-item fade-2">
														<div className="icon">
															<i className="flaticon-check-mark" />
														</div>
														<p>
															Stakeholder Interviews &amp; Data Gathering
														</p>
													</li>
													<li className="tf-fade-item fade-3">
														<div className="icon">
															<i className="flaticon-check-mark" />
														</div>
														<p>
															Comprehensive Business Analysis
														</p>
													</li>
												</ul>
											</div>
										</div>
										<div className="image tf-hover">
											<div className="hover-1">
												<Image
													width="0"
													height="0"
													sizes="100vw"
													style={{ width: "100%", height: "auto" }}
													src="/images/section/home-3.jpg" data-src="/images/widget/accordion-type-3-4.jpg" alt="" className="lazyload" />
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>

		</>
	)
}
