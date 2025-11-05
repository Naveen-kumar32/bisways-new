import Section1 from "./section1"
export default function BlogStandard() {

	return (
		<>
		<div
        aria-hidden="true"
        style={{
          position: "fixed",
          inset: 0,                    // top:0; right:0; bottom:0; left:0;
          zIndex: -1,                  // behind content
          backgroundImage: "url('/images/section/background.svg')",
          backgroundSize: "50%",     // cover whole viewport
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundAttachment: "fixed", 
          pointerEvents: "none",       
          opacity: 0.3,  
                     
        }}
      />
			<Section1 />
		</>
	)
}