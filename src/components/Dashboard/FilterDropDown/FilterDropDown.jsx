import { useState, useRef, useEffect } from "react";

function FilterDropdown() {
  const ref = useRef(null);

  // Dropdown open/close state only
  const [open, setOpen] = useState(false);

  // Close dropdown on outside click
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (ref.current && !ref.current.contains(e.target)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Close dropdown on Escape key
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <>
      <li className="nav-item me-lg-4 me-2 position-relative" ref={ref}>
        <button
          type="button"
          className="nav-link p-0 settings-toggle d-flex"
          onClick={() => setOpen(!open)}
          aria-expanded={open}
          aria-controls="settings-dropdown"
        >
          <button className="btn d-flex flex-shrink-0 filter-button">
            <i className="bi bi-funnel me-2"></i>
            <span className="d-none d-md-inline">Filters</span>
          </button>
        </button>

        <div
          id="settings-dropdown"
          className={`mt-2 settings-dropdown ${open ? "show" : ""}`}
        >
          {/* QUICK SETTINGS HEADER */}
          <div className="dropdown-section">
            <div className="px-2">
              <h6 className="dropdown-title mb-3">Email Filters</h6>

              <div class="mb-2">
                <label class="form-label m-0 p-0">Status</label>
                <select class="form-select">
                  <option selected disabled>
                    Choose...
                  </option>
                  <option value="inbox">Inbox</option>
                  <option value="sent">Sent</option>
                  <option value="draft">Draft</option>
                </select>
              </div>

              <div class="mb-2">
                <label class="form-label m-0 p-0 mb-1">Priority</label>
                <select class="form-select">
                  <option selected disabled>
                    Choose...
                  </option>
                  <option value="inbox">Inbox</option>
                  <option value="sent">Sent</option>
                  <option value="draft">Draft</option>
                </select>
              </div>

              <div class="mb-2">
                <label class="form-label m-0 p-0 mb-1">Attachments</label>
                <select class="form-select">
                  <option selected disabled>
                    Choose...
                  </option>
                  <option value="inbox">Inbox</option>
                  <option value="sent">Sent</option>
                  <option value="draft">Draft</option>
                </select>
              </div>

              <div class="mb-2">
                <label class="form-label m-0 p-0 mb-1">AI Tone Analysis</label>
                <select class="form-select">
                  <option selected disabled>
                    Choose...
                  </option>
                  <option value="inbox">Inbox</option>
                  <option value="sent">Sent</option>
                  <option value="draft">Draft</option>
                </select>
              </div>

              <div class="mb-2">
                <label class="form-label m-0 p-0 mb-1">Date Range</label>
                <select class="form-select">
                  <option selected disabled>
                    Choose...
                  </option>
                  <option value="inbox">Inbox</option>
                  <option value="sent">Sent</option>
                  <option value="draft">Draft</option>
                </select>
              </div>
            </div>
          </div>
        </div>
      </li>
    </>
  );
}

export default FilterDropdown;
