function ComposeEmail({ onClose }) {
  return (
    <>
      <div className="modal-backdrop fade show "></div>
      <div
        className="modal fade show"
        style={{ display: "block" }}
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-body">
              {/*Model Header*/}
              <div className="d-flex justify-content-between">
                <span>
                  <h6 className="modal-title">Compose Email</h6>
                  <small>Create and send a new email message</small>
                </span>
                <button
                  type="button"
                  className="btn-close fs-6"
                  onClick={onClose}
                ></button>
              </div>

              <label htmlFor="" className="form-label">
                To
              </label>
              <input type="text" className="form-control" />

              <label htmlFor="" className="form-label">
                Subject
              </label>
              <input type="text" className="form-control" />

              <label htmlFor="" className="form-label">
                Context
              </label>
              <textarea className="form-control" rows="4" />

              <div className="card mt-3 m-0">
                <div className="card-body m-0 p-0 pb-3">
                  <p className="card-title">Violetes Write</p>

                  <button className="btn btn-outline-success mt-3 me-2 m-0 p-0 px-2 ">
                    <small>AI Improve</small>
                  </button>
                  <button className="btn btn-outline-success mt-3 me-2 m-0 p-0 px-2">
                    <small>Check Tone</small>
                  </button>
                  <button className="btn btn-outline-success mt-3 m-0 p-0 px-2">
                    <small>Grammer Check</small>
                  </button>
                </div>
              </div>

              <div className="d-flex justify-content-between mt-4 ">
                <span>
                  <button className="btn btn-outline-success me-2">
                    Attach
                  </button>
                  <button className="btn btn-outline-success"></button>
                </span>
                <span>
                  <button className="btn btn-outline-success me-2">
                    Cancel
                  </button>
                  <button className="btn btn-outline-success">Send</button>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ComposeEmail;
