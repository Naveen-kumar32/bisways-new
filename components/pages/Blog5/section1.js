import Link from 'next/link'

export default function Section1() {

	const blogItems = [
		{
			title: "Difference Between Form 15G and 15H – Avoiding TDS on Interest Income",
			date: "February 9, 2022",
			desc: "Explains how individuals and senior citizens can use Form 15G/15H to avoid TDS deduction on bank or FD interest income.",
			link: "/blog-details41"
		},
		{
			title: "Form 26QB – TDS on Purchase of Property (Section 194-IA)",
			date: "May 12, 2022",
			desc: "Guides buyers on deducting 1% TDS while purchasing property above ₹50 lakhs and filing Form 26QB online.",
			link: "/blog-details42"
		},
		{
			title: "Section 194C vs 194J – TDS on Contract and Professional Payments",
			date: "August 25, 2022",
			desc: "Compares TDS rates and thresholds for contractual and professional service payments under Sections 194C and 194J.",
			link: "/blog-details43"
		},
		{
			title: "Understanding Advance Tax Payment Schedule for Businesses and Professionals",
			date: "December 14, 2022",
			desc: "Explains advance tax installments, due dates and interest calculation under Sections 208–211 for FY 2022-23.",
			link: "/blog-details44"
		},
		{
			title: "Understanding Form 10IE – Opting for the New Tax Regime under Section 115BAC",
			date: "March 7, 2023",
			desc: "Details procedure for individuals and HUFs to choose the new tax regime by filing Form 10IE before ITR submission.",
			link: "/blog-details45"
		},
		{
			title: "Difference Between Old and New Tax Regimes – Which One Should You Choose?",
			date: "May 29, 2023",
			desc: "Compares deductions, tax slabs and benefits under old vs new tax regimes with budget 2023 examples.",
			link: "/blog-details46"
		},
		{
			title: "Understanding GST E-Invoice and QR Code System for Businesses",
			date: "October 16, 2023",
			desc: "Explains how GST e-invoicing works, turnover thresholds and QR code requirements issued by the CBIC.",
			link: "/blog-details47"
		},
		{
			title: "How to Register on the Udyam Portal for MSME Recognition",
			date: "December 8, 2023",
			desc: "Complete guide to Udyam MSME registration including eligibility criteria and benefits for small businesses.",
			link: "/blog-details48"
		},
		{
			title: "GST Amnesty Scheme 2024 – Waiver of Late Fees and Penalties",
			date: "April 3, 2024",
			desc: "Summarises the 2024 GST amnesty scheme providing relief to taxpayers for non-filing of GSTR returns before FY 2021-22.",
			link: "/blog-details49"
		},
		{
			title: "Filing Form DPT-1 – Return of Deposits by Companies (2025 Update)",
			date: "January 6, 2025",
			desc: "Explains annual DPT-1 requirements for reporting company deposits and loan status under 2025 ROC rules.",
			link: "/blog-details50"
		},

	];



	return (
		<section className="s-blog-standard" style={{ paddingTop: "50px" }}>
			<div className="tf-container">
				<div className="row">
					<div className="col-lg-8">

						<div className="content-section">

							{blogItems.map((item, index) => (
								<div className="article-blog-item mb-50 tf-hover" key={index}>

									{/* TITLE */}
									<div className="entry-title">
										<Link
											href={item.link}
											className="font-main-2 text-anime-wave"
											style={{ color: "#0b1972", fontSize: "35px", fontWeight: "900" }}
										>
											{item.title}
										</Link>
									</div>

									{/* SHORT DESCRIPTION */}
									<p style={{ fontSize: "20px", marginTop: "10px", color: "black" }}>
										{item.desc}
									</p>

									{/* PUBLISHED + AUTHOR + READ MORE */}
									<div
										style={{
											display: "flex",
											justifyContent: "space-between",
											alignItems: "center",
											borderTop: "1px solid #ddd",
											paddingTop: "15px",
											marginTop: "15px"
										}}
									>
										{/* Left Section */}
										<div style={{ display: "flex", alignItems: "center", gap: "15px" }}>

											<div style={{ display: "flex", alignItems: "center" }}>
												<i className="icon-calendar-days" style={{ marginRight: "6px", color: "red" }} />
												<p style={{ fontWeight: "600" }}>Published:</p>
											</div>

											<p>{item.date}</p>

											<div
												style={{
													width: "2px",
													height: "20px",
													backgroundColor: "black",
												}}
											></div>

											<p>By Bisways Consulting Group</p>
										</div>

										{/* Read More Button */}
										<div>
											<Link href={item.link} className="tf-btn small text-anime-style-1">
												Read More
												<i className="icon-chevron-right" />
											</Link>
										</div>
									</div>

								</div>
							))}

						</div>

						<div className="pagination-section" style={{ marginBottom: "20px" }}>

							<Link href="/blog-4" className="btn-next-pagination">
								<i className="icon-arrow-left fs-12">
								</i>
								Previous

							</Link>
							<ul>
								<li><Link href="/blog-4" >4</Link></li>
								<li><Link href="#" className="active" style={{ pointerEvents: "none" }}>5</Link></li>
								<li><Link href="/blog-6" >6</Link></li>
							</ul>
							<Link href="/blog-6" className="btn-next-pagination">
								Next
								<i className="icon-arrow-right fs-12">
								</i>
							</Link>
						</div>

					</div>

					{/* SIDEBAR stays same if you have it */}
					<div className="col-lg-4">
						<div className="tf-sidebar">
							<div className="sb-item sb-search mb-30">
								<form action="#" className="form-sb-search">
									<fieldset>
										<input type="text" placeholder="Search here" required />
									</fieldset>
									<button type="submit" className="btn-search">
										<i className="icon-search" />
									</button>
								</form>
							</div>
							<div className="sb-item mb-30">
								<div className="sb-title">
									<i className="icon-bolt fs-20 color-main-black" />
									<h5 className="title">
										Category
									</h5>
								</div>
								<div className="sb-content sb-category">
									<ul className="category-list">
										<li>
											<Link href="">
												Marketing Consulting
												<i className="icon-chevron-right" />
											</Link>
										</li>
										<li>
											<Link href="">
												Resources Consulting
												<i className="icon-chevron-right" />
											</Link>
										</li>
										<li>
											<Link href="">
												Management Consulting
												<i className="icon-chevron-right" />
											</Link>
										</li>
										<li>
											<Link href="">
												Financial Consulting
												<i className="icon-chevron-right" />
											</Link>
										</li>
										<li>
											<Link href="">
												Operations Management
												<i className="icon-chevron-right" />
											</Link>
										</li>
										<li>
											<Link href="">
												Management Consulting
												<i className="icon-chevron-right" />
											</Link>
										</li>
									</ul>
								</div>
							</div>

						</div>
					</div>

				</div>
			</div>
		</section>
	);
}






