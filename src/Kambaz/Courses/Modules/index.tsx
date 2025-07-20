import { useParams } from "react-router";
import * as db from "../../Database";

import { ListGroup } from "react-bootstrap";
import ModulesControls from "./ModulesControls";
import ModuleControlButtons from "./ModuleControlButtons";
import LessonControlButtons from "./LessonControlButtons";
import "../../styles.css";
import { BsGripVertical } from "react-icons/bs";

export default function Modules() {
  const { courseId } = useParams();
  const modules = db.modules;

  return (
    <div>
      <ModulesControls />
      <br />
      <br />
      <br />
      <br />
      <ListGroup id="wd-modules" className="rounded-0">
        {modules
          .filter((module: any) => module.course === courseId)
          .map((module: any, moduleIndex: number) => (
            <ListGroup.Item
              key={module._id || moduleIndex}
              className="wd-module p-0 mb-5 fs-5 border-gray"
            >
              <div className="wd-title p-3 ps-2 bg-secondary">
                <BsGripVertical className="me-2 fs-3" /> {module.name}{" "}
                <ModuleControlButtons />
              </div>
              {module.lessons && (
                <ListGroup className="wd-lessons rounded-0">
                  {module.lessons.map((lesson: any, lessonIndex: number) => (
                    <ListGroup.Item
                      key={lesson._id || `${moduleIndex}-${lessonIndex}`}
                      className="wd-lesson p-3 ps-1"
                    >
                      <BsGripVertical className="me-2 fs-3" /> {lesson.name}{" "}
                      <LessonControlButtons />
                    </ListGroup.Item>
                  ))}
                </ListGroup>
              )}
            </ListGroup.Item>
          ))}
      </ListGroup>
    </div>
  );
}

// import { useParams } from "react-router";
// import * as db from "../../Database";

// import { ListGroup } from "react-bootstrap";
// import ModulesControls from "./ModulesControls";
// import ModuleControlButtons from "./ModuleControlButtons";
// import LessonControlButtons from "./LessonControlButtons"
// import "../../styles.css";
// import { BsGripVertical } from "react-icons/bs";


// export default function Modules() {
//   const { cid } = useParams();
//   const modules = db.modules;
//   return (
//     <div>
//   <ModulesControls /><br /><br /><br /><br />
//       <ListGroup id="wd-modules" className="rounded-0">
//         {modules
//           .filter((module: any) => module.course === cid)
//           .map((module: any) => (
//           <ListGroup.Item className="wd-module p-0 mb-5 fs-5 border-gray">
//             <div className="wd-title p-3 ps-2 bg-secondary">
//               <BsGripVertical className="me-2 fs-3" /> {module.name} <ModuleControlButtons />
//             </div>
//             {module.lessons && (
//               <ListGroup className="wd-lessons rounded-0">
//                 {module.lessons.map((lesson: any) => (
//                   <ListGroup.Item className="wd-lesson p-3 ps-1">
//                     <BsGripVertical className="me-2 fs-3" /> {lesson.name} <LessonControlButtons />
//                   </ListGroup.Item>
//                 ))}</ListGroup>)}</ListGroup.Item>))}</ListGroup>

//   <ListGroup className="rounded-0" id="wd-modules">
//     <ListGroup.Item className="wd-module p-0 mb-5 fs-5 border-gray">
//       <div className="wd-title p-3 ps-2 bg-secondary">
//          <BsGripVertical className="me-2 fs-3" /> Week 1 <ModuleControlButtons />
//           </div>
//       <ListGroup className="wd-lessons rounded-0">
//         <ListGroup.Item className="wd-lesson p-3 ps-1">
//             <BsGripVertical className="me-2 fs-3" /> LEARNING OBJECTIVES <LessonControlButtons />
//            </ListGroup.Item>
//         <ListGroup.Item className="wd-lesson p-3 ps-1">
//           <BsGripVertical className="me-2 fs-3" /> Introduction to the course <LessonControlButtons />
//            </ListGroup.Item>
//         <ListGroup.Item className="wd-lesson p-3 ps-1">
//           <BsGripVertical className="me-2 fs-3" /> Learn what is Web Development <LessonControlButtons />
//            </ListGroup.Item>
//           <ListGroup.Item className="wd-lesson p-3 ps-1">
//           <BsGripVertical className="me-2 fs-3" /> LESSON 1 <LessonControlButtons />
//            </ListGroup.Item>
//            <ListGroup.Item className="wd-lesson p-3 ps-1">
//           <BsGripVertical className="me-2 fs-3" /> LESSON 2 <LessonControlButtons />
//            </ListGroup.Item>
//       </ListGroup>

//     </ListGroup.Item>
//     <ListGroup.Item className="wd-module p-0 mb-5 fs-5 border-gray">
//       <div className="wd-title p-3 ps-2 bg-secondary"> 
//         <BsGripVertical className="me-2 fs-3" /> Week 2 <ModuleControlButtons />
//       </div>
//       <ListGroup className="wd-lessons rounded-0">
//         <ListGroup.Item className="wd-lesson p-3 ps-1">
//           <BsGripVertical className="me-2 fs-3" /> LEARNING OBJECTIVES <LessonControlButtons />
//            </ListGroup.Item>
//         <ListGroup.Item className="wd-lesson p-3 ps-1">
//           <BsGripVertical className="me-2 fs-3" /> LESSON 1 <LessonControlButtons />
//           </ListGroup.Item>
//         <ListGroup.Item className="wd-lesson p-3 ps-1">
        
//           <BsGripVertical className="me-2 fs-3" /> LESSON 2 <LessonControlButtons />
//           </ListGroup.Item>
//       </ListGroup>
//     </ListGroup.Item>
//   </ListGroup>
// </div>

// );}


// import { useParams } from "react-router";
// import * as db from "../../Database";

// import { ListGroup } from "react-bootstrap";
// import ModulesControls from "./ModulesControls";
// import ModuleControlButtons from "./ModuleControlButtons";
// import LessonControlButtons from "./LessonControlButtons";
// import "../../styles.css";
// import { BsGripVertical } from "react-icons/bs";

// export default function Modules() {
//   const { cid } = useParams();
//   const modules = db.modules;

//   return (
//     <div>
//       <ModulesControls />
//       <br />
//       <br />
//       <br />
//       <br />
//       <ListGroup id="wd-modules" className="rounded-0">
//         {modules
//           .filter((module: any) => module.course === cid)
//           .map((module: any, moduleIndex: number) => (
//             <ListGroup.Item
//               key={module._id || moduleIndex}
//               className="wd-module p-0 mb-5 fs-5 border-gray"
//             >
//               <div className="wd-title p-3 ps-2 bg-secondary">
//                 <BsGripVertical className="me-2 fs-3" /> {module.name}
//                 <ModuleControlButtons />
//               </div>
//               {module.lessons && (
//                 <ListGroup className="wd-lessons rounded-0">
//                   {module.lessons.map((lesson: any, lessonIndex: number) => (
//                     <ListGroup.Item
//                       key={lesson._id || `${moduleIndex}-${lessonIndex}`}
//                       className="wd-lesson p-3 ps-1"
//                     >
//                       <BsGripVertical className="me-2 fs-3" /> {lesson.name}
//                       <LessonControlButtons />
//                     </ListGroup.Item>
//                   ))}
//                 </ListGroup>
//               )}
//             </ListGroup.Item>
//           ))}
//       </ListGroup>
//     </div>
//   );
// }
