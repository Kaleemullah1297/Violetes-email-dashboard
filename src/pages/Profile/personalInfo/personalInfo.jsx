// import "./personalInfo.css";
// //import '../index.css'

// function PersonalInfo() {
//   return (
// <>
//   <form onSubmit={handleSubmit} className="d-flex me-3">
//     {/*Card profile Photo*/}
//     <div className="card d-flex align-items-center card-profile-photo mt-5 me-4">
//       <p className="p1">Profile Photo</p>
//       <p className="p2">Your professional avator</p>
//       <img src={null} alt="Image" className="card-img mt-4 mb-5" />
//       <div className="card-body gap-2">
//         <div className="row">
//           <button type="button" className="btn mb-2">
//             Upload New Photo
//           </button>
//           <button type="button" className="btn">
//             Remove Current Photo
//           </button>
//         </div>
//       </div>
//     </div>

//     {/*Main fields card */}
//     <div className="card mt-5 w-75 main-card mb-5">
//       {/*CARD MAIN TITLE*/}
//       <h5 className="card-title">Basic Information</h5>
//       <p className="card-text">Your core profile details and identity</p>

//       {/*FIRST AND LAST NAME DIV*/}
//       <div className="d-flex mb-4">
//         {/*FIRST NAME*/}
//         <div className="form-group me-md-5">
//           <label htmlFor="firstname" className="mb-2">
//             First Name
//           </label>
//           <input type="text" className="form-control" placeholder="John" />
//         </div>

//         {/*LAST NAME*/}
//         <div className="form-group">
//           <label htmlFor="lastname" className="mb-2">
//             Last Name
//           </label>
//           <input type="text" className="form-control" placeholder="Doe" />
//         </div>
//       </div>

//       {/*DISPLAY NAME*/}
//       <div className="form-group mb-4">
//         <label htmlFor="displayname" className="mb-2">
//           Display Name
//         </label>
//         <input type="text" className="form-control" value="John Doe" />
//         <small className="form-text">
//           This name appears in emails and converstaions.
//         </small>
//       </div>

//       {/*PROFESSIONAL BIO*/}
//       <div className="form-group mb-4">
//         <label htmlFor="professionalBio" className="mb-2">
//           Professional Bio
//         </label>
//         <textarea
//           className="form-control"
//           placeholder="Tell others about your expertise, role, and professional interests."
//         />
//         <small className="form-text">
//           Share your profession story and expertise
//         </small>
//       </div>

//       {/*LOCATION*/}
//       <div className="form-group mb-4">
//         <label htmlFor="location" className="mb-2">
//           Location
//         </label>
//         <input type="text" className="form-control" />
//         <small className="form-text">
//           Your general loaction(visible to contacts)
//         </small>
//       </div>
//     </div>
//   </form>
//   {/* <div className="row p-0">
//     <div className="col-9 d-flex px-5 mt-1 mb-5"></div>
//   </div> */}
// </>
// {/* <>
//   <form>
//     <div className="card main-card mt-md-0 mt-3 me-md-0 me-3 mb-5 pb-5">
//       <div className="row mt-2 p-0 p-sm-4 mb-5">
//         {/*Profile Card*/}
//         <div className="col-md-4 col-8 ">
//           <div className="card mb-4">
//             {/*Card body*/}
//             <div className="card-body">
//               {/*Top of the card*/}
//               <div className="text-center mb-5">
//                 <h5 className="card-title">Profile Photo</h5>
//                 <small className="card-subtitle">
//                   Your Professional details here
//                 </small>
//               </div>

//               {/* <div className="card text-center">
//                 <small>
//                   <b>Tip:</b>
//                   Professional headshots work best 400x400px, JPG/PNG,max
//                   5MB
//                 </small>
//               </div> */}
//             </div>
//           </div>
//         </div>

//         {/*Main Card*/}
//         <div className="col-md-8 col-12">
//           <div className="card">
//             <div className="card-body">
//               <h5 className="card-title">Basic Information</h5>
//               <small className="card-subtitle">
//                 Your core profile details and identity
//               </small>

//               <div className="mb-3">
//                 {/*Top 2 fields*/}
//                 <div className="row d-flex">
//                   <div className="col-md-6 col-12">
//                     <label htmlFor="" className="form-label">
//                       First Name
//                     </label>
//                     <input type="text" className="form-control" />
//                   </div>
//                   <div className="col-md-6 col-12">
//                     <label htmlFor="" className="form-label">
//                       Last Name
//                     </label>
//                     <input type="text" className="form-control" />
//                   </div>
//                 </div>

//                 {/*Display Name Field*/}
//                 <div className="col-12">
//                   <label htmlFor="" className="form-label">
//                     Display Name
//                   </label>
//                   <input type="text" className="form-control" />

//                   <small>
//                     <i className="bi bi-eye me-1"></i>This name appears in
//                     emails and converstaions
//                   </small>
//                 </div>

//                 <div className="col-12">
//                   <label htmlFor="" className="form-label">
//                     Professional Bio
//                   </label>
//                   <textarea
//                     name=""
//                     id=""
//                     rows="4"
//                     className="form-control"
//                   ></textarea>
//                   <small>Share your professional story and expertise</small>
//                 </div>

//                 <div className="col-12">
//                   <label htmlFor="" className="form-label">
//                     Location
//                   </label>
//                   <input type="text" className="form-control" />

//                   <small>Your general location (visible to contacts)</small>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   </form>
// </> */}

//   );
// }

// export default PersonalInfo;

//import "./General.css";
import "./personalInfo.css";
//import focus from "../../../assets/camera-focus.png";

function PersonalInfo() {
  return (
    <>
      <div className="px-4 pt-4 mt-md-0 mt-3 me-md-0 me-3 mb-5 pb-5">
        <div className="personal_info">
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
                  <div className="card-body p-0 m-0 text-center">
                    <h5 className="card-title">Profile Photo</h5>
                    <small className="card-subtitle mb-3">
                      Your professional avator
                    </small>

                    <div className=" d-flex justify-content-center align-item-center mt-4">
                      {
                        <img
                          src={focus}
                          alt="Camera Focus"
                          className="focus-icon  text-center profile-placeholder"
                        />
                      }
                    </div>

                    <button className="btn btn-primary  w-100 mb-2">
                      Upload New Photo
                    </button>
                    <button className="btn btn-outline-success w-100">
                      Remove Current Photo
                    </button>

                    <div className="card mt-5 profile-photo-footer py-3">
                      <div className="card-body m-0 p-0 ps-2">
                        <span className="d-flex">
                          <span className="d-flex align-items-baseline p-0 ">
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
