import UserProfileDropdown from "../USerProfileDropDown/UserProfile";
import "./DashboardNavbar.css";
import focus from "../../../assets/camera-focus.png";
import SettingsDropdown from "../../sideBar/SettingDropDown/Settingsdropdown";
import { useState } from "react";
import ComposeEmail from "../../ComposeEmail/ComposeEmail";

function DashboardNavbar() {
  const [showCompose, setShowCompose] = useState(false);

  return(
    <div>
      <div className="container-fluid">
        <nav className="navbar p-0 py-1">
          <ul className="navbar-nav d-flex flex-row mock p-0 m-0 align-items-center w-100">
            {/* <li className="nav-item me-2">
              <a className="nav-link d-flex bg-danger p-0 px-2 align-items-center">
                <span className="bg-success rounded-circle color-white p-2 me-2">
                  JD
                </span>
                <span className="d-flex flex-column">
                  <small className="lh-1">Kaleemullah</small>
                <small className="lh-1">ku6@gmail.com</small>
                </span>
              </a>
            </li> */}

            <li className="nav-item">
              <UserProfileDropdown />
            </li>

            <li className="nav-item d-flex align-items-center flex-grow-1">
              <input type="search" className="form-control me-2 flex-grow-1" />
              <button className="btn btn-outline-success d-flex flex-shrink-0">
                <i className="bi bi-funnel me-2"></i>
                <span className="d-none d-md-inline">Filters</span>
              </button>
            </li>

            <li className="nav-item ms-4 me-3">
              <button
                className="btn btn-success mock-button d-flex align-items-center"
                onClick={() => setShowCompose(true)}
              >
                <i className="bi bi-envelope me-2"></i>
                <span className="d-sm-block d-none">New Mail</span>
              </button>
            </li>

            <li className="nav-item me-3 d-md-inline d-none">
              <a href="" className="nav-link mock-button">
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

            <li className="nav-item me-4">
              <a href="" className="nav-link">
                <i className="bi bi-bell"></i>
              </a>
            </li>

            <SettingsDropdown />

            {/* <li className="nav-item me-md-4 me-2 dropdown">
              <button
                className="nav-link dropdown-toggle p-0"
                data-bs-toggle="dropdown"
                aria-expanded="false"
                type="button"
              >
                <i className="bi bi-gear"></i>
              </button>

              <ul className="dropdown-menu dropdown-menu-end">
                <li>
                  <button className="dropdown-item">Account Settings</button>
                </li>
                <li>
                  <button className="dropdown-item">Preferences</button>
                </li>
                <li>
                  <hr className="dropdown-divider" />
                </li>
                <li>
                  <button className="dropdown-item text-danger">Logout</button>
                </li>
              </ul>
            </li> */}

            <li className="nav-item ms-2 ">
              <a href="" className="nav-link">
                <span className="bg-success rounded-circle color-white p-2">
                  JD
                </span>
              </a>
            </li>
          </ul>
        </nav>
      </div>
      {/* Modal */}
      {showCompose && <ComposeEmail onClose={() => setShowCompose(false)} />}
    </div>
  );
}

export default DashboardNavbar;
