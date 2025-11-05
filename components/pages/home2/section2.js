'use client';
import { useInView } from 'react-intersection-observer';
import { motion } from "framer-motion";

export default function Section2() {
  const { ref: sectionRef, inView } = useInView({
    triggerOnce: false, // animate every time
    threshold: 0.2
  });

  const boxes = [
    { title: "Discovery", short: "We analyze your business needs, examining every detail with care.", text: "We identify hidden opportunities, strengths that fuel future growth, and weaknesses that may slow progress. Our focus is on clarity, providing a strong foundation first. Before execution begins, we ensure you have direction, focus, and vision.", img: "/images/section/discovery.jpg" },
    { title: "Strategy", short: "We craft tailored frameworks with precision and focus.", text: "Our work is backed by research, aligned with evolving market trends, and rooted in proven methodologies. These strategies empower your business, helping it scale up smartly. We provide clear, actionable direction, ensuring sustainable and lasting growth.", img: "/images/section/strategy.jpg" },
    { title: "Execution", short: "Our team ensures seamless work, focused on clear implementation.", text: "We execute your business roadmap with precision and agile methods, aligning each step to efficiency. Our approach adapts with speed, removing obstacles before they grow. This ensures smooth, timely delivery, driving maximum impact and results.", img: "/images/section/execution.jpg" },
    { title: "Monitoring", short: "We track business progress daily, observing results in real time.", text: "Our team monitors every milestone, identifying gaps and opportunities, adjusting strategies when required. We optimize plans continuously, reducing risks before they grow. This proactive approach ensures clarity, sustaining performance and steady growth.", img: "/images/section/monitering.jpg" },
    { title: "Planning", short: "We create business plans structured with clarity and purpose.", text: "Our roadmaps align with your goals, balancing short and long milestones, while ensuring focused direction ahead. Every step is well defined, designed to maximize effectiveness. This planning drives smart execution, ensuring growth that lasts long.", img: "/images/section/planning.jpg" },
    { title: "Advisory", short: "We provide expert consulting, guiding businesses with clarity.", text: "Our advisory strengthens leadership through trusted, actionable insights, shaping strategies that drive success. We focus on practical guidance, not just theory or reports. This empowers you with knowledge to make confident, bold decisions.", img: "/images/section/advisory.jpg" },
    { title: "Financial", short: "Our financial services strengthen business stability and growth.", text: "We provide clear forecasting tools, anticipating trends and future needs, ensuring businesses stay prepared. Risk assessment guides every choice, reducing uncertainty and protecting value. We optimize portfolios with care, driving steady, reliable performance.", img: "/images/section/financial.jpg" },
    { title: "Growth", short: "We accelerate business growth fast, driving progress through innovation.", text: "Our focus is digital transformation, empowering businesses to stay ahead, adapting quickly to new markets. We design expansion strategies smartly, backed by data and research. This approach ensures steady scaling, building success that lasts long.", img: "/images/section/growth.jpg" },
  ];

  return (
    <>
      <style>{`
        .section5-container {
          max-width: 1400px;
          margin: 0 auto;
          padding: 80px 20px;
          text-align: center;
        }

        .section5-title {
          font-size: 36px;
          font-weight: 700;
          margin-bottom: 20px;
        }

        .section5-sub {
          font-size: 18px;
          color: #555;
          margin-bottom: 70px;
        }

        .grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 40px;
        }

        /* Responsive fallback */
        @media (max-width: 1100px) {
          .grid { grid-template-columns: repeat(2, 1fr); }
        }
        @media (max-width: 640px) {
          .grid { grid-template-columns: repeat(1, 1fr); }
        }

        .box {
          position: relative;
          height: 400px;
          border-radius: 20px;
          overflow: hidden;
          background-size: cover;
          background-position: center;
          cursor: pointer;
          transition: transform 0.4s ease, box-shadow 0.4s ease;
          display: flex;
          align-items: stretch;
        }

        .box-inner {
          position: absolute;
          inset: 0;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          padding: 20px;
          transition: all 0.45s cubic-bezier(.2,.9,.2,1);
          pointer-events: none; /* allow clicks to reach the box */
        }

        .title-box {
          background: rgba(255, 255, 255, 0.15);
          backdrop-filter: blur(12px);
          border-radius: 16px;
          padding: 12px 16px;
          color: #0b1972;
          font-weight: 700;
          text-align: center;
          transition: opacity 0.35s ease, transform 0.35s ease;
          display: inline-block;
          width: 100%;
          pointer-events: auto;
        }

        /* short description always visible at the bottom and fully shown */
        .short-box {
          background: rgba(127, 127, 127, 0.25);
	        backdrop-filter: blur(6px);
          border-radius: 12px;
          padding: 10px 14px;
          color: #0b1972;
          font-weight: 600;
          font-size: 14px;
          text-align: left;
          max-height: none; /* ensure full visibility */
          overflow: visible;
          pointer-events: auto;
          transition: opacity 0.35s ease, transform 0.35s ease;
        }

        /* long text initially hidden and revealed on hover - expands from center outwards vertically */
        .text-box {
          position: absolute;
          left: 20px;
          right: 20px;
          top: 50%; /* center vertically */
          transform: translateY(-50%) scaleY(0);
          transform-origin: center center; /* expand from center */
          background: rgba(255, 255, 255, 0.15);
          backdrop-filter: blur(10px);
          padding: 22px;
          border-radius: 16px;
          color: #0b1972;
          font-weight: 400;
          font-size: 15px;
          line-height: 1.6;
          height: 90%;
          opacity: 0;
          overflow: hidden;
          transition: transform 0.6s cubic-bezier(.2,.9,.2,1), opacity 0.6s ease;
          pointer-events: auto;
          z-index: 5;
        }

        /* Hover effects */
        .box:hover {
          transform: translateY(-6px) scale(1.01);
          box-shadow: 0 20px 40px rgba(11,25,114,0.15);
        }

        .box:hover .box-inner {
          padding: 28px;
        }

        /* hide title on hover */
        .box:hover .title-box {
          opacity: 0;
          transform: translateY(-8px);
        }

        /* hide short on hover to avoid overlap */
        .box:hover .short-box {
          opacity: 0;
          transform: translateY(12px);
        }

        /* expand from center: scaleY from 0 -> 1, and fade in */
        .box:hover .text-box {
          transform: translateY(-50%) scaleY(1);
          opacity: 1;
        }

        /* Optional: smooth out transform origin on mobile (where hover doesn't apply) */
        @media (hover: none) {
          .text-box { transform: translateY(-50%) scaleY(1); opacity: 0; }
          .box:active .text-box, .box:focus-within .text-box { opacity: 1; }
        }

      `}</style>

      <section ref={sectionRef} className="s-service-2 tf-spacing-1 lazyload">
        <div className="tf-container">
          <div className="row">
            <div className="col-lg-12">
              <div className="s-heading text-center">

                <motion.p
                  className="s-sub-title text-white justify-center mb-18"
                  initial={{ x: -100, opacity: 0 }}
                  animate={inView ? { x: 0, opacity: 1 } : { x: -100, opacity: 0 }}
                  transition={{ duration: 0.8, ease: "easeOut" }}
                >
                  <i className="icon-angles-right moveLeftToRight" />
                  services we provide
                </motion.p>

                <motion.p
                  className="s-title text-white-yellow text-center text-anime-wave"
                  initial={{ x: 100, opacity: 0 }}
                  animate={inView ? { x: 0, opacity: 1 } : { x: 100, opacity: 0 }}
                  transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
                >
                  We deliver end-to-end consulting
                  from discovery and strategy to
                  execution, financial management,<br />

                  <span style={{ color: "#e6ac41" }}>and Sustainable Growth</span>
                </motion.p>

              </div>
            </div>
          </div>

          <div className="grid">
            {boxes.map((box, index) => (
              <motion.div
                key={index}
                className="box"
                style={{ backgroundImage: `url(${box.img})` }}
                initial={{ y: 80, opacity: 0 }}
                animate={inView ? { y: 0, opacity: 1 } : {}}
                transition={{ duration: 0.8, delay: index * 0.08, ease: "easeOut" }}
                role="article"
                aria-label={box.title}
              >
                <div className="box-inner">
                  <div style={{ display: 'flex', justifyContent: 'center' }}>
                    <div className="title-box">{box.title}</div>
                  </div>

                  {/* long description (hidden until hover) - expands from center */}
                  <div className="text-box" aria-hidden="true">{box.text}</div>

                  {/* short description always visible at the bottom (disappears on hover) */}
                  <div className="short-box">{box.short}</div>
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </section>
    </>
  );
}
