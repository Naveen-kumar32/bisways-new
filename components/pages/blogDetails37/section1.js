
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
									Every food business in India—whether it is a small home kitchen, cloud kitchen, restaurant, online seller,
									manufacturing unit, or importer—must obtain an FSSAI registration or licence to legally operate.
									With the updated 2025 FSSAI norms, compliance requirements have become more structured,
									ensuring higher standards of food safety, hygiene, and traceability.
								</p>
								<p className="text mb-20">
									Whether the company is shifting its office within the same city, to another city within the same
									state, or to a different state entirely, the Companies Act, 2013 lays down specific procedural and
									documentary requirements.
								</p>


								<h3 style={{ marginTop: "40px", color: '#0b1972' }}>What Is FSSAI Registration?</h3>
								<br />
								<p>
									FSSAI registration is a mandatory food safety licence issued by the Food Safety and Standards
									Authority of India (FSSAI).
								</p>
								<br />
								<p>It certifies that a food business follows:</p>
								<br />
								<ul className="benefit-list style-2">
									<li>
										<div className="icon">
											<i className="icon-check" />
										</div>
										<p>Food safety standards</p>
									</li>

									<li>
										<div className="icon">
											<i className="icon-check" />
										</div>
										<p>Proper hygiene practices</p>
									</li>

									<li>
										<div className="icon">
											<i className="icon-check" />
										</div>
										<p>Labelling and packaging rules</p>
									</li>

									<li>
										<div className="icon">
											<i className="icon-check" />
										</div>
										<p>Manufacturing/processing regulations</p>
									</li>
								</ul>

								<p>No food business can legally operate without it.</p>



								<h3 style={{ marginTop: "40px", color: '#0b1972' }}>Types of FSSAI Registration (2025 Norms)</h3>
								<br />
								<h5 style={{ color: '#0b1972' }}> 1. Basic FSSAI Registration</h5>
								<br />
								<p>
									For small FBOs with turnover up to ₹12 lakh per annum.
								</p>
								<br />
								<p> Suitable for:</p>
								<br />
								<ul className="benefit-list style-2">
									<li>
										<div className="icon">
											<i className="icon-check" />
										</div>
										<p>Small retailers</p>
									</li>

									<li>
										<div className="icon">
											<i className="icon-check" />
										</div>
										<p>Homemade food sellers</p>
									</li>

									<li>
										<div className="icon">
											<i className="icon-check" />
										</div>
										<p>Small food stalls</p>
									</li>

									<li>
										<div className="icon">
											<i className="icon-check" />
										</div>
										<p>Cottage food businesses</p>
									</li>
								</ul>



								<h5 style={{ color: '#0b1972' }}>2. State FSSAI Licence</h5>
								<br />
								<p>For businesses with turnover ₹12 lakh to ₹20 crore or specific medium-scale operations.</p>
								<br />
								<p> Examples:</p>
								<br />
								<ul className="benefit-list style-2">
									<li>
										<div className="icon">
											<i className="icon-check" />
										</div>
										<p>Restaurants</p>
									</li>

									<li>
										<div className="icon">
											<i className="icon-check" />
										</div>
										<p>Medium manufacturers</p>
									</li>

									<li>
										<div className="icon">
											<i className="icon-check" />
										</div>
										<p>Cloud kitchens</p>
									</li>

									<li>
										<div className="icon">
											<i className="icon-check" />
										</div>
										<p>Storage and transport units</p>
									</li>
								</ul>




								<h5 style={{ color: '#0b1972' }}>3. Central FSSAI Licence</h5>
								<br />
								<p>
									Mandatory for:
								</p>
								<br />
								<ul className="benefit-list style-2">
									<li>
										<div className="icon">
											<i className="icon-check" />
										</div>
										<p>Large manufacturers</p>
									</li>

									<li>
										<div className="icon">
											<i className="icon-check" />
										</div>
										<p>Importers/exporters</p>
									</li>

									<li>
										<div className="icon">
											<i className="icon-check" />
										</div>
										<p>Businesses operating in multiple states</p>
									</li>

									<li>
										<div className="icon">
											<i className="icon-check" />
										</div>
										<p>Turnover above ₹20 crore</p>
									</li>

									<li>
										<div className="icon">
											<i className="icon-check" />
										</div>
										<p>E-commerce food operators</p>
									</li>
								</ul>


								<h3 style={{ marginTop: "40px", color: '#0b1972' }}>Who Needs an FSSAI Registration?</h3>
								<br />
								<h5 style={{ color: '#0b1972' }}>All food-related businesses must register, including:</h5>
								<br />
								<ul className="benefit-list style-2">
									<li>
										<div className="icon">
											<i className="icon-check" />
										</div>
										<p>Restaurants, cafés, bakeries</p>
									</li>

									<li>
										<div className="icon">
											<i className="icon-check" />
										</div>
										<p>Cloud kitchens, dark kitchens, and online food sellers</p>
									</li>

									<li>
										<div className="icon">
											<i className="icon-check" />
										</div>
										<p>Home-based food businesses</p>
									</li>

									<li>
										<div className="icon">
											<i className="icon-check" />
										</div>
										<p>Packaged food manufacturers</p>
									</li>

									<li>
										<div className="icon">
											<i className="icon-check" />
										</div>
										<p>Food processing units</p>
									</li>

									<li>
										<div className="icon">
											<i className="icon-check" />
										</div>
										<p>Dairy units, cold storage, wholesalers</p>
									</li>

									<li>
										<div className="icon">
											<i className="icon-check" />
										</div>
										<p>Transporters, distributors, retailers</p>
									</li>

									<li>
										<div className="icon">
											<i className="icon-check" />
										</div>
										<p>E-commerce food delivery platforms</p>
									</li>

									<li>
										<div className="icon">
											<i className="icon-check" />
										</div>
										<p>Importers and exporters of food products</p>
									</li>
								</ul>


								<h3 style={{ marginTop: "40px", color: '#0b1972' }}>Documents Required for FSSAI Registration</h3>
								<br />
								<h5 style={{ color: '#0b1972' }}>For Basic Registration</h5>
								<br />
								<ul className="benefit-list style-2">
									<li>
										<div className="icon">
											<i className="icon-check" />
										</div>
										<p>Passport-size photograph</p>
									</li>

									<li>
										<div className="icon">
											<i className="icon-check" />
										</div>
										<p>Aadhaar/PAN of proprietor</p>
									</li>

									<li>
										<div className="icon">
											<i className="icon-check" />
										</div>
										<p>Business address proof</p>
									</li>

									<li>
										<div className="icon">
											<i className="icon-check" />
										</div>
										<p>Food safety declaration</p>
									</li>

									<li>
										<div className="icon">
											<i className="icon-check" />
										</div>
										<p>Nature of business details</p>
									</li>
								</ul>

								<h5 style={{ color: '#0b1972' }}>For State Licence</h5>
								<br />
								<p> Includes Basic documents +</p>
								<br />
								<ul className="benefit-list style-2">
									<li>
										<div className="icon">
											<i className="icon-check" />
										</div>
										<p>Blueprint/layout of premises</p>
									</li>

									<li>
										<div className="icon">
											<i className="icon-check" />
										</div>
										<p>Equipment list</p>
									</li>

									<li>
										<div className="icon">
											<i className="icon-check" />
										</div>
										<p>Water testing report</p>
									</li>

									<li>
										<div className="icon">
											<i className="icon-check" />
										</div>
										<p>NOC from local authorities</p>
									</li>

									<li>
										<div className="icon">
											<i className="icon-check" />
										</div>
										<p>Food safety management plan</p>
									</li>
								</ul>



								<h5 style={{ color: '#0b1972' }}>For Central Licence</h5>
								<br />
								<p>Includes State documents +</p>
								<br />
								<ul className="benefit-list style-2">
									<li>
										<div className="icon">
											<i className="icon-check" />
										</div>
										<p>Import–export code (IEC)</p>
									</li>

									<li>
										<div className="icon">
											<i className="icon-check" />
										</div>
										<p>Production capacity proof</p>
									</li>

									<li>
										<div className="icon">
											<i className="icon-check" />
										</div>
										<p>Source of raw materials</p>
									</li>

									<li>
										<div className="icon">
											<i className="icon-check" />
										</div>
										<p>E-commerce operator details (if applicable)</p>
									</li>
								</ul>



								<h3 style={{ marginTop: "40px", color: '#0b1972' }}>Step-by-Step FSSAI Registration Process (2025)</h3>
								<br />
								<h5 style={{ color: '#0b1972' }}>Step 1: Determine Licence Type</h5>
								<br />
								<p>Evaluate business turnover, scale, and operations.</p>
								<br />
								<h5 style={{ color: '#0b1972' }}>Step 2: Create Account on FoSCoS Portal</h5>
								<br />
								<p>Visit  <Link href="https://foscos.fssai.gov.in">https://foscos.fssai.gov.in</Link> and register.</p>
								<br />

								<h5 style={{ color: '#0b1972' }}>Step 3: Fill Application Form</h5>
								<br />
								<p>Select:</p>
								<br />
								<ul className="benefit-list style-2">
									<li>
										<div className="icon">
											<i className="icon-check" />
										</div>
										<p>Basic Registration</p>
									</li>

									<li>
										<div className="icon">
											<i className="icon-check" />
										</div>
										<p>State Licence</p>
									</li>

									<li>
										<div className="icon">
											<i className="icon-check" />
										</div>
										<p>Central Licence</p>
									</li>
								</ul>
								<div>Provide FBO details, business activity, premises information, and owner details.</div>


								<h5 style={{ color: '#0b1972' }}>Step 4: Upload Documents</h5>
								<br />
								<p> Upload all required proofs in the correct format.</p>
								<br />

								<h5 style={{ color: '#0b1972' }}>Step 5: Pay Government Fees</h5>
								<br />
								<p>Fees vary based on category and duration.</p>
								<br />

								<br />
								<h5 style={{ color: '#0b1972' }}>Step 6: Verification by Authorities</h5>
								<br />
								<p>
									FSSAI may conduct:
								</p>
								<br />
								<ul className="benefit-list style-2">
									<li>
										<div className="icon">
											<i className="icon-check" />
										</div>
										<p>Inspection</p>
									</li>

									<li>
										<div className="icon">
											<i className="icon-check" />
										</div>
										<p>Document verification</p>
									</li>

									<li>
										<div className="icon">
											<i className="icon-check" />
										</div>
										<p>Clarification requests</p>
									</li>
								</ul>


								<h5 style={{ color: '#0b1972' }}> Step 7: Licence Issuance</h5>
								<br />
								<p>
									After approval, downloadable licence is available on FoSCoS.
								</p>



								<h3 style={{ marginTop: "40px", color: '#0b1972' }}>FSSAI Renewal and Validity (2025 Rules)</h3>
								<br />

								<ul className="benefit-list style-2">
									<li>
										<div className="icon">
											<i className="icon-check" />
										</div>
										<p>FSSAI licences are valid for 1 to 5 years.</p>
									</li>

									<li>
										<div className="icon">
											<i className="icon-check" />
										</div>
										<p>Renewal must be done before expiry, preferably 30 days in advance.</p>
									</li>

									<li>
										<div className="icon">
											<i className="icon-check" />
										</div>
										<p>Late renewal attracts penalty or cancellation of licence.</p>
									</li>

									<li>
										<div className="icon">
											<i className="icon-check" />
										</div>
										<p>Businesses must update profile whenever changes occur (address, ownership, category).</p>
									</li>
								</ul>




								<h3 style={{ marginTop: "40px", color: '#0b1972' }}>Key Compliance Requirements for Food Businesses</h3>
								<br />

								<ul className="benefit-list style-2">
									<li>
										<div className="icon">
											<i className="icon-check" />
										</div>
										<p>Display FSSAI licence number at premises and on food packaging</p>
									</li>

									<li>
										<div className="icon">
											<i className="icon-check" />
										</div>
										<p>Maintain hygiene and safety standards as per Schedule 4</p>
									</li>

									<li>
										<div className="icon">
											<i className="icon-check" />
										</div>
										<p>File annual returns (Form D1 and D2, where applicable)</p>
									</li>

									<li>
										<div className="icon">
											<i className="icon-check" />
										</div>
										<p>Maintain worker hygiene, pest control, and temperature logs</p>
									</li>

									<li>
										<div className="icon">
											<i className="icon-check" />
										</div>
										<p>Ensure proper labelling and allergen declarations</p>
									</li>

									<li>
										<div className="icon">
											<i className="icon-check" />
										</div>
										<p>Use food-grade packaging</p>
									</li>

									<li>
										<div className="icon">
											<i className="icon-check" />
										</div>
										<p>Cooperate with FSSAI inspections</p>
									</li>
								</ul>




								<h3 style={{ marginTop: "40px", color: '#0b1972' }}>Penalties for Non-Compliance</h3>
								<br />
								<p> Failure to register or violating FSSAI rules may lead to:</p>
								<br />

								<ul className="benefit-list style-2">
									<li>
										<div className="icon">
											<i className="icon-check" />
										</div>
										<p>Penalty up to ₹5 lakh</p>
									</li>

									<li>
										<div className="icon">
											<i className="icon-check" />
										</div>
										<p>Closure of business</p>
									</li>

									<li>
										<div className="icon">
											<i className="icon-check" />
										</div>
										<p>Product seizure</p>
									</li>

									<li>
										<div className="icon">
											<i className="icon-check" />
										</div>
										<p>Cancellation of licence</p>
									</li>

									<li>
										<div className="icon">
											<i className="icon-check" />
										</div>
										<p>Legal prosecution in severe cases</p>
									</li>
								</ul>

								<h3 style={{ marginTop: "40px", color: '#0b1972' }}>Who Benefits from Proper FSSAI Licensing?</h3>
								<br />


								<ul className="benefit-list style-2">
									<li>
										<div className="icon">
											<i className="icon-check" />
										</div>
										<p>Startups establishing credibility</p>
									</li>

									<li>
										<div className="icon">
											<i className="icon-check" />
										</div>
										<p>Restaurants listed on Swiggy/Zomato</p>
									</li>

									<li>
										<div className="icon">
											<i className="icon-check" />
										</div>
										<p>Manufacturers selling to supermarkets</p>
									</li>

									<li>
										<div className="icon">
											<i className="icon-check" />
										</div>
										<p>Online food sellers needing brand trust</p>
									</li>

									<li>
										<div className="icon">
											<i className="icon-check" />
										</div>
										<p>Exporters ensuring global compliance</p>
									</li>
								</ul>

								<p>An FSSAI licence builds customer confidence and opens doors for business growth.</p>





								<h3 style={{ color: '#0b1972' }}>Conclusion</h3>
								<br />
								<p> FSSAI registration is essential for any food business in India. With the updated 2025 norms, food
									safety compliance has become more transparent and structured. Whether you’re a small home
									kitchen or a large food manufacturer, obtaining and renewing the correct FSSAI licence ensures legal
									protection, trust, and long-term business stability.
									<br />
									Bisways Consulting Group assists businesses with FSSAI registration, licence renewal, FoSCoS
									filings, food safety audits, and complete compliance support for food businesses.</p>

								<br />
								<br /><span className="line" />
								<div className="bot mb-70">
									<div className="tags">
										<h6>
											Tags :
										</h6>
										<Link href="" >
											FSSAI | Food Licence | Registration | Compliance</Link>
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
							Need help applying for FSSAI Registration or upgrading your
							food licence?
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
							Connect with Bisways Consulting Group — your trusted partner for Food Licensing, Compliance,
							and Regulatory Support.
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
