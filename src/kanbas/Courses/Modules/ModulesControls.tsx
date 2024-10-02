import { FaPlus } from "react-icons/fa6";
import GreenCheckmark from "./GreenCheckmark";
import { MdDoNotDisturbAlt } from "react-icons/md";
export default function ModulesControls() {
  return (
    <div id="wd-modules-controls" className="text-nowrap">
      <button
        id="wd-add-module-btn"
        className="btn btn-lg btn-danger me-1 float-end"
      >
        <FaPlus className="position-relative me-2" style={{ bottom: "1px" }} />
        Module
      </button>
      <div className="dropdown d-inline me-1 float-end">
        <button
          id="wd-collapse-all-btn"
          className="btn btn-lg  me-1 btn-secondary"
          type="button"
        >
          Collapse All
        </button>

        <button
          id="wd-View-Progress-btn"
          className="btn btn-lg  me-1 btn-secondary"
          type="button"
          data-bs-toggle="dropdown"
        >
          View Progress
        </button>

        <button
          id="wd-publish-all-btn"
          className="btn btn-lg btn-secondary dropdown-toggle"
          type="button"
          data-bs-toggle="dropdown"
        >
          <GreenCheckmark />
          Publish All
        </button>

        <ul className="dropdown-menu">
          <li>
            <a
              id="wd-publish-all-modules-and-items-btn"
              className="dropdown-item"
              href="#"
            >
              <GreenCheckmark />
              Publish all modules and items
            </a>
          </li>

          <li>
            <a
              id="wd-publish-modules-only-button"
              className="dropdown-item"
              href="#"
            >
              <GreenCheckmark />
              Publish modules only
            </a>
          </li>

          {/* Create two more items with IDs wd-unpublish-all-modules-and-items and
              wd-unpublish-modules-only with labels Unpublish all modules and items
              and Unpublish modules only */}
          <li>
            <a
              id="wd-publish-all-modules-and-items-btn"
              className="dropdown-item"
              href="#"
            >
              <MdDoNotDisturbAlt className="me-2 fs-5" />
              UnPublish all modules and items
            </a>
          </li>

          <li>
            <a
              id="wd-publish-all-modules-and-items-btn"
              className="dropdown-item"
              href="#"
            >
              <MdDoNotDisturbAlt className="me-2 fs-5" />
              UnPublish modules only
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}
