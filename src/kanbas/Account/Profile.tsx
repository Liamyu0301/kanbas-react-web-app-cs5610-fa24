import { Link } from "react-router-dom";
export default function Profile() {
  return (
    <div id="wd-profile-screen" className="container">
      <h1>Profile</h1>

      {/* Username */}
      <input
        id="wd-username"
        value="alice"
        placeholder="username"
        className="form-control mb-2"
      />

      {/* Password */}
      <input
        id="wd-password"
        value="123"
        placeholder="password"
        type="password"
        className="form-control mb-2"
      />

      {/* First Name */}
      <input
        id="wd-firstname"
        value="Alice"
        placeholder="First Name"
        className="form-control mb-2"
      />

      {/* Last Name */}
      <input
        id="wd-lastname"
        value="Wonderland"
        placeholder="Last Name"
        className="form-control mb-2"
      />

      {/* Date of Birth */}
      <input
        id="wd-dob"
        value="2000-01-01"
        type="date"
        className="form-control mb-2"
      />

      {/* Email */}
      <input
        id="wd-email"
        value="alice@wonderland.com"
        type="email"
        className="form-control mb-2"
      />

      {/* Role */}
      <select id="wd-role" className="form-control mb-2">
        <option value="USER">User</option>
        <option value="ADMIN">Admin</option>
        <option value="FACULTY">Faculty</option>
        <option value="STUDENT">Student</option>
      </select>

      {/* Signout Button */}
      <Link
        id="wd-signout-btn"
        to="/Kanbas/Account/Signin"
        className="btn btn-danger w-100"
      >
        Signout
      </Link>
    </div>
  );
}
