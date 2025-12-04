
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
									A company’s registered office address is its official legal location for receiving notices, statutory
									communication, and government correspondence. Any change in this registered office must be
									reported to the Ministry of Corporate Affairs (MCA) by filing Form INC-22 within the prescribed
									timelines.
								</p>
								<p className="text mb-20">
									Whether the company is shifting its office within the same city, to another city within the same
									state, or to a different state entirely, the Companies Act, 2013 lays down specific procedural and
									documentary requirements.
								</p>
								<p className="text mb-20">
									This guide by Bisways Consulting Group explains when Form INC-22 is required, steps to file it,
									documentation, approvals, and key compliance rules.
								</p>

								<h3 style={{ marginTop: "40px", color: '#0b1972' }}>What Is Form INC-22?</h3>
								<br />
								<p>
									Form INC-22 is an MCA e-form used to notify the Registrar of Companies (ROC) about:
								</p>
								<br />
								<ul className="benefit-list style-2">
									<li>
										<div className="icon">
											<i className="icon-check" />
										</div>
										<p>Change in registered office within local limits</p>
									</li>

									<li>
										<div className="icon">
											<i className="icon-check" />
										</div>
										<p>Change within the same ROC jurisdiction</p>
									</li>

									<li>
										<div className="icon">
											<i className="icon-check" />
										</div>
										<p>Change from one ROC jurisdiction to another</p>
									</li>

									<li>
										<div className="icon">
											<i className="icon-check" />
										</div>
										<p>Shifting of office from one state to another</p>
									</li>
								</ul>
								<p>Filing this form is mandatory to keep company records updated.</p>



								<h3 style={{ marginTop: "40px", color: '#0b1972' }}>When Is Form INC-22 Required?</h3>
								<br />
								<h5 style={{ color: '#0b1972' }}>1. Change of Registered Office within the Same City/Town/Village</h5>
								<br />
								<p>
									Requires passing a Board Resolution and filing INC-22 within 30 days.
								</p>
								<br />
								<h5 style={{ color: '#0b1972' }}>2. Change within the Same State but Outside Local Limits</h5>
								<br />
								<p>									Requires:

								</p>
								<br />
								<ul className="benefit-list style-2">
									<li>
										<div className="icon">
											<i className="icon-check" />
										</div>
										<p>Board Resolution</p>
									</li>

									<li>
										<div className="icon">
											<i className="icon-check" />
										</div>
										<p>Special Resolution</p>
									</li>

									<li>
										<div className="icon">
											<i className="icon-check" />
										</div>
										<p>Filing MGT-14 (if applicable)</p>
									</li>

									<li>
										<div className="icon">
											<i className="icon-check" />
										</div>
										<p>Filing INC-22</p>
									</li>
								</ul>



								<h5 style={{ color: '#0b1972' }}>3. Change from One ROC Jurisdiction to Another (Within the Same State)</h5>
								<br />
								<p>
									Needs:
								</p>
								<br />
								<ul className="benefit-list style-2">
									<li>
										<div className="icon">
											<i className="icon-check" />
										</div>
										<p>Special Resolution</p>
									</li>

									<li>
										<div className="icon">
											<i className="icon-check" />
										</div>
										<p>RD approval (in certain cases)</p>
									</li>

									<li>
										<div className="icon">
											<i className="icon-check" />
										</div>
										<p>Filing Form INC-23 (if required)</p>
									</li>

									<li>
										<div className="icon">
											<i className="icon-check" />
										</div>
										<p>Filing INC-22</p>
									</li>
								</ul>

								<h5 style={{ color: '#0b1972' }}>4. Change from One State to Another</h5>
								<br />
								<p>
									This is the most complex shift and requires:
								</p>
								<br />
								<ul className="benefit-list style-2">
									<li>
										<div className="icon">
											<i className="icon-check" />
										</div>
										<p>Board and Special Resolutions</p>
									</li>

									<li>
										<div className="icon">
											<i className="icon-check" />
										</div>
										<p>Filing MGT-14</p>
									</li>

									<li>
										<div className="icon">
											<i className="icon-check" />
										</div>
										<p>Newspaper advertisement</p>
									</li>

									<li>
										<div className="icon">
											<i className="icon-check" />
										</div>
										<p>NOC from creditors</p>
									</li>

									<li>
										<div className="icon">
											<i className="icon-check" />
										</div>
										<p>Regional Director (RD) approval</p>
									</li>

									<li>
										<div className="icon">
											<i className="icon-check" />
										</div>
										<p>INC-23 for approval</p>
									</li>

									<li>
										<div className="icon">
											<i className="icon-check" />
										</div>
										<p>INC-28 for order filing</p>
									</li>

									<li>
										<div className="icon">
											<i className="icon-check" />
										</div>
										<p>INC-22 for final address change</p>
									</li>
								</ul>





								<h3 style={{ marginTop: "40px", color: '#0b1972' }}>Documents Required for Filing INC-22</h3>
								<br />
								<h5 style={{ color: '#0b1972' }}> A. Proof of New Registered Office</h5>
								<br />
								<ul className="benefit-list style-2">
									<li>
										<div className="icon">
											<i className="icon-check" />
										</div>
										<p>Electricity bill / Water bill / Gas bill (not older than 2 months)</p>
									</li>

									<li>
										<div className="icon">
											<i className="icon-check" />
										</div>
										<p>Property tax receipt</p>
									</li>

									<li>
										<div className="icon">
											<i className="icon-check" />
										</div>
										<p>Rent agreement</p>
									</li>
								</ul>


								<h5 style={{ color: '#0b1972' }}> B. No-Objection Certificate (NOC)</h5>
								<br />
								<p>From property owner if premises are rented/leased.</p>
								<br />

								<h5 style={{ color: '#0b1972' }}>C. Resolutions & Internal Documents</h5>
								<br />
								<ul className="benefit-list style-2">
									<li>
										<div className="icon">
											<i className="icon-check" />
										</div>
										<p>Certified copy of Board Resolution</p>
									</li>

									<li>
										<div className="icon">
											<i className="icon-check" />
										</div>
										<p>Certified copy of Special Resolution (if applicable)</p>
									</li>


								</ul>


								<h5 style={{ color: '#0b1972' }}>D. Additional Documents</h5>
								<br />
								<ul className="benefit-list style-2">
									<li>
										<div className="icon">
											<i className="icon-check" />
										</div>
										<p>Photographs of premises with company name board</p>
									</li>

									<li>
										<div className="icon">
											<i className="icon-check" />
										</div>
										<p>Proof of ROC approval (if shifting across ROC/state)</p>
									</li>

								</ul>



								<h3 style={{ marginTop: "40px", color: '#0b1972' }}>Step-by-Step Filing Process for INC-22</h3>
								<br />
								<h5 style={{ color: '#0b1972' }}>Step 1: Hold a Board Meeting</h5>
								<br />
								<p>Approve shifting of registered office and authorise a signatory.</p>
								<br />
								<h5 style={{ color: '#0b1972' }}>Step 2: Prepare Necessary Resolutions</h5>
								<br />
								<p>Draft and pass Board/Special Resolutions.</p>
								<br />

								<h5 style={{ color: '#0b1972' }}>Step 3: Collect Supporting Documents</h5>
								<br />
								<p>Ensure all address proofs, NOCs, and premises photos are ready.</p>
								<br />

								<h5 style={{ color: '#0b1972' }}>Step 4: File Form INC-22 on MCA Portal</h5>
								<br />
								<p> Enter:</p>
								<br />
								<ul className="benefit-list style-2">
									<li>
										<div className="icon">
											<i className="icon-check" />
										</div>
										<p>CIN</p>
									</li>

									<li>
										<div className="icon">
											<i className="icon-check" />
										</div>
										<p>New address</p>
									</li>

									<li>
										<div className="icon">
											<i className="icon-check" />
										</div>
										<p>Effective date</p>
									</li>

									<li>
										<div className="icon">
											<i className="icon-check" />
										</div>
										<p>Police station jurisdiction</p>
									</li>

									<li>
										<div className="icon">
											<i className="icon-check" />
										</div>
										<p>Attach documents</p>
									</li>
								</ul>





								<br />
								<h5 style={{ color: '#0b1972' }}>Step 5: Sign with DSC</h5>
								<br />
								<p>Form must be digitally signed by:</p>
								<br />
								<ul className="benefit-list style-2">
									<li>
										<div className="icon">
											<i className="icon-check" />
										</div>
										<p>Director</p>
									</li>

									<li>
										<div className="icon">
											<i className="icon-check" />
										</div>
										<p>Company Secretary (if applicable)</p>
									</li>
								</ul>

								<br />
								<h5 style={{ color: '#0b1972' }}>Step 6: Payment of Filing Fees</h5>
								<br />
								<p>
									Based on authorised capital
								</p>
								<br />

								<h5 style={{ color: '#0b1972' }}>Step 7: ROC Verification & Approval</h5>
								<br />
								<p>
									Upon approval, the company’s master data is updated.
								</p>


								<h3 style={{ marginTop: "40px", color: '#0b1972' }}>Timelines for Compliance</h3>
								<br />

								<ul className="benefit-list style-2">
									<li>
										<div className="icon">
											<i className="icon-check" />
										</div>
										<p>INC-22 must be filed within 30 days of the office shift</p>
									</li>

									<li>
										<div className="icon">
											<i className="icon-check" />
										</div>
										<p>For state change: process and approvals may take 30–60 days</p>
									</li>

									<li>
										<div className="icon">
											<i className="icon-check" />
										</div>
										<p>Delay results in additional fees and penalties</p>
									</li>
								</ul>



								<h3 style={{ marginTop: "40px", color: '#0b1972' }}>Common Mistakes to Avoid</h3>
								<br />

								<ul className="benefit-list style-2">
									<li>
										<div className="icon">
											<i className="icon-check" />
										</div>
										<p>Not taking NOC from property owner</p>
									</li>

									<li>
										<div className="icon">
											<i className="icon-check" />
										</div>
										<p>Incorrect pin code or jurisdiction mismatch</p>
									</li>

									<li>
										<div className="icon">
											<i className="icon-check" />
										</div>
										<p>Missing attachments</p>
									</li>

									<li>
										<div className="icon">
											<i className="icon-check" />
										</div>
										<p>Incorrect police station details</p>
									</li>

									<li>
										<div className="icon">
											<i className="icon-check" />
										</div>
										<p>Filing INC-22 without passing resolutions</p>
									</li>

									<li>
										<div className="icon">
											<i className="icon-check" />
										</div>
										<p>Shifting outside state without RD approval</p>
									</li>
								</ul>




								<h3 style={{ marginTop: "40px", color: '#0b1972' }}>Why Timely Filing of INC-22 Matters</h3>
								<br />

								<ul className="benefit-list style-2">
									<li>
										<div className="icon">
											<i className="icon-check" />
										</div>
										<p>Ensures legal validity of company communications</p>
									</li>

									<li>
										<div className="icon">
											<i className="icon-check" />
										</div>
										<p>Prevents penalties and ROC notices</p>
									</li>

									<li>
										<div className="icon">
											<i className="icon-check" />
										</div>
										<p>Required for bank updates, GST amendments, and statutory filings</p>
									</li>

									<li>
										<div className="icon">
											<i className="icon-check" />
										</div>
										<p>Reflects correct location in public records</p>
									</li>

									<li>
										<div className="icon">
											<i className="icon-check" />
										</div>
										<p>Ensures transparency with stakeholders</p>
									</li>
								</ul>



								<h3 style={{ color: '#0b1972' }}>Conclusion</h3>
								<br />
								<p> Form INC-22 is essential for legally updating your company’s registered office address with the
									MCA. Whether the shift is minor or across jurisdictions, following the correct procedure ensures
									smooth compliance and avoids complications.
									<br />
									Bisways Consulting Group provides expert support for registered office changes, ROC filings,
									drafting resolutions, and end-to-end MCA compliance.</p>

								<br />
								<br /><span className="line" />
								<div className="bot mb-70">
									<div className="tags">
										<h6>
											Tags :
										</h6>
										<Link href="" >
											INC-22 | Registered Office | Address Change | ROC Filing</Link>
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
							Need help filing INC-22 or changing your company’s
							registered office?
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
							Connect with Bisways Consulting Group — your trusted partner for ROC Compliance, MCA Filings,
							and Corporate Advisory
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
