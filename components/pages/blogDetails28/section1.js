
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
									Taxpayers often get confused about whether they should file ITR-3 or ITR-4, especially when their
									income includes business, profession, salary, interest, or presumptive income. Both forms cater to
									different categories of taxpayers and have specific eligibility criteria.
								</p>

								<p className="text mb-35">
									This guide by Bisways Consulting Group explains the key differences between ITR-3 and ITR-4, who
									can file them, and how presumptive taxation under Section 44ADA/44AD/44AE impacts small
									business owners and professionals.
								</p>


								<h3 style={{ marginTop: "40px", color: '#0b1972' }}>What Is ITR-3?</h3>
								<br />
								<p> ITR-3 is meant for individuals and HUFs whose income includes:</p>
								<br />
								<ul className="benefit-list style-2">
									<li>
										<div className="icon">
											<i className="icon-check" />
										</div>
										<p>
											Business income (non-presumptive)
										</p>
									</li>
									<li>
										<div className="icon">
											<i className="icon-check" />
										</div>
										<p>
											Professional income (regular books maintained)
										</p>
									</li>
									<li>
										<div className="icon">
											<i className="icon-check" />
										</div>
										<p>
											Income from partnership firm (interest/salary)
										</p>
									</li>
									<li>
										<div className="icon">
											<i className="icon-check" />
										</div>
										<p>
											House property
										</p>
									</li>
									<li>
										<div className="icon">
											<i className="icon-check" />
										</div>
										<p>
											Capital gains
										</p>
									</li>
									<li>
										<div className="icon">
											<i className="icon-check" />
										</div>
										<p>
											Other sources
										</p>
									</li>

								</ul>
								<p>ITR-3 is applicable when the taxpayer maintains books of accounts and follows the normal taxation
									method.</p>

								<br />
								<p>Best suited for:</p>
								<br />
								<ul className="benefit-list style-2">
									<li>
										<div className="icon">
											<i className="icon-check" />
										</div>
										<p>
											Business owners maintaining detailed accounts
										</p>
									</li>
									<li>
										<div className="icon">
											<i className="icon-check" />
										</div>
										<p>
											Doctors, lawyers, architects, and professionals not opting for presumptive tax
										</p>
									</li>
									<li>
										<div className="icon">
											<i className="icon-check" />
										</div>
										<p>
											Traders with complex transactions
										</p>
									</li>
									<li>
										<div className="icon">
											<i className="icon-check" />
										</div>
										<p>
											Partners drawing interest/salary from a partnership firm
										</p>
									</li>
								</ul>





								<h3 style={{ marginTop: "40px", color: '#0b1972' }}>What Is ITR-4? (Sugam Form)</h3>
								<br />
								<h6 style={{ color: '#0b1972' }}> ITR-4 is used by individuals, HUFs, and partnership firms (except LLPs) who opt for Presumptive
									Taxation under:</h6>
								<br />
								<ul className="benefit-list style-2">
									<li>
										<div className="icon">
											<i className="icon-check" />
										</div>
										<p>
											Section 44AD – Small businesses
										</p>
									</li>
									<li>
										<div className="icon">
											<i className="icon-check" />
										</div>
										<p>
											Section 44ADA – Professionals
										</p>
									</li>
									<li>
										<div className="icon">
											<i className="icon-check" />
										</div>
										<p>
											Section 44AE – Goods transport businesses
										</p>
									</li>

								</ul>
								<p>Under these sections, income is computed on a presumptive basis without maintaining books of
									accounts.</p>

								<br />
								<h6 style={{ color: '#0b1972' }}>Eligibility:</h6>
								<br />
								<ul className="benefit-list style-2">
									<li>
										<div className="icon">
											<i className="icon-check" />
										</div>
										<p>
											Total income up to ₹50 lakh
										</p>
									</li>
									<li>
										<div className="icon">
											<i className="icon-check" />
										</div>
										<p>
											Business turnover up to ₹2 crore (44AD)
										</p>
									</li>
									<li>
										<div className="icon">
											<i className="icon-check" />
										</div>
										<p>
											Professional receipts up to ₹75 lakh (44ADA updated limit)
										</p>
									</li>
									<li>
										<div className="icon">
											<i className="icon-check" />
										</div>
										<p>
											Transporters with &lt; 10 goods vehicles (44AE)
										</p>

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
													ITR-3
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
													ITR-4
												</th>
											</tr>
										</thead>

										<tbody>
											{[
												["Type of Income", "Business/profession (regular)", "Presumptive income (44AD/44ADA/44AE)"],
												["Books of Accounts", "Required", "Not required"],
												["Audit Requirement", "Possible under 44AB", "Not required unless turnover exceeds limits"],
												["Eligible Entities", "Individuals & HUFs", "Individuals, HUFs & non-LLP firms"],
												["Income Limit", "No upper limit", "Income ≤ ₹50 lakh"],
												["Partnership Firm Income", "Allowed (salary/interest)", "Not allowed"],
												["Capital Gains Reporting", "Allowed", "Not allowed"],
												["Foreign Income/Assets", "Allowed", "Not allowed"]
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





								<h3 style={{ marginTop: "40px", color: '#0b1972' }}>
									Who Should Choose ITR-3?
								</h3>
								<br />
								<p>Choose ITR-3 if:</p>
								<br />

								<ul className="benefit-list style-2">
									<li>
										<div className="icon">
											<i className="icon-check" />
										</div>
										<p>You maintain books of accounts</p>
									</li>

									<li>
										<div className="icon">
											<i className="icon-check" />
										</div>
										<p>Your business or profession has high expenses</p>
									</li>

									<li>
										<div className="icon">
											<i className="icon-check" />
										</div>
										<p>You earn capital gains</p>
									</li>

									<li>
										<div className="icon">
											<i className="icon-check" />
										</div>
										<p>You have foreign income or assets</p>
									</li>

									<li>
										<div className="icon">
											<i className="icon-check" />
										</div>
										<p>You are a partner receiving salary or interest from a partnership firm</p>
									</li>

									<li>
										<div className="icon">
											<i className="icon-check" />
										</div>
										<p>Your turnover crosses presumptive limits</p>
									</li>
								</ul>

								<h3 style={{ marginTop: "40px", color: '#0b1972' }}>
									Who Should Choose ITR-4?
								</h3>
								<br />
								<p>Choose ITR-4 if:</p>
								<br />

								<ul className="benefit-list style-2">
									<li>
										<div className="icon">
											<i className="icon-check" />
										</div>
										<p>You want simplified filing without books</p>
									</li>

									<li>
										<div className="icon">
											<i className="icon-check" />
										</div>
										<p>Your income is predictable and qualifies for presumptive taxation</p>
									</li>

									<li>
										<div className="icon">
											<i className="icon-check" />
										</div>
										<p>You are a small trader, shop owner, freelancer, or professional</p>
									</li>

									<li>
										<div className="icon">
											<i className="icon-check" />
										</div>
										<p>Your total income is below ₹50 lakh</p>
									</li>

									<li>
										<div className="icon">
											<i className="icon-check" />
										</div>
										<p>You want to reduce compliance burden and audit requirements</p>
									</li>
								</ul>





								<h3 style={{ marginTop: "40px", color: '#0b1972' }}>Presumptive Taxation – When Does It Help?</h3>
								<br />
								<h5 style={{ color: '#0b1972' }}> Section 44AD (Small Businesses)</h5>
								<br />
								<p>Income assumed at 8% or 6% of turnover depending on mode of receipt.</p>
								<br />
								<h5 style={{ color: '#0b1972' }}>Section 44ADA (Professionals)</h5>
								<br />
								<p>Income assumed at 50% of gross receipts.</p>
								<br />
								<h5 style={{ color: '#0b1972' }}>Section 44AE (Transporters)</h5>
								<br />
								<p> Fixed income per vehicle per month.</p>

								<br />
								<h5 style={{ color: '#0b1972' }}> Benefits:</h5>
								<ul className="benefit-list style-2">
									<li>

										<p>
											No books of accounts
										</p>
									</li>
									<li>

										<p>
											No tax audit
										</p>
									</li>
									<li>

										<p>
											Lower compliance cost
										</p>
									</li>
									<li>

										<p>
											Quick return filing
										</p>
									</li>

								</ul>


								<h3 style={{ marginTop: "40px", color: '#0b1972' }}>
									Common Mistakes to Avoid
								</h3>
								<br />
								<p>Be careful to avoid the following mistakes:</p>
								<br />

								<ul className="benefit-list style-2">
									<li>
										<div className="icon">
											<i className="icon-check" />
										</div>
										<p>Filing ITR-4 despite having capital gains</p>
									</li>

									<li>
										<div className="icon">
											<i className="icon-check" />
										</div>
										<p>Opting for presumptive taxation while maintaining full books</p>
									</li>

									<li>
										<div className="icon">
											<i className="icon-check" />
										</div>
										<p>Filing ITR-3 without reporting business expenses properly</p>
									</li>

									<li>
										<div className="icon">
											<i className="icon-check" />
										</div>
										<p>Not checking turnover and income limits before choosing a form</p>
									</li>

									<li>
										<div className="icon">
											<i className="icon-check" />
										</div>
										<p>Declaring lower income under Section 44AD/44ADA without audit</p>
									</li>
								</ul>

								<h3 style={{ marginTop: "40px", color: '#0b1972' }}>
									Which Form Should You File? – Quick Decision Table
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
													Your Situation
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
													Form
												</th>

											</tr>
										</thead>

										<tbody>
											{[
												["Small business with turnover ≤ ₹2 crore", "ITR-4"],
												["Professional (doctor/CA/lawyer) with receipts ≤ ₹75 lakh", "ITR-4"],
												["Partner in partnership firm", "ITR-3"],
												["Capital gains from shares/property", "ITR-3"],
												["Foreign assets or foreign income", "ITR-3"],
												["Want to avoid maintaining books", "ITR-4"],
												["High business expenses needing deductions", "ITR-3"]
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



								<br />
								<h3 style={{ color: '#0b1972' }}>Conclusion</h3>
								<br />
								<p> Choosing the correct ITR form is essential to ensure accurate reporting and avoid notices. While ITR
									4 simplifies tax filing for small businesses and professionals under presumptive taxation, ITR-3 is
									suitable for taxpayers with detailed accounts, multiple income heads, or higher complexity.
									<br />
									<br />
									Bisways Consulting Group provides expert support in selecting the right ITR form, preparing income
									proofs, and filing accurate returns under the Income Tax Act.</p>

								<br />
								<br /><span className="line" />
								<div className="bot mb-70">
									<div className="tags">
										<h6>
											Tags :
										</h6>
										<Link href="" >ITR-3 | ITR-4 | Section 44ADA | Presumptive Tax</Link>

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
							Need help choosing the correct ITR form or filing your tax
							return?
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
							Connect with Bisways Consulting Group — your trusted partner for Income Tax Filing, ITR Advisory,
							and Compliance Support.
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
