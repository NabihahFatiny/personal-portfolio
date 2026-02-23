import { useState } from "react";
import { Container } from "react-bootstrap";
import { ArrowRight } from "react-bootstrap-icons";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

const MESSAGE_MAX = 500;

export const Contact = () => {
  const formInitialDetails = {
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    message: ''
  };
  const [formDetails, setFormDetails] = useState(formInitialDetails);
  const [buttonText, setButtonText] = useState('Send Message');
  const [status, setStatus] = useState({});

  const onFormUpdate = (category, value) => {
    if (category === 'message' && value.length > MESSAGE_MAX) return;
    setFormDetails({ ...formDetails, [category]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setButtonText("Sending...");
    setStatus({});
    const formspreeId = process.env.REACT_APP_FORMSPREE_ID;
    const useFormspree = formspreeId && formspreeId.length > 0;

    try {
      const url = useFormspree
        ? `https://formspree.io/f/${formspreeId}`
        : (process.env.REACT_APP_CONTACT_API || "/contact");
      const body = useFormspree
        ? {
            name: formDetails.firstName || "—",
            email: formDetails.email || "—",
            message: formDetails.message || "—",
            _replyto: formDetails.email,
          }
        : formDetails;

      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          ...(useFormspree ? { Accept: "application/json" } : {}),
        },
        body: JSON.stringify(body),
      });

      let result = {};
      try {
        result = await response.json();
      } catch {
        if (!response.ok) {
          setStatus({ success: false, message: "Something went wrong. Please try again later." });
          setButtonText("Send Message");
          return;
        }
      }

      setFormDetails(formInitialDetails);

      if (useFormspree) {
        if (response.ok) {
          setStatus({ success: true, message: "Message sent successfully." });
        } else {
          setStatus({ success: false, message: result.error || "Failed to send. Please try again." });
        }
      } else {
        if (response.ok && result.code === 200) {
          setStatus({ success: true, message: "Message sent successfully." });
        } else {
          setStatus({ success: false, message: result.message || "Something went wrong. Please try again later." });
        }
      }
    } catch (err) {
      setStatus({
        success: false,
        message: useFormspree
          ? "Network error. Please check your connection and try again."
          : "Could not reach the server. Run 'npm run dev' or start the contact server (node server.js).",
      });
    }
    setButtonText("Send Message");
  };

  return (
    <section className="contact" id="connect">
      <Container>
        <div className="contact-wrap">
          <div className="contact-header">
            <span className="contact-header-line" aria-hidden="true" />
            <span className="contact-header-label">FATINY PORTFOLIO</span>
            <span className="contact-header-line" aria-hidden="true" />
          </div>
          <TrackVisibility>
            {({ isVisible }) => (
              <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                <h2 className="contact-title">
                  <span className="contact-title-bold">Get in</span>
                  <span className="contact-title-italic">Touch</span>
                </h2>
                <p className="contact-subtitle">
                  I'd love to hear from you — let's create something beautiful.
                </p>
                <form onSubmit={handleSubmit} className="contact-form">
                  <div className="contact-form-row">
                    <div className="contact-field">
                      <label className="contact-label">NAME</label>
                      <input
                        type="text"
                        value={formDetails.firstName}
                        placeholder="Your name"
                        onChange={(e) => onFormUpdate('firstName', e.target.value)}
                        className="contact-input"
                      />
                    </div>
                    <div className="contact-field">
                      <label className="contact-label">EMAIL</label>
                      <input
                        type="email"
                        value={formDetails.email}
                        placeholder="your@email.com"
                        onChange={(e) => onFormUpdate('email', e.target.value)}
                        className="contact-input"
                      />
                    </div>
                  </div>
                  <div className="contact-field">
                    <label className="contact-label">MESSAGE</label>
                    <div className="contact-textarea-wrap">
                      <textarea
                        rows={5}
                        value={formDetails.message}
                        placeholder="Tell me what's on your mind..."
                        onChange={(e) => onFormUpdate('message', e.target.value)}
                        className="contact-input contact-textarea"
                      />
                      <span className="contact-char-count">{formDetails.message.length}/{MESSAGE_MAX}</span>
                    </div>
                  </div>
                  <button type="submit" className="contact-submit">
                    <span>{buttonText}</span>
                    <ArrowRight size={18} className="contact-submit-arrow" />
                  </button>
                  {status.message && (
                    <p className={status.success === false ? "contact-status danger" : "contact-status success"}>
                      {status.message}
                    </p>
                  )}
                </form>
              </div>
            )}
          </TrackVisibility>
        </div>
      </Container>
    </section>
  );
};
