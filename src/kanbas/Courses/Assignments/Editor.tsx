export default function AssignmentEditor() {
  return (
    <div id="wd-assignments-editor">
      <label htmlFor="wd-name"><strong>Assignment Name</strong></label>
      <br />
      <br />
      <input id="wd-name" value="A1 - ENV + HTML" />
      <br />
      <br />
      <textarea id="wd-description" cols={45} rows={15}>
        The assignment is available online Submit a link to the landing page of 
      </textarea>
      <br />
      <br />
      <table>
        <tr>
          <td align="right" valign="top">
            <label htmlFor="wd-points">Points</label>
          </td>
          <td>
            <input id="wd-points" value={100} />
          </td>
        </tr>
        <br />
        {/* Complete on your own */}
        <tr>
          <td align="right" valign="top">
            <label htmlFor="wd-group">Assignment Group</label>
          </td>
          <td>
            <select>
              <option selected value="ASSIGNMENTS">
                ASSIGNMENTS
              </option>
            </select>
          </td>
        </tr>
        <br />
        <tr>
          <td align="right" valign="top">
            <label htmlFor="wd-group">Display Grade as</label>
          </td>
          <td>
            <select>
              <option selected value="Precentage">
                Precentage
              </option>
            </select>
          </td>
        </tr>
        <br />
        <tr>
          <td align="right" valign="top">
            <label htmlFor="wd-submission-type">Submission Type</label>
          </td>
          <td>
            <select>
              <option selected value="Online">
                Online
              </option>
            </select>
          </td>
        </tr>
        <br />
        <tr>
          <td align="right" valign="top"></td>
          <td>
            <label>Online Entry Options</label> 
            <br />
            <input type="checkbox" id="wd-text-entry"></input>
            <label htmlFor="wd-text-entry">Text Entry</label> 
            <br />
            <input type="checkbox" id="wd-website-url"></input>
            <label htmlFor="wd-website-url">Website URL</label> 
            <br />
            <input type="checkbox" id="wd-media-recordings"></input>
            <label htmlFor="wd-media-recordings">Media Recordings</label>
            <br />
            <input type="checkbox" id="wd-student-annotation"></input>
            <label htmlFor="wd-student-annotation">Student Annotation</label>
            <br />
            <input type="checkbox" id="wd-file-upload"></input>
            <label htmlFor="wd-file-upload">File Upload</label> 
            <br />
          </td>
        </tr>
        <tr>
          <td align="right" valign="top">
            <label htmlFor="Assign">Assign</label>
          </td>
          <td align="left" valign="top">
            <label htmlFor="wd-assign-to">Assign to</label>
          </td>
        </tr>
        <tr>
          <td></td>
          <td align="left" valign="top">
            <input id="wd-assign-to" value="Everyone" />
          </td>
        </tr>
        <tr>
          <td></td>
          <td>
            <label htmlFor="wd-due-date">Due</label>
          </td>
        </tr>
        <tr>
          <td></td>
          <td>
            <input type="date" id="wd-due-date" value="2024-05-13" />
          </td>
        </tr>
        <tr>
          <td></td>
          <td>
            <label htmlFor="wd-available-from">Available from</label>
          </td>
          <td>
            <label htmlFor="wd-available-until">Until</label>
          </td>
        </tr>
        <tr>
          <td></td>
          <td>
            <input id="wd-available-from" type="date" value="2024-05-06" />
          </td>
          <td>
            <input id="wd-available-until" type="date" value="2024-05-20" />
          </td>
        </tr>
      </table>
      <hr />
      <div style={{ float: "right" }}>
        <button>Cancel</button>
        <button>Save</button>
      </div>
    </div>
  );
}
