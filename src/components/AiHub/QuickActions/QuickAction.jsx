import './QuickAction.css'

function QuickActions() {
  return (
    <>
      <div className="container-fluid quick-actions">
        {/*Row 1*/}
        <div className="row">
          <div className="col-4">
            <div className="card">
              <div className="card-body"></div>
            </div>
          </div>
          <div className="col-4">
            <div className="card">
              <div className="card-body d-flex flex-column align-items-center">
                <i class="bi bi-eye fs-4 icon-1 d-flex align-items-center justify-content-center icon-1 mb-4"></i>
                <h6 className="card-title lh-1">Quick Reply</h6>
                <small className="lh-1">Suggested Responses</small>
              </div>
            </div>
          </div>
          <div className="col-4">
            <div className="card">
              <div className="card-body"></div>
            </div>
          </div>
        </div>

        {/*Row 2*/}

        <div className="row mt-3">
          <div className="col-4">
            <div className="card">
              <div className="card-body"></div>
            </div>
          </div>
          <div className="col-4">
            <div className="card">
              <div className="card-body"></div>
            </div>
          </div>
          <div className="col-4">
            <div className="card">
              <div className="card-body"></div>
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
