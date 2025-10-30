
import Image from 'next/image'
import Link from 'next/link'
export default function Section1() {
	return (
		<>

			<section className="s-why-choose-4 tf-spacing-3">
				<div className="content-wrap tf-spacing-3">
					<div className="content-left">
						<p className="s-sub-title mb-15" style={{ color: "#0b1972" }}>
							<i className="icon-angles-right moveLeftToRight" style={{ color: "#0b1972" }} />
							Why choose us
						</p>
						<p className="s-title mb-40 text-anime-wave" style={{ color: "#0b1972" }}>
							Unmatched Expertise for Your<span style={{ color: "#e6ac41" }}> Business Success</span>
						</p>
						<p className="text">
							Bisways Virtual CFO services provide expert financial planning,
							forecasting, and analysis without the need for a full-time CFO.

						</p>
						<p className="text">
							We help your business improve profitability, maintain financial
							discipline, and achieve sustainable growth.


						</p>
						<ul className="benefit-list style-2">
							<li>
								<div className="icon">
									<i className="icon-check-2" />
								</div>
								<p>
									10+ Years of Experience
								</p>
							</li>
							<li>
								<div className="icon">
									<i className="icon-check-2" />
								</div>
								<p>
									500+ Businesses Supported Nationwide
								</p>
							</li>
						</ul>
						{/* <Link href="/service-details" className="tf-btn style-3 text-anime-style-1">
							Explore Our Services
							<i className="icon-chevron-right" />
						</Link> */}
					</div>
					<div className="image-right">
						<div className="image" style={{ borderRadius: "16px" }}>
							<Image
								width="0"
								height="0"
								sizes="100vw"
								style={{ width: "100%", height: "auto", }}
								src="/images/section/cfo-1.svg" data-src="/images/section/cfo-1.svg" alt="" className="lazyload" />
						</div>
					</div>
				</div>
				<div className="content-wrap wrap-2">
					<div className="image-left relative">
						<div className="image " style={{ borderRadius: "16px" }}>
							<Image
								width="0"
								height="0"
								sizes="100vw"
								style={{ width: "100%", height: "auto" }}
								src="/images/section/cfo-2.svg" data-src="/images/section/cfo-2.svg" alt="" className="lazyload" />
						</div>
					</div>
					<div className="content-right">
						<p className="s-title text-anime-wave" style={{ color: "#0b1972" }}>
							Smart Choice for Virtual

							<span style={{ color: "#e6ac41" }}> CFO Excellence</span>
						</p>
						<ul className="list">
							<li className="wow fadeInUp" data-wow-delay="0s">
								<div className="number">
									<p>
										1
									</p>
								</div>
								<div >
									<Link href="/#" className="title" style={{ color: "#0b1972" }}>
										Strategic Decision Support
									</Link>
									<p style={{ color: "#0b1972" }}>
										Turning financial data into clear, actionable insights
										that guide leadership decisions and improve outcomes.

									</p>
								</div>
							</li>
							<li className="wow fadeInUp" data-wow-delay="0s">
								<div className="number">
									<p>
										2
									</p>
								</div>
								<div >
									<Link href="/#" className="title" style={{ color: "#0b1972" }}>
										Data-Driven Forecasting
									</Link>
									<p style={{ color: "#0b1972" }}>
										Planning budgets and predicting growth with precision,
										ensuring smarter investments and optimized performance.
									</p>
								</div>
							</li>
							<li className="wow fadeInUp" data-wow-delay="0s">
								<div className="number">
									<p>
										3
									</p>
								</div>
								<div >
									<Link href="/#" className="title" style={{ color: "#0b1972" }}>
										Sustainable Financial Health
									</Link>
									<p style={{ color: "#0b1972" }}>
										Building long-term financial discipline and compliance
										to support consistent growth and organizational strength.

									</p>
								</div>
							</li>
						</ul>
					</div>
				</div>
			</section>

		</>
	)
}
