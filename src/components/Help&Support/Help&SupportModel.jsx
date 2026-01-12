import { useEffect } from "react";
import HelpAndSupportCard from './card.jsx'

function HelpAndSupportModel({ onClose }) {
  // Lock body scroll while modal is open
  useEffect(() => {
    document.body.style.overflow = "hidden"; // disable scroll
    return () => {
      document.body.style.overflow = ""; // restore scroll on close
    };
  }, []);

  return (
    <>
      {/* Backdrop */}
      <div
        className="modal-backdrop fade show"
        onClick={onClose} // optional: clicking outside closes modal
      ></div>

      {/* Modal */}
      <div
        className="modal fade show"
        style={{ display: "block" }}
        role="dialog"
        aria-modal="true"
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-body">
              {/* Modal Header */}
              <div className="d-flex justify-content-between">
                <span>
                  <h5 className="modal-title">Help & Support</h5>
                  <small>
                    Get assistance and learn more about Violetis Mail features
                  </small>
                </span>
                <button
                  type="button"
                  className="btn-close fs-6"
                  onClick={onClose}
                ></button>
              </div>

              <div className="row mb-2">
                <div className="col-6">
                  <HelpAndSupportCard title="Quick Start Guide" description="Learn the basics in 5 minutes"  buttonText="Get Started"/>
                </div>
                <div className="col-6">
                  <HelpAndSupportCard title="Video Tutorials" description="Watch step-by-step guides"  buttonText="Watch Videos"/>
                </div>
              </div>

              <div className="row mb-2">
                <div className="col-6">
                 <HelpAndSupportCard title="Documentation" description="Complete feature reference" buttonText="Read Docs"/>
                </div>
                <div className="col-6">
                  <HelpAndSupportCard title="Contact Support" description="Get personal assistance"  buttonText="Contact Us"/>
                </div>
              </div>

              <h5 className="mb-4">Frequently Asked Questions</h5>

              <div className="card mb-2 m-0 p-0 p-2">
                <div className="card-body m-0 p-0">
                  <h6 className="card-title m-0 p-0">
                    What AI features are available?
                  </h6>
                  <small>
                    Go to Account Settings → Import/Export → Gmail Import to
                    securely transfer your emails.
                  </small>
                </div>
              </div>

              <div className="card mb-2 m-0 p-0 p-2">
                <div className="card-body m-0 p-0">
                  <h6 className="card-title m-0 p-0">
                    What AI features are available?
                  </h6>
                  <small>
                    Violet Write, Echo Search, Tone Lens, and Pulse Inbox help
                    you manage emails intelligently.
                  </small>
                </div>
              </div>

              <div className="card mb-2 m-0 p-0 p-2">
                <div className="card-body m-0 p-0">
                  <h6 className="card-title m-0 p-0">
                    What AI features are available?
                  </h6>
                  <small>
                    Navigate to Account Settings → Security → Two-Factor
                    Authentication to enhance your account security.
                  </small>
                </div>
              </div>

              <div className="card m-0 p-0">
                <div className="card-body m-0 p-0">
                  <h6 className="m-0 p-0">All Systems Operational</h6>
                  <small>
                    Violetis Mail services are running normally. Last updated 2
                    minutes ago.
                  </small>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default HelpAndSupportModel;
