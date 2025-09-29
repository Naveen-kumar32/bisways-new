'use client'
import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'
import ModalVideo from 'react-modal-video'
import { TypeAnimation } from "react-type-animation"
export default function Hero2() {
  const [isOpen, setOpen] = useState(false)
  return (
    <>

      <div className="page-title-home-1" style={{backgroundColor:"#0b1972"}}>
        <div className="mb-50">
          <div className="tf-container w-1780">
            <div className="row">
              <div className="col-lg-6" style={{background:"none"}}>
                <div className="content" style={{background:"none",border:"none"}}>
                  <p className="s-sub-title text-white ">
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
                        className="cd-words-wrapper ms-3">
                      </TypeAnimation>
                    </span>
                  </p>
                  <span className="line mb-75" />
                  <p className="text font-main-2 fw-5 mb-40">
                    We provide expert guidance across various business functions, <br /> including
                    strategy
                    development, process organizational.
                  </p>
                  <div className="bot">
                    <Link href="/our-service" className="tf-btn">
                      Explore Services
                      <i className="icon-chevron-right" />
                    </Link>
                    
                  </div>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="image-wrap">
                  <div className="image">
                    <Image
                      width="0"
                      height="0"
                      sizes="100vw"
                      style={{ width: "100%", height: "auto" }}
                      src="/images/section/home-4.jpg" data-src="/images/section/page-title-home-1.jpg" alt="" className="lazyload" />
                  </div>
                  
                </div>
              </div>
            </div>
          </div>
        </div>
        
      </div>
      <ModalVideo channel='youtube' autoplay isOpen={isOpen} videoId="JXMWOmuR1hU" onClose={() => setOpen(false)} />

    </>
  )
}
