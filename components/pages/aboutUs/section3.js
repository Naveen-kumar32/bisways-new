'use client'
import Image from 'next/image'
import Link from 'next/link'
import { useEffect } from "react"

export default function Section3() {
    useEffect(() => {
        const elements = document.querySelectorAll(".slide-left, .slide-right")

        if (!elements.length) return

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add("active-animate")
                    } else {
                        entry.target.classList.remove("active-animate")
                    }
                })
            },
            {
                root: null,
                threshold: 0.2,
            }
        )

        elements.forEach((el) => observer.observe(el))

        return () => {
            elements.forEach((el) => observer.unobserve(el))
        }
    }, [])

    return (
        <>
            <section className="s-team">
                <div className="tf-container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="flex justify-center item-center mb-70 title-section">
                                {/* CENTER TITLE AND SUBTITLE */}
                                <div className="content slide-left" style={{ textAlign: "center" }}>
                                    <p className="s-sub-title" style={{ color: "#0b1972" }}>
                                        <i className="icon-angles-right moveLeftToRight" />
                                        Meet our team
                                    </p>
                                    <p
                                        className="s-title letter-space-0 text-anime-wave"
                                        style={{ color: "#0b1972" }}
                                    >
                                        Our Management <span style={{ color: "#e6ac41" }}> Team </span>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* TEAM MEMBERS CONTAINER - WITH BLUE BACKGROUND ONLY BOTTOM 25% */}
                <div className="team-members-section">
                    <div className="team-members-wrapper">
                        {/* TEAM MEMBER 1 */}
                        <div className="card-member tf-hover">
                            <div className="image hover-14 hover-1">
                                <Image
                                    width="0"
                                    height="0"
                                    sizes="100vw"
                                    style={{ width: "100%", height: "auto" }}
                                    src="/images/section/home-1.jpg"
                                    alt="Soundarya S"
                                    className="lazyload"
                                />
                            </div>
                            <div className="content">
                                <Link href="/team-details" className="name">
                                    Soundarya S
                                </Link>
                                <p className="duty">Founder & Chief Executive Officer</p>
                                <ul className="social-list style-5 style-4" style={{ height: "28px" }}>
                                    {/* Social links */}
                                </ul>
                            </div>
                        </div>

                        {/* TEAM MEMBER 2 */}
                        <div className="card-member tf-hover">
                            <div className="image hover-14 hover-1">
                                <Image
                                    width="0"
                                    height="0"
                                    sizes="100vw"
                                    style={{ width: "100%", height: "auto" }}
                                    src="/images/section/home-1.jpg"
                                    alt="Sarath B"
                                    className="lazyload"
                                />
                            </div>
                            <div className="content">
                                <Link href="/team-details" className="name">
                                    Sarath B
                                </Link>
                                <p className="duty">Head – Audit & Taxation</p>
                                <ul className="social-list style-5 style-4" style={{ height: "28px" }}>
                                    {/* Social links */}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Inline animation styles */}
            <style jsx>{`
                .s-team {
                    padding: 60px 0 0 0;
                }

                .title-section {
                    justify-content: center;
                    width: 100%;
                }

                .slide-left,
                .slide-right {
                    opacity: 0;
                    transition: all 0.8s ease;
                }

                .slide-left {
                    transform: translateX(-80px);
                }

                .slide-right {
                    transform: translateX(80px);
                }

                .slide-left.active-animate,
                .slide-right.active-animate {
                    opacity: 1;
                    transform: translateX(0);
                }

                .team-members-section {
                    padding: 40px 0;
                    position: relative;
                }

                .team-members-section::after {
                    content: '';
                    position: absolute;
                    bottom: 0;
                    left: 0;
                    right: 0;
                    height: 25%;
                    background-color: #0b1972;
                    z-index: -1;
                }

                .team-members-wrapper {
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    gap: 70px;
                    margin: 0 auto;
                    max-width: 900px;
                    padding: 0 40px;
                    position: relative;
                    z-index: 1;
                }

                .card-member {
                    flex: 1;
                    min-width: 0;
                }

                /* Tablet screens */
                @media (max-width: 768px) {
                    .team-members-wrapper {
                        gap: 50px;
                        padding: 0 30px;
                        max-width: 700px;
                    }

                    .team-members-section {
                        padding: 40px 0;
                    }

                    .team-members-section::after {
                        height: 30%;
                    }
                }

                /* Mobile screens */
                @media (max-width: 600px) {
                    .team-members-wrapper {
                        gap: 30px;
                        padding: 0 15px;
                        max-width: 100%;
                        flex-direction: column;
                    }

                    .card-member {
                        width: 100%;
                        max-width: 300px;
                        margin: 0 auto;
                    }

                    .team-members-section {
                        padding: 30px 0;
                    }

                    .team-members-section::after {
                        height: 35%;
                    }
                }

                /* Large screens */
                @media (min-width: 1400px) {
                    .team-members-wrapper {
                        max-width: 1000px;
                        padding: 0 50px;
                    }

                    .team-members-section {
                        padding: 50px 0;
                    }

                    .team-members-section::after {
                        height: 40%;
                    }
                }
            `}</style>
        </>
    )
}