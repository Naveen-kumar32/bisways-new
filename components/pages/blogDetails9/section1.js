
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
									Goods and Services Tax (GST) has simplified India’s indirect taxation, merging multiple state and
									central levies into one unified system.
								</p>
								<p className="text mb-20">
									Whether you’re a startup, SME, or growing enterprise, obtaining GST registration is your first step
									towards legal recognition and nationwide trade compliance.
								</p>
								<p className="text mb-35">
									In this 2025 guide, Bisways Consulting Group explains who needs GST registration, what
									documents are required, and the complete step-by-step process to apply on the latest GST portal.
								</p>

								<h3 style={{ marginTop: "40px", color: '#0b1972' }}> Who Needs GST Registration in 2025</h3>
								<br />
								<h6 style={{ color: '#0b1972' }}> There are two main categories of annual filings:</h6>
								<br />
								<ul className="benefit-list style-2">
									<li>
										<div className="icon">
											<i className="icon-check" />
										</div>
										<p>
											Businesses with an aggregate turnover exceeding ₹40 lakh for goods or ₹20 lakh for services.
										</p>
									</li>
									<li>
										<div className="icon">
											<i className="icon-check" />
										</div>
										<p>
											Entities engaged in inter-state supply of goods or services.
										</p>
									</li>
									<li>
										<div className="icon">
											<i className="icon-check" />
										</div>
										<p>
											E-commerce operators and sellers on online marketplaces like Amazon or Flipkart.
										</p>
									</li>
									<li>
										<div className="icon">
											<i className="icon-check" />
										</div>
										<p>
											Casual taxable persons who conduct business temporarily (e.g., exhibitions, trade fairs).
										</p>
									</li>
									<li>
										<div className="icon">
											<i className="icon-check" />
										</div>
										<p>
											Non-resident taxable persons supplying goods or services in India.
										</p>
									</li>
									<li>
										<div className="icon">
											<i className="icon-check" />
										</div>
										<p>
											Input Service Distributors (ISDs) and agents issuing invoices on behalf of others.
										</p>
									</li>
								</ul>
								<p>💡Tip: Voluntary registration helps claim Input Tax Credit (ITC) and adds credibility with customers
									and vendors even if your turnover is below the limit.</p>


								<h3 style={{ marginTop: "40px", color: '#0b1972' }}>Documents Required for Registration</h3>
								<br />
								<h6 style={{ color: '#0b1972' }}>Before applying, keep these documents ready:</h6>
								<br />
								<ul className="benefit-list style-2">
									<li>
										<div className="icon">
											<i className="icon-check" />
										</div>
										<p>
											PAN of business or applicant.
										</p>
									</li>
									<li>
										<div className="icon">
											<i className="icon-check" />
										</div>
										<p>
											Aadhaar and photograph of promoters/directors/partners.
										</p>
									</li>
									<li>
										<div className="icon">
											<i className="icon-check" />
										</div>
										<p>
											Business registration proof – Partnership Deed or Certificate of Incorporation.
										</p>
									</li>
									<li>
										<div className="icon">
											<i className="icon-check" />
										</div>
										<p>
											Address proof – Rent agreement, electricity bill, or ownership document.
										</p>
									</li>
									<li>
										<div className="icon">
											<i className="icon-check" />
										</div>
										<p>
											Bank statement or cancelled cheque.
										</p>
									</li>
									<li>
										<div className="icon">
											<i className="icon-check" />
										</div>
										<p>
											Digital Signature Certificate (DSC) for companies and LLPs.
										</p>
									</li>
								</ul>
								<p>Ensure all documents are clear, updated, and uploaded in prescribed format.</p>


								<h3 style={{ marginTop: "40px", color: '#0b1972' }}> Step-by-Step GST Registration Process</h3>

								<br />
								<ul className="benefit-list style-2">
									<li>
										<p>
											1. Visit the official GST portal –<Link style={{ color: "red" }} href="https://www.gst.gov.in">https://www.gst.gov.in</Link>
										</p>
									</li>
									<li>

										<p>
											2.Click on “New Registration” under the Taxpayer tab.
										</p>
									</li>
									<li>

										<p>
											3.Enter details such as PAN, legal name, email, and mobile number.
										</p>
									</li>
									<li>

										<p>
											4.Verify OTPs to generate a Temporary Reference Number (TRN).
										</p>
									</li>
									<li>

										<p>
											5.Log in with TRN and fill Part B of Form GST REG-01.
										</p>
									</li>
									<li>

										<p>
											6.Upload documents and authorisation letter, then verify with DSC or EVC.
										</p>
									</li>
									<li>

										<p>
											7.The officer reviews your application within 7 working days.
										</p>
									</li>
									<li>

										<p>
											8.Once approved, your GSTIN (15-digit number) and registration certificate are issued via email.
										</p>
									</li>


								</ul>
								<p>
									⚠️ Note: If clarifications are sought, you’ll receive Form GST REG-03. Reply promptly using REG-04
									to avoid rejection under REG-05.
								</p>


								<h3 style={{ marginTop: "40px", color: '#0b1972' }}>Post-Registration Compliance Checklist</h3>
								<br />
								<h6 style={{ color: '#0b1972' }}>After receiving your GSTIN, businesses must:</h6>
								<br />
								<ul className="benefit-list style-2">
									<li>
										<div className="icon">
											<i className="icon-check" />
										</div>
										<p>
											Display GST certificate and number at all business premises.
										</p>
									</li>
									<li>
										<div className="icon">
											<i className="icon-check" />
										</div>
										<p>
											Issue GST-compliant tax invoices with HSN/SAC codes.
										</p>
									</li>
									<li>
										<div className="icon">
											<i className="icon-check" />
										</div>
										<p>
											File returns – GSTR-1, GSTR-3B, and annual GSTR-9 on time.
										</p>
									</li>
									<li>
										<div className="icon">
											<i className="icon-check" />
										</div>
										<p>
											Maintain books of accounts, purchase/sales registers, and invoices for six years.
										</p>
									</li>
									<li>
										<div className="icon">
											<i className="icon-check" />
										</div>
										<p>
											Track turnover to remain eligible under the correct tax scheme.
										</p>
									</li>
								</ul>

								<h3 style={{ marginTop: "40px", color: '#0b1972' }}> Composition Scheme – For Small Taxpayers</h3>
								<br />
								<h6 style={{ color: '#0b1972' }}>Small businesses with limited turnover can opt for the Composition Scheme:</h6>
								<br />
								<ul className="benefit-list style-2">
									<li>
										<div className="icon">
											<i className="icon-check" />
										</div>
										<p>
											Turnover up to ₹1.5 crore (goods) or ₹75 lakh (services).
										</p>
									</li>
									<li>
										<div className="icon">
											<i className="icon-check" />
										</div>
										<p>
											Tax rate: 1% for traders, 5% for restaurants, 6% for service providers.
										</p>
									</li>
									<li>
										<div className="icon">
											<i className="icon-check" />
										</div>
										<p>
											File GSTR-4 annually instead of monthly returns.
										</p>
									</li>
									<li>
										<div className="icon">
											<i className="icon-check" />
										</div>
										<p>
											Cannot collect GST from customers or claim Input Tax Credit.
										</p>
									</li>


								</ul>
								<p>💡Best for: Micro and small businesses looking for easier compliance.</p>

								<h3 style={{ marginTop: "40px", color: '#0b1972' }}>Common Mistakes to Avoid</h3>
								<br />

								<ul className="benefit-list style-2">
									<li>
										<div className="icon">
											<i className="icon-check" />
										</div>
										<p>
											Using individual PAN instead of business PAN.
										</p>
									</li>
									<li>
										<div className="icon">
											<i className="icon-check" />
										</div>
										<p>
											Uploading unclear or expired address proof.
										</p>
									</li>
									<li>
										<div className="icon">
											<i className="icon-check" />
										</div>
										<p>
											Mismatch between legal and trade names.
										</p>
									</li>
									<li>
										<div className="icon">
											<i className="icon-check" />
										</div>
										<p>
											Selecting wrong principal place of business.
										</p>
									</li>
									<li>
										<div className="icon">
											<i className="icon-check" />
										</div>
										<p>
											Not verifying the application within 15 days of TRN issue.
										</p>
									</li>


								</ul>
								<p>Even small errors can lead to rejection or delay in GSTIN approval.</p>



								<h3 style={{ marginTop: "40px", color: '#0b1972' }}>Understanding Annual ROC Filings</h3>
								<br />
								<p className="text ">
									ROC filings act as a formal declaration of your company’s financial position, ownership structure,
									and operational status.
								</p>



								<br />
								<h3 style={{ color: '#0b1972' }}>Conclusion</h3>
								<br />
								<p> GST registration marks your official entry into India’s organised business ecosystem.
									With proper documentation and timely compliance, you can enjoy seamless operations, claim Input
									<br />
									Tax Credit, and strengthen your brand’s credibility across India.</p>

								<br />
								<br /><span className="line" />
								<div className="bot mb-70">
									<div className="tags">
										<h6>
											Tags :
										</h6>
										<Link href="" >GST Registration | Business Setup | Compliance</Link>
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
							Need help with GST registration or portal filing support?
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
							Connect with Bisways Consulting Group — your trusted partner for GST
							Registration, Compliance, and Business Advisory Services.
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
