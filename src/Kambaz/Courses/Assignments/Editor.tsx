import { Form, Button, Row, Col, InputGroup } from "react-bootstrap";
import { useParams, Link } from "react-router-dom";
import * as db from "../../Database";

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
                    <Form.Control 
                      type="date" 
                      defaultValue={assignment.dueDate ? assignment.dueDate.slice(0, 10) : "2024-05-25"} 
                    />
                  </Form.Group>
                </Col>
              </Row>

              <Row>
                <Col>
                  <Form.Group controlId="wd-available-from">
                    <Form.Label><strong>Available from</strong></Form.Label>
                    <Form.Control 
                    type="date" 
                    defaultValue={assignment.availableFrom ? assignment.availableFrom.slice(0, 10) : "2024-05-02"}  
                    />
                  </Form.Group>
                </Col>
                <Col>
                  <Form.Group controlId="wd-available-until">
                    <Form.Label><strong>Until</strong></Form.Label>
                    <Form.Control type="date" />
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

//               <Row>
//                 {/* Due Date */}
//                 <Col>
//                   <Form.Group className="mb-3" controlId="wd-due-date">
//                     <Form.Label><strong>Due</strong></Form.Label>
//                     <InputGroup>
//                       <DateTime
//                         value={assignment.dueDate ? new Date(assignment.dueDate) : undefined}
//                         onChange={(date) => {
//                           const iso = new Date(date as unknown as Date).toISOString();
//                           console.log("Due date changed:", iso);
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

//               <Row>
//                 <Col>
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
