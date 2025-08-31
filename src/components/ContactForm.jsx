import React, { useState } from "react";
import { Send, Linkedin, Instagram, X, Github } from "lucide-react";

export default function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState("");
  const [focusedField, setFocusedField] = useState("");

  const handleSubmit = async () => {
    const nameEl = document.getElementById('name');
    const emailEl = document.getElementById('email');
    const subjectEl = document.getElementById('subject');
    const messageEl = document.getElementById('message');
    
    if (!nameEl.value || !emailEl.value || !subjectEl.value || !messageEl.value) {
      setSubmitStatus("error");
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus("");

    const formData = {
      name: nameEl.value,
      email: emailEl.value,
      subject: subjectEl.value,
      message: messageEl.value,
    };

    try {
      const response = await fetch("https://sheetdb.io/api/v1/mxp58x51bryty", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ data: formData }),
      });

      if (response.ok) {
        setSubmitStatus("success");
        nameEl.value = '';
        emailEl.value = '';
        subjectEl.value = '';
        messageEl.value = '';
      } else {
        setSubmitStatus("error");
      }
    } catch (error) {
      console.error(error);
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleFocus = (fieldName) => {
    setFocusedField(fieldName);
  };

  const handleBlur = () => {
    setFocusedField("");
  };

  return (
    <div className="w-full max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
      <style jsx>{`
        :root {
          --primary-teal: #00C095;
          --secondary-teal: #00E6B0;
          --accent-teal: #00A085;
          --dark-teal: #008B75;
          --light-teal: #4DDBBA;
          --text-primary: #E6FFFA;
          --text-secondary: #B3F5E6;
          --text-accent: #80EDD1;
          --bg-primary: #000000;
          --bg-secondary: #0a0a0a;
          --bg-tertiary: #111111;
          --glass-bg: rgba(0, 0, 0, 0.7);
          --glass-border: rgba(0, 192, 149, 0.15);
          --shadow-glow: 0 0 30px rgba(0, 192, 149, 0.4);
          --shadow-soft: 0 8px 32px rgba(0, 0, 0, 0.3);
          --shadow-hover: 0 12px 48px rgba(0, 192, 149, 0.25);
          --shadow-intense: 0 0 60px rgba(0, 192, 149, 0.3);
          --gradient-primary: linear-gradient(135deg, #00C095 0%, #00E6B0 100%);
          --gradient-secondary: linear-gradient(135deg, #00A085 0%, #00C095 100%);
          --gradient-accent: linear-gradient(135deg, #00C095 0%, #4DDBBA 100%);
          --purple-accent: #CEB7FC;
        }

        .contact-container {
          background: var(--glass-bg);
          backdrop-filter: blur(20px);
          border: 1px solid var(--glass-border);
          border-radius: 24px;
          position: relative;
          overflow: hidden;
          box-shadow: var(--shadow-soft);
          transition: all 0.3s ease;
        }

        .contact-container::before {
          content: '';
          position: absolute;
          inset: 0;
          background: var(--gradient-accent);
          opacity: 0.03;
          pointer-events: none;
        }

        .form-field {
          position: relative;
          transition: all 0.3s ease;
        }

        .form-input {
          width: 100%;
          padding: 16px 20px;
          background: rgba(0, 0, 0, 0.8);
          border: 1px solid rgba(0, 192, 149, 0.2);
          border-radius: 12px;
          color: var(--text-primary);
          font-size: 16px;
          transition: all 0.3s ease;
          backdrop-filter: blur(10px);
        }

        .form-input::placeholder {
          color: var(--text-accent);
          opacity: 0.7;
        }

        .form-input:focus {
          outline: none;
          border-color: var(--primary-teal);
          box-shadow: 0 0 0 3px rgba(0, 192, 149, 0.1), var(--shadow-glow);
          background: rgba(0, 0, 0, 0.9);
        }

        .form-label {
          display: block;
          font-size: 18px;
          font-weight: 600;
          color: var(--secondary-teal);
          margin-bottom: 8px;
          transition: all 0.3s ease;
        }

        .focused-label {
          color: var(--light-teal);
          transform: scale(1.02);
        }

        .submit-button {
          width: 100%;
          position: relative;
          overflow: hidden;
          background: var(--gradient-primary);
          padding: 18px 32px;
          border-radius: 16px;
          font-weight: 700;
          color: white;
          font-size: 18px;
          border: none;
          cursor: pointer;
          transition: all 0.3s ease;
          box-shadow: var(--shadow-soft);
        }

        .submit-button:hover:not(:disabled) {
          transform: translateY(-2px);
          box-shadow: var(--shadow-hover);
          background: var(--gradient-secondary);
        }

        .submit-button:active:not(:disabled) {
          transform: translateY(0);
        }

        .submit-button:disabled {
          opacity: 0.7;
          cursor: not-allowed;
          transform: none;
        }

        .submit-button::before {
          content: '';
          position: absolute;
          inset: 0;
          background: linear-gradient(135deg, rgba(255,255,255,0.1) 0%, transparent 100%);
          transition: all 0.3s ease;
          opacity: 0;
        }

        .submit-button:hover::before {
          opacity: 1;
        }

        .status-message {
          padding: 16px 24px;
          border-radius: 12px;
          text-align: center;
          font-weight: 600;
          margin-bottom: 24px;
          animation: slideIn 0.3s ease;
        }

        .status-success {
          background: rgba(0, 192, 149, 0.15);
          border: 1px solid rgba(0, 192, 149, 0.4);
          color: var(--secondary-teal);
        }

        .status-error {
          background: rgba(239, 68, 68, 0.15);
          border: 1px solid rgba(239, 68, 68, 0.4);
          color: #fca5a5;
        }

        .loading-spinner {
          width: 24px;
          height: 24px;
          border: 3px solid rgba(255, 255, 255, 0.3);
          border-top: 3px solid white;
          border-radius: 50%;
          animation: spin 1s linear infinite;
        }

        @keyframes spin {
          to { transform: rotate(360deg); }
        }

        @keyframes slideIn {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .social-icon {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          width: 56px;
          height: 56px;
          background: rgba(0, 192, 149, 0.1);
          border: 1px solid rgba(0, 192, 149, 0.2);
          border-radius: 16px;
          color: var(--secondary-teal);
          transition: all 0.3s ease;
          text-decoration: none;
        }

        .social-icon:hover {
          background: rgba(0, 192, 149, 0.2);
          border-color: var(--primary-teal);
          transform: translateY(-4px);
          box-shadow: var(--shadow-hover);
          color: var(--light-teal);
        }

        /* Enhanced responsive breakpoints */
        @media (max-width: 640px) {
          .contact-container {
            margin: 16px;
            padding: 24px 20px;
            border-radius: 20px;
          }
          
          .form-input {
            padding: 14px 16px;
            font-size: 16px;
          }
          
          .submit-button {
            padding: 16px 24px;
            font-size: 16px;
          }
          
          .social-icon {
            width: 48px;
            height: 48px;
          }
        }

        @media (min-width: 641px) and (max-width: 768px) {
          .contact-container {
            margin: 20px;
            padding: 32px 28px;
          }
        }

        @media (min-width: 769px) and (max-width: 1024px) {
          .contact-container {
            padding: 40px 36px;
          }
        }

        @media (min-width: 1025px) {
          .contact-container {
            padding: 48px 48px;
          }
        }

        /* High DPI displays */
        @media (-webkit-min-device-pixel-ratio: 2), (min-resolution: 192dpi) {
          .contact-container {
            border-width: 0.5px;
          }
        }

        /* Landscape mobile optimization */
        @media (max-height: 500px) and (orientation: landscape) {
          .contact-container {
            padding: 16px 20px;
          }
          
          .form-input {
            padding: 12px 16px;
          }
          
          .submit-button {
            padding: 14px 24px;
          }
        }
      `}</style>

      <div className="contact-container">
        {/* Header with enhanced typography */}
        <div className="text-center mb-8 sm:mb-10 lg:mb-12">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-2" 
              style={{ color: 'var(--secondary-teal)' }}>
            Send us a Message
          </h2>
          <div className="w-24 h-1 mx-auto rounded-full" 
               style={{ background: 'var(--gradient-primary)' }}></div>
        </div>

        {/* Enhanced Status Messages */}
        {submitStatus === "success" && (
          <div className="status-message status-success">
            <div className="flex items-center justify-center gap-3">
              <div className="w-6 h-6 rounded-full flex items-center justify-center" 
                   style={{ background: 'var(--primary-teal)' }}>
                <span className="text-white text-sm font-bold">✓</span>
              </div>
              <span>Message sent successfully! We'll get back to you soon.</span>
            </div>
          </div>
        )}
        {submitStatus === "error" && (
          <div className="status-message status-error">
            <div className="flex items-center justify-center gap-3">
              <div className="w-6 h-6 rounded-full bg-red-500 flex items-center justify-center">
                <span className="text-white text-sm font-bold">!</span>
              </div>
              <span>Failed to send message. Please try again later.</span>
            </div>
          </div>
        )}

        {/* Enhanced Contact Form */}
        <div className="space-y-6 sm:space-y-8">
          {/* Responsive Grid Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
            {/* Name Field */}
            <div className="form-field">
              <label
                htmlFor="name"
                className={`form-label ${focusedField === 'name' ? 'focused-label' : ''}`}
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                className="form-input"
                placeholder="Your full name"
                onFocus={() => handleFocus('name')}
                onBlur={handleBlur}
              />
            </div>

            {/* Email Field */}
            <div className="form-field">
              <label
                htmlFor="email"
                className={`form-label ${focusedField === 'email' ? 'focused-label' : ''}`}
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                className="form-input"
                placeholder="your.email@example.com"
                onFocus={() => handleFocus('email')}
                onBlur={handleBlur}
              />
            </div>
          </div>

          {/* Subject Field - Full Width */}
          <div className="form-field">
            <label
              htmlFor="subject"
              className={`form-label ${focusedField === 'subject' ? 'focused-label' : ''}`}
            >
              Subject
            </label>
            <input
              type="text"
              id="subject"
              name="subject"
              required
              className="form-input"
              placeholder="What's this about?"
              onFocus={() => handleFocus('subject')}
              onBlur={handleBlur}
            />
          </div>

          {/* Message Field */}
          <div className="form-field">
            <label
              htmlFor="message"
              className={`form-label ${focusedField === 'message' ? 'focused-label' : ''}`}
            >
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows="5"
              required
              className="form-input resize-none min-h-[120px] sm:min-h-[140px]"
              placeholder="Tell us more about your inquiry..."
              onFocus={() => handleFocus('message')}
              onBlur={handleBlur}
            ></textarea>
          </div>

          {/* Enhanced Submit Button */}
          <div className="pt-4">
            <button
              type="button"
              onClick={handleSubmit}
              disabled={isSubmitting}
              className="submit-button"
            >
              <div className="relative flex items-center justify-center gap-3">
                {isSubmitting ? (
                  <>
                    <div className="loading-spinner"></div>
                    <span className="hidden xs:inline">Sending...</span>
                    <span className="xs:hidden">Sending</span>
                  </>
                ) : (
                  <>
                    <Send className="w-5 h-5 sm:w-6 sm:h-6 transition-transform duration-200 group-hover:translate-x-1" />
                    <span className="font-semibold">Send Message</span>
                  </>
                )}
              </div>
            </button>
          </div>
        </div>

        {/* Enhanced Social Media Section */}
        <div className="mt-12 sm:mt-16 text-center">
          <h3 className="text-xl sm:text-2xl lg:text-3xl font-semibold mb-6 sm:mb-8" 
              style={{ color: 'var(--secondary-teal)' }}>
            Connect with us
          </h3>
          
          {/* Responsive Social Icons Grid */}
          <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6">
            <a href="#" className="social-icon group" aria-label="LinkedIn">
              <Linkedin className="w-6 h-6 transition-transform duration-200 group-hover:scale-110" />
            </a>
            <a href="#" className="social-icon group" aria-label="Instagram">
              <Instagram className="w-6 h-6 transition-transform duration-200 group-hover:scale-110" />
            </a>
            <a href="#" className="social-icon group" aria-label="Twitter/X">
              <X className="w-6 h-6 transition-transform duration-200 group-hover:scale-110" />
            </a>
            <a href="#" className="social-icon group" aria-label="GitHub">
              <Github className="w-6 h-6 transition-transform duration-200 group-hover:scale-110" />
            </a>
          </div>

          {/* Enhanced Contact Info */}
          <div className="mt-8 sm:mt-10 space-y-3 sm:space-y-4">
            <div className="flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-6 text-sm sm:text-base" 
                 style={{ color: 'var(--text-accent)' }}>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full" style={{ background: 'var(--primary-teal)' }}></div>
                <span>Response within 24 hours</span>
              </div>
              <div className="hidden sm:block w-1 h-1 rounded-full" style={{ background: 'var(--text-accent)' }}></div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full" style={{ background: 'var(--primary-teal)' }}></div>
                <span>Available worldwide</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}