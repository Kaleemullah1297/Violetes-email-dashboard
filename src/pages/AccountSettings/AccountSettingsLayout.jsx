import { Route, Routes } from "react-router-dom";
import Navbar from "../../components/Profile/Navbar/Navbar";
import Test from "../../components/AccountSettings/AccountSettingsSidebar/AccountSettingsSidebar";
import General from "./General/General";
import SecurityAndPrivacy from "./Security/Security";
import EmailAccounts from "./EmailAccounts/EmailAccounts";
import Notifications from "./Notifications/Notifications";
import PrivacySettings from "./privacySettings/PrivacySetting";
import Storage from "./Storage/Storage";
import Import from "./Import/Import";

function AccountSettingsLayout() {
  return (
    <>
      <Navbar heading="Account Settings" description="Configure your preferences and security"/>
      <div>
        <div className="d-flex">
          <Test />
          <div className="flex-grow-1 m-0">
            <Routes>
              <Route index element={<General />} />
              <Route path="general" element={<General />}></Route>
              <Route path="security" element={<SecurityAndPrivacy />}></Route>
              <Route path="email-accounts" element={<EmailAccounts />}></Route>
              <Route path="notifications" element={<Notifications />}></Route>
              <Route
                path="privacy-Settings"
                element={<PrivacySettings />}
              ></Route>
              <Route path="storage" element={<Storage />}></Route>
              <Route path="import/export" element={<Import />}></Route>
            </Routes>
          </div>
        </div>
      </div>
    </>
  );
}

export default AccountSettingsLayout;
