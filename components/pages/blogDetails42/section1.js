
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
									When purchasing an immovable property (other than agricultural land) valued above ₹50 lakhs, the
									buyer is legally required to deduct 1% TDS from the sale consideration and deposit it with the
									Income Tax Department.
								</p>
								<p className="text mt-3 mb-20">
									This deduction ensures proper reporting of high-value property transactions and prevents tax
									evasion.
								</p>
								<br/>
								<p className="text mb-20">
									Form 26QB is the online challan-cum-statement used by buyers to deposit this TDS and report the
									property transaction under Section 194-IA.
								</p>
								<br/>
								<p className="text mb-20">
									This guide explains the TDS rules, applicability, filing process, payment method, penalties, and
									important compliance requirements for buyers.
								</p>

								<h3 style={{ marginTop: "40px", color: '#0b1972' }}>What Is Section 194-IA?</h3>
								<br />
								<p className="text ">
									Section 194-IA of the Income Tax Act mandates that:
								</p>
								<br/>
								<ul className="benefit-list style-2">
									<li>
										<div className="icon">
											<i className="icon-check" />
										</div>
										<p>
											The buyer (not the seller) must deduct 1% TDS
										</p>
									</li>
									<li>
										<div className="icon">
											<i className="icon-check" />
										</div>
										<p>
											Applicable only when the property value &lt; ₹50 lakhs
										</p>
									</li>
										<li>
										<div className="icon">
											<i className="icon-check" />
										</div>
										<p>
											TDS must be deducted before making payment to the seller
										</p>
									</li>
									<p>This applies to:</p>
									<br />
									<li>
										<div className="icon">
											<i className="icon-check" />
										</div>
										<p>
											Residential property
										</p>
									</li>
									<li>
										<div className="icon">
											<i className="icon-check" />
										</div>
										<p>
											Commercial property
										</p>
									</li>
									<li>
										<div className="icon">
											<i className="icon-check" />
										</div>
										<p>
											Land (other than agricultural land)
										</p>
									</li>
								</ul>

								<h3 style={{ marginTop: "40px", color: '#0b1972' }}>What Is Section 194-IA?</h3>
								<br />
								<p>Form 26QB must be filed when:</p>

								<ul className="benefit-list style-2">
									<li>
										<div className="icon">
											<i className="icon-check" />
										</div>
										<p>
											A buyer purchases immovable property above ₹50,00,000
										</p>
									</li>
									<li>
										<div className="icon">
											<i className="icon-check" />
										</div>
										<p>
											Seller is a resident of India
										</p>
									</li>
									<li>
										<div className="icon">
											<i className="icon-check" />
										</div>
										<p>
											Payment is made in instalments or lump sum
										</p>
									</li>
																		<li>
										<div className="icon">
											<i className="icon-check" />
										</div>
										<p>
											More than one buyer or seller is involved (each combination files a separate 26QB)
										</p>
									</li>
								</ul>
								
								<h6 style={{ color: '#0b1972' }}> ❌ Not Required for:</h6>
								<br/>
								<ul className="benefit-list style-2">
									<li>
										<div className="icon">
											<i className="icon-check" />
										</div>
										<p>
											Sale of agricultural land
										</p>
									</li>
									<li>
										<div className="icon">
											<i className="icon-check" />
										</div>
										<p>
											Seller being an NRI (instead use Form 27Q, with higher TDS rates)
										</p>
									</li>
								</ul>
								
								<h3 style={{ marginTop: "40px", color: '#0b1972' }}>Rate of TDS Under Section 194-IA</h3>
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
													Transaction Type  
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
													TDS Rate
												</th>
											</tr>
										</thead>

										<tbody>
											{[
												["Property purchase above ₹50 lakhs ", "1% of sale consideration",]

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
								</div>

								<h6 style={{ color: '#0b1972' }}> Important Notes:</h6>
								<ul className="benefit-list style-2">
									<li>
										<div className="icon">
											<i className="icon-check" />
										</div>
										<p>
										 PAN of both buyer and seller is mandatory
										</p>
									</li>
									<li>
										<div className="icon">
											<i className="icon-check" />
										</div>
										<p>
										 If seller does NOT provide PAN → TDS must be deducted at 20%
										</p>
									</li>
									<li>
										<div className="icon">
											<i className="icon-check" />
										</div>
										<p>
										 TDS is calculated on the total sale value, not stamp duty value
										</p>
									</li>
								</ul>


								<h3 style={{ marginTop: "40px", color: '#0b1972' }}>Step-by-Step Process to File Form 26QB and Pay TDS</h3>
								<br />
								<h6 style={{ color: '#0b1972' }}>Step 1: Visit TIN-NSDLPortal</h6>
								<br />
								<p> Go to{" "} <a href="https://www.tin-nsdl.com" target="_blank" rel="noopener noreferrer" style={{ textDecoration: "underline" }} > https://www.tin-nsdl.com </a>{" "} and select TDS on Sale of Property (Form 26QB). </p>
								<br />

								<h6 style={{ color: '#0b1972' }}>Step 2: Fill Buyer and Seller Details</h6>
								<p>Enter:</p>
								<ul className="benefit-list style-2">
									<li>
										<div className="icon">
											<i className="icon-check" />
										</div>
										<p>
										 Name, address, and PAN of both parties
										</p>
									</li>
									<li>
										<div className="icon">
											<i className="icon-check" />
										</div>
										<p>
											Property details and full sale value
										</p>
									</li>
                                    	<li>
											<div className="icon">
											<i className="icon-check" />
										</div>
										<p>
											Date of payment/credit
										</p>
									</li>
                                    	<li>
											<div className="icon">
											<i className="icon-check" />
										</div>
										<p>
											Amount paid and TDS amount
										</p>
									</li>
								</ul>
								<h6 style={{ color: '#0b1972' }}>Step 3: Choose Payment Method</h6>
									<p>You may pay:</p>
									<ul className="benefit-list style-2">
										<li>
											<div className="icon">
												<i className="icon-check" />
											</div>
											<p>
												Online via Net Banking
											</p>
										</li>
										<li>
											<div className="icon">
												<i className="icon-check" />
											</div>
											<p>
												E-payment through authorised bank
											</p>
										</li>
										<li>
											<div className="icon">
												<i className="icon-check" />
											</div>
											<p>
												Generate challan for offline bank payment
											</p>
										</li>
									</ul>

									<h6 style={{ color: '#0b1972' }}>Step 4: Submit Form 26QB</h6>
									<p>A confirmation page and acknowledgment number are generated.</p>
									<br />
									<h6 style={{ color: '#0b1972' }}>Step 5: Download Form 16B (TDS Certificate)</h6>
									<br />
									<ul className="benefit-list style-2">
										<li>
											<div className="icon">
												<i className="icon-check" />
											</div>
											<p>
												Log in to TRACES
											</p>
										</li>
										<li>
											<div className="icon">
												<i className="icon-check" />
											</div>
											<p>
												Download Form 16B
											</p>
										</li>
										<li>
											<div className="icon">
												<i className="icon-check" />
											</div>
											<p>
												Provide it to the seller as proof of TDS deduction
											</p>
										</li>
									</ul>
										
								<h3 style={{ color: '#0b1972' }}>Due Dates</h3>
								<br />
								<ul className="benefit-list style-2">
									<br />
									<li>
										<div className="icon">
												<i className="icon-check" />
											</div>
										<p>
											TDS must be paid within 30 days from the end of the month in which deduction is made.
										</p>
									</li>
									<li>
										<div className="icon">
												<i className="icon-check" />
											</div>
										<p>
											Form 26QB filing and TDS payment happen together.
										</p>
										</li>
									</ul>
								<br/>

								
{/* ================================================================================================================================= */}
						<h3 style={{ marginTop: "40px", color: '#0b1972' }}>Penalties and Interest for Non-Compliance</h3>
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
													Default  
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
													Penalty / Consequence
												</th>
											</tr>
										</thead>

										<tbody>
											{[
												["Failure to deduct TDS ", "Interest @ 1% per month",],
												["Failure to deposit TDS ", "Interest @ 1.5% per month",],
												["Late filing of Form 26QB ", "Fee of ₹200/day (u/s 234E)",],
												["Incorrect PAN details ", "Penalty up to ₹10,000	",],

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
								</div>


{/* ===================================================================================================================================================== */}
								<h3 style={{ color: '#0b1972' }}>Special Situations</h3>
								<br />
								<h6 style={{ color: '#0b1972' }}>✔ Multiple Buyers/Sellers</h6>
									<p>A confirmation page and acknowledgment number are generated.</p>
									<br />

								<h6 style={{ color: '#0b1972' }}>✔ Payment in Installments</h6>
									<p>TDS must be deducted on each installment.</p>
									<br />
								<h6 style={{ color: '#0b1972' }}>✔ Home Loan Buyers</h6>
									<p>TDS is deducted on the actual amount paid to the seller, not on loan disbursed by bank.</p>
									<br />

								<h3 style={{ color: '#0b1972' }}>Why Filing Form 26QB Correctly Is Important</h3>

								<ul className="benefit-list style-2">
									<br />
									<li>
										<div className="icon">
												<i className="icon-check" />
											</div>
										<p>
											Ensures clean ownership records.
										</p>
									</li>
									<li>
										<div className="icon">
												<i className="icon-check" />
											</div>
										<p>
											Avoids penalties under Income Tax Act.
										</p>
										</li>
									<li>
										<div className="icon">
												<i className="icon-check" />
											</div>
										<p>
											Required for property registration and future sale
										</p>
										</li>
									<li>
										<div className="icon">
												<i className="icon-check" />
											</div>
										<p>
											Ensures seller gets credit for tax deducted
										</p>
										</li>
										<li>
										<div className="icon">
												<i className="icon-check" />
											</div>
										<p>
											Prevents mismatch in AIS/TIS and 26AS.
										</p>
										</li>
									</ul>
								<br/>

								

								<h3 style={{ color: '#0b1972' }}>Conclusion</h3>
								<br />
								<p> Form 26QB is a mandatory compliance step for anyone purchasing property above ₹50 lakhs.
									Filing it accurately ensures transparency, prevents interest and penalties, and keeps both buyer
									and seller compliant under Section 194-IA.</p>
                                <br />
                                <p>Bisways Consulting Group assists buyers with TDS calculation, Form 26QB filing, Form 16B
									download, payment verification, and end-to-end support for property-related compliance.
								</p>
                                <br/>
                                

								<br /><span className="line" />
								<div className="bot mb-70">
									<div className="tags">
										<h6>
											Tags :
										</h6>
										<Link href="" > 26QB | TDS on Property | Section 194-IA | Buyer Compliance</Link>
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
							Need help filing Form 26QB or correcting a wrong property TDS challan?
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
							Connect with Bisways Consulting Group — your trusted partner for Property
							TDS, Income Tax Compliance, and Buyer Advisory
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
