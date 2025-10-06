'use client';
import { useInView } from 'react-intersection-observer';
import { motion } from "framer-motion";

export default function Section2() {
  const { ref: sectionRef, inView } = useInView({
    triggerOnce: false,  // 👈 animate every time
    threshold: 0.2
  });

  const { ref: gridRef, inView: gridInView } = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const boxes = [
  { title: "Discovery", short: "We analyze your business needs, examining every detail with care.", text: "We identify hidden opportunities, strengths that fuel future growth, and weaknesses that may slow progress. Our focus is on clarity, providing a strong foundation first. Before execution begins, we ensure you have direction, focus, and vision.", img: "/images/section/discovery.jpg" },
  { title: "Strategy", short: "We craft tailored frameworks, designed with precision and focus.", text: "Our work is backed by research, aligned with evolving market trends, and rooted in proven methodologies. These strategies empower your business, helping it scale up smartly. We provide clear, actionable direction, ensuring sustainable and lasting growth.", img: "/images/section/strategy.jpg" },
  { title: "Execution", short: "Our team ensures seamless work, focused on clear implementation.", text: "We execute your business roadmap with precision and agile methods, aligning each step to efficiency. Our approach adapts with speed, removing obstacles before they grow. This ensures smooth, timely delivery, driving maximum impact and results.", img: "/images/section/execution.jpg" },
  { title: "Monitoring", short: "We track business progress daily, observing results in real time.", text: "Our team monitors every milestone, identifying gaps and opportunities, adjusting strategies when required. We optimize plans continuously, reducing risks before they grow. This proactive approach ensures clarity, sustaining performance and steady growth.", img: "/images/section/monitering.jpg" },
  { title: "Planning", short: "We create detailed business plans, structured with clarity and purpose.", text: "Our roadmaps align with your goals, balancing short and long milestones, while ensuring focused direction ahead. Every step is well defined, designed to maximize effectiveness. This planning drives smart execution, ensuring growth that lasts long.", img: "/images/section/planning.jpg" },
  { title: "Advisory", short: "We provide expert consulting help, guiding businesses with clarity.", text: "Our advisory strengthens leadership through trusted, actionable insights, shaping strategies that drive success. We focus on practical guidance, not just theory or reports. This empowers you with knowledge to make confident, bold decisions.", img: "/images/section/advisory.jpg" },
  { title: "Financial", short: "Our financial services are designed to strengthen stability and growth.", text: "We provide clear forecasting tools, anticipating trends and future needs, ensuring businesses stay prepared. Risk assessment guides every choice, reducing uncertainty and protecting value. We optimize portfolios with care, driving steady, reliable performance.", img: "/images/section/financial.jpg" },
  { title: "Growth", short: "We accelerate business growth fast, driving progress through innovation.", text: "Our focus is digital transformation, empowering businesses to stay ahead, adapting quickly to new markets. We design expansion strategies smartly, backed by data and research. This approach ensures steady scaling, building success that lasts long.", img: "/images/section/growth.jpg" },
];


  return (
    <section ref={sectionRef} className="s-service-2 tf-spacing-1 lazyload" >
      <div className="tf-container">
        <div className="row" >
          <div className="col-lg-12" >
            <div className="s-heading text-center" >

              {/* Sub-title */}
              <motion.p
                className="s-sub-title text-white justify-center mb-18"
                initial={{ x: -100, opacity: 0 }}
                animate={inView ? { x: 0, opacity: 1 } : { x: -100, opacity: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
              >
                <i className="icon-angles-right moveLeftToRight" />
                services we provide
              </motion.p>

              {/* Title */}
              <motion.p
                className="s-title text-white-yellow text-center text-anime-wave"
                initial={{ x: 100, opacity: 0 }}
                animate={inView ? { x: 0, opacity: 1 } : { x: 100, opacity: 0 }}
                transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
              >
                Leadership Development &amp; Executive <br />
                Coaching Market Expansion &amp; Growth <br />
                Strategies <span style={{ color: "#e6ac41" }}>and Solutions</span>
              </motion.p>

            </div>
          </div>
        </div>

        {/* 🔽 Image Section */}
        <div className="grid" ref={gridRef} >
          {boxes.map((box, index) => (
            <motion.div
              key={index}
              className="box"
              style={{ backgroundImage: `url(${box.img})` }}
              // initial={{ y: 80, opacity: 0 }}
              // animate={gridInView ? { y: 0, opacity: 1 } : {}}
              // transition={{ duration: 0.8, delay: index * 0.1, ease: "easeOut" }}
            >
              <div className="overlay" /> {/* 👈 added overlay layer */}
              <div className="box-inner">
                <div className="title-box">{box.title}</div>

                {/* Two states of text */}
                <div className="text-box short-text">{box.short}</div>
                <div className="text-box long-text">{box.text}</div>
              </div>
            </motion.div>
          ))}

        </div>

      </div>
    </section>
  );
}
