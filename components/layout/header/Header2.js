import Image from "next/image"
import Link from "next/link"
import Menu from "../Menu"
import MobileMenu from "../MobileMenu"
export default function Header2({ scroll, isMobileMenu, handleMobileMenu, handleWelcomeBox, isWelcomeBox }) {
	return (
		<>
			<div className="tf-topbar">
				<div className="tf-container w-1780">
					<div className="row">
						<div className="col-lg-12">
							<div className="topbar-inner">
								<div className="topbar-left">
									<div className="icon">
										
									</div>
									<p></p>
								</div>
								<div className="topbar-right">
									<ul className="infor-list">
										<li>
											<div className="icon">
												<i className="flaticon-open-mail" />
											</div>
											<Link href="mailto: info@bisways.com">
												info@bisways.com
											</Link>
										</li>
										<li>
											<div className="icon">
												<i className="flaticon-phone-call" />
											</div>
											<p>
												Phone No :<Link href="/tel: +91 99403 44774">  +91 99403 44774
												</Link>
											</p>
										</li>
										<li>
											<div className="icon">
												<i className="flaticon-clock" />
											</div>
											<a>
												Working Hours - 9:30 AM - 6:30 PM
											</a>
										</li>
									</ul>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			{/* Header */}
			<header className="tf-header style-2">
				<div className="tf-container w-1780">
					<div className="row">
						<div className="col-lg-12">
							<div className="header-inner">
								<div className="header-left">
									<div className="logo-site">
										<Link href="/">
											<Image
												width="139" s
												height="39"
												sizes="100vw"
												style={{ width: "100%", height: "auto" }}
												id="logo_header" src="/images/section/header-logo.svg" data-retina="./images/section/header-logo.svg" alt="" />
										</Link>
									</div>
								</div>
								<div className="header-center">
									<nav className="main-nav">
										<Menu />
									</nav>
								</div>
								<div className="header-right">
									<button  className="tf-btn style-9 small" onClick={handleWelcomeBox}>
										Get In Touch
										<i className="icon-chevron-right" />
									</button>
									<div className="union style-2 mobile-button" onClick={handleMobileMenu}>
										<span className="dot" />
										<span className="dot" />
										<span className="dot" />
									</div>
									{/* <div className="union style-2 btn-open-welcome" onClick={handleWelcomeBox}>
										<span className="dot" />
										<span className="dot" />
										<span className="dot" />
									</div> */}

								</div>
							</div>

							<div className={isMobileMenu ? "mobile-nav-wrap active" : "	mobile-nav-wrap"}>
								<div className="overlay-mobile-nav" onClick={handleMobileMenu} />
								<div className="inner-mobile-nav overflow-y-auto">
									<div className="top">
										<div className="logo">
											<Link href="/" rel="home" className="main-logo">
												<Image
													width="139"
													height="39"
													// sizes="100vw"
													// style={{ width: "100%", height: "auto" }}
													id="mobile-logo_header" alt="" src="/images/logo/logo-4.png" />
											</Link>
											<div className="mobile-nav-close" onClick={handleMobileMenu}>
												<i className="icon-xmark" />
											</div>
										</div>
										<nav id="mobile-main-nav" className="mobile-main-nav">
											<MobileMenu />
										</nav>
									</div>
									<div className="bottom">
										<div className="wrap">
											<p className="title">
												Contact Us
											</p>
											<ul className="contact-list mb-20">
												<li>
													<p>
														Address: <Link href="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2643.6895046810805!2d-122.52642526124438!3d38.00014098339506!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8085976736097a2f%3A0xbe014d20e6e22654!2sSan%20Rafael%2C%20California!5e0!3m2!1sen!2s!4v1678975266976!5m2!1sen!2s" target="_blank">
															Plot no. 31,
															Lisa Ponnammal St, 3rd Floor,
															<br />
															Golden George Nagar, Nerkundram,
															<br />
															Chennai, Tamil Nadu - 600107
														</Link>
													</p>
												</li>
												<li>
													<p>
														Email: <Link href="mailto:themesflat@gmail.com">
															info@bisways.com
														</Link>
													</p>
												</li>
												<li>
													<p>
														Call: <Link href="/tel:+00012345688">
															+91 99403 44774
														</Link>
													</p>
												</li>
											</ul>
											{/* <ul className="social-list">
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
											</ul> */}
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</header>
		</>
	)
}
