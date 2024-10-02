import React from "react";
import { Link } from "react-router-dom";
export default function Signup() {
  return (
    <div id="wd-signup-screen">
      <h1>Sign up</h1>
      <input
        id="wd-username"
        placeholder="username"
        className="form-control mb-2"
      />
      <input
        id="wd-password"
        placeholder="password"
        type="password"
        className="form-control mb-2"
      />
      <Link
        id="wd-signup-btn"
        to="/Kanbas/Account/Profile"
        className="btn btn-primary w-100"
      >
        Sign up
      </Link>
      <Link
        id="wd-signin-link"
        to="/Kanbas/Account/Signin"
        className="d-block mt-2"
      >
        Sign in
      </Link>
    </div>
  );
}
