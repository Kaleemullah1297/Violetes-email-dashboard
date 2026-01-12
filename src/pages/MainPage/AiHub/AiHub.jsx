import Features from "../../../components/AiHub/Features";
import Insights from "../../../components/AiHub/Insights/Insights";
import QuickActions from "../../../components/AiHub/QuickActions/QuickAction";
import Settings from "../../../components/AiHub/Settings/Settings";
import "./AiHub.css";

function AiHub() {
  return (
    <>
      <div className="ai-hub">
        <div className=" ai-hub-header px-3 mb-4 pb-3">
          <div className="mb-4 pt-4 mx-3 top">
            <h3 className="p-0 m-0">AI Hub</h3>
            <small>Your Intelligence Email Assistant</small>
          </div>

          <div className="row g-3 mx-2 bottom">
            <div className="col-3 h-100">
              <div className="card m-0 p-0  p-2">
                <div className="card-body p-0 m-0 ps-2">
                  <small className="card-title">AI Actions Today</small>
                  <h3>257</h3>
                </div>
              </div>
            </div>

            <div className="col-3">
              <div className="card m-0 p-0  p-2  h-100">
                <div className="card-body p-0 m-0 ps-2">
                  <small className="card-title">Time Saved</small>
                  <h3>257</h3>
                </div>
              </div>
            </div>

            <div className="col-3 ">
              <div className="card m-0 p-0  p-2 h-100">
                <div className="card-body p-0 m-0 ps-2">
                  <small className="card-title">Emails Sorted</small>
                  <h3>257</h3>
                </div>
              </div>
            </div>

            <div className="col-3">
              <div className="card m-0 p-0  p-2  h-100">
                <div className="card-body p-0 m-0 ps-2">
                  <small className="card-title">Ai accuracy</small>
                  <h3>257</h3>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="px-4">
          <ul className="nav nav-pills ai-hub-tabs d-flex justify-content-between">
            <li className="nav-item">
              <button
                className="nav-link active d-flex justify-content-center"
                data-bs-toggle="tab"
                data-bs-target="#features"
              >
                <i className="bi bi-lightning-charge me-1"></i>
                <span>Features</span>
              </button>
            </li>

            <li className="nav-item ">
              <button
                className="nav-link d-flex justify-content-center"
                data-bs-toggle="tab"
                data-bs-target="#quick-actions"
              >
                <i className="bi bi-bullseye me-1"></i>
                <span>Quick Actions</span>
              </button>
            </li>

            <li className="nav-item ">
              <button
                className="nav-link d-flex justify-content-center align-items-center"
                data-bs-toggle="tab"
                data-bs-target="#insights"
              >
                <i className="fa-solid fa-chart-column me-1"></i>
                <span>Insights</span>
              </button>
            </li>

            <li className="nav-item ">
              <button
                className="nav-link d-flex justify-content-center"
                data-bs-toggle="tab"
                data-bs-target="#settings"
              >
                <i className="bi bi-gear me-1"></i>
                <span>Settings</span>
              </button>
            </li>
          </ul>

          <div className="tab-content py-3 mt-2">
            <div className="tab-pane fade show active" id="features">
              <Features />
            </div>

            <div className="tab-pane fade" id="quick-actions">
              <QuickActions />
            </div>

            <div className="tab-pane fade" id="insights">
              <Insights />
            </div>

            <div className="tab-pane fade" id="settings">
              <Settings />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default AiHub;
