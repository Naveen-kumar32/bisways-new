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
    // NOTE: negative rotation -> up-right (↗)
    rest: { rotate: -45, transition: syncTransition },
    hover: { rotate: 0, transition: syncTransition }, // to right (→)
  };

  // optional: close on Escape key for accessibility
  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "Escape" && isWelcomeBox) handleWelcomeBox?.();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [isWelcomeBox, handleWelcomeBox]);

  // ----------------- state & refs for submit/validation -----------------
  const [phone, setPhone] = useState("");
  const [phoneError, setPhoneError] = useState("");
  const [submitted, setSubmitted] = useState(false);
  // store timeout id (null or number)
  const submitTimeoutRef = useRef(null);
  const phoneInputRef = useRef(null);

  // Whenever the modal opens, reset the form state (hide thank-you, clear errors & phone)
  useEffect(() => {
    if (isWelcomeBox) {
      // modal opened -> reset
      setSubmitted(false);
      setPhone("");
      setPhoneError("");
      // clear any leftover timeout
      if (submitTimeoutRef.current) {
        clearTimeout(submitTimeoutRef.current);
        submitTimeoutRef.current = null;
      }
    } else {
      // modal closed -> also clear timeout if any
      if (submitTimeoutRef.current) {
        clearTimeout(submitTimeoutRef.current);
        submitTimeoutRef.current = null;
      }
    }
  }, [isWelcomeBox]);

  // cleanup on unmount
  useEffect(() => {
    return () => {
      if (submitTimeoutRef.current) {
        clearTimeout(submitTimeoutRef.current);
        submitTimeoutRef.current = null;
      }
    };
  }, []);

  // helper to extract digits only
  const digitsOnly = (value) => (value || "").replace(/\D/g, "");

  const handlePhoneChange = (e) => {
    // allow typing but keep only digits in state
    const raw = e.target.value || "";
    const digits = digitsOnly(raw).slice(0, 10); // enforce max 10 digits in state
    setPhone(digits);
    if (phoneError) setPhoneError("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const d = digitsOnly(phone);
    if (d.length !== 10) {
      setPhoneError("Please enter a valid 10-digit mobile number.");
      // focus phone input
      if (phoneInputRef.current && typeof phoneInputRef.current.focus === "function") {
        phoneInputRef.current.focus();
      }
      return;
    }

    // Passed validation: show confirmation message
    setSubmitted(true);

    // Close the tab after 3 seconds (may be blocked by browser if not opened by script)
    if (submitTimeoutRef.current) clearTimeout(submitTimeoutRef.current);
    submitTimeoutRef.current = window.setTimeout(() => {
      try {
        handleWelcomeBox?.();
      } catch (err) {
        // ignore if browser blocks it
      }
    }, 3000);
  };

  useEffect(() => {
    if (isWelcomeBox) {
      // Reset all form data when modal opens
      setSubmitted(false);
      setPhone("");
      setPhoneError("");

      // Clear form fields completely
      if (formRef.current) {
        formRef.current.reset();
      }

      // Clear any leftover timeout
      if (submitTimeoutRef.current) {
        clearTimeout(submitTimeoutRef.current);
        submitTimeoutRef.current = null;
      }
    } else {
      // Modal closed → clear timeout if any
      if (submitTimeoutRef.current) {
        clearTimeout(submitTimeoutRef.current);
        submitTimeoutRef.current = null;
      }
    }
  }, [isWelcomeBox]);
  // -------------------------------------------------------------------------

  return (
    <>
      {/* Modal container - only shown when isWelcomeBox is true */}
      <div className={`box-welcome ${isWelcomeBox ? "active" : ""}`} role="dialog" aria-modal="true">
        {/* overlay */}
        <div className="tf-overlay" onClick={handleWelcomeBox} />

        {/* Modal box centered */}
        <div className="modal-wrapper">
          <div className="comment-wrap style-2 modal-content" style={{ width: 700 }}>
            {/* Close button placed INSIDE modal (top-right) */}
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
              Fields marked with *  <span aria-hidden="true">*</span> are mandatory.
            </p>

            {/* ---------- NOTE: replaced form submission with our handler ---------- */}
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
                  {/* ---------- PHONE INPUT: only digits, maxLength=10 ---------- */}
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

              {/* ---------- Styled Submit Button (animated circle + arrow) ---------- */}
              <div className="bot flex justify-center mb-10">
                <button type="submit" className="tf-btn text-anime-style-1">
                  Submit & Download
                  <i className="icon-chevron-right" />
                </button>
              </div>

              {/* show phone validation error inline */}
              {phoneError && (
                <div style={{ color: "#b91c1c", textAlign: "center", marginBottom: 8 }} role="alert">
                  {phoneError}
                </div>
              )}

              {/* this is the confirmation block you provided — we toggle its visibility and center it */}
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

              {/* --------------------------------------------------------------------- */}
            </form>
            {/* --------------------------------------------------------------------- */}
          </div>
        </div>
      </div>

      <style jsx>{`
        /* full-screen modal container (hidden by default) */
        .box-welcome {
          display: none;
        }
        .box-welcome.active {
          display: block;
          position: fixed;
          inset: 0;
          z-index: 9998;
        }

        /* overlay behind modal */
        .tf-overlay {
          position: absolute;
          inset: 0;
          background: rgba(0, 0, 0, 0.45);
          backdrop-filter: blur(0.5px);
          z-index: 1;
        }

        /* modal wrapper centers content */
        .modal-wrapper {
          position: absolute;
          inset: 0;
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 2;
          padding: 20px; /* ensure spacing on small screens */
        }

        /* the actual modal card */
        .modal-content {
          position: relative;
          background: #fff;
          border-radius: 12px;
          box-shadow: 0 10px 40px rgba(2, 6, 23, 0.12);
          padding: 28px 36px;
          max-width: 95%;
          width: 700px; /* same as your inline width */
          box-sizing: border-box;
        }

        /* close button inside modal top-right */
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
          color: #b91c1c; /* red color similar to your previous inline style */
          font-size: 18px;
          display: inline-block;
        }

        /* ensure form elements are visible and usable */
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

        /* Two-column layout for wider screens (keeps stacked on small screens) */
        .two-cols {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 12px;
        }

        /* center the confirmation block */
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

        /* center heading & note */
        .centered-header {
          text-align: center;
          margin: 6px 0 6px 0;
        }
        .centered-note {
          text-align: center;
          margin: 0 0 18px 0;
        }

        /* responsive tweaks */
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
