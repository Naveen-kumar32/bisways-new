
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
									Under Section 139 of the Companies Act, 2013, every company in India must formally appoint an
									auditor and file the details with the Registrar of Companies (ROC) using Form ADT-1.
								</p>
								<p className="text mt-3 mb-20">
									This filing is essential to confirm the auditor’s appointment, tenure, and consent, ensuring legal
									transparency in company financial reporting.
								</p>
								<br/>
								<p className="text mb-20">
									In this blog, Bisways Consulting Group explains the procedure, timeline, and documents required
									for filing Form ADT-1 accurately on the MCA portal.

								</p>

								<h3 style={{ marginTop: "40px", color: '#0b1972' }}>What Is Form ADT-1?</h3>
								<br />
								<p className="text ">
									Form ADT-1 is an MCA e-form used to inform the ROC about the appointment of a statutory auditor 
									by a company.
								</p>
								<br />
								<p className="text ">
									The auditor is appointed either:
								</p>
								<br />
								<ul className="benefit-list style-2">
									<li>
										<div className="icon">
											<i className="icon-check" />
										</div>
										<p>
											At the company’s First Annual General Meeting (AGM), or
										</p>
									</li>
									<li>
										<div className="icon">
											<i className="icon-check" />
										</div>
										<p>
											Within 30 days of incorporation in the case of a newly formed company.
										</p>
									</li>
								</ul>
								<p className="text ">
									Once filed, ADT-1 becomes part of the company’s official ROC records, providing a transparent audit trail of statutory appointments.
								</p>

								<br />
								{/* <h5 style={{ color: '#0b1972' }}> There are two main categories of annual filings:</h5>
								<br /> */}
								<h3 style={{ marginTop: "40px", color: '#0b1972' }}>Legal Requirement and Section Reference</h3>
								<br />
								<ul className="benefit-list style-2">
									<li>
										<div className="icon">
											<i className="icon-check" />
										</div>
										<p>
											Section 139(1) of the Companies Act mandates that companies must appoint an auditor at the
											first AGM, who will hold office for five years, subject to ratification in subsequent AGMs.
										</p>
									</li>
									<li>
										<div className="icon">
											<i className="icon-check" />
										</div>
										<p>
											The appointment must be reported to the ROC through Form ADT-1 within 15 days of the AGM.
										</p>
									</li>

									<li>
										<div className="icon">
											<i className="icon-check" />
										</div>
										<p>
											Non-filing leads to penalties on both the company and its officers.
										</p>
									</li>
                                  
                                    <p>⚠ Note: The form must also be filed for every new appointment, reappointment, or resignation of an auditor.

									</p>
								</ul>



								<h3 style={{ marginTop: "40px", color: '#0b1972' }}>Who Should File Form ADT-1?</h3>
								<br />
								<p>The responsibility for filing lies with the company, not the auditor.</p>									
								<p>It applies to:</p>
								<ul className="benefit-list style-2">
									<li>
										<div className="icon">
											<i className="icon-check" />
										</div>
										<p>Private Limited and Public Limited Companies</p>
									</li>
									<li>
										<div className="icon">
											<i className="icon-check" />
										</div>
										<p>
											One Person Companies (OPCs).
										</p>
									</li>

									<li>
										<div className="icon">
											<i className="icon-check" />
										</div>
										<p>
											Section 8 Companies.
										</p>
									</li>
                                  
                                    <p>The auditor, however, must give a written consent and eligibility certificate before the company files ADT-1.
									</p>
								</ul>

								<h3 style={{ marginTop: "40px", color: '#0b1972' }}>Documents Required for Filing</h3>
								<br />

								<ul className="benefit-list style-2">
									<li>
										<p>
											1. .Board Resolution or AGM resolution approving auditor appointment.
										</p>
									</li>
									<li>
										<p>
											2. Auditor’s Consent Letter (Form 6) confirming eligibility under Section 141
										</p>
									</li>
                                    	<li>
										<p>
											3. Certificate from the auditor under Section 139(1) stating qualification and non-disqualification.
										</p>
									</li>
                                    	<li>
										<p>
											4. Intimation letter from the company to the auditor regarding appointment
										</p>
									</li>
                                      	<li>
										<p>
											5. .Digital Signature Certificate (DSC) of a director or authorised signatory.
										</p>
									</li>
								</ul>
								<br />

								<h3 style={{ marginTop: "40px", color: '#0b1972' }}>Step-by-Step ADT-1 Filing Process</h3>
								<br />

								<ul className="benefit-list style-2">
									<li>
										<p>
										 Log in to the{" "} <a   href="https://www.mca.gov.in/" target="_blank" rel="noopener noreferrer" style={{ textDecoration: "underline" }} > MCA Portal </a>{" "}.
										</p>
									</li>
									<li>
										<p>
											2. Download the Form ADT-1 (available under ROC filings).
										</p>
									</li>
                                    	<li>
										<p>
											3. Enter company details, CIN, and auditor particulars.
										</p>
									</li>
                                    	<li>
										<p>
											4.Specify period of appointment and membership number of the auditor
										</p>
									</li>
                                      	<li>
										<p>
											5. Attach all supporting documents.
										</p>
									</li>
									   	<li>
										<p>
											6. Digitally sign with DSC of the director and certify by a practising CA/CS/CMA
										</p>
									</li>
									 	<li>
										<p>
											7. Upload and pay the statutory ROC filing fees.
										</p>
									</li>
									 	<li>
										<p>
											8. Save the SRN Acknowledgement for compliance records.
										</p>
									</li>
								</ul>
								<h3 style={{ marginTop: "40px", color: '#0b1972' }}>Filing Timeline</h3>
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
													Situation
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
													Due Date
												</th>
											</tr>
										</thead>

										<tbody>
											{[
												["First Auditor Appointment (after incorporation) ", "Within 30 days of incorporation"],
												["Regular Auditor Appointment (at AGM) ", "Within 15 days of AGM"],
												["Reappointment or Casual Vacancy ", "Within 15 days of appointment"],

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

									<p>💡 Tip: Always keep a digital copy of the auditor’s consent and resolution for internal recordkeeping.</p>

								</div>


								<h3 style={{ color: '#0b1972' }}>Penalties for Non-Filing</h3>
								<br />
								<p>If Form ADT-1 is not filed within the due date:</p>
								<ul className="benefit-list style-2">
									<li>
										<div className="icon">
											<i className="icon-check" />
										</div>
										<p>
											Company Penalty: ₹10,000 to ₹1,00,000.
										</p>
									</li>
									<li>
										<div className="icon">
											<i className="icon-check" />
										</div>
										<p>
											Officer in Default: ₹10,000 + ₹100 per day of continuing default (up to ₹5,00,000).
										</p>
									</li>
                                    </ul>
									<p>Non-filing may also affect audit compliance status during ROC inspection.</p>
								<br/>

{/* ================================================================================================================================= */}

								<h3 style={{ color: '#0b1972' }}>Conclusion</h3>
								<br />
								<p> Filing Form ADT-1 is a crucial step to formalise the auditor’s appointment and maintain legal
									compliance with the Companies Act</p>
                                <p>It reinforces the company’s commitment to transparent financial governance and audit integrity.</p>
                                <br />
                                <p>Bisways Consulting Group helps businesses with ADT-1 preparation, documentation, and end-toend MCA filing support — ensuring hassle-free statutory compliance.</p>
                                <br/>
                                

								<br /><span className="line" />
								<div className="bot mb-70">
									<div className="tags">
										<h6>
											Tags :
										</h6>
										<Link href="" > ADT-1 | Auditor Appointment | Company Law</Link>
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
							Need help filing Form ADT-1 or managing auditor-related ROC compliance?
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
							Connect with Bisways Consulting Group — your trusted partner for Audit Filings, ROC Compliance, and Corporate Advisory Services
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
