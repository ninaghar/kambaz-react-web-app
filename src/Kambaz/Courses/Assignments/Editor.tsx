import { Form, Button, Row, Col, InputGroup } from "react-bootstrap";
import { useParams, Link } from "react-router-dom";
import * as db from "../../Database";
import { useState } from 'react';
import DateTime from "react-datetime";
import "react-datetime/css/react-datetime.css";
import { FaCalendarAlt } from "react-icons/fa";

export default function AssignmentEditor() {
  const { courseId, aid } = useParams();
  
  console.log("Params:", { courseId, aid });

  const assignment = db.assignments.find(
    (a) => a._id === aid && a.course === courseId
  );

  if (!assignment) {
    return <div>Assignment not found</div>;
  }

  return (
    <div id="wd-assignments-editor" className="p-4">
      <Form>
        <Form.Group className="mb-3" controlId="wd-name">
          <Form.Label><strong>Assignment Name</strong></Form.Label>
          <Form.Control type="text" defaultValue={assignment.title} />
        </Form.Group>

        <Form.Group className="mb-4" controlId="wd-description">
          <Form.Label><strong>Description</strong></Form.Label>
          <Form.Control
            as="textarea"
            rows={6}
            defaultValue={assignment.description}
          />
        </Form.Group>

        <Row className="mb-3">
          <Col md={3}>
            <Form.Label htmlFor="wd-points">Points</Form.Label>
          </Col>
          <Col>
            <Form.Control type="number" defaultValue={assignment.points} id="wd-points" />
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
          <Col md={9}>
            <div className="border rounded p-3">
              <Form.Select id="wd-submission-type" defaultValue="Online" className="mb-3">
                <option value="Online">Online</option>
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

        <Row className="mb-4">
          <Col md={3}>
            <Form.Label htmlFor="wd-assign-to"><strong>Assign</strong></Form.Label>
          </Col>
          <Col md={9}>
            <div className="border rounded p-3">
              <Form.Group className="mb-3" controlId="wd-assign-to">
                <Form.Label><strong>Assign to</strong></Form.Label>
                <Form.Control type="text" defaultValue="Everyone" />
              </Form.Group>

              <Row>
                {/* Due Date */}
                <Col>
                  <Form.Group className="mb-3" controlId="wd-due-date">
                    <Form.Label><strong>Due</strong></Form.Label>
                    <InputGroup>
                      <DateTime
                        value={assignment.dueDate ? new Date(assignment.dueDate) : undefined}
                        onChange={(date) => {
                          const iso = new Date(date as unknown as Date).toISOString();
                          console.log("Due date changed:", iso);
                        }}
                        dateFormat="MMMM D, YYYY"
                        timeFormat="h:mm A"
                        inputProps={{ 
                          className: "form-control",
                          placeholder: "May 13, 2024 11:59 PM"
                        }}
                      />
                      <InputGroup.Text>
                        <FaCalendarAlt />
                      </InputGroup.Text>
                    </InputGroup>
                  </Form.Group>
                </Col>
              </Row>

              <Row>
                {/* Available From */}
                <Col>
                  <Form.Group controlId="wd-available-from">
                    <Form.Label><strong>Available from</strong></Form.Label>
                    <InputGroup>
                      <DateTime
                        value={assignment.availableFrom ? new Date(assignment.availableFrom) : undefined}
                        onChange={(date) => {
                          const iso = new Date(date as unknown as Date).toISOString();
                          console.log("Available from changed:", iso);
                        }}
                        dateFormat="MMMM D, YYYY"
                        timeFormat="h:mm A"
                        inputProps={{ 
                          className: "form-control",
                          placeholder: "May 13, 2024 11:59 PM"
                        }}
                      />
                      <InputGroup.Text>
                        <FaCalendarAlt />
                      </InputGroup.Text>
                    </InputGroup>
                  </Form.Group>
                </Col>

                {/* Available Until */}
                <Col>
                  <Form.Group controlId="wd-available-until">
                    <Form.Label><strong>Until</strong></Form.Label>
                    <InputGroup>
                      <DateTime
                        value={undefined}
                        onChange={(date) => {
                          const iso = new Date(date as unknown as Date).toISOString();
                          console.log("Available until changed:", iso);
                        }}
                        dateFormat="MMMM D, YYYY"
                        timeFormat="h:mm A"
                        inputProps={{ 
                          className: "form-control",
                          placeholder: "May 13, 2024 11:59 PM"
                        }}
                      />
                      <InputGroup.Text>
                        <FaCalendarAlt />
                      </InputGroup.Text>
                    </InputGroup>
                  </Form.Group>
                </Col>
              </Row>
            </div>
          </Col>
        </Row>

        <hr />

        <div className="d-flex justify-content-end gap-2 mt-3">
          <Link to={`/Kanbas/Courses/${courseId}/Assignments`}>
            <Button variant="secondary" id="wd-cancel">Cancel</Button>
          </Link>
          <Link to={`/Kambas/Courses/${courseId}/Assignments`}>
            <Button variant="danger" id="wd-save">Save</Button>
          </Link>
        </div>
      </Form>
    </div>
  );
}
// import { Form, Button, Row, Col, InputGroup } from "react-bootstrap";
// import { useParams, Link } from "react-router-dom";
// import * as db from "../../Database";
// import { useState } from 'react';
// import DateTime from "react-datetime";
// import "react-datetime/css/react-datetime.css";
// import { FaCalendarAlt } from "react-icons/fa";

// export default function AssignmentEditor() {
//   const { courseId, aid } = useParams();
  
//   console.log("Params:", { courseId, aid });

//   const assignment = db.assignments.find(
//     (a) => a._id === aid && a.course === courseId
//   );

//   if (!assignment) {
//     return <div>Assignment not found</div>;
//   }

//   return (
//     <div id="wd-assignments-editor" className="p-4">
//       <Form>
//         <Form.Group className="mb-3" controlId="wd-name">
//           <Form.Label><strong>Assignment Name</strong></Form.Label>
//           <Form.Control type="text" defaultValue={assignment.title} />
//         </Form.Group>

//         <Form.Group className="mb-4" controlId="wd-description">
//           <Form.Label><strong>Description</strong></Form.Label>
//           <Form.Control
//             as="textarea"
//             rows={6}
//             defaultValue={assignment.description}
//           />
//         </Form.Group>

//         <Row className="mb-3">
//           <Col md={3}>
//             <Form.Label htmlFor="wd-points">Points</Form.Label>
//           </Col>
//           <Col>
//             <Form.Control type="number" defaultValue={assignment.points} id="wd-points" />
//           </Col>
//         </Row>

//         <Row className="mb-3">
//           <Col md={3}>
//             <Form.Label htmlFor="wd-group">Assignment Group</Form.Label>
//           </Col>
//           <Col>
//             <Form.Select id="wd-group" defaultValue="ASSIGNMENTS">
//               <option value="ASSIGNMENTS">ASSIGNMENTS</option>
//             </Form.Select>
//           </Col>
//         </Row>

//         <Row className="mb-3">
//           <Col md={3}>
//             <Form.Label htmlFor="wd-display-grade-as">Display Grade as</Form.Label>
//           </Col>
//           <Col>
//             <Form.Select id="wd-display-grade-as" defaultValue="PERCENTAGE">
//               <option value="PERCENTAGE">Percentage</option>
//             </Form.Select>
//           </Col>
//         </Row>

//         <Row className="mb-4">
//           <Col md={3}>
//             <Form.Label htmlFor="wd-submission-type"><strong>Submission Type</strong></Form.Label>
//           </Col>
//           <Col md={9}>
//             <div className="border rounded p-3">
//               <Form.Select id="wd-submission-type" defaultValue="Online" className="mb-3">
//                 <option value="Online">Online</option>
//               </Form.Select>

//               <Form.Label><strong>Online Entry Options</strong></Form.Label>
//               <div className="ms-3">
//                 <Form.Check type="checkbox" id="wd-text-entry" label="Text Entry" />
//                 <Form.Check type="checkbox" id="wd-website-url" label="Website URL" />
//                 <Form.Check type="checkbox" id="wd-media-recordings" label="Media Recordings" />
//                 <Form.Check type="checkbox" id="wd-student-annotation" label="Student Annotation" />
//                 <Form.Check type="checkbox" id="wd-file-upload" label="File Uploads" />
//               </div>
//             </div>
//           </Col>
//         </Row>

//         <Row className="mb-4">
//           <Col md={3}>
//             <Form.Label htmlFor="wd-assign-to"><strong>Assign</strong></Form.Label>
//           </Col>
//           <Col md={9}>
//             <div className="border rounded p-3">
//               <Form.Group className="mb-3" controlId="wd-assign-to">
//                 <Form.Label><strong>Assign to</strong></Form.Label>
//                 <Form.Control type="text" defaultValue="Everyone" />
//               </Form.Group>

//               {/* Due Date */}
//               <Form.Group className="mb-3" controlId="wd-due-date">
//                 <Form.Label><strong>Due</strong></Form.Label>
//                 <InputGroup>
//                   <DateTime
//                     value={assignment.dueDate ? new Date(assignment.dueDate) : undefined}
//                     onChange={(date) => {
//                       const iso = new Date(date as unknown as Date).toISOString();
//                       console.log("Due date changed:", iso);
//                     }}
//                     dateFormat="MMMM D, YYYY"
//                     timeFormat="h:mm A"
//                     inputProps={{ 
//                       className: "form-control",
//                       placeholder: "May 13, 2024 11:59 PM"
//                     }}
//                   />
//                   <InputGroup.Text>
//                     <FaCalendarAlt />
//                   </InputGroup.Text>
//                 </InputGroup>
//               </Form.Group>

//               <Row>
//                 {/* Available From */}
//                 <Col>
//                   <Form.Group controlId="wd-available-from">
//                     <Form.Label><strong>Available from</strong></Form.Label>
//                     <InputGroup>
//                       <DateTime
//                         value={assignment.availableFrom ? new Date(assignment.availableFrom) : undefined}
//                         onChange={(date) => {
//                           const iso = new Date(date as unknown as Date).toISOString();
//                           console.log("Available from changed:", iso);
//                         }}
//                         dateFormat="MMMM D, YYYY"
//                         timeFormat="h:mm A"
//                         inputProps={{ 
//                           className: "form-control",
//                           placeholder: "May 13, 2024 11:59 PM"
//                         }}
//                       />
//                       <InputGroup.Text>
//                         <FaCalendarAlt />
//                       </InputGroup.Text>
//                     </InputGroup>
//                   </Form.Group>
//                 </Col>

//                 {/* Available Until */}
//                 <Col>
//                   <Form.Group controlId="wd-available-until">
//                     <Form.Label><strong>Until</strong></Form.Label>
//                     <InputGroup>
//                       <DateTime
//                         value={undefined}
//                         onChange={(date) => {
//                           const iso = new Date(date as unknown as Date).toISOString();
//                           console.log("Available until changed:", iso);
//                         }}
//                         dateFormat="MMMM D, YYYY"
//                         timeFormat="h:mm A"
//                         inputProps={{ 
//                           className: "form-control",
//                           placeholder: "May 13, 2024 11:59 PM"
//                         }}
//                       />
//                       <InputGroup.Text>
//                         <FaCalendarAlt />
//                       </InputGroup.Text>
//                     </InputGroup>
//                   </Form.Group>
//                 </Col>
//               </Row>
//             </div>
//           </Col>
//         </Row>

//         <hr />

//         <div className="d-flex justify-content-end gap-2 mt-3">
//           <Link to={`/Kanbas/Courses/${courseId}/Assignments`}>
//             <Button variant="secondary" id="wd-cancel">Cancel</Button>
//           </Link>
//           <Link to={`/Kambas/Courses/${courseId}/Assignments`}>
//             <Button variant="danger" id="wd-save">Save</Button>
//           </Link>
//         </div>
//       </Form>
//     </div>
//   );
// }

// latest code below

// import { Form, Button, Row, Col, InputGroup } from "react-bootstrap";
// import { useParams, Link } from "react-router-dom";
// import * as db from "../../Database";
// import { useState } from 'react';
// import DateTime from "react-datetime";
// import "react-datetime/css/react-datetime.css";
// import { FaCalendarAlt } from "react-icons/fa";

// import DatePicker from "react-datepicker";
// import "react-datepicker/dist/react-datepicker.css";

// export default function AssignmentEditor() {
//   const { courseId, aid } = useParams();
  
//   console.log("Params:", { courseId, aid });



//   const assignment = db.assignments.find(
//     (a) => a._id === aid && a.course === courseId
//   );


//     const [showDatePicker, setShowDatePicker] = useState(false);
//   const [dateValue, setDateValue] = useState(assignment?.availableFrom || '');

//   const formatDisplayDate = (isoString: string) => {
//     if (!isoString) return 'Select date and time';
//     const date = new Date(isoString);
//     return date.toLocaleString('en-US', {
//       year: 'numeric',
//       month: 'long', 
//       day: 'numeric',
//       hour: 'numeric',
//       minute: '2-digit',
//       hour12: true
//     });
//     };

//   if (!assignment) {
//     return <div>Assignment not found</div>;
//   }

//   return (
//     <div id="wd-assignments-editor" className="p-4">
//       <Form>
//         <Form.Group className="mb-3" controlId="wd-name">
//           <Form.Label><strong>Assignment Name</strong></Form.Label>
//           <Form.Control type="text" defaultValue={assignment.title} />
//         </Form.Group>

//         <Form.Group className="mb-4" controlId="wd-description">
//           <Form.Label><strong>Description</strong></Form.Label>
//           <Form.Control
//             as="textarea"
//             rows={6}
//             defaultValue={assignment.description}
//           />
//         </Form.Group>

//         <Row className="mb-3">
//           <Col md={3}>
//             <Form.Label htmlFor="wd-points">Points</Form.Label>
//           </Col>
//           <Col>
//             <Form.Control type="number" defaultValue={assignment.points} id="wd-points" />
//           </Col>
//         </Row>

//         <Row className="mb-3">
//           <Col md={3}>
//             <Form.Label htmlFor="wd-group">Assignment Group</Form.Label>
//           </Col>
//           <Col>
//             <Form.Select id="wd-group" defaultValue="ASSIGNMENTS">
//               <option value="ASSIGNMENTS">ASSIGNMENTS</option>
//             </Form.Select>
//           </Col>
//         </Row>

//         <Row className="mb-3">
//           <Col md={3}>
//             <Form.Label htmlFor="wd-display-grade-as">Display Grade as</Form.Label>
//           </Col>
//           <Col>
//             <Form.Select id="wd-display-grade-as" defaultValue="PERCENTAGE">
//               <option value="PERCENTAGE">Percentage</option>
//             </Form.Select>
//           </Col>
//         </Row>

//         <Row className="mb-4">
//           <Col md={3}>
//             <Form.Label htmlFor="wd-submission-type"><strong>Submission Type</strong></Form.Label>
//           </Col>
//           <Col md={9}>
//             <div className="border rounded p-3">
//               <Form.Select id="wd-submission-type" defaultValue="Online" className="mb-3">
//                 <option value="Online">Online</option>
//               </Form.Select>

//               <Form.Label><strong>Online Entry Options</strong></Form.Label>
//               <div className="ms-3">
//                 <Form.Check type="checkbox" id="wd-text-entry" label="Text Entry" />
//                 <Form.Check type="checkbox" id="wd-website-url" label="Website URL" />
//                 <Form.Check type="checkbox" id="wd-media-recordings" label="Media Recordings" />
//                 <Form.Check type="checkbox" id="wd-student-annotation" label="Student Annotation" />
//                 <Form.Check type="checkbox" id="wd-file-upload" label="File Uploads" />
//               </div>
//             </div>
//           </Col>
//         </Row>

//         <Row className="mb-4">
//           <Col md={3}>
//             <Form.Label htmlFor="wd-assign-to"><strong>Assign</strong></Form.Label>
//           </Col>
//           <Col md={9}>
//             <div className="border rounded p-3">
//               <Form.Group className="mb-3" controlId="wd-assign-to">
//                 <Form.Label><strong>Assign to</strong></Form.Label>
//                 <Form.Control type="text" defaultValue="Everyone" />
//               </Form.Group>

//               <Form.Group className="mb-3" controlId="wd-due-date">
//                 <Form.Label><strong>Due</strong></Form.Label>
//                  <InputGroup>
//     <DateTime
//       value={assignment.dueDate ? new Date(assignment.dueDate) : undefined}
//       onChange={(date) => {
//         const iso = new Date(date as unknown as Date).toISOString();
//         // setAssignment({ ...assignment, dueDate: iso });
//       }}
//       dateFormat="MMMM D, YYYY,"
//       timeFormat="h:mm A"
//       inputProps={{ className: "form-control" }}
//     />
//     <InputGroup.Text>
//       <FaCalendarAlt />
//     </InputGroup.Text>
//   </InputGroup>
//               </Form.Group>

//               <Row>
                {/* <Form.Group controlId="wd-available-from">
                  <Form.Label><strong>Available from</strong></Form.Label>
                  <DatePicker
                    selected={assignment.availableFrom ? new Date(assignment.availableFrom) : null}
                    onChange={(date) => {
                      // Handle the date change
                      console.log(date);
                    }}
                    showTimeSelect
                    timeFormat="HH:mm"
                    timeIntervals={15}
                    timeCaption="Time"
                    dateFormat="MMMM d, yyyy h:mm aa"  // This gives "May 13, 2025 11:59 PM"
                    className="form-control"
                    placeholderText="Select date and time"
                  />
                </Form.Group> */}
                // <Col>
                //   <Form.Group controlId="wd-available-from">
                //   <Form.Label><strong>Available from</strong></Form.Label>
                //   <Form.Control 
                //     type="datetime-local" 
                //     defaultValue={assignment.availableFrom ? 
                //       new Date(assignment.availableFrom).toISOString().slice(0, 16) : 
                //       ""
                //     } 
                //   />
                // </Form.Group>
                  {/* <Form.Group controlId="wd-available-from">
                    <Form.Label><strong>Available from</strong></Form.Label>
                    <Form.Control type="date" defaultValue={assignment.availableFrom?.slice(0, 10)} />
                  </Form.Group> */}
                // </Col>
                // <Col>
                  {/* <Form.Group controlId="wd-available-until">
                  <Form.Label><strong>Until</strong></Form.Label>
                  <div className="d-flex gap-2">
                    <Form.Control 
                      type="date" 
                      style={{ flex: 2 }}
                    />
                    <Form.Control 
                      type="time" 
                      style={{ flex: 1 }}
                    />
                  </div>
                  <Form.Text className="text-muted">
                    Select date and time
                  </Form.Text>
                </Form.Group> */}
//                   <Form.Group controlId="wd-available-until">
//                     <Form.Label><strong>Until</strong></Form.Label>
//                     <Form.Control type="date" />
//                   </Form.Group>
//                 </Col>
//               </Row>
//             </div>
//           </Col>
//         </Row>

//         <hr />

//         <div className="d-flex justify-content-end gap-2 mt-3">
//           <Link to={`/Kanbas/Courses/${courseId}/Assignments`}>
//             <Button variant="secondary" id="wd-cancel">Cancel</Button>
//           </Link>
//           <Link to={`/Kanbas/Courses/${courseId}/Assignments`}>
//             <Button variant="danger" id="wd-save">Save</Button>
//           </Link>
//         </div>
//       </Form>
//     </div>
//   );
// }
// latest code above

// import { Form, Button, Row, Col } from "react-bootstrap";

// export default function AssignmentEditor() {
//   return (
//     <div id="wd-assignments-editor" className="p-4">
//       <Form>
//         <Form.Group className="mb-3" controlId="wd-name">
//           <Form.Label><strong>Assignment Name</strong></Form.Label>
//           <Form.Control type="text" defaultValue="A1 - ENV + HTML" />
//         </Form.Group>

//         <Form.Group className="mb-4" controlId="wd-description">
//           <Form.Label><strong>Description</strong></Form.Label>
//           <Form.Control
//             as="textarea"
//             rows={6}
//             defaultValue={`The assignment is available online Submit a link to the landing page 
// of your Web application running on Netlify. The landing page should
// include the following: Your full name and section Links to each 
// of the lab assignments Link to the Kanbas application Links to all 
// relevant source code repositories The Kanbas application should 
// include a link to navigate back to the landing page.`}
//           />
//         </Form.Group>

//         <Row className="mb-3">
//           <Col md={3}>
//             <Form.Label htmlFor="wd-points">Points</Form.Label>
//           </Col>
//           <Col>
//             <Form.Control type="number" defaultValue={100} id="wd-points" />
//           </Col>
//         </Row>

//         <Row className="mb-3">
//           <Col md={3}>
//             <Form.Label htmlFor="wd-group">Assignment Group</Form.Label>
//           </Col>
//           <Col>
//             <Form.Select id="wd-group" defaultValue="ASSIGNMENTS">
//               <option value="ASSIGNMENTS">ASSIGNMENTS</option>
//             </Form.Select>
//           </Col>
//         </Row>

//         <Row className="mb-3">
//           <Col md={3}>
//             <Form.Label htmlFor="wd-display-grade-as">Display Grade as</Form.Label>
//           </Col>
//           <Col>
//             <Form.Select id="wd-display-grade-as" defaultValue="PERCENTAGE">
//               <option value="PERCENTAGE">Percentage</option>
//             </Form.Select>
//           </Col>
//         </Row>

// <Row className="mb-4">
//   <Col md={3}>
//     <Form.Label htmlFor="wd-submission-type"><strong>Submission Type</strong></Form.Label>
//   </Col>

//   {/* Box with dropdown + checkboxes */}
//   <Col md={9}>
//     <div className="border rounded p-3">
//       <Form.Select id="wd-submission-type" defaultValue="Online" className="mb-3">
//         <option value="Online">Online</option>
//         {/* Add more options if needed */}
//       </Form.Select>

//       <Form.Label><strong>Online Entry Options</strong></Form.Label>
//       <div className="ms-3">
//         <Form.Check type="checkbox" id="wd-text-entry" label="Text Entry" />
//         <Form.Check type="checkbox" id="wd-website-url" label="Website URL" />
//         <Form.Check type="checkbox" id="wd-media-recordings" label="Media Recordings" />
//         <Form.Check type="checkbox" id="wd-student-annotation" label="Student Annotation" />
//         <Form.Check type="checkbox" id="wd-file-upload" label="File Uploads" />
//       </div>
//     </div>
//   </Col>
// </Row>


//         <Row className="mb-4">
//   <Col md={3}>
//     <Form.Label htmlFor="wd-assign-to"><strong>Assign </strong></Form.Label>
//   </Col>

//   <Col md={9}>
//     <div className="border rounded p-3">
//       <Form.Group className="mb-3" controlId="wd-assign-to">
//         <Form.Label><strong>Assign to</strong></Form.Label>
//         <Form.Control type="text" defaultValue="Everyone" />
//       </Form.Group>

//       <Form.Group className="mb-3" controlId="wd-due-date">
//         <Form.Label><strong>Due</strong></Form.Label>
//         <Form.Control type="date" defaultValue="2024-05-13" />
//       </Form.Group>

//       <Row>
//         <Col>
//           <Form.Group controlId="wd-available-from">
//             <Form.Label><strong>Available from</strong></Form.Label>
//             <Form.Control type="date" defaultValue="2024-05-06" />
//           </Form.Group>
//         </Col>
//         <Col>
//           <Form.Group controlId="wd-available-until">
//             <Form.Label><strong>Until</strong></Form.Label>
//             <Form.Control type="date" defaultValue="2024-05-20" />
//           </Form.Group>
//         </Col>
//       </Row>
//     </div>
//   </Col>
// </Row>


//         <hr />

//         <div className="d-flex justify-content-end gap-2 mt-3">
//           <Button variant="secondary" id="wd-cancel">Cancel</Button>
//           <Button variant="danger" id="wd-save">Save</Button>
//         </div>
//       </Form>
//     </div>
//   );
// }




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