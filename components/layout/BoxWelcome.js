"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { useEffect, useState, useRef } from "react";

export default function BoxWelcome({ handleWelcomeBox, isWelcomeBox }) {
  const formRef = useRef(null);
  const syncTransition = { duration: 0.3, ease: "easeInOut" };

  const circleVariants = {
    rest: { x: 0, transition: syncTransition },
    hover: { x: 7, transition: syncTransition },
  };

  const arrowVariants = {
    rest: { rotate: -45, transition: syncTransition },
    hover: { rotate: 0, transition: syncTransition },
  };

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "Escape" && isWelcomeBox) handleWelcomeBox?.();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [isWelcomeBox, handleWelcomeBox]);

  const [phone, setPhone] = useState("");
  const [phoneError, setPhoneError] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const submitTimeoutRef = useRef(null);
  const phoneInputRef = useRef(null);

  useEffect(() => {
    if (isWelcomeBox) {
      setSubmitted(false);
      setPhone("");
      setPhoneError("");
      setIsLoading(false);
      if (submitTimeoutRef.current) {
        clearTimeout(submitTimeoutRef.current);
        submitTimeoutRef.current = null;
      }
    } else {
      if (submitTimeoutRef.current) {
        clearTimeout(submitTimeoutRef.current);
        submitTimeoutRef.current = null;
      }
    }
  }, [isWelcomeBox]);

  useEffect(() => {
    return () => {
      if (submitTimeoutRef.current) {
        clearTimeout(submitTimeoutRef.current);
        submitTimeoutRef.current = null;
      }
    };
  }, []);

  const digitsOnly = (value) => (value || "").replace(/\D/g, "");

  const handlePhoneChange = (e) => {
    const raw = e.target.value || "";
    const digits = digitsOnly(raw).slice(0, 10);
    setPhone(digits);
    if (phoneError) setPhoneError("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const d = digitsOnly(phone);
    if (d.length !== 10) {
      setPhoneError("Please enter a valid 10-digit mobile number.");
      if (phoneInputRef.current && typeof phoneInputRef.current.focus === "function") {
        phoneInputRef.current.focus();
      }
      return;
    }

    setIsLoading(true);

    try {
      // Get form data
      const formData = new FormData(formRef.current);
      const data = {
        name: formData.get("name"),
        email: formData.get("email"),
        phone: formData.get("phone"),
        company: formData.get("company"),
        subject: formData.get("subject"),
      };

      // Send email
      const response = await fetch("/api/send-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error("Failed to send email");
      }

      // Trigger PDF download
      const pdfUrl = "/files/Bisways_BK_Profile.pdf";
      const link = document.createElement("a");
      link.href = pdfUrl;
      link.download = "Bisways_BK_Profile.pdf";
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);

      // Show confirmation message
      setSubmitted(true);

      // Close modal after 3 seconds
      if (submitTimeoutRef.current) clearTimeout(submitTimeoutRef.current);
      submitTimeoutRef.current = window.setTimeout(() => {
        try {
          handleWelcomeBox?.();
        } catch (err) {
          // ignore
        }
      }, 3000);
    } catch (error) {
      console.error("Error:", error);
      setPhoneError("An error occurred. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    if (isWelcomeBox) {
      setSubmitted(false);
      setPhone("");
      setPhoneError("");
      setIsLoading(false);

      if (formRef.current) {
        formRef.current.reset();
      }

      if (submitTimeoutRef.current) {
        clearTimeout(submitTimeoutRef.current);
        submitTimeoutRef.current = null;
      }
    } else {
      if (submitTimeoutRef.current) {
        clearTimeout(submitTimeoutRef.current);
        submitTimeoutRef.current = null;
      }
    }
  }, [isWelcomeBox]);

  return (
    <>
      <div className={`box-welcome ${isWelcomeBox ? "active" : ""}`} role="dialog" aria-modal="true">
        <div className="tf-overlay" onClick={handleWelcomeBox} />

        <div className="modal-wrapper">
          <div className="comment-wrap style-2 modal-content" style={{ width: 700 }}>
            <button
              className="btn-close-welcome"
              onClick={handleWelcomeBox}
              aria-label="Close"
              type="button"
            >
              <i className="icon-xmark" />
            </button>

            <h3 className="text-anime-wave centered-header" style={{ color: "#0b1972" }}>
              Get Brochure
            </h3>

            <p className="note centered-note mb-20">
              Fields marked with *  <span aria-hidden="true">*</span> are mandatory.
            </p>

            <form ref={formRef} action="#" className="form-comment style-3" onSubmit={handleSubmit}>
              <div className="cols mb-20 two-cols">
                <fieldset>
                  <label htmlFor="name" className="form-label">
                    Name <span className="required-star">*</span>
                  </label>
                  <input id="name" name="name" type="text" placeholder="Full Name" required />
                </fieldset>

                <fieldset>
                  <label htmlFor="company" className="form-label">
                    Company Name
                  </label>
                  <input id="company" name="company" type="text" placeholder="Enter company name" />
                </fieldset>
              </div>

              <div className="cols mb-20 two-cols">
                <fieldset>
                  <label htmlFor="email" className="form-label">
                    Email <span className="required-star">*</span>
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="you@example.com"
                    required
                  />
                </fieldset>

                <fieldset>
                  <label htmlFor="phone" className="form-label">
                    Phone <span className="required-star">*</span>
                  </label>
                  <input
                    id="phone"
                    ref={phoneInputRef}
                    name="phone"
                    type="tel"
                    placeholder="10-digit mobile number"
                    required
                    inputMode="numeric"
                    pattern="\d{10}"
                    maxLength={10}
                    value={phone}
                    onChange={handlePhoneChange}
                    aria-describedby="phone-help"
                  />
                </fieldset>
              </div>

              <div className="cols mb-20">
                <fieldset>
                  <label htmlFor="subject" className="form-label">
                    Subject
                  </label>
                  <textarea id="subject" name="subject" placeholder="Write message here..." />
                </fieldset>
              </div>

              <div className="bot flex justify-center mb-10">
                <button type="submit" className="tf-btn text-anime-style-1" disabled={isLoading}>
                  {isLoading ? "Processing..." : "Submit & Download"}
                  <i className="icon-chevron-right" />
                </button>
              </div>

              {phoneError && (
                <div style={{ color: "#b91c1c", textAlign: "center", marginBottom: 8 }} role="alert">
                  {phoneError}
                </div>
              )}

              {submitted && (
                <div
                  className="checkbox-item mb-30 confirmation"
                  style={{ width: "100%" }}
                  aria-live="polite"
                >
                  <label>
                    <span className="text">
                      Thank you! Your brochure is downloading...
                      <br />
                      redirecting you now.
                    </span>
                  </label>
                </div>
              )}
            </form>
          </div>
        </div>
      </div>

      <style jsx>{`
        .box-welcome {
          display: none;
        }
        .box-welcome.active {
          display: block;
          position: fixed;
          inset: 0;
          z-index: 9998;
        }

        .tf-overlay {
          position: absolute;
          inset: 0;
          background: rgba(0, 0, 0, 0.45);
          backdrop-filter: blur(0.5px);
          z-index: 1;
        }

        .modal-wrapper {
          position: absolute;
          inset: 0;
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 2;
          padding: 20px;
        }

        .modal-content {
          position: relative;
          background: #fff;
          border-radius: 12px;
          box-shadow: 0 10px 40px rgba(2, 6, 23, 0.12);
          padding: 28px 36px;
          max-width: 95%;
          width: 700px;
          box-sizing: border-box;
        }

        .btn-close-welcome {
          position: absolute;
          top: 12px;
          right: 12px;
          width: 40px;
          height: 40px;
          border-radius: 8px;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          background: transparent;
          border: none;
          cursor: pointer;
          z-index: 3;
        }
        .btn-close-welcome i {
          color: #b91c1c;
          font-size: 18px;
          display: inline-block;
        }

        .form-comment .cols fieldset input,
        .form-comment .cols fieldset textarea {
          width: 100%;
          box-sizing: border-box;
          padding: 10px 12px;
          border: 1px solid #d1d5db;
          border-radius: 8px;
          font-size: 14px;
        }

        .form-label {
          display: block;
          font-size: 13px;
          margin-bottom: 6px;
          color: #0b1972;
          font-weight: 600;
        }

        .required-star {
          color: #b91c1c;
          margin-left: 4px;
          font-weight: 700;
        }

        .two-cols {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 12px;
        }

        .confirmation {
          display: flex;
          align-items: center;
          justify-content: center;
          text-align: center;
          padding: 10px 0;
        }
        .confirmation .text {
          display: inline-block;
        }

        .centered-header {
          text-align: center;
          margin: 6px 0 6px 0;
        }
        .centered-note {
          text-align: center;
          margin: 0 0 18px 0;
        }

        @media (max-width: 720px) {
          .modal-content {
            padding: 18px;
            width: 100%;
            border-radius: 10px;
          }
          .btn-close-welcome {
            top: 8px;
            right: 8px;
          }
          .two-cols {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </>
  );
}