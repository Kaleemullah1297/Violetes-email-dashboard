import { useContext } from "react";
import { NavLink } from "react-router-dom";
import "./Mainsidebar.css";
import logo from "../../assets/logo.png";
import ProgressBar from "../ProgressBar/ProgressBar";
import DarkThemeContext from "../../context/DarkThemeContext";

function MainSidebar() {
  const { theme, toggleTheme } = useContext(DarkThemeContext);
  return (
    <>
      <div className="main-sidebar d-lg-block d-none">
        <div className="d-flex justify-content-center p-4">
          <img src={logo} alt="Main logo" className="img-fluid w-75" />
        </div>

        <div className="main-sidebar-links">
          <ul className="nav  mx-1">
            <li className="nav-item w-100 mb-1 mt-2">
              <NavLink
                to="/dashboard/inbox"
                className="nav-link d-flex flex-row align-items-baseline"
              >
                <i className="fa-regular fa-envelope me-3"></i>
                <span className="span-1">Inbox</span>
                <span className=" ms-auto span-2">12</span>
              </NavLink>
            </li>

            <li className="nav-item w-100 mb-1">
              <NavLink
                to="/dashboard/sent-items"
                className="nav-link d-flex flex-row align-items-baseline"
              >
                <i className="fa-regular fa-paper-plane me-3"></i>
                <span className="span-1">Sent Items</span>
                <span className=" ms-auto span-2">12</span>
              </NavLink>
            </li>

            <li className="nav-item w-100 mb-1">
              <NavLink
                to="/dashboard/drafts"
                className="nav-link d-flex flex-row align-items-baseline"
              >
                <i className="fa-regular fa-envelope me-3"></i>
                <span className="span-1">Drafts</span>
                <span className=" ms-auto span-2">12</span>
              </NavLink>
            </li>

            <li className="nav-item w-100 mb-1">
              <NavLink
                to="/dashboard/deleted-items"
                className="nav-link d-flex flex-row align-items-baseline"
              >
                <i className="fa-regular fa-trash-can me-3"></i>
                <span className="span-1">Deleted Items</span>
                <span className=" ms-auto span-2">12</span>
              </NavLink>
            </li>

            <li className="nav-item w-100 mb-1">
              <NavLink
                to="/dashboard/archieve"
                className="nav-link d-flex flex-row align-items-baseline"
              >
                <i className="bi bi-archive me-3"></i>
                <span className="span-1">Archieve</span>
                <span className=" ms-auto span-2">12</span>
              </NavLink>
            </li>

            <li className="nav-item w-100 mb-1">
              <NavLink
                to="/dashboard/junk-emails"
                className="nav-link d-flex flex-row align-items-baseline"
              >
                <i className="fa-regular fa-flag me-3"></i>
                <span className="span-1">Junk Emails</span>
                <span className=" ms-auto span-2">12</span>
              </NavLink>
            </li>

            {/*Calender*/}

            <li className="nav-item w-100 mb-1">
              <NavLink
                to="/dashboard/calender"
                href="#"
                className="nav-link d-flex flex-row align-items-baseline"
              >
                <i className="fa-regular fa-calendar me-3"></i>
                <span className="span-1">Calender</span>
                <span className=" ms-auto span-2">12</span>
              </NavLink>
            </li>

            <li className="nav-item w-100 mb-1">
              <NavLink
                to="/dashboard/people"
                className="nav-link d-flex flex-row align-items-baseline"
              >
                <i className="bi bi-people me-3"></i>
                <span className="span-1">People</span>
                <span className=" ms-auto span-2">12</span>
              </NavLink>
            </li>

            <li className="nav-item w-100 mb-1">
              <NavLink
                to="/dashboard/tasks"
                className="nav-link d-flex flex-row align-items-baseline"
              >
                <i className="fa-regular fa-envelope me-3"></i>
                <span className="span-1">Tasks</span>
                <span className=" ms-auto span-2">12</span>
              </NavLink>
            </li>

            <li className="nav-item w-100 mb-1">
              <NavLink
                to="/dashboard/notes"
                className="nav-link d-flex flex-row align-items-baseline"
              >
                <i className="fa-regular fa-file-lines me-3"></i>
                <span className="span-1">Notes</span>
                <span className=" ms-auto span-2">12</span>
              </NavLink>
            </li>

            <li className="nav-item w-100 mb-1">
              <NavLink
                to="/dashboard/newsletters"
                className="nav-link d-flex flex-row align-items-baseline"
              >
                <i className="fa-solid fa-rss me-3"></i>
                <span className="span-1">Newletters</span>
                <span className=" ms-auto span-2">12</span>
              </NavLink>
            </li>

            <label htmlFor="" className="form-label ms-3">
              AI Hub
            </label>

            <li className="nav-item w-100 mb-1">
              <NavLink
                to="/dashboard/ai-hub"
                className="nav-link d-flex flex-row align-items-baseline"
              >
                <i className="fa-solid fa-rss me-3"></i>
                <span className="span-1">AI Hub</span>
                <i className="bi bi-stars ms-auto"></i>
              </NavLink>
            </li>
          </ul>

          <hr />

          <div className="d-flex align-items-center ms-3">
            <i className="bi bi-hdd me-3"></i>
            <div className="d-flex flex-column">
              <span>Mail Storage</span>
              <small>8.4 GB of 15 GB used</small>
            </div>
            <div>
              <ProgressBar className="main-sidebar-progressBar" />
            </div>
          </div>

          <hr />

          <div className="d-flex justify-content-between">
            <label className="form-label ms-3">Dark Mode</label>
            <div className="form-check form-switch ">
              <input
                className="form-check-input"
                type="checkbox"
                id="iconSwitch"
                checked={theme === "dark"}
                onChange={toggleTheme}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default MainSidebar;
