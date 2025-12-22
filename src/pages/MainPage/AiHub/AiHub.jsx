import "./AiHub.css";

function AiHub() {
  return (
    <>
      <div className="ai-hub container">
        <div className="pb-5">
          <div className="mb-4 pt-4">
            <h3 className="p-0 m-0">AI Hub</h3>
            <small>Your Intelligence Email Assistant</small>
          </div>

          <div className="row g-2 mx-2">
            <div className="col-3">
              <div className="card">
                <div className="card-body p-0">
                  <p className="card-title ms-2">AI Actions Today</p>
                  <h2>257</h2>
                </div>
              </div>
            </div>

            <div className="col-3">
              <div className="card">
                <div className="card-body p-0">
                  <p className="card-title">Time Saved</p>
                  <h2>257</h2>
                </div>
              </div>
            </div>

            <div className="col-3">
              <div className="card">
                <div className="card-body p-0">
                  <p className="card-title">Emails Sorted</p>
                  <h2>257</h2>
                </div>
              </div>
            </div>

            <div className="col-3">
              <div className="card">
                <div className="card-body p-0">
                  <p className="card-title">Ai accuracy</p>
                  <h2>257</h2>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default AiHub;
