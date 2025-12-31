import './QuickAction.css'

function QuickActions() {
  return (
    <>
      <div className="container-fluid quick-actions">
        {/*Row 1*/}
        <div className="row">
          <div className="col-4">
            <div className="card text-center h-100">
              <div className="card-body d-flex flex-column align-items-center">
                <i className="bi bi-eye fs-4 icon-1 d-flex align-items-center justify-content-center icon-1 mb-4"></i>
                <h6 className="card-title lh-1">Smart Compose</h6>
                <small className="lh-1">AI drafts emails instantly</small>
              </div>
            </div>
          </div>
          <div className="col-4">
            <div className="card h-100">
              <div className="card-body d-flex flex-column text-center align-items-center">
                <i className="bi bi-eye fs-4 icon-1 d-flex align-items-center justify-content-center icon-1 mb-4"></i>
                <h6 className="card-title lh-1">Quick Reply</h6>
                <small className="lh-1">Suggested Responses</small>
              </div>
            </div>
          </div>
          <div className="col-4"> 
            <div className="card text-center h-100">
              <div className="card-body d-flex flex-column align-items-center">
                <i className="bi bi-eye fs-4 icon-1 d-flex align-items-center justify-content-center icon-1 mb-4"></i>
                <h6 className="card-title lh-1">Auto Categorize</h6>
                <small className="lh-1">Smart email sorting</small>
              </div>
            </div>
          </div>
        </div>

        {/*Row 2*/}

        <div className="row mt-3">
          <div className="col-4">
            <div className="card text-center h-100">
              <div className="card-body d-flex flex-column align-items-center">
                <i className="bi bi-eye fs-4 icon-1 d-flex align-items-center justify-content-center icon-1 mb-4"></i>
                <h6 className="card-title lh-1">Schedule Send</h6>
                <small className="lh-1">AI optimal timing</small>
              </div>
            </div>
          </div>
          <div className="col-4">
            <div className="card text-center h-100">
              <div className="card-body d-flex flex-column align-items-center">
                <i className="bi bi-eye fs-4 icon-1 d-flex align-items-center justify-content-center icon-1 mb-4"></i>
                <h6 className="card-title lh-1">Spam Filter</h6>
                <small className="lh-1">Advanced protection</small>
              </div>
            </div>
          </div>
          <div className="col-4">
           <div className="card text-center h-100">
              <div className="card-body d-flex flex-column align-items-center">
                <i className="bi bi-eye fs-4 icon-1 d-flex align-items-center justify-content-center icon-1 mb-4"></i>
                <h6 className="card-title lh-1">Smart Summary</h6>
                <small className="lh-1">Email digests</small>
              </div>
            </div>
          </div>
        </div>

        <div className="card mt-3">
          <div className="card-body">
            <h5 className="card-title">Reacent AI Actions</h5>
          </div>
        </div>
      </div>
    </>
  );
}

export default QuickActions;
