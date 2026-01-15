//import "./General.css";
import "./personalInfo.css";
//import focus from "../../../assets/camera-focus.png";

function PersonalInfo() {
  return (
    <>
      <div className="px-4 pt-4 mt-md-0 mt-3 me-md-0 me-3 mb-5 pb-5">
        <div className="personal_info">
          {/*Header*/}
          <div className="mb-5 py-3 d-flex align-items-center personal_info-header">
            <i className="icon-1 fa-regular fa-user me-3 ms-4"></i>
            <span>
              <h5 className="m-0 p-0 ">Personal Information</h5>
              <small>Manage your identity and basic details</small>
            </span>
          </div>

          <div className="mx-sm-4 mx-4 pe-sm-2 pe-0 profile-photo-card">
            <div className="row">
              {/*Profile Photo Card*/}
              <div className="col-4">
                <div className="card pb-4">
                  <div className="card-body p-0 m-0">
                    <h5 className="card-title text-center">Profile Photo</h5>
                    <small className="card-subtitle mb-3 text-center d-block">
                      Your professional avatar
                    </small>

                    <div className="d-flex justify-content-center mt-4 mb-4">
                      <span className="image">
                        <img
                          src={focus}
                          alt="Camera Focus"
                          className="focus-icon"
                        />
                      </span>
                    </div>

                    <button className="btn btn-primary w-100 mb-2">
                      Upload New Photo
                    </button>
                    <button className="btn btn-outline-success w-100">
                      Remove Current Photo
                    </button>

                    <div className="card mt-5 profile-photo-footer py-3">
                      <div className="card-body m-0 p-0 ps-2">
                        <span className="d-flex">
                          <span className="d-flex align-items-baseline p-0">
                            <span className="me-1">💡</span>
                            <h6> Tip:</h6>
                          </span>
                          <small className="m-0 p-0">
                            Professional headshots work best. 400×400px,
                            JPG/PNG, max 5MB.
                          </small>
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/*Basic Information Card*/}
              <div className="col-8">
                <div className="card">
                  <div className="card-body m-0 p-0">
                    <h5 className="card-title">Basic Information</h5>
                    <small className="card-subtitle">
                      Your core profile details and identity
                    </small>

                    <div className="mb-3">
                      {/*Top 2 fields*/}
                      <div className="row d-flex">
                        <div className="col-md-6 col-12">
                          <label htmlFor="" className="form-label">
                            First Name
                          </label>
                          <input type="text" className="form-control" />
                        </div>
                        <div className="col-md-6 col-12">
                          <label htmlFor="" className="form-label">
                            Last Name
                          </label>
                          <input type="text" className="form-control" />
                        </div>
                      </div>

                      {/*Display Name Field*/}
                      <div className="col-12">
                        <label htmlFor="" className="form-label">
                          Display Name
                        </label>
                        <input type="text" className="form-control" />

                        <small>
                          <i className="bi bi-eye me-1"></i>This name appears in
                          emails and converstaions
                        </small>
                      </div>

                      <div className="col-12">
                        <label htmlFor="" className="form-label">
                          Professional Bio
                        </label>
                        <textarea
                          name=""
                          id=""
                          rows="4"
                          className="form-control"
                        ></textarea>
                        <small>
                          Share your professional story and expertise
                        </small>
                      </div>

                      <div className="col-12">
                        <label htmlFor="" className="form-label">
                          Location
                        </label>
                        <input type="text" className="form-control" />

                        <small>
                          Your general location (visible to contacts)
                        </small>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default PersonalInfo;
