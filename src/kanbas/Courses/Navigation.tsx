import { NavLink } from "react-router-dom";
import "./Navigation.css"; 

export default function CoursesNavigation() {
  return (
    <div id="wd-courses-navigation" className="wd list-group fs-5 rounded-0">
      {/* Home Link */}
      <NavLink
        id="wd-course-home-link"
        to="/Kanbas/Courses/1234/Home"
        className={({ isActive }) =>
          isActive
            ? "list-group-item active border border-0"
            : "list-group-item border border-0"
        }
      >
        Home
      </NavLink>

      {/* Modules Link */}
      <NavLink
        id="wd-course-modules-link"
        to="/Kanbas/Courses/1234/Modules"
        className={({ isActive }) =>
          isActive
            ? "list-group-item active border border-0"
            : "list-group-item border border-0"
        }
      >
        Modules
      </NavLink>

      {/* Piazza Link */}
      <NavLink
        id="wd-course-piazza-link"
        to="/Kanbas/Courses/1234/Piazza"
        className={({ isActive }) =>
          isActive
            ? "list-group-item active border border-0"
            : "list-group-item border border-0"
        }
      >
        Piazza
      </NavLink>

      {/* Zoom Link */}
      <NavLink
        id="wd-course-zoom-link"
        to="/Kanbas/Courses/1234/Zoom"
        className={({ isActive }) =>
          isActive
            ? "list-group-item active border border-0"
            : "list-group-item border border-0"
        }
      >
        Zoom
      </NavLink>

      {/* Assignments Link */}
      <NavLink
        id="wd-course-assignments-link"
        to="/Kanbas/Courses/1234/Assignments"
        className={({ isActive }) =>
          isActive
            ? "list-group-item active border border-0"
            : "list-group-item border border-0"
        }
      >
        Assignments
      </NavLink>

      {/* Quizzes Link */}
      <NavLink
        id="wd-course-quizzes-link"
        to="/Kanbas/Courses/1234/Quizzes"
        className={({ isActive }) =>
          isActive
            ? "list-group-item active border border-0"
            : "list-group-item border border-0"
        }
      >
        Quizzes
      </NavLink>

      {/* Grades Link */}
      <NavLink
        id="wd-course-grades-link"
        to="/Kanbas/Courses/1234/Grades"
        className={({ isActive }) =>
          isActive
            ? "list-group-item active border border-0"
            : "list-group-item border border-0"
        }
      >
        Grades
      </NavLink>

      {/* People Link */}
      <NavLink
        id="wd-course-people-link"
        to="/Kanbas/Courses/1234/People"
        className={({ isActive }) =>
          isActive
            ? "list-group-item active border border-0"
            : "list-group-item border border-0"
        }
      >
        People
      </NavLink>
    </div>
  );
}