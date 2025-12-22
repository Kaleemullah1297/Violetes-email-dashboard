import "./Security.css";

function SecurityAndPrivacy() {
  return (
    <>
      <div className="card mt-md-0 mt-3 me-md-0 me-3 mb-5 p-5">
        <div className="div security-settings">
          <div className="mb-4 py-3 d-flex align-items-center security-settings__header">
            <i class="bi bi-eye icon-1 fs-5 me-3 ms-4"></i>
            <span>
              <h5 className="m-0 p-0 ">Security & Privacy</h5>
              <small>Protect your accounts</small>
            </span>
          </div>

          <div className="ms-5 me-5">
            <div className="mb-4">
              <h5>Security & Privacy</h5>
              <small>
                Protect your account with advanced security features
              </small>
            </div>

            <div className="card mb-3 py-4">
              <div className="card-body m-0 p-0">
                <h5 className="card-title p-0 m-0">Two-Factor Authenticaion</h5>
                <small className="card-description">
                  Add an extra layer of security to your account with 2FA
                </small>
              </div>
            </div>

            <div className="card mb-3">
              <div className="card-body">
                <h5 className="card-title">Password & recovery</h5>
                <small className="card-description">Manage your account password and recovery options</small>

                <div className="card mb-3">
                  <div className="card-body">
                    <div className="card-title"></div>
                  </div>
                </div>
                <div className="card mb-3"></div>
                <div className="card"></div>
              </div>
            </div>

            <div className="card mb-3"></div>

            <div className="card mb-3"></div>
          </div>
        </div>
      </div>
    </>
  );
}

export default SecurityAndPrivacy;
