import "./privacySettings.css";

function PrivacySettings() {
  return (
    <>
      <div className="card pb-5">
        <div className="div privacy-settings">
          <div className="mb-4 py-3 d-flex align-items-center privacy-settings__header">
            <i class="bi bi-eye icon-1 fs-5 me-3 ms-4"></i>
            <span>
              <h5 className="m-0 p-0 ">Privacy Settings</h5>
              <small>Control your information visibility</small>
            </span>
          </div>

          <div className="ms-4">
            <div className="mb-5">
              <h5>Privacy Settings</h5>
              <small>
                Control what information you share and how others can see your
                activity
              </small>
            </div>

            <div className="d-flex justify-content-between mb-4">
              <div>
                <label htmlFor="" className="form-label d-block m-0 p-0">
                  Online Status
                </label>
                <small className=" m-0 p-0">Show when you're online</small>
              </div>
              <div className="form-check form-switch ">
                <input
                  className="form-check-input"
                  type="checkbox"
                  id="iconSwitch"
                  aria-label="Toggle"
                />
              </div>
            </div>

            <hr className="p-2" />

            <div className="d-flex justify-content-between mb-4">
              <div>
                <label htmlFor="" className="form-label d-block m-0 p-0">
                  Online Status
                </label>
                <small className=" m-0 p-0">Show when you're online</small>
              </div>
              <div className="form-check form-switch ">
                <input
                  className="form-check-input"
                  type="checkbox"
                  id="iconSwitch"
                  aria-label="Toggle"
                />
              </div>
            </div>

            <hr className="p-2" />

            <div className="d-flex justify-content-between mb-4">
              <div>
                <label htmlFor="" className="form-label d-block m-0 p-0">
                  Online Status
                </label>
                <small className=" m-0 p-0">Show when you're online</small>
              </div>
              <div className="form-check form-switch ">
                <input
                  className="form-check-input"
                  type="checkbox"
                  id="iconSwitch"
                  aria-label="Toggle"
                />
              </div>
            </div>

            <hr className="p-2" />
            <div className="mb-5">
              <div>
                <label htmlFor="" className="form-label m-0">
                  Profile Visibility
                </label>
              </div>
              <small>Let senders know when you read their messages</small>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default PrivacySettings;
