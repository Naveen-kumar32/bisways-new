
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
									Under GST, exporters and businesses engaged in zero-rated supplies can claim refunds for
									unutilised Input Tax Credit (ITC), excess tax payments, and accumulated credit due to inverted duty
									structures. Since exports are either zero-rated with payment of IGST or without payment of IGST
									under LUT, the GST framework ensures that taxes do not become a cost for exporters.
								</p>
								<p className="text mb-20">
									This guide by Bisways Consulting Group explains the different types of GST refunds, eligible
									scenarios, the filing process, required documents, and common issues faced during refund claims.
								</p>



								<h3 style={{ marginTop: "40px", color: '#0b1972' }}>Types of GST Refunds Eligible for Exporters and Businesses</h3>
								<br />
								<h5 style={{ color: '#0b1972' }}>1. Refund of Unutilised ITC on Zero-Rated Supplies (LUT Route)</h5>
								<br />
								<p>
									Applicable when exporters supply goods/services without payment of IGST under a Letter of
									Undertaking (LUT).
									<br />
									ITC accumulated can be claimed as a refund.
								</p>
								<br />
								<h5 style={{ color: '#0b1972' }}>2. Refund of IGST Paid on Export of Goods/Services</h5>
								<br />
								<p>
									Businesses exporting with payment of IGST can claim a refund after validation by Customs and
									GSTN.
									<br />

								</p>
								<br />
								<h5 style={{ color: '#0b1972' }}>3. Refund under Inverted Duty Structure</h5>
								<br />
								<p>
									Occurs when the GST rate on inputs is higher than the GST rate on output supplies.
									Eligible sectors can claim the accumulated ITC.
								</p>
								<br />
								<h5 style={{ color: '#0b1972' }}>4. Refund of Excess Tax Paid</h5>
								<br />
								<p>
									When tax is paid incorrectly due to wrong classification, deposition under wrong head, or clerical
									mistakes.
								</p>
								<br />
								<h5 style={{ color: '#0b1972' }}>5. Refund for Deemed Exports</h5>
								<br />
								<p>
									Supplies categorised as “deemed exports” can also claim refunds subject to conditions.
								</p>



								<h3 style={{ marginTop: "40px", color: '#0b1972' }}>Who Can Apply for GST Refund?</h3>
								<br />
								<ul className="benefit-list style-2">
									<li>
										<div className="icon">
											<i className="icon-check" />
										</div>
										<p>Manufacturers exporting goods</p>
									</li>

									<li>
										<div className="icon">
											<i className="icon-check" />
										</div>
										<p>Service exporters</p>
									</li>

									<li>
										<div className="icon">
											<i className="icon-check" />
										</div>
										<p>Merchant exporters</p>
									</li>

									<li>
										<div className="icon">
											<i className="icon-check" />
										</div>
										<p>Suppliers with inverted duty</p>
									</li>

									<li>
										<div className="icon">
											<i className="icon-check" />
										</div>
										<p>SEZ units and developers</p>
									</li>

									<li>
										<div className="icon">
											<i className="icon-check" />
										</div>
										<p>Dealers with excess ITC</p>
									</li>

									<li>
										<div className="icon">
											<i className="icon-check" />
										</div>
										<p>Businesses with excess cash ledger balance</p>
									</li>
								</ul>


								<h3 style={{ marginTop: "40px", color: '#0b1972' }}>Documents Required for GST Refund</h3>
								<br />
								<h5 style={{ color: '#0b1972' }}>For Export with IGST Payment</h5>
								<br />
								<ul className="benefit-list style-2">
									<li>
										<div className="icon">
											<i className="icon-check" />
										</div>
										<p>Shipping bill</p>
									</li>

									<li>
										<div className="icon">
											<i className="icon-check" />
										</div>
										<p>Export General Manifest (EGM)</p>
									</li>

									<li>
										<div className="icon">
											<i className="icon-check" />
										</div>
										<p>Invoice copy</p>
									</li>

									<li>
										<div className="icon">
											<i className="icon-check" />
										</div>
										<p>FIRC/BRC (for services)</p>
									</li>
								</ul>

								<h5 style={{ color: '#0b1972' }}>For LUT Route (Export Without IGST)</h5>
								<br />
								<ul className="benefit-list style-2">
									<li>
										<div className="icon">
											<i className="icon-check" />
										</div>
										<p>LUT acknowledgement</p>
									</li>

									<li>
										<div className="icon">
											<i className="icon-check" />
										</div>
										<p>Statement of invoices</p>
									</li>

									<li>
										<div className="icon">
											<i className="icon-check" />
										</div>
										<p>ITC ledger details</p>
									</li>

									<li>
										<div className="icon">
											<i className="icon-check" />
										</div>
										<p>Export documentation</p>
									</li>
								</ul>

								<h5 style={{ color: '#0b1972' }}>For Inverted Duty Structure</h5>
								<br />
								<ul className="benefit-list style-2">
									<li>
										<div className="icon">
											<i className="icon-check" />
										</div>
										<p>Purchase invoices</p>
									</li>

									<li>
										<div className="icon">
											<i className="icon-check" />
										</div>
										<p>GST returns (GSTR-1, GSTR-3B)</p>
									</li>

									<li>
										<div className="icon">
											<i className="icon-check" />
										</div>
										<p>Annexure A / Statement 1</p>
									</li>

									<li>
										<div className="icon">
											<i className="icon-check" />
										</div>
										<p>Stock statements</p>
									</li>
								</ul>


								<h5 style={{ color: '#0b1972' }}>For Excess Tax Payment</h5>
								<br />
								<ul className="benefit-list style-2">
									<li>
										<div className="icon">
											<i className="icon-check" />
										</div>
										<p>Proof of payment</p>
									</li>

									<li>
										<div className="icon">
											<i className="icon-check" />
										</div>
										<p>Clarification letter</p>
									</li>

									<li>
										<div className="icon">
											<i className="icon-check" />
										</div>
										<p>Supporting invoices</p>
									</li>
								</ul>



								<h3 style={{ marginTop: "40px", color: '#0b1972' }}> How to File GST Refund – Step-by-Step Process</h3>
								<br />
								<h5 style={{ color: '#0b1972' }}>Step 1: Log in to GST Portal</h5>
								<br />
								<p> Go to Services → Refunds → Application for Refund.</p>
								<br />
								<h5 style={{ color: '#0b1972' }}>Step 2: Select Refund Category</h5>
								<br />
								<p>Choose from:</p>
								<br />
								<ul className="benefit-list style-2">
									<li>
										<div className="icon">
											<i className="icon-check" />
										</div>
										<p>Refund of unutilised ITC</p>
									</li>

									<li>
										<div className="icon">
											<i className="icon-check" />
										</div>
										<p>Refund of IGST paid</p>
									</li>

									<li>
										<div className="icon">
											<i className="icon-check" />
										</div>
										<p>Refund due to inverted duty</p>
									</li>

									<li>
										<div className="icon">
											<i className="icon-check" />
										</div>
										<p>Excess tax paid</p>
									</li>
								</ul>


								<h5 style={{ color: '#0b1972' }}>Step 3: Upload Required Statements</h5>
								<br />
								<p>Statements differ depending on refund type:</p>
								<br />
								<ul className="benefit-list style-2">
									<li>
										<div className="icon">
											<i className="icon-check" />
										</div>
										<p>RFD-01 is the main application form</p>
									</li>

									<li>
										<div className="icon">
											<i className="icon-check" />
										</div>
										<p>Statement 2/3/4/5 based on the refund category</p>
									</li>
								</ul>


								<br />
								<h5 style={{ color: '#0b1972' }}>Step 4: Attach Supporting Documents</h5>
								<br />
								<p>Upload invoice statements, LUT, declarations, and CA certificates where required.</p>

								<br />
								<h5 style={{ color: '#0b1972' }}>Step 5: Submit Application with DSC/EVC</h5>
								<br />
								<h5 style={{ color: '#0b1972' }}>Step 6: Acknowledgement & ARN Generated</h5>
								<br />
								<h5 style={{ color: '#0b1972' }}>Step 7: Refund Processing</h5>
								<br />
								<p>Officers verify documents and may request clarifications (RFD-03).</p>
								<br />
								<h5 style={{ color: '#0b1972' }}>Step 8: Refund Order Passed</h5>
								<br />
								<p> Refund sanctioned through:</p>
								<br />
								<ul className="benefit-list style-2">
									<li>
										<div className="icon">
											<i className="icon-check" />
										</div>
										<p>RFD-06 – Refund order</p>
									</li>

									<li>
										<div className="icon">
											<i className="icon-check" />
										</div>
										<p>PMT-03 – Re-credit order (if required)</p>
									</li>
								</ul>
								<h5 style={{ color: '#0b1972' }}>Step 9: Amount Credited</h5>
								<br />
								<p>Refund is credited to the bank account validated with GST portal.</p>


								<h3 style={{ marginTop: "40px", color: '#0b1972' }}>Timelines for GST Refund</h3>
								<br />

								<ul className="benefit-list style-2">
									<li>
										<div className="icon">
											<i className="icon-check" />
										</div>
										<p>Application must be filed within 2 years from relevant date</p>
									</li>

									<li>
										<div className="icon">
											<i className="icon-check" />
										</div>
										<p>Refunds typically processed within 60 days</p>
									</li>

									<li>
										<div className="icon">
											<i className="icon-check" />
										</div>
										<p>Delay beyond 60 days may attract interest under Section 56</p>
									</li>
								</ul>


								<h3 style={{ marginTop: "40px", color: '#0b1972' }}>Common Mistakes That Delay Refunds</h3>
								<br />

								<ul className="benefit-list style-2">
									<li>
										<div className="icon">
											<i className="icon-check" />
										</div>
										<p>Mismatch between GSTR-1 and GSTR-3B</p>
									</li>

									<li>
										<div className="icon">
											<i className="icon-check" />
										</div>
										<p>Incorrect HSN/SAC codes</p>
									</li>

									<li>
										<div className="icon">
											<i className="icon-check" />
										</div>
										<p>Non-availability of LUT</p>
									</li>

									<li>
										<div className="icon">
											<i className="icon-check" />
										</div>
										<p>Incomplete shipping bill details</p>
									</li>

									<li>
										<div className="icon">
											<i className="icon-check" />
										</div>
										<p>Wrong claim category selection</p>
									</li>

									<li>
										<div className="icon">
											<i className="icon-check" />
										</div>
										<p>Ineligible input tax credit</p>
									</li>

									<li>
										<div className="icon">
											<i className="icon-check" />
										</div>
										<p>Bank account not validated on the portal</p>
									</li>
								</ul>



								<h3 style={{ marginTop: "40px", color: '#0b1972' }}>Best Practices for Smooth GST Refund Processing</h3>
								<br />

								<ul className="benefit-list style-2">
									<li>
										<div className="icon">
											<i className="icon-check" />
										</div>
										<p>Maintain Invoice–Shipping Bill–GSTR data consistency</p>
									</li>

									<li>
										<div className="icon">
											<i className="icon-check" />
										</div>
										<p>File GST returns on time</p>
									</li>

									<li>
										<div className="icon">
											<i className="icon-check" />
										</div>
										<p>Reconcile data every month</p>
									</li>

									<li>
										<div className="icon">
											<i className="icon-check" />
										</div>
										<p>Use correct refund category</p>
									</li>

									<li>
										<div className="icon">
											<i className="icon-check" />
										</div>
										<p>Respond promptly to officer queries</p>
									</li>

									<li>
										<div className="icon">
											<i className="icon-check" />
										</div>
										<p>Keep complete export and purchase records</p>
									</li>
								</ul>


								<h3 style={{ color: '#0b1972' }}>Conclusion</h3>
								<br />
								<p> GST refunds ensure that exporters and businesses engaged in zero-rated supplies are not
									burdened by taxes that should not be part of their cost. By understanding refund categories,
									documentation needs, and filing procedures, businesses can claim refunds efficiently and avoid
									delays.
									<br />
									Bisways Consulting Group assists exporters and businesses with GST refund filing, ITC
									reconciliation, documentation support, and error-free compliance across all refund categories.</p>

								<br />
								<br /><span className="line" />
								<div className="bot mb-70">
									<div className="tags">
										<h6>
											Tags :
										</h6>
										<Link href="" >
											GST Refund | Export | Input Tax Credit | Inverted Duty</Link>
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
							Need help filing GST refunds for exports or ITC
							accumulation?
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
							Connect with Bisways Consulting Group — your trusted partner for GST Refunds, Export
							Compliance, and Input Tax Credit Advisory.
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
