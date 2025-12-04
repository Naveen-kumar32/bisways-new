
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
									Whenever money is sent outside India — whether for import payments, consultancy fees, royalty,
									foreign services, or investments — the Income Tax Act requires mandatory reporting through Form
									15CA and Form 15CB.

								</p>
								<p className="text mb-20">
									These forms ensure that the remittance complies with the Foreign Exchange Management Act
									(FEMA) and that tax liabilities (TDS), if any, are properly addressed before the funds leave India.
									Banks will not process most foreign remittances unless 15CA/15CB is filed correctly.

								</p>
								<p className="text mb-35">
									This guide by Bisways Consulting Group explains what Form 15CA and 15CB are, when they are
									required, who files them, and the complete step-by-step filing process.

								</p>
								<h3 style={{ marginTop: "40px", color: '#0b1972' }}>What Is Form 15CA?</h3>
								<br />
								<p className="text mb-35">
									Form 15CA is an online declaration submitted by the remitter (payer) to the Income Tax Department
									before making a foreign payment.
								</p>



								<h6 style={{ marginTop: "40px", color: '#0b1972' }}>It contains:</h6>
								<br />
								<ul className="benefit-list style-2">
									<li>
										<div className="icon">
											<i className="icon-check" />
										</div>
										<p>
											Nature of remittance
										</p>
									</li>
									<li>
										<div className="icon">
											<i className="icon-check" />
										</div>
										<p>
											Country and currency
										</p>
									</li>
									<li>
										<div className="icon">
											<i className="icon-check" />
										</div>
										<p>
											Amount
										</p>
									</li>
									<li>
										<div className="icon">
											<i className="icon-check" />
										</div>
										<p>
											Applicable tax rate
										</p>
									</li>
									<li>
										<div className="icon">
											<i className="icon-check" />
										</div>
										<p>
											TDS deduction details
										</p>
									</li>
									<li>
										<div className="icon">
											<i className="icon-check" />
										</div>
										<p>
											Whether Form 15CB is required
										</p>
									</li>
								</ul>
								<p>
									It acts as a self-declaration that tax obligations have been fulfilled.
								</p>



								<h3 style={{ marginTop: "40px", color: '#0b1972' }}>What Is Form 15CB?</h3>
								<br />
								<p className="text mb-35">
									Form 15CB is a certificate issued by a Chartered Accountant (CA).
								</p>

								<h6 style={{ marginTop: "40px", color: '#0b1972' }}>It is required when:</h6>
								<br />
								<ul className="benefit-list style-2">
									<li>
										<div className="icon">
											<i className="icon-check" />
										</div>
										<p>
											The remittance is taxable in India
										</p>
									</li>
									<li>
										<div className="icon">
											<i className="icon-check" />
										</div>
										<p>
											The payment exceeds ₹5,00,000 in a financial year (in most cases)
										</p>
									</li>
									<li>
										<div className="icon">
											<i className="icon-check" />
										</div>
										<p>
											Banks require CA certification for high-value remittances
										</p>
									</li>

								</ul>

								<br />
								<h6 style={{ marginTop: "40px", color: '#0b1972' }}>The CA certifies:</h6>
								<br />
								<ul className="benefit-list style-2">
									<li>
										<div className="icon">
											<i className="icon-check" />
										</div>
										<p>
											Applicable DTAA (Double Taxation Avoidance Agreement)
										</p>
									</li>
									<li>
										<div className="icon">
											<i className="icon-check" />
										</div>
										<p>
											Taxability of the payment
										</p>
									</li>
									<li>
										<div className="icon">
											<i className="icon-check" />
										</div>
										<p>
											TDS rate and deduction
										</p>
									</li>
									<li>
										<div className="icon">
											<i className="icon-check" />
										</div>
										<p>
											Nature and purpose of remittance
										</p>
									</li>
									<li>
										<div className="icon">
											<i className="icon-check" />
										</div>
										<p>
											Legal compliance under Income Tax & FEMA
										</p>
									</li>

								</ul>





								<h3 style={{ color: '#0b1972' }}>When Do You Need 15CA & 15CB?</h3>

								<br />
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
													Remittance Type
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
													Form Required
												</th>
											</tr>
										</thead>

										<tbody>
											{[
												["Taxable remittance > ₹5,00,000", "15CA + 15CB"],
												["Taxable remittance < ₹5,00,000", "15CA (Part A/B)"],
												["Non-taxable remittance", "15CA (Part D)"],
												["Remittance covered under Rule 37BB exemption list", "No 15CA/15CB"],
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


								<h6 style={{ marginTop: "40px", color: '#0b1972' }}>Examples of exempt remittances:</h6>
								<br />
								<ul className="benefit-list style-2">
									<li>
										<div className="icon">
											<i className="icon-check" />
										</div>
										<p>
											Import of goods
										</p>
									</li>
									<li>
										<div className="icon">
											<i className="icon-check" />
										</div>
										<p>
											Travel, tuition, and medical expenses
										</p>
									</li>
									<li>
										<div className="icon">
											<i className="icon-check" />
										</div>
										<p>
											Business travel
										</p>
									</li>
									<li>
										<div className="icon">
											<i className="icon-check" />
										</div>
										<p>
											Postal charges
										</p>
									</li>
									<li>
										<div className="icon">
											<i className="icon-check" />
										</div>
										<p>
											Remittances by individual for personal purposes
										</p>
									</li>

								</ul>

								<br />
								<br />

								<h3 style={{ color: '#0b1972' }}>Four Parts of Form 15CA</h3>

								<br />
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
													Part
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
													When Used?
												</th>
											</tr>
										</thead>

										<tbody>
											{[
												["Part A", "Remittance up to ₹5,00,000 and taxable"],
												["Part B", "Remittance up to ₹5,00,000 with 15CB required"],
												["Part C", "Remittance above ₹5,00,000 (15CB mandatory)"],
												["Part D", "Remittances that are not taxable (Rule 37BB)"]
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


								<h3 style={{ marginTop: "40px", color: '#0b1972' }}>Step-by-Step Filing Process for 15CA & 15CB</h3>
								<br />
								<h5 style={{ color: '#0b1972' }}>Step 1: Gather Documents</h5>
								<br />
								<ul className="benefit-list style-2">
									<li>
										<div className="icon">
											<i className="icon-check" />
										</div>
										<p>
											Invoice / Agreement
										</p>
									</li>
									<li>
										<div className="icon">
											<i className="icon-check" />
										</div>
										<p>
											Purpose of remittance
										</p>
									</li>
									<li>
										<div className="icon">
											<i className="icon-check" />
										</div>
										<p>
											Bank details
										</p>
									</li>
									<li>
										<div className="icon">
											<i className="icon-check" />
										</div>
										<p>
											Vendor details
										</p>
									</li>
									<li>
										<div className="icon">
											<i className="icon-check" />
										</div>
										<p>
											DTAA documents (if applicable)
										</p>
									</li>

								</ul>



								<br />
								<h5 style={{ color: '#0b1972' }}>Step 2: CA Issues Form 15CB</h5>
								<br />
								<p> The Chartered Accountant reviews documents and certifies:</p>
								<br />
								<ul className="benefit-list style-2">
									<li>
										<div className="icon">
											<i className="icon-check" />
										</div>
										<p>
											Taxability
										</p>
									</li>
									<li>
										<div className="icon">
											<i className="icon-check" />
										</div>
										<p>
											DTAA benefit availability
										</p>
									</li>
									<li>
										<div className="icon">
											<i className="icon-check" />
										</div>
										<p>
											TDS applicability
										</p>
									</li>
								</ul>

								<h5 style={{ color: '#0b1972' }}> Step 3: Login to Income Tax Portal</h5>
								<br />
								<p>Navigate to e-File → Income Tax Forms → File 15CA.</p>
								<br />
								<h5 style={{ color: '#0b1972' }}>Step 4: Select the Correct 15CA Part</h5>
								<br />
								<p>Choose Part A/B/C/D based on remittance type.</p>
								<br />
								<h5 style={{ color: '#0b1972' }}>Step 5: Upload or Link 15CB</h5>
								<br />
								<p> If required, link the CA-certified Form 15CB.</p>
								<br />
								<h5 style={{ color: '#0b1972' }}>Step 6: Submit Form 15CA</h5>
								<br />
								<p> Submit using DSC or EVC.</p>
								<br />
								<br />
								<h5 style={{ color: '#0b1972' }}> Step 7: Provide Acknowledgement to Bank</h5>
								<br />
								<p> Bank processes the foreign remittance only after receiving the:</p>
								<br />
								<ul className="benefit-list style-2">
									<li>
										<div className="icon">
											<i className="icon-check" />
										</div>
										<p>
											15CA acknowledgement
										</p>
									</li>
									<li>
										<div className="icon">
											<i className="icon-check" />
										</div>
										<p>
											15CB certificate (if applicable)
										</p>
									</li>
								</ul>




								<br />
								<br />

								<h3 style={{ color: '#0b1972' }}>Common Mistakes to Avoid</h3>
								<br />
								<ul className="benefit-list style-2">
									<li>
										<div className="icon">
											<i className="icon-check" />
										</div>
										<p>Incorrect purpose code</p>
									</li>
									<li>
										<div className="icon">
											<i className="icon-check" />
										</div>
										<p>Wrong tax rate or DTAA selection</p>
									</li>
									<li>
										<div className="icon">
											<i className="icon-check" />
										</div>
										<p>Not uploading 15CB when required</p>
									</li>
									<li>
										<div className="icon">
											<i className="icon-check" />
										</div>
										<p>Remitting funds before 15CA filing</p>
									</li>
									<li>
										<div className="icon">
											<i className="icon-check" />
										</div>
										<p>Using old vendor or bank information</p>
									</li>
									<li>
										<div className="icon">
											<i className="icon-check" />
										</div>
										<p>Not verifying residency status of recipient</p>
									</li>
								</ul>
								<p> Incorrect reporting may lead to penalties under Section 271-I.</p>



								<br />

								<br />
								<h3 style={{ color: '#0b1972' }}>Best Practices for Foreign Remittance Compliance</h3>
								<br />

								<ul className="benefit-list style-2">
									<li>
										<div className="icon">
											<i className="icon-check" />
										</div>
										<p>Consult a CA before any foreign payment</p>
									</li>
									<li>
										<div className="icon">
											<i className="icon-check" />
										</div>
										<p>Verify residential status and DTAA benefits</p>
									</li>
									<li>
										<div className="icon">
											<i className="icon-check" />
										</div>
										<p>Maintain all supporting documents and invoices</p>
									</li>
									<li>
										<div className="icon">
											<i className="icon-check" />
										</div>
										<p>File 15CA accurately and keep acknowledgement copies</p>
									</li>
									<li>
										<div className="icon">
											<i className="icon-check" />
										</div>
										<p>Follow RBI + FEMA guidelines for each remittance category</p>
									</li>
								</ul>


								<br />
								<h3 style={{ color: '#0b1972' }}>Conclusion</h3>
								<br />
								<p> Forms 15CA and 15CB play a crucial role in ensuring that foreign remittances comply with Indian tax
									and FEMA laws. Proper reporting, CA certification, and documentation prevent penalties and ensure
									smooth bank processing.</p>

								<br />
								<br />
								<p>Bisways Consulting Group assists individuals and businesses with foreign remittance
									documentation, 15CA/15CB preparation, and TDS compliance — ensuring a seamless and compliant
									remittance process.</p>

								<br /><br />
								<span className="line" />
								<div className="bot mb-70">
									<div className="tags">
										<h6>
											Tags :
										</h6>
										<Link href="" >15CA | 15CB | Foreign Remittance | FEMA Compliance</Link>
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
							Need help filing Form 15CA or obtaining Form 15CB
							certification?
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
							Connect with Bisways Consulting Group — your trusted partner for Foreign Remittances, FEMA
							Advisory, and Income Tax Compliance.
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
