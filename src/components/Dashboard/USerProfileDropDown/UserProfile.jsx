import { useState } from "react";
import "./USerProfile.css";

function UserProfileDropdown() {
  const [open, setOpen] = useState(false);
  const [imgError, setImgError] = useState(false);

  const user = {
    name: "Kaleemullah",
    email: "kaleemskkkkkkkkkk@example.com",
    image: "https://i.pravatar.cc/40", // break URL to test fallback
  };

  /* ---------- Helpers ---------- */

  const truncateEmail = (email, visibleChars = 5) => {
    if (!email || !email.includes("@")) return email;
    const [local, domain] = email.split("@");
    if (local.length <= visibleChars) return email;
    return `${local.slice(0, visibleChars)}...@${domain}`;
  };

  const initials = user.name
    .split(" ")
    .map((word) => word[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();

  /* ---------- Render ---------- */

  return (
    <div className="position-relative d-flex align-items-center me-2">
      <button
        type="button"
        className="btn d-flex align-items-center profile-dropdown"
        onClick={() => setOpen((prev) => !prev)}
      >
        {/* Avatar */}
        {user.image && !imgError ? (
          <img
            src={user.image}
            alt="User avatar"
            className="rounded-circle profile-avatar-img me-2"
            onError={() => setImgError(true)}
          />
        ) : (
          <div className="profile-avatar-fallback me-2">{initials}</div>
        )}

        {/* Name + Email (MD and up only) */}
        <div className="text-start d-none d-md-flex flex-column">
          <small className="fw-semibold lh-1">{user.name}</small>
          <small className="text-muted lh-1">{truncateEmail(user.email)}</small>
        </div>
      </button>

      {/* Chevron */}
      <i
        className={`bi bi-chevron-down ms-1 profile-chevron ${
          open ? "rotate" : ""
        }`}
        onClick={() => setOpen((prev) => !prev)}
      />

      {/* Dropdown */}
      {open && (
        <div className="profile-menu shadow">
          <ul className="list-unstyled m-0">
            <li className="dropdown-item fw-semibold">{user.name}</li>
            <li className="dropdown-item text-muted text-break">
              {user.email}
            </li>
            <li className="dropdown-item text-danger">Logout</li>
          </ul>
        </div>
      )}
    </div>
  );
}

export default UserProfileDropdown;
