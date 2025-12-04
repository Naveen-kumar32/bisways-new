
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
									With the introduction of Section 115BAC, taxpayers in India can now choose between the old tax
									regime (with deductions and exemptions) and the new tax regime (with lower slab rates but fewer
									deductions).
								</p>
								{/* <br /> */}
								<p className="text mt-3 mb-20">
									While both sections deal with TDS on payments for services, they apply to different types of
									services, and the rates, thresholds, and rules vary significantly.
								</p>
								{/* <br/> */}
								<p className="text mb-20">
									To opt for the new tax regime, certain taxpayers—especially those with business or professional
									income—must submit Form 10IE before filing their Income Tax Return (ITR).
								</p>
								<br/>
								<p>This guide explains who needs Form 10IE, when it must be filed, step-by-step instructions, and key
									rules for taxpayers making the switch.
								</p>

								<h3 style={{ marginTop: "40px", color: '#0b1972' }}>What Is Form 10IE?</h3>
								<br />
								<p className="text ">
									Form 10IE is the official declaration form used to:
								</p>
									<ul className="benefit-list style-2">
										<li>
											<div className="icon">
												<i className="icon-check" />
											</div>
											<p>
												Opt for the new tax regime under Section 115BAC
											</p>
										</li>
										<li>
											<div className="icon">
												<i className="icon-check" />
											</div>
											<p>
												Inform the Income Tax Department before filing ITR
											</p>
										</li>
										<li>
											<div className="icon">
												<i className="icon-check" />
											</div>
											<p>
												Ensure correct application of slab rates for the financial year
											</p>
										</li>
										<p>The form is filed online through the income tax e-filing portal.</p>
									</ul>

								
								<h3 style={{ marginTop: "40px", color: '#0b1972' }}>Who Should File Form 10IE?</h3>
								<br />
								<h6 style={{ color: '#0b1972' }}> ✔ Required for:</h6>
								<br />

								<ul className="benefit-list style-2">
									<li>
										<div className="icon">
											<i className="icon-check" />
										</div>
										<p>
											Individuals and HUFs having Business or Professional Income
											Filing Form 10IE is mandatory to opt for the new tax regime
										</p>
									</li>
									<li>
										<div className="icon">
											<i className="icon-check" />
										</div>
										<p>
											Taxpayers opting out of the new regime in subsequent years
											If previously opted in, they must notify withdrawal.
										</p>
										</li>
								</ul>

								<h6 style={{ color: '#0b1972' }}> ❌ Not required for:</h6>
								<br/>
								<ul className="benefit-list style-2">
									<li>
										<div className="icon">
											<i className="icon-check" />
										</div>
										<p>
											Salaried individuals choosing the new regime directly while filing ITR (for FY 2023-24 onwards,
											default regime is new tax regime)
										</p>
									</li>
									<li>
										<div className="icon">
											<i className="icon-check" />
										</div>
										<p>
											Those with no business income, except where switching between regimes in earlier years.
										</p>
									</li>

									</ul>

								<h3 style={{ marginTop: "40px", color: '#0b1972' }}>Old Regime vs New Regime (Section 115BAC)</h3>
								<br />
								<h6 style={{ color: '#0b1972' }}> New Tax Regime – Lower Slabs, No Major Deductions</h6>
								<br/>
									<ul className="benefit-list style-2">
										<li>
											<div className="icon">
												<i className="icon-check" />
											</div>
											<p>
												Lower income tax rates
											</p>
										</li>
										<li>
											<div className="icon">
												<i className="icon-check" />
											</div>
											<p>
												No exemptions like 80C, 80D, HRA, LTA, and many others
											</p>
										</li>
											<li>
											<div className="icon">
												<i className="icon-check" />
											</div>
											<p>
												Simpler structure, fewer compliances
											</p>
										</li>
									</ul>
									<h6 style={{ color: '#0b1972' }}> Old Tax Regime – Higher Slabs, More Deductions</h6>
									<br/>
										<ul className="benefit-list style-2">
											<li>
												<div className="icon">
													<i className="icon-check" />
												</div>
												<p>
													Allows major deductions (80C, 80D, 80G, etc.)
												</p>
											</li>
											<li>
												<div className="icon">
													<i className="icon-check" />
												</div>
												<p>
													Suitable for taxpayers with high investment and deduction claims
												</p>
											</li>
											<p>Form 10IE is essential for those who want to choose the new regime intentionally, especially when
												income structure varies.
											</p>
										</ul>

								<h3 style={{ marginTop: "40px", color: '#0b1972' }}>Details Required in Form 10IE</h3>
								<br />
								<p>Taxpayer must provide:</p>
								<ul className="benefit-list style-2">
											<li>
												<div className="icon">
													<i className="icon-check" />
												</div>
												<p>
													Name, PAN, Address
												</p>
											</li>
											<li>
												<div className="icon">
													<i className="icon-check" />
												</div>
												<p>
													Assessment Year
												</p>
											</li>
											<li>
												<div className="icon">
													<i className="icon-check" />
												</div>
												<p>
													Whether having business/professional income
												</p>
											</li>
											<li>
												<div className="icon">
													<i className="icon-check" />
												</div>
												<p>
													Nature of business/profession
												</p>
											</li>
											<li>
												<div className="icon">
													<i className="icon-check" />
												</div>
												<p>
													Confirmation of opting for 115BAC new regime
												</p>
											</li>
											<li>
												<div className="icon">
													<i className="icon-check" />
												</div>
												<p>
													Date of filing
												</p>
											</li>
								</ul>

								<h3 style={{ marginTop: "40px", color: '#0b1972' }}>Step-by-Step Process to File Form 10IE</h3>
								<br />
								<h6 style={{ color: '#0b1972' }}> Step 1: Log In to the Income Tax Portal</h6>
								<p>Visit: {" "}
									<a
									href="https://www.incometax.gov.in"
									target="_blank"
									rel="noopener noreferrer"
									style={{ textDecoration: "underline" }}
								>
									https://www.incometax.gov.in
								</a>{" "}
								</p>
								<br/>
								<h6 style={{ color: '#0b1972' }}> Step 2: Navigate to Form 10IE</h6>
								<p>Go to: e-File → Income Tax Forms → File Income Tax Forms → Form 10IE</p>
								<br/>
								<h6 style={{ color: '#0b1972' }}> Step 3: Select the Assessment Year</h6>
								<br />
								<br/>
								<h6 style={{ color: '#0b1972' }}> Step 4: Fill Basic Details</h6>
								<p>PAN, name, address, date of birth, nature of business, etc.</p>
								<br/>
								<h6 style={{ color: '#0b1972' }}> Step 5: Choose New Tax Regime (115BAC)</h6>
								<br />
								<br/>
								<h6 style={{ color: '#0b1972' }}> Step 6: Verify Submission</h6>
								<br/>
								<p>Submit using:</p>
									<ul className="benefit-list style-2">
											<li>
												<div className="icon">
													<i className="icon-check" />
												</div>
												<p>
													Aadhaar OTP
												</p>
											</li>
											<li>
												<div className="icon">
													<i className="icon-check" />
												</div>
												<p>
													Digital Signature Certificate (DSC) (if applicable)
												</p>
											</li>
											<li>
												<div className="icon">
													<i className="icon-check" />
												</div>
												<p>
													Electronic verification (EVC)
												</p>
											</li>
									</ul>
								<h6 style={{ color: '#0b1972' }}> Step 7: Download the Acknowledgment</h6>
								<br />

							<h3 style={{ marginTop: "40px", color: '#0b1972' }}>Important Rules About Form 10IE</h3>
							<br />
							<h6 style={{ color: '#0b1972' }}> ✔ Once opted for the new regime:</h6>
							<br/>
								<ul className="benefit-list style-2">
									<li>
										<div className="icon">
											<i className="icon-check" />
										</div>
										<p>
											Individuals with business income can switch back only once.
										</p>
									</li>
									<li>
										<div className="icon">
											<i className="icon-check" />
										</div>
										<p>
											After switching back, the old regime becomes permanent unless business income ceases.
										</p>
									</li>
								</ul>
							<h6 style={{ color: '#0b1972' }}> ✔ For salaried individuals:</h6>
							<br/>
								<ul className="benefit-list style-2">
									<li>
										<div className="icon">
											<i className="icon-check" />
										</div>
										<p>
											They may choose regime every year while filing ITR (if no business income).
										</p>
									</li>
								</ul>

							<h6 style={{ color: '#0b1972' }}> ✔ Incorrect or late filing may cause:</h6>
							<br/>
								<ul className="benefit-list style-2">
										<li>
											<div className="icon">
												<i className="icon-check" />
											</div>
											<p>
												Incorrect tax computation.
											</p>
										</li>
										<li>
											<div className="icon">
												<i className="icon-check" />
											</div>
											<p>
												Departmental mismatch
											</p>
										</li>
										<li>
											<div className="icon">
												<i className="icon-check" />
											</div>
											<p>
												Rejection of claimed regime
											</p>
										</li>
									</ul>
								<h3 style={{ marginTop: "40px", color: '#0b1972' }}>When Should You File Form 10IE?</h3>
								<br />
									<ul className="benefit-list style-2">
										<li>
											<div className="icon">
												<i className="icon-check" />
											</div>
											<p>
												Before filing your ITR for the relevant Assessment Year
											</p>
										</li>
										<li>
											<div className="icon">
												<i className="icon-check" />
											</div>
											<p>
												Preferably before the due date (31 July / 31 October depending on audit applicability).
											</p>
										</li>
									</ul>
								<h3 style={{ marginTop: "40px", color: '#0b1972' }}>Practical Example</h3>
								<br />
								<p>A self-employed consultant wishes to switch to the new tax regime for FY 2022-23.</p>
								<p>They must file Form 10IE before filing ITR-3, otherwise the old regime will be applied automatically.</p>
								
								<br />
								<h3 style={{ color: '#0b1972' }}>Conclusion</h3>
								<br />
								<p> Form 10IE plays a crucial role in enabling taxpayers—especially those with business income—to
									legally opt into the new tax regime under Section 115BAC.</p>
                                <br />
                                <p> Filing it correctly ensures the right slab benefits are applied and prevents computation errors
									during ITR filing.</p>
                                <br/>
                                <p>Bisways Consulting Group assists taxpayers with Form 10IE filing, tax regime evaluation, ITR
									preparation, and personalised tax planning to help choose the most beneficial option.
								</p>
        

								<br /><span className="line" />
								<div className="bot mb-70">
									<div className="tags">
										<h6>
											Tags :
										</h6>
										<Link href="" > Form 10IE | 115BAC | New Tax Regime | ITR Option</Link>
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
							Need help deciding between the Old and New Tax Regime or filing Form 10IE?
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
							Income Tax Filing and Tax Planning.
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
