
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
								{/* <div className="entry-image tf-hover mb-40 ">
									<div className="hover-1">
										<Image
											width="0"
											height="0"
											sizes="100vw"
											style={{ width: "100%", height: "auto" }}
											className="lazyload" data-src="/images/blog/blog-details.jpg" src="/images/blog/blog-details.jpg" alt="" />
									</div>
									<div className="tag-wrap">
										<p>Consulting</p>
									</div>
								</div> */}
								{/* <p className="title font-main-2 s1 text-anime-wave" style={{ color: '#0b1972' }}>
									Understanding the Role of a Virtual CFO
									in Modern Businesses
								</p>
								<div className="entry-meta">
									<ul className="meta-list ">
										<li className="entry author">
											<div className="icon">
												<i className="icon-calendar-days" style={{ color: '#ba1616ff' }} />

											</div>
											<p style={{ fontWeight: "600", fontStyle: "bold" }}>
												Published :
											</p>
											<p style={{ paddingLeft: "15px" }}>
												August 14, 2021
											</p>
										</li>

										<li>
											<div style={{ width: "3px", height: "20px", backgroundColor: "black" }}>
											</div>
										</li>
										<li className="entry comment">
											By Bisways Consulting Group
										</li>
									</ul>
								</div>
								<div className="entry-btn" style={{ display: "flex", justifyContent: "space-between", alignItems: "center", width: "100%" }}>
									<div>
										<p style={{ color: "black" }}> <span style={{ fontWeight: "bold", color: "black" }}>Category : </span> <Link href="/virtual-cfo"> Virtual CFO</Link> </p>
									</div>
								</div> */}
								<h3 style={{ color: '#0b1972' }}>Introduction</h3>
								<p className="text mt-3 mb-20">
									Non-Governmental Organisations (NGOs) and charitable trusts in India enjoy several tax benefits under the Income Tax Act.
								</p>
								<p className="text mb-20">
									However, to claim these benefits and make donations tax-exempt for contributors, they must
                                    obtain 80G and 12A registrations from the Income Tax Department.
								</p>
								<p className="text mb-35">
									Although both registrations are linked to charitable status, they serve different purposes — 12A
                                    exempts the NGO’s income, while 80G provides tax deduction to donors

								</p>
                                <p>In this article, Bisways Consulting Group explains the difference between 80G and 12A, their
                                    benefits, renewal process, and compliance requirements.</p>

								<h3 style={{ marginTop: "40px", color: '#0b1972' }}>What Is 12A Registration?</h3>
								<br />
								<p className="text ">
									Section 12A registration allows an NGO, trust, or society to claim exemption from paying income tax
                                    on its surplus income.
								</p>
                                <p>It essentially recognises the entity as a non-profit organisation whose earnings are applied solely
                                   towards charitable purposes.
                                </p>


								<br />
								{/* <h5 style={{ color: '#0b1972' }}> There are two main categories of annual filings:</h5>
								<br /> */}
								<h6 style={{ color: '#0b1972' }}>  Key Points:</h6>
								<br />
								<ul className="benefit-list style-2">
									<li>
										<div className="icon">
											<i className="icon-check" />
										</div>
										<p>
											Applicable to Trusts, NGOs, and Section 8 Companies.
										</p>
									</li>
									<li>
										<div className="icon">
											<i className="icon-check" />
										</div>
										<p>
											Must be obtained soon after registration of the entity.
										</p>
									</li>
                                    <li>
										<div className="icon">
											<i className="icon-check" />
										</div>
										<p>
											Exemption covers income derived from donations, grants, or other sources used for charitable objectives.
										</p>
									</li>
                                    <li>
										<div className="icon">
											<i className="icon-check" />
										</div>
										<p>
											Registration is granted under Section 12AB and must be renewed periodically as per CBDT guidelines.
										</p>
									</li>
                                    <p>💡 Tip: Without 12A, an NGO’s income is treated as taxable business income.</p>
								</ul>

                                <h3 style={{ marginTop: "40px", color: '#0b1972' }}>What Is 80G Registration?</h3>
								<br />
								<p className="text ">
									Section 80G registration benefits the donors who contribute to the NGO or trust.
								</p>
                                <p>It allows them to claim a deduction of 50% or 100% of the donated amount from their taxable income, depending on the nature of the NGO and the donation.
                                </p>


								<br />
								{/* <h5 style={{ color: '#0b1972' }}> There are two main categories of annual filings:</h5>
								<br /> */}
								<h6 style={{ color: '#0b1972' }}>  Key Points:</h6>
								<br />
								<ul className="benefit-list style-2">
									<li>
										<div className="icon">
											<i className="icon-check" />
										</div>
										<p>
											Encourages corporate and individual donations to charitable organisations.
										</p>
									</li>
									<li>
										<div className="icon">
											<i className="icon-check" />
										</div>
										<p>
											The NGO must already have valid 12A registration to apply for 80G.
										</p>
									</li>
                                    <li>
										<div className="icon">
											<i className="icon-check" />
										</div>
										<p>
											Donations must be made through banking channels to be eligible for deduction.
										</p>
									</li>
                                    <li>
										<div className="icon">
											<i className="icon-check" />
										</div>
										<p>
											The NGO must issue a donation receipt with its 80G number and PAN.
										</p>
									</li>
                                    <p>⚠ Note: Cash donations exceeding ₹2,000 are not eligible for deduction under Section 80G.</p>
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
														borderColor: "white"
													}}
												>
													Basis 
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
													Section 12A
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
													Section 80G
												</th>


											</tr>
										</thead>

										<tbody>
											{[
												["Purpose ", "Exempts NGO’s income fromtax", "Gives tax deduction to donors"],
												["Beneficiary", "NGO / Trust", " Donor (individual or organisation)"],
												["Applicability", "For all charitable or religious organisations", "For organisations receiving donations"],
												["Pre-condition ", "Can apply immediately after NGO registration", "Can be applied only after obtaining 12A"],
												["Validity", " Usually 5 years (renewable)", "Usually 5 years (renewable)"],
                                                ["Form for Application", " Form 10A / 10AB", "Form 10A / 10AB"],
                                                ["Approving Authority ", " Commissioner of Income Tax (Exemption)", "Commissioner of Income Tax(Exemption)"],
                                                ["Tax Effect", " Income of NGO exempt fromtax", "Donation eligible for tax deduction"],

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

{/* ================================================================================================================================= */}

								<h3 style={{ color: '#0b1972' }}>Documents Required for Registration</h3>
								<br />
								<ul className="benefit-list style-2">
									<li>
										<p>
											1. Trust Deed / Registration Certificate.
										</p>
									</li>
									<li>
										<p>
											2. PAN card of the Trust or NGO.
										</p>
									</li>
                                    	<li>
										<p>
											3. Financial statements of the last three years (if applicable)
										</p>
									</li>
                                    	<li>
										<p>
											4. List of trustees or governing body members.
										</p>
									</li>
                                      	<li>
										<p>
											5. Details of activities carried out since inception.
										</p>
									</li>
                                    <li>
										<p>
											6. Aadhaar and contact details of authorised signatories.
										</p>
									</li>
								</ul>
								<br />
					
								<br />
								<h3 style={{ marginTop: "40px", color: '#0b1972' }}>Renewal and Compliance</h3>
								<br />
								<ul className="benefit-list style-2">
									<li>
										<div className="icon">
											<i className="icon-check" />
										</div>
										<p>
											Both 12A and 80G registrations must be renewed every 5 years under the new regime.
										</p>
									</li>
									<li>
										<div className="icon">
											<i className="icon-check" />
										</div>
										<p>
											NGOs must file annual returns (Form 10B and ITR-7) and maintain proper books of accounts.
										</p>
									</li>
									<li>
										<div className="icon">
											<i className="icon-check" />
										</div>
										<p>
											Any misuse of funds or deviation from charitable objectives may lead to cancellation of registration.
										</p>
									</li>
									<li>
										<div className="icon">
											<i className="icon-check" />
										</div>
										<p>
											Changes in the Trust Deed, board, or address must be reported to the department within 30 days.
										</p>
									</li>									
								</ul>
								
								<br />
								<h3 style={{ color: '#0b1972' }}>Conclusion</h3>
								<br />
								<p> 80G and 12A registrations are twin pillars of trust-based compliance. </p>
                                <p>While 12A protects the NGO’s income from taxation, 80G enhances donor confidence by providing tax-saving benefits.</p>
                                <br />
                                <p>Timely application, renewal, and transparent accounting are essential to retain both benefits and
                                attract sustained funding.</p>
                                <br/>
                                <p>Bisways Consulting Group assists NGOs, Section 8 companies, and charitable trusts in obtaining,
                                renewing, and managing 80G and 12A registrations seamlessly</p>

								<br /><span className="line" />
								<div className="bot mb-70">
									<div className="tags">
										<h6>
											Tags :
										</h6>
										<Link href="" >80G | 12A | Charitable Compliance</Link>
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
							Need help registering or renewing your NGO’s 80G and 12A approvals?
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
							Connect with Bisways Consulting Group — your trusted partner for NGO Registration, Tax Exemption, and CSR Compliance Services.
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
