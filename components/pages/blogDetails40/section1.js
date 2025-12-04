
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
									For small businesses in India, managing monthly GST returns, invoices, and tax calculations can often
									become a burden. To simplify compliance and reduce paperwork, the Government of India introduced
									the GST Composition Scheme, a concessional tax structure that allows eligible small taxpayers to pay
									GST at a fixed rate based on turnover.
									<br />
									This guide explains eligibility, tax rates, turnover limits, benefits, and compliance requirements to help
									small businesses determine whether they should opt for the Composition Scheme.

								</p>



								<h3 style={{ marginTop: "40px", color: '#0b1972' }}>What Is the GST Composition Scheme?</h3>
								<br />
								<p>The GST Composition Scheme is a simplified tax option for small taxpayers who prefer easier
									compliance over traditional GST filing.</p>

								<br />
								<p>Under this scheme:</p>
								<br />

								<ul className="benefit-list style-2">
									<li>
										<div className="icon">
											<i className="icon-check" />
										</div>
										<p>Businesses pay GST at a fixed percentage of turnover.</p>
									</li>

									<li>
										<div className="icon">
											<i className="icon-check" />
										</div>
										<p>They file fewer returns.</p>
									</li>

									<li>
										<div className="icon">
											<i className="icon-check" />
										</div>
										<p>They avoid maintaining detailed invoice-level records.</p>
									</li>
								</ul>
								<p>The scheme is ideal for businesses that deal mainly in local supplies and want to reduce compliance
									costs.</p>


								<h3 style={{ marginTop: "40px", color: '#0b1972' }}>Who Is Eligible for the Composition Scheme?</h3>
								<br />
								<h5 style={{ fontWeight: "bold", color: '#0b1972' }}>✔ Businesses with turnover up to ₹1.5 crore (₹75 lakh in some states)
									<br />
									✔ Service providers up to ₹50 lakh turnover (under the Composition Scheme for Services)</h5>
								<br />

								<h5 style={{ fontWeight: "bold", color: '#0b1972' }}>✔ Eligible businesses:</h5>
								<br />
								<ul className="benefit-list style-2">
									<li>
										<div className="icon">
											<i className="icon-check" />
										</div>
										<p>Manufacturers (excluding notified goods)</p>
									</li>

									<li>
										<div className="icon">
											<i className="icon-check" />
										</div>
										<p>Traders</p>
									</li>

									<li>
										<div className="icon">
											<i className="icon-check" />
										</div>
										<p>Restaurants not serving alcohol</p>
									</li>

									<li>
										<div className="icon">
											<i className="icon-check" />
										</div>
										<p>Small service providers (under special provision)</p>
									</li>
								</ul>


								<h3 style={{ marginTop: "40px", color: '#0b1972' }}>Who Cannot Opt for the Composition Scheme?</h3>
								<br />
								<ul className="benefit-list style-2">
									<li>
										<div className="icon">
											<i className="icon-check" />
										</div>
										<p>Businesses engaged in interstate outward supplies</p>
									</li>

									<li>
										<div className="icon">
											<i className="icon-check" />
										</div>
										<p>E-commerce sellers</p>
									</li>

									<li>
										<div className="icon">
											<i className="icon-check" />
										</div>
										<p>Manufacturers of ice cream, tobacco, or pan masala</p>
									</li>

									<li>
										<div className="icon">
											<i className="icon-check" />
										</div>
										<p>Casual taxable persons</p>
									</li>

									<li>
										<div className="icon">
											<i className="icon-check" />
										</div>
										<p>Businesses supplying goods through online platforms</p>
									</li>

									<li>
										<div className="icon">
											<i className="icon-check" />
										</div>
										<p>Non-resident taxable persons</p>
									</li>
								</ul>


								<h3 style={{ marginTop: "40px", color: '#0b1972' }}>GST Composition Scheme Tax Rates</h3>
								<br />
								<ul className="benefit-list style-2">
									<li>
										<div className="icon">
											<i className="icon-check" />
										</div>
										<p>Businesses engaged in interstate outward supplies</p>
									</li>

									<li>
										<div className="icon">
											<i className="icon-check" />
										</div>
										<p>E-commerce sellers</p>
									</li>

									<li>
										<div className="icon">
											<i className="icon-check" />
										</div>
										<p>Manufacturers of ice cream, tobacco, or pan masala</p>
									</li>

									<li>
										<div className="icon">
											<i className="icon-check" />
										</div>
										<p>Casual taxable persons</p>
									</li>

									<li>
										<div className="icon">
											<i className="icon-check" />
										</div>
										<p>Businesses supplying goods through online platforms</p>
									</li>

									<li>
										<div className="icon">
											<i className="icon-check" />
										</div>
										<p>Non-resident taxable persons</p>
									</li>
								</ul>

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
													Category
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
													GST Rate
												</th>

											</tr>
										</thead>

										<tbody>
											{[
												["Category", "Applicable Rate"],
												["Manufacturers", "1% (0.5% CGST + 0.5% SGST)"],
												["Traders / Dealers", "1% of turnover"],
												["Restaurants (Non-alcohol)", "5% (2.5% + 2.5%)"],
												["Service Providers", "6% (3% + 3%)"]

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




								<h3 style={{ marginTop: "40px", color: '#0b1972' }}>
									Compliance Requirements Under the Composition Scheme
								</h3>
								<br />
								<p>Even though the scheme offers simplified compliance, certain obligations still apply:</p>
								<br />


								<h6 style={{ color: '#0b1972' }}>1. Annual Return Filing</h6>
								<br />
								<ul className="benefit-list style-2">
									<li>
										<div className="icon">
											<i className="icon-check" />
										</div>
										<p>File GSTR-4 (Annual) once a year</p>
									</li>
								</ul>

								<h6 style={{ color: '#0b1972' }}> 2. Quarterly Payment</h6>
								<br />
								<ul className="benefit-list style-2">
									<li>
										<div className="icon">
											<i className="icon-check" />
										</div>
										<p>Make tax payment through CMP-08 every quarter</p>
									</li>
								</ul>

								<h6 style={{ color: '#0b1972' }}> 3. No ITC Available</h6>
								<br />
								<ul className="benefit-list style-2">
									<li>
										<div className="icon">
											<i className="icon-check" />
										</div>
										<p>Composition taxpayers cannot claim input tax credit, and buyers cannot claim ITC on their invoices.</p>
									</li>
								</ul>



								<h6 style={{ color: '#0b1972' }}>4. Declaration on Signboards</h6>
								<br />
								<p>Businesses must mention:</p>
								<br />
								<p>"Composition taxable person. Not eligible to collect tax on supplies."</p>
								<br />

								<h6 style={{ color: '#0b1972' }}>5. Maintain Basic Records</h6>
								<br />
								<p>Even though detailed invoice-wise records are not required, businesses must maintain:</p>
								<br />
								<ul className="benefit-list style-2">
									<li>
										<div className="icon">
											<i className="icon-check" />
										</div>
										<p>Sales and purchase summaries</p>
									</li>

									<li>
										<div className="icon">
											<i className="icon-check" />
										</div>
										<p>Stock registers</p>
									</li>

									<li>
										<div className="icon">
											<i className="icon-check" />
										</div>
										<p>CMP-08 payment challans</p>
									</li>
								</ul>



								<h3 style={{ marginTop: "40px", color: '#0b1972' }}>
									Benefits of the Composition Scheme
								</h3>
								<br />

								<h6 style={{ color: '#0b1972' }}>✔ Lower Tax Rates</h6>
								<br />
								<p>Significantly reduces tax burden for small businesses.</p>
								<br />
								<h6 style={{ color: '#0b1972' }}>✔ Simplified Compliance</h6>
								<br />
								<p>Only quarterly payments and one annual return—no GSTR-1 or GSTR-3B.</p>
								<br />

								<h6 style={{ color: '#0b1972' }}>✔ Reduced Paperwork</h6>
								<br />
								<p>Minimal record-keeping and documentation.</p>
								<br />
								<h6 style={{ color: '#0b1972' }}>✔	Better Cash Flow</h6>
								<br />
								<p>No requirement to pay tax on each invoice—helps micro and small businesses.</p>
								<br />



								<h3 style={{ marginTop: "40px", color: '#0b1972' }}>
									Limitations to Consider
								</h3>
								<br />
								<h6 style={{ color: '#0b1972' }}>❌ Cannot collect GST from customers</h6>
								<br />
								<p>This reduces competitiveness when dealing with GST-registered buyers.</p>
								<br />
								<h6 style={{ color: '#0b1972' }}>❌ No Input Tax Credit</h6>
								<br />
								<p>ITC blocked for both seller and buyer.</p>
								<br />

								<h6 style={{ color: '#0b1972' }}>❌ Only for intra-state supplies</h6>
								<br />
								<p>Businesses planning interstate expansion cannot use this scheme.</p>


								<h3 style={{ marginTop: "40px", color: '#0b1972' }}>
									Should You Opt for the Composition Scheme?
								</h3>
								<br />
								<p>The scheme is ideal if:</p>
								<br />
								<ul className="benefit-list style-2">
									<li>
										<div className="icon">
											<i className="icon-check" />
										</div>
										<p>You are a small or micro business</p>
									</li>

									<li>
										<div className="icon">
											<i className="icon-check" />
										</div>
										<p>Your customers are mostly end consumers</p>
									</li>

									<li>
										<div className="icon">
											<i className="icon-check" />
										</div>
										<p>You want minimal compliance and fixed tax payments</p>
									</li>

									<li>
										<div className="icon">
											<i className="icon-check" />
										</div>
										<p>You do not need to issue GST invoices with tax breakdown</p>
									</li>
								</ul>
								<p> However, if your business deals with B2B buyers who depend on ITC, or if you plan interstate expansion,
									the regular GST scheme may be more suitable.</p>



								<br />
								<h3 style={{ color: '#0b1972' }}>Conclusion</h3>
								<br />
								<p>The GST Composition Scheme offers an excellent compliance-friendly alternative for small businesses,
									helping them reduce paperwork, pay lower taxes, and focus on growth. However, it also comes with
									limitations such as no ITC and restrictions on interstate sales.
									<br />
									<br />
									Bisways Consulting Group provides end-to-end support for GST registration, Composition Scheme
									enrolment, CMP-08 filing, return compliance, and guidance to help MSMEs choose the right GST
									structure.</p>

								<br />
								<br /><span className="line" />
								<div className="bot mb-70">
									<div className="tags">
										<h6>
											Tags :
										</h6>
										<Link href="" >GST Composition | MSME | Tax Rate | Compliance</Link>

									</div>
									<div className="socials">
										<h6>
											Share
										</h6>
										<ul className="social-list style-2">
  <li><i   className="icon-facebook" /></li>
  <li><i  className="icon-twitter" /></li>
  <li><i className="fab fa-instagram" /></li>
  <li><i  className="icon-youtube" /></li>
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
							Need help enrolling for the GST Composition Scheme or
							managing quarterly CMP-08?
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
							Connect with Bisways Consulting Group — your trusted partner for GST Solutions, MSME Advisory,
							and Return Compliance.
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
