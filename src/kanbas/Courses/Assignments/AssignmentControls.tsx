import { FaPlus } from "react-icons/fa6";
import { HiMagnifyingGlass } from "react-icons/hi2";
import AssignmentEditor from "./Editor";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
export default function AssignmentControls({
  assignmentName,
  setAssignmentName,
  addAssignment,
}: {
  assignmentName: string;
  setAssignmentName: (title: string) => void;
  addAssignment: () => void;
}) {
  const { currentUser } = useSelector((state: any) => state.accountReducer);
  const isFaculty = currentUser?.role === "FACULTY";
  const navigate = useNavigate();

  const handleAddAssignmentClick = () => {
    navigate("/courses/:cid/assignments/new");
  };
  return (
    <div
      id="wd-modules-controls"
      className="text-nowrap d-flex align-items-center justify-content-between"
    >
      <input
        type="text"
        className="form-control "
        placeholder="Search..."
        style={{ maxWidth: "250px" }}
      />

      <div id="wd-assignment-controls" className="text-nowrap">
        {isFaculty && (
          <>
            <button
              id="wd-add-module-btn"
              className="btn btn-lg btn-danger me-1 float-end"
              onClick={handleAddAssignmentClick}
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
        <div
          className="me-1"
          style={{ position: "relative", display: "inline-block" }}
        >
          <HiMagnifyingGlass
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
    </div>
  );
}
