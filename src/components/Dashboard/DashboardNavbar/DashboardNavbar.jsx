import UserProfileDropdown from "../USerProfileDropDown/UserProfile";
import "./DashboardNavbar.css";
import focus from "../../../assets/camera-focus.png";
import SettingsDropdown from "../../Dashboard/SettingsDropDown/Settingsdropdown";
import { useState } from "react";
import ComposeEmail from "../../ComposeEmail/ComposeEmail";
import ProfileNavbarDropdown from "../ProfileDropDown/ProfileDropDown";
import NotificationsDropdown from "../Notification/NotificationDropDown";
import FilterDropdown from "../FilterDropDown/FilterDropDown";

function DashboardNavbar({ onHamburgerClick }) {
  const [showCompose, setShowCompose] = useState(false);

  return (
    <div>
      <div className="container-fluid m-0 p-0">
        <nav className="navbar p-0 py-2">
          <ul className="navbar-nav d-flex flex-row p-0 m-0 align-items-center w-100 dashboard-navbar">
            {/* Hamburger for md and sm */}
            {/* Hamburger for md and sm */}
            <li className="nav-item d-lg-none me-3 ms-3">
              <i
                className="bi bi-list hamburger-icon"
                onClick={onHamburgerClick}
                style={{ fontSize: "1.5rem", cursor: "pointer" }}
              ></i>
            </li>

            <li className="nav-item">
              <UserProfileDropdown />
            </li>

            <input
              type="search"
              className="form-control me-2 flex-grow-1 search-input"
              placeholder="Smart Finder-Search"
            />

            <FilterDropdown />

            <li className="nav-item me-3">
              <button
                className="btn btn-success new-mail-button d-flex align-items-center"
                onClick={() => setShowCompose(true)}
              >
                <i className="bi bi-envelope me-2"></i>
                <span className="d-sm-block d-none">New Mail</span>
              </button>
            </li>

            <li className="nav-item me-3 d-md-inline d-none focus-button">
              <a
                href=""
                className="nav-link mock-button d-flex align-items-center"
              >
                <img
                  src={focus}
                  alt="View"
                  width="18"
                  height="18"
                  className="me-2"
                />
                Focuse Mode
              </a>
            </li>

            <NotificationsDropdown />
            <SettingsDropdown />
          </ul>
        </nav>
      </div>

      {/* Modal */}
      {showCompose && <ComposeEmail onClose={() => setShowCompose(false)} />}
    </div>
  );
}

export default DashboardNavbar;
