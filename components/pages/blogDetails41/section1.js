
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
									Banks deduct TDS on interest earned from fixed deposits, recurring deposits, corporate deposits,
									and other investments if the interest exceeds specified limits.
								</p>
								<p className="text mt-3 mb-20">
									However, individuals whose income is below the taxable limit can avoid this TDS deduction by
									submitting Form 15G or Form 15H to their bank or financial institution.

								</p>
								<br/>
								<p className="text mb-20">
									Although both forms help prevent unnecessary TDS deduction, they apply to different categories
									of taxpayers. This guide explains the differences, eligibility, filing process, and precautions to
									ensure correct usage.
								</p>

								<h3 style={{ marginTop: "40px", color: '#0b1972' }}>What Is Form 15G?</h3>
								<br />
								<p className="text ">
									Form 15G is a self-declaration form submitted by individuals to ensure that banks do not deduct
									TDS on their interest income because their total taxable income is below the basic exemption limit.
								</p>
								<br />
								<h6 style={{ color: '#0b1972' }}> ✔ Eligible Individuals for Form 15G</h6>
								<br/>
								<ul className="benefit-list style-2">
									<li>
										<div className="icon">
											<i className="icon-check" />
										</div>
										<p>
											Resident individuals below 60 years of age
										</p>
									</li>
									<li>
										<div className="icon">
											<i className="icon-check" />
										</div>
										<p>
											HUFs (Hindu Undivided Families)
										</p>
									</li>
										<li>
										<div className="icon">
											<i className="icon-check" />
										</div>
										<p>
											Total tax liability must be NIL.
										</p>
									</li>
										<li>
										<div className="icon">
											<i className="icon-check" />
										</div>
										<p>
											Total interest income + other income must be below the basic exemption limit.
										</p>
									</li>
								</ul>

								<h6 style={{ color: '#0b1972' }}> ❌ Not Eligible:</h6>
								<br/>
								<ul className="benefit-list style-2">
									<li>
										<div className="icon">
											<i className="icon-check" />
										</div>
										<p>
											NRIs
										</p>
									</li>
									<li>
										<div className="icon">
											<i className="icon-check" />
										</div>
										<p>
											Senior citizens (60+ years)
										</p>
									</li>
								</ul>
								
								<h3 style={{ marginTop: "40px", color: '#0b1972' }}>What Is Form 15G?</h3>
									<p>Form 15H is similar to Form 15G but specifically designed for senior citizens (60 years and above)
									whose total tax liability is nil, even if their interest income exceeds the basic exemption limit.
									</p>
								<br/>
								<h6 style={{ color: '#0b1972' }}> ✔ Eligible Individuals for Form 15H</h6>
								<br/>
								<ul className="benefit-list style-2">
									<li>
										<div className="icon">
											<i className="icon-check" />
										</div>
										<p>
											Resident individuals below 60 years of age
										</p>
									</li>
									<li>
										<div className="icon">
											<i className="icon-check" />
										</div>
										<p>
											Total tax liability is nil
										</p>
									</li>
								</ul>
								<h6 style={{ color: '#0b1972' }}> ✔ Benefit:</h6>
								<br/>
									<p>
										Even if interest income exceeds the basic exemption limit, Form 15H can still be submitted as long
										as tax liability is zero after deductions (80C, 80D, etc.).
									</p>
							
								
								<h3 style={{ marginTop: "40px", color: '#0b1972' }}>Key Differences Between Form 15G and Form 15H</h3>
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
														borderColor: "white"
													}}
												>
													Form 15G 
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
													Form 15H
												</th>
											</tr>
										</thead>

										<tbody>
											{[
												["Applicable to ", "Individuals below 60 & HUFs","Senior citizens (60+)"],
												["Income threshold ", "Total income must be below basic exemption limit","Total tax liability must be NIL(income can exceed exemption limit)"],
												["TDS avoided on ", "FD/RD interest, corporate deposits, EPF withdrawals, etc.","Same, but designed for senior citizens"],
												["NRIs allowed? ", "No ","No"],

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
								</div>

							
								<h3 style={{ marginTop: "40px", color: '#0b1972' }}>Where Are These Forms Required?</h3>
								<br />
								<p>You may submit Form 15G/15H for:</p>
								<ul className="benefit-list style-2">
									<li>
										<div className="icon">
											<i className="icon-check" />
										</div>
										<p>
										 Bank Fixed Deposits (FD/RD)
										</p>
									</li>
									<li>
										<div className="icon">
											<i className="icon-check" />
										</div>
										<p>
											Post office deposits
										</p>
									</li>
                                    	<li>
											<div className="icon">
											<i className="icon-check" />
										</div>
										<p>
											Corporate deposits/NBFC deposits
										</p>
									</li>
                                    	<li>
											<div className="icon">
											<i className="icon-check" />
										</div>
										<p>
											EPF withdrawal (if service &lt; 5 years)
										</p>
									</li>
										<li>
											<div className="icon">
											<i className="icon-check" />
										</div>
										<p>
											TDS on rental income (if applicable)
										</p>
									</li>
										<li>
											<div className="icon">
											<i className="icon-check" />
										</div>
										<p>
											Insurance maturity proceeds
										</p>
									</li>
								</ul>
										
								<h3 style={{ color: '#0b1972' }}>How to Submit Form 15G or Form 15H</h3>
								<br />
								<ul className="benefit-list style-2">

									<h6 style={{ color: '#0b1972' }}> 1. Online Submission</h6>
									<br />
									<li>
										<p>
											Most banks offer online submission via net banking
										</p>
									</li>
									<h6 style={{ color: '#0b1972' }}> 2. Offline Submission</h6>
									<br />
									<p>Download the form from the bank or income tax website and submit it at the branch</p>
									
									<h6 style={{ color: '#0b1972' }}> 3. Required Details</h6>
									<br />
									<li>
										<div className="icon">
											<i className="icon-check" />
										</div>
										<p>
											PAN Number.
										</p>
									</li>
									<li>
										<p>
											Estimated total income
										</p>
									</li>
									<li>
										<p>
											Estimated interest income
										</p>
									</li>
									<li>
										<p>
											Previous year’s taxable status
										</p>
									</li>
									<li>
										<p>
											Bank account details.
										</p>
									</li>
                                    </ul>
								<br/>

								<h3 style={{ marginTop: "40px", color: '#0b1972' }}>Important Precautions</h3>
								<br />
								<h6 style={{ color: '#0b1972' }}> ✔ Submit at the beginning of the financial year</h6>
								<p>This ensures that banks do not deduct TDS in any quarter</p>
								<h6 style={{ color: '#0b1972' }}> ✔ Ensure your tax liability is zero</h6>
								
								<p>Incorrect declaration may attract penalty.</p>
								<h6 style={{ color: '#0b1972' }}> ✔ PAN is mandatory</h6>
								
								<p>Without PAN, TDS will be deducted at 20%</p>
								<h6 style={{ color: '#0b1972' }}> ✔ Submit separate forms for each bank</h6>
							
								<p>Banks do not share information with each other.</p>
								<h6 style={{ color: '#0b1972' }}> ✔ Keep acknowledgment receipts</h6>
								
								<p>Required during tax filing.</p>

								<br />
								<h3 style={{ color: '#0b1972' }}>When Should You Not File Form 15G/15H?</h3>
								<br />
								<p>Do not file these forms if:</p>

								<ul className="benefit-list style-2">
									<li>
										<div className="icon">
											<i className="icon-check" />
										</div>
										<p>
										 Your total income is taxable
										</p>
									</li>
									<li>
										<div className="icon">
											<i className="icon-check" />
										</div>
										<p>
										 Your tax liability is not zero.
										</p>
									</li>
									<li>
										<div className="icon">
											<i className="icon-check" />
										</div>
										<p>
										 Updated KYC and OTP verification may be required.
										</p>
									</li>
									<li>
										<div className="icon">
											<i className="icon-check" />
										</div>
										<p>
										 You are an NRI.
										</p>
									</li>
									<li>
										<div className="icon">
											<i className="icon-check" />
										</div>
										<p>
										 You want to avoid TDS despite having taxable interest income.
										</p>
									</li>
								</ul>
								<p>Incorrect filing can lead to under-reporting penalties and scrutiny.</p>

{/* ================================================================================================================================= */}

								<h3 style={{ color: '#0b1972' }}>Conclusion</h3>
								<br />
								<p> Forms 15G and 15H are useful tools for individuals and senior citizens to avoid unnecessary TDS on
									interest income. Correct usage ensures better cash flow and prevents tax refunds from getting
									blocked until the end of the year</p>

                                <p>Understanding the eligibility criteria and filing process ensures full compliance with income tax rules.</p>
                                <br />
                                <p>Bisways Consulting Group assists with tax planning, investment advisory, TDS compliance, and income
									tax filing to help individuals avoid mistakes and optimise their tax position.</p>
                                <br/>
                                

								<br /><span className="line" />
								<div className="bot mb-70">
									<div className="tags">
										<h6>
											Tags :
										</h6>
										<Link href="" > Form 15G | Form 15H | TDS | Interest Income</Link>
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
							Need help determining whether you should submit Form 15G or 15H?
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
							Connect with Bisways Consulting Group — your trusted partner for Individual
							Tax Filing and Compliance Advisory.
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
