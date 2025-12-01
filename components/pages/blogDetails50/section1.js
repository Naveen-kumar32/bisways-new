
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
									Every company that accepts money in the form of loans, deposits, or advances must report these
									details annually to the Registrar of Companies (ROC) through Form DPT-1. The purpose of this
									return is to disclose all outstanding money received by the company that qualifies as a “deposit” or
									falls under the category of “exempted deposits.”

								</p>
								<p className="text mt-3 mb-20">
									With the 2025 ROC update, companies are expected to follow revised reporting requirements,
									enhanced verification rules, and stricter compliance monitoring to ensure transparency in financial
									liabilities.
								</p>
								<p className="text mt-3 mb-20">
									This guide explains the complete filing process, exempted vs. non-exempt deposits, due dates,
									penalties, and key considerations under the latest MCA guidelines.

								</p>

								<h3 style={{ marginTop: "40px", color: '#0b1972' }}>What Is Form DPT-1?</h3>
								<br />
								<p className="text ">
									Form DPT-1 is an annual return required under the Companies (Acceptance of Deposits) Rules,
									2014.
								</p>
								<br/>
								<p className="text ">It contains details of:</p>
								<br />	
								<ul className="benefit-list style-2">
									<li>
										<div className="icon">
											<i className="icon-check" />
										</div>
										<p>
											Deposits accepted by the company
										</p>
									</li>
									<li>
										<div className="icon">
											<i className="icon-check" />
										</div>
										<p>
											Exempted deposits (loans, advances, guarantees, etc.)
										</p>
									</li>
									<li>
										<div className="icon">
											<i className="icon-check" />
										</div>
										<p>
											Outstanding receipts from members, directors, or related parties
										</p>
									</li>
									<li>
										<div className="icon">
											<i className="icon-check" />
										</div>
										<p>
											Deposit insurance and repayment status
										</p>
									</li>
									
									<p className='text'>The return ensures that companies remain compliant with the rules on accepting public deposits and maintain transparent financial reporting.</p>
								</ul>


							<h3 style={{ marginTop: "40px", color: '#0b1972' }}>Who Must File DPT-1?</h3>
							<br/>
							<p className="text">Form DPT-1 must be filed by:</p>
							<br/>
								<ul className="benefit-list style-2">
										<li>
											<div className="icon">
												<i className="icon-check" />
											</div>
											<p>
												All private limited companies
											</p>
										</li>
										<li>
											<div className="icon">
												<i className="icon-check" />
											</div>
											<p>
												All public limited companies
											</p>
										</li>
										<li>
											<div className="icon">
												<i className="icon-check" />
											</div>
											<p>
												All section 8 companies, if applicable
											</p>
										</li>
										<li>
											<div className="icon">
												<i className="icon-check" />
											</div>
											<p>
												Companies with outstanding loans, advances or exempted deposits
											</p>
										</li>
										<p className='text'>Sole proprietorship, partnership firms, and LLPs do not file DPT-1</p>
								</ul>

							<h3 style={{ marginTop: "40px", color: '#0b1972' }}>What Must Be Reported in DPT-1?</h3>
							<p className="text">Companies must include:</p>
							<br/>

								<h6 style={{ color: '#0b1972' }}> 1. Outstanding Deposits</h6>
									<p className="text">Money accepted from public or members that qualifies as a deposit.</p>
									<br/>
								<h6 style={{ color: '#0b1972' }}> 2. Exempted Deposits</h6>
									<p className="text">These are not considered deposits under the Act. Examples:</p>
									<br/>
									<ul className="benefit-list style-2">
										<li>
											<div className="icon">
												<i className="icon-check" />
											</div>
											<p>
												Directors' loans
											</p>
										</li>
										<li>
											<div className="icon">
												<i className="icon-check" />
											</div>
											<p>
												Relative loans to a private company
											</p>
										</li>
										<li>
											<div className="icon">
												<i className="icon-check" />
											</div>
											<p>
												Secured bonds or debentures
											</p>
										</li>
										<li>
											<div className="icon">
												<i className="icon-check" />
											</div>
											<p>
												Bank loans
											</p>
										</li>
										<li>
											<div className="icon">
												<i className="icon-check" />
											</div>
											<p>
												NBFC loans
											</p>
										</li>
										<li>
											<div className="icon">
												<i className="icon-check" />
											</div>
											<p>
												Inter-corporate borrowings
											</p>
										</li>
										<li>
											<div className="icon">
												<i className="icon-check" />
											</div>
											<p>
												Advances for supply of goods/services
											</p>
										</li>
										<li>
											<div className="icon">
												<i className="icon-check" />
											</div>
											<p>
												Security deposits for contracts
											</p>
										</li>
									</ul>

								<h6 style={{ color: '#0b1972' }}> 3. Deposit Repayment Details</h6>
								<br/>
									<ul className="benefit-list style-2">
										<li>
											<div className="icon">
												<i className="icon-check" />
											</div>
											<p>
												Amount repaid
											</p>
										</li>
										<li>
											<div className="icon">
												<i className="icon-check" />
											</div>
											<p>
												Interest paid
											</p>
										</li>
										<li>
											<div className="icon">
												<i className="icon-check" />
											</div>
											<p>
												Overdue deposits
											</p>
										</li>
									</ul>

								<h6 style={{ color: '#0b1972' }}> 4. Deposit Insurance</h6>
									<p className="text">Applicable where the company is required to maintain deposit insurance.</p>
									<br/>

								<h6 style={{ color: '#0b1972' }}> 5. Auditor’s Certificate</h6>
									<p className="text">Mandatory confirmation from the statutory auditor validating deposit information.</p>
									<br/>

								<h3 style={{ marginTop: "40px", color: '#0b1972' }}>Due Date for Filing (2025 Update)</h3>
								<br/>
								<p className="text">Form DPT-1 must be filed:</p>
								<br/>
									<h6 style={{ color: '#0b1972' }}> On or before 30th June every financial year</h6>
									<p className="text">The report must include details as of 31st March of that year.</p>
									<br/>
								<h3 style={{ marginTop: "40px", color: '#0b1972' }}>Step-by-Step Process to File DPT-1</h3>
								<br/>
									<h6 style={{ color: '#0b1972' }}> Step 1: Identify Outstanding Loans & Receipts</h6>
									<br/>
									<p className="text">Reconcile all liabilities and classify them as deposits or exempted deposits.</p>
									<br/>
									<h6 style={{ color: '#0b1972' }}> Step 2: Prepare the Auditor’s Certificate</h6>
									<br/>
									<p className="text">Company’s statutory auditor must certify deposit details in the prescribed format.</p>
									<br/>
									<h6 style={{ color: '#0b1972' }}> Step 3: Log in to MCA Portal</h6>
									<br/>
									<p className="text">Access the MCA portal → e-Forms → DPT-1.</p>
									<br/>
									<h6 style={{ color: '#0b1972' }}> Step 4: Fill DPT-1 Form</h6>
									<br/>
									<p className="text">Enter:</p>
									<ul className="benefit-list style-2">
										<li>
											<div className="icon">
												<i className="icon-check" />
											</div>
											<p>
												Company details
											</p>
										</li>
										<li>
											<div className="icon">
												<i className="icon-check" />
											</div>
											<p>
												Deposit/exempted deposit details
											</p>
										</li>
										<li>
											<div className="icon">
												<i className="icon-check" />
											</div>
											<p>
												Loan breakup
											</p>
										</li>
										<li>
											<div className="icon">
												<i className="icon-check" />
											</div>
											<p>
												Repayment schedule
											</p>
										</li>
										<li>
											<div className="icon">
												<i className="icon-check" />
											</div>
											<p>
												Auditor’s certificate
											</p>
										</li>
										<li>
											<div className="icon">
												<i className="icon-check" />
											</div>
											<p>
												Deposit insurance status
											</p>
										</li>
									</ul>
								<h6 style={{ color: '#0b1972' }}> Step 5: Attach Supporting Documents</h6>
									<br/>	
									<p className="text">Mandatory attachments:</p>
									<ul className="benefit-list style-2">
										<li>
											<div className="icon">
												<i className="icon-check" />
											</div>
											<p>
												Auditor’s Certificate
											</p>
										</li>
										<li>
											<div className="icon">
												<i className="icon-check" />
											</div>
											<p>
												Trust Deed (if applicable)
											</p>
										</li>
										<li>
											<div className="icon">
												<i className="icon-check" />
											</div>
											<p>
												Deposit Insurance Contract (if applicable)
											</p>
										</li>
									</ul>

								<h6 style={{ color: '#0b1972' }}> Step 6: Verify & Submit</h6>
								<br/>	
									<p className="text">Form must be digitally signed (DSC) by:</p>
									<ul className="benefit-list style-2">
										<li>
											<div className="icon">
												<i className="icon-check" />
											</div>
											<p>
												Director
											</p>
										</li>
										<li>
											<div className="icon">
												<i className="icon-check" />
											</div>
											<p>
												Manager/CEO/Company Secretary
											</p>
										</li>
										<li>
											<div className="icon">
												<i className="icon-check" />
											</div>
											<p>
												Statutory Auditor
											</p>
										</li>
									</ul>
								<h6 style={{ color: '#0b1972' }}> Step 7: Pay ROC Fees</h6>
								<br/>	
									<p className="text">Fees depend on company’s share capital slab.</p>

							<h3 style={{ marginTop: "40px", color: '#0b1972' }}>Penalties for Non-Compliance</h3>

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
																fontSize: "18px",
																borderColor: "white"
															}}
														>
															Default  
														</th>
														<th
															style={{
																background: "#0b1972",
																color: "white",
																padding: "14px 18px",
																textAlign: "left",
																fontWeight: 600,
																fontSize: "18px",
																borderColor: "white"
															}}
														>
															Penalty
														</th>
													</tr>
												</thead>

												<tbody>
													{[
														["Company fails to file DPT-1 ", "₹1 lakh + up to ₹10 lakh for continuing default"],
														["Officer in default", "₹25,000 to ₹2 lakh"],
														["Accepting deposits illegally", "Penalty equal to amount of deposit + imprisonment provisions in severe cases"],
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
																	fontSize: "18px",
																	color: "#0b1972",
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
																	fontSize: "18px",
																	color: "#0b1972",
																}}
															>
																{row[1]}
															</td>
														</tr>
													))}
												</tbody>
											</table>
										</div>


								<h3 style={{ marginTop: "40px", color: '#0b1972' }}>Importance of Filing DPT-1</h3>
								<br/>
								<ul className="benefit-list style-2">
									<li>
										<div className="icon">
											<i className="icon-check" />
										</div>
										<p>
											Ensures transparency of company liabilities
										</p>
									</li>
									<li>
										<div className="icon">
											<i className="icon-check" />
										</div>
										<p>
											Mandatory for ROC compliance
										</p>
									</li>
										<li>
										<div className="icon">
											<i className="icon-check" />
										</div>
										<p>
											Avoids penalties & director disqualification
										</p>
									</li>
									<li>
										<div className="icon">
											<i className="icon-check" />
										</div>
										<p>
											Essential for investors and lenders assessing company solvency
										</p>
									</li>
								</ul>

								<h3 style={{ color: '#0b1972' }}>Conclusion</h3>
								<br />
								<p> The 2025 DPT-1 filing requirements emphasise accurate reporting and timely submission under
									tightened ROC norms. Every company must maintain proper records of deposits and exempted
									receipts and ensure the auditor’s certification is correct before filing.
								</p>
                                <br/>
								<p>With expert guidance and proper documentation, companies can ensure seamless and error-free DPT-1 filing.</p>

                                <p>Bisways Consulting Group assists with complete ROC compliance, DPT-1 preparation, auditor
									coordination, loan classification, and annual return filing.
								</p>
        

								<br /><span className="line" />
								<div className="bot mb-70">
									<div className="tags">
										<h6>
											Tags :
										</h6>
										<Link href="" > DPT-1 | Company Deposits | ROC Filing | 2025 Update</Link>
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
							Need help filing Form DPT-1 or understanding deposit rules?
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
							Connect with Bisways Consulting Group — your trusted partner for ROC Compliance, MCA Filings,
							and Corporate Support.
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
