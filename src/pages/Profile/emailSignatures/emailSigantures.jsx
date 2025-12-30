//import "./SocialLinks.css";
//import { useState } from "react";

function EmailSignatures() {
  const handleSubmit = (event) => {
    event.preventDefault();
  };
  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className="social-links px-5 pb-5 m-0 p-0 card me-1">
          {/*Social Links Alert*/}
          <div className="social-links-alert ps-4 pb-3 pt-3 mb-2 d-flex align-items-center">
            <i className="bi bi-globe fs-4 me-3"></i>
            <span>
              <h5 className="card-title fs-5 mb-0">Email Signatures</h5>
              <small>Create and manage your email signatures</small>
            </span>
          </div>

          {/*Social Links Header*/}
          <span className="social-links-header">
            <h5 className="card-title fs-4">Email Signatures</h5>
            <small>
              Connect and manage your email signatures for different contexts
            </small>
          </span>

          {/*Social Links Main Body*/}

          <div className="card mb-5">
            <div className="card-body d-flex justify-content-between align-items-center">
              {/* Left side */}
              <div className="d-flex align-items-center gap-2">
                <i className="bi bi-plus fs-2"></i>
                <p className="m-0 card-title">Default</p>
              </div>

              {/* Right side */}
              <div className="d-flex align-items-center gap-3 mb-5">
                <p className="m-0">Make Default</p>
                <i className="bi bi-plus fs-2"></i>
                <i className="far fa-trash-alt text-danger"></i>
              </div>
            </div>

            <input
              type="text"
              className="form-control p-5 mb-5"
              placeholder="Thanks,John Doe"
            />

            <div className="d-flex justify-content-between mt-3">
              <p>
                8 lines .119
                <br />
                characters
              </p>
              <p>Last updated:10/06/2025</p>
            </div>
          </div>

          <div className="card mb-5">
            <div className="card-body d-flex justify-content-between align-items-center">
              {/* Left side */}
              <div className="d-flex align-items-center gap-2">
                <i className="bi bi-plus fs-2"></i>
                <p className="m-0 card-title">Business</p>
              </div>

              {/* Right side */}
              <div className="d-flex align-items-center gap-3 mb-5">
                <p className="m-0">Make Default</p>
                <i className="bi bi-plus fs-2"></i>
                <i className="far fa-trash-alt text-danger"></i>
              </div>
            </div>

            <input
              type="text"
              className="form-control p-5 mb-5"
              placeholder="Thanks,John Doe"
            />

            <div className="d-flex justify-content-between mt-3">
              <p>
                8 lines .119
                <br />
                characters
              </p>
              <p>Last updated:10/06/2025</p>
            </div>
          </div>

          <div className="card mb-5">
            <div className="card-body d-flex justify-content-between align-items-center">
              {/* Left side */}
              <div className="d-flex align-items-center gap-2">
                <i className="bi bi-plus fs-2"></i>
                <p className="m-0 card-title">Casual</p>
              </div>

              {/* Right side */}
              <div className="d-flex align-items-center gap-3 mb-5">
                <p className="m-0">Make Default</p>
                <i className="bi bi-plus fs-2"></i>
                <i className="far fa-trash-alt text-danger"></i>
              </div>
            </div>

            <input
              type="text"
              className="form-control p-4 mb-5"
              placeholder="Thanks,John Doe"
            />

            <div className="d-flex justify-content-between mt-3">
              <p>
                2 lines .16
                <br />
                characters
              </p>
              <p>Last updated:10/16/2025</p>
            </div>
          </div>

          {/*Social Links Footer*/}
          <div className="card p-5 d-flex align-items-center">
            <i className="bi bi-plus fs-2"></i>
            <p>Create New Signature</p>
          </div>
        </div>
      </form>
    </>
  );
}

export default EmailSignatures;
