import Section1 from "./section1"
import Section2 from "./section2"
import Section3 from "./section3"
import Section4 from "./section4"
import Section5 from "./section5"
import Section6 from "./section6"
import Section7 from "./section7"
export default function AboutUs() {

	return (
		<>
		  <div
        aria-hidden="true"
        style={{
          position: "fixed",
          inset: 0,                    // top:0; right:0; bottom:0; left:0;
          zIndex: -1,                  // behind content
          backgroundImage: "url('/images/section/background.svg')",
          backgroundSize: "cover",     // cover whole viewport
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundAttachment: "fixed", 
          pointerEvents: "none",       
          opacity: 0.7,  
                     
        }}
      />
			<Section1 />
			<Section2 />
			<Section3 />
			<Section4 />
			{/* <Section5 /> */}
			<Section6 />
			{/* <Section7 /> */}
		</>
	)
}