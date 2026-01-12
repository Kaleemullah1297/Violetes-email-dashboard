import "./SidebarProfileCard.css";
import { useState } from "react";
import ProgressBar from "../../ProgressBar/ProgressBar";
import focus from "../../../assets/logo.png";

function SidebarProfileCard() {
  const [name, setName] = useState("John Doe");
  const [role, setRole] = useState("Senior Manager");
  const [email, setEmail] = useState("john.doe@company.com");
  const [startTime, setStartTime] = useState("9:00 AM");
  const [endTime, setEndTime] = useState("6:00 PM");
  const [percentage, setPercentage] = useState(83);
  const imgSrc = "";
  return (
    <>
      <div className="card mx-3 pb-4 sidebarprofile-card">
        <div className="card-body m-0 p-0 text-center justify-content-center">
          <div className="sidebarprofile-card-header mb-3">
            {imgSrc ? (
              <img src={imgSrc} alt="text" className="img-fluid" />
            ) : (
              <h5 className="profile-initials text-center">JD</h5>
            )}
          </div>
          <h5 className="card-title text-center m-0 p-0" value={name}>
            {name}
          </h5>
          <small className="text-muted" value={role}>
            {role}
          </small>
          <br />
          <small className="text-muted" value={email}>
            {email}
          </small>
          <div>
            <small className="card-title">
              Available: {startTime} - {endTime}
            </small>

            <small> 5 working days/week</small>
          </div>
          <hr />
          <small value={percentage}>Profile {percentage}% complete</small>
          <ProgressBar />
          <div className="d-flex align-items-center justify-content-center mt-3">
            <div className="me-2 bg-danger px-1">
              <small className="d-block">Signatures</small>
              <small>3</small>
            </div>
            <div className="me-2 bg-danger px-1">
              <small className="d-block">Social Links</small>
              <small>3</small>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default SidebarProfileCard;
