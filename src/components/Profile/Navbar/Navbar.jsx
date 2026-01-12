import "./Navbar.css";
import reactLogo from "../../../assets/react.svg";
import { useNavigate } from "react-router-dom";

function Navbar({heading,description}) {
  const navigate = useNavigate();
  return (
    <>
      <div className="container-fluid px-4 py-3" id="navbar-container">
        <div className="d-flex justify-content-between align-items-center">
          <div className="d-flex align-items-center col-md-8 ">
            <i
              className="fa-solid fa-xmark align-self-center me-4"
              id="cross"
              onClick={() => navigate("/")}
              style={{ cursor: "pointer" }}
            ></i>

            <div className="d-flex align-items-center">
              <img src={reactLogo} alt="JD" className="profile-img me-3" />

              <div className="text-block">
                <h5 className="fs-4 fs-sm-5 mb-0">{heading}</h5>
                <p className="mb-0 d-none d-sm-block">
                  {description}
                </p>
              </div>
            </div>
          </div>

          <div className="d-flex">
            <button
              className="btn me-3 d-none d-md-block "
              type="button"
              id="cancel-button"
            >
              cancel
            </button>
            <button className="btn d-none d-sm-block " id="save-button">
              Save changes
            </button>
            <button className="btn d-block d-sm-none " id="save-button">
              Save
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;
