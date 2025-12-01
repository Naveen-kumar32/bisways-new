import Link from 'next/link'

export default function Section1() {

	const blogItems = [

		{
			title: "Understanding TCS under Section 206C – Collection at Source Explained",
			date: "February 14, 2023",
			desc: "Explains how businesses collect TCS on sale of goods, vehicles and foreign remittances under Section 206C.",
			link: "/blog-details51"
		},
		{
			title: "Monthly Financial Reports Every Business Should Prepare",
			date: "May 21, 2023",
			desc: "Covers key MIS reports such as P&L, Cash Flow, Receivables, Payables and Variance Analysis for better decision-making.",
			link: "/blog-details52"
		},
		{
			title: "Why Cash Flow Matters More Than Profit",
			date: "August 10, 2023",
			desc: "Explains why consistent cash flow is more critical than accounting profit for growth, stability and working capital.",
			link: "/blog-details53"
		},
		{
			title: "Difference Between Bookkeeping and Accounting – A Practical Overview",
			date: "November 6, 2023",
			desc: "Differentiates bookkeeping from accounting by explaining transaction recording, reporting and financial analysis.",
			link: "/blog-details54"
		},
		{
			title: "Understanding Audit Trails and Internal Controls for Companies",
			date: "March 8, 2024",
			desc: "Highlights MCA mandate on maintaining audit trails in accounting software and importance of internal controls.",
			link: "/blog-details55"
		},
		{
			title: "How to Prepare for a Statutory Audit – Checklist for Businesses (2025 Edition)",
			date: "January 23, 2025",
			desc: "Audit preparation checklist: ledgers, bank statements, GST records and documents required for statutory audits.",
			link: "/blog-details56"
		},
		{
			title: "How to Register a Private Limited Company in India (2025 Guide)",
			date: "January 12, 2025",
			desc: "Step-by-step guide to register a Private Limited Company using SPICe+. Covers DSC, DIN, costs and compliance.",
			link: "/blog-details57"
		}
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

							<Link href="/blog-5" className="btn-next-pagination">
								<i className="icon-arrow-left fs-12">
								</i>
								Previous

							</Link>
							<ul>

								<li><Link href="/blog-4" >4</Link></li>
								<li><Link href="/blog-5" >5</Link></li>
								<li><Link href="#" className="active" style={{ pointerEvents: "none" }}>6</Link></li>
							</ul>
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






