
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
									Businesses regularly make payments to contractors, consultants, freelancers, and professionals.
									These payments attract Tax Deduction at Source (TDS) under two important sections of the
									Income Tax Act — Section 194C and Section 194J.
								</p>
								<br />
								<p className="text mt-3 mb-20">
									While both sections deal with TDS on payments for services, they apply to different types of
									services, and the rates, thresholds, and rules vary significantly.
								</p>
								<br/>
								<p className="text mb-20">
									This guide provides complete clarity on the differences, applicability, rates, and compliance
									requirements under Sections 194C and 194J.
								</p>
								<br/>

								<h3 style={{ marginTop: "40px", color: '#0b1972' }}>What Is Section 194C? (TDS on Contractor Payments)</h3>
								<br />
								<p className="text ">
									Section 194C applies to payments made to contractors and sub-contractors for carrying out work contracts.
								</p>
								<br/>
								<h6 style={{ color: '#0b1972' }}> ✔ Examples of Payments Covered:</h6>

								<ul className="benefit-list style-2">
									<li>
										<div className="icon">
											<i className="icon-check" />
										</div>
										<p>
											Labour contracts
										</p>
									</li>
									<li>
										<div className="icon">
											<i className="icon-check" />
										</div>
										<p>
											Transport contracts (when vehicle owner does not provide PAN, TDS applies)
										</p>
									</li>
										<li>
										<div className="icon">
											<i className="icon-check" />
										</div>
										<p>
											Housekeeping services
										</p>
									</li>
										<li>
										<div className="icon">
											<i className="icon-check" />
										</div>
										<p>
											Advertising agencies (execution part)
										</p>
									</li>
									<li>
										<div className="icon">
											<i className="icon-check" />
										</div>
										<p>
											Packaging, loading/unloading
										</p>
									</li>
									<li>
										<div className="icon">
											<i className="icon-check" />
										</div>
										<p>
											Manufacturing on job-work basis
										</p>
									</li>
									<li>
										<div className="icon">
											<i className="icon-check" />
										</div>
										<p>
											Catering services
										</p>
									</li>
								</ul>
								<h6 style={{ color: '#0b1972' }}> ✔ TDS Rates under 194C:</h6>
								
								{/* <h3 style={{ marginTop: "40px", color: '#0b1972' }}>Rate of TDS Under Section 194-IA</h3> */}
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
													Payee   
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
												["Individual / HUF ", "1%",],
												["Others(Company/Firm) ", "1%",],

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

								<h6 style={{ color: '#0b1972' }}> ✔ Threshold Limits:</h6>
								<ul className="benefit-list style-2">
									<li>
										<div className="icon">
											<i className="icon-check" />
										</div>
										<p>
										 No TDS if a single payment ≤ ₹30,000
										</p>
									</li>
									<li>
										<div className="icon">
											<i className="icon-check" />
										</div>
										<p>
										 No TDS if total annual payments ≤ ₹1,00,000
										</p>
									</li>
								</ul>


								<h3 style={{ marginTop: "40px", color: '#0b1972' }}>What Is Section 194J? (TDS on Professional Fees & Technical Services)</h3>
								<br />
								<p>Section 194J applies to payments for professional or technical services.</p>
								<h6 style={{ color: '#0b1972' }}>✔ Examples of Payments Covered:</h6>
								<br />
								<ul className="benefit-list style-2">
									<li>
										<div className="icon">
											<i className="icon-check" />
										</div>
										<p>
										 Legal, medical, architectural, engineering services
										</p>
									</li>
									<li>
										<div className="icon">
											<i className="icon-check" />
										</div>
										<p>
										 Chartered Accountant or Company Secretary fees
										</p>
									</li>
									<li>
										<div className="icon">
											<i className="icon-check" />
										</div>
										<p>
										 IT consulting & technical services
										</p>
									</li>
									<li>
										<div className="icon">
											<i className="icon-check" />
										</div>
										<p>
										 Professional consultancy
										</p>
									</li>
									<li>
										<div className="icon">
											<i className="icon-check" />
										</div>
										<p>
										 Advertising (creative or advisory component)
										</p>
									</li>
									<li>
										<div className="icon">
											<i className="icon-check" />
										</div>
										<p>
										 Royalty payments
										</p>
									</li>
									<li>
										<div className="icon">
											<i className="icon-check" />
										</div>
										<p>
										 Director sitting fees
										</p>
									</li>
								</ul>
								<h6 style={{ color: '#0b1972' }}>✔ TDS Rates under 194J:</h6>
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
													Nature of Payment  
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
												["Professional services ", "10%",],
												["Royalty or technical services ", "2% (reduced category)",],
												["Director remuneration (other than salary) ", "10%",],

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
								
								<h6 style={{ color: '#0b1972' }}>✔ Threshold Limits</h6>
								<br />
								
								<ul className="benefit-list style-2">
									<li>
										<div className="icon">
											<i className="icon-check" />
										</div>
										<p>
										 No TDS if total payment ≤ ₹30,000 per financial year per payee
										</p>
									</li>
								</ul>
								
{/* ================================================================================================================================= */}
						{/* <h3 style={{ marginTop: "40px", color: '#0b1972' }}>Penalties and Interest for Non-Compliance</h3> */}
								{/* <br /> */}
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
													Particular 
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
													Section 194C 
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
													Section 194J
												</th>
											</tr>
										</thead>

										<tbody>
											{[
												["Type of payment ", "Contract work","Professional/technical services"],
												["Examples", "Labour, job work, transport,housekeeping","CA fees, legal fees,consultancy, engineering"],
												["TDS Rates ", "1% or 2%","2% or 10%"],
												["Thresholds ", "₹30,000 per invoice,₹1,00,000 per year","₹30,000 per year"],
												["Nature of service", "₹Execution-based","Skill/expertise based"],
												["GST Applicability","TDS applies on value excluding GST","TDS applies on value excluding GST"]

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
															padding: "14px 25px",
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
															padding: "14px 25px",
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


{/* ===================================================================================================================================================== */}
								<h3 style={{ color: '#0b1972' }}>How to Determine Whether a Payment Falls Under 194C or 194J</h3>
								<br />
								<h6 style={{ color: '#0b1972' }}>✔ Apply 194C when:</h6>
									<br />
									<ul className="benefit-list style-2">
									<br />
									<li>
										<div className="icon">
												<i className="icon-check" />
											</div>
										<p>
											Service is labour-intensive.
										</p>
									</li>
									<li>
										<div className="icon">
												<i className="icon-check" />
											</div>
										<p>
											The contract involves execution of work.
										</p>
									</li>
									<li>
										<div className="icon">
												<i className="icon-check" />
											</div>
										<p>
											No specialised professional skill is required
										</p>
									</li>
									</ul>

								<h6 style={{ color: '#0b1972' }}>✔ Apply 194J when:</h6>
									<br />
									<ul className="benefit-list style-2">
									<br />
									<li>
										<div className="icon">
												<i className="icon-check" />
											</div>
										<p>
											The service requires professional or technical expertise
										</p>
									</li>
									<li>
										<div className="icon">
												<i className="icon-check" />
											</div>
										<p>
											The provider is a consultant, professional, or subject expert.
										</p>
									</li>
									<li>
										<div className="icon">
												<i className="icon-check" />
											</div>
										<p>
											Advisory or intellectual services are involved
										</p>
									</li>
									</ul>

								<h3 style={{ color: '#0b1972' }}>Consequences of Non-Compliance</h3>
								<br />
								<p>Failure to deduct or deposit TDS leads to:</p>

								<ul className="benefit-list style-2">
									<br />
									<li>
										<div className="icon">
												<i className="icon-check" />
											</div>
										<p>
											Interest @ 1% – 1.5% per month

										</p>
									</li>
									<li>
										<div className="icon">
												<i className="icon-check" />
											</div>
										<p>
											Penalty equal to the amount of TDS
										</p>
										</li>
									<li>
										<div className="icon">
												<i className="icon-check" />
											</div>
										<p>
											Disallowance of 30% of the expense under Section 40(a)(ia)
										</p>
										</li>
									<li>
										<div className="icon">
												<i className="icon-check" />
											</div>
										<p>
											Notices under Section 201
										</p>
										</li>
										<p>Proper classification between 194C and 194J is crucial to avoid scrutiny.</p>
									</ul>
								<br/>

								<h3 style={{ color: '#0b1972' }}>Practical Examples</h3>
								<br />
								<h6 style={{ color: '#0b1972' }}>Example 1 – Digital Marketing Agency</h6>
									<br />
									<ul className="benefit-list style-2">
									<br />
									<li>
										<div className="icon">
												<i className="icon-check" />
											</div>
										<p>
											Creative design → 194J
										</p>
									</li>
									<li>
										<div className="icon">
												<i className="icon-check" />
											</div>
										<p>
											Posting, scheduling, and execution → 194C
										</p>
									</li>
									</ul>

								<h6 style={{ color: '#0b1972' }}>Example 2 – Interior Designer</h6>
									<br />
									<ul className="benefit-list style-2">
									<br />
									<li>
										<div className="icon">
												<i className="icon-check" />
											</div>
										<p>
											Design consultancy → 194J
										</p>
									</li>
									<li>
										<div className="icon">
												<i className="icon-check" />
											</div>
										<p>
											Labour work and installation → 194C
										</p>
									</li>
									</ul>

								<h6 style={{ color: '#0b1972' }}>Example 3 – Software Company</h6>
									<br />
									<ul className="benefit-list style-2">
									<br />
									<li>
										<div className="icon">
												<i className="icon-check" />
											</div>
										<p>
											Developer on contract (skill-based) → 194J
										</p>
									</li>
									<li>
										<div className="icon">
												<i className="icon-check" />
											</div>
										<p>
											Data entry/back-office work → 194C
										</p>
									</li>
									</ul>
								

								<h3 style={{ color: '#0b1972' }}>Conclusion</h3>
								<br />
								<p> While both Section 194C and Section 194J govern TDS on service payments,
									understanding the difference is essential for correct compliance, avoiding penalties, and
									ensuring proper classification of expenses.</p>
                                <br />
                                <p>Businesses should analyse the nature of the service and the level of expertise involved before determining which section applies.</p>
                                <br/>
                                <p>Bisways Consulting Group helps businesses with TDS classification, deduction, deposit,
									return filing (Form 26Q), and complete income-tax compliance.
								</p>
        

								<br /><span className="line" />
								<div className="bot mb-70">
									<div className="tags">
										<h6>
											Tags :
										</h6>
										<Link href="" > TDS | Section 194C | Section 194J | Professional Fees</Link>
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
							Need help determining whether a payment falls under Section 194C or 194J?
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
							Connect with Bisways Consulting Group — your trusted partner for TDS
							Compliance and Tax Advisory.
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
