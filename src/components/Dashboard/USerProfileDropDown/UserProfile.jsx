import "./USerProfile.css";
//import { useState } from "react";

function UserProfileDropdown() {
  //const [open, setOpen] = useState(false);

  const user = {
    name: "Kaleemullah",
    email: "kaleem@example.com",
    image: "https://i.pravatar.cc/40",
  };

  return (
    <>
      <div className=" position-relative d-flex align-items-center me-2">
        <button
          type="button"
          className="btn d-flex align-items-center m-0 profile-dropdown"
        >
          <img src={user.image} alt="User avatar" className="rounded-circle me-2" />
          <div className="text-start d-flex flex-column">
            <small className="p-0 m-0 fw-semibold lh-1">{user.name}</small>
            <small className="text-muted p-0 m-0 lh-1">{user.email}</small>
          </div>
        </button>
        <i
          className="bi bi-chevron-down ms-1"
          onClick={() => alert("Ur data")}
        ></i>
      </div>
    </>
  );
}

export default UserProfileDropdown;
