import Section1 from "./section1"
import Section10 from "./section10"
import Section2 from "./section2"
import Section3 from "./section3"
import Section4 from "./section4"
import Section5 from "./section5"
import Section6 from "./section6"
import Section7 from "./section7"
import Section8 from "./section8"
import Section9 from "./section9"
import Section11 from "./section11"
import Section12 from "./section12"
import Section13 from "./section13"
export default function Home2() {
  return (
    <>
      {/* Background layer (behind everything) */}
      <div
        aria-hidden="true"
        style={{
          position: "fixed",
          inset: 0,                    // top:0; right:0; bottom:0; left:0;
          zIndex: -1,                  // behind content
          backgroundImage: "url('/images/section/background.svg')",
          backgroundSize: "50% auto",     // cover whole viewport
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundAttachment: "fixed", 
          pointerEvents: "none",       
          opacity: 1,  
                     
        }}
      />

      {/* Your sections */}
      <Section8 />
      <Section1 />
      <Section11 />
      <Section2 />
      <Section13 />
      <Section7 />
      <Section6 />
      <Section10 />
      <Section9 />
      <Section12 />
    </>
  );
}
