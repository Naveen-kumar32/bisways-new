
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
									A brilliant idea and an energetic team can launch a startup — but without a clear Founders’
									Agreement, even the strongest partnerships can fall apart.
								</p>
								<p className="text mb-20">
									This legal document defines each founder’s rights, roles, responsibilities, and ownership,
									protecting the business from internal disputes and future complications.

								</p>
								<p className="text mb-35">
									In this blog, Bisways Consulting Group explains how to structure a founders’ agreement, key
									clauses every startup must include, and common mistakes to avoid while drafting it.
								</p>
								<br />
								<br />
								<h3 style={{ color: '#0b1972' }}>What Is a Founders’ Agreement and Why It Matters</h3>
								<p className="text mt-3 mb-20">
									A Founders’ Agreement is a legally binding document that outlines the understanding between co
									founders of a company.
								</p>
								<p className="text mb-20">
									It helps maintain transparency on decision-making, equity ownership, profit-sharing, and exit rights.

								</p>
								<p className="text mb-35">
									Think of it as the constitution of your startup — it ensures that when disagreements arise, the
									company still runs smoothly and relationships remain professional.
								</p>


								<h3 style={{ marginTop: "40px", color: '#0b1972' }}>Essential Clauses Every Agreement Should Include</h3>
								<br />
								<h6 style={{ color: '#0b1972' }}> Here’s what every startup should address clearly in its founders’ agreement:</h6>


								<br />

								<br />
								<h6 style={{ color: '#0b1972' }}>   a. Shareholding & Capital Contribution</h6>
								<br />
								<ul className="benefit-list style-2">
									<li>
										<div className="icon">
											<i className="icon-check" />
										</div>
										<p>
											Specify how much equity each founder holds and how future funding rounds will dilute shares.
										</p>
									</li>
									<li>
										<div className="icon">
											<i className="icon-check" />
										</div>
										<p>
											Clarify whether contributions are in cash, kind, or intellectual property (IP).
										</p>
									</li>
								</ul>
								<h6 style={{ color: '#0b1972' }}>  b. Roles & Responsibilities</h6>
								<br />
								<ul className="benefit-list style-2">
									<li>
										<div className="icon">
											<i className="icon-check" />
										</div>
										<p>
											Define who handles finance, operations, marketing, tech, or legal compliance.
										</p>
									</li>
									<li>
										<div className="icon">
											<i className="icon-check" />
										</div>
										<p>
											Avoid overlapping duties to maintain accountability.
										</p>
									</li>
								</ul>
								<h6 style={{ color: '#0b1972' }}>  c. Decision-Making and Voting Rights</h6>
								<br />
								<ul className="benefit-list style-2">
									<li>
										<div className="icon">
											<i className="icon-check" />
										</div>
										<p>
											Mention how major decisions (funding, hiring, expansion, dissolution) are approved — by
											majority vote, unanimous consent, or board approval.
										</p>
									</li>

								</ul>
								<h6 style={{ color: '#0b1972' }}>   d. Vesting Schedule</h6>
								<br />
								<ul className="benefit-list style-2">
									<li>
										<div className="icon">
											<i className="icon-check" />
										</div>
										<p>
											Introduce vesting to ensure founders earn their shares over time, protecting the company if
											someone leaves early.
											<br />
											| Example: 4-year vesting with 1-year cliff.
										</p>
									</li>

								</ul>
								<h6 style={{ color: '#0b1972' }}>   e. Exit & Termination Clauses</h6>
								<br />
								<ul className="benefit-list style-2">
									<li>
										<div className="icon">
											<i className="icon-check" />
										</div>
										<p>
											Lay down terms for voluntary exit, removal, or transfer of shares.
										</p>
									</li>
									<li>
										<div className="icon">
											<i className="icon-check" />
										</div>
										<p>
											Include non-compete and non-solicitation provisions to protect company interests.
										</p>
									</li>
								</ul>
								<h6 style={{ color: '#0b1972' }}> f. Intellectual Property (IP) Ownership</h6>
								<br />
								<ul className="benefit-list style-2">
									<li>
										<div className="icon">
											<i className="icon-check" />
										</div>
										<p>
											Clearly state that all inventions, products, designs, or content developed under the business
											belong to the company, not the individual founder.
										</p>
									</li>

								</ul>
								<h6 style={{ color: '#0b1972' }}>   g. Confidentiality</h6>
								<br />
								<ul className="benefit-list style-2">
									<li>
										<div className="icon">
											<i className="icon-check" />
										</div>
										<p>
											Every founder must agree to maintain confidentiality of trade secrets, financial data, and
											strategy.
										</p>
									</li>

								</ul>
								<p>
									These forms must be digitally signed using a valid Director’s DSC and certified by a practising
									professional (CA / CS / CMA).
								</p>


								<h3 style={{ marginTop: "40px", color: '#0b1972' }}> Legal Framework & Registration Options</h3>
								<br />

								<ul className="benefit-list style-2">
									<li>
										<div className="icon">
											<i className="icon-check" />
										</div>
										<p>
											Though not mandatory, the agreement should be printed on non-judicial stamp paper and
											notarised for legal validity.
										</p>
									</li>
									<li>
										<div className="icon">
											<i className="icon-check" />
										</div>
										<p>
											If the startup is already incorporated, the clauses must align with the Articles of Association
											and the Companies Act, 2013.
										</p>
									</li>
									<li>
										<div className="icon">
											<i className="icon-check" />
										</div>
										<p>
											Many investors now insist that the founders’ agreement be drafted before seed funding or due
											diligence begins.
										</p>
									</li>
									<li>
										<div className="icon">
											<i className="icon-check" />
										</div>
										<p>
											Re-assessment risk if undeclared income appears in AIS/TIS.
										</p>
									</li>
								</ul>






								<h3 style={{ marginTop: "40px", color: '#0b1972' }}>When and How to Draft</h3>

								<br />
								<p>Ideally, the founders’ agreement should be signed before incorporation or immediately afterward.
									It’s best drafted with help from a legal or corporate advisory firm to ensure compliance with startup
									laws, FDI norms, and company law regulations.</p>
								<p>💡 Tip: Use a transparent, founder-friendly tone — not overly legalistic — so all parties understand
									the intent and implications clearly.
								</p>






								<h3 style={{ marginTop: "40px", color: '#0b1972' }}>Benefits of a Well-Structured Agreement</h3>
								<br />


								<ul className="benefit-list style-2">
									<li>
										<div className="icon">
											<i className="icon-check" />
										</div>
										<p>
											Prevents disputes by setting clear expectations.

										</p>
									</li>
									<li>
										<div className="icon">
											<i className="icon-check" />
										</div>
										<p>
											Builds investor confidence during due diligence.
										</p>
									</li>
									<li>
										<div className="icon">
											<i className="icon-check" />
										</div>
										<p>
											Protects the company’s IP and confidential information.
										</p>
									</li>
									<li>
										<div className="icon">
											<i className="icon-check" />
										</div>
										<p>
											Provides a defined exit roadmap for founders.
										</p>
									</li>
									<li>
										<div className="icon">
											<i className="icon-check" />
										</div>
										<p>
											Ensures smooth transitions during leadership changes.
										</p>
									</li>
								</ul>

								<br />
								<h3 style={{ color: '#0b1972' }}>Conclusion</h3>
								<br />
								<p>  A founders’ agreement isn’t just a legal formality — it’s a foundation for trust and long-term
									business harmony.
									<br />
									By clearly defining rights, roles, and responsibilities, startups can focus on innovation and growth
									without fear of future misunderstandings.</p>

								<br />
								<br /><span className="line" />
								<div className="bot mb-70">
									<div className="tags">
										<h6>
											Tags :
										</h6>
										<Link href="" >
											Founders Agreement | Legal Drafting | Startup Governance</Link>
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
							Need help drafting or reviewing your Founders’ Agreement?
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
							Connect with Bisways Consulting Group — your trusted partner for Startup
							Incorporation, Legal Documentation, and Corporate Advisory Services.
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
