export default function AssignmentEditor() {
  return (
    <div id="wd-assignments-editor">
      <label htmlFor="wd-name"> <strong>Assignment Name</strong></label><br /><br />
      <input id="wd-name" value="A1 - ENV + HTML" /><br /><br />
      <textarea id="wd-description" rows={6} cols={40}>
        The assignment is available online Submit a link to the landing page 
        of your Web application running on Netlify. The landing page should
         include the following: Your full name and section Links to each 
         of the lab assignments Link to the Kanbas application Links to all 
         relevant source code repositories The Kanbas application should 
         include a link to navigate back to the landing page.
      </textarea>
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
        <tr>
          <td align="right" valign="top">
            <label htmlFor="wd-group">Assignment Group</label>
          </td>
          <td>
            <select id="wd-group">
            <option value="ASSIGNMENTS">ASSIGNMENTS</option>
            </select>
          </td>
        </tr>
        <tr>
          <td align="right" valign="top">
            <label htmlFor="wd-display-grade-as">Display Grade as</label>
          </td>
          <td>
            <select id="wd-display-grade-as">
            <option value="PERCENTAGE">Percentage</option>
            </select>
          </td>
        </tr>
        <tr>
          <td align="right" valign="top">
            <label htmlFor="wd-submission-type">Submission Type</label>
          </td>
          <td>
            <select id="wd-submission-type">
            <option value="SUBMISSIONTYPE">Online</option>
            </select>
          </td>
        </tr>
        <tr>
          <td align="right" valign="top">
          </td>
          <td>
            <label>Online Entry Options</label><br/>
            <input type="checkbox" name="check-option" id="wd-text-entry"/>
            <label htmlFor="wd-text-entry">Text Entry</label><br/>

            <input type="checkbox" name="check-option" id="wd-website-url"/>
            <label htmlFor="wd-website-url">Website URL</label><br/>

            <input type="checkbox" name="check-option" id="wd-media-recordings"/>
            <label htmlFor="wd-media-recordings">Media Recordings</label><br/>

            <input type="checkbox" name="check-option" id="wd-student-annotation"/>
            <label htmlFor="wd-student-annotation">Student Annotation</label><br/>
          
            <input type="checkbox" name="check-option" id="wd-file-upload"/>
            <label htmlFor="wd-file-upload">File Uploads</label>
          </td>
          
        </tr>

        <tr>
          <td align="right" valign="top">
            
          </td>
          <td>
            <label htmlFor="wd-assign-to">Assign to</label><br/>
            <input id="wd-assign-to" value="Everyone" />
          </td>
        </tr>
        <tr>
          <td align="right" valign="top">
            
          </td>
          <td>
            <label htmlFor="wd-due-date"> Due </label><br/>
            <input type="date"
            value="2024-05-13"
            id="wd-due-date"/>
          </td>
        </tr>
        <tr>
          <td align="right" valign="top">
            
          </td>
          <td>
            {/* <div> */}
                {/* <td align="right" valign="top">
            <label htmlFor="wd-points">Submission Type</label>
          </td>
          <td>
            <select id="wd-module-publish">
            <option value="PERCENTAGE">Online</option>
            </select>
          </td> */}
            <label htmlFor="wd-available-from"> Available from</label><br/>
            <input type="date"
            value="2024-05-06"
            id="wd-available-from"/>
            </td>
            <td>
            <label htmlFor="wd-available-until"> Until</label><br/>
            <input type="date"
            value="2024-05-20"
            id="wd-available-until"/>
            {/* </div> */}
          </td>
        </tr>
        
        {/* Complete on your own<
        
        <label htmlFor="wd-text-fields-dob"> Date of birth: </label>
<input type="date"
       value="2000-01-21"
       id="wd-text-fields-dob"/><br/>
        
        select id="wd-module-publish">
        <option value="PUBLISHALL">Publish All</option>
        </select>

        <label>Favorite movie genre:</label><br/>
        <input type="checkbox" name="check-genre" id="wd-chkbox-comedy"/>
<label htmlFor="wd-chkbox-comedy">Comedy</label><br/>

<input type="checkbox" name="check-genre" id="wd-chkbox-drama"/>
<label htmlFor="wd-chkbox-drama">Drama</label><br/>

<input type="checkbox" name="check-genre" id="wd-chkbox-scifi"/>
<label htmlFor="wd-chkbox-scifi">Science Fiction</label><br/>

<input type="checkbox" name="check-genre" id="wd-chkbox-fantasy"/>
<label htmlFor="wd-chkbox-fantasy">Fantasy</label>
        */}
      </table>
      <hr></hr>

 <div style={{ display: "flex", justifyContent: "flex-end", marginTop: "1rem", gap: "0.5rem" }}>
      <button id="wd-cancel">Cancel</button>
      <button id="wd-save">Save</button>
</div>
    </div>
);}
