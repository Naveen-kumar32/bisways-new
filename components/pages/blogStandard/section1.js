import Link from 'next/link'

export default function Section1() {

	const blogItems = [
		{
			title: "Understanding the Role of a Virtual CFO in Modern Businesses",
			date: "November 5, 2021",
			desc: "A Virtual CFO provides strategic financial guidance, reporting, and cost control for growing businesses that don’t have a full-time finance head.",
			link: "/blog-details01"
		},
		{
			title: "How to Read and Analyse a Profit & Loss Statement",
			date: "August 14, 2021",
			desc: "Learn how to interpret your P&L statement effectively — identify revenue patterns, track costs, and assess business profitability.",
			link: "/blog-details02"
		},
		{
			title: "GST Annual Return (Form GSTR-9) – Who Should File & How?",
			date: "February 20, 2023",
			desc: "A complete guide to GSTR-9 filing for FY 2021-22 — eligibility, deadlines, reconciliation, and how to avoid late fees or mismatches.",
			link: "/blog-details03"
		},
		{
			title: "Input Tax Credit (ITC) – Eligibility, Conditions & Common Mistakes",
			date: "December 5, 2022",
			desc: "Understand how to claim ITC correctly under amended Rule 36(4), including documentation, restrictions, and reconciliation tips.",
			link: "/blog-details04"
		},
		{
			title: "ROC Annual Filings for Companies & LLPs – A Complete Checklist",
			date: "October 12, 2022",
			desc: "Step-by-step ROC filing guide covering AOC-4, MGT-7 and ADT-1 under the MCA V3 portal update.",
			link: "/blog-details05"
		},
		{
			title: "How to File Your Income Tax Return (ITR) – A Step-by-Step Guide",
			date: "July 18, 2023",
			desc: "Covers ITR types, filing process, deadlines, and common errors for AY 2023-24 individual and business taxpayers.",
			link: "/blog-details06"
		},
		{
			title: "Understanding Form 26AS, AIS & TIS – Matching Income Before ITR Filing",
			date: "March 10, 2023",
			desc: "Explains how to reconcile income data using 26AS, AIS and TIS reports after the CBDT 2022 update to avoid ITR mismatches.",
			link: "/blog-details07"
		},
		{
			title: "How to Draft a Founders’ Agreement – Must-Have Clauses & Common Mistakes",
			date: "September 25, 2023",
			desc: "Outlines key clauses in founders’ agreements, equity distribution, and legal safeguards for early-stage startups.",
			link: "/blog-details08"
		},
		{
			title: "GST Registration – Who Needs It and How to Apply (2025 Edition)",
			date: "January 12, 2025",
			desc: "Step-by-step GST registration guide updated for 2025 Budget revisions — eligibility, documents, and approval workflow.",
			link: "/blog-details09"
		},
		{
			title: "Understanding TDS (Tax Deducted at Source) – Process, Forms & Due Dates",
			date: "June 8, 2024",
			desc: "Covers TDS deduction mechanism, quarterly return forms and penalty rules as per FY 2023-24 updates.",
			link: "/blog-details10"
		},
		{
			title: "Key Differences Between LLP and Private Limited Company",
			date: "March 22, 2022",
			desc: "Explains how LLPs and Private Limited Companies differ in compliance, ownership, and taxation to help you choose the right structure.",
			link: "/blog-details11"
		},
		{
			title: "Understanding MCA Form INC-20A – Declaration for Commencement of Business",
			date: "May 9, 2022",
			desc: "Covers the importance of filing INC-20A within 180 days, required documents, and penalties for delay after company incorporation.",
			link: "/blog-details12"
		},
		{
			title: "Important Due Dates for Tax & ROC Filings in FY 2022-23",
			date: "October 1, 2022",
			desc: "A comprehensive calendar of ITR, GST, TDS, and ROC filing deadlines to help businesses stay compliant throughout FY 2022-23.",
			link: "/blog-details13"
		},
		{
			title: "Form DPT-3 Filing – Loans and Advances Reporting for Companies",
			date: "June 17, 2023",
			desc: "Explains when DPT-3 is required, how to calculate outstanding loans, and what details companies must report each June.",
			link: "/blog-details14"
		},
		{
			title: "Difference Between 80G and 12A Registration for NGOs and Trusts",
			date: "July 4, 2023",
			desc: "Clarifies the purpose and benefits of 80G and 12A registrations, their renewal timelines, and how they affect donor tax benefits.",
			link: "/blog-details15"
		},
		{
			title: "Understanding Form CSR-1 – Mandatory Filing for Corporate Social Responsibility",
			date: "August 21, 2023",
			desc: "Describes CSR-1 filing procedure, eligibility, and CSR fund utilisation norms under MCA rules and Companies Act 2023.",
			link: "/blog-details16"
		},
		{
			title: "Form MSME-1 Filing – Reporting of Vendor Payments Beyond 45 Days",
			date: "November 16, 2023",
			desc: "Outlines MSME-1 filing steps for companies delaying vendor payments, including due dates and penalties under MSMED Act.",
			link: "/blog-details17"
		},
		{
			title: "DIR-3 KYC – Director Verification and Annual KYC Process",
			date: "April 8, 2024",
			desc: "Explains DIR-3 KYC requirements, forms (online vs web), and deactivation consequences for non-filing by directors.",
			link: "/blog-details18"
		},
		{
			title: "Understanding Form ADT-1 – Auditor Appointment Filing",
			date: "June 3, 2024",
			desc: "Details the process for auditor appointment under Section 139 of the Companies Act and how to file Form ADT-1 on the MCA portal.",
			link: "/blog-details19"
		},
		{
			title: "Digital Signature Certificate (DSC) – Types, Uses & How to Apply (2025 Guide)",
			date: "January 17, 2025",
			desc: "Explains the role of DSCs in MCA, GST and tender filings, including renewal and certifying authority guidelines for 2025.",
			link: "/blog-details20"
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
												<p style={{ fontWeight: "600", margin: 0 }}>Published:</p>
											</div>

											<p style={{ margin: 0 }}>{item.date}</p>

											<div
												style={{
													width: "2px",
													height: "20px",
													backgroundColor: "black",
												}}
											></div>

											<p style={{ margin: 0 }}>By Bisways Consulting Group</p>
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

						
							<ul>

								<li><Link href="/#" className="active">1</Link></li>
								<li><Link href="/blog-2" >2</Link></li>
							</ul>
							<Link href="/blog-2" className="btn-next-pagination">
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
