
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
									Advance tax is a crucial compliance requirement for businesses, professionals, and individuals with
									significant non-salary income. Rather than paying all tax at the end of the financial year, taxpayers
									must pay tax in instalments throughout the year based on estimated income.
								</p>
								{/* <br /> */}
								<p className="text mt-3 mb-20">
									This ensures steady revenue for the government and reduces year-end tax burden for taxpayers.
								</p>
								<br/>
								<p className="text mb-20">
								This guide explains the advance tax rules, instalment schedule, due dates, interest under Sections
								208 to 211, and who is required to pay advance tax for FY 2022-23.
								</p>
								<br/>

								<h3 style={{ marginTop: "40px", color: '#0b1972' }}>What Is Advance Tax?</h3>
								<br />
								<p className="text ">
									Advance tax, also known as “pay-as-you-earn tax”, is income tax paid in instalments during the
									same financial year in which the income is earned.
								</p>
								<br/>
								<p>It applies to all taxpayers with tax liability of ₹10,000 or more (after TDS credits).</p>

								<h6 style={{ color: '#0b1972' }}> ✔ Individuals & Businesses Required to Pay Advance Tax:</h6>

								<ul className="benefit-list style-2">
									<li>
										<div className="icon">
											<i className="icon-check" />
										</div>
										<p>
											Proprietorship businesses
										</p>
									</li>
									<li>
										<div className="icon">
											<i className="icon-check" />
										</div>
										<p>
											Companies
										</p>
									</li>
										<li>
										<div className="icon">
											<i className="icon-check" />
										</div>
										<p>
											Freelancers & professionals
										</p>
									</li>
										<li>
										<div className="icon">
											<i className="icon-check" />
										</div>
										<p>
											Rental income earners
										</p>
									</li>
									<li>
										<div className="icon">
											<i className="icon-check" />
										</div>
										<p>
											Capital gains earners (with special rules)
										</p>
									</li>
									<li>
										<div className="icon">
											<i className="icon-check" />
										</div>
										<p>
											Individuals with interest, commission, or other income
										</p>
									</li>
								</ul>
								<h6 style={{ color: '#0b1972' }}> ❌ Exemption:</h6>
								<p>Resident senior citizens (60+) with no business income are exempt.</p>
								
								<h3 style={{ marginTop: "40px", color: '#0b1972' }}>Advance Tax Instalment Schedule (FY 2022-23)</h3>
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
													Due Date   
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
													Minimum % of Total Tax to Be Paid
												</th>
											</tr>
										</thead>

										<tbody>
											{[
												["15th June", "15%",],
												["15thSeptember", "45%",],
												["15th December", "75%",],
												["15th March", "100%",],

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

												</tr>
											))}
										</tbody>
									</table>
									<h3 style={{ marginTop: "40px", color: '#0b1972' }}>Notes:</h3>
									<ul className="benefit-list style-2">
										<li>
											<div className="icon">
												<i className="icon-check" />
											</div>
											<p>
											Taxpayers under Presumptive Taxation (44AD/44ADA) must pay entire 100% advance tax by
											15th March.
											</p>
										</li>
										<li>
											<div className="icon">
												<i className="icon-check" />
											</div>
											<p>
											Companies must follow quarterly instalments.
											</p>
										</li>
									</ul>

								</div>

								<h3 style={{ marginTop: "40px", color: '#0b1972' }}>How to Compute Advance Tax</h3>
								<br />
								<ul className="benefit-list style-2">
									<li>
										<p>
										 1. Estimate total income for the year
										</p>
									</li>
									<li>
										<p>
										2. Deduct eligible expenses and deductions (80C, 80D, 80G etc.)
										</p>
									</li>
									<li>
										<p>
										 3. Compute income tax on estimated income
										</p>
									</li>
									<li>
										<p>
										 4. Reduce TDS already deducted
										</p>
									</li>
									<li>
										<p>
										 5.Pay remaining tax as per instalment schedule
										</p>
									</li>
								</ul>

								<h3 style={{ marginTop: "40px", color: '#0b1972' }}>Interest for Delay or Non-Payment (Sections 234A, 234B, 234C)</h3>
								<br />
								<h6 style={{ color: '#0b1972' }}>Section 234B – Default in payment of advance tax</h6>
								<br />
								<ul className="benefit-list style-2">
									<li>
										<div className="icon">
											<i className="icon-check" />
										</div>
										<p>
										 Interest @ 1% per month if less than 90% of tax is paid by year-end.
										</p>
									</li>
								</ul>
								<h6 style={{ color: '#0b1972' }}>Section 234C – Delay in instalments</h6>
								<br />	
								<ul className="benefit-list style-2">
									<li>
										<div className="icon">
											<i className="icon-check" />
										</div>
										<p>
										 Interest applies for missing or shortfall in instalments:
										</p>
									</li>
									<li>
										<div className="icon">
											<i className="icon-check" />
										</div>
										<p>
										 15% instalment shortfall → interest @1%
										</p>
									</li>
									<li>
										<div className="icon">
											<i className="icon-check" />
										</div>
										<p>
										 45% instalment shortfall → interest @1%
										</p>
									</li>
									<li>
										<div className="icon">
											<i className="icon-check" />
										</div>
										<p>
										 75% instalment shortfall → interest @1%
										</p>
									</li>
									<li>
										<div className="icon">
											<i className="icon-check" />
										</div>
										<p>
										 100% instalment shortfall → interest @1%
										</p>
									</li>
								</ul>	
								<h6 style={{ color: '#0b1972' }}>Section 234A – Late filing of return</h6>
								<br />
								<ul className="benefit-list style-2">
									<li>
										<div className="icon">
											<i className="icon-check" />
										</div>
										<p>
										 Applies separately if return is not filed on time.
										</p>
									</li>
								</ul>	

								<h3 style={{ marginTop: "40px", color: '#0b1972' }}>Special Cases in Advance Tax</h3>
								<br />
								<h6 style={{ color: '#0b1972' }}>✔ Capital Gains / Lottery Income</h6>
								<p>Advance tax must be paid in the remaining instalments once the income arises.</p>
								<br />
								<h6 style={{ color: '#0b1972' }}>✔ Business Income Fluctuation</h6>
								<p>Taxpayers can revise estimates in every instalment—no restriction.</p>
								<br />
								<h6 style={{ color: '#0b1972' }}>✔ Presumptive Income Scheme</h6>
								<p>Taxpayers under 44AD/44ADA pay entire advance tax by 15th March.</p>
								
						
								<h3 style={{ marginTop: "40px", color: '#0b1972' }}>Special Cases in Advance Tax</h3>
								<br />
								
								<ul className="benefit-list style-2">
									<li>
										<div className="icon">
											<i className="icon-check" />
										</div>
										<p>
										 Avoids interest under Sections 234B & 234C
										</p>
									</li>
									<li>
										<div className="icon">
											<i className="icon-check" />
										</div>
										<p>
										 Prevents last-minute financial burden
										</p>
									</li>
									<li>
										<div className="icon">
											<i className="icon-check" />
										</div>
										<p>
										 Ensures smooth tax planning
										</p>
									</li>
									<li>
										<div className="icon">
											<i className="icon-check" />
										</div>
										<p>
										 Helps maintain clean compliance record
										</p>
									</li>
									<li>
										<div className="icon">
											<i className="icon-check" />
										</div>
										<p>
										 Reduces risk of notices or scrutiny
										</p>
									</li>
								</ul>
								
{/* ================================================================================================================================= */}
								<h3 style={{ color: '#0b1972' }}>Conclusion</h3>
								<br />
								<p> Advance tax is a key compliance requirement for businesses and professionals earning
									taxable income beyond TDS coverage. Understanding instalment dates, tax computation,
									and interest implications helps avoid penalties and ensures smooth tax management
									throughout the year.
								</p>
                                <br />
                                <p>Bisways Consulting Group provides expert assistance in advance tax calculation,
									instalment planning, income tax projections, and quarterly compliance support for
									individuals, professionals, and businesses.
								</p>
        

								<br /><span className="line" />
								<div className="bot mb-70">
									<div className="tags">
										<h6>
											Tags :
										</h6>
										<Link href="" > Advance Tax | Installments | Section 211 | Interest</Link>
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
							Need help calculating or planning your advance tax payments?
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
							Connect with Bisways Consulting Group — your trusted partner for Advance Tax,
							Tax Planning, and Compliance Advisory.
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
