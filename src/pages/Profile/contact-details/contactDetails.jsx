import "./contactDetails.css";

function ContactDetails() {
  return (
    <>
      <div className="px-4 pt-4 mt-md-0 mt-3 me-md-0 me-3 mb-5 pb-5">
        <div className="contact_information">
          <div className="mb-5 py-3 d-flex align-items-center contact_information-header">
            <i className="icon-1 bi bi-telephone me-3 ms-4 fs-5 "></i>
            <span>
              <h5 className="m-0 p-0 ">Contact Information</h5>
              <small>
                Share your contact information and availability to help
                colleagues reach you
              </small>
            </span>
          </div>
          <div className="mx-sm-3 mx-4 pe-sm-2 pe-0">
            {/* row with small gap */}
            <div className="row g-4 mx-3">
              {/*Contact Information Card*/}
              <div className="col-md-6 ">
                <div className="card mb-sm-3 mb-3 pb-4 h-100">
                  <div className="d-flex justify-conten-center align-items-center mb-4">
                    <div className="me-3 text-center icon-design">
                      <i className="bi bi-telephone "></i>
                    </div>
                    <span>
                      <h5 className="card-title m-0 p-0">
                        Contact Information
                      </h5>
                      <small className="card-description">
                        How people can reach you
                      </small>
                    </span>
                  </div>
                  <div className="form-group">
                    <label className="form-lable">
                      <h6>Phone Number</h6>
                    </label>
                    <input type="text" className="form-control" />
                    <small>Your primary contact number</small>
                  </div>
                  <div className="form-group mt-3">
                    <label className="form-lable">Personal Website</label>
                    <input type="text" className="form-control" />
                    <small>Your protfolio or personal website</small>
                  </div>
                  <div className="card m-0 p-0 mt-4">
                    <div className="card-body d-flex m-0 p-0 p-2">    
                        <i className="bi bi-shield me-2"></i>
                        <span>
                          <h6 className="m-0 p-0">Privacy Protected</h6>
                          <small>
                            Your contact information is only visible to your
                            organization and trusted contacts.
                          </small>
                        </span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-md-6">
                <div className="card mb-sm-3 mb-3 pt-4 pb-5 h-100">
                  <div className="d-flex justify-conten-center align-items-center mb-4">
                    <div className="me-3 icon-design text-center">
                      <i className="fa-regular fa-clock"></i>
                    </div>
                    <span>
                      <h5 className="card-title m-0 p-0">Working Hours</h5>
                      <small className="card-description">
                        When you're available
                      </small>
                    </span>
                  </div>
                  <div className="d-flex">
                    <span className="me-3">
                      <label className="form-lable">Start time</label>
                      <input type="text" className="form-control" />
                    </span>
                    <span>
                      <label className="form-lable">End time</label>
                      <input type="text" className="form-control" />
                    </span>
                  </div>
                  <label className="form-lable">Working Days</label>
                  <small>Click to toggle your working days</small>
                  <footer className="working-hours-footer d-flex mt-4">
                    <i className="bi bi-clock me-2"></i>
                    <span>
                      <p>Smart Availability</p>
                      <small>
                        Colleagues will see when you're available for meetings
                        and collaboration based on these hours.
                      </small>
                    </span>
                  </footer>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ContactDetails;
