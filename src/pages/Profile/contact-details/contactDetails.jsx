import "./contactDetails.css";

function ContactDetails() {
  return (
    // <>
    //   <div className="me-4 ms-3 mt-2">
    //     {/*Top Div*/}
    //     <div className="card mb-3  text-center align-items-center contact-details-main-card">
    //       <i className="bi bi-telephone working-hours-icon  fs-4 px-3 py-2 mb-3"></i>
    //       <p className="fs-3 fw-bold">Contact Details</p>
    //       <p>
    //         Share your contact information and availability to help colleagues
    //         reach you
    //       </p>
    //     </div>

    //     {/* row with small gap */}
    //     <div className="row g-2 mx-1">
    //       <div className="col-md-6">
    //         <div className="card mb-sm-3 mb-3 pt-4 pb-5">
    //           <span className="d-flex justify-conten-center">
    //             <span>
    //               <i className="bi bi-telephone me-2 bg-danger p-2"></i>
    //             </span>
    //             <span>
    //               <h5 className="card-title line-height-1">
    //                 Contact Information
    //               </h5>
    //               <small className="card-description">
    //                 How people can reach you
    //               </small>
    //             </span>
    //           </span>
    //           <div className="form-group">
    //             <label className="form-lable">Phone Number</label>
    //             <input type="text" className="form-control" />
    //             <small>Your primary contact number</small>
    //           </div>
    //           <div className="form-group">
    //             <label className="form-lable">Personal Website</label>
    //             <input type="text" className="form-control" />
    //             <small>Your protfolio or personal website</small>
    //           </div>
    //           <footer className="d-flex ps-2 mt-4">
    //             <i className="bi bi-shield me-2"></i>
    //             <span>
    //               <p>Privacy Protected</p>
    //               <small>
    //                 Your contact information is only visible to your
    //                 organization and trusted contacts.
    //               </small>
    //             </span>
    //           </footer>
    //         </div>
    //       </div>

    //       <div className="col-md-6">
    //         <div className="card mb-sm-3 mb-3 pt-4 pb-5">
    //           <span className="d-flex ">
    //             <i className="fa-regular fa-clock me-2 bg-danger p-2"></i>
    //             <h5 className="card-title">Working Hours</h5>
    //           </span>
    //           <small className="card-description">When you're available</small>
    //           <div className="d-flex">
    //             <span className="me-3">
    //               <label className="form-lable">Start time</label>
    //               <input type="text" className="form-control" />
    //             </span>
    //             <span>
    //               <label className="form-lable">End time</label>
    //               <input type="text" className="form-control" />
    //             </span>
    //           </div>
    //           <label className="form-lable">Working Days</label>
    //           <small>Click to toggle your working days</small>
    //           <footer className="working-hours-footer d-flex mt-4">
    //             <i className="bi bi-clock me-2"></i>
    //             <span>
    //               <p>Smart Availability</p>
    //               <small>
    //                 Colleagues will see when you're available for meetings and
    //                 collaboration based on these hours.
    //               </small>
    //             </span>
    //           </footer>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </>

    <>
      <div className="px-4 pt-4 mt-md-0 mt-3 me-md-0 me-3 mb-5 pb-5">
        <div className="contact_information">
          <div className="mb-5 py-3 d-flex align-items-center contact_information-header">
            <i className="icon-1 bi bi-telephone me-3 ms-4 fs-5"></i>
            <span>
              <h5 className="m-0 p-0 ">Contact Information</h5>
              <small>Share your contact information and availability to help colleagues reach you</small>
            </span>
          </div>
          <div className="mx-sm-3 mx-4 pe-sm-2 pe-0">
            {/* <div className="card mb-3  text-center align-items-center contact-details-main-card p-5">
              <i className="bi bi-telephone working-hours-icon  fs-4 px-3 py-2 mb-3"></i>
              <p className="fs-3 fw-bold">Contact Details</p>
              <p>
                Share your contact information and availability to help
                colleagues reach you
              </p>
            </div> */}

            {/* row with small gap */}
            <div className="row g-4 mx-1">
              {/*Contact Information Card*/}
              <div className="col-md-6 ">
                <div className="card mb-sm-3 mb-3 pt-4 pb-5 h-100">
                  <div className="d-flex justify-conten-center align-items-center mb-4">
                    <div className="me-3 icon-2 text-center">
                      <i className="bi bi-telephone"></i>
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
                  <footer className="d-flex ps-2 mt-4">
                    <i className="bi bi-shield me-2"></i>
                    <span>
                      <p>Privacy Protected</p>
                      <small>
                        Your contact information is only visible to your
                        organization and trusted contacts.
                      </small>
                    </span>
                  </footer>
                </div>
              </div>

              <div className="col-md-6">
                <div className="card mb-sm-3 mb-3 pt-4 pb-5 h-100">
                  <div className="d-flex justify-conten-center align-items-center mb-4">
                    <div className="me-3 icon-2 text-center">
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
