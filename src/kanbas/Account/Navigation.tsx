import { NavLink } from "react-router-dom";
import "./Navigation.css";

export default function AccountNavigation() {
  return (
    <div id="wd-account-navigation" className="wd list-group fs-5 rounded-0">
      <NavLink
        id="wd-account-signin-link"
        to="/Kanbas/Account/Signin"
        className={({ isActive }) =>
          isActive
            ? "list-group-item active-account"
            : "list-group-item text-danger border-0"
        }
      >
        Signin
      </NavLink>

      <NavLink
        id="wd-account-signup-link"
        to="/Kanbas/Account/Signup"
        className={({ isActive }) =>
          isActive
            ? "list-group-item active-account"
            : "list-group-item text-danger border-0"
        }
      >
        Signup
      </NavLink>

      <NavLink
        id="wd-account-profile-link"
        to="/Kanbas/Account/Profile"
        className={({ isActive }) =>
          isActive
            ? "list-group-item active-account"
            : "list-group-item text-danger border-0"
        }
      >
        Profile
      </NavLink>
    </div>
  );
}