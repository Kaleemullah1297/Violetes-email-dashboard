import "./Notifcations.css";
import "../privacySettings/PrivacySettings.css";

function Notifications() {
  return (
    <>
      <div className="card pb-5">
        <div className="div notification-settings">
          <div className="mb-4 py-3 d-flex align-items-center notification-settings__header">
            <i className="bi bi-eye icon-1 fs-5 me-3 ms-4"></i>
            <span>
              <h5 className="m-0 p-0 ">Notification Preferences</h5>
              <small>Choose how you receive alerts</small>
            </span>
          </div>

          <div className="ms-4 me-5">
            <div className="mb-5">
              <h5>Notification Preferences</h5>
              <small>
                Choose how and when you want to be notified about new emails
              </small>
            </div>

            <div className="d-flex justify-content-between mb-4">
              <div>
                <label htmlFor="" className="form-label d-block m-0 p-0">
                  <h6>Email Notifications</h6>
                </label>
                <small className=" m-0 p-0">
                  Receive notifications via email
                </small>
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
                  <h6>Desktop Notifications</h6>
                </label>
                <small className=" m-0 p-0">Show browser notifications</small>
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
                  <h6>Mobile Push Notifications</h6>
                </label>
                <small className=" m-0 p-0">
                  Receive push notifications on mobile
                </small>
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
                  <h6>Sound Notifications</h6>
                </label>
                <small className=" m-0 p-0">Play sound for new messages</small>
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
          </div>
        </div>
      </div>
    </>
  );
}

export default Notifications;
