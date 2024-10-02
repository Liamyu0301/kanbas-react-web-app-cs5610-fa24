import { BsGripVertical } from "react-icons/bs";
import GreenCheckmark from "../Modules/GreenCheckmark";
import { IoEllipsisVertical } from "react-icons/io5";
import { FaPlus } from "react-icons/fa6";
import { MdAssignmentAdd } from "react-icons/md";
import PercentageButton from "./AssignmentButtons";
import AssignmentControls from "./AssignmentControls";
import { FaChevronDown } from "react-icons/fa";

export default function Assignments() {
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
            <li className="wd-lesson list-group-item p-3 ps-1">
              <div className="d-flex align-items-start justify-content-between">
                {/* Icon and Title */}
                <div className="d-flex align-items-center me-3">
                  <BsGripVertical className="me-2 fs-3" />
                  <MdAssignmentAdd className="me-2 text-success fs-4" />
                  <div>
                    <a
                      className="wd-assignment-link"
                      href="#/Kanbas/Courses/1234/Assignments/123"
                    >
                      <div className="fw-bold">A1</div>
                    </a>

                    <div className="text-muted small mt-1">
                      <span>
                        Multiple Modules | Not available until May 6 at 12:00am
                        | Due May 13 at 11:59pm | 100 pts
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

            <li className="wd-lesson list-group-item p-3 ps-1">
              <div className="d-flex align-items-start justify-content-between">
                <div className="d-flex align-items-center me-3">
                  <BsGripVertical className="me-2 fs-3" />
                  <MdAssignmentAdd className="me-2 text-success fs-4" />
                  <div>
                    <a
                      className="wd-assignment-link"
                      href="#/Kanbas/Courses/1234/Assignments/124"
                    >
                      <div className="fw-bold">A2</div>
                    </a>

                    <div className="text-muted small mt-1">
                      <span>
                        Multiple Modules | Not available until May 13 at 12:00am
                        | Due May 20 at 11:59pm | 100 pts
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

            <li className="wd-lesson list-group-item p-3 ps-1">
              <div className="d-flex align-items-start justify-content-between">
                <div className="d-flex align-items-center me-3">
                  <BsGripVertical className="me-2 fs-3" />
                  <MdAssignmentAdd className="me-2 text-success fs-4" />
                  <div>
                    <a
                      className="wd-assignment-link"
                      href="#/Kanbas/Courses/1234/Assignments/125"
                    >
                      <div className="fw-bold">A3</div>
                    </a>

                    <div className="text-muted small mt-1">
                      <span>
                        Multiple Modules | Not available until May 20 at 12:00am
                        | Due May 27 at 11:59pm | 100 pts
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
          </ul>
        </li>
      </ul>
    </div>
  );
}