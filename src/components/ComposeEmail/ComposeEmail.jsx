import "./ComposeEmail.css";

function ComposeEmail({ onClose }) {
  return (
    <>
      <div className="modal-backdrop fade show"></div>
      <div className="modal fade show" style={{ display: "block" }}>
        <div className="modal-dialog modal-dialog-centered modal-fullscreen compose-modal">
          <div className="modal-content ">
            <div className="modal-body">
              {/*Model Header*/}
              <div className="d-flex justify-content-between">
                <span>
                  <h5 className="modal-title">Compose Email</h5>
                  <small>Create and send a new email message</small>
                </span>
                <button
                  type="button"
                  className="btn-close fs-6"
                  onClick={onClose}
                ></button>
              </div>

              <div>
                <label htmlFor="" className="form-label">
                  To
                </label>
                <input type="text" className="form-control w-75" />
              </div>

              <div>
                <label htmlFor="" className="form-label">
                  Subject
                </label>
                <input type="text" className="form-control w-75" />
              </div>

              <label htmlFor="" className="form-label">
                Context
              </label>
              <textarea className="form-control" rows="5" />

              <div className="card mt-3 m-0 p-0 ps-3 violetes-write">
                <div className="card-body m-0 p-0 py-2">
                  <span className="d-flex align-items-baseline">
                    <i class="fa-solid fa-brain me-2"></i>
                    <p className="card-title">Violetes Write</p>
                  </span>

                  <button className="btn  mt-3 me-2 m-0 p-0 px-2 ">
                    <small>AI Improve</small>
                  </button>
                  <button className="btn  mt-3 me-2 m-0 p-0 px-2">
                    <small>Check Tone</small>
                  </button>
                  <button className="btn  mt-3 m-0 p-0 px-2">
                    <small>Grammer Check</small>
                  </button>
                </div>
              </div>

              <div className="d-flex justify-content-between mt-4">
                <span>
                  <button className="btn me-2 attach-button">
                    <i class="fa-solid fa-paperclip me-2"></i>
                    Attach
                  </button>
                  <button className="btn smile-button">
                    <i className="fa-regular fa-face-smile"></i>
                  </button>
                </span>
                <span>
                  <button className="btn cancel-button me-2">
                    Cancel
                  </button>
                  <button className="btn send-button"><i class="fa-solid fa-location-arrow me-2"></i>Send</button>
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
