
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
									Businesses often discover tax short-payments, mistakes in returns, excess ITC claims, or omissions
									during self-audit or departmental communication. To avoid penalties, interest, and unnecessary
									notices, the GST portal provides a facility for voluntary payment through Form DRC-03.
								</p>
								<p className="text mb-20">
									Form DRC-03 is used to pay tax, interest, penalty, or any other liability voluntarily or in response to a
									notice before adjudication. This helps taxpayers remain compliant and prevents escalation of
									proceedings.

								</p>
								<p className="text mb-35">
									This guide by Bisways Consulting Group explains when DRC-03 should be filed, types of payments
									allowed, step-by-step filing, and common mistakes to avoid.

								</p>
								<h3 style={{ marginTop: "40px", color: '#0b1972' }}> What Is Form DRC-03?</h3>
								<br />




								<h6 style={{ color: '#0b1972' }}> Form DRC-03 is an online challan used to make payments under:</h6>
								<br />
								<ul className="benefit-list style-2">
									<li>
										<div className="icon">
											<i className="icon-check" />
										</div>
										<p>
											Voluntary payment (self-assessment)
										</p>
									</li>
									<li>
										<div className="icon">
											<i className="icon-check" />
										</div>
										<p>
											Audit
										</p>
									</li>
									<li>
										<div className="icon">
											<i className="icon-check" />
										</div>
										<p>
											Investigation
										</p>
									</li>
									<li>
										<div className="icon">
											<i className="icon-check" />
										</div>
										<p>
											Show Cause Notice (SCN) before adjudication
										</p>
									</li>
									<li>
										<div className="icon">
											<i className="icon-check" />
										</div>
										<p>
											Return short-payment correction
										</p>
									</li>

								</ul>
								<p>
									It allows taxpayers to pay their outstanding liability and close the matter without further
									departmental action.
								</p>




								<h3 style={{ marginTop: "40px", color: '#0b1972' }}> When Should a Taxpayer File DRC-03?</h3>
								<br />
								<h5 className="text mb-35">
									1. Voluntary Payment Before Notice
								</h5>
								<h6 style={{ color: '#0b1972' }}> When you identify:</h6>
								<br />
								<ul className="benefit-list style-2">
									<li>
										<div className="icon">
											<i className="icon-check" />
										</div>
										<p>
											Under-reported sales
										</p>
									</li>
									<li>
										<div className="icon">
											<i className="icon-check" />
										</div>
										<p>
											Missed outward supplies
										</p>
									</li>
									<li>
										<div className="icon">
											<i className="icon-check" />
										</div>
										<p>
											Wrong ITC claim
										</p>
									</li>
									<li>
										<div className="icon">
											<i className="icon-check" />
										</div>
										<p>
											Excess ITC utilisation
										</p>
									</li>
									<li>
										<div className="icon">
											<i className="icon-check" />
										</div>
										<p>
											Interest short-payment
										</p>
									</li>
									<li>
										<div className="icon">
											<i className="icon-check" />
										</div>
										<p>
											Mistakes in earlier returns
										</p>
									</li>
								</ul>

								<h5 className="text mb-35">
									2. During Audit or Departmental Verification
								</h5>
								<br />
								<p>If discrepancies are identified during audit or verification, DRC-03 is filed to settle the liability.</p>
								<br />

								<h5 className="text mb-35">
									3. Against Show Cause Notice (Before Adjudication)
								</h5>
								<br />
								<p>If the taxpayer accepts the liability under Section 73 or 74, DRC-03 is used to make the payment and
									close proceedings.</p>
								<br />
								<h5 className="text mb-35">
									4. Payment of Interest or Penalty
								</h5>
								<br />
								<p>When interest or penalty arises due to delays or non-compliance.</p>
								<br />
								<h5 className="text mb-35">
									5. For Annual Return Reconciliation
								</h5>
								<br />
								<p>Differences noted while preparing GSTR-9 may require payment of additional tax through DRC-03.</p>




								<h3 style={{ marginTop: "40px", color: '#0b1972' }}>Modes of Payment Allowed</h3>
								<br />

								<h6 style={{ color: '#0b1972' }}>DRC-03 allows payment through:</h6>
								<br />
								<ul className="benefit-list style-2">
									<li>
										<div className="icon">
											<i className="icon-check" />
										</div>
										<p>
											Electronic Cash Ledger (mandatory for tax liability under SCN)
										</p>
									</li>
									<li>
										<div className="icon">
											<i className="icon-check" />
										</div>
										<p>
											Electronic Credit Ledger (allowed only for voluntary tax payment before SCN)
										</p>
									</li>

								</ul>
								<br />

								<h3 style={{ marginTop: "40px", color: '#0b1972' }}>Step-by-Step Process to File Form DRC-03</h3>
								<br />

								<h5 style={{ color: '#0b1972' }}>Step 1: Log in to GST Portal</h5>
								<br />
								<p>Go to: Services → User Services → My Applications → DRC-03.</p>

								<br />

								<h5 style={{ color: '#0b1972' }}>Step 2: Choose Payment Reason</h5>
								<br />
								<h6>Select one:</h6>
								<ul className="benefit-list style-2">
									<li>
										<div className="icon">
											<i className="icon-check" />
										</div>
										<p>
											Voluntary payment
										</p>
									</li>
									<li>
										<div className="icon">
											<i className="icon-check" />
										</div>
										<p>
											Audit
										</p>
									</li>
									<li>
										<div className="icon">
											<i className="icon-check" />
										</div>
										<p>
											Investigation
										</p>
									</li>
									<li>
										<div className="icon">
											<i className="icon-check" />
										</div>
										<p>
											SCN prior to adjudication
										</p>
									</li>

								</ul>

								<br />

								<h5 style={{ color: '#0b1972' }}>Step 3: Select Section</h5>
								<br />

								<ul className="benefit-list style-2">
									<li>
										<div className="icon">
											<i className="icon-check" />
										</div>
										<p>
											Section 73 – Non-fraud cases
										</p>
									</li>
									<li>
										<div className="icon">
											<i className="icon-check" />
										</div>
										<p>
											Section 74 – Fraud/suppression/wilful misstatement cases
										</p>
									</li>

								</ul>

								<br />

								<h5 style={{ color: '#0b1972' }}>Step 4: Enter Tax Period and Details</h5>
								<br />
								<h6>Provide:</h6>
								<ul className="benefit-list style-2">
									<li>
										<div className="icon">
											<i className="icon-check" />
										</div>
										<p>
											Tax head (CGST/SGST/IGST/Cess)
										</p>
									</li>
									<li>
										<div className="icon">
											<i className="icon-check" />
										</div>
										<p>
											Amount of tax, interest, or penalty
										</p>
									</li>


								</ul>


								<br />

								<h5 style={{ color: '#0b1972' }}>Step 5: Make Payment</h5>
								<br />
								<h6>Use the appropriate ledger:</h6>
								<ul className="benefit-list style-2">
									<li>
										<div className="icon">
											<i className="icon-check" />
										</div>
										<p>
											Cash Ledger
										</p>
									</li>
									<li>
										<div className="icon">
											<i className="icon-check" />
										</div>
										<p>
											Credit Ledger (only in permitted cases)
										</p>
									</li>


								</ul>

								<br />

								<h5 style={{ color: '#0b1972' }}>Step 6: Upload Supporting Documents</h5>
								<br />
								<p>Attach computation sheet and working notes (optional but recommended).</p>

								<br />

								<h5 style={{ color: '#0b1972' }}>Step 7: Preview and Submit</h5>
								<br />
								<p>Verify all details and submit using DSC or EVC.</p>
								<br />

								<h5 style={{ color: '#0b1972' }}>Step 8: Generate DRC-03 Acknowledgement</h5>
								<br />
								<p>Save the ARN generated as proof of payment.</p>



								<br /><br />

								<h3 style={{ marginTop: "40px", color: "#0b1972" }}>Interest and Penalty – Key Rules</h3>
								<br />

								<ul className="benefit-list style-2">
									<li>
										<div className="icon">
											<i className="icon-check" />
										</div>
										<p>Interest is mandatory if tax is paid late.</p>
									</li>
									<li>
										<div className="icon">
											<i className="icon-check" />
										</div>
										<p>Rate: 18% per annum from due date until payment.</p>
									</li>

									<li>
										<div className="icon">
											<i className="icon-check" />
										</div>
										<p>Penalty depends on whether the case falls under Section 73 or 74.</p>
									</li>
								</ul>

								<h3 style={{ marginTop: "40px", color: "#0b1972" }}>Common Mistakes to Avoid</h3>
								<br />

								<ul className="benefit-list style-2">
									<li>
										<div className="icon"><i className="icon-check" /></div>
										<p>Paying using credit ledger in SCN-related cases</p>
									</li>

									<li>
										<div className="icon"><i className="icon-check" /></div>
										<p>Wrong selection of section (73 vs 74)</p>
									</li>

									<li>
										<div className="icon"><i className="icon-check" /></div>
										<p>Missing period or incorrect tax head</p>
									</li>

									<li>
										<div className="icon"><i className="icon-check" /></div>
										<p>Multiple payments without checking liability</p>
									</li>

									<li>
										<div className="icon"><i className="icon-check" /></div>
										<p>Not keeping breakup/calculations for audit</p>
									</li>
								</ul>
								<p>
									A minor mistake in DRC-03 may lead to further queries or notices, so accuracy is essential.
								</p>


								<h3 style={{ marginTop: "40px", color: "#0b1972" }}>Why DRC-03 Is Important</h3>
								<br />

								<ul className="benefit-list style-2">
									<li>
										<div className="icon"><i className="icon-check" /></div>
										<p>Helps avoid litigation</p>
									</li>

									<li>
										<div className="icon"><i className="icon-check" /></div>
										<p>Settles liability at an early stage</p>
									</li>

									<li>
										<div className="icon"><i className="icon-check" /></div>
										<p>Maintains good compliance rating</p>
									</li>

									<li>
										<div className="icon"><i className="icon-check" /></div>
										<p>Reduces penalty exposure</p>
									</li>

									<li>
										<div className="icon"><i className="icon-check" /></div>
										<p>Smoothens GST audits</p>
									</li>

									<li>
										<div className="icon"><i className="icon-check" /></div>
										<p>Strengthens internal control and accuracy</p>
									</li>
								</ul>

								<h3 style={{ color: '#0b1972' }}>Conclusion</h3>
								<br />
								<p>Form DRC-03 is a powerful tool for taxpayers to rectify errors and voluntarily pay tax liabilities
									without facing strict departmental action. When used correctly, it ensures hassle-free compliance
									and avoids prolonged GST proceedings.</p>

								<br />
								<br />
								<p>Bisways Consulting Group assists businesses with GST reconciliations, voluntary payments, SCN
									replies, audit assistance, and complete compliance management.</p>

								<br /><br />
								<span className="line" />
								<div className="bot mb-70">
									<div className="tags">
										<h6>
											Tags :
										</h6>
										<Link href="" >DRC-03 | Voluntary Payment | GST Compliance</Link>
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
							Need help filing DRC-03 or resolving GST liabilities?
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
							Connect with Bisways Consulting Group — your trusted partner for GST Filing, SCN Reply, Audit
							Support, and Voluntary Payment Assistance.
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
