'use client'
import { sliderFeedback } from '@/utils/swiperOptions'
import Image from 'next/image'
import Link from 'next/link'
import { Swiper, SwiperSlide } from "swiper/react"
import { Autoplay, Navigation } from "swiper/modules"
import "swiper/css"
import "swiper/css/navigation"

export default function Section9() {
	return (
		<>
			<section className="s-feedback tf-spacing-1" style={{ marginTop: "75px" }}>
				<div className="tf-overlay" />
				<div className="tf-container">
					<div className="row">
						<div className="col-lg-12">
							<div className="content">
								<div className="heading">
									<p className="s-sub-title mb-18" style={{ color: "#0b1972" }}>
										<i className="icon-angles-right moveLeftToRight" style={{ color: "#0b1972" }} />
										client feedback
									</p>
									<p className="s-title text-white-yellow text-anime-wave" style={{ color: "#0b1972" }}>
										1380+ Client<span style={{ color: "#e6ac41" }}> Say Us</span>
									</p>
								</div>
								<div className="btn-group">
									<div className="btn-slider-feedback btn-slide slide-prev style-2" style={{ backgroundColor: "#0b1972" }}>
										<i className="icon-arrow-left" style={{ color: "#e6ac41" }} />
									</div>
									<div className="btn-slider-feedback btn-slide slide-next style-2" style={{ backgroundColor: "#0b1972" }}>
										<i className="icon-arrow-right" style={{ color: "#e6ac41" }} />
									</div>
								</div>
							</div>

							{/* Swiper Slider */}
							<Swiper
								{...sliderFeedback}
								modules={[Autoplay, Navigation]}
								autoplay={{
									delay: 1500, // 1.5 seconds
									disableOnInteraction: false,
								}}
								 speed={1500}
								navigation={{
									nextEl: ".slide-next",
									prevEl: ".slide-prev",
								}}
								loop={true}
								className="swiper-container slider-feedback"
							>
								<SwiperSlide>
									<div className="wg-testimonial style-2 tf-hover" style={{ backgroundColor: "#e6ac41" }}>
										<div className="top">
											<div className="author-wrap">
												<div className="infor">
													<Link href="/#" className="name fw-7"> Mr. Padmanaban </Link>
													<p className="duty">CEO of Vendolite India Pvt Ltd</p>
												</div>
											</div>
											<div className="icon style-circle">
												<i className="icon-quote-left-saying-speech" />
											</div>
										</div>
										<p className="say font-main-2">
											"Bisways has been our trusted financial partner. Their accurate reporting
											and compliance support allowed us to focus on production while staying
											stress-free on audits."
										</p>
									</div>
								</SwiperSlide>

								<SwiperSlide>
									<div className="wg-testimonial style-2 tf-hover" style={{ backgroundColor: "#e6ac41" }}>
										<div className="top">
											<div className="author-wrap">
												<div className="infor">
													<Link href="/#" className="name fw-7"> Mr. Barnabass </Link>
													<p className="duty">CEO & Founder of Riota Media Pvt Ltd</p>
												</div>
											</div>
											<div className="icon style-circle">
												<i className="icon-quote-left-saying-speech" />
											</div>
										</div>
										<p className="say font-main-2">
											"As a growing startup, we needed reliable CFO guidance. Bisways
											provided clear financial strategies that helped us scale without missing
											compliance deadlines."
										</p>
									</div>
								</SwiperSlide>

								<SwiperSlide>
									<div className="wg-testimonial style-2 tf-hover" style={{ backgroundColor: "#e6ac41" }}>
										<div className="top">
											<div className="author-wrap">
												<div className="infor">
													<Link href="/#" className="name fw-7"> Mr. Nityanand Naidu </Link>
													<p className="duty">Founder & Trustee of Swarnam Charities</p>
												</div>
											</div>
											<div className="icon style-circle">
												<i className="icon-quote-left-saying-speech" />
											</div>
										</div>
										<p className="say font-main-2">
											"Our trust benefited immensely from Bisways’ advisory services. Their
											expertise in statutory filings and transparent reporting helped us maintain
											donor confidence."
										</p>
									</div>
								</SwiperSlide>

								<SwiperSlide>
									<div className="wg-testimonial style-2 tf-hover" style={{ backgroundColor: "#e6ac41" }}>
										<div className="top">
											<div className="author-wrap">
												<div className="infor">
													<Link href="/#" className="name fw-7"> Mr. Naveen Vishal </Link>
													<p className="duty">COO of Raavi Infotech Pvt Ltd</p>
												</div>
											</div>
											<div className="icon style-circle">
												<i className="icon-quote-left-saying-speech" />
											</div>
										</div>
										<p className="say font-main-2">
											"Bisways streamlined our payroll and tax filings. Their professional team
											ensured accuracy, saved us valuable time, and reduced compliance risks
											significantly."
										</p>
									</div>
								</SwiperSlide>
							</Swiper>
						</div>
					</div>
				</div>
			</section>
		</>
	)
}
