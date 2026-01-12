import "./Features.css";

function Features() {
  return (
    <>
      <div className="features">
        <div className="row mb-4">
          {/*Violetes Write*/}
          <div className="col-6">
            <div className="card pb-4 tone-lens main-cards">
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
                <button className="btn btn-1 me-2 p-0 p-1 px-2">
                  <i className="bi bi-stars me-2 ps-1"></i>Try Now
                </button>
                <button className="btn btn-2 p-0 p-1 d-md-inline d-none">
                  Learn More
                </button>
                <hr />
                <small className="me-2 d-sm-inline d-none">
                  <i className="bi bi-check2-circle me-1 feature-tick-icon"></i>
                  Auto-complete
                </small>
                <small className="me-2 d-sm-inline d-none">
                  <i className="bi bi-check2-circle me-1 feature-tick-icon"></i>
                  Tone adjustment
                </small>
                <small className="me-2 d-sm-inline d-none">
                  <i className="bi bi-check2-circle me-1 feature-tick-icon"></i>
                  Grammar check
                </small>
              </div>
            </div>
          </div>

          {/*Echo Search*/}
          <div className="col-6">
            <div className="card pb-3 tone-lens main-cards h-100">
              <div className="card-body p-0 m-0 p-1">
                <span className="d-flex justify-content-between align-items-start">
                  <i className="bi bi-mic fs-4 icon-1 d-flex align-items-center justify-content-center"></i>
                  <small className="header-right px-2 " id="new">
                    New
                  </small>
                </span>
                <div className="mt-3 mb-4">
                  <span className="d-flex">
                    <h5 className="card-title me-2">Echo Search</h5>
                    <i className="bi bi-volume-up"></i>
                  </span>
                  <small>
                    Voice-driven intelligent search that understands natural
                    language and finds exactly what you need instantly.
                  </small>
                </div>
                <button className="btn btn-1 me-2 p-0 p-1 px-2">
                  <i className="bi bi-mic me-2"></i>
                  Activate Voice
                </button>
                <button className="btn btn-2 p-0 p-1  d-md-inline d-none">
                  Tutorial
                </button>
                <hr />
                <small className="me-2 d-sm-inline d-none">
                  <i className="bi bi-check2-circle me-1 feature-tick-icon"></i>
                  Voice commands
                </small>
                <small className="me-2 d-sm-inline d-none">
                  <i className="bi bi-check2-circle me-1 feature-tick-icon"></i>
                  Smart filters
                </small>
                <small className="me-2 d-sm-inline d-none">
                  <i className="bi bi-check2-circle me-1 feature-tick-icon"></i>
                  Fast results
                </small>
              </div>
            </div>
          </div>
        </div>

        {/*Row 2*/}
        <div className="row mb-4 d-flex align-items-stretch">
          {/*Card Tone Lens*/}
          <div className="col-6">
            <div className="card pb-3 tone-lens main-cards  h-100">
              <div className="card-body">
                <span className="d-flex justify-content-between align-items-start">
                  <i className="bi bi-eye fs-4 icon-1 d-flex align-items-center justify-content-center"></i>
                  <small className="header-right px-2 ">smart</small>
                </span>
                <div className="mt-3 mb-3">
                  <span className="d-flex align-items-baseline">
                    <h5 className="card-title me-2">Tone Lens</h5>
                    <i className="fa-solid fa-brain"></i>
                  </span>
                  <small>
                    Advanced sentiment analyzer that detects emotional tone,
                    urgency, and intent in emails for better responses.
                  </small>
                </div>
                <button className="btn btn-1 me-2 p-0 p-1 px-2">
                  <i className="bi bi-eye me-2"></i>
                  Ananlyze Tone
                </button>
                <button className="btn btn-2 p-0 p-1  d-md-inline d-none">
                  Examples
                </button>
                <hr />
                <small className="me-2 d-sm-inline d-none">
                  <i className="bi bi-check2-circle me-1 feature-tick-icon"></i>
                  Sentiment analysis
                </small>
                <small className="me-2 d-sm-inline d-none">
                  <i className="bi bi-check2-circle me-1 feature-tick-icon"></i>
                  Urgency detection
                </small>
                <small className="me-2 d-sm-inline d-none">
                  <i className="bi bi-check2-circle me-1 feature-tick-icon"></i>
                  Intent parsing
                </small>
              </div>
            </div>
          </div>

          {/*Card Pulse Inbox*/}
          <div className="col-6">
            <div className="card pb-3 tone-lens main-cards  h-100">
              <div className="card-body">
                <span className="d-flex justify-content-between align-items-start">
                  <i className="bi bi-bullseye fs-4 icon-1 d-flex align-items-center justify-content-center"></i>
                  <small className="header-right px-2" id="active">
                    Active
                  </small>
                </span>
                <div className="mt-3 mb-3">
                  <span className="d-flex">
                    <h5 className="card-title me-2">Pulse Inbox</h5>
                    <i className="bi bi-lightning-charge"></i>
                  </span>
                  <small>
                    AI-powered priority sorting that learns from your behavior
                    and automatically organizes your inbox smartly.
                  </small>
                </div>
                <button className="btn btn-1 me-2 p-1 px-2">
                  <i className="bi bi-bullseye me-2"></i>Enable Pulse
                </button>
                <button className="btn btn-2 p-0 p-1  d-md-inline d-none">
                  Configure
                </button>
                <hr />
                <small className="me-2  d-sm-inline d-none">
                  <i className="bi bi-check2-circle me-1 feature-tick-icon"></i>
                  Auto-prioritization
                </small>
                <small className="me-2  d-sm-inline d-none">
                  <i className="bi bi-check2-circle me-1 feature-tick-icon"></i>
                  Smart categories
                </small>
                <small className="me-2  d-sm-inline d-none">
                  <i className="bi bi-check2-circle me-1 feature-tick-icon"></i>
                  Learning AI
                </small>
              </div>
            </div>
          </div>
        </div>

        {/*Footer*/}
        <div className="card features-component-footer  mb-5">
          <div className="card-body m-0 p-0 pb-3 d-flex align-items-center justify-content-between">
            <span className="d-flex align-items-center">
              <span>
                <i className="bi bi-stars fs-4 icon-1 d-flex align-items-center justify-content-center me-2"></i>
              </span>
              <span>
                <h6 className="card-title m-0 p-0">
                  Unlock Premium AI Features
                </h6>
                <small>
                  Get unlimited AI actions, advanced analytics, and priority
                  support
                </small>
              </span>
            </span>
            <button className="btn features-upgrade-button">Upgrade Now</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Features;
