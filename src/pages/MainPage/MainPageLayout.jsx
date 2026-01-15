import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import DashboardSidebar from "../../components/Dashboard/DashboardSidebar/DashboardSidebar";
import DashboardNavbar from "../../components/Dashboard/DashboardNavbar/DashboardNavbar";

import Calender from "./Calender/Calender";
import TaskPage from "./Task/Task";
import Notes from "./Notes/Notes";
import People from "./People/People";
import Newsletters from "./Newletters/Newsletters";
import AiHub from "./AiHub/AiHub";
import Inbox from "./Inbox/Inbox";
import SentItems from "./SentItems/SentItems";
import Drafts from "./Drafts/Drafts";
import DeletedMails from "./DeletedMails/DeletedMails";
import Archieve from "./Archieves/Archieves";
import JunkEmails from "./JunkEmails/JunkEmails";

import "./MainPageLayout.css"; // New CSS file

function MainPageLayout() {
  // Sidebar open state
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  // Toggle sidebar (called from hamburger in Navbar)
  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);

  // Close sidebar (called on link click, overlay click, or cross button)
  const closeSidebar = () => setIsSidebarOpen(false);

  return (
    <div className={`main-layout ${isSidebarOpen ? "sidebar-open" : ""}`}>
      {/* Sidebar */}
      <DashboardSidebar isOpen={isSidebarOpen} onClose={closeSidebar} />

      {/* Main Content Area */}
      <div className="content-area">
        {/* Navbar passes toggle function to show sidebar */}
        <DashboardNavbar onHamburgerClick={toggleSidebar} />

        <Routes>
          <Route index element={<Inbox />} />
          <Route path="calender" element={<Calender />} />
          <Route path="tasks" element={<TaskPage />} />
          <Route path="notes" element={<Notes />} />
          <Route path="people" element={<People />} />
          <Route path="newsletters" element={<Newsletters />} />
          <Route path="ai-hub" element={<AiHub />} />
          <Route path="inbox" element={<Inbox />} />
          <Route path="sent-items" element={<SentItems />} />
          <Route path="drafts" element={<Drafts />} />
          <Route path="deleted-items" element={<DeletedMails />} />
          <Route path="archieve" element={<Archieve />} />
          <Route path="junk-emails" element={<JunkEmails />} />
        </Routes>
      </div>

      {/* Overlay for mobile when sidebar is open */}
      {isSidebarOpen && <div className="overlay" onClick={closeSidebar}></div>}
    </div>
  );
}

export default MainPageLayout;
