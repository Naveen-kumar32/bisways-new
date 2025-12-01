
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
									Registering a Private Limited Company (Pvt Ltd) is the most popular choice for startups in India
									because it provides limited liability protection, investor friendliness, scalability, and strong legal
									credibility.
								</p>
								<p className="text mt-3 mb-20">
									With MCA’s continuous digital upgrades and the SPICe+ system, the entire incorporation process is
									now faster, paperless, and more efficient.
								</p>
								<p className="text mt-3 mb-20">
									This 2025 guide explains the step-by-step registration process, documents required, DSC, DIN,
									timelines, costs, and key compliance requirements for founders.
								</p>

								<h3 style={{ marginTop: "40px", color: '#0b1972' }}>What Is a Private Limited Company?</h3>
								<br />
									<p className="text ">
										A Private Limited Company is a corporate entity registered under the Companies Act, 2013. It
										provides:
									</p>
									<br/>	
										<p className="text ">● Limited liability to shareholders</p>
										<p className="text ">● Separate legal identity</p>
										<p className="text ">● Better funding options</p>
										<p className="text ">● Perpetual succession</p>
										<p className="text ">● Structured compliance</p>
									<br/>
									<p className ="text">It is ideal for startups planning to raise investment, scale, or operate professionally.</p>
									<br/>
								
								<h3 style={{ marginTop: "40px", color: '#0b1972' }}>Step-by-Step Process to Register a Private Limited Company (2025)</h3>
								<br/>
								<p className="text "><strong>Step 1: Obtain Digital Signature Certificate (DSC)</strong></p>
								<br />	
								<p className="text ">DSC is mandatory for signing incorporation documents online</p>
								<br />
								<p className="text ">Documents needed:</p>
									<p className="text "> ● PAN</p>
									<p className="text "> ● Aadhaar</p>
									<p className="text "> ● Photo</p>
									<p className="text "> ● Email & Mobile</p>
								<p className="text ">Time required: 1–2 days</p>	
								<br/>	

								<p className="text "><strong>Step 2: Apply for Director Identification Number (DIN)</strong></p>
								<br />	
								<p className='text'>DIN is allotted to directors through the SPICe+ Form.</p>
								<p className='text'><strong>Note:</strong> 2025 update—No separate DIN application required unless director is not pre-registered.</p>
								<br />
								<p className="text "><strong>Step 3: Name Reservation (SPICe+ Part A)</strong></p>
								<br />	
								<p className="text ">Propose two names based on:</p>
								<br />
									<p className="text "> ● Uniqueness</p>
									<p className="text "> ● Trademark availability</p>
									<p className="text "> ● Business relevance</p>
								<p className="text "> MCA approves names within 1–2 working days.</p>
								<br/>
								<p className="text "><strong>Step 4: File SPICe+ Part B (Main Incorporation Form)</strong></p>
								<br />	
								<p className="text ">This includes:</p>
								<br />
									<p className="text "> ● Uniqueness</p>
									<p className="text "> ● Registered office address</p>
									<p className="text "> ● Directors & shareholders</p>
									<p className="text "> ● Capital structure</p>
									<p className="text "> ● PAN & TAN</p>
									<p className="text "> ● EPFO & ESIC registration</p>
									<p className="text "> ● Professional Tax (where applicable)</p>
									<p className="text "> Bank account creation (via AGILE-PRO-S)</p>
								<br/>
								<p className="text "><strong>Mandatory attachments:</strong></p>
									<p className="text "> ● ID & address proofs</p>
									<p className="text "> ● Utility bill (not older than 2 months)</p>
									<p className="text "> ● NOC from property owner</p>
									<p className="text "> ● MOA & AOA</p>
								<p className="text "> Time required: 3–5 days</p>

								<p className="text "><strong>Step 5: Issue of COI (Certificate of Incorporation)</strong></p>
								<br />	
								<p className="text ">Once approved, MCA issues:</p>
								<br/>
									<p className="text "> ● Certificate of Incorporation (COI)</p>
									<p className="text "> ● Corporate Identification Number (CIN)</p>
									<p className="text "> ● DIN for directors</p>
									<p className="text "> ● PAN & TAN automatically</p>
								<p className="text ">This completes the incorporation process.</p>
								<br/>
							

							<h3 style={{ marginTop: "40px", color: '#0b1972' }}>Cost of Registering a Private Limited Company (2025)</h3>
							<br/>
							<p className="text">Typical cost components:</p>

									<p className="text "> ● DSC cost</p>
									<p className="text "> ● Professional charges</p>
									<p className="text "> ● MCA filing fees</p>
									<p className="text "> ● Stamp duty (varies by state)</p>

								<p className="text">Estimated total: ₹7,000 – ₹20,000 depending on state & professional fee.</p>
								<br/>

							<h3 style={{ marginTop: "40px", color: '#0b1972' }}>Timeline to Register a Company</h3>
							<br/>
							<p className="text">Typical cost components:</p>
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
																	Stage  
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
																	Time
																</th>
															</tr>
														</thead>

														<tbody>
															{[
																["DSC ", "1–2 days"],
																["Name Approval", "1–2 days"],
																["SPICe+ Filing 2", "2–3 days"],
																["MCA Approval", "3–5 days"],
																["Total Time","7–12 days"]
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

							<h3 style={{ marginTop: "40px", color: '#0b1972' }}>Post-Incorporation Compliances for New Companies</h3>
							<br/>
							<p className="text">Every new Private Limited Company must complete:</p>
							<br/>	
								<p className="text ">✔ Board meeting within 30 days </p>
								<p className="text ">✔ Opening a bank account </p>
								<p className="text ">✔ Capital subscription & share certificates</p>
								<p className="text ">✔ Auditor appointment (ADT-1) within 30 days</p>
								<p className="text ">✔ Commencement of Business filing (INC-20A)</p>
								<p className="text ">✔ Maintaining statutory registers</p>
								<p className="text ">✔ GST, MSME, Shops & Establishment registration (if applicable)</p>

							<h3 style={{ marginTop: "40px", color: '#0b1972' }}>Why Startups Prefer Private Limited Company Structure</h3>
							<br/>	
								<p className="text ">● Angel & VC investment friendly </p>
								<p className="text ">● Easy ESOP allocation </p>
								<p className="text ">● Strong brand credibility</p>
								<p className="text ">● Tax benefits & structured governance</p>
								<p className="text ">● Scalability for multi-city operations</p>

								<h3 style={{ color: '#0b1972' }}>Conclusion</h3>
								<br />
								<p> Registering a Private Limited Company is the best pathway for founders who want structure,
									investor readiness, and long-term scalability.
								</p>
                                <br/>
								<p>With the simplified SPICe+ process and instant PAN/TAN allotment, startups can launch their
									business quickly and comply with MCA’s digital ecosystem.
								</p>
                                <p>Bisways Consulting Group assists with end-to-end company registration, documentation,
									DSC/DIN, SPICe+ filing, compliance setup, and post-incorporation support.
								</p>
        

								<br /><span className="line" />
								<div className="bot mb-70">
									<div className="tags">
										<h6>
											Tags :
										</h6>
										<Link href="" > Company Incorporation | SPICe+ | MCA Compliance | Startup India</Link>
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
							Need help registering your Private Limited Company?
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
							Connect with Bisways Consulting Group — your trusted partner for Company Incorporation, MCA
							Compliance, and Startup Advisory.
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
