import React, { useEffect, useState } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { addAssignment, updateAssignment } from "./reducer";
import * as assignmentsClient from "./client";
import * as coursesClient from "../client";

export default function AssignmentEditor() {
  const { aid, cid } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [assignment, setAssignment] = useState({
    _id: aid,
    title: "",
    description: "",
    points: 0,
    dueDate: "",
    availableDate: "",
    untilDate: "",
    course: cid,
  });
  const existAssignment = useSelector((state: any) =>
    state.assignmentsReducer.assignments.find((a: any) => a._id === aid)
  );

  useEffect(() => {
    if (aid !== "new" && existAssignment) {
      setAssignment(existAssignment);
    }
  }, [aid, existAssignment]);

  const Save = async () => {
    if (aid === "new") {
      const newAssignment = await coursesClient.createAssignmentForCourse(
        cid as string,
        assignment
      );
      dispatch(addAssignment(newAssignment));
    } else {
      const updatedAssignment = await assignmentsClient.updateAssignment(
        assignment
      );
      dispatch(updateAssignment(updatedAssignment));
    }
    navigate(`/Kanbas/Courses/${cid}/Assignments`);
  };

  return (
    <div id="wd-assignments-editor">
      <div className="mb-3">
        <label htmlFor="wd-assignment-name" className="form-label">
          <strong>Assignment Name</strong>
        </label>
        <input
          id="wd-assignment-name"
          className="form-control"
          value={assignment.title}
          onChange={(e) =>
            setAssignment({ ...assignment, title: e.target.value })
          }
        />
      </div>

      <div className="mb-3">
        <textarea
          className="form-control"
          id="wd-description"
          rows={10}
          value={assignment.description}
          onChange={(e) =>
            setAssignment({ ...assignment, description: e.target.value })
          }
        ></textarea>
      </div>

      <div className="row mb-3">
        <label htmlFor="wd-points" className="col-sm-2 col-form-label">
          Points
        </label>
        <div className="col-sm-10">
          <input
            id="wd-points"
            type="number"
            className="form-control"
            value={assignment.points}
            onChange={(e) =>
              setAssignment({ ...assignment, points: parseInt(e.target.value) })
            }
          />
        </div>
      </div>

      <div className="row mb-3">
        <label htmlFor="wd-group" className="col-sm-2 col-form-label">
          Assignment Group
        </label>
        <div className="col-sm-10">
          <select id="wd-group" className="form-select">
            <option value="assignments">Assignments</option>
          </select>
        </div>
      </div>

      <div className="row mb-3">
        <label
          htmlFor="wd-display-grade-as"
          className="col-sm-2 col-form-label"
        >
          Display Grade as
        </label>
        <div className="col-sm-10">
          <select id="wd-display-grade-as" className="form-select">
            <option value="percentage">Percentage</option>
          </select>
        </div>
      </div>

      <fieldset className="row mb-3">
        <legend className="col-form-label col-sm-2 pt-0">
          Submission Type
        </legend>
        <div
          className="col-sm-10"
          style={{
            border: "1px solid #c3c3c3",
            borderRadius: "6px",
            padding: "20px",
          }}
        >
          <select id="wd-submission-type" className="form-select mb-3">
            <option value="online">Online</option>
          </select>
          <label className="fw-bold">Online Entry Options</label>
          <div className="form-check">
            <input
              className="form-check-input"
              type="checkbox"
              id="wd-text-entry"
            />
            <label className="form-check-label" htmlFor="wd-text-entry">
              Text Entry
            </label>
          </div>
          <div className="form-check">
            <input
              className="form-check-input"
              type="checkbox"
              id="wd-website-url"
              defaultChecked
            />
            <label className="form-check-label" htmlFor="wd-website-url">
              Website URL
            </label>
          </div>
        </div>
      </fieldset>

      <fieldset className="row mb-3">
        <legend className="col-form-label col-sm-2 pt-0">Assign</legend>
        <div
          className="col-sm-10"
          style={{
            border: "1px solid #c3c3c3",
            borderRadius: "6px",
            padding: "20px",
          }}
        >
          <label className="fw-bold">Assign to</label>
          <input
            id="wd-assign-to"
            className="form-control mb-3"
            value="Everyone"
            readOnly
          />

          <label className="fw-bold">Due</label>
          <input
            id="wd-due-date"
            type="datetime-local"
            className="form-control mb-3"
            value={assignment.dueDate}
            onChange={(e) =>
              setAssignment({ ...assignment, dueDate: e.target.value })
            }
          />

          <div className="row">
            <div className="col-md-6">
              <label htmlFor="wd-available-from" className="fw-bold">
                Available from
              </label>
              <input
                id="wd-available-from"
                type="datetime-local"
                className="form-control"
                value={assignment.availableDate}
                onChange={(e) =>
                  setAssignment({
                    ...assignment,
                    availableDate: e.target.value,
                  })
                }
              />
            </div>
            <div className="col-md-6">
              <label htmlFor="wd-available-until" className="fw-bold">
                Until
              </label>
              <input
                id="wd-available-until"
                type="datetime-local"
                className="form-control"
                value={assignment.untilDate}
                onChange={(e) =>
                  setAssignment({ ...assignment, untilDate: e.target.value })
                }
              />
            </div>
          </div>
        </div>
      </fieldset>

      <hr />
      <div className="float-end mt-3">
        <Link
          to={`/Kanbas/Courses/${cid}/Assignments`}
          className="btn btn-lg btn-secondary me-2"
        >
          Cancel
        </Link>
        <button onClick={Save} className="btn btn-lg btn-danger">
          Save
        </button>
      </div>
    </div>
  );
}
