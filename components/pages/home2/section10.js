import Image from 'next/image'
import Link from 'next/link'

export default function Section10() {
  return (
    <>
      <section
        className="s-cta"
        style={{
          marginTop: "75px",
          height: "920px",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Background Image */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            zIndex: 0,
          }}
        >
          <Image
            src="/images/section/section-10.svg"
            alt="Business Background"
            fill
            style={{
              objectFit: "cover",
              opacity: 1,
            }}
            sizes="100vw"
            className="lazyload"
          />
          {/* Blue overlay with 50% opacity */}
          <div
            style={{
              position: "absolute",
              inset: 0,
              backgroundColor: "#0b1972",
              opacity: 0.5,
              zIndex: 1,
            }}
          ></div>
        </div>

        {/* Foreground Content */}
        {/* <div className="tf-container w-1780 relative z-10" style={{ height: "100%" }}>
          <div
            className="row"
            style={{
              height: "100%",
              display: "flex",
              justifyContent: "center",
              alignItems: "center", // vertically center
            }}
          >
            <div className="col-lg-8">
              <div className="wrap">
                <div
                  className="content"
                  style={{
                    textAlign: "left", // left-align text inside block
                    margin: "0 auto", // center the block horizontally
                  }}
                >
                  <p
                    className="s-title text-white mb-40 text-anime-wave"
                    style={{
                      fontSize: "44px",
                      lineHeight: "1.2",
                      fontWeight: 700,
                    }}
                  >
                    Transforming Challenges <br />
                    into Opportunities for Your <br />
                    <span style={{ color: "#e6ac41" }}>
                      Business Growth
                    </span>
                  </p>
                  <Link
                    href="/contact"
                    className="tf-btn style-13 text-anime-style-1"
                  >
                    Get Consultation
                    <i className="icon-chevron-right" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div> */}
        <div className="content" style={{ left: "550px", top: "350px", width: "800px", minHeight: "300px", height: "auto" }}>
          <p className="s-title text-white mb-40 text-clamp-4 text-anime-wave" style={{ fontSize: "60px" }} >
            Transforming Challenges <br />
            into Opportunities for Your <br />
            <span>
              Business Growth
            </span>
          </p>
          <p style={{ color: "white", fontWeight: "300", fontSize: "36px", marginBottom: "20px" }}>Let’s discuss how Bisways can support your goals — from
            finance to compliance and beyond.
          </p>
          <Link href=" https://bisways.zohobookings.com/#/booking" className="tf-btn style-13 text-anime-style-1">
            Book a Free Consultation
            <i className="icon-chevron-right" />
          </Link>
        </div>
      </section>
    </>
  )
}
