import "./Import.css";

function Import() {
  return (
    <>
      <div className="px-4 pt-4 mt-md-0 mt-3 me-md-0 me-3 mb-5 pb-5 import-settings-container">
        <div className="div import-settings">
          {/*Main Header*/}
          <div className="mb-4 py-3 d-flex align-items-center import-settings__header">
            <i className="bi bi-download icon-1 fs-5 me-3 ms-4"></i>
            <span>
              <h5 className="m-0 p-0 ">Import & Export</h5>
              <small>Transfer your data securely</small>
            </span>
          </div>

          {/*Second Main Card*/}
          <div className="ms-5 me-5">
            {/*Second Main Card Issue*/}
            <div className="mb-5">
              <h5>Import & Export</h5>
              <small>
                Transfer your data to and from violete mail with
                secure,encrypted tranfers
              </small>
            </div>

            {/*Import Data Main Card*/}
            <div className="card pb-4 import-data mb-4">
              <div className="card-body m-0 p-0">
                {/*Card Header*/}
                <div className=" d-flex justify-content-between align-items-center mb-4">
                  <span>
                    <span className=" d-flex">
                      <i className="bi bi-download me-2"></i>
                      <h5 className="card-title m-0 p-0">Import Data</h5>
                    </span>
                    <small>
                      Import your emails and data from other providers
                    </small>
                  </span>
                  <div className="tag px-1">
                    <i className="bi bi-shield me-2 fs-6"></i>
                    <small>Encrypted Transfer</small>
                  </div>
                </div>

                {/*Card 1*/}
                <div className="card p-0 p-3 mb-3 import-gmail__card">
                  <div className="card-body m-0 p-0 ps-1 d-flex align-items-center justify-content-between">
                    <div className="d-flex align-items-center">
                      <div>
                        <i className="fa-regular fa-envelope fs-4 me-3"></i>
                      </div>
                      <span>
                        <h6 className="card-title m-0 p-0">
                          Import From Gmail
                        </h6>
                        <small className="d-block">
                          Import emails, contacts, labels and filters
                        </small>
                        <small className="me-2">Most popular</small>
                        <small>IMAP.OAuth 2.0</small>
                      </span>
                    </div>
                    <div className="d-flex ">
                      <div className="d-flex flex-column me-3">
                        <small>~2~5 minutes</small>
                        <small>Secure transfer</small>
                      </div>
                      <button
                        className="btn connect-btn p-0 px-3 m-0"
                        type="button"
                      >
                        Connect
                      </button>
                    </div>
                  </div>
                </div>

                {/*Card 2*/}
                <div className="card p-0 p-3 mb-3 import-outlook__card">
                  <div className="card-body m-0 p-0 ps-1 d-flex align-items-center justify-content-between">
                    <div className="d-flex align-items-center">
                      <span>
                        <i className="fa-regular fa-envelope fs-4 me-3"></i>
                      </span>
                      <span>
                        <h6 className="card-title m-0 p-0">
                          Import From Outlook
                        </h6>
                        <small className="d-block">
                          Import emails, calendar, and folder structure
                        </small>
                        <small className="me-2">Business</small>
                        <small>Exchange • Office 365</small>
                      </span>
                    </div>
                    <div className="d-flex ">
                      <div className="d-flex flex-column me-3">
                        <small>~3-7 minutes</small>
                        <small>Enterprise ready</small>
                      </div>
                      <button
                        className="btn connect-btn p-0 px-3 m-0"
                        type="button"
                      >
                        Connect
                      </button>
                    </div>
                  </div>
                </div>

                {/*Card 3*/}
                <div className="card p-0 p-3 mb-3 import-yahoo__card">
                  <div className="card-body m-0 p-0 ps-1 d-flex align-items-center justify-content-between">
                    <div className="d-flex align-items-center">
                      <span>
                        <i className="fa-regular fa-envelope fs-4 me-3"></i>
                      </span>
                      <span>
                        <h6 className="card-title m-0 p-0">
                          Import from Yahoo Mail
                        </h6>
                        <small className="d-block">
                          Import emails and contacts with full sync
                        </small>
                        <small className="me-2">Personal</small>
                        <small>IMAP • POP3</small>
                      </span>
                    </div>
                    <div className="d-flex ">
                      <div className="d-flex flex-column me-3">
                        <small>~2-4 minutes</small>
                        <small>Simple setup</small>
                      </div>
                      <button
                        className="btn connect-btn p-0 px-3 m-0"
                        type="button"
                      >
                        Connect
                      </button>
                    </div>
                  </div>
                </div>

                {/*Card 4*/}
                <div className="card p-0 p-3 mb-3 import-file__card">
                  <div className="card-body m-0 p-0 ps-1 d-flex align-items-center justify-content-between">
                    <div className="d-flex align-items-center">
                      <span>
                        <i className="fa-regular fa-file-lines fs-3 me-3"></i>
                      </span>
                      <span>
                        <h6 className="card-title m-0 p-0">
                          Import from Files
                        </h6>
                        <small className="d-block">
                          Upload email archive files for bulk import
                        </small>
                        <small className="me-2">Advanced</small>
                        <small>.pst • .mbox • .eml • Max 5GB</small>
                      </span>
                    </div>
                    <div className="d-flex ">
                      <div className="d-flex flex-column me-3">
                        <small>~5-15 minutes</small>
                        <small>Batch processing</small>
                      </div>
                      <button
                        className="btn connect-btn p-0 px-3 m-0"
                        type="button"
                      >
                        Upload File
                      </button>
                    </div>
                  </div>
                </div>

                {/*Card 5*/}
                <div className="card p-0 p-3 mb-5 import-email__providers">
                  <div className="card-body m-0 p-0 ps-1 d-flex align-items-center justify-content-between">
                    <div className="d-flex align-items-center">
                      <span>
                        <i className="fa-regular fa-envelope fs-4 me-3"></i>
                      </span>
                      <span>
                        <h6 className="card-title m-0 p-0">
                          Other Email Providers
                        </h6>
                        <small className="d-block">
                          Import from any IMAP/POP3 compatible provider
                        </small>
                        <small className="me-2">Custom</small>
                        <small>AOL • ProtonMail • Zoho • Apple Mail</small>
                      </span>
                    </div>
                    <div className="d-flex ">
                      <div className="d-flex flex-column me-3">
                        <small>~3-10 minutes</small>
                        <small>Manual config</small>
                      </div>
                      <button
                        className="btn connect-btn p-0 px-3 m-0"
                        type="button"
                      >
                        Configure
                      </button>
                    </div>
                  </div>
                </div>

                {/*Card 6*/}
                <div className="card p-0 p-3 mb-3">
                  <div className="card-body m-0 p-0 ">
                    <span className="d-flex flex-row align-items-baseline">
                      <i className="fa-regular fa-clock me-2"></i>
                      <h6 className="card-title">Recent Import Activity</h6>
                    </span>
                    <small className="card-description">
                      No recent imports. Your imported data will appear here
                      with progress updates.
                    </small>
                  </div>
                </div>
              </div>
            </div>

            {/*Export Data Main Card*/}
            <div className="card pb-4 export-data">
              <div className="card-body m-0 p-0">
                {/*Card Header*/}
                <div className=" d-flex justify-content-between align-items-center mb-4">
                  <span>
                    <span className=" d-flex">
                      <i className="bi bi-download me-2"></i>
                      <h5 className="card-title m-0 p-0">Export Data</h5>
                    </span>
                    <small>Download your data for backup or migration</small>
                  </span>
                  <div className="tag px-1">
                    <i className="bi bi-shield me-2 fs-6"></i>
                    <small>Secure Download</small>
                  </div>
                </div>

                <div className="row mb-4">
                  <div className="col-6">
                    <div className="card pb-3 export-data__allEmails">
                      <div className="card-body p-0 m-0">
                        <div className="mb-3 d-flex align-items-center">
                          <i className="fa-regular fa-envelope fs-4 me-2"></i>
                          <span>
                            <h6 className="card-title m-0 p-0">All Emails</h6>
                            <small className="">12,847</small>
                          </span>
                        </div>
                        <select className="form-select mb-2">
                          <option value="">Format</option>
                        </select>
                        <button className="btn w-100">Export</button>
                      </div>
                    </div>
                  </div>
                  <div className="col-6">
                    <div className="card pb-3 export-data__allEmails">
                      <div className="card-body p-0 m-0">
                        <div className="mb-3 d-flex align-items-center">
                          <i className="bi bi-people fs-4 me-3 text-center"></i>
                          <span>
                            <h6 className="card-title m-0 p-0">Contacts</h6>
                            <small className="">127 contacts</small>
                          </span>
                        </div>
                        <select className="form-select mb-2">
                          <option value="">Format</option>
                        </select>
                        <button className="btn w-100">Export</button>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row mb-4">
                  <div className="col-6">
                    <div className="card pb-3 export-data__allEmails">
                      <div className="card-body p-0 m-0">
                        <div className="mb-3 d-flex align-items-center">
                          <i className="fa-regular fa-calendar fs-4 me-2"></i>
                          <span>
                            <h6 className="card-title m-0 p-0">Calender</h6>
                            <small className="">3 calendar</small>
                          </span>
                        </div>
                        <select className="form-select mb-2">
                          <option value="">Format</option>
                        </select>
                        <button className="btn w-100">Export</button>
                      </div>
                    </div>
                  </div>
                  <div className="col-6">
                    <div className="card pb-3 export-data__allEmails">
                      <div className="card-body p-0 m-0">
                        <div className="mb-3 d-flex align-items-center">
                          <i className="bi bi-gear me-2 fs-4 text-center"></i>
                          <span>
                            <h6 className="card-title m-0 p-0">
                              Account Settings
                            </h6>
                            <small className="">All prefrences</small>
                          </span>
                        </div>
                        <select className="form-select mb-2">
                          <option value="">Format</option>
                        </select>
                        <button className="btn w-100">Export</button>
                      </div>
                    </div>
                  </div>
                </div>

                {/*Complete Data export Card*/}
                <div className="card p-3 export-complete-data">
                  <div className="card-body m-0 p-0">
                    <div className="d-flex align-items-center justify-content-between">
                      <span>
                        <h6 className="card-title m-0 p-0">
                          Complete Data Export
                        </h6>
                        <small className="text-muted">
                          Export all your data in one comprehensive package
                        </small>
                      </span>
                      <span className="recommended-tag">
                        <small className="recommended-tag m-0 px-1">
                          Recommended
                        </small>
                      </span>
                    </div>
                    <div className="mt-3 d-flex justify-content-between align-items-center">
                      <span>
                        <small className="d-block">
                          Includes: Emails, Contacts, Calendar, Settings,
                          Signatures
                        </small>
                        <small>
                          Estimated size: ~2.8 GB • Encrypted archive
                        </small>
                      </span>
                      <button className="btn" type="button">
                        <i className="bi bi-download me-2"></i>Export All
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="card mt-4 import-export-footer">
              <div className="card-body m-0 p-0 p-4">
                <div className="d-flex align-items-center justify-content-between">
                  <span>
                    <h6 className="card-title m-0 p-0">
                      AI Migration Assistant
                    </h6>
                    <small className="d-block">
                      Let our AI help you migrate from your current email
                      provider with zero data loss and optimized organization.
                    </small>
                    <button className="btn disabeled m-0 p-0 px-1 me-2" type="button">
                      ✨ Start Smart Migration
                    </button>
                    <small>
                      ✨ Automatically organizes and deduplicates your data
                    </small>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Import;
