import { useState } from "react";

function SettingsTabs() {
  const [activeTab, setActiveTab] = useState("general");

  return (
    <>
      <ul className="nav nav-tabs">
        <li className="nav-item">
          <button
            className={`nav-link ${activeTab === "general" ? "active" : ""}`}
            onClick={() => setActiveTab("general")}
          >
            General
          </button>
        </li>

        <li className="nav-item">
          <button
            className={`nav-link ${activeTab === "security" ? "active" : ""}`}
            onClick={() => setActiveTab("security")}
          >
            Security
          </button>
        </li>
      </ul>

      <div className="tab-content mt-3">
        {activeTab === "general" && <div>General Content</div>}
        {activeTab === "security" && <div>Security Content</div>}
      </div>
    </>
  );
}

export default SettingsTabs;