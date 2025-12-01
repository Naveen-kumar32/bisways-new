import Link from 'next/link'

export default function Section1() {

	const blogItems = [
		{
			title: "ROC Annual Filings for OPC – A Complete Compliance Guide",
			date: "September 14, 2022",
			desc: "Explains annual compliance for One Person Companies, including AOC-4, MGT-7A filing and director responsibilities under Companies Act 2013.",
			link: "/blog-details21"
		},
		{
			title: "Form AOC-4 and MGT-7 – Step-by-Step Annual Filing Process",
			date: "October 11, 2022",
			desc: "Covers how to prepare and file AOC-4 and MGT-7 forms for companies and LLPs, including due dates and common errors to avoid.",
			link: "/blog-details22"
		},
		{
			title: "Form DRC-03 – Voluntary Payment under GST",
			date: "February 28, 2023",
			desc: "Explains the procedure to make voluntary payments, interest, or penalties under GST using Form DRC-03.",
			link: "/blog-details23"
		},
		{
			title: "Understanding GSTR-2B and GSTR-3B Reconciliation",
			date: "March 25, 2023",
			desc: "Describes how to reconcile input tax credit between GSTR-2B and GSTR-3B to prevent mismatches and ensure ITC accuracy.",
			link: "/blog-details24"
		},
		{
			title: "Difference Between Section 8 Company and NGO Trust",
			date: "May 9, 2023",
			desc: "Clarifies the differences in registration, taxation, and governance between Section 8 companies and charitable trusts in India.",
			link: "/blog-details25"
		},
		{
			title: "Form 15CA & 15CB – Foreign Remittance Reporting Explained",
			date: "July 12, 2023",
			desc: "Covers the procedure for making foreign remittances under the Income Tax Act and the role of CA certification in Form 15CB.",
			link: "/blog-details26"
		},
		{
			title: "Understanding Tax Audit Form 3CD and Form 3CA/3CB",
			date: "October 4, 2023",
			desc: "Explains audit reporting requirements under Section 44AB, differences between Form 3CA and 3CB, and key clauses in Form 3CD.",
			link: "/blog-details27"
		},
		{
			title: "Difference Between ITR-4 and ITR-3 – Which One Should You File?",
			date: "May 17, 2024",
			desc: "Compares ITR-3 and ITR-4 forms, eligibility criteria, and how presumptive income taxation under Section 44ADA impacts taxpayers.",
			link: "/blog-details28"
		},
		{
			title: "Understanding Form 10A and 10AB – NGO Revalidation Process",
			date: "August 22, 2024",
			desc: "Details the 12A/80G revalidation process for charitable trusts and NGOs introduced through Forms 10A and 10AB.",
			link: "/blog-details29"
		},
		{
			title: "Filing Form 10E – Relief for Salary Arrears and Past Dues",
			date: "November 18, 2024",
			desc: "Explains how employees can claim tax relief under Section 89(1) for arrears by filing Form 10E before submitting their ITR.",
			link: "/blog-details30"
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

							<Link href="/blog-2" className="btn-next-pagination">
								<i className="icon-arrow-left fs-12">
								</i>
								Previous

							</Link>
							<ul>
								<li><Link href="/blog-2" >2</Link></li>
								<li><Link href="#" className="active" style={{ pointerEvents: "none" }}>3</Link></li>
								<li><Link href="/blog-4" >4</Link></li>
							</ul>
							<Link href="/blog-4" className="btn-next-pagination">
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






