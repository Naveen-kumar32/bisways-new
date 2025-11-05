"use client"

import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { useRef } from 'react'

export default function Section1() {
	const { ref: inViewRef, inView } = useInView({
		triggerOnce: false, // replay every time section enters view
		threshold: 0.18,
	})
	const localRef = useRef(null)
	// combine refs so both inView and localRef point to same node
	function setRefs(node) {
		localRef.current = node
		inViewRef(node)
	}

	const titleVariant = {
		hidden: { x: 120, y: 40, opacity: 0 },
		visible: { x: 0, y: 0, opacity: 1 },
	}

	const subtitleVariant = {
		hidden: { x: -120, opacity: 0 },
		visible: { x: 0, opacity: 1 },
	}
	const rightHeadingVariant = {
		hidden: { x: 120, opacity: 0 },
		visible: { x: 0, opacity: 1 },
	}

	return (
		<section ref={setRefs} className="s-why-choose-4 tf-spacing-3">
			<div className="content-wrap tf-spacing-3">
				<div className="content-left">
					<motion.p
						className="s-sub-title mb-15"
						style={{ color: '#0b1972' }}
						variants={titleVariant}
						initial="hidden"
						animate={inView ? 'visible' : 'hidden'}
						transition={{ duration: 0.7, ease: 'easeOut' }}
					>
						<i
							className="icon-angles-right moveLeftToRight"
							style={{ color: '#0b1972' }}
						/>
						Why Bisways
					</motion.p>

					<motion.p
						className="s-title mb-40 text-anime-wave"
						style={{ color: '#0b1972' }}
						variants={subtitleVariant}
						initial="hidden"
						animate={inView ? 'visible' : 'hidden'}
						transition={{ duration: 0.7, ease: 'easeOut', delay: 0.06 }}
					>
						Unmatched Expertise for Your
						<span style={{ color: '#e6ac41' }}> Business Success</span>
					</motion.p>

					<p className="text">
						Bisways Virtual CFO services provide expert financial planning,
						forecasting, and analysis without the need for a full-time CFO.
					</p>

					<p className="text">
						We help your business improve profitability, maintain financial
						discipline, and achieve sustainable growth.
					</p>

					<ul className="benefit-list style-2">
						<li>
							<div className="icon">
								<i className="icon-check-2" style={{backgroundColor:"#e6ac41",fontSize:"15px",padding:"7px",borderRadius:"50%",color:"white"}} />
							</div>
							<p>10+ Years of Experience</p>
						</li>
						<li>
							<div className="icon">
								<i className="icon-check-2" style={{backgroundColor:"#e6ac41",fontSize:"15px",padding:"7px",borderRadius:"50%",color:"white"}} />
							</div>
							<p>500+ Businesses Supported Nationwide</p>
						</li>
					</ul>
				</div>

				<div className="image-right">
					<div className="image-wrap image" style={{ borderRadius: '16px' }}>
						<Image
							width={1200}
							height={800}
							sizes="(max-width: 768px) 100vw, 50vw"
							style={{ width: '100%', height: 'auto', display: 'block' }}
							src="/images/section/cfo-1.svg"
							alt="cfo"
							className="lazyload"
						/>
					</div>
				</div>
			</div>

			<div className="content-wrap wrap-2">
				<div className="image-left relative">
					<div className="image-wrap image" style={{ borderRadius: '16px' }}>
						<Image
							width={1200}
							height={800}
							sizes="(max-width: 768px) 100vw, 50vw"
							style={{ width: '100%', height: 'auto', display: 'block' }}
							src="/images/section/cfo-2.svg"
							alt="cfo-2"
							className="lazyload"
						/>
					</div>
				</div>

				<div className="content-right">
					<motion.p
						className="s-sub-title mb-15"
						style={{ color: '#0b1972' }}
						variants={titleVariant}
						initial="hidden"
						animate={inView ? 'visible' : 'hidden'}
						transition={{ duration: 0.7, ease: 'easeOut' }}
					>
						<i
							className="icon-angles-right moveLeftToRight"
							style={{ color: '#0b1972' }}
						/>
						the Smart choice
					</motion.p>
					<motion.p
						className="s-title text-anime-wave"
						style={{ color: '#0b1972' }}
						variants={rightHeadingVariant}
						initial="hidden"
						animate={inView ? 'visible' : 'hidden'}
						transition={{ duration: 0.75, ease: 'easeOut', delay: 0.05 }}
					>
						Smart Choice for Virtual
						<span style={{ color: '#e6ac41' }}> CFO Excellence</span>
					</motion.p>


					<ul className="list">
						<li className="wow fadeInUp" data-wow-delay="0s">
							<div className="number">
								<p>1</p>
							</div>
							<div>
								<p   className="title" style={{ color: '#0b1972', fontSize:"22px", fontWeight:"600",fontStyle:"bold" }}>
									Strategic Decision Support
								</p>
								<p style={{ color: '#0b1972' }}>
									Turning financial data into clear, actionable insights that guide
									leadership decisions and improve outcomes.
								</p>
							</div>
						</li>
						<li className="wow fadeInUp" data-wow-delay="0s">
							<div className="number">
								<p>2</p>
							</div>
							<div>
								<p className="title" style={{ color: '#0b1972', fontSize:"22px", fontWeight:"600",fontStyle:"bold" }}>
									Data-Driven Forecasting
								</p>
								<p style={{ color: '#0b1972' }}>
									Planning budgets and predicting growth with precision, ensuring
									smarter investments and optimized performance.
								</p>
							</div>
						</li>
						<li className="wow fadeInUp" data-wow-delay="0s">
							<div className="number">
								<p>3</p>
							</div>
							<div>
								<p className="title" style={{ color: '#0b1972', fontSize:"22px", fontWeight:"600",fontStyle:"bold" }}>
									Sustainable Financial Health
								</p>
								<p style={{ color: '#0b1972' }}>
									Building long-term financial discipline and compliance to support
									consistent growth and organizational strength.
								</p>
							</div>
						</li>
					</ul>
				</div>
			</div>

			<style jsx>{`
        .image-wrap {
          overflow: hidden;
          display: block;
          border-radius: 16px;
        }

        /* target the internal img rendered by next/image */
        .image-wrap :global(img) {
          transition: transform 450ms cubic-bezier(0.2, 0.8, 0.2, 1), filter 450ms;
          transform-origin: center center;
          will-change: transform;
        }

        .image-wrap:hover :global(img) {
          transform: scale(1.06);
        }

        /* keep layout stable while the image scales */
        .image-wrap :global(img) {
          backface-visibility: hidden;
        }

        /* small responsive tweak so motion looks good */
        @media (max-width: 768px) {
          .s-sub-title {
            font-size: 15px;
          }
        }
      `}</style>
		</section>
	)
}
