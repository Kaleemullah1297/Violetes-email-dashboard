import { Link } from "react-router-dom";
import { useState } from "react";
import "./test.css";
import ProgressBar from "../../components/ProgressBar/ProgressBar";

function Test() {
  const [activeItem, setActiveItem] = useState("general");

  return (
    <>
      {/*Just for the large screen only*/}
      <div className="d-flex d-lg-block d-none account-settings-sidebar">
        <div className="text-color-white" style={{ width: "250px" }}>
          <div className="mb-3 account-settings-sidebar-header">
            <div className="d-flex align-items-baseline ms-4 ">
              <span className="account-settings-sidebar-header-icon">
                <i className="fa-solid fa-circle fa-2xs me-1"></i>
              </span>
              <h5 className="mt-4 m-1 fw-bold">ACCOUNT SECTIONS</h5>
            </div>
            <small className="ms-4">Manage your account settings</small>
          </div>

          {/* Menu */}
          <div>
            <ul
              className="nav py-2 account-settings-list d-flex flex-grow-1 align-items-center ms-3"
              style={{ width: "220px" }}
            >
              <li
                className={`test-li nav-item d-flex align-items-center mb-3 ps-1 w-100 py-2 ${
                  activeItem === "general" ? "active" : ""
                }`}
                onClick={() => setActiveItem("general")}
              >
                <Link
                  to="/account-settings/general"
                  className="nav-link active d-flex align-items-center text-dark"
                >
                  <i className="fa-regular fa-user me-3"></i>
                  <span>
                    <p className="p-0 m-0">General</p>
                    <small>Basic Preferences</small>
                  </span>
                  {activeItem === "general" && (
                    <i className="fa-solid fa-chevron-right fa-xs ms-3"></i>
                  )}
                </Link>
              </li>

              <li
                className={`test-li nav-item d-flex align-items-center mb-3 ps-1 w-100 py-2 ${
                  activeItem === "security" ? "active" : ""
                }`}
                onClick={() => setActiveItem("security")}
              >
                <Link
                  to="/account-settings/security"
                  className="nav-link active d-flex align-items-center text-dark"
                >
                  <i className="bi bi-shield me-3"></i>
                  <span>
                    <p className="p-0 m-0">Security </p>
                    <small className="text-xs">Protection & privacy</small>
                  </span>
                  {activeItem === "security" && (
                    <i className="fa-solid fa-chevron-right fa-xs ms-2"></i>
                  )}
                </Link>
              </li>

              <li
                className={`test-li nav-item d-flex align-items-center mb-3 ps-1 w-100 py-2 ${
                  activeItem === "email" ? "active" : ""
                }`}
                onClick={() => setActiveItem("email")}
              >
                <Link
                  to="/account-settings/email-accounts"
                  className="nav-link active d-flex align-items-center text-dark"
                >
                  <i className="fa-regular fa-envelope me-3"></i>
                  <span>
                    <p className="p-0 m-0">Email Accounts</p>
                    <small>Connected accounts</small>
                  </span>
                  {activeItem === "email" && (
                    <i className="fa-solid fa-chevron-right fa-xs ms-1"></i>
                  )}
                </Link>
              </li>

              <li
                className={`test-li nav-item d-flex align-items-center mb-3 ps-1 w-100 py-2 ${
                  activeItem === "notifications" ? "active" : ""
                }`}
                onClick={() => setActiveItem("notifications")}
              >
                <Link
                  to="/account-settings/notifications"
                  className="nav-link active d-flex align-items-center text-dark"
                >
                  <i className="fa-regular fa-bell me-3"></i>
                  <span>
                    <p className="p-0 m-0">Notifications</p>
                    <small>Alerts and updates</small>
                  </span>
                  {activeItem === "notifications" && (
                    <i className="fa-solid fa-chevron-right fa-xs ms-2"></i>
                  )}
                </Link>
              </li>

              <li
                className={`test-li nav-item d-flex align-items-center mb-3 ps-1 w-100 py-2 ${
                  activeItem === "privacy" ? "active" : ""
                }`}
                onClick={() => setActiveItem("privacy")}
              >
                <Link
                  to="/account-settings/privacy-settings"
                  className="nav-link active d-flex align-items-center text-dark"
                >
                  <i className="bi bi-eye me-3"></i>
                  <span>
                    <p className="p-0 m-0">Privacy</p>
                    <small>visibility settings</small>
                  </span>
                  {activeItem === "privacy" && (
                    <i className="fa-solid fa-chevron-right fa-xs ms-4"></i>
                  )}
                </Link>
              </li>

              <li
                className={`test-li nav-item d-flex align-items-center mb-3 ps-1 w-100 py-2 ${
                  activeItem === "storage" ? "active" : ""
                }`}
                onClick={() => setActiveItem("storage")}
              >
                <Link
                  to="/account-settings/storage"
                  className="nav-link active d-flex align-items-center text-dark"
                >
                  <i className="fa-regular fa-hard-drive me-3"></i>
                  <span>
                    <p className="p-0 m-0">Storage</p>
                    <small className="xs">Usage & management</small>
                  </span>
                  {activeItem === "storage" && (
                    <i className="fa-solid fa-chevron-right fa-xs"></i>
                  )}
                </Link>
              </li>

              <li
                className={`test-li nav-item d-flex align-items-center mb-3 ps-1 w-100 py-2 ${
                  activeItem === "import" ? "active" : ""
                }`}
                onClick={() => setActiveItem("import")}
              >
                <Link
                  to="/account-settings/import/export"
                  className="nav-link active d-flex align-items-center text-dark"
                >
                  <i className="bi bi-download me-3"></i>
                  <span>
                    <p className="p-0 m-0">Import/Export</p>
                    <small>Data migration</small>
                  </span>
                  {activeItem === "import" && (
                    <i className="fa-solid fa-chevron-right fa-xs ms-4"></i>
                  )}
                </Link>
              </li>
            </ul>

            <div className=" card mx-3 account-sttings-sidebar-footer m-4 p-4">
              <div className="card-body m-0 p-0">
                <p className="card-title text-center">Data Storage</p>
                <div className="d-flex justify-content-between mb-2">
                  <small>Storage Used</small>
                  <small>56%</small>
                </div>
                <span className="progress-bar">
                  <ProgressBar />
                </span>
                <div className="d-flex justify-content-between mt-2">
                  <small>8.4 GB</small>
                  <small>15 GB</small>
                </div>
                <hr />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Test;
