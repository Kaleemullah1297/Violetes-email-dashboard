import "./Security.css";

function SecurityAndPrivacy() {
  return (
    <>
      <div className="card mt-md-0 mt-3 me-md-0 me-3 mb-5 pb-5">
        <div className="div security-settings">
          <div className="mb-4 py-3 d-flex align-items-center security-settings__header">
            <i className="bi bi-eye icon-1 fs-5 me-3 ms-4"></i>
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
                <span className="d-flex justify-content-between">
                  <h5 className="card-title p-0 m-0">
                    Two-Factor Authenticaion
                  </h5>
                  <div className="form-check form-switch ">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      id="iconSwitch"
                      aria-label="Toggle"
                    />
                  </div>
                </span>
                <small className="card-description">
                  Add an extra layer of security to your account with 2FA
                </small>
              </div>
            </div>

            <div className="card mb-3">
              <div className="card-body">
                <h5 className="card-title">Password & recovery</h5>
                <small className="card-description">
                  Manage your account password and recovery options
                </small>

                <div className="card mb-3">
                  <div className="card-body">
                    <h6 className="card-title">Change Password</h6>
                    <small>Update your current password</small>
                  </div>
                </div>
                <div className="card mb-3">
                  <div className="card-body">
                    <h6 className="card-title">Recovery Options</h6>
                    <small>Set backup email and phone number</small>
                  </div>
                </div>
                <div className="card">
                  <div className="card-body">
                    <h6 className="card-title">Password Requirements</h6>
                    <ul>
                      <li>
                        <small>At least 12 characters long</small>
                      </li>
                      <li>
                        <small>
                          Include uppercase, lowercase, numbers, and symbols
                        </small>
                      </li>
                      <li>
                        <small>Cannot be a commonly used password</small>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <div className="card mb-3">
              <div className="card-body">
                <h5 className="card-title">Security Alerts & Monitoring</h5>
                <small>
                  Configure how you receive security notifications and
                  monitoring
                </small>

                <div className="mt-5 mb-4">
                  <span className="d-flex justify-content-between">
                    <span className="d-flex">
                      <h6 className="me-2">Login Alerts</h6>
                      <small>Recommended</small>
                    </span>
                    <div className="form-check form-switch ">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        id="iconSwitch"
                        aria-label="Toggle"
                      />
                    </div>
                  </span>
                  <small>
                    Get notified of new sign-ins to your account from unknown
                    devices or locations
                  </small>
                </div>

                <hr />

                <div className="mt-4 mb-4">
                  <span className="d-flex justify-content-between">
                    <span className="d-flex">
                      <h6 className="me-2">Suspicious Activity Monitoring</h6>
                      <small>AI-Powered</small>
                    </span>
                    <div className="form-check form-switch ">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        id="iconSwitch"
                        aria-label="Toggle"
                      />
                    </div>
                  </span>
                  <small>
                    Monitor and alert for unusual account activity using machine
                    learning detection
                  </small>
                </div>

                <hr />

                <div className="mt-4 mb-4">
                  <span className="d-flex justify-content-between">
                    <span className="d-flex">
                      <h6 className="me-2">Data Export Notifications</h6>
                    </span>
                    <div className="form-check form-switch ">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        id="iconSwitch"
                        aria-label="Toggle"
                      />
                    </div>
                  </span>
                  <small>
                    Get notified when someone exports data from your account
                  </small>
                </div>
              </div>
            </div>

            <div className="card mb-3">
              <div className="card-body">
                <h6 className="card-title">Security Status: Strong</h6>
                <small>
                  Your account is well protected with 2FA disabled, security
                  monitoring active, and strong password <br/> requirements.<br/>
                  ✓ Two-factor authentication<br/> available
                </small>
                
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default SecurityAndPrivacy;
