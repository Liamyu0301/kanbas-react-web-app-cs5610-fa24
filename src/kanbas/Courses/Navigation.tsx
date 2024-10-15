import { Link, useParams } from "react-router-dom";
import { useLocation } from "react-router-dom";
export default function CoursesNavigation() {
  const { cid } = useParams();
  const { pathname } = useLocation();
  const links = [
    { label: "Home", path: `/Kanbas/Courses/${cid}/Home` },
    { label: "Modules", path: `/Kanbas/Courses/${cid}/Modules` },
    { label: "Piazza", path: `/Kanbas/Courses/${cid}/Piazza` },
    { label: "Zoom", path: `/Kanbas/Courses/${cid}/Zoom` },
    { label: "Assignments", path: `/Kanbas/Courses/${cid}/Assignments` },
    { label: "Quizzes", path: `/Kanbas/Courses/${cid}/Quizzes` },
    { label: "Grades", path: `/Kanbas/Courses/${cid}/Grades` },
    { label: "People", path: `/Kanbas/Courses/${cid}/People` },
  ];
  return (
    <div className="wd list-group rounded-0" id="wd-courses-navigation">
      {links.map((link) => (
        <Link
          key={link.label}
          to={link.path}
          className={`list-group-item bg-white
        ${
          pathname.includes(link.label)
            ? "text-black bg-white"
            : "text-danger bg-white"
        }`}
          style={
            pathname.includes(link.label)
              ? {
                  borderLeft: "3px solid black",
                  borderRight: "none",
                  borderTop: "none",
                  borderBottom: "none",
                }
              : { border: "none" }
          }
        >
          {link.label}
        </Link>
      ))}
    </div>
  );
}
