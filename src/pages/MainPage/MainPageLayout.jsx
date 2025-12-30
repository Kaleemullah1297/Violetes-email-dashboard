import { Route, Routes } from "react-router-dom";
import MainSideBar from "../../components/MainSidebar/MainSidebar";
import Calender from "./Calender/Calender";
import TaskPage from "./Task/Task";
import Notes from "./Notes/Notes";
import People from "./People/People";
import Newsletters from "./Newletters/Newsletters";
import AiHub from "./AiHub/AiHub";
import DashboradNavBar from "../../components/Dashboard/DasboardNavBar";
import Inbox from "./Inbox/Inbox";
import SentItems from "./SentItems/SentItems";
import Drafts from "./Drafts/Drafts";
import DeletedMails from "./DeletedMails/DeletedMails";
import Archieve from "./Archieves/Archieves";
import JunkEmails from "./JunkEmails/JunkEmails";

function MainPageLayout() {
  return (
    <>
      <div className="d-flex">
        <MainSideBar />
        <div className="flex-grow-1">
          <DashboradNavBar />
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
      </div>
    </>
  );
}

export default MainPageLayout;
