import "./Features.css";

function Features() {
  return (
    <>
      <div className="features">
        <div className="row mb-4">
          {/*Violetes Write*/}
          <div className="col-6">
            <div className="card pb-3 tone-lens main-cards">
              <div className="card-body p-0 m-0 p-1">
                <span className="d-flex justify-content-between align-items-start">
                  <i className="bi bi-eye fs-4 icon-1 d-flex align-items-center justify-content-center"></i>
                  <small className="header-right px-2" id="popular">
                    Popular
                  </small>
                </span>
                <div className="mt-3 mb-4">
                  <span className="d-flex">
                    <h5 className="card-title">Violetis Write</h5>
                    <i className="bi bi-stars ms-1"></i>
                  </span>
                  <small>
                    AI-powered writing assistant that helps you compose
                    professional emails with perfect tone and grammar in
                    seconds.
                  </small>
                </div>
                <button className="btn btn-1 me-2 p-0 p-1">
                  <i className="bi bi-stars me-2 ps-1"></i>Try Now
                </button>
                <button className="btn btn-2 p-0 p-1">Learn More</button>
                <hr />
                <small className="me-2">
                  <i className="bi bi-check2-circle me-1"></i>Auto-complete
                </small>
                <small className="me-2">
                  <i className="bi bi-check2-circle me-1"></i>Tone adjustment
                </small>
                <small className="me-2">
                  <i className="bi bi-check2-circle me-1"></i>Grammar check
                </small>
              </div>
            </div>
          </div>

          {/*Echo Search*/}
          <div className="col-6">
            <div className="card pb-3 tone-lens main-cards">
              <div className="card-body p-0 m-0 p-1">
                <span className="d-flex justify-content-between align-items-start">
                  <i className="bi bi-mic fs-4 icon-1 d-flex align-items-center justify-content-center"></i>
                  <small className="header-right px-2 " id="new">
                    New
                  </small>
                </span>
                <div className="mt-3 mb-4">
                  <h5 className="card-title">Echo Search</h5>
                  <small>
                    Voice-driven intelligent search that understands natural
                    language and finds exactly what you need instantly.
                  </small>
                </div>
                <button className="btn btn-1 me-2 p-0 p-1">
                  Activate Voice
                </button>
                <button className="btn btn-2 p-0 p-1">Tutorial</button>
                <hr />
                <small className="me-2">
                  <i className="bi bi-check2-circle me-1"></i>Voice commands
                </small>
                <small className="me-2">
                  <i className="bi bi-check2-circle me-1"></i>Smart filters
                </small>
                <small className="me-2">
                  <i className="bi bi-check2-circle me-1"></i>Fast results
                </small>
              </div>
            </div>
          </div>
        </div>

        {/*Row 2*/}
        <div className="row mb-4">
          {/*Card Tone Lens*/}
          <div className="col-6">
            <div className="card pb-3 tone-lens main-cards">
              <div className="card-body">
                <span className="d-flex justify-content-between align-items-start">
                  <i className="bi bi-eye fs-4 icon-1 d-flex align-items-center justify-content-center"></i>
                  <small className="header-right px-2 ">smart</small>
                </span>
                <div className="mt-3 mb-3">
                  <h5 className="card-title">Tone Lens</h5>
                  <small>
                    Advanced sentiment analyzer that detects emotional tone,
                    urgency, and intent in emails for better responses.
                  </small>
                </div>
                <button className="btn btn-1 me-2 p-0 p-1">
                  Ananlyze Tone
                </button>
                <button className="btn btn-2 p-0 p-1">Examples</button>
                <hr />
                <small className="me-2">
                  <i className="bi bi-check2-circle me-1"></i>Sentiment analysis
                </small>
                <small className="me-2">
                  <i className="bi bi-check2-circle me-1"></i>Urgency detection
                </small>
                <small className="me-2">
                  <i className="bi bi-check2-circle me-1"></i>Intent parsing
                </small>
              </div>
            </div>
          </div>

          {/*Card Pulse Inbox*/}
          <div className="col-6">
            <div className="card pb-3 tone-lens main-cards">
              <div className="card-body">
                <span className="d-flex justify-content-between align-items-start">
                  <i className="bi bi-eye fs-4 icon-1 d-flex align-items-center justify-content-center"></i>
                  <small className="header-right px-2" id="active">
                    Active
                  </small>
                </span>
                <div className="mt-3 mb-3">
                  <h5 className="card-title">Pulse Inbox</h5>
                  <small>
                    AI-powered priority sorting that learns from your behavior
                    and automatically organizes your inbox smartly.
                  </small>
                </div>
                <button className="btn btn-1 me-2 p-0 p-1">Enable Pulse</button>
                <button className="btn btn-2 p-0 p-1">Configure</button>
                <hr />
                <small className="me-2">
                  <i className="bi bi-check2-circle me-1"></i>Auto-prioritization
                </small>
                <small className="me-2">
                  <i className="bi bi-check2-circle me-1"></i>Smart categories
                </small>
                <small className="me-2">
                  <i className="bi bi-check2-circle me-1"></i>Learning AI
                </small>
              </div>
            </div>
          </div>
        </div>

        {/*Footer*/}
        <div className="card features-component-footer  mb-5">
          <div className="card-body m-0 p-0 pb-3 d-flex align-items-center justify-content-between">
              <span>
                <h6 className="card-title m-0 p-0">
                  Unlock Premium AI Features
                </h6>
                <small>
                  Get unlimited AI actions, advanced analytics, and priority
                  support
                </small>
              </span>
              <button className="btn">Upgrade Now</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Features;
