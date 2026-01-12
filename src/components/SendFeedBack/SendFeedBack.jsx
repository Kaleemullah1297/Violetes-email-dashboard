import { useEffect } from "react";
import './SendFeedBack.css'

function SendFeedBack({ onClose }) {
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
        <div className="modal-dialog modal-dialog-centered send-feedback">
          <div className="modal-content">
            <div className="modal-body ">
              {/* Modal Header */}
              <div className="d-flex justify-content-between px-2">
                <span>
                  <h5 className="modal-title">Send Feedback</h5>
                  <small>
                    Help us improve Violetis Mail with your thoughts and
                    suggestions
                  </small>
                </span>
                <button
                  type="button"
                  className="btn-close fs-6"
                  onClick={onClose}
                ></button>
              </div>

              <div className="mb-2 m-0 p-0 px-2">
                <div className="mb-2 mt-3">
                  <label htmlFor="" className="form-label">
                    Feedback Type
                  </label>
                </div>

                <div className="mb-2">
                  <label htmlFor="" className="form-label">
                    Subject
                  </label>
                  <input type="text" className="form-control" />
                </div>

                <div className="mb-2">
                  <label htmlFor="" className="form-label">
                    Details
                  </label>
                  <textarea
                    name=""
                    id=""
                    className="form-control"
                    rows="4"
                  ></textarea>
                </div>

                <div className="mb-4">
                  <label htmlFor="" className="form-label">
                    Contact Email (Optional)
                  </label>
                  <input type="text" className="form-control mb-1" />
                  <small>
                    We'll only use this to follow up on your feedback if needed
                  </small>
                </div>

                <div className="card footer ">
                  <div className="card-body m-0 p-0 py-2 d-flex">
                    <i className="bi bi-lightbulb me-1"></i>
                    <span>
                      <h6 className="m-0 p-0">Your Privacy Matters</h6>
                      <small>Feedback is used solely to improve Violetis Mail. We don't share personal information and you can remain anonymous.</small>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default SendFeedBack;
