// import { Link, NavLink, useLocation } from "react-router-dom";
// import { useSelector } from "react-redux";
// import "./Navigation.css";

// export default function AccountNavigation() {
//   const { currentUser } = useSelector((state: any) => state.accountReducer);
//   const links = currentUser ? ["Profile"] : ["Signin", "Signup"];
//   const active = (path: string) => (pathname.includes(path) ? "active" : "");
//   const { pathname } = useLocation();
//   return (
//     <div id="wd-account-navigation" className="wd list-group fs-5 rounded-0">
//       <NavLink
//         id="wd-account-signin-link"
//         to="/Kanbas/Account/Signin"
//         className={({ isActive }) =>
//           isActive
//             ? "list-group-item active-account"
//             : "list-group-item text-danger border-0"
//         }
//       >
//         Signin
//       </NavLink>

//       <NavLink
//         id="wd-account-signup-link"
//         to="/Kanbas/Account/Signup"
//         className={({ isActive }) =>
//           isActive
//             ? "list-group-item active-account"
//             : "list-group-item text-danger border-0"
//         }
//       >
//         Signup
//       </NavLink>

//       <NavLink
//         id="wd-account-profile-link"
//         to="/Kanbas/Account/Profile"
//         className={({ isActive }) =>
//           isActive
//             ? "list-group-item active-account"
//             : "list-group-item text-danger border-0"
//         }
//       >
//         Profile
//       </NavLink>
//       {currentUser && currentUser.role === "ADMIN" && (
//         <Link
//           to={`/Kanbas/Account/Users`}
//           className={`list-group-item boder-0 border-white ${active("Users")}`}
//         >
//           {" "}
//           Users{" "}
//         </Link>
//       )}
//     </div>
//   );
// }
import { Link, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
export default function AccountNavigation() {
  const { currentUser } = useSelector((state: any) => state.accountReducer);
  const links = currentUser ? ["Profile"] : ["Signin", "Signup"];
  const { pathname } = useLocation();
  const active = (path: string) => (pathname.includes(path) ? "active" : "");

  return (
    <div
      id="wd-account-navigation"
      className="wd list-group border-0 rounded-0"
    >
      {links.map((link: string) => (
        <Link
          to={`/Kanbas/Account/${link}`}
          className={`list-group-item text-danger border border-0 ${
            pathname.includes(link) ? "active" : ""
          }`}
        >
          {" "}
          {link}{" "}
        </Link>
      ))}
      {currentUser && currentUser.role === "ADMIN" && (
        <Link
          to={`/Kanbas/Account/Users`}
          className={`list-group-item boder-0 border-white ${active("Users")}`}
        >
          {" "}
          Users{" "}
        </Link>
      )}

      {/* <Link to={`/Kanbas/Account/Signin`}> Signin </Link> <br />
      <Link to={`/Kanbas/Account/Signup`}> Signup </Link> <br />
      <Link to={`/Kanbas/Account/Profile`}> Profile </Link> <br /> */}
    </div>
  );
}
