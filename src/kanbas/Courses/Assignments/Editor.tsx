import React from "react";
import Select from "react-select";

const options = [
  { value: "Everyone", label: "Everyone" },
  { value: "Students", label: "Students" },
  { value: "Teachers", label: "Teachers" },
];

export default function AssignmentEditor() {
  return (
    <div>
      {/* Assignment Name */}
      <label htmlFor="wd-name">
        <strong>Assignment Name</strong>
      </label>
      <br />
      <input
        id="wd-name"
        value="A1"
        style={{ width: "100%", marginBottom: "20px" }}
      />

      {/* Description */}
      <label htmlFor="wd-description"></label>
      <div
        style={{
          border: "1px solid #ccc",
          padding: "20px",
          borderRadius: "5px",
          width: "100%",
        }}
      >
        <div
          id="wd-description"
          style={{ width: "100%", marginBottom: "20px" }}
        >
          <p>
            The assignment is{" "}
            <a href="#" style={{ color: "red" }}>
              available online
            </a>
          </p>
          <p>
            Submit a link to the landing page of your Web application running on{" "}
            <a href="#">Netlify</a>.
          </p>
          <p>The landing page should include the following:</p>
          <ul>
            <li>Your full name and section</li>
            <li>Links to each of the lab assignments</li>
            <li>
              Link to the <a href="#">Kanbas</a> application
            </li>
            <li>Links to all relevant source code repositories</li>
          </ul>
          <p>
            The <a href="#">Kanbas</a> application should include a link to
            navigate back to the landing page.
          </p>
        </div>
      </div>
      <br />

      <table style={{ width: "100%" }}>
        <tbody>
          {/* Points */}
          <tr>
            <td
              align="right"
              valign="top"
              style={{ width: "30%", paddingRight: "10px" }}
            >
              <label htmlFor="wd-points">Points</label>
            </td>
            <td>
              <input
                id="wd-points"
                type="number"
                value={100}
                style={{ width: "100%" }}
              />
            </td>
          </tr>

          {/* Assignment Group */}
          <tr>
            <td
              align="right"
              valign="top"
              style={{ paddingRight: "10px", paddingTop: "20px" }}
            >
              <label htmlFor="wd-group">Assignment Group</label>
            </td>
            <td style={{ paddingTop: "20px" }}>
              <select id="wd-group" style={{ width: "100%" }}>
                <option value="assignments">Assignments</option>
              </select>
            </td>
          </tr>

          {/* Display Grade As */}
          <tr>
            <td
              align="right"
              valign="top"
              style={{ paddingRight: "10px", paddingTop: "20px" }}
            >
              <label htmlFor="wd-display-grade-as">Display Grade as</label>
            </td>
            <td style={{ paddingTop: "20px" }}>
              <select id="wd-display-grade-as" style={{ width: "100%" }}>
                <option value="percentage">Percentage</option>
              </select>
            </td>
          </tr>

          {/* Submission Type */}
          <tr>
            <td
              align="right"
              valign="top"
              style={{ paddingRight: "10px", paddingTop: "20px" }}
            >
              <label htmlFor="wd-submission-type">Submission Type</label>
            </td>
            <td style={{ paddingTop: "20px" }}>
              <div
                style={{
                  border: "1px solid #ccc",
                  padding: "20px",
                  borderRadius: "5px",
                  width: "100%",
                }}
              >
                <select
                  id="wd-submission-type"
                  style={{ width: "100%", marginBottom: "20px" }}
                >
                  <option value="online">Online</option>
                </select>
                {/* Online Entry Options */}
                <label
                  style={{
                    display: "block",
                    marginBottom: "10px",
                    fontWeight: "bold",
                  }}
                >
                  Online Entry Options
                </label>
                <div>
                  <input type="checkbox" id="wd-text-entry" />
                  <label htmlFor="wd-text-entry" style={{ marginLeft: "5px" }}>
                    Text Entry
                  </label>
                </div>
                <div>
                  <input type="checkbox" id="wd-website-url" defaultChecked />
                  <label htmlFor="wd-website-url" style={{ marginLeft: "5px" }}>
                    Website URL
                  </label>
                </div>
                <div>
                  <input type="checkbox" id="wd-media-recordings" />
                  <label
                    htmlFor="wd-media-recordings"
                    style={{ marginLeft: "5px" }}
                  >
                    Media Recordings
                  </label>
                </div>
                <div>
                  <input type="checkbox" id="wd-student-annotation" />
                  <label
                    htmlFor="wd-student-annotation"
                    style={{ marginLeft: "5px" }}
                  >
                    Student Annotation
                  </label>
                </div>
                <div>
                  <input type="checkbox" id="wd-file-upload" />
                  <label htmlFor="wd-file-upload" style={{ marginLeft: "5px" }}>
                    File Upload
                  </label>
                </div>
              </div>
            </td>
          </tr>

          {/* Assign To */}
          <tr>
            <td
              align="right"
              valign="top"
              style={{ paddingRight: "10px", paddingTop: "20px" }}
            >
              <label htmlFor="wd-assign-to">Assign</label>
            </td>
            <td style={{ paddingTop: "20px" }}>
              <div
                style={{
                  border: "1px solid #ccc",
                  padding: "20px",
                  borderRadius: "5px",
                  width: "100%",
                }}
              >
                <label
                  htmlFor="wd-assign-to"
                  style={{
                    display: "block",
                    marginBottom: "10px",
                    fontWeight: "bold",
                  }}
                >
                  Assign to
                </label>
                <Select
                  defaultValue={options[0]}
                  options={options}
                  isClearable
                  styles={{
                    control: (base) => ({
                      ...base,
                      width: "100%",
                      marginBottom: "20px",
                    }),
                  }}
                />

                <label
                  htmlFor="wd-due-date"
                  style={{
                    display: "block",
                    marginBottom: "10px",
                    fontWeight: "bold",
                  }}
                >
                  Due
                </label>
                <input
                  id="wd-due-date"
                  type="datetime-local"
                  value="2024-05-13T23:59"
                  style={{ width: "100%", marginBottom: "20px" }}
                />

                <div style={{ display: "flex", gap: "10px" }}>
                  <div style={{ flex: "1" }}>
                    <label
                      htmlFor="wd-available-from"
                      style={{
                        display: "block",
                        marginBottom: "10px",
                        fontWeight: "bold",
                      }}
                    >
                      Available from
                    </label>
                    <input
                      id="wd-available-from"
                      type="datetime-local"
                      value="2024-10-02T03:00"
                      style={{ width: "100%" }}
                    />
                  </div>
                  <div style={{ flex: "1" }}>
                    <label
                      htmlFor="wd-available-until"
                      style={{
                        display: "block",
                        marginBottom: "10px",
                        fontWeight: "bold",
                      }}
                    >
                      Until
                    </label>
                    <input
                      id="wd-available-until"
                      type="datetime-local"
                      value=""
                      style={{ width: "100%" }}
                    />
                  </div>
                </div>
              </div>
            </td>
          </tr>
          {/* Cancel and Save Buttons */}
          <tr>
            <td></td>
            <td style={{ textAlign: "right", paddingTop: "20px" }}>
              {/* Cancel Button */}
              <button
                type="button"
                style={{
                  backgroundColor: "#f5f5f5",
                  color: "#555",
                  marginRight: "10px",
                  border: "1px solid #ccc",
                  padding: "5px 10px",
                  borderRadius: "5px",
                }}
              >
                Cancel
                {/* Save Button */}
              </button>
              <button
                type="submit"
                style={{
                  backgroundColor: "red",
                  color: "white",
                  padding: "5px 10px",
                  border: "none",
                  borderRadius: "5px",
                }}
              >
                Save
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
