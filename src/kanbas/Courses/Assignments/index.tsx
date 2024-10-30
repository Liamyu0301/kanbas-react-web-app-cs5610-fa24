import { BsGripVertical } from "react-icons/bs";
import GreenCheckmark from "../Modules/GreenCheckmark";
import { IoEllipsisVertical } from "react-icons/io5";
import { FaPlus, FaTrash, FaMagnifyingGlass } from "react-icons/fa6";
import { MdAssignmentAdd } from "react-icons/md";
// import PercentageButton from "./AssignmentButtons";
// import AssignmentControls from "./AssignmentControls";
import { FaChevronDown } from "react-icons/fa";
import { useParams, Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { deleteAssignment } from "./reducer";
// import * as db from "../../Database";

export default function Assignments() {
  const { cid } = useParams();
  const assignments = useSelector((state: any) =>
    state.assignmentsReducer.assignments.filter(
      (assignment: any) => assignment.course === cid
    )
  );
  const { currentUser } = useSelector((state: any) => state.accountReducer);
  const isFaculty = currentUser?.role === "FACULTY";
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const AddAssignmentClick = () => {
    navigate(`/Kanbas/Courses/${cid}/Assignments/new`);
  };

  const deleteButton = (assignmentId: string) => {
    if (window.confirm("Please make sure to delete this assignment")) {
      dispatch(deleteAssignment(assignmentId));
    }
  };
  return (
    <div id="wd-assignments" className="text-nowrap">
      <div id="wd-modules-controls" className="text-nowrap">
        {isFaculty && (
          <>
            <button
              id="wd-add-module-btn"
              className="btn btn-lg btn-danger me-1 float-end"
              onClick={AddAssignmentClick}
            >
              <FaPlus
                className="position-relative me-2"
                style={{ bottom: "1px" }}
              />
              Assignment
            </button>
            <div className="dropdown d-inline me-1 float-end">
              <button
                id="wd-publish-all-btn"
                className="btn btn-lg btn-secondary"
                type="button"
              >
                <FaPlus
                  className="position-relative me-2"
                  style={{ bottom: "1px" }}
                />
                Group
              </button>
            </div>
          </>
        )}
        {}
        <div
          className="me-1"
          style={{ position: "relative", display: "inline-block" }}
        >
          <FaMagnifyingGlass
            style={{
              position: "absolute",
              left: "10px",
              top: "50%",
              transform: "translateY(-50%)",
              pointerEvents: "none",
              color: "#aaa",
            }}
          />
          <input
            id="wd-search-assignment"
            className="form-control form-control-lg"
            placeholder="Search..."
            style={{
              paddingLeft: "35px",
            }}
          />
        </div>
      </div>
      <br />
      <br />
      <ul id="wd-assignment" className="list-group rounded-0">
        <li className="wd-assignment list-group-item p-0 mb-5 fs-5 border-gray">
          <div className="wd-title p-3 ps-2 bg-secondary d-flex align-items-center justify-content-between">
            <div className="d-flex align-items-center">
              <BsGripVertical className="me-2 fs-3" />
              <FaChevronDown className="me-2 fs-5" />
              <span className="fw-bold">ASSIGNMENTS</span>
            </div>
            <div className="d-flex align-items-center">
              <p
                className="wd-rounded-corners-all-around wd-border-solid m-0"
                style={{
                  display: "inline-block",
                  padding: "2px 6px",
                  marginRight: "10px",
                }}
              >
                40% of Total
              </p>
              {isFaculty && (
                <>
                  <FaPlus className="fs-4 me-2" />
                  <IoEllipsisVertical className="fs-4" />
                </>
              )}
            </div>
          </div>
          <ul className="wd-lessons list-group rounded-0">
            {assignments.map((assignment: any) => (
              <li
                key={assignment._id}
                className="wd-lesson list-group-item p-3 ps-1"
              >
                <div className="d-flex align-items-start justify-content-between">
                  <div className="d-flex align-items-center me-3">
                    <BsGripVertical className="me-2 fs-3" />
                    <MdAssignmentAdd className="me-2 text-success fs-4" />
                    <div>
                      <Link
                        className="wd-assignment-link"
                        to={`/Kanbas/Courses/${cid}/Assignments/${assignment._id}`}
                      >
                        <div className="fw-bold">{assignment.title}</div>
                      </Link>
                      <div className="text-muted small mt-1">
                        <span>
                          <span className="text-danger">Multiple Modules</span>{" "}
                          |<b> Not available until</b>{" "}
                          {assignment.available_date} | Due{" "}
                          {assignment.due_date} | {assignment.points} pts
                        </span>
                      </div>
                    </div>
                  </div>
                  {isFaculty && (
                    <div className="d-flex align-items-center">
                      <FaTrash
                        className="text-danger me-2 mb-1"
                        onClick={() => deleteButton(assignment._id)}
                      />
                      <GreenCheckmark />
                      <IoEllipsisVertical className="ms-2 fs-5" />
                    </div>
                  )}
                </div>
              </li>
            ))}
          </ul>
        </li>
      </ul>
    </div>
  );
}
