import "./profile.css";
import reactLogo from "../../../assets/react.svg";
import { Link } from "react-router-dom";

function ProfileSettingsSidebar() {
  return (
    <>
      <div className="col-3 sidebar-main-div justify-content-center">
        {/* SIDEBAR TOP SECTION */}
        <div className="sidebar-top">
          <span className="d-flex">
            <i className="bi bi-circle-fill me-3"></i>
            <p className="sidebar-top-p1 fw-bold lh-">PROFILE SECTIONS</p>
          </span>
          <small className="sidebar-top-p2">
            Manage your professional profile
          </small>
        </div>

        {/* SIDEBAR LINKS */}
        <nav className="nav">
          <ul className="list-unstyled">
            <li className="nav-item mb-2">
              <Link to="/profile/personal-info" className="nav-link d-flex">
                <span className=" align-self-center me-4">
                  <i className="bi bi-person-circle"></i>
                </span>
                <span>
                  <h5 className="sidebar-h5">Personal Info</h5>
                  <small className="sidebar-para-2">
                    Basic details & avator
                  </small>
                </span>
              </Link>
            </li>

            <li className="nav-item">
              <Link to="/profile/contact-details" className="nav-link d-flex">
                <span className=" align-self-center me-4">
                  <i className="bi bi-telephone"></i>
                </span>
                <span>
                  <h5 className="sidebar-h5">Contact Details</h5>
                  <small className="sidebar-para-2">
                    Phone & working hours
                  </small>
                </span>
              </Link>
            </li>

            <li className="nav-item">
              <Link to="/profile/work-information" className="nav-link d-flex">
                <span className=" align-self-center me-4">
                  <i className="fa-solid fa-user"></i>
                </span>
                <span>
                  <h5 className="sidebar-h5">Work Information</h5>
                  <small className="sidebar-para-2">Job title & company</small>
                </span>
              </Link>
            </li>

            <li className="nav-item">
              <Link to="/profile/display-settings" className="nav-link d-flex">
                <span className=" align-self-center me-4">
                  <i className="fa-solid fa-user"></i>
                </span>
                <span>
                  <h5 className="sidebar-h5">Display Settings</h5>
                  <small className="sidebar-para-2">
                    Appearance Preferences
                  </small>
                </span>
              </Link>
            </li>

            <li className="nav-item">
              <Link to="/profile/email-signatures" className="nav-link d-flex">
                <span className=" align-self-center me-4">
                  <i className="bi bi-pen"></i>
                </span>
                <span>
                  <h5 className="sidebar-h5">Email Signatures</h5>
                  <small className="sidebar-para-2">Signature management</small>
                </span>
              </Link>
            </li>

            <li className="nav-item">
              <Link to="/profile/social-links" className="nav-link d-flex">
                <span className=" align-self-center me-4">
                  <i className="bi bi-globe2"></i>
                </span>
                <span>
                  <h5 className="sidebar-h5">Socail Links</h5>
                  <small className="sidebar-para-2">
                    Professional Networks
                  </small>
                </span>
              </Link>
            </li>
          </ul>
        </nav>

        {/* CARD  */}
        <div className="mt-4">
          <div className="row d-flex justify-content-center">
            <div className="card">
              {/*CARD IMAGE */}

              <img
                src={reactLogo}
                alt=""
                className="card-img-top mt-4"
                id="card-img"
              />

              {/*CARD BODY */}

              <div className="card-body  text-center">
                <h5>John Doe</h5>
                <p>Senior Manager</p>
                <p>johnDoe@gmail.com</p>
                <div>
                  <p>Available: 09:00-17:00</p>
                  <p>5 working days/week</p>
                </div>
                <hr />
                <p>Profile 83% complete</p>

                {/* CARD LAST TEXT*/}

                <div className="d-flex justify-content-between">
                  <span>
                    <p className="text-center">Signatures</p>
                    <p className="text-center">3</p>
                  </span>
                  <span>
                    <p className="text-center">Social Links</p>
                    <p className="text-center">0</p>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ProfileSettingsSidebar;
