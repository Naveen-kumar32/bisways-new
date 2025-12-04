
'use client'
import Image from 'next/image'
import Link from 'next/link'
export default function Section1() {
	return (
		<>

			<section className="s-blog-details">
				<div className="tf-container">
					<div className="row">
						<div className="col-lg-8">
							<div className="content ">

								<h3 style={{ color: '#0b1972' }}>Introduction</h3>
								<p className="text mt-3 mb-20">
									A Tax Audit under Section 44AB of the Income Tax Act is mandatory for businesses and
									professionals who cross specified turnover or gross receipt limits. The audit requires reporting in
									Form 3CD, along with either Form 3CA or Form 3CB, depending on the type of assessee and whether
									statutory books are already audited under another law.
								</p>
								<p className="text mb-20">
									These forms ensure transparency, accuracy of financial information, and compliance with income
									tax requirements.

								</p>
								<p className="text mb-35">
									In this guide, Bisways Consulting Group explains the purpose of these forms, when they apply, and
									how tax audit reporting is carried out.

								</p>
								<h3 style={{ marginTop: "40px", color: '#0b1972' }}>What Is Form 3CD?</h3>
								<br />
								<h6 style={{ color: '#0b1972' }}>Form 3CD is a detailed audit report containing 44 clauses that summarise:</h6>
								<br />
								<ul className="benefit-list style-2">
									<li>
										<div className="icon">
											<i className="icon-check" />
										</div>
										<p>Financial particulars</p>
									</li>
									<li>
										<div className="icon">
											<i className="icon-check" />
										</div>
										<p>Disallowances under Income Tax</p>
									</li>
									<li>
										<div className="icon">
											<i className="icon-check" />
										</div>
										<p>TDS/TCS compliance</p>
									</li>
									<li>
										<div className="icon">
											<i className="icon-check" />
										</div>
										<p>Related-party transactions</p>
									</li>
									<li>
										<div className="icon">
											<i className="icon-check" />
										</div>
										<p>Depreciation</p>
									</li>
									<li>
										<div className="icon">
											<i className="icon-check" />
										</div>
										<p>Inventory valuation</p>
									</li>
									<li>
										<div className="icon">
											<i className="icon-check" />
										</div>
										<p>Loan and borrowing details</p>
									</li>
									<li>
										<div className="icon">
											<i className="icon-check" />
										</div>
										<p>GST reconciliations</p>
									</li>
									<li>
										<div className="icon">
											<i className="icon-check" />
										</div>
										<p>Cash payments and receipts (Rule 6DD)</p>
									</li>
								</ul>

								<p>
									It is the core document of a tax audit and must be certified by a Chartered Accountant.
								</p>

								<br />
								<br />
								<h3 style={{ color: '#0b1972' }}>What Are Form 3CA and Form 3CB?</h3>
								<br />
								<p>The tax auditor attaches Form 3CD to either Form 3CA or Form 3CB, depending on the entity type.</p>
								<br />
								<h5 style={{ color: '#0b1972' }}>Form 3CA</h5>
								<br />
								<p>Used when the assessee’s accounts are already audited under another law, such as:</p>
								<br />
								<ul className="benefit-list style-2">
									<li>
										<div className="icon">
											<i className="icon-check" />
										</div>
										<p>
											Companies (under Companies Act, 2013)
										</p>
									</li>
									<li>
										<div className="icon">
											<i className="icon-check" />
										</div>
										<p>
											LLPs (under LLP Act, if crossing audit limit)
										</p>
									</li>
									<li>
										<div className="icon">
											<i className="icon-check" />
										</div>
										<p>
											Societies and Trusts (under respective laws)
										</p>
									</li>
								</ul>

								<h5 style={{ color: '#0b1972' }}>Form 3CB</h5>
								<br />
								<p>Used when the assessee’s accounts are not audited under any other law, such as:</p>
								<br />
								<ul className="benefit-list style-2">
									<li>
										<div className="icon">
											<i className="icon-check" />
										</div>
										<p>
											Individual businesses
										</p>
									</li>
									<li>
										<div className="icon">
											<i className="icon-check" />
										</div>
										<p>
											Partnership firms
										</p>
									</li>
									<li>
										<div className="icon">
											<i className="icon-check" />
										</div>
										<p>
											Professionals
										</p>
									</li>
									<li>
										<div className="icon">
											<i className="icon-check" />
										</div>
										<p>
											Small enterprises
										</p>
									</li>
								</ul>
								<p>Both forms serve as cover letters for Form 3CD.</p>





								<br />
								<br />
								<h3 style={{ color: '#0b1972' }}>Who Is Required to Undergo Tax Audit Under Section 44AB?</h3>
								<br />
								<p>Tax audit applies to:</p>

								<br />
								<h5 style={{ color: '#0b1972' }}> 1. Businesses</h5>
								<br />
								<ul className="benefit-list style-2">
									<li>
										<div className="icon">
											<i className="icon-check" />
										</div>
										<p>
											If turnover exceeds ₹1 crore, or
										</p>
									</li>
									<li>
										<div className="icon">
											<i className="icon-check" />
										</div>
										<p>
											₹10 crore where 95% digital transactions condition is met
										</p>
									</li>
								</ul>


								<h5 style={{ color: '#0b1972' }}>2. Professionalss</h5>
								<br />
								<ul className="benefit-list style-2">
									<li>
										<div className="icon">
											<i className="icon-check" />
										</div>
										<p>
											If gross receipts exceed ₹50 lakh
										</p>
									</li>
								</ul>

								<br />
								<h5 style={{ color: '#0b1972' }}>3. Persons opting out of Presumptive Taxation</h5>
								<br />
								<h6>Under Sections:</h6>
								<br />
								<ul className="benefit-list style-2">
									<li>
										<div className="icon">
											<i className="icon-check" />
										</div>
										<p>
											44AD
										</p>
									</li>
									<li>
										<div className="icon">
											<i className="icon-check" />
										</div>
										<p>
											44ADA
										</p>
									</li>
									<li>
										<div className="icon">
											<i className="icon-check" />
										</div>
										<p>
											44AE
										</p>
									</li>
								</ul>



								<h3 style={{ color: '#0b1972' }}> Key Clauses in Form 3CD</h3>

								<br /><br />

								<div className="entry-table mb-40">

									<table
										style={{
											width: "100%",
											borderCollapse: "collapse",
											fontSize: "18px",
										}}
									>
										<thead>
											<tr>
												<th
													style={{
														background: "#0b1972",
														color: "white",
														padding: "14px 18px",
														textAlign: "left",
														fontWeight: 600,
														fontSize: "20px",
													}}
												>
													Clause
												</th>
												<th
													style={{
														background: "#0b1972",
														color: "white",
														padding: "14px 18px",
														textAlign: "left",
														fontWeight: 600,
														fontSize: "20px",
													}}
												>
													What It Covers
												</th>
											</tr>
										</thead>

										<tbody>
											{[
												["Clause 18", "Depreciation computation"],
												["Clause 21", "Cash payments disallowed u/s 40A(3)"],
												["Clause 26", "TDS/TCS compliance"],
												["Clause 27", "GST turnover reconciliation"],
												["Clause 31", "Cash receipts/payments above limits"],
												["Clause 34", "TDS returns and challan details"],
												["Clause 41", "Details of demands, refunds, and penalties"]

											].map((row, i) => (
												<tr key={i}>
													<td
														style={{
															background: "#e6ac41",
															color: "black",
															padding: "14px 18px",
															borderBottom: "2px solid black",
															verticalAlign: "top",
															fontWeight: 500,
														}}
													>
														{row[0]}
													</td>

													<td
														style={{
															background: "#ffffffff",
															color: "black",
															padding: "14px 18px",
															borderBottom: "2px solid black",
															verticalAlign: "top",
															fontWeight: 500,
														}}
													>
														{row[1]}
													</td>
												</tr>
											))}
										</tbody>
									</table>

								</div>
								<br />
								<p>A tax auditor verifies these sections thoroughly based on books and supporting records.</p>
								<br />



								<br />
								<br />
								<h3 style={{ color: '#0b1972' }}>Step-by-Step Tax Audit Filing Process</h3>
								<br />
								<br />
								<h5 style={{ color: '#0b1972' }}>Step 1: Preparation of Financial Statements</h5>
								<p>Collect profit & loss statement, balance sheet, ledgers, and trial balance. </p>
								<br />
								<h5 style={{ color: '#0b1972' }}>Step 2: Review of Books by Auditor</h5>
								<p>Auditor reviews accuracy, internal controls, and compliance.</p>
								<br />
								<h5 style={{ color: '#0b1972' }}>Step 3: Filling Form 3CD</h5>
								<p>Auditor enters detailed information across 44 clauses.</p>
								<br />
								<h5 style={{ color: '#0b1972' }}>Step 4: Choose Form 3CA or 3CB</h5>
								<p>Based on whether statutory audit exists.</p>
								<br />
								<h5 style={{ color: '#0b1972' }}>Step 5: Upload on Income Tax Portal</h5>
								<p>Auditor uploads the forms using DSC.</p>
								<br />
								<h5 style={{ color: '#0b1972' }}>Step 6: Assessee Approval</h5>
								<p>The taxpayer must accept and approve the form digitally.</p>
								<br />

								<br />
								<h3 style={{ color: '#0b1972' }}>Common Issues Found During Tax Audit</h3>
								<br />

								<ul className="benefit-list style-2">
									<li>
										<div className="icon">
											<i className="icon-check" />
										</div>
										<p>Incorrect depreciation calculation</p>
									</li>
									<li>
										<div className="icon">
											<i className="icon-check" />
										</div>
										<p>Cash transactions violating Section 40A(3)</p>
									</li>
									<li>
										<div className="icon">
											<i className="icon-check" />
										</div>
										<p>Mismatch between GST turnover and books</p>
									</li>
									<li>
										<div className="icon">
											<i className="icon-check" />
										</div>
										<p>Incomplete TDS deduction or late filings</p>
									</li>
									<li>
										<div className="icon">
											<i className="icon-check" />
										</div>
										<p>Undisclosed related-party transactions</p>
									</li>
									<li>
										<div className="icon">
											<i className="icon-check" />
										</div>
										<p>Unreconciled bank statements</p>
									</li>
									<li>
										<div className="icon">
											<i className="icon-check" />
										</div>
										<p>Errors in stock valuation</p>
									</li>
								</ul>
								<br />

								<br />
								<h3 style={{ color: '#0b1972' }}>Why Tax Audit Matters</h3>
								<br />

								<ul className="benefit-list style-2">
									<li>
										<div className="icon">
											<i className="icon-check" />
										</div>
										<p>Ensures accuracy of income reporting</p>
									</li>
									<li>
										<div className="icon">
											<i className="icon-check" />
										</div>
										<p>Avoids tax disallowances and penalties</p>
									</li>
									<li>
										<div className="icon">
											<i className="icon-check" />
										</div>
										<p>Helps maintain clean business records</p>
									</li>
									<li>
										<div className="icon">
											<i className="icon-check" />
										</div>
										<p>Strengthens credibility with banks and investors</p>
									</li>
									<li>
										<div className="icon">
											<i className="icon-check" />
										</div>
										<p>Prevents non-compliance under GST and Income Tax</p>
									</li>
									<li>
										<div className="icon">
											<i className="icon-check" />
										</div>
										<p>Supports transparent governance</p>
									</li>
								</ul>


								<br />
								<br />
								<h3 style={{ color: '#0b1972' }}>Conclusion</h3>
								<br />
								<p>Tax Audit under Section 44AB plays a vital role in maintaining transparent financial reporting and
									legal compliance. Whether filed through Form 3CA or Form 3CB, the core audit report in Form 3CD
									helps businesses identify risks, correct errors, and prepare accurate financial statements.</p>

								<br />
								<br />
								<p>Bisways Consulting Group provides end-to-end tax audit support, from preparing accounts to filing
									Forms 3CA/3CB and 3CD on the Income Tax Portal — ensuring timely and compliant reporting.</p>

								<br /><br />
								<span className="line" />
								<div className="bot mb-70">
									<div className="tags">
										<h6>
											Tags :
										</h6>
										<Link href="" >Form 3CD | Form 3CA | Form 3CB | Section 44AB</Link>

									</div>
									<div className="socials">
										<h6>
											Share
										</h6>
										<ul className="social-list style-2">
  <li><i   className="icon-facebook" /></li>
  <li><i  className="icon-twitter" /></li>
  <li><i className="fab fa-instagram" /></li>
  <li><i  className="icon-youtube" /></li>
</ul>
									</div>
								</div>


							</div>

						</div>

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
										<h5 className="title">Category</h5>
									</div>
									<div className="sb-content sb-category">
										<ul className="category-list">
											<li>
												<Link href="/#">
													Marketing Consulting
													<i className="icon-chevron-right" />
												</Link>
											</li>
											<li>
												<Link href="/#">
													Resources Consulting
													<i className="icon-chevron-right" />
												</Link>
											</li>
											<li>
												<Link href="/#">
													Management Consulting
													<i className="icon-chevron-right" />
												</Link>
											</li>
											<li>
												<Link href="/#">
													Financial Consulting
													<i className="icon-chevron-right" />
												</Link>
											</li>
											<li>
												<Link href="/#">
													Operations Management
													<i className="icon-chevron-right" />
												</Link>
											</li>
											<li>
												<Link href="/#">
													Management Consulting
													<i className="icon-chevron-right" />
												</Link>
											</li>
										</ul>
									</div>
								</div>
								<div className="sb-item mb-30">
									<div className="sb-title">
										<i className="icon-bolt fs-20 color-main-black" />
										<h5 className="title">Recent News</h5>
									</div>
									<div className="sb-content sb-news">
										<ul className="news-list">
											<li className="tf-hover">
												<div className="image hover-1">
													<img
														width="0"
														height="0"
														sizes="100vw"
														style={{ width: "100%", height: "auto" }}
														src="/images/blog/recent-new-1.jpg" alt="" />
												</div>
												<div className="content">
													<div className="caption">
														<Link href="/#" className="font-main-2">
															Business
															Consulting Can
															Transform
															Company’s
														</Link>
													</div>
													<p className="date">
														20 September 2024
													</p>
												</div>
											</li>
											<li className="tf-hover">
												<div className="image hover-1">
													<img
														width="0"
														height="0"
														sizes="100vw"
														style={{ width: "100%", height: "auto" }}
														src="/images/blog/recent-new-2.jpg" alt="" />
												</div>
												<div className="content">
													<div className="caption">
														<Link href="/#" className="font-main-2">
															Business
															Consulting Can
															Transform
															Company’s
														</Link>
													</div>
													<p className="date">
														20 September 2024
													</p>
												</div>
											</li>
											<li className="tf-hover">
												<div className="image hover-1">
													<img
														width="0"
														height="0"
														sizes="100vw"
														style={{ width: "100%", height: "auto" }}
														src="/images/blog/recent-new-3.jpg" alt="" />
												</div>
												<div className="content">
													<div className="caption">
														<Link href="/#" className="font-main-2">
															Business
															Consulting Can
															Transform
															Company’s
														</Link>
													</div>
													<p className="date">
														20 September 2024
													</p>
												</div>
											</li>
											<li className="tf-hover">
												<div className="image hover-1">
													<img
														width="0"
														height="0"
														sizes="100vw"
														style={{ width: "100%", height: "auto" }}
														src="/images/blog/recent-new-4.jpg" alt="" />
												</div>
												<div className="content">
													<div className="caption">
														<Link href="/#" className="font-main-2">
															Business
															Consulting Can
															Transform
															Company’s
														</Link>
													</div>
													<p className="date">
														20 September 2024
													</p>
												</div>
											</li>
										</ul>
									</div>
								</div>
								<div className="sb-item sb-tag mb-30">
									<div className="sb-title">
										<i className="icon-bolt fs-20 color-main-black" />
										<h5 className="title">Popular Tags</h5>
									</div>
									<div className="sb-content sb-tag">
										<ul className="tag-popular-list">
											<li>
												<Link href="/#">Business</Link>
											</li>
											<li>
												<Link href="/#">Consulting</Link>
											</li>
											<li><Link href="/#">Tech</Link></li>
											<li><Link href="/#">Finance</Link></li>
											<li><Link href="/#">Startup</Link></li>
											<li>
												<Link href="/#">Marketing</Link>
											</li>
											<li>
												<Link href="/#">Management</Link>
											</li>
											<li>
												<Link href="/#">Corporate</Link>
											</li>
										</ul>
									</div>
								</div>
								<div className="sb-item sb-service">
									<div className="tf-overlay" />
									<div className="image">
										<Image
											width="0"
											height="0"
											sizes="100vw"
											style={{ width: "100%", height: "auto" }}
											src="/images/blog/service-sidebar.jpg" alt="" />
									</div>
									<div className="content">
										<p className="font-main-2 text-anime-wave">
											Professional &amp; Experience
											Business
											<span> Services </span>
										</p>
										<Link href="/#" className="tf-btn text-anime-style-1">
											Get Consultation
											<i className="icon-chevron-right" />
										</Link>
									</div>
								</div>
							</div>
						</div>

					</div>
				</div>
			</section>
			<div
				style={{
					width: "100vw",
					// marginBottom: "50px",
					boxSizing: "border-box",
				}}
			>
				<div
					style={{
						maxWidth: "100%",
						// margin: "0 auto",
						backgroundColor: "#0b1972",
						// borderRadius: "20px",
						padding: "150px 30px",
						textAlign: "center",
					}}
				>
					<div style={{ display: "flex", flexDirection: "column", gap: "25px" }}>

						<p
							style={{
								color: "#e6ac41",
								fontSize: "40px",
								fontWeight: "600",
								lineHeight: "1.2",
								margin: 0,
							}}
						>
							Need help with Tax Audit or filing Forms 3CA/3CB/3CD?
						</p>

						<p
							style={{
								color: "#ffffffff",
								fontSize: "20px",
								maxWidth: "700px",
								margin: "0 auto",
								lineHeight: "1.5",
							}}
						>
							Connect with Bisways Consulting Group — your trusted partner for Tax Audit, Accounting, and
							Compliance Support.
						</p>

						<div style={{ display: "flex", justifyContent: "center" }}>
							<Link
								href="https://bisways.zohobookings.com/#/booking"
								className="tf-btn style-13 text-anime-style-1"
								target="_blank"
								rel="noopener noreferrer"
							>
								Schedule a Free Consultation
								<i className="icon-chevron-right" />
							</Link>
						</div>

					</div>
				</div>
			</div>
			<div className="tf-marquee slider-saylo style-2">
				<div className="wrap-marquee">
					<div className="marquee-item">
						<p className="font-main-2 text">
							Bisways Consulting Group
						</p>
					</div>
					<div className="marquee-item">
						<p className="font-main-2 text">
							Bisways Consulting Group
						</p>
					</div>
					<div className="marquee-item">
						<p className="font-main-2 text">
							Bisways Consulting Group
						</p>
					</div>
					<div className="marquee-item">
						<p className="font-main-2 text">
							Bisways Consulting Group
						</p>
					</div>
					<div className="marquee-item">
						<p className="font-main-2 text">
							Bisways Consulting Group
						</p>
					</div>
					<div className="marquee-item">
						<p className="font-main-2 text">
							Bisways Consulting Group
						</p>
					</div>
					<div className="marquee-item">
						<p className="font-main-2 text">
							Bisways Consulting Group
						</p>
					</div>
					<div className="marquee-item">
						<p className="font-main-2 text">
							Bisways Consulting Group
						</p>
					</div>
					<div className="marquee-item">
						<p className="font-main-2 text">
							Bisways Consulting Group
						</p>
					</div>
					<div className="marquee-item">
						<p className="font-main-2 text">
							Bisways Consulting Group
						</p>
					</div>
				</div>
			</div>
			<style jsx>{`
  .social-list.style-2 li {
    width: 35px;
    height: 35px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    border: 1.2px solid var(--Border-2);
    cursor: pointer;
    transition: all 0.3s ease;
  }

  .social-list.style-2 li:hover {
    background-color: black;
    border-color: black;
  }

  .social-list.style-2 li i {
    font-size: 12px;
    color: black;
  }

  .social-list.style-2 li:hover i {
    color: white;
  }
`}</style>

		</>
	)
}
