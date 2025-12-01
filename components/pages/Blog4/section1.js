import Link from 'next/link'

export default function Section1() {

	const blogItems = [

		{
			title: "Difference Between Proprietorship, Partnership, LLP and Private Limited Company",
			date: "January 27, 2022",
			desc: "Compares major business structures in India — ownership, compliance, and tax implications.",
			link: "/blog-details31"
		},
		{
			title: "Form DIR-12 – Appointment and Resignation of Directors",
			date: "April 13, 2022",
			desc: "Explains how to file Form DIR-12 for director appointments, resignations, and changes under the Companies Act 2013.",
			link: "/blog-details32"
		},
		{
			title: "Form 9A and 10 – Accumulation of Income for Charitable Trusts",
			date: "July 4, 2022",
			desc: "Describes how charitable trusts use Form 9A and Form 10 to accumulate income and claim exemption under Section 11(2).",
			link: "/blog-details33"
		},
		{
			title: "Understanding GST Refund Process for Exporters and Input Credit",
			date: "November 20, 2022",
			desc: "Covers how exporters and businesses can claim GST refunds for unutilised ITC or inverted duty structure.",
			link: "/blog-details34"
		},
		{
			title: "Form INC-22 – Change of Registered Office Address",
			date: "January 19, 2023",
			desc: "Explains procedure for changing a company’s registered office address and filing Form INC-22.",
			link: "/blog-details35"
		},
		{
			title: "Understanding Form 16 and 16A – Salary and Non-Salary TDS Certificates",
			date: "June 15, 2023",
			desc: "Details differences between Form 16 and Form 16A, TDS reporting, and certificate verification.",
			link: "/blog-details36"
		},
		{
			title: "FSSAI Registration – Who Needs It & How to Apply (2025 Guide)",
			date: "January 20, 2025",
			desc: "Guide for food businesses on obtaining FSSAI registration and licences under 2025 rules.",
			link: "/blog-details37"
		},
		{
			title: "GST Payment Challan (Form PMT-06) – Step-by-Step Process",
			date: "March 10, 2023",
			desc: "Explains how to generate and pay GST challan using Form PMT-06 including interest and error correction.",
			link: "/blog-details38"
		},
		{
			title: "Difference Between GSTR-1 and GSTR-3B – Filing Simplified",
			date: "June 21, 2023",
			desc: "Simplifies GST filing by explaining differences between GSTR-1 and GSTR-3B and reconciliation best practices.",
			link: "/blog-details39"
		},
		{
			title: "GST Composition Scheme – Benefits, Limits and Compliance",
			date: "November 4, 2023",
			desc: "Describes eligibility, turnover limits and benefits under the GST composition scheme for small businesses.",
			link: "/blog-details40"
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

							<Link href="/blog-3" className="btn-next-pagination">
								<i className="icon-arrow-left fs-12">
								</i>
								Previous

							</Link>
							<ul>

								<li><Link href="/#" className="active">4</Link></li>
								<li><Link href="/blog-5" >5</Link></li>
							</ul>
							<Link href="/blog-5" className="btn-next-pagination">
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






