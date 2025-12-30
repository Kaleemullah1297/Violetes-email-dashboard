import "./Insights.css";
import ProgressBar from "../../../components/ProgressBar/ProgressBar";

function Insights() {
  return (
    <>
      <div className="container-fluid">
        <div className="row d-flex align-content-stretch">
          {/*Card 1*/}
          <div className="col-6 d-flex">
            <div className="card h-100 w-100">
              <div className="card-body m-0 p-0 pb-4">
                <span className="d-flex mb-5">
                  <i
                    className="fa fa-bar-chart rotate-90 me-2"
                    aria-hidden="true"
                  ></i>
                  <h5 className="card-title">AI Performance</h5>
                </span>

                <span className="d-flex justify-content-between">
                  <label htmlFor="" className="form-label">
                    <small>Violetis Write Usage</small>
                  </label>
                  <h6 className="">87%</h6>
                </span>
                <ProgressBar progress={70}/>

                <span className="d-flex justify-content-between mt-3">
                  <label htmlFor="" className="form-label">
                    <small>Violetis Write Usage</small>
                  </label>
                  <h6 className="">87%</h6>
                </span>
                <ProgressBar />

                <span className="d-flex justify-content-between mt-3">
                  <label htmlFor="" className="form-label">
                    <small>Violetis Write Usage</small>
                  </label>
                  <h6 className="">87%</h6>
                </span>
                <ProgressBar />

                <span className="d-flex justify-content-between mt-3">
                  <label htmlFor="" className="form-label">
                    <small>Violetis Write Usage</small>
                  </label>
                  <h6 className="">87%</h6>
                </span>
                <ProgressBar />
              </div>
            </div>
          </div>

          {/*Card 2*/}
          <div className="col-6 d-flex">
            <div className="card h-100 w-100">
              <div className="card-body m-0 p-0">
                <h5 className="card-tile mb-5">Time Savings</h5>

                <div className="card mb-4">
                  <div className="card-body m-0 p-0 p-1">
                    <h2 className="fw-bold m-0 p-0 lh-1">3.5 hours</h2>
                    <small>Saved today with AI</small>
                  </div>
                </div>

                 <div className="card mb-4">
                  <div className="card-body m-0 p-0 p-1">
                    <h2 className="fw-bold m-0 p-0 lh-1">24.5 hours</h2>
                    <small>Saved this week</small>
                  </div>
                </div>

                 <div className="card mb-4">
                  <div className="card-body m-0 p-0 p-1">
                    <h2 className="fw-bold m-0 p-0 lh-1">90 hours</h2>
                    <small>Saved this month</small>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="card mt-4">
          <div className="card-body">
            <h5 className="card-tilte mb-5">AI Recommendations</h5>

            <div className="card mb-3">
              <div className="card-body m-0 p-0">
                <h6 className="card-title">Enable Pulse Inbox for project emails</h6>
                <small className="card-description d-block">AI noticed you manually sort project emails often. Pulse Inbox can automate this.</small>
                <button className="btn mt-2" type="button">Apply Suggestion</button>
              </div>
            </div>

            <div className="card mb-3">
              <div className="card-body m-0 p-0">
                <h6 className="card-title">Use Echo Search for meeting-related queries</h6>
                <small className="card-description d-block">Voice search is 3x faster for finding calendar invites and meeting notes.</small>
                <button className="btn mt-2" type="button">Try Now</button>
              </div>
            </div>


            <div className="card mb-3">
              <div className="card-body m-0 p-0">
                <h6 className="card-title">Schedule emails during business hours</h6>
                <small className="card-description d-block">AI suggests sending at 9 AM for better response rates based on recipient patterns.</small>
                <button className="btn mt-2" type="button">Enable Auto-Schedule</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Insights;
