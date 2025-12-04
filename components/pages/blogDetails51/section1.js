
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
									Tax Collected at Source (TCS) under Section 206C of the Income Tax Act is a mechanism where
									sellers collect a percentage of tax from buyers at the time of sale. The objective of TCS is to track
									high-value transactions, prevent tax evasion, and ensure transparency in the flow of funds.

								</p>
								<p className="text mt-3 mb-20">
									TCS applies to the sale of specific goods, motor vehicles, scrap, alcohol, tendu leaves, minerals,
									and even international remittances through the Liberalised Remittance Scheme (LRS).
								</p>
								<p className="text mt-3 mb-20">
									This guide explains the complete TCS structure, applicable rates, collection rules, return filing, and
									compliance responsibilities for sellers.
								</p>

								<h3 style={{ marginTop: "40px", color: '#0b1972' }}>What Is TCS under Section 206C?</h3>
								<br />
								<p className="text ">
									TCS is a tax collected by the seller from the buyer at the time of sale of specified goods or receipt
									of consideration.
								</p>
								<br/>
								<p className="text ">The seller must:</p>
								<br />	
								<ul className="benefit-list style-2">
									<li>
										<div className="icon">
											<i className="icon-check" />
										</div>
										<p>
											Collect TCS at the applicable rate
										</p>
									</li>
									<li>
										<div className="icon">
											<i className="icon-check" />
										</div>
										<p>
											Deposit it with the government
										</p>
									</li>
									<li>
										<div className="icon">
											<i className="icon-check" />
										</div>
										<p>
											Report it through quarterly TCS returns
										</p>
									</li>
									<li>
										<div className="icon">
											<i className="icon-check" />
										</div>
										<p>
											Issue TCS certificates to buyers
										</p>
									</li>
									
									<p className='text'>Section 206C contains multiple sub-sections, each governing different categories of goods and transactions.</p>
								</ul>


							<h3 style={{ marginTop: "40px", color: '#0b1972' }}>Transactions Covered Under Section 206C</h3>
							<br/>
							<p className="text">TCS applies to the following key transactions:</p>
							<br/>
								<h6 style={{ color: '#0b1972' }}> 1. Sale of Alcoholic Liquor</h6>
									<p className="text">TCS Rate: 1%</p>
									<br/>
								<h6 style={{ color: '#0b1972' }}> 2. Sale of Tendu Leaves</h6>
									<p className="text">TCS Rate: 5%</p>
									<br/>
								<h6 style={{ color: '#0b1972' }}> 3. Sale of Timber Forest Produce</h6>
									<p className="text">TCS Rate: 2.5%</p>
									<br/>
								<h6 style={{ color: '#0b1972' }}> 4. Scrap Sales</h6>
									<p className="text">TCS Rate: 1%</p>
									<p className="text">Scrap includes waste or by-products arising from manufacturing or mechanical processes.</p>
									<br/>
								<h6 style={{ color: '#0b1972' }}> 5. Sale of Minerals (Coal, Lignite, Iron Ore)</h6>
									<p className="text">TCS Rate: 1%</p>
									<br/>
								<h6 style={{ color: '#0b1972' }}> 6. Motor Vehicle Sales &gt; ₹10 Lakhs</h6>
									<p className="text">TCS Rate: 1%</p>
									<p className="text">Applicable on sale to end customers, not dealers.</p>
									<br/>
								<h6 style={{ color: '#0b1972' }}> 7. Foreign Remittances under LRS</h6>
									<p className="text">TCS applies depending on remittance purpose and threshold.</p>
									<br/>
								<h6 style={{ color: '#0b1972' }}> 8. Overseas Tour Packages</h6>
									<p className="text">TCS Rate: 5%</p>
									<br/>
								<h6 style={{ color: '#0b1972' }}> 9. Sale of Goods &gt; ₹50 Lakhs (Section 206C(1H))</h6>
									<p className="text">TCS Rate:</p>
									<ul className="benefit-list style-2">
										<li>
											<div className="icon">
												<i className="icon-check" />
											</div>
											<p>
												0.1% when PAN/Aadhaar is provided
											</p>
										</li>
										<li>
											<div className="icon">
												<i className="icon-check" />
											</div>
											<p>
												1% if PAN/Aadhaar is not provided
											</p>
										</li>
									</ul>
									<br/>


							<h3 style={{ marginTop: "40px", color: '#0b1972' }}>TCS Under Section 206C(1H) – High-Value Sale of Goods</h3>
							<p className="text">This widely applicable provision covers sale of goods (other than exports and already-notified goods).</p>
							<br/>
								<ul className="benefit-list style-2">
									<li>
										<div className="icon">
											<i className="icon-check" />
										</div>
										<p>
											Applies when seller’s turnover in the previous FY exceeds ₹10 crore
										</p>
									</li>
									<li>
										<div className="icon">
											<i className="icon-check" />
										</div>
										<p>
											TCS collected on receipt basis (not invoice)
										</p>
									</li>
									<li>
										<div className="icon">
											<i className="icon-check" />
										</div>
										<p>
											Applies only when the buyer’s payment exceeds ₹50 lakh in a financial year
										</p>
									</li>
								</ul>

							<h3 style={{ marginTop: "40px", color: '#0b1972' }}>TCS Rates Summary Table</h3>
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
															Type of Transaction   
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
															TCS Rate
														</th>
													</tr>
												</thead>

												<tbody>
													{[
														["Scrap", "1%"],
														["Motor Vehicle > ₹10 lakhs", "1%"],
														["Alcoholic liquor ", "1%"],
														["Minerals: Coal, Lignite, Iron Ore", "1%"],
														["Overseas tour packages", "5%"],
														["Remittances under LRS ", "5% (conditions apply)"],
														["Sale of goods > ₹50 lakh", "0.1% (with PAN), 1% (without PAN)"],
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


							
								
							<h3 style={{ marginTop: "40px", color: '#0b1972' }}>How TCS Works (Step-by-Step)</h3>
							<br/>
								<h6 style={{ color: '#0b1972' }}> Step 1: Seller makes a sale</h6>
								<p className='text'>Invoice is issued as usual.</p>
								<br/>
								<h6 style={{ color: '#0b1972' }}> Step 2: TCS collected on receipt</h6>
								<p className='text'>TCS is added at the time of receiving money (where applicable).</p>
								<br/>
								<h6 style={{ color: '#0b1972' }}> Step 3: Deposit TCS with Government</h6>
								<p className='text'>TCS must be deposited by the 7th of the next month.</p>
								<br/>
								<h6 style={{ color: '#0b1972' }}> Step 4: File Quarterly TCS Returns (Form 27EQ)</h6>
								<p className='text'>Due dates:</p>
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
															Quarter  
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
															Due Date
														</th>
													</tr>
												</thead>

												<tbody>
													{[
														["Q1 (Apr–Jun)", "Jul 15, 2025"],
														["Q2 (Jul–Sep)", "Oct 15, 2025"],
														["Q3 (Oct–Dec", "Jan 15, 2025"],
														["Q4 (Jan–Mar)", "May 15, 2025"],
														
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

								<h6 style={{ color: '#0b1972' }}> Step 5: Issue TCS Certificate – Form 27D</h6>
								<p className='text'>Must be provided to the buyer by the seller.</p>

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
													["Not collecting TCS ", "Equal to amount not collected"],
													["Late deposit of TCS", "Interest @ 1% per month"],
													["Late filing of Form 27EQ", "₹200 per day (u/s 234E)"],
													["Failure to file return", "Prosecution / penalty u/s 271H"],
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


								<h3 style={{ marginTop: "40px", color: '#0b1972' }}>IExemptions from TCS</h3>
								<br/>
								<p className='text'>TCS is not applicable when:</p>
								<ul className="benefit-list style-2">
									<li>
										<div className="icon">
											<i className="icon-check" />
										</div>
										<p>
											Buyer furnishes a declaration for exempt usage
										</p>
									</li>
									<li>
										<div className="icon">
											<i className="icon-check" />
										</div>
										<p>
											Goods purchased for manufacturing/processing, not trading
										</p>
									</li>
										<li>
										<div className="icon">
											<i className="icon-check" />
										</div>
										<p>
											Government entities purchasing goods
										</p>
									</li>
									<li>
										<div className="icon">
											<i className="icon-check" />
										</div>
										<p>
											Government entities purchasing goods.
										</p>
									</li>
								</ul>

								<h3 style={{ color: '#0b1972' }}>Conclusion</h3>
								<br />
								<p> Understanding TCS under Section 206C is vital for businesses involved in the sale of notified
									goods and high-value transactions. Proper implementation helps avoid penalties, ensures smooth
									compliance, and prevents disputes during assessments.

								</p>
                                <br/>

                                <p>Bisways Consulting Group supports businesses with TCS registration, monthly deposits, return
									filing, 206C(1H) calculation, and complete compliance management.
								</p>
        

								<br /><span className="line" />
								<div className="bot mb-70">
									<div className="tags">
										<h6>
											Tags :
										</h6>
										<Link href="" > TCS | Section 206C | Seller Compliance | Tax Collection</Link>
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
							Need help with TCS calculation or Section 206C compliance?
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
							Connect with Bisways Consulting Group — your trusted partner for TCS Management, Income Tax
							Compliance, and Advisory.
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
