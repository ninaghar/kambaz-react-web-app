import { Form, Button, Row, Col } from "react-bootstrap";

export default function AssignmentEditor() {
  return (
    <div id="wd-assignments-editor" className="p-4">
      <Form>
        <Form.Group className="mb-3" controlId="wd-name">
          <Form.Label><strong>Assignment Name</strong></Form.Label>
          <Form.Control type="text" defaultValue="A1 - ENV + HTML" />
        </Form.Group>

        <Form.Group className="mb-4" controlId="wd-description">
          <Form.Label><strong>Description</strong></Form.Label>
          <Form.Control
            as="textarea"
            rows={6}
            defaultValue={`The assignment is available online Submit a link to the landing page 
of your Web application running on Netlify. The landing page should
include the following: Your full name and section Links to each 
of the lab assignments Link to the Kanbas application Links to all 
relevant source code repositories The Kanbas application should 
include a link to navigate back to the landing page.`}
          />
        </Form.Group>

        <Row className="mb-3">
          <Col md={3}>
            <Form.Label htmlFor="wd-points">Points</Form.Label>
          </Col>
          <Col>
            <Form.Control type="number" defaultValue={100} id="wd-points" />
          </Col>
        </Row>

        <Row className="mb-3">
          <Col md={3}>
            <Form.Label htmlFor="wd-group">Assignment Group</Form.Label>
          </Col>
          <Col>
            <Form.Select id="wd-group" defaultValue="ASSIGNMENTS">
              <option value="ASSIGNMENTS">ASSIGNMENTS</option>
            </Form.Select>
          </Col>
        </Row>

        <Row className="mb-3">
          <Col md={3}>
            <Form.Label htmlFor="wd-display-grade-as">Display Grade as</Form.Label>
          </Col>
          <Col>
            <Form.Select id="wd-display-grade-as" defaultValue="PERCENTAGE">
              <option value="PERCENTAGE">Percentage</option>
            </Form.Select>
          </Col>
        </Row>

<Row className="mb-4">
  <Col md={3}>
    <Form.Label htmlFor="wd-submission-type"><strong>Submission Type</strong></Form.Label>
  </Col>

  {/* Box with dropdown + checkboxes */}
  <Col md={9}>
    <div className="border rounded p-3">
      <Form.Select id="wd-submission-type" defaultValue="Online" className="mb-3">
        <option value="Online">Online</option>
        {/* Add more options if needed */}
      </Form.Select>

      <Form.Label><strong>Online Entry Options</strong></Form.Label>
      <div className="ms-3">
        <Form.Check type="checkbox" id="wd-text-entry" label="Text Entry" />
        <Form.Check type="checkbox" id="wd-website-url" label="Website URL" />
        <Form.Check type="checkbox" id="wd-media-recordings" label="Media Recordings" />
        <Form.Check type="checkbox" id="wd-student-annotation" label="Student Annotation" />
        <Form.Check type="checkbox" id="wd-file-upload" label="File Uploads" />
      </div>
    </div>
  </Col>
</Row>


        {/* <Row className="mb-3">
          <Col md={3}>
            <Form.Label htmlFor="wd-submission-type">Submission Type</Form.Label>
          </Col>
          
          <Col>
            <Form.Select id="wd-submission-type" defaultValue="Online">
              <option value="Online">Online</option>
            </Form.Select>
          </Col>
        </Row>

        <Row className="mb-3">
          <Col md={{ span: 9, offset: 3 }}>
            <Form.Label><strong>Online Entry Options</strong></Form.Label>
            <div className="ms-3">
              <Form.Check type="checkbox" id="wd-text-entry" label="Text Entry" />
              <Form.Check type="checkbox" id="wd-website-url" label="Website URL" />
              <Form.Check type="checkbox" id="wd-media-recordings" label="Media Recordings" />
              <Form.Check type="checkbox" id="wd-student-annotation" label="Student Annotation" />
              <Form.Check type="checkbox" id="wd-file-upload" label="File Uploads" />
            </div>
          </Col>
        </Row> */}
                
        {/* <Row className="mb-3">
          <Col md={3}>
            <Form.Label htmlFor="wd-assign-to">Assign to</Form.Label>
          </Col>
          <Col>
            <Form.Control type="text" defaultValue="Everyone" id="wd-assign-to" />
          </Col>
        </Row>

        <Row className="mb-3">
          <Col md={3}>
            <Form.Label htmlFor="wd-due-date">Due</Form.Label>
          </Col>
          <Col>
            <Form.Control type="date" defaultValue="2024-05-13" id="wd-due-date" />
          </Col>
        </Row>

        <Row className="mb-3">
          <Col md={3}>
            <Form.Label htmlFor="wd-available-from">Available from</Form.Label>
          </Col>
          <Col md={4}>
            <Form.Control type="date" defaultValue="2024-05-06" id="wd-available-from" />
          </Col>
          <Col md={2}>
            <Form.Label htmlFor="wd-available-until">Until</Form.Label>
          </Col>
          <Col>
            <Form.Control type="date" defaultValue="2024-05-20" id="wd-available-until" />
          </Col>
        </Row> */}
        <Row className="mb-4">
  <Col md={3}>
    <Form.Label htmlFor="wd-assign-to"><strong>Assign </strong></Form.Label>
  </Col>

  <Col md={9}>
    <div className="border rounded p-3">
      <Form.Group className="mb-3" controlId="wd-assign-to">
        <Form.Label><strong>Assign to</strong></Form.Label>
        <Form.Control type="text" defaultValue="Everyone" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="wd-due-date">
        <Form.Label><strong>Due</strong></Form.Label>
        <Form.Control type="date" defaultValue="2024-05-13" />
      </Form.Group>

      <Row>
        <Col>
          <Form.Group controlId="wd-available-from">
            <Form.Label><strong>Available from</strong></Form.Label>
            <Form.Control type="date" defaultValue="2024-05-06" />
          </Form.Group>
        </Col>
        <Col>
          <Form.Group controlId="wd-available-until">
            <Form.Label><strong>Until</strong></Form.Label>
            <Form.Control type="date" defaultValue="2024-05-20" />
          </Form.Group>
        </Col>
      </Row>
    </div>
  </Col>
</Row>


        <hr />

        <div className="d-flex justify-content-end gap-2 mt-3">
          <Button variant="secondary" id="wd-cancel">Cancel</Button>
          <Button variant="danger" id="wd-save">Save</Button>
        </div>
      </Form>
    </div>
  );
}

// export default function AssignmentEditor() {
//   return (
//     <div id="wd-assignments-editor">
//       <label htmlFor="wd-name"> <strong>Assignment Name</strong></label><br /><br />
//       <input id="wd-name" value="A1 - ENV + HTML" /><br /><br />
//       <textarea id="wd-description" rows={6} cols={40}>
//         The assignment is available online Submit a link to the landing page 
//         of your Web application running on Netlify. The landing page should
//          include the following: Your full name and section Links to each 
//          of the lab assignments Link to the Kanbas application Links to all 
//          relevant source code repositories The Kanbas application should 
//          include a link to navigate back to the landing page.
//       </textarea>
//       <br />
//       <table>
//         <tr>
//           <td align="right" valign="top">
//             <label htmlFor="wd-points">Points</label>
//           </td>
//           <td>
//             <input id="wd-points" value={100} />
//           </td>
//         </tr>
//         <tr>
//           <td align="right" valign="top">
//             <label htmlFor="wd-group">Assignment Group</label>
//           </td>
//           <td>
//             <select id="wd-group">
//             <option value="ASSIGNMENTS">ASSIGNMENTS</option>
//             </select>
//           </td>
//         </tr>
//         <tr>
//           <td align="right" valign="top">
//             <label htmlFor="wd-display-grade-as">Display Grade as</label>
//           </td>
//           <td>
//             <select id="wd-display-grade-as">
//             <option value="PERCENTAGE">Percentage</option>
//             </select>
//           </td>
//         </tr>
//         <tr>
//           <td align="right" valign="top">
//             <label htmlFor="wd-submission-type">Submission Type</label>
//           </td>
//           <td>
//             <select id="wd-submission-type">
//             <option value="SUBMISSIONTYPE">Online</option>
//             </select>
//           </td>
//         </tr>
//         <tr>
//           <td align="right" valign="top">
//           </td>
//           <td>
//             <label>Online Entry Options</label><br/>
//             <input type="checkbox" name="check-option" id="wd-text-entry"/>
//             <label htmlFor="wd-text-entry">Text Entry</label><br/>

//             <input type="checkbox" name="check-option" id="wd-website-url"/>
//             <label htmlFor="wd-website-url">Website URL</label><br/>

//             <input type="checkbox" name="check-option" id="wd-media-recordings"/>
//             <label htmlFor="wd-media-recordings">Media Recordings</label><br/>

//             <input type="checkbox" name="check-option" id="wd-student-annotation"/>
//             <label htmlFor="wd-student-annotation">Student Annotation</label><br/>
          
//             <input type="checkbox" name="check-option" id="wd-file-upload"/>
//             <label htmlFor="wd-file-upload">File Uploads</label>
//           </td>
          
//         </tr>

//         <tr>
//           <td align="right" valign="top">
            
//           </td>
//           <td>
//             <label htmlFor="wd-assign-to">Assign to</label><br/>
//             <input id="wd-assign-to" value="Everyone" />
//           </td>
//         </tr>
//         <tr>
//           <td align="right" valign="top">
            
//           </td>
//           <td>
//             <label htmlFor="wd-due-date"> Due </label><br/>
//             <input type="date"
//             value="2024-05-13"
//             id="wd-due-date"/>
//           </td>
//         </tr>
//         <tr>
//           <td align="right" valign="top">
            
//           </td>
//           <td>
           
//             <label htmlFor="wd-available-from"> Available from</label><br/>
//             <input type="date"
//             value="2024-05-06"
//             id="wd-available-from"/>
//             </td>
//             <td>
//             <label htmlFor="wd-available-until"> Until</label><br/>
//             <input type="date"
//             value="2024-05-20"
//             id="wd-available-until"/>
//             {/* </div> */}
//           </td>
//         </tr>
        
        
//       </table>
//       <hr></hr>

//  <div style={{ display: "flex", justifyContent: "flex-end", marginTop: "1rem", gap: "0.5rem" }}>
//       <button id="wd-cancel">Cancel</button>
//       <button id="wd-save">Save</button>
// </div>
//     </div>
// );}

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

         {/* <div> */}
                {/* <td align="right" valign="top">
            <label htmlFor="wd-points">Submission Type</label>
          </td>
          <td>
            <select id="wd-module-publish">
            <option value="PERCENTAGE">Online</option>
            </select>
          </td> */}