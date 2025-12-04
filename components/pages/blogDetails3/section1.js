
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
									Every GST-registered taxpayer must stay compliant with the annual filing requirements prescribed
									under the Goods and Services Tax law. One of the most important filings is the GST Annual Return
									Form GSTR-9, which summarises all outward supplies, inward supplies, tax paid, ITC availed,
									reversals, and adjustments for the entire financial year.

								</p>
								<p className="text mb-20">
									This guide by Bisways Consulting Group explains who should file GSTR-9, eligibility rules,
									exemptions, due dates, penalties, reconciliation requirements, and the most common mistakes to
									avoid

								</p>

								<h3 style={{ marginTop: "40px", color: '#0b1972' }}>What Is GSTR-9?</h3>
								<br />
								<h6 style={{ color: '#0b1972' }}>GSTR-9 is a consolidated annual return that contains details already filed in:</h6>
								<br />
								<ul className="benefit-list style-2">
									<li>
										<div className="icon">
											<i className="icon-check" />
										</div>
										<p>
											GSTR-1 (Outward supplies)


										</p>
									</li>
									<li>
										<div className="icon">
											<i className="icon-check" />
										</div>
										<p>
											GSTR-3B (Tax summary & ITC)


										</p>
									</li>
									<li>
										<div className="icon">
											<i className="icon-check" />
										</div>
										<p>
											Auto-populated GSTR-2A / 2B (ITC data)

										</p>
									</li>

								</ul>
								<p>
									It acts as a financial summary of the entire year and helps the government verify the accuracy of
									monthly filings.
								</p>
								<br />
								<br />
								<h3 style={{ marginTop: "40px", color: '#0b1972' }}>Who Should File GSTR-9?</h3>
								<br />
								<h6 style={{ color: '#0b1972' }}> GSTR-9 must be filed by:</h6>
								<br />
								<ul className="benefit-list style-2">
									<li>
										<div className="icon">
											<i className="icon-check" />
										</div>
										<p>
											All regular GST-registered taxpayer
										</p>
									</li>
									<li>
										<div className="icon">
											<i className="icon-check" />
										</div>
										<p>
											Businesses with aggregate turnover above ₹2 crore (mandatory)
										</p>
									</li>
									<li>
										<div className="icon">
											<i className="icon-check" />
										</div>
										<p>
											Businesses below ₹2 crore (optional, but recommended for better compliance)
										</p>
									</li>

								</ul>

								<br />
								<br />
								<h4 style={{ color: '#0b1972' }}>Exempt from Filing GSTR-9</h4>
								<br />
								<h6 style={{ color: '#0b1972' }}> The following persons are NOT required to file GSTR-9::</h6>
								<br />
								<ul className="benefit-list style-2">
									<li>
										<div className="icon">
											<i className="icon-check" />
										</div>
										<p>
											Composition taxpayers (they file GSTR-9A)
										</p>
									</li>
									<li>
										<div className="icon">
											<i className="icon-check" />
										</div>
										<p>
											Input Service Distributors (ISD)
										</p>
									</li>
									<li>
										<div className="icon">
											<i className="icon-check" />
										</div>
										<p>
											Casual taxable persons
										</p>
									</li>
									<li>
										<div className="icon">
											<i className="icon-check" />
										</div>
										<p>
											Non-resident taxable persons
										</p>
									</li>
									<li>
										<div className="icon">
											<i className="icon-check" />
										</div>
										<p>
											TDS/TCS deductors under GST
										</p>
									</li>

								</ul>


								<br />
								<br />


								<h3 style={{ color: '#0b1972' }}> Types of Annual Returns Under GST</h3>

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
													Return Type
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
													Who Files?
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
													Purpose
												</th>
											</tr>
										</thead>

										<tbody>
											{[
												["GSTR-9", " Regular taxpayers", "Consolidated annual"],
												["GSTR-9A", "Composition dealers", "Annual summary (now discontinued)"],
												["GSTR-9C", "Businesses with turnover above threshold", "Reconciliation statement & audit"],
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

								<br />
								<h3 style={{ color: '#0b1972' }}>Key Details Required in GSTR-9</h3>

								<br />
								<h6 style={{ color: '#0b1972' }}> While preparing GSTR-9, taxpayers must ensure accuracy in:</h6>
								<br />
								<ul className="benefit-list style-2">
									<li>
										<div className="icon">
											<i className="icon-check" />
										</div>
										<p>
											Outward supplies (taxable, exempt, zero-rated)

										</p>
									</li>
									<li>
										<div className="icon">
											<i className="icon-check" />
										</div>
										<p>
											Inward supplies & ITC availed

										</p>
									</li>
									<li>
										<div className="icon">
											<i className="icon-check" />
										</div>
										<p>
											ITC reversals (Rule 42/43, ITC mismatch)

										</p>
									</li>
									<li>
										<div className="icon">
											<i className="icon-check" />
										</div>
										<p>
											Tax paid through cash & credit

										</p>
									</li>
									<li>
										<div className="icon">
											<i className="icon-check" />
										</div>
										<p>
											Demands & refunds

										</p>
									</li>
									<li>
										<div className="icon">
											<i className="icon-check" />
										</div>
										<p>
											HSN summaries
										</p>
									</li>
								</ul>
								<div>A detailed year-end reconciliation is crucial to avoid mismatches and notices.</div>


								<br />
								<br />
								<h3 style={{ color: '#0b1972' }}>  Step-by-Step Process to File GSTR-9</h3>
								<br />
								<h5 style={{ color: '#0b1972' }}>
									1. Verify GSTR-1 and GSTR-3B Data
								</h5>
								<br />
								<p>Ensure outward supply figures match between GSTR-1 & GSTR-3B</p>
								<br />

								<h5 style={{ color: '#0b1972' }}>
									2. Reconcile Input Tax Credit (ITC)
								</h5>
								<br />
								<h6 style={{ color: '#0b1972' }}> Compare:</h6>
								<br />
								<ul className="benefit-list style-2">
									<li>
										<div className="icon">
											<i className="icon-check" />
										</div>
										<p>
											ITC claimed in GSTR-3B

										</p>
									</li>
									<li>
										<div className="icon">
											<i className="icon-check" />
										</div>
										<p>
											ITC available in GSTR-2B

										</p>
									</li>
								</ul>
								<p>Reconcile mismatches before filing.</p>
								<br />

								<h5 style={{ color: '#0b1972' }}>3. Review Books of Accounts</h5>
								<br />
								<p>Match ledger totals with GST portal details.</p>

								<br />

								<h5 style={{ color: '#0b1972' }}>
									4.  Prepare GSTR-9 Using Portal or Offline Tool
								</h5>
								<br />
								<h6 style={{ color: '#0b1972' }}>  Enter details in:</h6>
								<br />

								<ul className="benefit-list style-2">
									<li>
										<div className="icon">
											<i className="icon-check" />
										</div>
										<p>
											Table 4 (Outward supplies)

										</p>
									</li>
									<li>
										<div className="icon">
											<i className="icon-check" />
										</div>
										<p>
											Table 6 (ITC availed)


										</p>
									</li>
									<li>
										<div className="icon">
											<i className="icon-check" />
										</div>
										<p>
											Table 7 (ITC reversed)

										</p>
									</li>
									<li>
										<div className="icon">
											<i className="icon-check" />
										</div>
										<p>
											Table 9 (Tax paid)
										</p>
									</li>

								</ul>
								<br />
								<h5 style={{ color: '#0b1972' }}>5. Validate, Preview & Submit</h5>
								<br />
								<p>Carefully review all values before final submission — no revision is allowed after filing.</p>

								<br />
								<h3 style={{ color: '#0b1972' }}>  Late Fees & Penalties</h3>
								<br />
								<h6 style={{ color: '#0b1972' }}>  Late Fees & Penalties</h6>
								<br />
								<ul className="benefit-list style-2">
									<li>
										<div className="icon">
											<i className="icon-check" />
										</div>
										<p>
											₹200 per day (₹100 CGST + ₹100 SGST)
										</p>
									</li>
									<li>
										<div className="icon">
											<i className="icon-check" />
										</div>
										<p>
											Subject to a maximum of 0.25% of turnover

										</p>
									</li>

								</ul>

								<p>To avoid penalties, taxpayers must ensure timely filing along with accurate reconciliation.</p>
								<br />
								<h3 style={{ color: '#0b1972' }}>  Common Mistakes to Avoid in GSTR-9</h3>
								<br />

								<ul className="benefit-list style-2">
									<li>
										<div className="icon">
											<i className="icon-check" />
										</div>
										<p>
											Incorrect turnover reporting

										</p>
									</li>
									<li>
										<div className="icon">
											<i className="icon-check" />
										</div>
										<p>
											Not matching ITC with GSTR-2B

										</p>
									</li>
									<li>
										<div className="icon">
											<i className="icon-check" />
										</div>
										<p>
											Missing credit notes/debit notes adjustments

										</p>
									</li>
									<li>
										<div className="icon">
											<i className="icon-check" />
										</div>
										<p>
											Wrong classification in HSN summary

										</p>
									</li>
									<li>
										<div className="icon">
											<i className="icon-check" />
										</div>
										<p>

											Over-reporting or under-reporting outward supplies


										</p>
									</li>
									<li>
										<div className="icon">
											<i className="icon-check" />
										</div>
										<p>
											Not reconciling 3B vs books
										</p>
									</li>

								</ul>
								<p>A final verification by a professional significantly reduces error risks.</p>
								<br />
								<h3 style={{ color: '#0b1972' }}> Should You File GSTR-9 If Your Turnover Is Below ₹2 Crore?</h3>
								<br />
								<p>Optional but recommended.</p>
								<br />
								<h6 style={{ color: '#0b1972' }}>Filing GSTR-9:</h6>
								<br />
								<ul className="benefit-list style-2">
									<li>
										<div className="icon">
											<i className="icon-check" />
										</div>
										<p>
											Strengthens compliance history

										</p>
									</li>
									<li>
										<div className="icon">
											<i className="icon-check" />
										</div>
										<p>
											Helps in future audits

										</p>
									</li>
									<li>
										<div className="icon">
											<i className="icon-check" />
										</div>
										<p>
											Reduces scrutiny risk

										</p>
									</li>
									<li>
										<div className="icon">
											<i className="icon-check" />
										</div>
										<p>
											Provides a full-year financial summary
										</p>
									</li>

								</ul>

								<br />
								<h3 style={{ color: '#0b1972' }}>Conclusion</h3>
								<br/>
								<p> Filing GSTR-9 is a crucial part of GST compliance. With detailed reconciliation, accurate reporting,
									and timely submission, businesses can avoid penalties and maintain clean GST records.
								</p>
								<br />
								<p>
									Bisways Consulting Group provides complete support for GSTR-9 preparation, reconciliation,
									filing, and GST audit (GSTR-9C) to ensure seamless compliance for your business.</p>

								<br />

								<span className="line" />
								<div className="bot mb-70">
									<div className="tags">
										<h6>
											Tags :
										</h6>
										<Link href="" >	GSTR-9 | Annual Return | Compliance | GST Filing								Accounting</Link>
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
							Need help filing GSTR-9 or resolving GST mismatches?
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
							Connect with Bisways Consulting Group — your trusted partner for GST Filing,
							Annual Returns, Audit, and Complete Compliance Management.
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
