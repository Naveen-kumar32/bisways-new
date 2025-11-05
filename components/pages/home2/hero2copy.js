'use client'
import Link from 'next/link'
import { useState } from 'react'
import ModalVideo from 'react-modal-video'
import { TypeAnimation } from "react-type-animation"

export default function Hero2() {
  const [isOpen, setOpen] = useState(false)

  return (
	<>
	  <div
		className="page-title-home-1 relative"
		style={{
		  position: "relative",
		  overflow: "hidden",
		  backgroundColor: "#0b1972", 
		}}
	  >
		{/* Background Image with only 50% opacity */}
		<div
		  style={{
			position: "absolute",
			inset: 0,
			backgroundImage: `url('/images/section/hero-2.svg')`,
			backgroundSize: "50%",
			backgroundPosition: "center",
			opacity: 0.5, // ✅ opacity only for image
			zIndex: 0,
		  }}
		></div>

		{/* Actual content */}
		<div className="mb-50 relative z-10">
		  <div className="tf-container w-1780">
			<div className="row">
			  <div className="col-lg-7">
				<div className="content" style={{ background: "none", border: "none" }}>
				  <p className="s-sub-title text-white">
					<i className="icon-angles-right moveLeftToRight" />
					consulting agency
				  </p>

				  <p className="s-title text-white-yellow mb-70 text-fs-70">
					Modern Business <br />
					Consulting
					<br />
					<span className="animationtext clip">
					  <TypeAnimation
						sequence={[
						  ' Service',
						  800,
						  ' Firm',
						  800,
						  ' Office',
						  800,
						]}
						wrapper="span"
						speed={50}
						style={{ display: 'inline-block', marginLeft: "15px" }}
						repeat={Infinity}
						className="cd-words-wrapper ms-3"
					  />
					</span>
				  </p>

				  <span className="line mb-75" />

				  <p className="text font-main-2 fw-5 mb-40 text-white">
					We provide expert guidance across various business functions, <br />
					including strategy development and organizational process improvement.
				  </p>

				  <div className="bot">
					<Link href="/our-service" className="tf-btn">
					  Explore Services
					  <i className="icon-chevron-right" />
					</Link>
				  </div>
				</div>
			  </div>
			  {/* Image removed completely */}
			</div>
		  </div>
		</div>
		
	  </div>
	 {/* <div className="tf-marquee slider-saylo" style={{backgroundColor:"#1f1e21ff"}}>
					<div className="wrap-marquee" >
						<div className="marquee-item">
							<p className="font-main-2 text">
								Saylo Consulting
							</p>
						</div>
						<div className="marquee-item">
							<p className="font-main-2 text">
								Saylo Consulting
							</p>
						</div>
						<div className="marquee-item">
							<p className="font-main-2 text">
								Saylo Consulting
							</p>
						</div>
						<div className="marquee-item">
							<p className="font-main-2 text">
								Saylo Consulting
							</p>
						</div>
						<div className="marquee-item">
							<p className="font-main-2 text">
								Saylo Consulting
							</p>
						</div>
						<div className="marquee-item">
							<p className="font-main-2 text">
								Saylo Consulting
							</p>
						</div>
						<div className="marquee-item">
							<p className="font-main-2 text">
								Saylo Consulting
							</p>
						</div>
						<div className="marquee-item">
							<p className="font-main-2 text">
								Saylo Consulting
							</p>
						</div>
						<div className="marquee-item">
							<p className="font-main-2 text">
								Saylo Consulting
							</p>
						</div>
						<div className="marquee-item">
							<p className="font-main-2 text">
								Saylo Consulting
							</p>
						</div>
					</div>
				</div> */}
	  <ModalVideo
		channel='youtube'
		autoplay
		isOpen={isOpen}
		videoId="JXMWOmuR1hU"
		onClose={() => setOpen(false)}
	  />
	</>
  )
}
