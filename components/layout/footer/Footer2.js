'use client'
import Image from "next/image"
import Link from 'next/link'
import { useEffect, useState } from 'react'
import '@fortawesome/fontawesome-free/css/all.min.css'


export default function Footer2() {
	const [isAccordion1, setIsAccordion1] = useState(0)
	const [isAccordion2, setIsAccordion2] = useState(0)
	const [isAccordion3, setIsAccordion3] = useState(0)
	const [isDesktop, setIsDesktop] = useState(false)

	useEffect(() => {
		const handleResize = () => {
			setIsDesktop(window.innerWidth >= 768)
		}

		handleResize() // Run on initial load
		window.addEventListener('resize', handleResize)
		return () => window.removeEventListener('resize', handleResize)
	}, [])

	const handleAccordion1 = (key) => {
		if (!isDesktop) {
			setIsAccordion1((prev) => (prev === key ? null : key))
		}
	}
	const handleAccordion2 = (key) => {
		if (!isDesktop) {
			setIsAccordion2((prev) => (prev === key ? null : key))
		}
	}
	const handleAccordion3 = (key) => {
		if (!isDesktop) {
			setIsAccordion3((prev) => (prev === key ? null : key))
		}
	}

	const getDisplayStyle1 = (key) => {
		return isDesktop ? 'block' : isAccordion1 === key ? 'block' : 'none'
	}
	const getDisplayStyle2 = (key) => {
		return isDesktop ? 'block' : isAccordion2 === key ? 'block' : 'none'
	}
	const getDisplayStyle3 = (key) => {
		return isDesktop ? 'block' : isAccordion3 === key ? 'block' : 'none'
	}
	return (
		<>

			<footer className="tf-footer style-3" style={{ borderRadius: "20px 20px 0px 0px" }}>
				<div className="tf-container">
					<div className="row">
						<div className="col-lg-12">
							<div className="footer-inner">
								<div className="footer-inner-wrap">
									<div className="logo-site">
										<Link href="/">
											<Image
												width="304"
												height="60"
												sizes="100vw"
												style={{ width: "304px", height: "60px",paddingRight:"70px" }}
												id="logo_header" src="/images/section/footer-logo-1.svg" data-retina="./images/section/footer-logo.png" alt="" />

										</Link>
									</div>
									<p className="text mb-70" style={{top:"-15px",marginLeft:"15px",fontSize:"14px"}}>
										Your trusted partner in<br />
										financial growth and
										
										<br /> compliance excellence.													
									</p>
									<ul className="social-list" style={{marginLeft:"15px"}}>
										<li>
											<Link href="https://www.facebook.com/profile.php?id=100081860504520">
												<i className="icon-facebook" />
											</Link>
										</li>
										<li>
											<Link href="https://x.com/BiswaysG">
												<i className="icon-twitter" />
											</Link>
										</li>
										<li>
											<Link href="https://www.instagram.com/biswaysconsultinggroup/">
												<i className="fab fa-instagram"style={{size:"42px"}} />
											</Link>
										</li>
										<li>
											<Link href="https://www.youtube.com/channel/UCU7bc30DWlFt-stqjuUCGWA">
												<i className="icon-youtube" />
											</Link>
										</li>
									</ul>
								</div>
								<div className={`footer-inner-wrap footer-col-block ${isAccordion3 === 1 ? 'open' : ''}`}>
									<h5 className="footer-title footer-title-desktop">Services</h5>
									<h5 className="footer-title footer-title-mobile" onClick={() => handleAccordion3(1)}>Services</h5>
									<ul className="list tf-collapse-content" style={{ display: getDisplayStyle3(1) }}>
										
										<li>
											<Link href="/service-details">Virtual CFO Services</Link>
										</li>
										<li>
											<Link href="/service-details">Business Registration & Startup Setup</Link>
										</li>
										<li>
											<Link href="/service-details">GST, Taxation & Audit Support</Link>
										</li>
										<li>
											<Link href="/service-details">ROC, MCA & Compliance Filings</Link>
										</li>
										<li>
											<Link href="/service-details">Trust, NGO & CSR Consulting</Link>
										</li>
										<li>
											<Link href="/service-details">Business Structuring & Advisory</Link>
										</li>
										<li>
											<Link href="/service-details">Digital, API & eCommerce Consulting</Link>
										</li>
										<li>
											<Link href="/service-details">Accounting, Payroll & Automatio</Link>
										</li>
										
										
									</ul>
								</div>
								<div className="footer-inner-wrap s1" style={{width:"350px"}}>
									<div className={`wrap footer-col-block  ${isAccordion1 === 1 ? 'open' : ''}`}>
										<h5 className="footer-title footer-title-desktop">Office Address</h5>
										<h5 className="footer-title footer-title-mobile" onClick={() => handleAccordion1(1)}>Office Address</h5>
										<p className="text tf-collapse-content" style={{ display: getDisplayStyle1(1) }}>
											Plot no. 31,
											Lisa Ponnammal St, 3rd Floor,
											<br/>
											Golden George Nagar, Nerkundram,
											<br/>
											Chennai, Tamil Nadu - 600107
										</p>
									</div>
									<div className={`wrap footer-col-block  ${isAccordion2 === 1 ? 'open' : ''}`}style={{marginBottom:"5px"}}>
										<h5 className="footer-title footer-title-desktop">Contact Us</h5>
										<h5 className="footer-title footer-title-mobile" onClick={() => handleAccordion2(1)}>Contact Us</h5>
										<p className="text tf-collapse-content" style={{ display: getDisplayStyle2(1) }}>
											info@bisways.com <br />
											+91 99403 44774
										</p>
									</div>
									
								</div>

								{/* <div className="footer-inner-wrap form-wrap">
									<h5 className="footer-title">Newsletter</h5>
									<p className="text mb-30">
										Stay us subscribing to our newsletter
									</p>
									<form action="#" id="form-sub" className="form-sub style-5">
										<fieldset className="mb-20">
											<input type="text" placeholder="Email Address" required />
										</fieldset>
										<button type="submit" className="tf-btn style-11">
											<i className="icon-envelope" />
										</button>
										<div className="checkbox-item mb-30 style-2">
											<label>
												<span className="text">Proacted your privacy</span>
												<input type="checkbox" className="checkbox-item" defaultChecked />
												<span className="btn-checkbox" />
											</label>
										</div>
									</form>
								</div> */}
							</div>
						</div>
						<div className="col-lg-12">
							<div className="footer-bottom relative">
								<Link href="/#" className="footer-go-top">
									<i className="icon-arrow-top fs-8" />
								</Link>
								<p className="no-copy style-2">
									Copyright © {new Date().getFullYear()} <span> Bisways</span> Designed by<Link href="/" target="_blank">	Ligiotec
									</Link>
									, All Rights Reserved.
								</p>
								<div className="policy-list">
									<ul className="list">
										<li>
											<Link href="/faqs"> Privacy Policy </Link>
										</li>
										<li>
											<Link href="/faqs"> Terms and Conditions </Link>
										</li>
										<li>
											<Link href="/faqs"> FAQ </Link>
										</li>
									</ul>
								</div>
							</div>
						</div>
					</div>
				</div>
			</footer>

		</>
	)
}
