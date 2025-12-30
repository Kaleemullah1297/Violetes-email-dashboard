import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { useContext } from "react";
import ProfileLayout from "./pages/Profile/ProfileLayout";
import AccountSettingsLayout from "./pages/AccountSettings/AccountSettingsLayout";
import MainPageLayout from "./pages/MainPage/MainPageLayout";
import DarkThemeState from "./context/DarkTheme.jsx";
import DarkThemeContext from "./context/DarkThemeContext";

function AppContent() {
  const { theme } = useContext(DarkThemeContext);

  return (
    <div className={`app-root ${theme}`}>
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
    </div>
  );
}

function App() {
  return (
    <DarkThemeState>
      <AppContent />
    </DarkThemeState>
  );
}

export default App;
