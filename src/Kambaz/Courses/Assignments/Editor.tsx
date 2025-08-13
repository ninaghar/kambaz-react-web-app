
import { Form, Button, Row, Col, } from "react-bootstrap";
import { useParams, useNavigate } from "react-router-dom";
import "react-datetime/css/react-datetime.css";
import { useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { addAssignment, updateAssignment } from "./reducer";
import * as assignmentsClient from "./client";

export default function AssignmentEditor() {
  const { courseId, assignmentId } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  
  console.log("Params:", { courseId, assignmentId });

  // Determine if we're editing or creating
  const isEditing = assignmentId && assignmentId !== "new"; 
  console.log("isEditing:", isEditing);

  // Assignment state - matching your database structure
  const [assignment, setAssignment] = useState({
    _id: "",
    title: "",
    description: "",
    points: 100,
    available: "",
    due: "",
    availableFrom: "",
    availableDate: "", // Add this for database compatibility
    dueDate: "",
    untilDate: "", // Add this for database compatibility
    course: courseId || "",
    assignmentGroup: "ASSIGNMENTS", // Add this for database compatibility
    gradingType: "POINTS", // Add this for database compatibility
    submissionType: "ONLINE", // Add this for database compatibility
  });

  // Fetch assignment from server if editing
  const fetchAssignment = async () => {
    if (!assignmentId || assignmentId === "new") return;
    try {
      console.log("Fetching assignment:", assignmentId);
      const assignmentData = await assignmentsClient.findAssignmentById(assignmentId);
      console.log("Fetched assignment data:", assignmentData);
      
      setAssignment({
        _id: assignmentData._id || "",
        title: assignmentData.title || "",
        description: assignmentData.description || "",
        points: assignmentData.points || 100,
        available: assignmentData.available || "",
        due: assignmentData.due || "",
        availableFrom: assignmentData.availableFrom || assignmentData.availableDate || "",
        availableDate: assignmentData.availableDate || assignmentData.availableFrom || "",
        dueDate: assignmentData.dueDate || "",
        untilDate: assignmentData.untilDate || "",
        course: assignmentData.course || courseId || "",
        assignmentGroup: assignmentData.assignmentGroup || "ASSIGNMENTS",
        gradingType: assignmentData.gradingType || "POINTS",
        submissionType: assignmentData.submissionType || "ONLINE",
      });
    } catch (error) {
      console.error("Error fetching assignment:", error);
    }
  };

  useEffect(() => {
    fetchAssignment();
  }, [assignmentId]);

  // Helper function to format date for input fields (ISO to YYYY-MM-DD)
  const formatDateForInput = (isoDate: string) => {
    if (!isoDate) return "";
    try {
      return new Date(isoDate).toISOString().slice(0, 10);
    } catch {
      return "";
    }
  };

  // Helper function to format date for display text
  const formatDateForDisplay = (date: Date) => {
    return date.toLocaleDateString() + " at " + date.toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'});
  };

  const saveAssignment = async () => {
  if (!assignment.title.trim()) {
    alert("Assignment title is required");
    return;
  }

  if (!courseId) return;

  try {
    if (isEditing && assignmentId) {
      // Update existing assignment
      console.log("Updating assignment:", assignment);
      const updatedAssignment = await assignmentsClient.updateAssignment(assignmentId, assignment);
      dispatch(updateAssignment(updatedAssignment));
      console.log("Updated assignment:", assignment.title);
    } else {
      // Create new assignment
      console.log("Creating assignment:", assignment);

      // Create a copy without _id if it's empty
      const { _id, ...assignmentData } = assignment;
      const cleanedAssignment = _id ? assignment : assignmentData;

      const newAssignment = await assignmentsClient.createAssignment(courseId, cleanedAssignment);
      dispatch(addAssignment(newAssignment));
      console.log("Created new assignment:", assignment.title);
    }
    navigate(`/Kambaz/Courses/${courseId}/Assignments`);
  } catch (error) {
    console.error("Error saving assignment:", error);
    alert("Error saving assignment. Please try again.");
  }
};

  // const saveAssignment = async () => {
  //   if (!assignment.title.trim()) {
  //     alert("Assignment title is required");
  //     return;
  //   }

  //   if (!courseId) return;
    
  //   try {
  //     if (isEditing && assignmentId) {
  //       // Update existing assignment - use the correct client function
  //       console.log("Updating assignment:", assignment);
  //       const updatedAssignment = await assignmentsClient.updateAssignment( assignmentId,assignment);
  //       dispatch(updateAssignment(updatedAssignment));
  //       console.log("Updated assignment:", assignment.title);
  //     } else {
  //       // Create new assignment - use the correct client function
  //       console.log("Creating assignment:", assignment);
  //       const newAssignment = await assignmentsClient.createAssignment(courseId, assignment);
  //       dispatch(addAssignment(newAssignment));
  //       console.log("Created new assignment:", assignment.title);
  //     }
  //     navigate(`/Kambaz/Courses/${courseId}/Assignments`);
  //   } catch (error) {
  //     console.error("Error saving assignment:", error);
  //     alert("Error saving assignment. Please try again.");
  //   }
  // };

  const handleCancel = () => {
    console.log("Cancelled assignment editing");
    navigate(`/Kambaz/Courses/${courseId}/Assignments`);
  };

  const handleInputChange = (field: string, value: any) => {
    setAssignment(prev => ({
      ...prev,
      [field]: value
    }));
  };

  // Handle date changes with proper formatting for database
  const handleDateChange = (field: string, value: string) => {
    if (!value) {
      setAssignment(prev => ({
        ...prev,
        [field]: "",
        ...(field === "dueDate" && { due: "" }),
        ...(field === "availableFrom" && { available: "", availableDate: "" }),
        ...(field === "availableDate" && { availableFrom: "", available: "" })
      }));
      return;
    }

    try {
      const date = new Date(value);
      const isoString = date.toISOString();
      const displayString = formatDateForDisplay(date);

      if (field === "dueDate") {
        setAssignment(prev => ({
          ...prev,
          dueDate: isoString,
          due: displayString
        }));
      } else if (field === "availableFrom" || field === "availableDate") {
        setAssignment(prev => ({
          ...prev,
          availableFrom: isoString,
          availableDate: isoString,
          available: `Available from ${displayString}`
        }));
      } else if (field === "untilDate") {
        setAssignment(prev => ({
          ...prev,
          untilDate: isoString
        }));
      }
    } catch (error) {
      console.error("Error formatting date:", error);
    }
  };

  return (
    <div id="wd-assignments-editor" className="p-4">
      <h2>{isEditing ? "Edit Assignment" : "New Assignment"}</h2>
      <hr />
      <Form>
        <Form.Group className="mb-3" controlId="wd-name">
          <Form.Label><strong>Assignment Name</strong></Form.Label>
          <Form.Control 
            type="text" 
            value={assignment.title}
            onChange={(e) => handleInputChange("title", e.target.value)}
            placeholder="Enter assignment name"
            id="wd-name"
          />
        </Form.Group>

        <Form.Group className="mb-4" controlId="wd-description">
          <Form.Label><strong>Description</strong></Form.Label>
          <Form.Control
            as="textarea"
            rows={6}
            value={assignment.description}
            onChange={(e) => handleInputChange("description", e.target.value)}
            placeholder="Enter assignment description"
            id="wd-description"
          />
        </Form.Group>

        <Row className="mb-3">
          <Col md={3}>
            <Form.Label htmlFor="wd-points">Points</Form.Label>
          </Col>
          <Col>
            <Form.Control 
              type="number" 
              value={assignment.points}
              id="wd-points"
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => 
                handleInputChange("points", parseInt(e.target.value) || 0)
              }
              placeholder="100"
            />
          </Col>
        </Row>

        {/* Add Assignment Group and Grading Type for database compatibility */}
        <Row className="mb-3">
          <Col md={3}>
            <Form.Label htmlFor="wd-assignment-group">Assignment Group</Form.Label>
          </Col>
          <Col>
            <Form.Select
              value={assignment.assignmentGroup}
              onChange={(e) => handleInputChange("assignmentGroup", e.target.value)}
              id="wd-assignment-group"
            >
              <option value="ASSIGNMENTS">Assignments</option>
              <option value="EXAMS">Exams</option>
              <option value="PROJECTS">Projects</option>
              <option value="QUIZZES">Quizzes</option>
            </Form.Select>
          </Col>
        </Row>

        <Row className="mb-4">
          <Col md={3}>
            <Form.Label htmlFor="wd-assign-to"><strong>Assign</strong></Form.Label>
          </Col>
          <Col md={9}>
            <div className="border rounded p-3">
              <Row>
                {/* Due Date */}
                <Col>
                  <Form.Group className="mb-3" controlId="wd-due-date">
                    <Form.Label><strong>Due</strong></Form.Label>
                    <Form.Control 
                      type="date" 
                      value={formatDateForInput(assignment.dueDate)} 
                      onChange={(e) => handleDateChange("dueDate", e.target.value)}
                      id="wd-due-date"
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
                      value={formatDateForInput(assignment.availableDate || assignment.availableFrom)}  
                      onChange={(e) => handleDateChange("availableDate", e.target.value)}
                      id="wd-available-from"
                    />
                  </Form.Group>
                </Col>
                <Col>
                  <Form.Group controlId="wd-available-until">
                    <Form.Label><strong>Until</strong></Form.Label>
                    <Form.Control 
                      type="date" 
                      value={formatDateForInput(assignment.untilDate)}
                      onChange={(e) => handleDateChange("untilDate", e.target.value)}
                      id="wd-available-until"
                    />
                  </Form.Group>
                </Col>
              </Row>
            </div>
          </Col>
        </Row>

        <hr />

        <div className="d-flex justify-content-end gap-2 mt-3">
          <Button variant="secondary" onClick={handleCancel} id="wd-cancel">
            Cancel
          </Button>
          <Button variant="danger" onClick={saveAssignment} id="wd-save">
            Save
          </Button>
        </div>
      </Form>
    </div>
  );
}



// import { Form, Button, Row, Col, } from "react-bootstrap";
// import { useParams, useNavigate } from "react-router-dom";
// import "react-datetime/css/react-datetime.css";
// import { useDispatch } from "react-redux";
// import { useEffect, useState } from "react";
// import { addAssignment, updateAssignment } from "./reducer";
// import * as assignmentsClient from "./client";

// export default function AssignmentEditor() {
//   const { courseId, aid } = useParams();
//   const navigate = useNavigate();
//   const dispatch = useDispatch();
  
//   console.log("Params:", { courseId, aid });

//   // Get assignments from Redux store
//   // const { assignments } = useSelector((state: any) => state.assignmentsReducer);
  
//   // Determine if we're editing or creating
//   const isEditing = aid && aid !== "new"; 
//   console.log("isEditing:", isEditing);

//   // Assignment state - matching your database structure
//   const [assignment, setAssignment] = useState({
//     _id: "",
//     title: "",
//     description: "",
//     points: 100,
//     available: "",
//     due: "",
//     availableFrom: "",
//     dueDate: "",
//     course: courseId || "",
//   });

//   // Fetch assignment from server if editing
//   const fetchAssignment = async () => {
//     if (!aid || aid === "new") return;
//     try {
//       const assignmentData = await assignmentsClient.findAssignmentById(aid);
//       setAssignment({
//         _id: assignmentData._id || "",
//         title: assignmentData.title || "",
//         description: assignmentData.description || "",
//         points: assignmentData.points || 100,
//         available: assignmentData.available || "",
//         due: assignmentData.due || "",
//         availableFrom: assignmentData.availableFrom || "",
//         dueDate: assignmentData.dueDate || "",
//         course: assignmentData.course || courseId || "",
//       });
//     } catch (error) {
//       console.error("Error fetching assignment:", error);
//     }
//   };

//   useEffect(() => {
//     fetchAssignment();
//   }, [aid]);

//   // Helper function to format date for input fields (ISO to YYYY-MM-DD)
//   const formatDateForInput = (isoDate: string) => {
//     if (!isoDate) return "";
//     return isoDate.slice(0, 10);
//   };

//   // Helper function to format date for display text
//   const formatDateForDisplay = (date: Date) => {
//     return date.toLocaleDateString() + " at " + date.toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'});
//   };

//   const saveAssignment = async () => {
//     if (!assignment.title.trim()) {
//       alert("Assignment title is required");
//       return;
//     }

//     if (!courseId) return;
    
//     try {
//       if (isEditing) {
//         // Update existing assignment
//         const updatedAssignment = await assignmentsClient.updateAssignment(assignment);
//         dispatch(updateAssignment(updatedAssignment));
//         console.log("Updated assignment:", assignment.title);
//       } else {
//         // Create new assignment
//         const newAssignment = await assignmentsClient.createAssignmentForCourse(courseId, assignment);
//         dispatch(addAssignment(newAssignment));
//         console.log("Created new assignment:", assignment.title);
//       }
//       navigate(`/Kambaz/Courses/${courseId}/Assignments`);
//     } catch (error) {
//       console.error("Error saving assignment:", error);
//     }
//   };

//   const handleCancel = () => {
//     console.log("Cancelled assignment editing");
//     navigate(`/Kambaz/Courses/${courseId}/Assignments`);
//   };

//   const handleInputChange = (field: string, value: any) => {
//     setAssignment(prev => ({
//       ...prev,
//       [field]: value
//     }));
//   };

//   // Handle date changes with proper formatting
//   const handleDateChange = (field: string, value: string) => {
//     const date = new Date(value);
//     const isoString = date.toISOString();
//     const displayString = formatDateForDisplay(date);

//     if (field === "dueDate") {
//       setAssignment(prev => ({
//         ...prev,
//         dueDate: isoString,
//         due: displayString
//       }));
//     } else if (field === "availableFrom") {
//       setAssignment(prev => ({
//         ...prev,
//         availableFrom: isoString,
//         available: `Available from ${displayString}`
//       }));
//     }
//   };

//   return (
//     <div id="wd-assignments-editor" className="p-4">
//       <h2>{isEditing ? "Edit Assignment" : "New Assignment"}</h2>
//       <hr />
//       <Form>
//         <Form.Group className="mb-3" controlId="wd-name">
//           <Form.Label><strong>Assignment Name</strong></Form.Label>
//           <Form.Control 
//             type="text" 
//             value={assignment.title}
//             onChange={(e) => handleInputChange("title", e.target.value)}
//             placeholder="Enter assignment name"
//             id="wd-name"
//           />
//         </Form.Group>

//         <Form.Group className="mb-4" controlId="wd-description">
//           <Form.Label><strong>Description</strong></Form.Label>
//           <Form.Control
//             as="textarea"
//             rows={6}
//             value={assignment.description}
//             onChange={(e) => handleInputChange("description", e.target.value)}
//             placeholder="Enter assignment description"
//             id="wd-description"
//           />
//         </Form.Group>

//         <Row className="mb-3">
//           <Col md={3}>
//             <Form.Label htmlFor="wd-points">Points</Form.Label>
//           </Col>
//           <Col>
//             <Form.Control 
//               type="number" 
//               value={assignment.points}
//               id="wd-points"
//               onChange={(e: React.ChangeEvent<HTMLInputElement>) => 
//                 handleInputChange("points", parseInt(e.target.value) || 0)
//               }
//               placeholder="100"
//             />
//           </Col>
//         </Row>

//         <Row className="mb-4">
//           <Col md={3}>
//             <Form.Label htmlFor="wd-assign-to"><strong>Assign</strong></Form.Label>
//           </Col>
//           <Col md={9}>
//             <div className="border rounded p-3">
//               <Row>
//                 {/* Due Date */}
//                 <Col>
//                   <Form.Group className="mb-3" controlId="wd-due-date">
//                     <Form.Label><strong>Due</strong></Form.Label>
//                     <Form.Control 
//                       type="date" 
//                       value={formatDateForInput(assignment.dueDate)} 
//                       onChange={(e) => handleDateChange("dueDate", e.target.value)}
//                       id="wd-due-date"
//                     />
//                   </Form.Group>
//                 </Col>
//               </Row>

//               <Row>
//                 <Col>
//                   <Form.Group controlId="wd-available-from">
//                     <Form.Label><strong>Available from</strong></Form.Label>
//                     <Form.Control 
//                       type="date" 
//                       value={formatDateForInput(assignment.availableFrom)}  
//                       onChange={(e) => handleDateChange("availableFrom", e.target.value)}
//                       id="wd-available-from"
//                     />
//                   </Form.Group>
//                 </Col>
//                 <Col>
//                   <Form.Group controlId="wd-available-until">
//                     <Form.Label><strong>Until</strong></Form.Label>
//                     <Form.Control 
//                       type="date" 
//                       onChange={(e) => handleInputChange("availableUntil", e.target.value)}
//                       id="wd-available-until"
//                     />
//                   </Form.Group>
//                 </Col>
//               </Row>
//             </div>
//           </Col>
//         </Row>

//         <hr />

//         <div className="d-flex justify-content-end gap-2 mt-3">
//           <Button variant="secondary" onClick={handleCancel} id="wd-cancel">
//             Cancel
//           </Button>
//           <Button variant="danger" onClick={saveAssignment} id="wd-save">
//             Save
//           </Button>
//         </div>
//       </Form>
//     </div>
//   );
// }





// import { Form, Button, Row, Col, } from "react-bootstrap";
// import { useParams, Link, useNavigate } from "react-router-dom";
// // import * as db from "../../Database";

// import "react-datetime/css/react-datetime.css";
// import { useDispatch, useSelector } from "react-redux";
// import { useEffect, useState } from "react";
// import { addAssignment, updateAssignment } from "./reducer";
// import * as assignmentsClient from "./client";

// export default function AssignmentEditor() {
//   const { courseId, aid } = useParams();
//   const navigate = useNavigate();
//   const dispatch = useDispatch();
  
//   console.log("Params:", { courseId, aid });

//   // const assignment = db.assignments.find(
//   //   (a) => a._id === aid && a.course === courseId
//   // );

//     // Get assignments from Redux store
//   const { assignments } = useSelector((state: any) => state.assignmentsReducer);
  
//   // Determine if we're editing or creating
//   console.log("current aid:", aid);
//   // const isEditing = aid !== "new";
//   const isEditing = aid && aid !== "new"; 
//   console.log("isEditing:", isEditing);
//   const existingAssignment = isEditing ? assignments.find((a: any) => a._id === aid) : null;

//   // Assignment state
//   const [assignment, setAssignment] = useState({
//      _id: "",
//     title: "",
//     description: "",
//     points: 100,
//     dueDate: "",
//     availableFrom: "",
//     availableUntil: "",
//     course: courseId || "",
//   });

//     // Load existing assignment data if editing
//   useEffect(() => {
//     if (isEditing && existingAssignment) {
//       setAssignment({
//         title: existingAssignment.title || "",
//         description: existingAssignment.description || "",
//         points: existingAssignment.points || 100,
//         dueDate: existingAssignment.dueDate || existingAssignment.due || "",
//         availableFrom: existingAssignment.availableFrom || existingAssignment.available || "",
//         availableUntil: existingAssignment.availableUntil || "",
//         course: existingAssignment.course || courseId || "",
//       });
//     } else if (!isEditing) {
//       // Reset form for new assignment
//       setAssignment({
//         title: "",
//         description: "",
//         points: 100,
//         dueDate: "",
//         availableFrom: "",
//         availableUntil: "",
//         course: courseId || "",
//       });
//     }
//   }, [isEditing, existingAssignment, courseId, aid]);


//   const handleSave = () => {
//     if (!assignment.title.trim()) {
//       alert("Assignment title is required");
//       return;
//     }

//     if (isEditing) {
//       // Update existing assignment
//       dispatch(updateAssignment({
//         ...existingAssignment,
//         ...assignment,
//         _id: aid,
//         // Keep backward compatibility
//         due: assignment.dueDate,
//         available: assignment.availableFrom,
//       }));
//       console.log("Updated assignment:", assignment.title);
//     } else {
//       // Create new assignment
//       dispatch(addAssignment({
//         ...assignment,
//         // Keep backward compatibility
//         due: assignment.dueDate,
//         available: assignment.availableFrom,
//       }));
//        console.log("Created new assignment:", assignment.title);
//     }

//     // Navigate back to assignments
//     navigate(`/Kambaz/Courses/${courseId}/Assignments`);
//   };

//   const handleCancel = () => {
//     console.log("Cancelled assignment editing");
//     // Navigate back without saving
//     navigate(`/Kambaz/Courses/${courseId}/Assignments`);
//   };

//   const handleInputChange = (field: string, value: any) => {
//     setAssignment(prev => ({
//       ...prev,
//       [field]: value
//     }));
//   };

//   if (!assignments) {
//     return <div>Assignment not found</div>;
//   }

//   return (
//     <div id="wd-assignments-editor" className="p-4">
//       <h2>{isEditing ? "Edit Assignment" : "New Assignment"}</h2>
//           <hr />
//       <Form>
//         <Form.Group className="mb-3" controlId="wd-name">
//           <Form.Label><strong>Assignment Name</strong></Form.Label>
//           <Form.Control 
//           type="text" 
//           defaultValue={assignment.title}
//           onChange={(e) => handleInputChange("title", e.target.value)}
//                 placeholder="Enter assignment name"
//                 id="wd-name"
//           />
//         </Form.Group>

//         <Form.Group className="mb-4" controlId="wd-description">
//           <Form.Label><strong>Description</strong></Form.Label>
//           <Form.Control
//             as="textarea"
//             rows={6}
//             defaultValue={assignment.description}
//             onChange={(e) => handleInputChange("description", e.target.value)}
//                 placeholder="Enter assignment description"
//                 id="wd-description"

//           />
//         </Form.Group>

//         <Row className="mb-3">
//           <Col md={3}>
//             <Form.Label htmlFor="wd-points">Points</Form.Label>
//           </Col>
//           <Col>
//             <Form.Control 
//               type="number" 
//               value={assignment.points}
//               id="wd-points"
//               onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleInputChange("points", parseInt(e.target.value) || 0)}
//               placeholder="100"
//             />
//           </Col>
//         </Row>



//         <Row className="mb-4">
//           <Col md={3}>
//             <Form.Label htmlFor="wd-assign-to"><strong>Assign</strong></Form.Label>
//           </Col>
//           <Col md={9}>
//             <div className="border rounded p-3">
//               {/* <Form.Group className="mb-3" controlId="wd-assign-to">
//                 <Form.Label><strong>Assign to</strong></Form.Label>
//                 <Form.Control type="text" defaultValue="Everyone" />
//               </Form.Group> */}

//               <Row>
//                 {/* Due Date */}
//                 <Col>
//                   <Form.Group className="mb-3" controlId="wd-due-date">
//                     <Form.Label><strong>Due</strong></Form.Label>
//                     <Form.Control 
//                       type="date" 
//                       defaultValue={assignment.dueDate ? assignment.dueDate.slice(0, 10) : "2024-05-25"} 
//                       onChange={(e) => handleInputChange("dueDate", e.target.value)}
//                       id="wd-due-date"
//                     />
//                   </Form.Group>
//                 </Col>
//               </Row>

//               <Row>
//                 <Col>
//                   <Form.Group controlId="wd-available-from">
//                     <Form.Label><strong>Available from</strong></Form.Label>
//                     <Form.Control 
//                     type="date" 
//                     defaultValue={assignment.availableFrom ? assignment.availableFrom.slice(0, 10) : "2024-05-02"}  
//                     onChange={(e) => handleInputChange("availableFrom", e.target.value)}
//                     id="wd-available-from"
//                     />
//                   </Form.Group>
//                 </Col>
//                 <Col>
//                   <Form.Group controlId="wd-available-until">
//                     <Form.Label><strong>Until</strong></Form.Label>
//                     <Form.Control 
//                     type="date" 
//                     onChange={(e) => handleInputChange("availableUntil", e.target.value)}
//                     id="wd-available-until"
//                     />
//                   </Form.Group>
//                 </Col>
//               </Row>
//             </div>
//           </Col>
//         </Row>

//         <hr />

//         <div className="d-flex justify-content-end gap-2 mt-3">
//           <Link to={`/Kambaz/Courses/${courseId}/Assignments`}>
//             <Button variant="secondary" onClick={handleCancel} id="wd-cancel">Cancel</Button>
//           </Link>
//           <Link to={`/Kambaz/Courses/${courseId}/Assignments`}>
//             <Button variant="danger" onClick={handleSave} id="wd-save">Save</Button>
//           </Link>
//         </div>
//       </Form>
//     </div>
//   );
// }


        {/* <Row className="mb-3">
          <Col md={3}>
            <Form.Label htmlFor="wd-group">Assignment Group</Form.Label>
          </Col>
          <Col>
            <Form.Select id="wd-group" defaultValue="ASSIGNMENTS">
              <option value="ASSIGNMENTS">ASSIGNMENTS</option>
            </Form.Select>
          </Col>
        </Row> */}

        {/* <Row className="mb-3">
          <Col md={3}>
            <Form.Label htmlFor="wd-display-grade-as">Display Grade as</Form.Label>
          </Col>
          <Col>
            <Form.Select id="wd-display-grade-as" defaultValue="PERCENTAGE">
              <option value="PERCENTAGE">Percentage</option>
            </Form.Select>
          </Col>
        </Row> */}

        {/* <Row className="mb-4">
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
        </Row> */}

          // Load existing assignment data if editing
  // useEffect(() => {
  //   if (isEditing && existingAssignment) {
  //     setAssignment({
  //       title: existingAssignment.title || "",
  //       description: existingAssignment.description || "",
  //       points: existingAssignment.points || 100,
  //       dueDate: existingAssignment.dueDate || existingAssignment.due || "",
  //       availableFrom: existingAssignment.availableFrom || existingAssignment.available || "",
  //       availableUntil: existingAssignment.availableUntil || "",
  //       course: existingAssignment.course || courseId || "",
  //     });
  //   }
  // }, [isEditing, existingAssignment, courseId]);