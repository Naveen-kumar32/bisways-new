
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
									Input Tax Credit (ITC) is one of the core benefits under GST — but it is also the area where most
									mismatches, notices, and disputes occur. To ensure accuracy in ITC claims, taxpayers must
									reconcile GSTR-2B (auto-drafted ITC statement) with GSTR-3B (monthly return) every month.

								</p>
								<p className="text mb-20">
									This reconciliation ensures that only eligible and vendor-reported ITC is claimed, reducing the risk of
									excess ITC claims, interest, and penalties.

								</p>
								<p className="text mb-35">
									In this guide, Bisways Consulting Group explains how to reconcile GSTR-2B and GSTR-3B, common
									mismatch reasons, and best practices to maintain clean GST records.

								</p>
								<h3 style={{ marginTop: "40px", color: '#0b1972' }}> What Is GSTR-2B?</h3>
								<br />
								<p className="text mb-35">
									GSTR-2B is a static monthly ITC statement generated for every taxpayer on the 14th of the following
									month.

								</p>



								<h6 style={{ marginTop: "40px", color: '#0b1972' }}>It contains:</h6>
								<br />
								<ul className="benefit-list style-2">
									<li>
										<div className="icon">
											<i className="icon-check" />
										</div>
										<p>
											Invoices uploaded by suppliers in GSTR-1
										</p>
									</li>
									<li>
										<div className="icon">
											<i className="icon-check" />
										</div>
										<p>
											Debit notes uploaded
										</p>
									</li>
									<li>
										<div className="icon">
											<i className="icon-check" />
										</div>
										<p>
											Imports and SEZ supplies
										</p>
									</li>
									<li>
										<div className="icon">
											<i className="icon-check" />
										</div>
										<p>
											Ineligible ITC
										</p>
									</li>
									<li>
										<div className="icon">
											<i className="icon-check" />
										</div>
										<p>
											ITC available vs. not available
										</p>
									</li>

								</ul>
								<p>
									Since it is static, the figures do not change once generated.
								</p>



								<h3 style={{ marginTop: "40px", color: '#0b1972' }}>What Is GSTR-3B?</h3>
								<br />
								<p className="text mb-35">
									GSTR-3B is the self-declared summary return filed monthly or quarterly.
								</p>

								<h6 style={{ marginTop: "40px", color: '#0b1972' }}>It contains:</h6>
								<br />
								<ul className="benefit-list style-2">
									<li>
										<div className="icon">
											<i className="icon-check" />
										</div>
										<p>
											Output tax payable
										</p>
									</li>
									<li>
										<div className="icon">
											<i className="icon-check" />
										</div>
										<p>
											ITC claimed
										</p>
									</li>
									<li>
										<div className="icon">
											<i className="icon-check" />
										</div>
										<p>
											ITC reversal
										</p>
									</li>
									<li>
										<div className="icon">
											<i className="icon-check" />
										</div>
										<p>
											Tax payment details
										</p>
									</li>


								</ul>
								<p>
									The ITC claimed in GSTR-3B must match the ITC available in GSTR-2B.
								</p>



								<h3 style={{ marginTop: "40px", color: '#0b1972' }}> Why GSTR-2B vs GSTR-3B Reconciliation Is Important</h3>
								<br />
								<p className="text mb-35">
									GSTR-2B is a static monthly ITC statement generated for every taxpayer on the 14th of the following
									month.
								</p>
								<h6 style={{ marginTop: "40px", color: '#0b1972' }}>It contains:</h6>
								<br />
								<ul className="benefit-list style-2">
									<li>
										<div className="icon">
											<i className="icon-check" />
										</div>
										<p>
											Prevents excess ITC claims
										</p>
									</li>
									<li>
										<div className="icon">
											<i className="icon-check" />
										</div>
										<p>
											Ensures compliance with Rule 36(4)
										</p>
									</li>
									<li>
										<div className="icon">
											<i className="icon-check" />
										</div>
										<p>
											Avoids GST notices and scrutiny
										</p>
									</li>
									<li>
										<div className="icon">
											<i className="icon-check" />
										</div>
										<p>
											Corrects supplier-related errors
										</p>
									</li>
									<li>
										<div className="icon">
											<i className="icon-check" />
										</div>
										<p>
											Helps manage cash flow and tax liability
										</p>
									</li>
									<li>
										<div className="icon">
											<i className="icon-check" />
										</div>
										<p>
											Reduces interest and penalties
										</p>
									</li>
								</ul>



								<h3 style={{ color: '#0b1972' }}>Why GSTR-2B vs GSTR-3B Reconciliation Is Important</h3>

								<br />
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
													Cause of Mismatch
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
													Reason
												</th>
											</tr>
										</thead>

										<tbody>
											{[
												["Supplier not filed GSTR-1", " Invoice missing in 2B"],
												["Incorrect GSTIN", "Invoice not reflected"],
												["Wrong invoice date", "Reflected in wrong period"],
												["ITC on ineligible items", "Auto-marked as ineligible"],
												["Duplicate invoices", "ITC overstated"],
												["Credit notes not", "Over-claimed ITC"],
												["Supplier filing delays", "Missing in current 2B"],
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


								<h3 style={{ marginTop: "40px", color: '#0b1972' }}>Step-by-Step GSTR-2B vs GSTR-3B Reconciliation Processe</h3>
								<br />
								<h5 style={{ color: '#0b1972' }}> Step 1: Download GSTR-2B Statement</h5>
								<br />
								<p> From GST portal:</p>
								<br />
								<p>Services → Returns → Returns Dashboard → GSTR-2B.</p>

								<br />
								<h5 style={{ color: '#0b1972' }}>Step 2: Extract GSTR-3B ITC Summary</h5>
								<br />
								<p> From GST portal:</p>
								<br />
								<ul className="benefit-list style-2">
									<li>
										<div className="icon">
											<i className="icon-check" />
										</div>
										<p>
											Table 4(A): Eligible ITC
										</p>
									</li>
									<li>
										<div className="icon">
											<i className="icon-check" />
										</div>
										<p>
											Table 4(B): ITC reversal
										</p>
									</li>

								</ul>


								<br />
								<h5 style={{ color: '#0b1972' }}>Step 3: Compare Supplier-wise and Invoice-wise Details</h5>
								<br />
								<h6 style={{ color: '#0b1972' }}>Match:</h6>
								<br />
								<ul className="benefit-list style-2">
									<li>
										<div className="icon">
											<i className="icon-check" />
										</div>
										<p>
											GSTIN
										</p>
									</li>
									<li>
										<div className="icon">
											<i className="icon-check" />
										</div>
										<p>
											Invoice number
										</p>
									</li>
									<li>
										<div className="icon">
											<i className="icon-check" />
										</div>
										<p>
											Invoice date
										</p>
									</li>
									<li>
										<div className="icon">
											<i className="icon-check" />
										</div>
										<p>
											Tax amount
										</p>
									</li>

								</ul>


								<br />
								<br />
								<h5 style={{ color: '#0b1972' }}> Step 4: Identify Mismatches</h5>
								<br />


								<h6 style={{ color: '#0b1972' }}>Classify into:</h6>
								<br />
								<ul className="benefit-list style-2">
									<li>
										<div className="icon">
											<i className="icon-check" />
										</div>
										<p>
											Missing invoices
										</p>
									</li>
									<li>
										<div className="icon">
											<i className="icon-check" />
										</div>
										<p>
											Excess ITC claimed
										</p>
									</li>
									<li>
										<div className="icon">
											<i className="icon-check" />
										</div>
										<p>
											Ineligible ITC
										</p>
									</li>
									<li>
										<div className="icon">
											<i className="icon-check" />
										</div>
										<p>
											Supplier errors
										</p>
									</li>
								</ul>
								<br />

								<h5 style={{ color: '#0b1972' }}>Step 5: Communicate with Suppliers</h5>
								<br />
								<p>Request them to:</p>
								<br />
								<ul className="benefit-list style-2">
									<li>
										<div className="icon">
											<i className="icon-check" />
										</div>
										<p>
											Upload pending invoices
										</p>
									</li>
									<li>
										<div className="icon">
											<i className="icon-check" />
										</div>
										<p>
											Amend incorrect details
										</p>
									</li>
									<li>
										<div className="icon">
											<i className="icon-check" />
										</div>
										<p>
											File GSTR-1 on time
										</p>
									</li>

								</ul>

								<br />

								<h5 style={{ color: '#0b1972' }}>Step 6: Adjust ITC in GSTR-3B</h5>
								<br />
								<p> If ITC is not appearing in 2B:</p>
								<br />
								<ul className="benefit-list style-2">
									<li>
										<div className="icon">
											<i className="icon-check" />
										</div>
										<p>
											Do not claim ITC
										</p>
									</li>
									<li>
										<div className="icon">
											<i className="icon-check" />
										</div>
										<p>
											Reverse incorrect/excess ITC
										</p>
									</li>
									<li>
										<div className="icon">
											<i className="icon-check" />
										</div>
										<p>
											Claim only eligible ITC
										</p>
									</li>

								</ul>
								<br />
								<h5 style={{ color: '#0b1972' }}> Step 7: Maintain Reconciliation Records</h5>

								<br />
								<p>Store the reconciliation sheet for audit and departmental review.</p>

								<h3 style={{ color: '#0b1972' }}> Where a Virtual CFO Adds the Most Value</h3>

								<br />
								<br />

								<h3 style={{ color: '#0b1972' }}>Impact of Incorrect ITC Reconciliation</h3>
								<br />

								<ul className="benefit-list style-2">
									<li>
										<div className="icon">
											<i className="icon-check" />
										</div>
										<p>
											GST demand notices
										</p>
									</li>
									<li>
										<div className="icon">
											<i className="icon-check" />
										</div>
										<p>
											18% interest on excess ITC
										</p>
									</li>
									<li>
										<div className="icon">
											<i className="icon-check" />
										</div>
										<p>
											Penalties under Section 73/74
										</p>
									</li>
									<li>
										<div className="icon">
											<i className="icon-check" />
										</div>
										<p>
											Cash flow blockage
										</p>
									</li>
									<li>
										<div className="icon">
											<i className="icon-check" />
										</div>
										<p>
											Compliance rating issues
										</p>
									</li>

								</ul>


								<br />

								<br />
								<h3 style={{ color: '#0b1972' }}> Best Practices for Smooth ITC Reconciliation</h3>
								<br />

								<ul className="benefit-list style-2">
									<li>
										<div className="icon">
											<i className="icon-check" />
										</div>
										<p>
											Ensure vendors file GSTR-1 before due dates
										</p>
									</li>
									<li>
										<div className="icon">
											<i className="icon-check" />
										</div>
										<p>
											Share monthly reconciliation with suppliers
										</p>
									</li>
									<li>
										<div className="icon">
											<i className="icon-check" />
										</div>
										<p>
											Claim ITC strictly as per GSTR-2B
										</p>
									</li>
									<li>
										<div className="icon">
											<i className="icon-check" />
										</div>
										<p>
											Track ineligible ITC separately
										</p>
									</li>
									<li>
										<div className="icon">
											<i className="icon-check" />
										</div>
										<p>
											Maintain vendor ledger control
										</p>
									</li>
									<li>
										<div className="icon">
											<i className="icon-check" />
										</div>
										<p>
											Perform monthly and annual reconciliation
										</p>
									</li>

								</ul>
								<br />
								<br />
								<h3 style={{ color: '#0b1972' }}>Conclusion</h3>
								<br />
								<p>Effective GSTR-2B and GSTR-3B reconciliation is essential for ensuring accurate ITC claims and
									maintaining strong GST compliance. By understanding mismatch reasons, coordinating with
									suppliers, and following best practices, businesses can avoid disputes, penalties, and cash-flow
									issues.</p>

								<br />
								<br />
								<p>Bisways Consulting Group supports businesses with monthly and annual GST reconciliation, ITC
									audit, mismatch resolution, and end-to-end GST compliance management.</p>

								<br /><br />
								<span className="line" />
								<div className="bot mb-70">
									<div className="tags">
										<h6>
											Tags :
										</h6>
										<Link href="" >GSTR-2B | GSTR-3B | Reconciliation | Input Tax Credit</Link>
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
							Need help with GST reconciliation or fixing ITC
							mismatches?
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
							Connect with Bisways Consulting Group — your trusted partner for GST Filing, ITC Audit,
							Reconciliation, and Complete Compliance Support.
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
