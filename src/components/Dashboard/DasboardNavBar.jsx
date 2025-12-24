import UserProfileDropdown from "./USerProfileDropDown/UserProfile";
import focus from "../../assets/camera-focus.png";
import "./DashboardNavBar.css";

function DashboardNavBar() {
  return (
    <>
      <div className="navbar navbar-expand-md dashboard-navbar container-fluid">
        <ul className="nav-bar list-unstyled d-flex m-0 p-0 py-1 d-flex align-items-center">
          <li className="nav-item">
            <UserProfileDropdown />
          </li>

          <li className="nav-item">
            <div className="d-flex align-items-center me-4">
              <input
                type="text"
                className="form-control me-2"
                placeholder="Search..."
              />
              <button className="btn filter-button d-flex align-items-center">
                <i className="bi bi-funnel me-2"></i>
                Filters
              </button>
            </div>
          </li>

          <li className="nav-item me-3">
            <button className="btn mail-button " type="button">
              <i className="fa-regular fa-envelope me-2"></i>New Mail
            </button>
          </li>

          <li className="nav-item me-3 ">
            <button className="btn focus">
              <img
                src={focus}
                alt="View"
                width="18"
                height="18"
                className="me-3"
              />
              Focus Mode
            </button>
          </li>

          <li className="nav-item me-3">
            <a href="" className="navlink">
              <i class="bi bi-bell fs-5"></i>
            </a>
          </li>

          <li className="nav-item me-3">
            <a href="" className="nav-link">
              <i class="bi bi-gear fs-5"></i>
            </a>
          </li>

          <li className="nav-item">
            <a href="" className="nav-link">
              <img
                src={focus}
                alt="profile"
                className="img-fluid  profile-icon rounded-circle"
              />
            </a>
          </li>
        </ul>
      </div>
    </>
  );
}

export default DashboardNavBar;
