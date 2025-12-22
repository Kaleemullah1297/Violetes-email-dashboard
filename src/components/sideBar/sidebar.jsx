import ProfileSettingsSidebar from "../Profile/Profile-settings-sidebar/profile";
import reactLogo from "../../assets/react.svg";

function SideBar() {
  return (
    <>
      <div className="d-flex">
        <div className="bg-danger">
          <h1>Hello</h1>
        </div>

        <div className="flex-grow-1">
          <div className="col-12 bg-primary">
            <div className="row p-3">
              <div className="col-8 col-md-4 mb-3 mb-md-0">
                <div className="card">
                  <div className="card-body text-center">
                    <span className="">
                      <h5 className="card-title">Profile Photo</h5>
                      <small className="card-subtitle">
                        Your Professional Profile
                      </small>
                    </span>
                    <img
                      src={reactLogo}
                      alt=""
                      className="card-img-bottom bg-danger mt-3 card-img"
                    />
                  </div>
                </div>
              </div>
              <div className="col-10 col-md-8">
                <div className="card p-5">Col 8</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default SideBar;
