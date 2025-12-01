
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
									Every individual holding a Director Identification Number (DIN) must verify and update their
									personal details annually by filing Form DIR-3 KYC with the Ministry of Corporate Affairs (MCA).
								</p>
								<p className="text mt-3 mb-20">
									This process ensures the accuracy of directors’ information, prevents misuse of DINs, and keeps
									the company registry transparent.
								</p>
								<br/>
								<p className="text mb-20">
									Failure to file the KYC form on time leads to automatic DIN deactivation and attracts late filing
									penalties.
								</p>
								<p className="text mb-35">
									In this article, Bisways Consulting Group explains who must file DIR-3 KYC, how to complete it
									online or via web form, and the consequences of missing the deadline.
								</p>


								<h3 style={{ marginTop: "40px", color: '#0b1972' }}>What Is Form DIR-3 KYC?</h3>
								<br />
								<p className="text ">
									Form DIR-3 KYC is a mandatory annual filing under Rule 12A of the Companies (Appointment and
									Qualification of Directors) Rules, 2014.
								</p>
								<br />
								<p className="text ">
									It verifies a director’s identity, address, contact details, and email through OTP authentication and
									digital signature validation.
								</p>
								<br />
								<p className="text ">
									The MCA introduced this filing to prevent duplication or misuse of DINs and to maintain accurate
									records of directors across all companies.
								</p>

								<br />
								{/* <h5 style={{ color: '#0b1972' }}> There are two main categories of annual filings:</h5>
								<br /> */}
								<h3 style={{ marginTop: "40px", color: '#0b1972' }}>Who Needs to File DIR-3 KYC?</h3>
								<br />
								<ul className="benefit-list style-2">
									<li>
										<div className="icon">
											<i className="icon-check" />
										</div>
										<p>
											Every individual who has been allotted a DIN on or before the end of a financial year.
										</p>
									</li>
									<li>
										<div className="icon">
											<i className="icon-check" />
										</div>
										<p>
											Even if the person is not currently a director, the filing is required to keep the DIN active.
										</p>
									</li>

									<li>
										<div className="icon">
											<i className="icon-check" />
										</div>
										<p>
											First-time directors and those who received their DIN during the current year must file before the due date.
										</p>
									</li>
                                  
                                    <p>💡 Example: If you were allotted a DIN on 15 March 2024, you must file DIR-3 KYC for FY 2023-24 by 30 September 2024.
									</p>
								</ul>

								<h3 style={{ marginTop: "40px", color: '#0b1972' }}>Types of KYC Forms</h3>
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
														borderColor: "white"
													}}
												>
													Form Type
												</th>
												<th
													style={{
														background: "#0b1972",
														color: "white",
														padding: "14px 18px",
														textAlign: "left",
														fontWeight: 600,
														fontSize: "20px",
														borderColor: "white"
													}}
												>
													Who Should Use It 
												</th>
												<th
													style={{
														background: "#0b1972",
														color: "white",
														padding: "14px 18px",
														textAlign: "left",
														fontWeight: 600,
														fontSize: "20px",
														borderColor: "white"
													}}
												>
													Authentication Mode
												</th>
											</tr>
										</thead>

										<tbody>
											{[
												["DIR-3 KYC (e-Form) ", "For first-time filing or when updating details(email, phone, address,etc.)","Requires Digital Signature (DSC) and CA/CS/CMA attestation"],
												["DIR-3 KYC-WEB ", "For directors who have already filed KYC previously and have no changes","OTP verification through registered email & mobile"],

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
															color: "#0b1972",
														}}
													>
														{row[2]}
													</td>

												</tr>
											))}
										</tbody>
									</table>

									<p>⚠ Important: Any change in director’s particulars (address, nationality, etc.) must first be updated through Form DIR-6 before submitting KYC.</p>

								</div>


								<h3 style={{ color: '#0b1972' }}>Documents Required for DIR-3 KYC</h3>
								<br />
								<ul className="benefit-list style-2">
									<li>
										<p>1. PAN Card (for Indian nationals).</p>
									</li>
									<li>
										<p>2. Passport (mandatory for foreign nationals).</p>
									</li>
                                    	<li>
										<p>3. Aadhaar Card.</p>		
									</li>
                                    	<li>
										<p>4 .Present Address Proof (Electricity Bill / Bank Statement not older than 2 months).</p>
									</li>
                                      	<li>
										<p>5. Personal Email ID and Mobile Number (for OTP verification).</p>
									</li>
										<li>
										<p>6. Digital Signature Certificate (DSC) of the Director.</p>
									</li>
								</ul>
								<br />




                                <h3 style={{ marginTop: "40px", color: '#0b1972' }}> Step-by-Step Filing Process</h3>
								<br />
								<ul className="benefit-list style-2">
									<li>
										<div className="icon">
											<i className="icon-check" />
										</div>
										<p> Log in to the{" "} <a   href="https://www.mca.gov.in/" target="_blank" rel="noopener noreferrer" style={{ textDecoration: "underline" }} > MCA Portal </a>{" "}.
										</p>

									</li>
									<li>
										<div className="icon">
											<i className="icon-check" />
										</div>
										<p>
											Download and fill the DIR-3 KYC Form with required details.
										</p>
									</li>
                                    <li>
										<div className="icon">
											<i className="icon-check" />
										</div>
										<p>
											Attach proofs and self-attested documents.
										</p>
									</li>
                                    <li>
										<div className="icon">
											<i className="icon-check" />
										</div>
										<p>
											Verify using DSC and have it certified by a practising CA/CS/CMA.
										</p>
									</li>
									  <li>
										<div className="icon">
											<i className="icon-check" />
										</div>
										<p>
											Upload the form and note the SRN Acknowledgement.
										</p>
									</li>
									<li>
										<div className="icon">
											<i className="icon-check" />
										</div>
										<p>
											Alternatively, use DIR-3 KYC-WEB for OTP verification if no changes exist.
										</p>
									</li>
								</ul>

{/* ================================================================================================================================= */}

								<h3 style={{ color: '#0b1972' }}>Due Date and Fees</h3>
								<br />
								<ul className="benefit-list style-2">
									<li>
										<div className="icon">
											<i className="icon-check" />
										</div>
										<p>
											Due Date: 30 September of each financial year.
										</p>
									</li>
									<li>
										<div className="icon">
											<i className="icon-check" />
										</div>
										<p>
											Filing Fee: Nil (if filed on time).
										</p>
									</li>
                                    	<li>
										<div className="icon">
											<i className="icon-check" />
										</div>
										<p>
											Late Fee: ₹5,000 per DIN (if filed after due date).
										</p>
									</li>
									<br />

                                   <p>💡 Pro Tip: File well before the deadline to avoid system congestion on the MCA portal in September.</p>
								</ul>
								
								<br />
							
								<h3 style={{ color: '#0b1972' }}>Consequences of Non-Filing</h3>
								<br />
								<ul className="benefit-list style-2">
									<li>
										<div className="icon">
											<i className="icon-check" />
										</div>
										<p>
											DIN becomes ‘Deactivated due to non-filing of KYC’
										</p>
									</li>
									<li>
										<div className="icon">
											<i className="icon-check" />
										</div>
										<p>
											Director cannot sign or authorise any MCA forms.
										</p>
									</li>
                                    	<li>
										<div className="icon">
											<i className="icon-check" />
										</div>
										<p>
											DIN reactivation requires payment of ₹5,000 penalty via Form DIR-3 KYC.
										</p>
									</li>
										<li>
										<div className="icon">
											<i className="icon-check" />
										</div>
										<p>
											Prolonged non-compliance may affect other ROC filings and board positions.
										</p>
									</li>
									<br />
								</ul>
								
								<br />
								<h3 style={{ color: '#0b1972' }}>Conclusion</h3>
								<br />
								<p> Filing DIR-3 KYC annually is a simple but essential compliance step to maintain active DIN status and avoid penalties.</p>
                                <p>A timely KYC submission also reinforces corporate transparency and director credibility.</p>
                                <br />
                                <p>Bisways Consulting Group assists directors and companies in tracking KYC deadlines, renewing
DSCs, and completing ROC 		filings accurately through end-to-end MCA support.</p>
                                <br/>
                                

								<br /><span className="line" />
								<div className="bot mb-70">
									<div className="tags">
										<h6>
											Tags :
										</h6>
										<Link href="" > DIR-3 KYC | Director Update | MCA Filing</Link>
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
							Need help filing DIR-3 KYC or reactivating your DIN?
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
							Connect with Bisways Consulting Group — your trusted partner for MCA Filings, DIN KYC, and Corporate Compliance Support.
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
