import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ProfileLayout from "./pages/Profile/ProfileLayout";
import AccountSettingsLayout from "./pages/AccountSettings/AccountSettingsLayout";
import MainPageLayout from "./pages/MainPage/MainPageLayout";
//import TestPage from "./pages/test";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/dashboard/*" element={<MainPageLayout />} />
          <Route
            path="/account-settings/*"
            element={<AccountSettingsLayout />}
          />
          <Route path="/profile/*" element={<ProfileLayout />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
