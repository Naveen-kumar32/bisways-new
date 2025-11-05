'use client'
import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

export default function Section7() {
  const { ref, inView } = useInView({
    triggerOnce: false, // animate only once
    threshold: 0.2
  })

  const boxes = [
    {
      id: '01',
      title: 'Customer-centric approach',
      text: ' We focus on each client’s  unique business goals. Personalized strategies ensure measurable results and long-term, sustainable  financial performance.',
      delay: 0
    },
    {
      id: '02',
      title: 'Growth & Marketing Strategies',
      text: 'We design integrated plans  that align finance with  marketing insights, driving  profitable growth and  expanding your business  reach effectively',
      delay: 0.2
    },
    {
      id: '03',
      title: 'Financial Advisory & Analysis',
      text: 'We deliver clear financial  insights and guidance. In depth analysis supports  informed decisions and  strong budgeting for lasting  business success.',
      delay: 0.4
    },
    {
      id: '04',
      title: 'Market Research & Insights', 
      text: '  We turn data into strategic intelligence that helps you understand markets, identify opportunities, and stay ahead in a changing business landscape.',
      delay: 0.6
    }
  ]

  return (
    <section
      className="s-business-benefit tf-spacing-2"
      ref={ref}
    >
      {/* Top content */}
      <div className="wrap-1">
        <div className="tf-container w-1780">
          <div className="row">
            <div className="col-lg-12">
              <div className="content-wrap">
                <div className="image tf-hover">
                  <div className="hover-1">
                    <Image
                      width="0"
                      height="0"
                      sizes="100vw"
                      style={{ width: "100%", height: "auto" }}
                      src="/images/section/home-4.jpg"
                      alt=""
                      className="lazyload"
                    />
                  </div>
                </div>
                <div className="content">
                  {/* Sub-title */}
                  <motion.p
                    className="s-sub-title mb-17"
                    initial={{ x: -100, opacity: 0 }}
                    animate={inView ? { x: 0, opacity: 1 } : {}}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    style={{ color: "#0b1972" }}
                  >
                    <i className="icon-angles-right moveLeftToRight" style={{ color: "#0b1972" }} />
                    business benefit
                  </motion.p>

                  {/* Title */}
                  <motion.p
                    className="s-title text-main-green-3 mb-40 letter-space-0 text-anime-wave"
                    initial={{ x: 100, opacity: 0 }}
                    animate={inView ? { x: 0, opacity: 1 } : {}}
                    transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
                  >
                    Transformative Benefits <br />
                    of Corporate <span style={{ color: "#e6ac41" }}>Consulting</span>
                  </motion.p>

                  {/* Paragraph */}
                  <motion.p
                    className="text"
                    initial={{ y: 50, opacity: 0 }}
                    animate={inView ? { y: 0, opacity: 1 } : {}}
                    transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
                  >
                    Bisways builds strategic partnerships that
                    help businesses overcome challenges,
                    optimize operations, and achieve sustainable
                    growth.
                  </motion.p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 4 boxes */}
      <div className="wrap-2" style={{ marginTop: "-70px" }}>
        <div className="tf-container">
          <div className="row">
            {boxes.map((box, index) => (
              <div className="col-lg-3 col-md-6" key={index} >
                <motion.div
                  className="box-benefit"
                  initial={{ rotateY: 90, opacity: 0 }}
                  animate={inView ? { rotateY: 0, opacity: 1 } : {}}
                  transition={{
                    duration: 0.8,
                    ease: "easeOut",
                    delay: box.delay
                  }}
                  style={{ transformStyle: "preserve-3d" }}
                >
                  <div className="icon style-circle">
                    <span>{box.id}</span>
                  </div>
                  <Link href="/pricing-table" className="title text-clamp-2">
                    {box.title}
                  </Link>
                  <span className="line" />
                  <p className="text text-clamp-3" style={{height:"200px"}}>{box.text}</p>
                </motion.div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}