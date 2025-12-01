
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
									E-invoicing has transformed how businesses generate, validate, and report invoices under GST. By
									integrating real-time authentication, QR codes, and automated reporting, the e-invoice system
									aims to improve compliance, reduce tax evasion, and streamline the flow of invoice data into GST
									returns.
								</p>
								<p className="text mt-3 mb-20">
									This guide explains how e-invoicing works, turnover thresholds, mandatory QR code rules, and the
									impact on business operations as per the latest CBIC updates.
								</p>
								<br/>

								<h3 style={{ marginTop: "40px", color: '#0b1972' }}>What Is GST E-Invoicing?</h3>
								<br />
								<p className="text ">
									GST e-invoicing is a system where invoices created by businesses are electronically validated by
									the Invoice Registration Portal (IRP).
								</p>
								<br/>
								<p className="text ">Once validated:</p>
								<ul className="benefit-list style-2">
									<li>
										<div className="icon">
											<i className="icon-check" />
										</div>
										<p>
											The invoice receives an Invoice Reference Number (IRN)
										</p>
									</li>
									<li>
										<div className="icon">
											<i className="icon-check" />
										</div>
										<p>
											A signed QR code is generated
										</p>
									</li>
									<li>
										<div className="icon">
											<i className="icon-check" />
										</div>
										<p>
											The invoice gets auto-reported to GSTN and e-way bill systems
										</p>
									</li>
								</ul>
								<p>E-invoicing does not mean generating invoices on the government portal — businesses continue
									using their billing software, which is integrated with the IRP.</p>


							<h3 style={{ marginTop: "40px", color: '#0b1972' }}>Who Must Generate E-Invoices? (Turnover Thresholds)</h3>
							<br/>
							<p className="text">E-invoicing is mandatory for businesses having turnover exceeding:</p>
							<br/>
								<h6 style={{ color: '#0b1972' }}> ✔ ₹5 crore (from 1 August 2023 onwards)</h6>
								<br />
								<p className='text'>Previously, the threshold was:</p>
								<ul className="benefit-list style-2">
									<li>
										<div className="icon">
											<i className="icon-check" />
										</div>
										<p>
											₹500 crore
										</p>
									</li>
									<li>
										<div className="icon">
											<i className="icon-check" />
										</div>
										<p>
											Then ₹100 crore
										</p>
									</li>
										<li>
										<div className="icon">
											<i className="icon-check" />
										</div>
										<p>
											Then ₹50 crore
										</p>
									</li>
										<li>
										<div className="icon">
											<i className="icon-check" />
										</div>
										<p>
											Then ₹20 crore
										</p>
									</li>
									<li>
										<div className="icon">
											<i className="icon-check" />
										</div>
										<p>
											Then ₹10 crore
										</p>
									</li>
								</ul>
								<p>CBIC gradually reduced limits to include more taxpayers</p>
								<h6 style={{ color: '#0b1972' }}> ❌ Exempted Entities:</h6>
								<br />
									<ul className="benefit-list style-2">
										<li>
											<div className="icon">
												<i className="icon-check" />
											</div>
											<p>
												SEZ Units
											</p>
										</li>
										<li>
											<div className="icon">
												<i className="icon-check" />
											</div>
											<p>
												Banks & NBFCs
											</p>
										</li>
										<li>
											<div className="icon">
												<i className="icon-check" />
											</div>
											<p>
												Insurance companies
											</p>
										</li>
										<li>
											<div className="icon">
												<i className="icon-check" />
											</div>
											<p>
												Goods Transport Agencies (GTA)
											</p>
										</li>
										<li>
											<div className="icon">
												<i className="icon-check" />
											</div>
											<p>
												Passenger transportation services
											</p>
										</li>
										<li>
											<div className="icon">
												<i className="icon-check" />
											</div>
											<p>
												Cinema ticketing
											</p>
										</li>
									</ul>

								<h3 style={{ marginTop: "40px", color: '#0b1972' }}>How E-Invoicing Works (Step-by-Step)</h3>
									{/* <p className="text ">
										The new tax regime offers lower tax rates and a cleaner structure without major deductions.
									</p> */}
								<br />
									<h6 style={{ color: '#0b1972' }}> Step 1: Generate Invoice</h6>
									<br />
									<p className='text'>Create invoice in your ERP/Tally/billing software with:</p>
									<ul className="benefit-list style-2">
										<li>
											<div className="icon">
												<i className="icon-check" />
											</div>
											<p>
												Supplier details
											</p>
										</li>
										<li>
											<div className="icon">
												<i className="icon-check" />
											</div>
											<p>
												Buyer details
											</p>
										</li>
										<li>
											<div className="icon">
												<i className="icon-check" />
											</div>
											<p>
												Item details
											</p>
										</li>
										<li>
											<div className="icon">
												<i className="icon-check" />
											</div>
											<p>
												Tax amounts
											</p>
										</li>
									</ul>
									<h6 style={{ color: '#0b1972' }}> Step 2: Invoice Data Sent to IRP</h6>
									<br />
									<p className="text">Software sends invoice JSON to the IRP.</p>

									<h6 style={{ color: '#0b1972' }}> Step 3: Validation</h6>
									<br />
									<p className="text">IRP verifies:</p>
										<ul className="benefit-list style-2">
											<li>
												<div className="icon">
													<i className="icon-check" />
												</div>
												<p>
													GSTIN legitimacy
												</p>
											</li>
											<li>
												<div className="icon">
													<i className="icon-check" />
												</div>
												<p>
													Invoice format
												</p>
											</li>
											<li>
												<div className="icon">
													<i className="icon-check" />
												</div>
												<p>
													Duplication check
												</p>
											</li>
										</ul>

										<h6 style={{ color: '#0b1972' }}> Step 5: Auto-Reporting to GST Portal</h6>
											<br />
											<p className="text">Invoice data flows automatically to:</p>
												<ul className="benefit-list style-2">
													<li>
														<div className="icon">
															<i className="icon-check" />
														</div>
														<p>
															GSTR-1
														</p>
													</li>
													<li>
														<div className="icon">
															<i className="icon-check" />
														</div>
														<p>
															E-way Bill portal (if applicable)
														</p>
													</li>
												</ul>

										<h3 style={{ marginTop: "40px", color: '#0b1972' }}>Key Benefits of E-Invoicing</h3>
											<br />
											<h6 style={{ color: '#0b1972' }}> ✔ Real-time reporting</h6>
											<p className="text">Invoices are authenticated instantly.</p>
											<h6 style={{ color: '#0b1972' }}> ✔ Auto-populated GST returns</h6>
											<p className="text">Reduces data entry errors and mismatch notices.</p>
											<h6 style={{ color: '#0b1972' }}> ✔ Fraud prevention</h6>
											<p className="text">IRN system removes fake invoice risk.</p>
											<h6 style={{ color: '#0b1972' }}> ✔ Simplified reconciliation</h6>
											<p className="text">Matching between GSTR-1 and GSTR-2B improves accuracy.</p>
											<h6 style={{ color: '#0b1972' }}> ✔ Integration with e-way bill</h6>
											<p className="text">Transport documentation becomes faster.</p>

										<h3 style={{ marginTop: "40px", color: '#0b1972' }}>QR Code Requirements</h3>
											<br />
											<h6 style={{ color: '#0b1972' }}> 1. QR Code on E-Invoices</h6>
											<br/>	
											<p className="text">IRP-generated QR code is mandatory on all e-invoices.</p>
											<p className="text">It contains:</p>	
												<ul className="benefit-list style-2">
													<li>
														<div className="icon">
															<i className="icon-check" />
														</div>
														<p>
															GSTIN of supplier & buyer
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
															Date
														</p>
													</li>
													<li>
														<div className="icon">
															<i className="icon-check" />
														</div>
														<p>
															Invoice value
														</p>
													</li>
													<li>
														<div className="icon">
															<i className="icon-check" />
														</div>
														<p>
															HSN codes
														</p>
													</li>
													<li>
														<div className="icon">
															<i className="icon-check" />
														</div>
														<p>
															IRN
														</p>
													</li>	
												</ul>
											<h6 style={{ color: '#0b1972' }}> 2. Dynamic QR Code for B2C Invoices</h6>
											<br/>	
												<p className="text">Separate rule:</p>
												<p className="text">B2C invoices for businesses with turnover above ₹500 crore must carry a Dynamic QR Code for payment tracking.</p>
											<br/>
												<p className='text'>This is not the same as e-invoice QR code.</p>
				

								<h3 style={{ marginTop: "40px", color: '#0b1972' }}>Penalties for Non-Compliance</h3>
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
															Penalty
														</th>
													</tr>
												</thead>

												<tbody>
													{[
														["Not generating e-invoice", "₹10,000 per invoice"],
														["Missing QR code", "Invoice treated as invalid"],
														["Wrong or manipulated IRN ", "Treated as non-issued invoice",],
														["E-way bill mismatch", "Penalties under GST movement rules"],
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
										
								
							<h3 style={{ marginTop: "40px", color: '#0b1972' }}>Common Mistakes to Avoid</h3>
							<br />
								<ul className="benefit-list style-2">
									<li>
										<div className="icon">
											<i className="icon-check" />
										</div>
										<p>
										 Not updating ERP/Tally to support e-invoicing
										</p>
									</li>
									<li>
										<div className="icon">
											<i className="icon-check" />
										</div>
										<p>
										 Using outdated invoice formats
										</p>
									</li>
									<li>
										<div className="icon">
											<i className="icon-check" />
										</div>
										<p>
										 Missing mandatory fields (HSN, PIN code, item details)
										</p>
									</li>
									<li>
										<div className="icon">
											<i className="icon-check" />
										</div>
										<p>
										 Uploading incomplete invoice data to IRP
										</p>
									</li>
									<li>
										<div className="icon">
											<i className="icon-check" />
										</div>
										<p>
										 Assuming B2C invoices require IRN (they do NOT)
										</p>
									</li>
								</ul>
						

						<h3 style={{ marginTop: "40px", color: '#0b1972' }}>Best Practices for Smooth E-Invoicing</h3>
						<br />
						{/* <h6 style={{ color: '#0b1972' }}> Scenario 2 – Employee Without Major Investments</h6>
						<br /> */}
								<ul className="benefit-list style-2">
									<li>
										<div className="icon">
											<i className="icon-check" />
										</div>
										<p>
											Integrate ERP with approved GST Suvidha Provider (GSP)
										</p>
									</li>
									<li>
										<div className="icon">
											<i className="icon-check" />
										</div>
										<p>
											Perform format validation before sending to IRP
										</p>
									</li>
									<li>
										<div className="icon">
											<i className="icon-check" />
										</div>
										<p>
											Train staff on IRN generation & QR code printing
										</p>
									</li>
									<li>
										<div className="icon">
											<i className="icon-check" />
										</div>
										<p>
											Maintain backup copies of authenticated invoices
										</p>
									</li>
									<li>
										<div className="icon">
											<i className="icon-check" />
										</div>
										<p>
											Reconcile IRP uploads with GSTR-1 periodically
										</p>
									</li>
								</ul>

								<h3 style={{ color: '#0b1972' }}>Conclusion</h3>
								<br />
								<p> GST e-invoicing and QR code rules mark a major shift toward digital compliance. For businesses
									meeting the turnover threshold, adopting e-invoicing ensures transparency, accuracy, and
									seamless GST reporting. With proper integration and automation, businesses can reduce errors,
									avoid penalties, and enhance operational efficiency.
								</p>
                                <br />
                                <p>Bisways Consulting Group offers end-to-end support in e-invoice setup, GSTN integration, QR code
									compliance, software upgrades, and ongoing filing support for businesses across India.
								</p>
        

								<br /><span className="line" />
								<div className="bot mb-70">
									<div className="tags">
										<h6>
											Tags :
										</h6>
										<Link href="" > E-Invoice | QR Code | GSTN | Digital Compliance</Link>
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
							Need help implementing GST E-Invoice or QR Code compliance?
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
							Technology, Automation, and Compliance.
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
