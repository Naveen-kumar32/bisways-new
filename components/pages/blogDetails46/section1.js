
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
									Budget 2023 further strengthened the new tax regime, offering simplified slabs and concessional
									rates. With both regimes now available, taxpayers—especially salaried individuals—often struggle to
									decide which option is financially beneficial.

								</p>
								<br />
								<p className="text mt-3 mb-20">
									The choice between the old regime (with deductions and exemptions) and the new regime (with
									lower tax rates but limited deductions) depends on income type, investments, and personal tax
									planning goals.
								</p>
								<br/>
								<p className="text mb-20">
									This guide explains key differences, slab rates, deductions allowed, practical examples, and how to
									choose the right regime for FY 2023–24.
								</p>
								<br/>

								<h3 style={{ marginTop: "40px", color: '#0b1972' }}>Understanding the Old Tax Regime</h3>
								<br />
								<p className="text ">
									Under the old regime, taxpayers enjoy numerous deductions and exemptions, reducing taxable income.
								</p>
								<br/>
								<h6 style={{ color: '#0b1972' }}> ✔ Major Deductions Allowed:</h6>
								<br />
								<ul className="benefit-list style-2">
									<li>
										<div className="icon">
											<i className="icon-check" />
										</div>
										<p>
											Section 80C (PPF, ELSS, PF, LIC, etc.) – up to ₹1.5 lakh
										</p>
									</li>
									<li>
										<div className="icon">
											<i className="icon-check" />
										</div>
										<p>
											Section 80D – Health insurance premium
										</p>
									</li>
										<li>
										<div className="icon">
											<i className="icon-check" />
										</div>
										<p>
											Section 24(b) – Home loan interest
										</p>
									</li>
										<li>
										<div className="icon">
											<i className="icon-check" />
										</div>
										<p>
											HRA exemption
										</p>
									</li>
									<li>
										<div className="icon">
											<i className="icon-check" />
										</div>
										<p>
											LTA (Leave Travel Allowance)
										</p>
									</li>
									<li>
										<div className="icon">
											<i className="icon-check" />
										</div>
										<p>
											Donations (80G), Education loan interest (80E), etc.
										</p>
									</li>
								</ul>
								<h6 style={{ color: '#0b1972' }}> ✔ Ideal for:</h6>
								<br />
									<ul className="benefit-list style-2">
										<li>
											<div className="icon">
												<i className="icon-check" />
											</div>
											<p>
												Taxpayers who maximise investments
											</p>
										</li>
										<li>
											<div className="icon">
												<i className="icon-check" />
											</div>
											<p>
												Individuals claiming home loan benefits
											</p>
										</li>
										<li>
											<div className="icon">
												<i className="icon-check" />
											</div>
											<p>
												Salaried employees receiving HRA/LTA
											</p>
										</li>
									</ul>

								<h3 style={{ marginTop: "40px", color: '#0b1972' }}>Understanding the New Tax Regime (115BAC)</h3>
									<p className="text ">
										The new tax regime offers lower tax rates and a cleaner structure without major deductions.
									</p>
								<br />
									<h6 style={{ color: '#0b1972' }}> ✔ Benefits:</h6>
									<br />
									<ul className="benefit-list style-2">
										<li>
											<div className="icon">
												<i className="icon-check" />
											</div>
											<p>
												Simplified tax calculation
											</p>
										</li>
										<li>
											<div className="icon">
												<i className="icon-check" />
											</div>
											<p>
												Lower slab rates (especially for incomes below ₹15 lakh)
											</p>
										</li>
										<li>
											<div className="icon">
												<i className="icon-check" />
											</div>
											<p>
												No need to track investments or exemptions
											</p>
										</li>
										<li>
											<div className="icon">
												<i className="icon-check" />
											</div>
											<p>
												Default regime from FY 2023–24 onwards
											</p>
										</li>
									</ul>
									<h6 style={{ color: '#0b1972' }}> ✔ Deductions Not Allowed:</h6>
									<br />
									<p className="text"> Most exemptions like HRA, 80C, 80D, LTA, and standard exemptions are not permitted.</p>

									<h3 style={{ marginTop: "40px", color: '#0b1972' }}>Tax Slab Comparison (Budget 2023)</h3>
										<br/>
										<div
											style={{
												display: "flex",
												gap: "40px",          // space between the two tables
												alignItems: "flex-start",
												marginBottom: "40px",
											}}
											>
											{/* LEFT TABLE */}
											<div style={{ flex: 1 }}>
												<h6 style={{ color: '#0b1972' }}>
												Old Tax Regime
												</h6>
												<br />

												<table
												style={{
													width: "100%",
													borderCollapse: "collapse",
													fontSize: "16px",
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
														}}
													>
														Income Range 
													</th>
													<th
														style={{
														background: "#0b1972",
														color: "white",
														padding: "14px 18px",
														textAlign: "left",
														fontWeight: 600,
														fontSize: "18px",
														}}
													>
														Tax Rate
													</th>
													</tr>
												</thead>
												<tbody>
													{[
													["Up to ₹2.5 lakh", "Nil"],
													["₹2.5–₹5 lakh", "5%"],
													["₹5–₹10 lakh", "20%"],
													["Above ₹10 lakh", "30%"],

													].map((row, i) => (
													<tr key={i}>
														<td
														style={{
															background: "#e6ac41",
															padding: "14px 18px",
															borderBottom: "2px solid black",
															fontWeight: 500,
															color: "#0b1972",
														}}
														>
														{row[0]}
														</td>
														<td
														style={{
															background: "#ffffff",
															padding: "14px 18px",
															borderBottom: "2px solid black",
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
											</div>

											{/* RIGHT TABLE */}
											<div style={{ flex: 1 }}>
												<h6 style={{ color: '#0b1972' }}>
												New Tax Regime
												</h6>
												<br/>

												<table
												style={{
													width: "100%",
													borderCollapse: "collapse",
													fontSize: "16px",
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
														}}
													>
														Income Range
													</th>
													<th
														style={{
														background: "#0b1972",
														color: "white",
														padding: "14px 18px",
														textAlign: "left",
														fontWeight: 600,
														fontSize: "18px",
														}}
													>
														Tax Rate
													</th>
													</tr>
												</thead>
												<tbody>
													{[
													["Up to ₹3 lakh ", "Nil"],
													["₹3–₹6 lakh ", "5%"],
													["₹6–₹9 lakh ", "10%"],
													["₹9–₹12 lakh", "15%"],
													["₹12–₹15 lakh","20%"],
													["Above ₹15 lakh","30%"],

													].map((row, i) => (
													<tr key={i}>
														<td
														style={{
															background: "#e6ac41",
															padding: "14px 18px",
															borderBottom: "2px solid black",
															fontWeight: 500,
															color: "#0b1972",
														}}
														>
														{row[0]}
														</td>
														<td
														style={{
															background: "#ffffff",
															padding: "14px 18px",
															borderBottom: "2px solid black",
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
											</div>
											</div>

						<h3 style={{ marginTop: "40px", color: '#0b1972' }}>Old vs New Regime – What You Gain and Lose</h3>
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
													Feature 
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
													Old Regime
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
													New Regime
												</th>
											</tr>
										</thead>

										<tbody>
											{[
												["Deductions ", "✔ Allowed","❌ Mostly not allowed"],
												["Standard Deduction ", "✔ ₹50,000","✔ ₹50,000 (from 2023)"],
												["Flexibility ", "Good for planners","Good for non-planners"],
												["Tax Simplicity", "Moderate","High"],
												["Suits", "High deduction claimers","Low deduction claimers"],

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
								</div>
										
								
							<h3 style={{ marginTop: "40px", color: '#0b1972' }}>Which Regime Is Better For You? (Practical Scenarios)</h3>
							<br />
								<h6 style={{ color: '#0b1972' }}> Scenario 1 – Employee with High Deductions</h6>
								<br/>
								<ul className="benefit-list style-2">
									<li>
										<div className="icon">
											<i className="icon-check" />
										</div>
										<p>
										 80C: ₹1.5 lakh
										</p>
									</li>
									<li>
										<div className="icon">
											<i className="icon-check" />
										</div>
										<p>
										 80D + other deductions: ₹50,000
										</p>
									</li>
									<li>
										<div className="icon">
											<i className="icon-check" />
										</div>
										<p>
										 HRA exemption: ₹1.2 lakh
										</p>
									</li>
									<p>Old Regime is beneficial due to higher tax savings</p>
								</ul>

						<h6 style={{ color: '#0b1972' }}> Scenario 2 – Employee Without Major Investments</h6>
						<br />
								<ul className="benefit-list style-2">
									<li>
										<div className="icon">
											<i className="icon-check" />
										</div>
										<p>
											No home loan
										</p>
									</li>
									<li>
										<div className="icon">
											<i className="icon-check" />
										</div>
										<p>
											No insurance investments
										</p>
									</li>
									<li>
										<div className="icon">
											<i className="icon-check" />
										</div>
										<p>
											Mostly salary income
										</p>
									</li>
									<p>New Regime is beneficial due to lower slab rates.</p>
								</ul>

								<h6 style={{ color: '#0b1972' }}> Scenario 3 – Self-Employed Professional</h6>
								<br />
								<ul className="benefit-list style-2">
									<li>
										<div className="icon">
											<i className="icon-check" />
										</div>
										<p>
											Flexible income
										</p>
									</li>
									<li>
										<div className="icon">
											<i className="icon-check" />
										</div>
										<p>
											May not invest in tax-saving instruments
										</p>
									</li>
									<p>New Regime simplifies compliance and reduces tax liability.</p>
								</ul>


								<h3 style={{ marginTop: "40px", color: '#0b1972' }}>How to Choose the Right Regime</h3>
								<br />
								<p>Ask yourself:</p>
									<h6 style={{ color: '#0b1972' }}>✔ Do you claim more than ₹3 lakh in deductions & exemptions?</h6>
									<br />
									<p>→ Old Regime</p>
									<h6 style={{ color: '#0b1972' }}>✔ Do you prefer simplicity and lower rates?</h6>
									<br />
									<p>→ New Regime</p>
									<h6 style={{ color: '#0b1972' }}>✔ Are you salaried without major tax-saving investments?</h6>
									<br />
									<p>→ New Regime</p>
									<h6 style={{ color: '#0b1972' }}>✔ Do you have an active home loan with high interest deductions?</h6>
									<br />
									<p>→ Old Regime</p>
								

								<h3 style={{ color: '#0b1972' }}>Conclusion</h3>
								<br />
								<p> Both tax regimes have their own advantages. The right choice depends on your income structure,
									investments, deductions, and long-term financial planning. Salaried taxpayers can switch regimes
									every year, but those with business income must plan more carefully.</p>
                                <br />
                                <p>Bisways Consulting Group helps individuals evaluate both regimes, compute tax liability, and
									choose the most beneficial option for optimal savings.
								</p>
        

								<br /><span className="line" />
								<div className="bot mb-70">
									<div className="tags">
										<h6>
											Tags :
										</h6>
										<Link href="" > Old Regime | New Regime | Tax Comparison | Budget 2023</Link>
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
							Need help choosing between the Old and New Tax Regime?
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
							Connect with Bisways Consulting Group — your trusted partner for Income Tax
							Planning and ITR Filing.
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
