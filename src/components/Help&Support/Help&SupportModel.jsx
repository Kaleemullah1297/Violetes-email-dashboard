import { useEffect } from "react";
import HelpAndSupportCard from "./card.jsx";
import "./HelpAndSupport.css";

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
                <div>
                  <span className="d-flex align-items-center">
                    <i className="fa-regular fa-lightbulb me-2"></i>
                    <h5 className="modal-title m-0 p-0">Help & Support</h5>
                  </span>
                  <small>
                    Get assistance and learn more about Violetis Mail features
                  </small>
                </div>
                <button
                  type="button"
                  className="btn-close fs-6"
                  onClick={onClose}
                ></button>
              </div>

              {/*Row 1*/}

              <div className="row mb-2 mt-2 g-0 g-3">
                <div className="col-6">
                  <HelpAndSupportCard
                    icon={
                      <i className="fa-regular fa-lightbulb me-2 bulb-icon"></i>
                    }
                    title="Quick Start Guide"
                    description="Learn the basics in 5 minutes"
                    buttonText="Get Started"
                  />
                </div>
                <div className="col-6">
                  <HelpAndSupportCard
                    icon={
                      <i class="fa-regular fa-file-lines file-icon me-2"></i>
                    }
                    title="Video Tutorials"
                    description="Watch step-by-step guides"
                    buttonText="Watch Videos"
                  />
                </div>
              </div>

              {/*Row 2*/}
              <div className="row mb-2 g-0 g-3">
                <div className="col-6">
                  <HelpAndSupportCard
                    icon={<i class="fa-solid fa-globe globe-icon me-2"></i>}
                    title="Documentation"
                    description="Complete feature reference"
                    buttonText="Read Docs"
                  />
                </div>
                <div className="col-6">
                  <HelpAndSupportCard
                    icon={<i class="fa-regular fa-message contact me-2"></i>}
                    title="Contact Support"
                    description="Get personal assistance"
                    buttonText="Contact Us"
                  />
                </div>
              </div>

              {/*Frequently Asked Questions*/}
              <h6 className="mb-4 mt-4">Frequently Asked Questions</h6>

              <div className="frequently-asked-questions">
                <div className="card mb-2 py-2">
                  <div className="card-body m-0 p-0">
                    <h6 className="card-title m-0 p-0">
                      How do I import emails from Gmail?
                    </h6>
                    <small>
                      Go to Account Settings → Import/Export → Gmail Import to
                      securely transfer your emails.
                    </small>
                  </div>
                </div>

                <div className="card  mb-2 py-2">
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

                <div className="card  mb-2 py-2">
                  <div className="card-body m-0 p-0">
                    <h6 className="card-title m-0 p-0">
                      How do I enable two-factor authentication?
                    </h6>
                    <small>
                      Navigate to Account Settings → Security → Two-Factor
                      Authentication to enhance your account security.
                    </small>
                  </div>
                </div>
              </div>

              <div className="card p-0 m-0 py-3 ps-3 help-and-support-footer">
                <div className="card-body m-0 p-0">
                  <span className="d-flex align-items-baseline">
                    <i class="fa-solid fa-circle me-2"></i>
                    <h6 className="">All Systems Operational</h6>
                  </span>
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
