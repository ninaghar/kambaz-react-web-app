
import { useParams } from "react-router-dom";
import * as db from "../../Database";
import { ListGroup } from "react-bootstrap";
import { BsGripVertical } from "react-icons/bs";
import { MdOutlineAssignment } from "react-icons/md";
import { IoIosArrowDown } from "react-icons/io";

import AssignmentControls from "./AssignmentControls";
import AssignmentControlButtons from "./AssignmentControlButtons";
import LessonControlButtons from "../Modules/LessonControlButtons";
import "../../styles.css";

export default function Assignments() {
  const { courseId } = useParams();
  const assignments = db.assignments.filter(a => a.course === courseId);

  return (
    <div id="wd-assignments">
      <AssignmentControls />
      <br /><br />
      <ListGroup className="rounded-0" id="wd-assignments">
        <ListGroup.Item className="wd-module p-0 mb-5 fs-5 border-gray">
          <div className="wd-title p-3 ps-2 bg-secondary d-flex justify-content-between align-items-center">
            <div>
              <BsGripVertical className="me-2 fs-3" />
              <IoIosArrowDown className="me-2 fs-4" />
              ASSIGNMENTS
            </div>
            <AssignmentControlButtons />
          </div>

          <ListGroup className="wd-lessons rounded-0">
            {assignments.map((assignment) => (
              <ListGroup.Item
                key={assignment._id}
                className="wd-lesson p-3 ps-1"
              >
                <div className="d-flex justify-content-between align-items-start">
                  <div className="d-flex">
                    <div className="me-2">
                      <BsGripVertical className="fs-3" />
                      <MdOutlineAssignment className="fs-3 text-success" />
                    </div>
                    <div>
                      <a
                        href={`#/Kambaz/Courses/${courseId}/Assignments/${assignment._id}`}
                        className="wd-assignment-link text-decoration-none text-dark fw-bold"
                      >
                        {assignment.title}
                      </a>
                      <div className="small text-muted">
                        <span className="text-danger">Multiple Modules</span> |{" "}
                        <strong>{assignment.available}</strong>
                        <br />
                        <strong>Due</strong> {assignment.due} | {assignment.points} pts
                      </div>
                    </div>
                  </div>
                  <LessonControlButtons />
                </div>
              </ListGroup.Item>
            ))}
          </ListGroup>
        </ListGroup.Item>
      </ListGroup>
    </div>
  );
}



// import { useParams } from "react-router-dom";
// import db from "../Database";
// import AssignmentControls from "./AssignmentControls";
// import { ListGroup } from "react-bootstrap";
// import { BsGripVertical } from "react-icons/bs";
// import LessonControlButtons from "../Modules/LessonControlButtons";
// import { MdOutlineAssignment } from "react-icons/md";
// import AssignmentControlButtons from "./AssignmentControlButtons";
// import { IoIosArrowDown } from "react-icons/io";

// export default function Assignments() {
//   const { courseId } = useParams();
//   const courseAssignments = db.assignments.filter(
//     (a) => a.courseId === courseId
//   );

//   return (
//     <div id="wd-assignments">
//       <AssignmentControls />
//       <br /><br />
//       <ListGroup className="rounded-0" id="wd-assignments">
//         <ListGroup.Item className="wd-module p-0 mb-5 fs-5 border-gray">
//           <div className="wd-title p-3 ps-2 bg-secondary d-flex justify-content-between align-items-center">
//             <div>
//               <BsGripVertical className="me-2 fs-3" />
//               <IoIosArrowDown className="me-2 fs-4" />
//               ASSIGNMENTS
//             </div>
//             <AssignmentControlButtons />
//           </div>

//           <ListGroup className="wd-lessons rounded-0">
//             {courseAssignments.map((assignment) => (
//               <ListGroup.Item
//                 key={assignment.id}
//                 className="wd-lesson p-3 ps-1"
//               >
//                 <div className="d-flex justify-content-between align-items-start">
//                   <div className="d-flex">
//                     <div className="me-2">
//                       <BsGripVertical className="fs-3" />
//                       <MdOutlineAssignment className="fs-3 text-success" />
//                     </div>
//                     <div>
//                       <a
//                         href={`#/Kambaz/Courses/${courseId}/Assignments/${assignment.id}`}
//                         className="wd-assignment-link text-decoration-none text-dark fw-bold"
//                       >
//                         {assignment.title}
//                       </a>
//                       <div className="small text-muted">
//                         <span className="text-danger">Multiple Modules</span> |{" "}
//                         <strong>Not available</strong> until {assignment.available}
//                         <br />
//                         <strong>Due</strong> {assignment.due} | {assignment.points} pts
//                       </div>
//                     </div>
//                   </div>
//                   <LessonControlButtons />
//                 </div>
//               </ListGroup.Item>
//             ))}
//           </ListGroup>
//         </ListGroup.Item>
//       </ListGroup>
//     </div>
//   );
// }



// import AssignmentControls from "./AssignmentControls";
// import { ListGroup } from "react-bootstrap";
// import { BsGripVertical } from "react-icons/bs";

// import LessonControlButtons from "../Modules/LessonControlButtons";
// import { MdOutlineAssignment } from "react-icons/md";

// import AssignmentControlButtons from "./AssignmentControlButtons";
// import { IoIosArrowDown } from "react-icons/io";

// export default function Assignments() {
//   return (
//     <div id="wd-assignments">
//       <AssignmentControls />
//       <br /><br />
//       <ListGroup className="rounded-0" id="wd-assignments">
//         <ListGroup.Item className="wd-module p-0 mb-5 fs-5 border-gray">
//             <div className="wd-title p-3 ps-2 bg-secondary d-flex justify-content-between align-items-center">
//                 <div>
//                 <BsGripVertical className="me-2 fs-3" />
//                 <IoIosArrowDown className="me-2 fs-4" />
//                 ASSIGNMENTS
//                 </div>
//                 <AssignmentControlButtons />
//             </div>
        

//           <ListGroup className="wd-lessons rounded-0">
//             {/* Assignment 1 */}
//             <ListGroup.Item className="wd-lesson p-3 ps-1">
//               <div className="d-flex justify-content-between align-items-start">
//                 <div className="d-flex">
//                   <div className="me-2">
//                     <BsGripVertical className="fs-3" />
//                     <MdOutlineAssignment className="fs-3 text-success" />
//                   </div>
//                   <div>
//                     <a
//                       href="#/Kambaz/Courses/1234/Assignments/123"
//                       className="wd-assignment-link text-decoration-none text-dark fw-bold"
//                     >
//                       A1
//                     </a>
//                     <div className="small text-muted">
//                       <span className="text-danger">Multiple Modules</span> |{" "}
//                       <strong>Not available</strong> until May 6 at 12:00am
//                       <br />
//                       <strong>Due</strong> May 13 at 11:59pm | 100 pts
//                     </div>
//                   </div>
//                 </div>
//                 <LessonControlButtons />
//               </div>
//             </ListGroup.Item>

//             {/* Assignment 2 */}
//             <ListGroup.Item className="wd-lesson p-3 ps-1">
//               <div className="d-flex justify-content-between align-items-start">
//                 <div className="d-flex">
//                   <div className="me-2">
//                     <BsGripVertical className="fs-3" />
//                     <MdOutlineAssignment className="fs-3 text-success" />
//                   </div>
//                   <div>
//                     <a
//                       href="#/Kambaz/Courses/1234/Assignments/124"
//                       className="wd-assignment-link text-decoration-none text-dark fw-bold"
//                     >
//                       A2
//                     </a>
//                     <div className="small text-muted">
//                       <span className="text-danger">Multiple Modules</span> |{" "}
//                       <strong>Not available</strong> until May 13 at 12:00am 
//                       <br />
//                        <strong>Due</strong> May 20 at 11:59pm | 100 pts
//                     </div>
//                   </div>
//                 </div>
//                 <LessonControlButtons />
//               </div>
//             </ListGroup.Item>

//             {/* Assignment 3 */}
//             <ListGroup.Item className="wd-lesson p-3 ps-1">
//               <div className="d-flex justify-content-between align-items-start">
//                 <div className="d-flex">
//                   <div className="me-2">
//                     <BsGripVertical className="fs-3" />
//                     <MdOutlineAssignment className="fs-3 text-success" />
//                   </div>
//                   <div>
//                     <a
//                       href="#/Kambaz/Courses/1234/Assignments/125"
//                       className="wd-assignment-link text-decoration-none text-dark fw-bold"
//                     >
//                       A3
//                     </a>
//                     <div className="small text-muted">
//                       <span className="text-danger">Multiple Modules</span> |{" "}
//                       <strong>Not available</strong> until May 20 at 12:00am 
//                       <br />
//                        <strong>Due</strong> May 27 at 11:59pm | 100 pts
//                     </div>
//                   </div>
//                 </div>
//                 <LessonControlButtons />
//               </div>
//             </ListGroup.Item>
//           </ListGroup>
//         </ListGroup.Item>
//       </ListGroup>
//     </div>
//   );
// }

{/* <ListGroup.Item className="wd-module p-0 mb-5 fs-5 border-gray">
          <div className="wd-title p-3 ps-2 bg-secondary d-flex justify-content-between align-items-center">
            <div>
              <BsGripVertical className="me-2 fs-3" />
              ASSIGNMENTS 40% of Total
            </div>
            <Button
              variant="light"
              className="border-0"
              aria-label="Add Assignment Group"
            >
              <FaPlus />
              
            </Button>
            
          </div> */}

// import AssignmentControls from "./AssignmentControls";
// import { ListGroup, Button } from "react-bootstrap";
// import { BsGripVertical } from "react-icons/bs";
// import { FaPlus } from "react-icons/fa6";
// import LessonControlButtons from "../Modules/LessonControlButtons";
// import { MdOutlineAssignment } from "react-icons/md";
// export default function Assignments() {
//   return (
    
//     <div id="wd-assignments">
//         <AssignmentControls /><br /><br /><br /><br />
//         <ListGroup className="rounded-0" id="wd-assignments">
//       {/* Assignment Group Header */}
//       <ListGroup.Item className="wd-module p-0 mb-5 fs-5 border-gray">
//         <div className="wd-title p-3 ps-2 bg-secondary d-flex justify-content-between align-items-center">
//           <div>
//             <BsGripVertical className="me-2 fs-3" />
//             ASSIGNMENTS 40% of Total
//           </div>
//           <Button
//             variant="light"
//             className="border-0"
//             aria-label="Add Assignment Group"
//           >
//             <FaPlus />
//           </Button>
//         </div>

//         {/* Assignment List */}
//         <ListGroup className="wd-lessons rounded-0">
          
//           <ListGroup.Item className="wd-lesson p-3 ps-1">
//             <div className="d-flex justify-content-between align-items-start">
//               <div>
//                 <BsGripVertical className="me-2 fs-3" />
//                 <MdOutlineAssignment className="me-2 fs-3 text-success" />
//                 <a
//                   href="#/Kambaz/Courses/1234/Assignments/123"
//                   className="wd-assignment-link text-decoration-none text-dark fw-bold"
//                 >
//                   A1 
//                 </a>
//                 <div className="small text-muted">
//                   Multiple Modules | <strong>Not available</strong> until May 6 at 12:00am | <strong>Due</strong> May 13 at 11:59pm | 100 pts
//                 </div>
//               </div>
//               <LessonControlButtons />
//             </div>
//           </ListGroup.Item>

//           {/* Assignment 2 */}
//           <ListGroup.Item className="wd-lesson p-3 ps-1">
//             <div className="d-flex justify-content-between align-items-start">
//               <div>
//                 <BsGripVertical className="me-2 fs-3" />
//                 <MdOutlineAssignment className="me-2 fs-3 text-success" />
//                 <a
//                   href="#/Kambaz/Courses/1234/Assignments/124"
//                   className="wd-assignment-link text-decoration-none text-dark fw-bold"
//                 >
//                   A2 
//                 </a>
//                 <div className="small text-muted">
//                   Multiple Modules | <strong>Not available</strong> until May 13 at 12:00am | <strong>Due</strong> May 20 at 11:59pm | 100 pts
//                 </div>
//               </div>
//               <LessonControlButtons />
//             </div>
//           </ListGroup.Item>

//           {/* Assignment 3 */}
//           <ListGroup.Item className="wd-lesson p-3 ps-1">
//             <div className="d-flex justify-content-between align-items-start">
//               <div>
//                 <BsGripVertical className="me-2 fs-3" />
//                 <MdOutlineAssignment className="me-2 fs-3 text-success" />
//                 <a
//                   href="#/Kambaz/Courses/1234/Assignments/125"
//                   className="wd-assignment-link text-decoration-none text-dark fw-bold"
//                 >
//                   A3 
//                 </a>
//                 <div className="small text-muted">
//                   Multiple Modules | <strong>Not available</strong> until May 20 at 12:00am | <strong>Due</strong> May 27 at 11:59pm | 100 pts
//                 </div>
//               </div>
//               <LessonControlButtons />
//             </div>
//           </ListGroup.Item>
//         </ListGroup>
//       </ListGroup.Item>
//     </ListGroup>
       

//     </div>
//   );
// }


{/* <div>
      <input
        placeholder="Search for Assignments"
        id="wd-search-assignment"
      />
     
        <button id="wd-add-assignment-group">+ Group</button>
        <button id="wd-add-assignment">+ Assignment</button>
      </div> */}



      {/* <h3 id="wd-assignments-title">
        ASSIGNMENTS 40% of Total{" "}
        <button aria-label="Add Assignment Group">+</button>
      </h3>

      <ul id="wd-assignment-list">
        <li className="wd-assignment-list-item">
          <a
            href="#/Kambaz/Courses/1234/Assignments/123"
            className="wd-assignment-link"
          >
            A1 - ENV + HTML
          </a>
          <div>
                Multiple Modules | <strong>Not available</strong> until May 6 at 12:00am | <strong>Due</strong> May 13 at 11:59pm | 100 pts
            </div>
        </li>
        <li className="wd-assignment-list-item">
            <a
            href="#/Kambaz/Courses/1234/Assignments/123"
            className="wd-assignment-link"
          >
            A2 - CSS + BOOTSTRAP
          </a>
          <div>
                Multiple Modules | <strong>Not available</strong> until May 13 at 12:00am | <strong>Due</strong> May 20 at 11:59pm | 100 pts
            </div>
          
        </li>
         <li className="wd-assignment-list-item">
            <a
            href="#/Kambaz/Courses/1234/Assignments/123"
            className="wd-assignment-link"
          >
            A3 - JAVASCRIPT + REACT
          </a>
          <div>
                Multiple Modules | <strong>Not available</strong> until May 20 at 12:00am | <strong>Due</strong> May 27 at 11:59pm | 100 pts
            </div>
          
        </li>
      </ul> */}

// export default function Assignments() {
//   return (
//     <div id="wd-assignments">
      
//     </div>
// );}

{/* <input placeholder="Search for Assignments"
             id="wd-search-assignment" />
      <button id="wd-add-assignment-group">+ Group</button>
      <button id="wd-add-assignment">+ Assignment</button>
      <h3 id="wd-assignments-title">
        ASSIGNMENTS 40% of Total <button>+</button> </h3>
      <ul id="wd-assignment-list">
        <li className="wd-assignment-list-item">
          <a href="#/Kambaz/Courses/1234/Assignments/123"
             className="wd-assignment-link" >
            A1 - ENV + HTML
          </a> </li>
        <li className="wd-assignment-list-item">
          
        </li>
      </ul> */}