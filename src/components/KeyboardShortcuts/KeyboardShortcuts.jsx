import { useEffect } from "react";
import KeyboardCard from "./Card/Card";
import './KeyboardShortcuts.css'

function HelpAndSupportModel({ onClose }) {
  // Lock body scroll while modal is open
  useEffect(() => {
    document.body.style.overflow = "hidden"; // disable scroll
    return () => {
      document.body.style.overflow = ""; // restore scroll on close
    };
  }, []);

  return (
    <>
      {/* Backdrop */}
      <div
        className="modal-backdrop fade show"
        onClick={onClose} // optional: clicking outside closes modal
      ></div>

      {/* Modal */}
      <div
        className="modal fade show"
        style={{ display: "block" }}
        role="dialog"
        aria-modal="true"
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content ">
            <div className="modal-body">
              {/* Modal Header */}
              <div className="d-flex justify-content-between keybord-shortcut-keys">
                <div className="mb-3 px-2">
                  <span className="d-flex align-items-baseline">
                    <i className="fa-regular fa-keyboard me-2 fs-5 modal-icon"></i>
                    <h5 className="modal-title">Keyboard Shortcuts</h5>
                  </span>
                  <small className="header-description">
                    Master Violetis Mail with these powerful keyboard shortcuts
                  </small>
                </div>
                <button
                  type="button"
                  className="btn-close fs-6"
                  onClick={onClose}
                ></button>
              </div>

              {/*Row 1*/}
              <div className="mb-2 m-0 p-0 px-2">
                <div className="row">
                  {/*General Actions*/}
                  <div className="col-md-6 col-12 ">
                    <h6 className="mb-3">General Actions</h6>
                    <div>
                      <KeyboardCard title="New Email" shortcut="Ctrl+N" />
                      <KeyboardCard title="Search" shortcut="Ctrl+K" />
                      <KeyboardCard title="Settings" shortcut="Ctrl+," />
                      <KeyboardCard title="Help" shortcut="F1" />
                      <KeyboardCard
                        title="Toggle Dark Mode"
                        shortcut="Ctrl+D"
                      />
                    </div>
                  </div>

                  {/*Email Actions*/}
                  <div className="col-md-6 col-12">
                    <h6 className="mb-3">Email Actions</h6>
                    <div className="">
                      <KeyboardCard title="Reply" shortcut="Ctrl+R" />
                      <KeyboardCard title="Reply All" shortcut="Ctrl+Shift+R" />
                      <KeyboardCard title="Forward" shortcut="Ctrl+F" />
                      <KeyboardCard title="Delete" shortcut="Del" />
                      <KeyboardCard title="Archieve" shortcut="E" />
                    </div>
                  </div>
                </div>
              </div>

              {/*Row 2*/}
              <div className="mb-2 m-0 p-0 p-2">
                <div className="row">
                  {/*Navigation*/}
                  <div className="col-md-6 col-12 mb-3 mb-md-0">
                    <h6 className="mb-3">Navigation</h6>
                    <div className="">
                      <KeyboardCard title="Go to Inbox" shortcut="G+I" />
                      <KeyboardCard title="Go to sent" shortcut="G+S" />
                      <KeyboardCard title="Go to Drafts" shortcut="G+D" />
                      <KeyboardCard title="Previous Email" shortcut="K" />
                      <KeyboardCard title="Next Email" shortcut="J" />
                    </div>
                    <div className="col-6"></div>
                  </div>

                  {/*AI Features*/}
                  <div className="col-md-6 col-12 ">
                    <h6 className="mb-3">AI Features</h6>
                    <div className="">
                      <KeyboardCard
                        title="Violet Write"
                        shortcut="Ctrl+Shift+W"
                      />
                      <KeyboardCard
                        title="Echo Search"
                        shortcut="Ctrl+Shift+R"
                      />
                      <KeyboardCard title="Tone Lens" shortcut="Ctrl+Shift+F" />
                      <KeyboardCard
                        title="AI Hub Toggle"
                        shortcut="Ctrl+Shift+A"
                      />
                      <KeyboardCard
                        title="Focus Mode"
                        shortcut="Ctrl+Shift+F"
                      />
                    </div>
                  </div>
                </div>
              </div>

              <div className="card keybord-shortcut-keys-footer">
                <div className="card-body m-0 p-0 py-3">
                  <span className="d-flex align-items-baseline">
                    <i className="fa-regular fa-lightbulb me-1"></i>
                    <h6 className="card-title">Pro Tip</h6>
                  </span>
                  <small className="card-description">
                    anytime to see context-specific shortcuts for the current view.
                  </small>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default HelpAndSupportModel;
