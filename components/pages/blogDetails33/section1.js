
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
									Charitable and religious trusts registered under Sections 12AB and 10(23C) enjoy tax exemption on
									their income, provided at least 85% of the income is applied for charitable purposes during the
									financial year.
								</p>
								<p className="text mb-20">
									However, trusts may not always be able to utilise the full amount due to delays in projects, ongoing
									construction, or long-term programmes.
								</p>
								<p className="text ">
									To manage this, the Income Tax Act allows trusts to:
								</p>
								<br />
								<ul className="benefit-list style-2">
									<li>
										<div className="icon">
											<i className="icon-check" />
										</div>
										<p>
											Defer income, or
										</p>
									</li>
									<li>
										<div className="icon">
											<i className="icon-check" />
										</div>
										<p>
											Accumulate income for future application
										</p>
									</li>
								</ul>
								<p>This can be done using Form 9A and Form 10, as prescribed under Section 11(2) and related rules.</p>
								<br />
								<p>This guide by Bisways Consulting Group explains when these forms are required, how they work, the
									filing timelines, and compliance conditions.</p>


								<h3 style={{ marginTop: "40px", color: '#0b1972' }}>What Is Form 9A? – Deemed Application of Incom</h3>
								<br />
								<p>Form 9A is filed when the trust wants income to be treated as applied in the current year, even
									though the actual expenditure will take place in the next year.</p>
								<br />
								<h6 style={{ color: '#0b1972' }}>When to File Form 9A</h6>
								<br />
								<ul className="benefit-list style-2">
									<li>

										<p>
											✔ Income received late in the year
										</p>
									</li>
									<li>

										<p>
											✔ Income not applied due to operational reasons
										</p>
									</li>
									<li>

										<p>
											✔ Grants, donations, or funds earmarked for next year’s use
										</p>
									</li>
									<li>

										<p>
											✔ Delayed project execution
										</p>
									</li>
								</ul>
								<p><span style={{ fontWeight: "bold", color: '#0b1972' }}>Key point:</span> It allows the trust to use funds in the immediately succeeding year while still claiming
									application for the current year.</p>


								<h3 style={{ marginTop: "40px", color: '#0b1972' }}> What Is Form 10? – Accumulation of Income Under Section 11(2)</h3>
								<br />
								<p>
									Form 10 is used when a trust wishes to accumulate income for up to 5 years for a specific project or
									purpose.
								</p>
								<br />
								<h6 style={{ color: '#0b1972' }}>When to File Form 10</h6>
								<br />
								<ul className="benefit-list style-2">
									<li>

										<p>
											✔ Building construction
										</p>
									</li>
									<li>

										<p>
											✔ Purchase of land
										</p>
									</li>
									<li>

										<p>
											✔ Large educational/medical projects
										</p>
									</li>
									<li>

										<p>
											✔ Long-term welfare programmes
										</p>
									</li>
									<li>

										<p>
											✔ Capital expenditure plans
										</p>
									</li>
								</ul>
								<p>The trust must:</p>
								<br />
								<ul className="benefit-list style-2">
									<li>
										<div className="icon">
											<i className="icon-check" />
										</div>
										<p>
											Mention the specific purpose
										</p>
									</li>
									<li>
										<div className="icon">
											<i className="icon-check" />
										</div>
										<p>
											Specify the time period (max 5 years)
										</p>
									</li>
									<li>
										<div className="icon">
											<i className="icon-check" />
										</div>
										<p>
											Ensure funds are invested in approved modes (Section 11(5))
										</p>
									</li>
								</ul>

								<h3 style={{ marginTop: "40px", color: '#0b1972' }}>
									Key Differences Between Form 9A and Form 10
								</h3>
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
													Feature
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
													Form 9A
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
													Form 10
												</th>

											</tr>
										</thead>

										<tbody>
											{[
												["Purpose", "Defer income to next year (deemed application)", "Accumulate income for up to 5 years"],
												["Time Allowed", "1 year", "Up to 5 years"],
												["Specific Purpose Required?", "No", "Yes"],
												["Common Usage", "Delayed receipts", "Long-term projects"],
												["Section", "11(1)", "11(2)"]
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

								<h3 style={{ marginTop: "40px", color: '#0b1972' }}>Documents and Information Required</h3>

								<br />
								<h6 style={{ color: '#0b1972' }}>For Form 9A</h6>
								<br />
								<ul className="benefit-list style-2">
									<li>
										<div className="icon">
											<i className="icon-check" />
										</div>
										<p>
											Reason for non-utilisation
										</p>
									</li>
									<li>
										<div className="icon">
											<i className="icon-check" />
										</div>
										<p>
											Income to be deemed as applied
										</p>
									</li>
									<li>
										<div className="icon">
											<i className="icon-check" />
										</div>
										<p>
											Supporting financial statements
										</p>
									</li>

								</ul>

								<h6 style={{ color: '#0b1972' }}>For Form 9A</h6>
								<br />
								<ul className="benefit-list style-2">
									<li>
										<div className="icon">
											<i className="icon-check" />
										</div>
										<p>
											Details of accumulated income
										</p>
									</li>
									<li>
										<div className="icon">
											<i className="icon-check" />
										</div>
										<p>
											Purpose of accumulation
										</p>
									</li>
									<li>
										<div className="icon">
											<i className="icon-check" />
										</div>
										<p>
											Investment details (11(5) approved instruments)
										</p>
									</li>
									<li>
										<div className="icon">
											<i className="icon-check" />
										</div>
										<p>
											Duration of accumulation
										</p>
									</li>

								</ul>

								<h3 style={{ marginTop: "40px", color: '#0b1972' }}>Step-by-Step Filing Process</h3>
								<br />
								<h5 style={{ color: '#0b1972' }}> Step 1: Log in to Income Tax Portal</h5>
								<br />
								<p>Navigate to e-File → Income Tax Forms → Form 9A / Form 10.</p>
								<br />
								<h5 style={{ color: '#0b1972' }}>Step 2: Select the Relevant Assessment Year</h5>
								<br />

								<h5 style={{ color: '#0b1972' }}>Step 3: Fill in the Required Details</h5>
								<br />

								<ul className="benefit-list style-2">
									<li>
										<div className="icon">
											<i className="icon-check" />
										</div>
										<p>Nature of income</p>
									</li>

									<li>
										<div className="icon">
											<i className="icon-check" />
										</div>
										<p>Amount to accumulate/defer</p>
									</li>

									<li>
										<div className="icon">
											<i className="icon-check" />
										</div>
										<p>Purpose and duration (for Form 10)</p>
									</li>

								</ul>


								<br />
								<h5 style={{ color: '#0b1972' }}>Step 4: Upload Attachments (if required)</h5>
								<br />
								<p>Attach all required documents in PDF format.</p>

								<br />
								<h5 style={{ color: '#0b1972' }}>Step 5: Submit Using DSC/EVC</h5>
								<br />

								<h5 style={{ color: '#0b1972' }}>Step 6: Maintain Records</h5>
								<br />

								<p>Trust must keep project and utilisation documents for assessment.</p>




								<h3 style={{ marginTop: "40px", color: '#0b1972' }}>Conditions for Valid Accumulation Under Section 11(2)</h3>
								<br />
								<p> To claim benefit under Form 10:</p>
								<br />
								<ul className="benefit-list style-2">
									<li>
										<div className="icon">
											<i className="icon-check" />
										</div>
										<p>Funds must be invested only in Section 11(5) instruments</p>
									</li>

									<li>
										<div className="icon">
											<i className="icon-check" />
										</div>
										<p>Clear purpose of usage is required</p>
									</li>

									<li>
										<div className="icon">
											<i className="icon-check" />
										</div>
										<p>Accumulated funds must be used only for that purpose</p>
									</li>

									<li>
										<div className="icon">
											<i className="icon-check" />
										</div>
										<p>Unused funds after 5 years become taxable</p>
									</li>

									<li>
										<div className="icon">
											<i className="icon-check" />
										</div>
										<p>Usage must be traceable and auditable</p>
									</li>
								</ul>



								<h3 style={{ marginTop: "40px", color: '#0b1972' }}>Common Mistakes to Avoid</h3>
								<br />

								<ul className="benefit-list style-2">
									<li>
										<div className="icon">
											<i className="icon-check" />
										</div>
										<p>Filing Form 10 without specifying a clear purpose</p>
									</li>

									<li>
										<div className="icon">
											<i className="icon-check" />
										</div>
										<p>Using accumulated funds for unrelated activities</p>
									</li>

									<li>
										<div className="icon">
											<i className="icon-check" />
										</div>
										<p>Not investing in 11(5) approved modes</p>
									</li>

									<li>
										<div className="icon">
											<i className="icon-check" />
										</div>
										<p>Delay in filing (forms must be filed before ITR)</p>
									</li>

									<li>
										<div className="icon">
											<i className="icon-check" />
										</div>
										<p>Incorrect amount reporting</p>
									</li>

									<li>
										<div className="icon">
											<i className="icon-check" />
										</div>
										<p>Accumulation without Board/Trustee resolution</p>
									</li>
								</ul>



								<h3 style={{ marginTop: "40px", color: '#0b1972' }}>Why These Forms Matter for Trusts</h3>
								<br />

								<ul className="benefit-list style-2">
									<li>
										<div className="icon">
											<i className="icon-check" />
										</div>
										<p>Prevent taxability of unspent income</p>
									</li>

									<li>
										<div className="icon">
											<i className="icon-check" />
										</div>
										<p>Ensure compliance with Income Tax Act</p>
									</li>

									<li>
										<div className="icon">
											<i className="icon-check" />
										</div>
										<p>Enable long-term planning of welfare projects</p>
									</li>

									<li>
										<div className="icon">
											<i className="icon-check" />
										</div>
										<p>Allow flexibility to manage funds wisely</p>
									</li>

									<li>
										<div className="icon">
											<i className="icon-check" />
										</div>
										<p>Maintain credibility during assessments and audits</p>
									</li>
								</ul>






								<h3 style={{ color: '#0b1972' }}>Conclusion</h3>
								<br />
								<p> Forms 9A and 10 provide charitable trusts with essential flexibility to manage their income and meet
									long-term project requirements. While Form 9A allows short-term deferment of income application,
									Form 10 helps accumulate funds for up to 5 years for specific charitable objectives.
									<br />
									Bisways Consulting Group supports NGOs and charitable organisations with Form 9A & 10 filing,
									Section 11(2) compliance, 12AB/80G advisory, audits, and complete trust taxation assistance.</p>

								<br />
								<br /><span className="line" />
								<div className="bot mb-70">
									<div className="tags">
										<h6>
											Tags :
										</h6>
										<Link href="" >
											Form 9A | Form 10 | Section 11(2) | Income Accumulation</Link>
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
							Need help filing Form 9A or Form 10 for your trust?
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
							Connect with Bisways Consulting Group — your trusted partner for Trust Taxation, Section 11
							Compliance, and NGO Advisory Services.
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
