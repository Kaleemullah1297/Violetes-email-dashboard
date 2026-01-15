import { useState, useRef, useEffect } from "react";
import "./ProfileDropdown.css";
import { NavLink } from "react-router-dom";

function ProfileNavbarDropdown() {
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
          className="nav-link p-0 "
          onClick={() => setOpen(!open)}
          aria-expanded={open}
          aria-controls="profile-icon-dropdown"
        >
          <span className="bg-success rounded-circle color-white p-2 profile-toggle">
            JD
          </span>
        </button>

        <div
          id="profile-icon-dropdown"
          className={`mt-2 profile-icon-dropdown ${open ? "show" : ""}`}
        >
          <div className="dropdown-section">
            <div className="px-2 d-flex align-items-center">
              <span>
                <span className="bg-success rounded-circle color-white p-2 profile-toggle me-2">
                  JD
                </span>
              </span>
              <span>
                <p className="m-0 p-0 fw-medium">John Doe</p>
                <p className="m-0 p-0">JonDoe@gmail.com</p>
              </span>
            </div>
          </div>

          <hr className="m-0 p-0 mt-2"/>
          <div className="dropdown-section m-0 p-0">
            <NavLink
              to="/profile"
              className="dropdown-item d-flex align-items-center"
            >
              <i className="bi bi-person-circle me-2 fs-6"></i>
              <div className="d-flex flex-column">
                <span>Profile Settings</span>
              </div>
            </NavLink>

            <NavLink
              to="/account-settings"
              className="dropdown-item d-flex align-items-center"
            >
              <i className="bi bi-gear me-2 fs-6"></i>
              <div className="d-flex flex-column">
                <span>Account Settings</span>
              </div>
            </NavLink>

            <hr className="m-0 p-0 "/>

            <NavLink
              to="/dashboard"
              className="dropdown-item d-flex align-items-center"
            >
              <i class="fa-solid fa-arrow-right-from-bracket fs-6 me-2"></i>
              <div className="d-flex flex-column">
                <span>Sign Out</span>
              </div>
            </NavLink>
          </div>
        </div>
      </li>
    </>
  );
}

export default ProfileNavbarDropdown;
