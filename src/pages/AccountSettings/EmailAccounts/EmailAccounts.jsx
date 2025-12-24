import "./EmailAccounts.css";
import Button from "../../../components/LeftBar/Common/Button/Button";

function EmailAccounts() {
  return (
    <>
      <div className="card mt-md-0 mt-3 me-md-0 me-3 mb-5 pb-5">
        <div className="div email-accounts">
          <div className="mb-4 py-3 d-flex align-items-center email-accounts__header">
            <i class="bi bi-eye icon-1 fs-5 me-3 ms-4"></i>
            <span>
              <h5 className="m-0 p-0 ">Email Accounts</h5>
              <small>Manage connected email accounts</small>
            </span>
          </div>

          <div className="ms-4 me-2">
            <div className="mb-5">
              <h5>Email Accounts</h5>
              <small>
                Manage your connected email accounts and forwarding settings
              </small>
            </div>
          </div>

          <div className="ms-4 me-2">
            <div className="mb-5 d-flex align-items-center justify-content-between">
              <span>
                <h5>Connected Email Accounts</h5>
                <small className="d-sm-block d-none">Manage your connected email accounts and sync settings</small>
                <small className="d-block d-sm-none">Manage your connected<br/> email accounts and sync settings</small>
              </span>
              <Button text="Add Account" />
            </div>
          </div>

          <div className="ms-4 me-2  mb-5">
            <div className="card d-flex flex-row justify-content-center py-3">
              <button className="btn email-accounts-button me-3">
                <i className="fa-solid fa-plus"></i>
              </button>
              <span>
                <p className="p-0 m-0 ">Add Another Email Account </p>
                <small>Connect Gamil, Outlook, Yahoo or custom IMAP</small>
              </span>
            </div>
          </div>

          <hr />

          <div className="ms-4 me-2  mb-5">
            <div className="card">
              <div className="card-body">
                <div className="d-flex justify-content-between">
                  <span>
                    <i class="bi bi-arrow-90deg-right me-2 fw-bold"></i>
                    <h5 className="card-title m-0 p-0 d-inline">Email Forwarding</h5>
                  </span>
                  <div className="form-check form-switch ">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      id="iconSwitch"
                      aria-label="Toggle"
                    />
                  </div>
                </div>
                <small>
                  Automatically forward incomming emails to another address
                </small>

                <span className="d-flex mt-4">
                  <input type="text" className="form-control" />
                  <button className="btn  ms-2 px-4" type="button">
                    Save
                  </button>
                </span>
                <div className=" card mt-4">
                  <div className="card-body m-0">
                    <small className="card-description">
                      <i class="bi bi-exclamation-circle me-3"></i>A copy of all
                      incoming emails will be sent to this address while keeping
                      originals in your inbox. Forwarding rules apply to new
                      emails only.
                    </small>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default EmailAccounts;
