'use client'
import Image from 'next/image'
import Link from 'next/link'
import { useEffect } from "react"

export default function Section2() {
	useEffect(() => {
		const elements = document.querySelectorAll(".slide-top, .slide-bottom")

		if (!elements.length) return

		const isSmallScreen = window.matchMedia("(max-width: 550px)").matches

		const observer = new IntersectionObserver(
			(entries) => {
				entries.forEach((entry) => {
					if (entry.isIntersecting) {
						entry.target.classList.add("active-animate")
					} else {
						// reset when leaving so it can trigger again
						entry.target.classList.remove("active-animate")
					}
				})
			},
			{
				root: null,
				threshold: isSmallScreen ? 0.2 : 0.3,
			}
		)

		elements.forEach((el) => observer.observe(el))

		return () => {
			elements.forEach((el) => observer.unobserve(el))
		}
	}, [])

	return (
		<>
			<section className="s-why-choose-3 tf-spacing-8">
				<div className="tf-container">
					<div className="row">
						{/* LEFT SIDE (slide from top) */}
						<div className="col-lg-7 slide-top" >
							<div className="wg-company" style={{ backgroundColor: "#e6ac41" }}>
								<ul className="list">
									<li >
										<div className="title">
											<div className="icon">
												<i className="flaticon-rocket" />
											</div>
											<Link href="/#" style={{ color: "#0b1972" }}>Our Mission</Link>
										</div>
										<p className="text">
											To empower businesses and institutions through innovative financial and regulatory
											strategies that enhance transparency, strengthen compliance, and ensure
											measurable, sustainable growth with integrity, expertise, and long-term impact.
										</p>
									</li>
									<li>
										<div className="title">
											<div className="icon">
												<i className="flaticon-market" />
											</div>
											<Link href="/#" style={{ color: "#0b1972" }}>Our Vision &amp; Goals</Link>
										</div>
										<p className="text">
											To be the most trusted consulting partner, enabling businesses and institutions to achieve
											financial clarity, operational excellence, and long-term success through innovative strategies,
											transparent practices, and expert guidance that drive measurable and sustainable growth.
										</p>
									</li>
								</ul>
							</div>
						</div>

						{/* RIGHT SIDE (slide from bottom) */}
						<div className="col-lg-5 slide-bottom">
							<div className="image tf-hover">
								<div className="hover-1">
									<Image
										width="0"
										height="0"
										sizes="100vw"
										style={{ width: "100%", height: "auto", maxHeight: "579.8px", objectFit: "cover" }}
										src="/images/section/hero-1.svg"
										alt=""
										className="lazyload"
									/>
								</div>
							</div>
						</div>
					</div>
				</div>

			</section>

			{/* Inline styles */}
			<style jsx>{`
				/* Initial state */
				.slide-top,
				.slide-bottom {
					opacity: 0;
					transition: all 0.8s ease;
				}

				.slide-top {
					transform: translateY(-80px);
				}

				.slide-bottom {
					transform: translateY(80px);
				}

				/* Active animation state */
				.slide-top.active-animate,
				.slide-bottom.active-animate {
					opacity: 1;
					transform: translateY(0);
				}
			`}</style>
		</>
	)
}
