import "./workInformation.css";
import { useState } from "react";

function WorkInformation() {
  const [jobTitle, setJobTitle] = useState("Senior Manager");
  const [companyName, setCompanyName] = useState("Violities Corporation");
  const [department, setDepartment] = useState("Engineering");
  const [employeeId, setEmployeeId] = useState("EMP-2024-001 (Optional)");
  const [summary, setSummary] = useState(
    "Describe your role, responsibilities, and key achievements in your current position..."
  );

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Jobtitle: ", jobTitle);
    console.log("companyName", companyName);
    console.log("Department: ", department);
  };
  return (
    <>
      <div className="px-4 pt-4 mt-md-0 mt-3 me-md-0 me-3 mb-5 pb-5">
        <div className="work_information">
          <div className="mb-5 py-3 d-flex align-items-center work_information-header">
            <i className="icon-1 bi bi-building me-3 ms-4 fs-5"></i>
            <span>
              <h5 className="m-0 p-0 ">Work Information</h5>
              <small>Configure your professional role and organization</small>
            </span>
          </div>
          <div className="mx-sm-5 mx-4 pe-sm-2 pe-0">
            <form onSubmit={handleSubmit} className="mt-2 me-3">
              <div className="card p-3 px-4">
                <div className="card-body">
                  <div className="d-flex align-items-center">
                    <div className="workInformation-card-icon p-2 d-flex justify-content-center align-items-center me-2">
                      <i className=" fa-solid fa-building fs-5"></i>
                    </div>
                    <span className="lh-1">
                      <h5 className="card-title m-0 p-0">
                        Professional Details
                      </h5>
                      <small>Your role and organiztion information</small>
                    </span>
                  </div>

                  <div className="Work-Information-lables mt-5">
                    {/*Fields div*/}
                    <div className="row ">
                      <div className="col-md-6 mb-3">
                        <label className="form-label mb-2">Job Title</label>
                        <input
                          type="text"
                          className="form-control"
                          value={jobTitle}
                          onChange={(event) => setJobTitle(event.target.value)}
                        />
                        <small>Your current possition or role</small>
                      </div>
                      <div className="col-md-6 mb-3">
                        <label className="form-label mb-2">Company</label>
                        <input
                          type="text"
                          className="form-control"
                          value={companyName}
                          onChange={(event) =>
                            setCompanyName(event.target.value)
                          }
                        />
                        <small>Your organiztion or Company name</small>
                      </div>
                    </div>

                    {/*Fields Div*/}
                    <div className="row mt-2">
                      <div className="col-md-6 mb-3">
                        <label className="form-label mb-2">Department</label>
                        <input
                          type="text"
                          className="form-control"
                          value={department}
                          onChange={(event) =>
                            setDepartment(event.target.value)
                          }
                        />
                        <small>Your team or department</small>
                      </div>
                      <div className="col-md-6 mb-3">
                        <label className="form-label mb-2">Employee ID</label>
                        <input
                          type="text"
                          className="form-control"
                          value={employeeId}
                          onChange={(event) =>
                            setEmployeeId(event.target.value)
                          }
                        />
                        <small>Internal identification number</small>
                      </div>
                    </div>
                  </div>

                  <hr />

                  <div className="work-information-span">
                    <label className="form-label">Professional Summary</label>
                    <textarea
                      className="form-control"
                      placeholder="Describe your role..."
                      value={summary}
                      onChange={(event) => setSummary(event.target.value)}
                    ></textarea>
                    <small>
                      A brief overview of your professional role and
                      contributions
                    </small>
                  </div>
                  <hr />

                  {/*Footer of the card*/}
                  <div className="d-flex work-information-footer p-3 mb-4">
                    <i className="bi bi-lightbulb me-3"></i>
                    <div className="lh-1">
                      <p>Professional Visibility</p>
                      <small>
                        This information helps colleagues understand your
                        expertise and find the right person for collaboration
                        and support.
                      </small>
                    </div>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default WorkInformation;
