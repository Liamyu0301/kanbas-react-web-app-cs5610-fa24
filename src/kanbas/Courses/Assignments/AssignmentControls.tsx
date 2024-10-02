import { FaPlus } from "react-icons/fa6";
export default function AssignmentControls() {
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
        <button
          id="wd-add-assignment-btn"
          className="btn btn-lg btn-danger me-1 float-end"
        >
          <FaPlus
            className="position-relative me-2  dropdown-toggle"
            style={{ bottom: "1px" }}
          />
          Assignment
        </button>

        <div className="dropdown d-inline me-1 float-end">
          <button
            id="wd-collapse-all-btn"
            className="btn btn-lg  me-1 btn-secondary"
            type="button"
          >
            <FaPlus
              className="position-relative me-2  dropdown-toggle"
              style={{ bottom: "1px" }}
            />
            Group
          </button>
        </div>
      </div>
    </div>
  );
}
