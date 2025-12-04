
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
									The Government has introduced the GST Amnesty Scheme 2024 to provide major relief to
									taxpayers who have failed to file GST returns in earlier financial years. This scheme, announced
									through a fresh CBIC notification, offers waiver or reduction of late fees and penalties for specific
									non-filed returns up to FY 2021–22.

								</p>
								<p className="text mt-3 mb-20">
									The objective of the amnesty scheme is to ease the compliance burden, help taxpayers regularise
									their GST filings, and enable them to avoid heavy accumulated late fees that may otherwise prevent
									them from filing overdue returns.
								</p>
								<p className="text mt-3 mb-20">
									This guide explains the eligibility, notified returns, fee waiver structure, timelines, and compliance steps under the 2024 amnesty.
								</p>

								<h3 style={{ marginTop: "40px", color: '#0b1972' }}>What Is the GST Amnesty Scheme 2024?</h3>
								<br />
								<p className="text ">
									The GST Amnesty Scheme 2024 is a limited-period relief programme allowing taxpayers to file
									pending GST returns with substantially reduced late fees and waived penalties for specific periods.
								</p>
								<br/>
								<p className="text ">It targets taxpayers who either:</p>
								<br />	
								<ul className="benefit-list style-2">
									<li>
										<div className="icon">
											<i className="icon-check" />
										</div>
										<p>
											Failed to file returns for earlier years
										</p>
									</li>
									<li>
										<div className="icon">
											<i className="icon-check" />
										</div>
										<p>
											Accumulated heavy late fees
										</p>
									</li>
									<li>
										<div className="icon">
											<i className="icon-check" />
										</div>
										<p>
											Could not complete compliance due to business shutdown, pandemic impact, or other genuine hardships
										</p>
									</li>
									<p className='text'>The scheme is valid only for notified returns and must be availed within the timeline given in the CBIC notification.</p>
								</ul>


							<h3 style={{ marginTop: "40px", color: '#0b1972' }}>Which Returns Are Covered?</h3>
							<br/>
							<p className="text">The 2024 Amnesty Scheme typically covers the following categories (as per CBIC notification):</p>
							<br/>
								<h6 style={{ color: '#0b1972' }}> ✔ GSTR-3B (Monthly Summary Return)</h6>
									<p className="text">For non-filing up to FY 2021–22.</p>
									<br/>
								<h6 style={{ color: '#0b1972' }}> ✔ GSTR-1 (Outward Supplies Return)</h6>
									<p className="text">To regularise mismatch issues and ensure complete reporting.</p>
									<br/>

								<h6 style={{ color: '#0b1972' }}> ✔ GSTR-4 (Composition Dealers)</h6>
									<p className="text">For taxpayers under the composition scheme who missed annual filing.</p>
									<br/>

								<h6 style={{ color: '#0b1972' }}> ✔ GSTR-9 & GSTR-9A (Annual Returns)</h6>
									<p className="text">Relief applicable for late filing of annual returns where applicable.</p>
									<br/>

								<h6 style={{ color: '#0b1972' }}> ✔ Revocation of Cancellation Relief</h6>
									<p className="text">Businesses whose GST registration was cancelled due to non-filing can apply for revocation during the amnesty window.</p>
									<br/>

								<h3 style={{ marginTop: "40px", color: '#0b1972' }}>Late Fee & Penalty Waiver Structure</h3>
								<br/>

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
															Earlier Penalty
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
															Under Amnesty Scheme 2024

														</th>
													</tr>
												</thead>

												<tbody>
													{[
														["Not filing GSTR-3B", "₹50–₹200 per day","Capped at a significantly reduced amount or waived"],
														["Not filing GSTR-1 ", "Heavy cumulative late fees","Reduced flat late fee"],
														["Annual return delays", "₹100 per day per Act","Substantial waiver"],
														["Registration cancelled", "No revocation after 90 days","Revocation allowed with relaxed conditions"],
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
																{row[2]}
															</td>

														</tr>
													))}
												</tbody>
											</table>
											<p className='text'>🔔 Exact late fee caps depend on the official notification for each return type.</p>
										</div>


								<h3 style={{ marginTop: "40px", color: '#0b1972' }}>Who Can Avail the Scheme?</h3>
								<br/>
								<p className='text'>The scheme can be availed by:</p>
								<br/>
								<ul className="benefit-list style-2">
									<li>
										<div className="icon">
											<i className="icon-check" />
										</div>
										<p>
											Regular taxpayers
										</p>
									</li>
									<li>
										<div className="icon">
											<i className="icon-check" />
										</div>
										<p>
											Composition dealers
										</p>
									</li>
										<li>
										<div className="icon">
											<i className="icon-check" />
										</div>
										<p>
											Businesses with cancelled GST registration

										</p>
									</li>
									<li>
										<div className="icon">
											<i className="icon-check" />
										</div>
										<p>
											Taxpayers having pending returns up to FY 2021–22
										</p>
									</li>
									<li>
										<div className="icon">
											<i className="icon-check" />
										</div>
										<p>
											Businesses wanting to clean up GST mismatches before departmental scrutiny
										</p>
									</li>
								</ul>

							<h3 style={{ marginTop: "40px", color: '#0b1972' }}>How to Avail the Amnesty Scheme (Step-by-Step)</h3>
								<h6 style={{ color: '#0b1972' }}> Step 1: Check Pending Returns</h6>
								<p className='text'>Review your GST dashboard on gst.gov.in to identify returns pending up to FY 2021–22.</p>
								<br />
								<h6 style={{ color: '#0b1972' }}> Step 2: Calculate Liability</h6>
								<p className='text'>Compute tax liabilities, interest, and any partial late fees payable under the amnesty.</p>
								<br />
								<h6 style={{ color: '#0b1972' }}> Step 3: File Returns Within Amnesty Window</h6>
								<p className='text'>Submit GSTR-3B, GSTR-1, GSTR-4, or GSTR-9 with reduced late fees applied automatically.</p>
								<br />
								<h6 style={{ color: '#0b1972' }}> Step 4: For Cancelled GSTINs</h6>
								<p className='text'>Apply for revocation using Form REG-21 (without strict 90-day restrictions).</p>
								<br />
								<h6 style={{ color: '#0b1972' }}> Step 5: Maintain Proof</h6>
								<p className='text'>Download challans, filed returns, and acknowledgement for future reference.</p>
								<br />

							<h3 style={{ marginTop: "40px", color: '#0b1972' }}>Important Timelines</h3>
								<p className="text">The amnesty scheme is valid for a limited timeframe.</p>
								<p className="text">Taxpayers must file all pending returns within the specified window to avail late fee relief.</p>

							<h3 style={{ marginTop: "40px", color: '#0b1972' }}>Benefits of the 2024 Amnesty Scheme</h3>
									<ul className="benefit-list style-2">
										<li>
											<div className="icon">
												<i className="icon-check" />
											</div>
											<p>
												Significant cost savings on late fees
											</p>
										</li>
										<li>
											<div className="icon">
												<i className="icon-check" />
											</div>
											<p>
												Opportunity to restore cancelled GST registrations
											</p>
										</li>
										<li>
											<div className="icon">
												<i className="icon-check" />
											</div>
											<p>
												Avoid departmental notices and penalties
											</p>
										</li>
										<li>
											<div className="icon">
												<i className="icon-check" />
											</div>
											<p>
												Better compliance status before assessments
											</p>
										</li>
																				<li>
											<div className="icon">
												<i className="icon-check" />
											</div>
											<p>
												Helps businesses revive operations and maintain GST continuity
											</p>
										</li>
									</ul>

								<h3 style={{ color: '#0b1972' }}>Conclusion</h3>
								<br />
								<p> The GST Amnesty Scheme 2024 is a crucial opportunity for businesses to clean up old noncompliances at a fraction of the original late fee burden. By regularising pending filings before the
									deadline, taxpayers can avoid future penalties, reduce litigation risk, and restore their compliance
									record.

								</p>
                                <br />
                                <p>Bisways Consulting Group provides expert assistance in GST return filing, revocation applications,
									amnesty eligibility checks, and end-to-end compliance support for businesses across India.
								</p>
        

								<br /><span className="line" />
								<div className="bot mb-70">
									<div className="tags">
										<h6>
											Tags :
										</h6>
										<Link href="" > Amnesty Scheme | Late Fee | CBIC Notification | GST Relief</Link>
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
							Need help filing pending returns or availing the GST Amnesty Scheme 2024?
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
							Connect with Bisways Consulting Group — your trusted partner for GST
							Compliance, Return Filing Support, and Advisory.
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
