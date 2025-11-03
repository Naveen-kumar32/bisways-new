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
						Why choose us
					</motion.p>

					<motion.p
						className="s-title mb-40 text-anime-wave"
						style={{ color: '#0b1972' }}
						variants={subtitleVariant}
						initial="hidden"
						animate={inView ? 'visible' : 'hidden'}
						transition={{ duration: 0.7, ease: 'easeOut', delay: 0.06 }}
					>
						Unmatched Expertise for

						<span style={{ color: '#e6ac41' }}> Company Compliance</span>
					</motion.p>

					<p className="text">
						We simplify ROC, MCA, and regulatory tasks for Pvt Ltd
						companies, LLPs, and startups.
					</p>

					<p className="text">
						From annual forms to board decisions, we keep you compliant
						and investor-ready.
					</p>

					<ul className="benefit-list style-2">
						<li>
							<div className="icon">
								<i className="icon-check-2" />
							</div>
							<p>Timely filing of all ROC forms</p>
						</li>
						<li>
							<div className="icon">
								<i className="icon-check-2" />
							</div>
							<p>Director KYC and board changes</p>
						</li>
						<li>
							<div className="icon">
								<i className="icon-check-2" />
							</div>
							<p>Share allotment and capital updates</p>
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
							src="/images/section/roc-1.svg"
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
							src="/images/section/roc-2.svg"
							alt="cfo-2"
							className="lazyload"
						/>
					</div>
				</div>

				<div className="content-right">
					<motion.p
						className="s-title text-anime-wave"
						style={{ color: '#0b1972' }}
						variants={rightHeadingVariant}
						initial="hidden"
						animate={inView ? 'visible' : 'hidden'}
						transition={{ duration: 0.75, ease: 'easeOut', delay: 0.05 }}
					>
						Smart Choice for Company

						<span style={{ color: '#e6ac41' }}> Compliance Excellence</span>
					</motion.p>


					<ul className="list">
						<li className="wow fadeInUp" data-wow-delay="0s">
							<div className="number">
								<p>1</p>
							</div>
							<div>
								<Link href="/#" className="title" style={{ color: '#0b1972' }}>
									Regulatory Filings
								</Link>
								<p style={{ color: '#0b1972' }}>
									We handle all ROC and MCA form submissions with precision—
									ensuring you stay fully compliant.
								</p>
							</div>
						</li>
						<li className="wow fadeInUp" data-wow-delay="0s">
							<div className="number">
								<p>2</p>
							</div>
							<div>
								<Link href="/#" className="title" style={{ color: '#0b1972' }}>
									Corporate Governance
								</Link>
								<p style={{ color: '#0b1972' }}>
									Manage director changes, board meetings, and share capital
									with expert oversight.
								</p>
							</div>
						</li>
						<li className="wow fadeInUp" data-wow-delay="0s">
							<div className="number">
								<p>3</p>
							</div>
							<div>
								<Link href="/#" className="title" style={{ color: '#0b1972' }}>
									Seamless Company Support
								</Link>
								<p style={{ color: '#0b1972' }}>
									From incorporation changes to strike-offs, we guide every
									compliance step.
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
