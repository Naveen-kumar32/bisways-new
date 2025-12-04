
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
									Every registered GST taxpayer must deposit tax, interest, penalty, or late fees using a GST payment
									challan, formally known as Form PMT-06. This challan is essential for businesses that need to make
									advance payments, pay tax liabilities arising from GSTR-3B, or correct previous period errors.
								</p>
								<p className="text mb-20">
									Understanding how to generate and pay using Form PMT-06 ensures smooth compliance, prevents
									penalties, and helps taxpayers avoid unnecessary late payment interest.
									<br />
									This guide by Bisways Consulting Group provides a step-by-step explanation of generating PMT-06,
									payment modes, interest rules, and the process for correcting mistaken challans.
								</p>


								<h3 style={{ marginTop: "40px", color: '#0b1972' }}>What Is Form PMT-06?</h3>
								<br />
								<p>
									Form PMT-06 is the official challan used to deposit amounts into the GST Electronic Cash Ledger.
								</p>
								<br />
								<p>Taxpayers use it to pay:</p>
								<br />
								<ul className="benefit-list style-2">
									<li>
										<div className="icon">
											<i className="icon-check" />
										</div>
										<p>IGST</p>
									</li>

									<li>
										<div className="icon">
											<i className="icon-check" />
										</div>
										<p>CGST</p>
									</li>

									<li>
										<div className="icon">
											<i className="icon-check" />
										</div>
										<p>SGST</p>
									</li>

									<li>
										<div className="icon">
											<i className="icon-check" />
										</div>
										<p>Cess</p>
									</li>

									<li>
										<div className="icon">
											<i className="icon-check" />
										</div>
										<p>Interest</p>
									</li>

									<li>
										<div className="icon">
											<i className="icon-check" />
										</div>
										<p>Penalties</p>
									</li>

									<li>
										<div className="icon">
											<i className="icon-check" />
										</div>
										<p>Late fees</p>
									</li>

									<li>
										<div className="icon">
											<i className="icon-check" />
										</div>
										<p>Any other GST liability</p>
									</li>
								</ul>

								<p>Once the challan is paid, the amount reflects in the Electronic Cash Ledger and can be used to set off
									tax liability.</p>



								<h3 style={{ marginTop: "40px", color: '#0b1972' }}>When Should You Use PMT-06?</h3>
								<br />
								<p>
									Form PMT-06 is required for:
								</p>
								<br />
								<ul className="benefit-list style-2">
									<li>
										<div className="icon">
											<i className="icon-check" />
										</div>
										<p>Monthly or quarterly GST payments</p>
									</li>

									<li>
										<div className="icon">
											<i className="icon-check" />
										</div>
										<p>Payment of interest for delayed filing</p>
									</li>

									<li>
										<div className="icon">
											<i className="icon-check" />
										</div>
										<p>Payment of late fees</p>
									</li>

									<li>
										<div className="icon">
											<i className="icon-check" />
										</div>
										<p>Liability due to amendments or corrections in GSTR-1/3B</p>
									</li>

									<li>
										<div className="icon">
											<i className="icon-check" />
										</div>
										<p>Amount payable after scrutiny or notices</p>
									</li>

									<li>
										<div className="icon">
											<i className="icon-check" />
										</div>
										<p>Advance tax payments under QRMP scheme</p>
									</li>
								</ul>



								<h3 style={{ marginTop: "40px", color: '#0b1972' }}>Types of GST Payments Allowed</h3>
								<br />
								<h5 style={{ color: '#0b1972' }}>1. Tax Liability (IGST/CGST/SGST/Cess)</h5>
								<br />
								<p>
									For outward supplies as per GSTR-3B.
								</p>
								<br />

								<h5 style={{ color: '#0b1972' }}>2. Interest</h5>
								<br />
								<p>
									Applicable for delayed tax payment or delayed GSTR-3B filing.
								</p>
								<br />

								<h5 style={{ color: '#0b1972' }}>3. Late Fees</h5>
								<br />
								<p>
									Charged for late filing of returns.
								</p>
								<br />



								<h5 style={{ color: '#0b1972' }}> 4. Penalties</h5>
								<br />
								<p> Imposed for non-compliance, defaults, or inaccurate reporting.</p>
								<br />


								<h3 style={{ marginTop: "40px", color: '#0b1972' }}>Documents and Details Required</h3>
								<br />
								<ul className="benefit-list style-2">
									<li>
										<div className="icon">
											<i className="icon-check" />
										</div>
										<p>GSTIN</p>
									</li>

									<li>
										<div className="icon">
											<i className="icon-check" />
										</div>
										<p>Period for which payment is made</p>
									</li>

									<li>
										<div className="icon">
											<i className="icon-check" />
										</div>
										<p>Type of tax (IGST/CGST/SGST/Cess)</p>
									</li>

									<li>
										<div className="icon">
											<i className="icon-check" />
										</div>
										<p>Tax amount, interest, late fee, or penalty</p>
									</li>

									<li>
										<div className="icon">
											<i className="icon-check" />
										</div>
										<p>Mode of payment</p>
									</li>

									<li>
										<div className="icon">
											<i className="icon-check" />
										</div>
										<p>Bank account details</p>
									</li>
								</ul>





								<h3 style={{ marginTop: "40px", color: '#0b1972' }}>Step-by-Step Process to Generate PMT-06 Challan</h3>
								<br />
								<h5 style={{ color: '#0b1972' }}>Step 1: Log in to GST Portal</h5>
								<br />
								<p>Go to: Services → Payments → Create Challan</p>
								<br />
								<h5 style={{ color: '#0b1972' }}>Step 2: Enter Payment Details</h5>
								<br />
								<p>Specify:</p>
								<br />
								<ul className="benefit-list style-2">
									<li>
										<div className="icon">
											<i className="icon-check" />
										</div>
										<p>Tax head (IGST, CGST, SGST)</p>
									</li>

									<li>
										<div className="icon">
											<i className="icon-check" />
										</div>
										<p>Interest</p>
									</li>

									<li>
										<div className="icon">
											<i className="icon-check" />
										</div>
										<p>Penalty</p>
									</li>

									<li>
										<div className="icon">
											<i className="icon-check" />
										</div>
										<p>Late fee</p>
									</li>
								</ul>



								<h5 style={{ color: '#0b1972' }}>Step 3: Select Payment Mode</h5>
								<br />
								<p>Choose from:</p>
								<br />
								<ul className="benefit-list style-2">
									<li>
										<div className="icon">
											<i className="icon-check" />
										</div>
										<p>Net Banking</p>
									</li>

									<li>
										<div className="icon">
											<i className="icon-check" />
										</div>
										<p>NEFT/RTGS</p>
									</li>

									<li>
										<div className="icon">
											<i className="icon-check" />
										</div>
										<p>Over-the-counter (for limited taxpayers)</p>
									</li>

									<li>
										<div className="icon">
											<i className="icon-check" />
										</div>
										<p>UPI (for select banks)</p>
									</li>
								</ul>




								<h5 style={{ color: '#0b1972' }}>Step 4: Generate Challan</h5>
								<br />
								<p>A CPIN (Common Portal Identification Number) is generated.</p>
								<br />

								<h5 style={{ color: '#0b1972' }}>Step 5: Make the Payment</h5>
								<br />
								<p>Pay using your selected mode within 15 days, after which CPIN expires</p>
								<br />

								<br />
								<h5 style={{ color: '#0b1972' }}>Step 6: Amount Reflects in Cash Ledger</h5>
								<br />
								<p>
									Once payment is successful, the paid amount appears under:
								</p>
								<br />
								<p> Services → Ledgers → Electronic Cash Ledger</p>
								<br />

								<h5 style={{ color: '#0b1972' }}>Step 7: Offset Liability in GSTR-3B</h5>
								<br />
								<p>
									Go to Return Filing → GSTR-3B → Payment of Tax and utilise cash ledger balance.
								</p>



								<h3 style={{ marginTop: "40px", color: '#0b1972' }}>Late Payment Interest Rules</h3>
								<br />
								<p> Interest is payable under:</p>
								<br />
								<ul className="benefit-list style-2">
									<li>
										<div className="icon">
											<i className="icon-check" />
										</div>
										<p>18% p.a. – for delayed payment of output tax</p>
									</li>

									<li>
										<div className="icon">
											<i className="icon-check" />
										</div>
										<p>24% p.a. – for wrong ITC utilisation</p>
									</li>
								</ul>
								<p> Interest is computed daily based on outstanding tax.</p>

								<h3 style={{ marginTop: "40px", color: '#0b1972' }}>Correction of Wrong Challans</h3>
								<br />
								<p>Mistakes in challans cannot be edited once paid.</p>
								<br />
								<p> However, the following can be done:</p>
								<br />
								<br />
								<h6 style={{ color: '#0b1972' }}>✔ If tax paid under wrong head:</h6>
								<br />
								<p>Use Form PMT-09 to shift amounts within cash ledger (e.g., CGST → IGST).</p>
								<br />
								<h6 style={{ color: '#0b1972' }}>✔ If excess amount paid:</h6>
								<br />
								<p>Use the refund application RFD-01 under category “Excess Balance in Cash Ledger”</p>
								<br />
								<h6 style={{ color: '#0b1972' }}>✔ If CPIN generated but not paid:</h6>
								<br />
								<p>Simply let it expire—no action needed.</p>







								<h3 style={{ marginTop: "40px", color: '#0b1972' }}>Tips for Smooth GST Payments</h3>
								<br />

								<ul className="benefit-list style-2">
									<li>
										<div className="icon">
											<i className="icon-check" />
										</div>
										<p>Always match liability before generating challan</p>
									</li>

									<li>
										<div className="icon">
											<i className="icon-check" />
										</div>
										<p>Avoid last-minute payments to prevent CPIN failures</p>
									</li>

									<li>
										<div className="icon">
											<i className="icon-check" />
										</div>
										<p>Verify tax head selection carefully</p>
									</li>

									<li>
										<div className="icon">
											<i className="icon-check" />
										</div>
										<p>Reconcile cash ledger monthly</p>
									</li>

									<li>
										<div className="icon">
											<i className="icon-check" />
										</div>
										<p>Maintain challan copies for audit purposes</p>
									</li>
								</ul>


								<h3 style={{ color: '#0b1972' }}>Conclusion</h3>
								<br />
								<p>Form PMT-06 is a crucial tool for GST compliance, enabling taxpayers to deposit taxes, interest, and
									penalties accurately. Understanding how to generate and use the challan ensures timely payment,
									avoids errors, and helps maintain smooth compliance under GST.
									<br />
									Bisways Consulting Group provides expert assistance for GST payments, return filing, ledger
									reconciliation, interest calculation, and complete GST compliance support.</p>

								<br />
								<br /><span className="line" />
								<div className="bot mb-70">
									<div className="tags">
										<h6>
											Tags :
										</h6>
										<Link href="" >
											PMT-06 | GST Payment | Interest | Challan Correction</Link>
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
							Need help with GST challan payments or correcting wrong
							entries?
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
							Connect with Bisways Consulting Group — your trusted partner for GST Payments, Return Filing,
							and Compliance Advisory
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
