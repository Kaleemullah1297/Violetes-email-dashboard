import "./displaySetting.css";

function DisplaySettings() {
  return (
    <>
      <div className="display-settings px-5 pb-5 m-0 p-0 card">

        {/*Card Header*/}
        <div className="display-settings_header px-5 mb-2">
          <h5 className="card-title">Display Settings</h5>
          <p>Customize your interface and appearance</p>
        </div>

        <h5 className="card-title">Display Settings</h5>
        <p>Customize how your profile and emails appear to others</p>
        <hr className="mb-5" />

        {/*Profile card*/}
        <div className="display-settings_card card mb-5">
          <div className="card-body mb-4">
            {/*Second card title*/}
            <div className="d-flex">
              <i className="bi bi-palette me-2"></i>
              <h5 className="card-title mb-5">Profile Visibility</h5>
            </div>

            {/*Body 1*/}
            <span className="mb-5">
              <div className=" d-flex justify-content-between">
                <h6 className="card-subtitle mb-2 text-muted">Show avator</h6>
                <div className="form-check form-switch fs-5">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    id="notificationsSwitch"
                  />
                </div>
              </div>
              <small className="mb-5">
                Display your profile picture in emails and conversations
              </small>
            </span>
            <hr className="space-large" />
            <div className=" d-flex justify-content-between">
              <h6 className="card-subtitle mb-2 text-muted">Show Online Status</h6>
              <div className="form-check form-switch fs-5">
                <input
                  className="form-check-input"
                  type="checkbox"
                  id="notificationsSwitch"
                />
              </div>
            </div>
            <small>Let others see when you're online and available</small>
          </div>
        </div>

        {/*Interface card*/}
        <div className="display-settings_card card mb-2">
          <div className="card-body mb-5">
            <div className="d-flex">
              <i className="bi bi-eye me-2"></i>
              <h5 className="card-title mb-5">Interface Preferences</h5>
            </div>
            <div className=" d-flex justify-content-between">
              <h6 className="card-subtitle mb-2 text-muted">Compact View</h6>
              <div className="form-check form-switch fs-5">
                <input
                  className="form-check-input"
                  type="checkbox"
                  id="notificationsSwitch"
                />
              </div>
            </div>
            <small>
              Show more emails in less space for better productivity
            </small>
            <div className="mt-4 ">
              <hr className="space-large" />
            </div>
            <div className=" d-flex justify-content-between">
              <h6 className="card-subtitle mb-2 text-muted">Preview Pane</h6>
              <div className="form-check form-switch fs-5">
                <input
                  className="form-check-input"
                  type="checkbox"
                  id="notificationsSwitch"
                />
              </div>
            </div>
            <small>
              Show email preview on the right side for quick reading
            </small>
          </div>
        </div>
      </div>
    </>
  );
}

export default DisplaySettings;
