import { BsGripVertical } from "react-icons/bs";
import GreenCheckmark from "../Modules/GreenCheckmark";
import { IoEllipsisVertical } from "react-icons/io5";
import { FaPlus } from "react-icons/fa6";
import { MdAssignmentAdd } from "react-icons/md";
import PercentageButton from "./AssignmentButtons";
import AssignmentControls from "./AssignmentControls";
import { FaChevronDown } from "react-icons/fa";
import { useParams, Link } from "react-router-dom";
import * as db from "../../Database";

export default function Assignments() {
  const { cid } = useParams();
  const assignments = db.assignments;
  return (
    <div>
      <AssignmentControls />
      <br />
      <br />
      <ul id="wd-assignment" className="list-group rounded-0">
        <li className="wd-assignment list-group-item p-0 mb-5 fs-5 border-gray">
          <div className="wd-title p-3 ps-2 bg-secondary d-flex align-items-center justify-content-between">
            <div className="d-flex align-items-center">
              <BsGripVertical className="me-2 fs-3" />
              <FaChevronDown className="me-2 fs-5" />
              <span>ASSIGNMENTS</span>
            </div>
            <div className="d-flex align-items-center">
              <PercentageButton />
              <FaPlus className="me-3" />
              <IoEllipsisVertical className="fs-4" />
            </div>
          </div>

          {/* Lesson List */}
          <ul className="wd-lessons list-group rounded-0">
            {assignments
              .filter((assignment: any) => assignment.course === cid)
              .map((assignment: any) => (
                <li className="wd-lesson list-group-item p-3 ps-1">
                  <div className="d-flex align-items-start justify-content-between">
                    {/* Icon and Title */}
                    <div className="d-flex align-items-center me-3">
                      <BsGripVertical className="me-2 fs-3" />
                      <MdAssignmentAdd className="me-2 text-success fs-4" />
                      <div>
                        <Link
                          className="wd-assignment-link"
                          to={`/Kanbas/Courses/${cid}/Assignments/${assignment._id}`}
                        >
                          <div className="fw-bold">{assignment._id}</div>
                        </Link>
                        <div className="text-muted small mt-1">
                          <span>
                            <span className="text-danger">
                              Multiple Modules
                            </span>{" "}
                            |
                            <span className="fw-bold">
                              {" "}
                              Not available until
                            </span>{" "}
                            May 6 at 12:00am | Due May 13 at 11:59pm | 100 pts
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="d-flex align-items-center">
                      <GreenCheckmark />
                      <IoEllipsisVertical className="ms-2 fs-5" />
                    </div>
                  </div>
                </li>
              ))}
          </ul>
        </li>
      </ul>
    </div>
  );
}
