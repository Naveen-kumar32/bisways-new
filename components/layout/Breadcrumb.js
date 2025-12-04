import Image from "next/image"
import Link from "next/link"

export default function Breadcrumb({ date, breadcrumbTitle, breadcrumbAlt, category, breadcrumbText, imageSrc = "/images/section/home-3.jpg", imageAlt = "" }) {
	const words = breadcrumbTitle?.split(" ")
	const formattedTitle = words?.length > 1 ? (
		<>
			{words[0]} <span>{words?.slice(1).join(" ")}</span>
		</>
	) : (
		breadcrumbTitle
	)

	return (
		<>
			{breadcrumbTitle &&
				<div className="tf-page-title">
					<div className="content-wrap">
						<div className="bg-image" >
							<div className="rellax" data-rellax-speed={-10}>
								<Image
									src={imageSrc}
									alt={imageAlt || breadcrumbTitle || "page background"}
									fill
									sizes="100%"
									style={{ objectFit: "cover" }}
								/>
							</div>
						</div>
						<div className="tf-overlay" />
						<div className="content">
							<div className="tf-container">
								<div className="row">
									<div className="col-lg-12">
										<p className="title">{formattedTitle}</p>
										<p style={{ color: "white", fontSize: "30px", marginBottom: "20px", fontWeight: "600px" }}>
											{breadcrumbText}
										</p>
										<div className="breadcrums">
											<Link href="/">Home</Link>
											<div className="icon">
												<i className="icon-chevron-r" />
											</div>
											<p style={{color:"white",fontSize:"24px"}} className="current">
												{formattedTitle}
											</p>

										</div>
									</div>
								</div>
							</div>
						</div>
					</div>

				</div>
			}

			{breadcrumbAlt === 1 &&
				<div className="tf-page-title style-2">
					<div className="content-wrap">
						<div className="bg-image" >
							<div className="rellax" data-rellax-speed={-10}>
								<Image
									src="/images/section/blog-detail-page.svg"
									alt={imageAlt || "page"}
									fill
									sizes="100vw"
									style={{ objectFit: "cover" }}
								/>
							</div>
						</div>
						<div className="tf-overlay" />
						<div className="content">
							<div className="tf-container">
								<div className="row">
									<div className="col-lg-12">
										<h2>
											{breadcrumbText}
										</h2>

										<div className="breadcrums">
											<Link href="/"> Home </Link>
											<div className="icon">
												<i className="icon-chevron-r" />
											</div>
											
											<Link href="/blog-standard"> Blog </Link>
											<div className="icon">
												<i className="icon-chevron-r" />
											</div>
											<span style={{ fontSize: "24px", fontWeight: "500", color: "#fdfdfdff" }} className="current">
												{category}
											</span>
										</div>

										<div className="entry-meta style-2 gap-20">
											<ul className="meta-list" style={{ gap: "25px" }}>
												<li className="entry author">
													<div className="icon">
														<i className="icon-calendar-days" style={{ color: "#ba1616ff" }} />
													</div>
													<div style={{ color: "white" }}>
														Published:  {date}
													</div>
												</li>
												<li>
													<div style={{ width: "3px", height: "20px", backgroundColor: "white" }}>
													</div>
												</li>
												<li className="entry date">

													<div style={{ color: "white" }}>
														By Bisways Consulting Group
													</div>
												</li>

											</ul>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div className="tf-marquee slider-saylo style-2" style={{marginBottom:"0px"}}>
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

				</div>

			}
			{breadcrumbAlt === 2 &&
				<div className="tf-page-title">
					<div className="content-wrap">
						<div className="bg-image" >
							<div className="rellax" data-rellax-speed={-10}>
								<Image src={imageSrc} alt={imageAlt || "page"} fill sizes="100vw" style={{ objectFit: "cover" }} />
							</div>
						</div>
						<div className="tf-overlay" />
						<div className="content">
							<div className="tf-container">
								<div className="row">
									<div className="col-lg-12">
										<p className="title mb-30">
											Marketing
											<span className="ms-2">
												Consulting
											</span>
										</p>
										<div className="breadcrums">
											<Link href="/">
												Home
											</Link>
											<div className="icon">
												<i className="icon-chevron-r" />
											</div>
											<Link href="our-service.html">
												Our Services
											</Link>
											<div className="icon">
												<i className="icon-chevron-r" />
											</div>
											<Link href="#" className="current">
												Marketing Consulting
											</Link>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>

				</div>

			}
		</>
	)
}
