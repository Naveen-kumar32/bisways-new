
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
									A statutory audit is a mandatory annual requirement for most companies under the Companies Act,
									2013. It ensures that financial statements present a true and fair view of the company’s financial
									position. As businesses move into Financial Year 2024–25, audit preparation has become even more
									important due to evolving accounting standards, GST compliances, MCA updates, and mandatory
									audit trail requirements.
								</p>
								<p className="text mt-3 mb-20">
									A well-structured audit checklist helps businesses avoid delays, reduce queries from auditors,
									ensure smooth verification, and remain fully compliant with statutory norms.
								</p>
								<p className="text mt-3 mb-20">
									This guide provides a 2025-ready audit preparation checklist covering ledgers, reconciliations, tax	
									records, and essential documentation.
								</p>

								<h3 style={{ marginTop: "40px", color: '#0b1972' }}>What Is a Statutory Audit?</h3>
								<br />
									<p className="text ">
										A statutory audit is an independent examination of a company’s financial records conducted by a
										qualified Chartered Accountant (CA) as mandated by law.
									</p>
									<br/>
									<p className="text "><strong>The purpose of the audit is to:</strong></p>
									<br />	
										<p className="text ">✔ Ensure accuracy of financial statements</p>
										<p className="text ">✔ Verify compliance with accounting standards</p>
										<p className="text ">✔ Detect misstatements or irregularities</p>
										<p className="text ">✔ Strengthen financial controls</p>
										<p className="text ">✔ Provide assurance to shareholders, lenders, and regulators</p>
									<br/>
								
								<h3 style={{ marginTop: "40px", color: '#0b1972' }}>Complete Statutory Audit Checklist (2025 Edition)</h3>
								<br/>
								<p className="text "><strong>1. Basic Company Information & Corporate Records</strong></p>
								<br />	
								<p className="text ">Prepare and organise:</p>
								<br />
									<p className="text "> ● Certificate of Incorporation</p>
									<p className="text "> ● MoA & AoA</p>
									<p className="text "> ● Board resolutions</p>
									<p className="text "> ● Shareholding register</p>
									<p className="text "> ● Minutes of Board & AGM meetings</p>
									<p className="text "> ● Statutory registers (as applicable)</p>

								<br/>
								<p className="text ">This requirement applies to all companies, including private, public, small, and OPCs</p>
								<br />	

								<p className="text "><strong>2. Trial Balance & Ledgers</strong></p>
								<br />	
								<p className="text ">Ensure the following are ready:</p>
								<br />
									<p className="text "> ● Current year trial balance</p>
									<p className="text "> ● Ledger-wise details</p>
									<p className="text "> ● Adjusting entries (provisions, depreciation, accruals)</p>
									<p className="text "> ● Opening balance verification</p>
									<p className="text "> ● Year-end closing entries</p>
								<br/>
								<p className="text "><strong>3. Bank Records & Reconciliation</strong></p>
								<br />	
								<p className="text ">A major audit focus area.</p>
								<br />
									<p className="text "> ✔ Bank statements for the full year</p>
									<p className="text "> ✔ Bank Reconciliation Statements (BRS) for each account</p>
									<p className="text "> ✔ Cheque books, payment vouchers, NEFT/RTGS proofs</p>
									<p className="text "> ✔ Cash book & petty cash records</p>
								<br/>
								<p className="text "><strong>4. GST Compliance Documentation</strong></p>
								<br />	
								<p className="text ">GST verification is crucial for 2025 audits.</p>
								<br/>
								<p className="text ">Ensure availability of:</p>
								<br/>
									<p className="text "> ● GSTR-1, GSTR-3B, GSTR-9, GSTR-2A/2B</p>
									<p className="text "> ● Sales & purchase registers</p>
									<p className="text "> ● E-way bill summaries</p>
									<p className="text "> ● Reconciliation of books vs. GST portal</p>
									<p className="text "> ● Input tax credit (ITC) workings</p>
									<p className="text "> ● Ledger match: output tax, ITC, liabilities</p>
								<br/>

								<p className="text "><strong>5. TDS & Income Tax Records</strong></p>
								<br />	
								<p className="text ">Keep ready:</p>
								<br/>
									<p className="text "> ● TDS returns (24Q, 26Q, 27Q)</p>
									<p className="text "> ● Challans & deductions summary</p>
									<p className="text "> ● Form 16 & 16A issued</p>
									<p className="text "> ● Advance tax workings</p>
									<p className="text "> ● Income tax computation report</p>
								<br/>
								<p className="text "><strong>6. Fixed Assets Register</strong></p>
								<br />	
								<p className="text ">Includes:</p>
								<br/>
									<p className="text "> ● Asset addition & disposal details</p>
									<p className="text "> ● Depreciation schedule</p>
									<p className="text "> ● Supporting invoices</p>
									<p className="text "> ● Physical verification report</p>
								<br/>

								<p className="text "><strong>7. Accounts Receivable (Debtors)</strong></p>
								<br />	
								<p className="text ">Prepare:</p>
								<br/>
									<p className="text "> ● Customer-wise ageing report</p>
									<p className="text "> ● Debtor balance confirmations</p>
									<p className="text "> ● Doubtful debts provision</p>
									<p className="text "> ● Reconciliation with sales ledger</p>
								<br/>
								<p className="text "><strong>8. Accounts Payable (Creditors)</strong></p>
								<br />	
								<p className="text ">Prepare:</p>
								<br/>
									<p className="text "> ● Vendor-wise ageing summary</p>
									<p className="text "> ● Advance payments list</p>
									<p className="text "> ● Vendor balance confirmations</p>
									<p className="text "> ● Reconciliation with purchase ledger</p>
								<br/>
								<p className="text "><strong>9. Inventory Verification</strong></p>
								<br />	
								<p className="text ">Important for product-based companies.</p>
								<p className="text ">Documents required:</p>
								<br/>
									<p className="text "> ● Stock register</p>
									<p className="text "> ● Physical stock count report</p>
									<p className="text "> ● Valuation workings</p>
									<p className="text "> ● Slow-moving/obsolete inventory summary</p>
								<br/>
								<p className="text "><strong>10. Payroll & HR Records</strong></p>
								<br />	
								<p className="text ">Keep ready:</p>
								<br/>
									<p className="text "> ● Salary register</p>
									<p className="text "> ● Attendance records</p>
									<p className="text "> ● PF/ESI challans</p>
									<p className="text "> ● Employment contracts</p>
									<p className="text "> ● Bonus, gratuity, leave encashment provisions</p>

								<br/>
								<p className="text "><strong>11. Loan, Borrowings & Interest Records</strong></p>
								<br />	
								<p className="text ">Include:</p>
								<br/>
									<p className="text "> ● Loan agreements</p>
									<p className="text "> ● Interest calculation sheets</p>
									<p className="text "> ● Bank sanction letters</p>
									<p className="text "> ● Outstanding loan summaries</p>
									<p className="text "> ● EMI schedules</p>
								<br/>

								<p className="text "><strong>12. Internal Controls & Audit Trail Logs</strong></p>
								<br />	
								<p className="text ">As per MCA guidelines:</p>
								<br/>
									<p className="text "> ● Audit trail logs must be maintained</p>
									<p className="text "> ● Access control policies</p>
									<p className="text "> ● Maker-checker workflows</p>
									<p className="text "> ● Internal audit reports (if any)</p>
								<br/>
								<p className="text "><strong>13. Supporting Financial Documents</strong></p>
								<br />	
								<p className="text ">Prepare:</p>
								<br/>
									<p className="text "> ● Vendor bills & purchase vouchers</p>
									<p className="text "> ● Sales invoices & delivery challans</p>
									<p className="text "> ● Expense receipts</p>
									<p className="text "> ● Asset purchase bills</p>
									<p className="text "> ● Rent agreements</p>
									<p className="text "> ● Insurance policies</p>
								<br/>
								<p className="text "><strong>14. Year-End Financial Statements</strong></p>
								<br />	
								<p className="text ">Final reporting pack should include:</p>
								<br/>
									<p className="text "> ● Profit & Loss statement</p>
									<p className="text "> ● Balance sheet</p>
									<p className="text "> ● Cash flow statement</p>
									<p className="text "> ● Notes to accounts</p>
									<p className="text "> ● Audited statements of previous year</p>

							<h3 style={{ marginTop: "40px", color: '#0b1972' }}>Best Practices for Smooth Audit Completion</h3>
							<br/>
									<p className="text">✔ Close books within the first week of April</p>
									<p className="text">✔ Reconcile ALL ledgers monthly</p>
									<p className="text">✔ Maintain detailed working papers</p>
									<p className="text">✔ Respond to auditor queries promptly</p>
									<p className="text">✔ Use MCA-compliant accounting software</p>
									<p className="text">✔ Maintain proper documentation digitally</p>
								<br/>
					
								<h3 style={{ color: '#0b1972' }}>Conclusion</h3>
								<br />
								<p> Preparing for a statutory audit doesn’t have to be stressful. With a structured checklist, organised
									documentation, and proactive compliance, businesses can ensure a smooth audit process and
									stronger financial governance.
								</p>
                                <br/>

                                <p>Bisways Consulting Group supports companies with year-end closing, audit preparation,
									documentation, GST reconciliation, and complete statutory compliance for FY 2024–25.
								</p>
        

								<br /><span className="line" />
								<div className="bot mb-70">
									<div className="tags">
										<h6>
											Tags :
										</h6>
										<Link href="" > Statutory Audit | Checklist | Financial Year 2024–25 | Audit Preparation</Link>
										{/* <ul className="tag-popular-list style-2">
											<li>
												<Link href="/#">Business</Link>
											</li>
											<li>
												<Link href="/#">Consulting</Link>
											</li>
											<li><Link href="/#">Marketing</Link></li>
										</ul> */}
									</div>
									<div className="socials">
										<h6>
											Share
										</h6>
										<ul className="social-list style-2">
											<li>
												<Link href="">
													<i className="icon-facebook" />
												</Link>
											</li>
											<li>
												<Link href="">
													<i className="icon-twitter" />
												</Link>
											</li>
											<li>
												<Link href="">
													<i className="icon-linkedin" />
												</Link>
											</li>
											<li>
												<Link href="">
													<i className="icon-youtube" />
												</Link>
											</li>
										</ul>
									</div>
								</div>
								{/* <div className="author-post mb-70">
									<div className="entry-image-author wow zoomIn">
										<Image
											width="0"
											height="0"
											sizes="100vw"
											style={{ width: "100%", height: "100%" }}
											className="lazyload" src="/images/avatar/entry-author.jpg" data-src="/images/avatar/entry-author.jpg" alt="" />
									</div>
									<div className="entry-infor-author">
										<h6 className="name ">
											<Link href="/#" className="hover-text-main-golden">
												Richard M. Fudge
											</Link>
										</h6>
										<p className="duty mb-10">Autor</p>
										<p className="text-note mb-20">
											The world is a book, and those who do not travel read only one page
											every
											journey we undertake is a chapter filled with lessons, experiences
										</p>
										<ul className="social-list style-3">
											<li>
												<Link href="/#">
													<i className="icon-facebook" />
												</Link>
											</li>
											<li>
												<Link href="/#">
													<i className="icon-twitter" />
												</Link>
											</li>
											<li>
												<Link href="/#">
													<i className="icon-linkedin" />
												</Link>
											</li>
											<li>
												<Link href="/#">
													<i className="icon-youtube" />
												</Link>
											</li>
										</ul>
									</div>
								</div> */}
								{/* <div className="btn-blog-group mb-70">
									<div className="btn-next btn-blog tf-hover">
										<div className="image hover-2">
											<Image
												width="0"
												height="0"
												sizes="100vw"
												style={{ width: "100%", height: "auto" }}
												className="lazyload" src="/images/blog/recent-new-1.jpg" data-src="/images/blog/recent-new-1.jpg" alt="" />
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
									</div>
									<div className="btn-prev btn-blog tf-hover">
										<div className="image hover-2">
											<Image
												width="0"
												height="0"
												sizes="100vw"
												style={{ width: "100%", height: "auto" }}
												className="lazyload" src="/images/blog/recent-new-2.jpg" data-src="/images/blog/recent-new-2.jpg" alt="" />
										</div>
										<div className="content">
											<div className="caption">
												<Link href="/#" className="font-main-2">
													Role Business Consulting
													in Driving Innovation
												</Link>
											</div>
											<p className="date">
												20 September 2024
											</p>
										</div>
									</div>
								</div> */}
								{/* <div className="comment-wrap">
									<h3 className="text-anime-wave">
										Leave A Comments
									</h3>
									<p className="note mb-30">
										Your email address will not be published. Required fields are marked *
									</p>
									<form action="#" className="form-comment style-3">
										<div className="cols mb-20">
											<fieldset>
												<input type="text" placeholder="Name" required />
											</fieldset>
											<fieldset>
												<input type="text" placeholder="Email" required />
											</fieldset>
										</div>
										<div className="cols fieldset-text">
											<fieldset>
												<textarea placeholder="Message" />
											</fieldset>
										</div>
										<div className="checkbox-item">
											<label>
												<span className="text">Save my name, email, and website in this browser
													for
													the next time I comment.</span>
												<input type="checkbox" className="checkbox-item" defaultChecked />
												<span className="btn-checkbox" />
											</label>
										</div>
										<div className="bot">
											<button type="submit" className="tf-btn style-3 text-anime-style-1">
												Send Comment
												<i className="icon-chevron-right" />
											</button>
										</div>
									</form>
								</div> */}

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
							Need help preparing for your statutory audit or organising year-end closing?
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
							Connect with Bisways Consulting Group — your trusted partner for Audit Support, Compliance, and
							Financial Reporting.
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

		</>
	)
}
