import { Route, Routes } from "react-router-dom";
import Navbar from "../../components/Profile/Navbar/Navbar";
import ProfileSettingsSidebar from "../../components/Profile/Profile-settings-sidebar/profile.jsx";
import PersonalInfo from "./personalInfo/personalInfo.jsx";
import ContactDetails from "./contact-details/contactDetails.jsx";
import WorkInformation from "./workInformation/workInformation.jsx";
import DisplaySettings from "./displaySettings/displaySettings.jsx";
import EmailSignatures from "./emailSignatures/emailSigantures.jsx";
import SocialLinks from "./socailLinks/socialLinks.jsx";

function ProfileLayout() {
  return (
    <>
      <Navbar />
      <div className="d-flex">
        <div>
          <ProfileSettingsSidebar/>
        </div>
        <div className="bg-danger"></div>
        <div className="flex-grow-1 px-3">
          <Routes>
            <Route index element={<PersonalInfo />} />
            <Route path="personal-info" element={<PersonalInfo />} />
            <Route path="contact-details" element={<ContactDetails />} />
            <Route path="work-information" element={<WorkInformation />} />
            <Route path="display-settings" element={<DisplaySettings />} />
            <Route path="email-signatures" element={<EmailSignatures />} />
            <Route path="social-links" element={<SocialLinks />} />
          </Routes>
        </div>
      </div>
    </>
  );
}

export default ProfileLayout;
