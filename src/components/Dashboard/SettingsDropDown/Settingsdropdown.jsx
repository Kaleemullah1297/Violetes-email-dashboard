import { useState, useRef, useEffect } from "react";
import "./SettingsDropdown.css";
//import focus from "../../../assets/camera-focus.png";
import ProgressBar from "../../../components/ProgressBar/ProgressBar.jsx";
import { NavLink } from "react-router-dom";
import HelpAndSupportModel from "../../Help&Support/Help&SupportModel.jsx";
import KeyboardShortcuts from "../../KeyboardShortcuts/KeyboardShortcuts.jsx";
import SendFeedBack from "../../SendFeedBack/SendFeedBack.jsx";

function SettingsDropdown() {
  const [showHelp, setShowHelp] = useState(false);
  const [showKeyboard, setShowKeyboard] = useState(false);
  const [showFeedback, setShowFeedback] = useState(false);
  const ref = useRef(null);

  // Dropdown open/close state only
  const [open, setOpen] = useState(false);

  // Close dropdown on outside click
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (ref.current && !ref.current.contains(e.target)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Close dropdown on Escape key
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <>
      <li className="nav-item me-md-4 me-2 position-relative" ref={ref}>
        <button
          type="button"
          className="nav-link p-0 settings-toggle"
          onClick={() => setOpen(!open)}
          aria-expanded={open}
          aria-controls="settings-dropdown"
        >
          <i className="bi bi-gear"></i>
        </button>

        <div
          id="settings-dropdown"
          className={`mt-2 settings-dropdown ${open ? "show" : ""}`}
        >
          {/* QUICK SETTINGS HEADER */}
          <div className="dropdown-section">
            <div className="px-2">
              <span className="d-flex align-items-baseline mb-1">
                <i className="bi bi-gear me-2 gear-icon"></i>
                <h6 className="dropdown-title m-0">Quick Settings</h6>
              </span>
              <small className="text-muted d-block mb-2">
                Manage your preferences and appearance
              </small>
            </div>

            <hr />

            {/* SWITCH ITEMS */}
            <div className="form-check form-switch d-flex justify-content-between m-0 p-0 px-2">
              <div className="d-flex">
                <i className="bi bi-palette me-2"></i>
                <span className="d-flex flex-column">
                  <label htmlFor="" className="form-check-label">
                    Dark Mode
                  </label>
                </span>
              </div>
              <input
                className="form-check-input"
                type="checkbox"
                id="darkModeSwitch"
                aria-label="Toggle"
              />
            </div>

            <hr />

            <div className="form-check form-switch d-flex justify-content-between m-0 p-0 px-2">
              <div className="d-flex">
                <i className="bi bi-arrows-fullscreen me-2"></i>
                <span className="d-flex flex-column">
                  <label htmlFor="" className="form-check-label">
                    Focus Mode
                  </label>
                  <small>Hide distractions for concentrated work</small>
                </span>
              </div>
              <input
                className="form-check-input"
                type="checkbox"
                id="focusModeSwitch"
                aria-label="Toggle"
              />
            </div>

            <hr />

            <div className="form-check form-switch d-flex justify-content-between m-0 p-0 px-2">
              <div className="d-flex">
                <i className="bi bi-shield icon-1 me-2"></i>
                <span className="d-flex flex-column">
                  <label htmlFor="" className="form-check-label">
                    AI Hub
                  </label>
                  <small>Show Violet AI assistant panel</small>
                </span>
              </div>
              <input
                className="form-check-input"
                type="checkbox"
                id="AiHubSwitch"
                aria-label="Toggle"
              />
            </div>

            <hr />

            <div className="form-check form-switch d-flex justify-content-between m-0 p-0 px-2">
              <div className="d-flex">
                <i className="bi bi-bell me-2"></i>
                <span className="d-flex flex-column">
                  <label htmlFor="" className="form-check-label">
                    Desktop Notifications
                  </label>
                  <small>Get notified of new emails</small>
                </span>
              </div>
              <input
                className="form-check-input"
                type="checkbox"
                id="desktopNotificationSwitch"
                aria-label="Toggle"
              />
            </div>

            <hr />

            <div className="form-check form-switch d-flex justify-content-between m-0 p-0 px-2">
              <div className="d-flex">
                <i className="bi bi-robot me-2"></i>
                <span className="d-flex flex-column">
                  <label htmlFor="" className="form-check-label">
                    Auto Reply
                  </label>
                  <small>Currently inactive</small>
                </span>
              </div>
              <input
                className="form-check-input"
                type="checkbox"
                id="autoReplySwitch"
                aria-label="Toggle"
              />
            </div>

            <hr />

            <div className="justify-content-between m-0 p-0 px-2">
              <div className="d-flex justify-content-between mb-2">
                <span className="d-flex">
                  <i className="bi bi-shield icon-1 me-2"></i>
                  <label htmlFor="" className="form-check-label">
                    Storage
                  </label>
                </span>
                <small>56%</small>
              </div>
              <ProgressBar />
              <div className="d-flex justify-content-between mt-2">
                <small>8.4 GB used</small>
                <small>15 GB total</small>
              </div>
            </div>

            <hr />

            <div className="px-2">
              <span className="d-flex justify-content-between">
                <label htmlFor="">Security Status</label>
                <small>Good</small>
              </span>
              <small>Enable 2FA for better security</small>
            </div>
          </div>

          <hr className="m-0 p-0" />

          {/* ACCOUNT */}
          <div className="dropdown-section m-0 p-0">
            <NavLink
              to="/account-settings"
              className="dropdown-item d-flex align-items-center"
            >
              <i className="fa-regular fa-user me-2 fs-6"></i>
              <div className="d-flex flex-column">
                <span className="fw-medium">Account Settings</span>
                <small className="text-muted">
                  Manage your account and security
                </small>
              </div>
            </NavLink>

            <NavLink
              to="/profile"
              className="dropdown-item d-flex align-items-center"
            >
              <i className="bi bi-person-circle  me-2 fs-6"></i>
              <div className="d-flex flex-column">
                <span className="fw-medium">Profile Settings</span>
                <small className="text-muted">
                  Update your personal information
                </small>
              </div>
            </NavLink>
          </div>

          <hr className="m-0 p-0 pb-1" />

          <div>
            <button
              type="button"
              className="dropdown-item d-flex align-items-baseline"
              onClick={() => {
                setShowKeyboard(true);
                setOpen(false); // close dropdown
              }}
            >
              <i className="fa-regular fa-keyboard me-2 fs-6"></i>
              <p className="m-0 p-0">Keyboard Shortcuts</p>
            </button>

            <button
              type="button"
              className="dropdown-item d-flex align-items-baseline"
              onClick={() => {
                setShowHelp(true);
                setOpen(false); // optional: close dropdown
              }}
            >
              <i className="fa-regular fa-user me-2 fs-6"></i>
              <p className="m-0 p-0">Help & Support</p>
            </button>

            <button
              type="button"
              className="dropdown-item d-flex align-items-baseline"
              onClick={() => {
                setShowFeedback(true);
                setOpen(false); // close dropdown
              }}
            >
              <i className="fa-regular fa-envelope me-2 fs-6"></i>
              <p className="m-0 p-0">Send Feedback</p>
            </button>
          </div>

          <hr />

          <small className="text-danger px-2">Violetis Mail</small>
        </div>
      </li>
      {showHelp && (
        <HelpAndSupportModel
          show={showHelp}
          onClose={() => setShowHelp(false)}
        />
      )}

      {showKeyboard && (
        <KeyboardShortcuts
          show={showKeyboard}
          onClose={() => setShowKeyboard(false)}
        />
      )}

      {showFeedback && (
        <SendFeedBack
          show={showFeedback}
          onClose={() => setShowFeedback(false)}
        />
      )}
    </>
  );
}

export default SettingsDropdown;
