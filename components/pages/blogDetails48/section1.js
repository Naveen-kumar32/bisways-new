
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
									Micro, Small and Medium Enterprises (MSMEs) are the backbone of India’s economy, contributing
									significantly to employment, innovation, and industrial growth. To support and empower these
									businesses, the Government of India introduced the Udyam Registration Portal — a completely
									online, paperless system that replaces the earlier Udyog Aadhaar MSME registration.
								</p>
								<p className="text mt-3 mb-20">
									Whether you're starting a new business or formalising an existing one, obtaining Udyam
									Registration provides legal recognition and access to various incentives, subsidies, loans, and
									government schemes.
								</p>
								<p className="text mt-3 mb-20">
									This guide explains the eligibility, documentation, registration process, benefits, and postregistration updates for MSMEs as per the latest 2025 norms.
								</p>

								<h3 style={{ marginTop: "40px", color: '#0b1972' }}>What Is Udyam Registration?</h3>
								<br />
								<p className="text ">
									Udyam Registration is the official government certification for Micro, Small, and Medium
									Enterprises under the MSME Development Act, 2006.
								</p>
								<br/>
								<p className="text ">It provides a unique Udyam Registration Number (URN) and an e-certificate, which serves as your
									MSME identity for availing:</p>
								<br />	
								<ul className="benefit-list style-2">
									<li>
										<div className="icon">
											<i className="icon-check" />
										</div>
										<p>
											Subsidies
										</p>
									</li>
									<li>
										<div className="icon">
											<i className="icon-check" />
										</div>
										<p>
											Priority sector lending
										</p>
									</li>
									<li>
										<div className="icon">
											<i className="icon-check" />
										</div>
										<p>
											Government tenders
										</p>
									</li>
									<li>
										<div className="icon">
											<i className="icon-check" />
										</div>
										<p>
											Tax benefits
										</p>
									</li>
									<li>
										<div className="icon">
											<i className="icon-check" />
										</div>
										<p>
											Credit guarantee schemes
										</p>
									</li>
								</ul>
								<p>Registration is free, fully online, and based on self-declaration—no documents are physically uploaded.</p>


							<h3 style={{ marginTop: "40px", color: '#0b1972' }}>MSME Classification (As per Latest 2025 Criteria)</h3>
							<br/>
							<p className="text">Businesses are classified into MSME categories based on investment in plant & machinery an annual turnover:</p>
							<br/>

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
															Category 
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
															Investment Limit
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
															Turnover Limit
														</th>
													</tr>
												</thead>

												<tbody>
													{[
														["Micro Enterprise", "Up to ₹1 crore","Up to ₹5 crore"],
														["Small Enterprise", "Up to ₹10 crore","Up to ₹50 crore"],
														["Medium Enterprise", "Up to ₹50 crore","Up to ₹250 crore"],
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
											<p className='text'>Hybrid criteria ensure a business is upgraded only when it exceeds both thresholds.</p>
										</div>


								<h3 style={{ marginTop: "40px", color: '#0b1972' }}>Documents & Information Required</h3>
								<br/>
								<p className='text'>No physical documents are needed. Ensure you have:</p>
								<br/>
								<h6 style={{ color: '#0b1972' }}> For Proprietorship:</h6>
								<br />
								<ul className="benefit-list style-2">
									<li>
										<div className="icon">
											<i className="icon-check" />
										</div>
										<p>
											Aadhaar number of the owner
										</p>
									</li>
									<li>
										<div className="icon">
											<i className="icon-check" />
										</div>
										<p>
											PAN of the business/individual
										</p>
									</li>
										<li>
										<div className="icon">
											<i className="icon-check" />
										</div>
										<p>
											GST details (if applicable)

										</p>
									</li>
									<li>
										<div className="icon">
											<i className="icon-check" />
										</div>
										<p>
											Mobile number linked with Aadhaar
										</p>
									</li>
								</ul>
								<h6 style={{ color: '#0b1972' }}> For Partnership / LLP / Company:</h6>
								<br />
									<ul className="benefit-list style-2">
										<li>
											<div className="icon">
												<i className="icon-check" />
											</div>
											<p>
												PAN of the entity
											</p>
										</li>
										<li>
											<div className="icon">
												<i className="icon-check" />
											</div>
											<p>
												Aadhaar of authorised signatory
											</p>
										</li>
										<li>
											<div className="icon">
												<i className="icon-check" />
											</div>
											<p>
												GSTIN of the entity
											</p>
										</li>
										<li>
											<div className="icon">
												<i className="icon-check" />
											</div>
											<p>
												Company registration details
											</p>
										</li>
									</ul>

								<h3 style={{ marginTop: "40px", color: '#0b1972' }}>Step-by-Step Udyam Registration Process</h3>
								<br />
									<h6 style={{ color: '#0b1972' }}> Step 1: Visit the Official Udyam Portal</h6>
									<br />
									<p>
										Go to{" "}
										<a
											href="https:/ udyamregistration.gov.in"
											target="_blank"
											rel="noopener noreferrer"
											className="mca-link"
										>
											https:/ udyamregistration.gov.in
										</a>{" "}
										</p>
										<br/>
									<h6 style={{ color: '#0b1972' }}> Step 2: Register Using Aadhaar</h6>
									<br />	
									<p className='text'>Depending on business type:</p>
									<ul className="benefit-list style-2">
										<li>
											<div className="icon">
												<i className="icon-check" />
											</div>
											<p>
												Proprietors: Aadhaar of owner
											</p>
										</li>
										<li>
											<div className="icon">
												<i className="icon-check" />
											</div>
											<p>
												Company/LLP: Aadhaar of authorised signatory
											</p>
										</li>
										<p>Validation via OTP is mandatory.</p>
									</ul>
									<h6 style={{ color: '#0b1972' }}> Step 3: Enter PAN & Business Details</h6>
									<br />
									<p className="text">The portal auto-fetches:</p>
									<ul className="benefit-list style-2">
										<li>
											<div className="icon">
												<i className="icon-check" />
											</div>
											<p>
												PAN details
											</p>
										</li>
										<li>
											<div className="icon">
												<i className="icon-check" />
											</div>
											<p>
												ITR information
											</p>
										</li>
										<li>
											<div className="icon">
												<i className="icon-check" />
											</div>
											<p>
												GST turnover (if GSTIN exists)
											</p>
										</li>
										<p className='text'>You must enter:</p>
										<br/>
										<li>
											<div className="icon">
												<i className="icon-check" />
											</div>
											<p>
												Type of organisation
											</p>
										</li>
										<li>
											<div className="icon">
												<i className="icon-check" />
											</div>
											<p>
												Address
											</p>
										</li>
										<li>
											<div className="icon">
												<i className="icon-check" />
											</div>
											<p>
												Bank details
											</p>
										</li>
										<li>
											<div className="icon">
												<i className="icon-check" />
											</div>
											<p>
												Number of employees
											</p>
										</li>
										<li>
											<div className="icon">
												<i className="icon-check" />
											</div>
											<p>
												Business activity (manufacturing/services)
											</p>
										</li>
									</ul>

									<h6 style={{ color: '#0b1972' }}> Step 4: Submit & Validate</h6>
									<br />
									<p className="text">The portal matches the filled details with CBDT/GST databases</p>
									<h6 style={{ color: '#0b1972' }}> Step 5: Receive URN & MSME Certificate</h6>
									<br />
									<p className="text">You instantly get:</p>
										<ul className="benefit-list style-2">
											<li>
												<div className="icon">
													<i className="icon-check" />
												</div>
												<p>
													Udyam Registration Number (URN)
												</p>
											</li>
											<li>
												<div className="icon">
													<i className="icon-check" />
												</div>
												<p>
													E-certificate of MSME recognition
												</p>
											</li>
											<p className="text">Both are permanently available online.</p>
										</ul>

										<h3 style={{ marginTop: "40px", color: '#0b1972' }}>Benefits of Udyam Registration</h3>
											<br />
											<h6 style={{ color: '#0b1972' }}> ✔ Priority Sector Lending</h6>
											<p className="text">Banks earmark a special lending quota for MSMEs with simplified collateral norms.</p>
											<br/>
											<h6 style={{ color: '#0b1972' }}> ✔ Subsidies & Incentives</h6>
											<p className="text">Including:</p>
												<ul className="benefit-list style-2">
													<li>
														<div className="icon">
															<i className="icon-check" />
														</div>
														<p>
															Capital & interest subsidies
														</p>
													</li>
													<li>
														<div className="icon">
															<i className="icon-check" />
														</div>
														<p>
															Technology upgradation schemes
														</p>
													</li>
													<li>
														<div className="icon">
															<i className="icon-check" />
														</div>
														<p>
															ISO certification reimbursement
														</p>
													</li>
													<li>
														<div className="icon">
															<i className="icon-check" />
														</div>
														<p>
															Patent & trademark subsidies
														</p>
													</li>
												</ul>

											<h6 style={{ color: '#0b1972' }}> ✔ Eligibility for Government Tenders</h6>
											<br/>
											<p className="text">Many tenders exclusively allow MSMEs to participate with:</p>
											<ul className="benefit-list style-2">
													<li>
														<div className="icon">
															<i className="icon-check" />
														</div>
														<p>
															Exemption from EMD
														</p>
													</li>
													<li>
														<div className="icon">
															<i className="icon-check" />
														</div>
														<p>
															Relaxations in turnover/experience criteria
														</p>
													</li>
											</ul>
											
										<h6 style={{ color: '#0b1972' }}> ✔ Protection Against Delayed Payments</h6>
										<p className="text">Buyers must pay within 45 days, failing which compound interest is applicable under MSME Act.</p>
										<br/>
										<h6 style={{ color: '#0b1972' }}> ✔ Access to GeM Portal</h6>
										<p className="text">MSMEs can list and sell products to government departments directly.</p>
										<br/>
										<h6 style={{ color: '#0b1972' }}> ✔ Easier Business Loans</h6>
										<p className="text">Eligibility for:</p>
										<br/>
											<ul className="benefit-list style-2">
													<li>
														<div className="icon">
															<i className="icon-check" />
														</div>
														<p>
															CGTMSE collateral-free loans
														</p>
													</li>
													<li>
														<div className="icon">
															<i className="icon-check" />
														</div>
														<p>
															Mudra loans
														</p>
													</li>
													<li>
														<div className="icon">
															<i className="icon-check" />
														</div>
														<p>
															Stand-up India schemes
														</p>
													</li>
											</ul>

										<h3 style={{ marginTop: "40px", color: '#0b1972' }}>Post-Registration Responsibilities</h3>
											<br />
											<h6 style={{ color: '#0b1972' }}> 1. Update Details Annually</h6>	
											<p className="text">If turnover or investment changes, update your Udyam profile</p>
											<br/>
											<h6 style={{ color: '#0b1972' }}> 2. Link GSTIN (Mandatory for GST taxpayers)</h6>												
											<p className="text">Ensures automatic data fetch and compliance.</p>
											<br/>
											<h6 style={{ color: '#0b1972' }}> 3. Reclassification</h6>					
											<p className="text">If your business grows beyond limits, Udyam category updates automatically</p>
											<br/>

								<h3 style={{ color: '#0b1972' }}>Conclusion</h3>
								<br />
								<p> Udyam Registration is essential for MSMEs looking to formalise operations, access easier credit,
									receive government incentives, and gain competitive benefits in tenders. The simple, one-time
									registration ensures long-term advantages and recognises your business under the MSME
									framework
								</p>
                                <br />
                                <p>Bisways Consulting Group supports businesses across India in obtaining Udyam Registration,
									updating details, linking GSTIN, resolving portal errors, and ensuring eligibility for MSME schemes
									and benefits.
								</p>
        

								<br /><span className="line" />
								<div className="bot mb-70">
									<div className="tags">
										<h6>
											Tags :
										</h6>
										<Link href="" > Udyam Registration | MSME | Small Business |Entrepreneurship</Link>
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
							Need help completing Udyam Registration or applying MSME benefits?
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
							Connect with Bisways Consulting Group — your trusted partner for Business
							Registration, MSME Compliance, and Enterprise Growth Support.
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
