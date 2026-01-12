import "./Security.css";

function SecurityAndPrivacy() {
  return (
    <>
      <div className="px-4 pt-4 mt-md-0 mt-3 me-md-0 me-3 mb-5 pb-5">
        <div className="div security-settings">
          <div className="mb-4 py-3 d-flex align-items-center security-settings__header">
            <i className="bi bi-shield icon-1 fs-5 me-3 ms-4"></i>
            <span>
              <h5 className="m-0 p-0 ">Security & Privacy</h5>
              <small>Protect your accounts with advanced security</small>
            </span>
          </div>

          <div className="mx-4">
            <div className="card mb-3 py-4">
              <div className="card-body m-0 p-0">
                <span className="d-flex justify-content-between">
                  <span className="d-flex">
                    <i className="bi bi-shield icon-1 me-2"></i>
                    <h5 className="card-title p-0 m-0">
                      Two-Factor Authenticaion
                    </h5>
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
                <small className="card-description">
                  Add an extra layer of security to your account with 2FA
                </small>
              </div>
            </div>

            <div className="card mb-3">
              <div className="card-body">
                <div className="mb-4">
                  <h5 className="card-title m-0 p-0">Password & recovery</h5>
                  <small className="card-description">
                    Manage your account password and recovery options
                  </small>
                </div>

                <div className="card mb-3 py-1">
                  <div className="card-body m-0 p-0">
                    <h6 className="card-title m-0 p-0">Change Password</h6>
                    <small>Update your current password</small>
                  </div>
                </div>

                <div className="card mb-3 py-1">
                  <div className="card-body m-0 p-0">
                    <h6 className="card-title m-0 p-0">Recovery Options</h6>
                    <small>Set backup email and phone number</small>
                  </div>
                </div>

                <div className="card password-requirements-card py-2">
                  <div className="card-body m-0 p-0">
                    <p className="card-title m-0 p-0">Password Requirements:</p>
                    <small className="d-block">
                      • At least 12 characters long
                    </small>
                    <small className="d-block">
                      • Include uppercase, lowercase, numbers, and symbols
                    </small>
                    <small className="d-block">
                      • Cannot be a commonly used password
                    </small>
                    {/* <ul>
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
                    </ul> */}
                  </div>
                </div>
              </div>
            </div>

            <div className="card mb-3 security-alerts-card">
              <div className="card-body">
                <h5 className="card-title m-0 p-0">
                  Security Alerts & Monitoring
                </h5>
                <small>
                  Configure how you receive security notifications and
                  monitoring
                </small>

                <div className="mt-5 mb-4">
                  <span className="d-flex justify-content-between">
                    <span className="d-flex">
                      <h6 className="me-2">Login Alerts</h6>
                      <small className="tag m-0 p-0">Recommended</small>
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
                      <h6 className="me-2 m-0 p-0">
                        Suspicious Activity Monitoring
                      </h6>
                      <small className="m-0 p-0 tag ">AI-Powered</small>
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

            <div className="card mb-3 footer py-2">
              <div className="card-body d-flex m-0 p-0">
                <i className="bi bi-shield icon-1 fs-5 me-3"></i>
                <span>
                  <h6 className="card-title m-0 p-0">Security Status: Strong</h6>
                  <small>
                    Your account is well protected with 2FA disabled, security
                    monitoring active, and strong password <br /> requirements.
                    <br />
                    ✓ Two-factor authentication
                    <br /> available
                  </small>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default SecurityAndPrivacy;
