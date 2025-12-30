import UserProfileDropdown from "./USerProfileDropDown/UserProfile";
import "./DashboardNavBar.css";
import { useState } from "react";
import ComposeEmail from "../ComposeEmail/ComposeEmail";

function DashboardNavBar() {
  const [compose,setCompose]=useState(false);
  return (
    // <>
    //   <div className="navbar navbar-expand-md dashboard-navbar container-fluid">
    //     <ul className="nav-bar list-unstyled d-flex m-0 p-0  d-flex align-items-center">
    //       <li className="nav-item">
    //         <UserProfileDropdown />
    //       </li>

    //       <li className="nav-item">
    //         <div className="d-flex align-items-center me-4">
    //           <input
    //             type="text"
    //             className="form-control me-2"
    //             placeholder="Search..."
    //           />
    //           <button className="btn filter-button d-flex align-items-center">
    //             <i className="bi bi-funnel me-2"></i>
    //             Filters
    //           </button>
    //         </div>
    //       </li>

    //       <li className="nav-item me-3">
    //         <button className="btn mail-button " type="button">
    //           <i className="fa-regular fa-envelope me-2"></i>New Mail
    //         </button>
    //       </li>

    //       <li className="nav-item me-3 ">
    //         <button className="btn focus">
    //           <img
    //             src={focus}
    //             alt="View"
    //             width="18"
    //             height="18"
    //             className="me-3"
    //           />
    //           Focus Mode
    //         </button>
    //       </li>

    //       <li className="nav-item me-3">
    //         <a href="" className="navlink">
    //           <i class="bi bi-bell fs-5"></i>
    //         </a>
    //       </li>

    //       <li className="nav-item me-3">
    //         <a href="" className="nav-link">
    //           <i class="bi bi-gear fs-5"></i>
    //         </a>
    //       </li>

    //       <li className="nav-item">
    //         <a href="" className="nav-link">
    //           <img
    //             src={focus}
    //             alt="profile"
    //             className="img-fluid  profile-icon rounded-circle"
    //           />
    //         </a>
    //       </li>
    //     </ul>
    //   </div>
    // </>
    <>
      <div className="container-fluid p-0">
        <nav className="navbar navbar-expand navbar-light bg-light p-0  justify-content-between">
          <ul className="navbar-nav d-flex align-items-center">
            <li className="nav-item">
              <UserProfileDropdown />
            </li>

            {/*Search icon with button*/}
            <li className="nav-item">
              <div className="nav-link d-flex ">
                <input
                  type="search"
                  className="form-control me-2"
                  placeholder="Search"
                />
                <button className="btn btn-outline-success  d-flex">
                  <i className="bi bi-funnel me-2 d-md-block d-none"></i>Filter
                </button>
              </div>
            </li>

            {/*Mail Button*/}
            <li className="nav-item">
              <div className="nav-link">
                <button className="btn  btn-outline-success d-flex align-items-center" onClick={()=>setCompose(true)}>
                  <i className="fa-regular fa-envelope fs-6 me-1  d-md-block d-none"></i>
                  New Mail
                </button>
              </div>
            </li>

            {/*Notifications*/}
            <li className="nav-item">
              <a href="" className="nav-link">
                <i className="bi bi-bell fs-5"></i>
              </a>
            </li>

            {/*Settings*/}
            <li className="nav-item">
              <a href="" className="nav-link">
                <i className="bi bi-gear fs-5"></i>
              </a>
            </li>

            <li className="nav-item">
              <a href="" className="nav-link link-image">
                <img src="" alt="" className="img-fluid" />
              </a>
            </li>
          </ul>
        </nav>
      </div>

      {compose && <ComposeEmail onClose={()=>setCompose(false)}/>}
    </>
  );
}

export default DashboardNavBar;
