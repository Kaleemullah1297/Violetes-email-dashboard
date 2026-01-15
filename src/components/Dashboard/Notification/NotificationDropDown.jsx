import { useState, useRef, useEffect } from "react";
import "./NotificationDropDown.css";

function NotificationsDropdown() {
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
          <i className="bi bi-bell"></i>
        </button>

        <div
          id="settings-dropdown"
          className={`mt-2 settings-dropdown ${open ? "show" : ""}`}
        >
          {/* QUICK SETTINGS HEADER */}
          <div className="dropdown-section">
            <div className="px-2">
              <h6 className="dropdown-title m-0">Notifications</h6>
            </div>
            <hr />

            <div className="px-2 d-flex align-items-baseline">
              <span>
                <i className="fa fa-circle me-2 notification-circle-icon"></i>
              </span>
              <span>
                <h6>New email from Sarah Chen</h6>
                <small>Q4 Marketing Campaign Review</small>
                <small className="d-block">2 minutes ago</small>
              </span>
            </div>
          </div>
        </div>
      </li>
    </>
  );
}

export default NotificationsDropdown;
