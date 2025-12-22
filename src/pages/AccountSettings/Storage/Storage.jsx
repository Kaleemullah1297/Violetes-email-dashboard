//import "./privacySettings.css";
import "./Storage.css";
import ProgressBar from "../../../components/ProgressBar/ProgressBar";

function Storage() {
  return (
    <>
      <div className="card mt-md-0 mt-3 me-md-0 me-3 mb-5">
        <div className="div mb-5 storage-settings">
          {/*Header*/}
          <div className="mb-4 py-3 d-flex align-items-center storage-settings__header">
            <i className="fa-regular fa-hard-drive me-3 ms-4"></i>
            <span>
              <h5 className="m-0 p-0 ">Storage Management</h5>
              <small>Monitor and manage your storage</small>
            </span>
          </div>

          <div className="ms-4 me-4">
            <div className="mb-4">
              <h5>Storage Management</h5>
              <small>Monitor your storage usage and manage your data</small>
            </div>

            <div className="card">
              <div className="card-body">
                <span className="d-flex justify-content-between mb-5">
                  <h5 className="card-title">Storage Usage</h5>
                  <p>Date</p>
                </span>
                <div className="py-4">
                  <ProgressBar progress={10} />
                </div>
                <p className="mt-5">storage</p>
              </div>
            </div>

            <div className="row mt-5 mb-5">
              <div className="col-md-6 col-12">
                <div className="card">
                  <div className="card-body">
                    <h5 className="card-title mb-5">Emails</h5>
                    <h2 className="mb-5">5.2 GB</h2>
                    <p>12,123 emails</p>
                  </div>
                </div>
              </div>
              <div className="col-md-6 col-12">
                <div className="card">
                  <div className="card-body">
                    <h5 className="card-title mb-5">Usage</h5>
                    <h2 className="mb-5">3.2 GB</h2>
                    <p>1,245 emails</p>
                  </div>
                </div>
              </div>
            </div>

            <span className="d-flex d-flex justify-content-center mb-3 storage-button">
              <button className="btn btn-outline-primary w-100">
                Clean Up Storage
              </button>
            </span>
            <span className="d-flex justify-content-center w-100 storage-button">
              <button className="btn btn-outline-primary w-100">
                Upgrade Storage
              </button>
            </span>
          </div>
        </div>
      </div>
    </>
  );
}

export default Storage;
