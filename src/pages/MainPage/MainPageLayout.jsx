import { Route, Routes } from "react-router-dom";
import MainSideBar from "../../components/main-sidebar/MainSidebar";
import Calender from "./Calender/Calender";
import TaskPage from "./Task/Task";
import Notes from "./Notes/Notes";
import People from "./People/People";
import Newsletters from "./Newletters/Newsletters";
import AiHub from "./AiHub/AiHub";
import DashboradNavBar from "../../components/Dashboard/DasboardNavBar";

function MainPageLayout() {
  return (
    <>
      <div className="d-flex">
        <MainSideBar />
        <div className="flex-grow-1">
          <DashboradNavBar />
          <Routes>
            <Route path="calender" element={<Calender />} />
            <Route path="tasks" element={<TaskPage />} />
            <Route path="notes" element={<Notes />} />
            <Route path="people" element={<People />} />
            <Route path="newsletters" element={<Newsletters />} />
            <Route path="ai-hub" element={<AiHub />} />
          </Routes>
        </div>
      </div>
    </>
  );
}

export default MainPageLayout;
