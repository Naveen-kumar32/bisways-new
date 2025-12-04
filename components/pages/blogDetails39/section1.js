
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
									GST return filing in India involves multiple forms, but the two most critical monthly filings for regular
									taxpayers are GSTR-1 and GSTR-3B.
									<br />
									Understanding the difference between these two returns—and how they work together—is essential
									for accurate reporting, preventing mismatches, and avoiding interest or penalties.
									<br />
									This guide simplifies GSTR-1 and GSTR-3B filing, explains their individual roles, highlights key
									differences, and covers best practices for reconciliation.
								</p>



								<h3 style={{ marginTop: "40px", color: '#0b1972' }}>What Is GSTR-1?</h3>
								<br />
								<p> GSTR-1 is a statement of outward supplies filed by every registered taxpayer.</p>

								<br />
								<p>It contains:</p>
								<br />

								<ul className="benefit-list style-2">
									<li>
										<div className="icon">
											<i className="icon-check" />
										</div>
										<p>Invoice-wise details of B2B sales</p>
									</li>

									<li>
										<div className="icon">
											<i className="icon-check" />
										</div>
										<p>Summary of B2C sales</p>
									</li>

									<li>
										<div className="icon">
											<i className="icon-check" />
										</div>
										<p>Export invoices</p>
									</li>

									<li>
										<div className="icon">
											<i className="icon-check" />
										</div>
										<p>Credit/debit notes</p>
									</li>

									<li>
										<div className="icon">
											<i className="icon-check" />
										</div>
										<p>Amendments relating to previous periods</p>
									</li>
								</ul>

								<h6 style={{ color: '#0b1972' }}>Purpose of GSTR-1</h6>
								<br />
								<ul className="benefit-list style-2">
									<li>
										<div className="icon">
											<i className="icon-check" />
										</div>
										<p>Communicates outward supply data to the government</p>
									</li>

									<li>
										<div className="icon">
											<i className="icon-check" />
										</div>
										<p>Auto-populates invoices in recipients’ GSTR-2A/2B</p>
									</li>

									<li>
										<div className="icon">
											<i className="icon-check" />
										</div>
										<p>Enables claim of input tax credit (ITC) by buyers</p>
									</li>

									<li>
										<div className="icon">
											<i className="icon-check" />
										</div>
										<p>Forms the foundation for GST ecosystem data matching</p>
									</li>
								</ul>



								<h6 style={{ color: '#0b1972' }}> Frequency</h6>
								<br />
								<ul className="benefit-list style-2">
									<li>
										<div className="icon">
											<i className="icon-check" />
										</div>
										<p>Monthly for most taxpayers</p>
									</li>

									<li>
										<div className="icon">
											<i className="icon-check" />
										</div>
										<p>Quarterly under the QRMP scheme</p>
									</li>

								</ul>




								<h3 style={{ marginTop: "40px", color: '#0b1972' }}>What Is GSTR-3B?</h3>
								<br />
								<p>GSTR-3B is a summary self-declaration return where taxpayers:</p>
								<br />
								<ul className="benefit-list style-2">
									<li>
										<div className="icon">
											<i className="icon-check" />
										</div>
										<p>Report total outward supply values</p>
									</li>

									<li>
										<div className="icon">
											<i className="icon-check" />
										</div>
										<p>Claim available input tax credit</p>
									</li>

									<li>
										<div className="icon">
											<i className="icon-check" />
										</div>
										<p>Discharge their monthly tax liability</p>
									</li>
								</ul>
								<p>It does not contain invoice-wise details—only consolidated values.</p>

								<br />

								<h6 style={{ color: '#0b1972' }}>Purpose of GSTR-3B</h6>
								<br />
								<ul className="benefit-list style-2">
									<li>
										<div className="icon">
											<i className="icon-check" />
										</div>
										<p>Enables tax payment for the period</p>
									</li>

									<li>
										<div className="icon">
											<i className="icon-check" />
										</div>
										<p>Ensures compliance even if invoice details are pending</p>
									</li>

									<li>
										<div className="icon">
											<i className="icon-check" />
										</div>
										<p>Acts as a summary of net tax payable</p>
									</li>
								</ul>


								<br />

								<h6 style={{ color: '#0b1972' }}>Frequency</h6>
								<br />
								<ul className="benefit-list style-2">
									<li>
										<div className="icon">
											<i className="icon-check" />
										</div>
										<p>Filed monthly or quarterly depending on the taxpayer category.</p>
									</li>


								</ul>



								<h3 style={{ marginTop: "40px", color: '#0b1972' }}>
									What Is GSTR-3B?
								</h3>
								<br />
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
													Particulars
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
													GSTR-1
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
													GSTR-3B
												</th>

											</tr>
										</thead>

										<tbody>
											{[
												["Type of Return", "Detailed outward supply statement", "Summary return with tax payment"],
												["Details Required", "Invoice-wise reporting", "Consolidated reporting"],
												["Purpose", "Sharing sales data with buyers", "Paying monthly GST liability"],
												["Affects ITC?", "Yes, it updates 2A/2B for buyers", "No, only reflects own ITC usage"],
												["Amendments", "Allowed in subsequent months", "Cannot be amended"],
												["Impact of Errors", "Incorrect invoices affect recipients’ ITC", "Errors may cause extra tax/interest"],
												["Payment Required?", "No", "Yes, through PMT-06 / cash ledger"]

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
														{row[2]}
													</td>
												</tr>
											))}
										</tbody>
									</table>

								</div>


								<h3 style={{ marginTop: "40px", color: '#0b1972' }}>
									Why Both Returns Must Match
								</h3>
								<br />
								<h6 style={{ color: '#0b1972' }}>Mismatch between GSTR-1 and GSTR-3B can lead to:</h6>
								<br />

								<ul className="benefit-list style-2">
									<li>
										<div className="icon">
											<i className="icon-check" />
										</div>
										<p>Notices under Sections 73/74</p>
									</li>

									<li>
										<div className="icon">
											<i className="icon-check" />
										</div>
										<p>Automated system-generated demands</p>
									</li>

									<li>
										<div className="icon">
											<i className="icon-check" />
										</div>
										<p>ITC reversals</p>
									</li>

									<li>
										<div className="icon">
											<i className="icon-check" />
										</div>
										<p>Interest and penalty</p>
									</li>
								</ul>

								<p>Matching outward supplies in both returns ensures smooth GST compliance.</p>




								<h3 style={{ marginTop: "40px", color: '#0b1972' }}>
									Common Mismatches & How to Avoid Them
								</h3>
								<br />

								<h6 style={{ color: '#0b1972' }}>1. Sales Shown in GSTR-1 but Not in GSTR-3B</h6>
								<br />
								<p>This leads to underpayment of tax → interest chargeable.</p>
								<br />
								<h6 style={{ color: '#0b1972' }}>Solution:</h6>
								<br />
								<p>Reconcile monthly and adjust differences immediately.</p>
								<br />

								<h6 style={{ color: '#0b1972' }}>2. Excess Liability Reported in GSTR-3B</h6>
								<br />
								<p>This causes tax overpayment.</p>
								<br />
								<h6 style={{ color: '#0b1972' }}>Solution:</h6>
								<br />
								<p>Claim refund from excess cash ledger or adjust in next month’s return.</p>
								<br />

								<h6 style={{ color: '#0b1972' }}>3. Credit/Debit Notes Missed</h6>
								<br />
								<p>Omission impacts tax liability and buyer ITC.</p>
								<br />
								<h6 style={{ color: '#0b1972' }}>Solution:</h6>
								<br />
								<p>Include all adjustments in both returns for the same period.</p>
								<br />

								<h6 style={{ color: '#0b1972' }}>4. Reporting Zero-rated Supplies Incorrectly</h6>
								<br />
								<p>Exports or SEZ supplies often mismatch between returns.</p>
								<br />
								<h6 style={{ color: '#0b1972' }}>Solution:</h6>
								<br />
								<p>Maintain separate registers for zero-rated transactions.</p>



								<h3 style={{ marginTop: "40px", color: '#0b1972' }}>
									Best Practices for GSTR-1 & GSTR-3B Reconciliation
								</h3>
								<br />

								<ul className="benefit-list style-2">
									<li>
										<div className="icon">
											<i className="icon-check" />
										</div>
										<p>Reconcile outward supplies monthly before filing</p>
									</li>

									<li>
										<div className="icon">
											<i className="icon-check" />
										</div>
										<p>Match e-way bills with sales data</p>
									</li>

									<li>
										<div className="icon">
											<i className="icon-check" />
										</div>
										<p>Verify advances, export invoices, and debit/credit notes</p>
									</li>

									<li>
										<div className="icon">
											<i className="icon-check" />
										</div>
										<p>Check GSTR-2B before filing 3B for accurate ITC</p>
									</li>

									<li>
										<div className="icon">
											<i className="icon-check" />
										</div>
										<p>Maintain internal sales registers and automated GST software reports</p>
									</li>

									<li>
										<div className="icon">
											<i className="icon-check" />
										</div>
										<p>Respond promptly to mismatch notices</p>
									</li>
								</ul>



								<br />
								<h3 style={{ color: '#0b1972' }}>Conclusion</h3>
								<br />
								<p>GSTR-1 and GSTR-3B serve different but interconnected purposes in GST compliance.
									While GSTR-1 ensures accurate reporting of outward supplies, GSTR-3B enables tax payment and
									summarised monthly reporting. Filing both accurately and reconciling them regularly helps avoid
									mismatches, interest, penalties, and system-generated notices.
									<br />
									<br />
									Bisways Consulting Group provides expert assistance in GST return filing, reconciliation, mismatch
									resolution, and compliance management to ensure your business stays fully compliant.</p>

								<br />
								<br /><span className="line" />
								<div className="bot mb-70">
									<div className="tags">
										<h6>
											Tags :
										</h6>
										<Link href="" >GSTR-1 | GSTR-3B | Return Filing | Reconciliation</Link>

									</div>
									<div className="socials">
										<h6>
											Share
										</h6>
										<ul className="social-list style-2">
  <li><i   className="icon-facebook" /></li>
  <li><i  className="icon-twitter" /></li>
  <li><i className="fab fa-instagram" /></li>
  <li><i  className="icon-linkedin" /></li>
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
							Need help reconciling GSTR-1 and GSTR-3B?
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
							Connect with Bisways Consulting Group — your trusted partner for GST Filing, Reconciliation, and
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
