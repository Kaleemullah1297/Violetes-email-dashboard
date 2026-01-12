import { Link } from "react-router-dom";
import { useState } from "react";
import "../../../components/AccountSettings/AccountSettingsSidebar/AccountSettingsSidebar";
//import ProgressBar from "../../ProgressBar/ProgressBar";
import "./profile.css";
import SidebarProfileCard from "../card/SidebarProfileCard";

function ProfileSettingsSidebar() {
  const [activeItem, setActiveItem] = useState("general");

  return (
    <>
      {/*Just for the large screen only*/}
      <div className="d-flex d-md-block d-none  account-settings-sidebar pb-5">
        <div className="text-color-white" style={{ width: "250px" }}>
          <div className="mb-3 account-settings-sidebar-header">
            <div className="d-flex align-items-baseline ms-4 ">
              <span className="account-settings-sidebar-header-icon">
                <i className="fa-solid fa-circle fa-2xs me-1"></i>
              </span>
              <h5 className="mt-4 m-1 fw-bold">PROFILE SECTIONS</h5>
            </div>
            <small className="ms-4">Manage your professional profile</small>
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
                  to="/profile/personal-info"
                  className="nav-link active d-flex align-items-center text-dark"
                >
                  <i className="fa-regular fa-user me-3"></i>
                  <span className="me-auto">
                    <p className="p-0 m-0">Personal Info</p>
                    <small className="sidebar-subtitle">Basic details & avator</small>
                  </span>
                  {activeItem === "general" && (
                    <i className="fa-solid fa-chevron-right fa-xs "></i>
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
                  to="/profile/contact-details"
                  className="nav-link active d-flex align-items-center text-dark"
                >
                  <i className="bi bi-telephone me-3"></i>
                  <span>
                    <p className="p-0 m-0">Contact Details </p>
                    <small className="text-xs sidebar-subtitle">Phone & Working hours</small>
                  </span>
                  {activeItem === "security" && (
                    <i className="fa-solid fa-chevron-right fa-xs "></i>
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
                  to="/profile/work-information"
                  className="nav-link active d-flex align-items-center text-dark"
                >
                  <i className="bi bi-building me-3"></i>
                  <span>
                    <p className="p-0 m-0">Work Information</p>
                    <small className="sidebar-subtitle">Job title & company</small>
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
                  to="/profile/display-settings"
                  className="nav-link active d-flex align-items-center text-dark"
                >
                  <i className="bi bi-palette me-3"></i>
                  <span>
                    <p className="p-0 m-0">Display Settings</p>
                    <small className="sidebar-subtitle">Appearence prefrences</small>
                  </span>
                  {activeItem === "notifications" && (
                    <i className="fa-solid fa-chevron-right fa-xs"></i>
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
                  to="/profile/email-signatures"
                  className="nav-link active d-flex align-items-center text-dark"
                >
                  <i className="bi bi-eye me-3"></i>
                  <span>
                    <p className="p-0 m-0">Email Signatures</p>
                    <small className="sidebar-subtitle">Signature management</small>
                  </span>
                  {activeItem === "privacy" && (
                    <i className="fa-solid fa-chevron-right fa-xs"></i>
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
                  to="/profile/social-links"
                  className="nav-link active d-flex align-items-center text-dark"
                >
                  <i className="bi bi-globe fs-5 me-3"></i>
                  <span>
                    <p className="p-0 m-0">Social Links</p>
                    <small className="sidebar-subtitle">Professional networks</small>
                  </span>
                  {activeItem === "storage" && (
                    <i className="fa-solid fa-chevron-right fa-xs"></i>
                  )}
                </Link>
              </li>
            </ul>

            <SidebarProfileCard/>
          </div>
        </div>
      </div>
    </>
  );
}

export default ProfileSettingsSidebar;
