import "./General.css";
import { useEffect, useState } from "react";

function Security() {
  const [time, setTime] = useState("time");

  useEffect(() => {
    console.log(time);
  }, [time]);
  return (
    <>
      <div className="px-4 pt-4 mt-md-0 mt-3 me-md-0 me-1 mb-5 pb-5">
        <div className="general_settings">
          <div className="mb-5 py-3 d-flex align-items-center general_settings-header">
            <i className="icon-1 fa-regular fa-user me-3 ms-4"></i>
            <span>
              <h5 className="m-0 p-0 ">General Settings</h5>
              <small>Configure your basic prefereces</small>
            </span>
          </div>
          <div className="mx-sm-4 mx-4 pe-sm-2 pe-0">
            {/* <div className="card mb-5 py-4 security__general-settings">
              <div className="card-body">
                <div className="text-center">
                  <i className="icon-2 fa-regular fa-user  mb-3"></i>
                  <h5 className="card-title fs-3 fw-bold mb-3">
                    General Settings
                  </h5>
                  <small>
                    Configure your basic account preferences and settings to
                    personalize
                    <br /> your Violetis Mail experience
                  </small>
                </div>
              </div>
            </div> */}

            {/*Regional Language Preferences*/}
            <div className="card mb-5 pb-3 language__preference main-card card-1">
              <div className="card-body m-0 p-0 p-4">
                <div className="mb-4                             d-flex align-items-center">
                  <i className="bi bi-globe icon-2 me-2 icon"></i>
                  <span>
                    <h4 className="card-title m-0 fw-bold">
                      Regional & Language Settings
                    </h4>
                    <p>Customize your locale prefereces</p>
                  </span>
                </div>
                <div className="row">
                  <div className="col-md-6 col-12">
                    <label htmlFor="" className="form-label">
                      <h6>Language</h6>
                    </label>
                    <select
                      className="form-select mb-2"
                      value={time}
                      onChange={(e) => setTime(e.target.value)}
                    >
                      <option value={time}>Select Time</option>
                      <option value="1">One</option>
                      <option value="2">Two</option>
                    </select>
                    <small>Interface language for Violetis Mail</small>
                  </div>
                  <div className="col-md-6 col-12">
                    <label htmlFor="" className="form-label ">
                      <h6>Time Zone</h6>
                    </label>
                    <select className="form-select mb-2">
                      <option
                        defaultValue={time}
                        onChange={(event) => setTime(event.target.value)}
                      >
                        Estern Time (UTC-5)
                      </option>
                      <option value="1">One</option>
                      <option value="2">Two</option>
                    </select>
                    <small>
                      Your preferred time zone for emails and calender
                    </small>
                  </div>
                </div>
              </div>
            </div>

            {/*Theme Preferences Reply*/}
            <div className="card mb-5 card-2 pb-3">
              <div className="card-body m-0 p-0">
                <div className="mb-5 d-flex align-items-center">
                  <i className="bi bi-palette me-2 icon"></i>
                  <span>
                    <h5 className="card-title m-0">Apperance & Theme</h5>
                    <small>Customize your visual experience</small>
                  </span>
                </div>

                <div className="col-md-6 col-12 mb-5">
                  <label htmlFor="" className="form-label">
                    <h6>Theme Preference</h6>
                  </label>
                  <select name="" id="" className="form-select mb-2">
                    <option defaultValue="system">💻 System Default</option>
                    <option value="mobile">Mobile</option>
                  </select>
                  <small>
                    Choose how Violetis Mail appears across all your devices
                  </small>
                </div>
                <div className="card adaptive-display-card">
                  <div className="card-body d-flex align-items-baseline">
                    <i className="bi bi-palette  me-2"></i>
                    <span>
                      <h6 className="card-title m-0">Adaptive Display</h6>
                      <small>
                        System Default automatically switches between light and
                        dark modes based on your device settings.
                      </small>
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/*Auto Reply Settings Card*/}
            <div className="card mb-5 main-card pb-3">
              <div className="card-body m-0 p-0">
                <div className="d-flex align-items-center mb-5">
                  <i className="fa-solid fa-robot me-2 icon"></i>
                  <span>
                    <h5 className="card-title m-0">Auto Reply Settings</h5>
                    <small>Automated responses for when you're away</small>
                  </span>
                </div>

                <div className="mb-5">
                  <div className="d-flex align-items-center justify-content-between">
                    <label className="form-label m-0">
                      <h6>Enable Auto Reply</h6>
                    </label>
                    <div className="form-check form-switch ">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        id="iconSwitch"
                        aria-label="Toggle"
                      />
                    </div>
                  </div>
                  <small>
                    Send automatic responses when your're away from your inbox
                  </small>
                </div>

                <div className="card card-end m-0 p-0 smart-auto-reply-card">
                  <div className="card-body d-flex align-items-baseline">
                    <i className="fa-solid fa-robot me-2"></i>
                    <span>
                      <h6 className="card-title m-0">Smart Auto Reply</h6>
                      <small>
                        Auto replies are sent only once per sender and won't
                        respond to newsletters or automated messages.
                      </small>
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

export default Security;
