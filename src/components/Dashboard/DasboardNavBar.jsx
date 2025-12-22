import UserProfileDropdown from "./USerProfileDropDown/UserProfile";
import "./DashboardNavBar.css";

function DashboardNavBar() {
  return (
    <>
      <div className="container-fluid dashboard-navbar">
        <ul className="nav-bar list-unstyled d-flex m-0 p-0 py-2 d-flex align-items-center">
          <li className="nav-item">
            <UserProfileDropdown />
          </li>
          <li className="nav-item">
            <div className="d-flex align-items-center me-5">
              <input type="text" className="form-control me-2" />
              <button className="btn filter-button d-flex">
                <i class="bi bi-funnel me-2"></i>Filters
              </button>
            </div>
          </li>
          <li className="nav-item">
            <button className="btn mail-button">
              <i class="bi bi-funnel me-2"></i>New Mail
            </button>
          </li>
          <li className="nav-item">
            <button className="btn"></button>
          </li>
          <li className="nav-item">
            <a href="" className="navlink">
              <i class="bi bi-bell fs-5"></i>
            </a>
          </li>
          <li>
            <a href="" className="nav-link">
              <i class="bi bi-gear fs-5"></i>
            </a>
          </li>
          <li className="nav-item">
            <a href="" className="nav-link  ">
              <img
                src=""
                alt=""
                className="rounded-circle"
              />
            </a>
          </li>
        </ul>
      </div>
    </>
  );
}

export default DashboardNavBar;
