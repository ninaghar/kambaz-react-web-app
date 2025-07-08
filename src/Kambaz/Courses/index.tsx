import Modules from "./Modules";
import CourseNavigation from "./Navigation";
import Home from "./Home";
import Assignments from "./Assignments";
import AssignmentEditor from "./Assignments/Editor";
import { Navigate, Route, Routes, useParams } from "react-router";
export default function Courses() {
    const { courseId } = useParams(); 
    return (
    <div id="wd-courses">
      <h2>Course {courseId}</h2>
      <hr />
      <table>
        <tbody>
        <tr>
          <td valign="top">
            <CourseNavigation />
          </td>
          <td valign="top">
            <Routes>
              <Route path="/" element={<Navigate to="Home" />} />
              <Route path="Home" element={<Home />} />
              <Route path="Modules" element={<Modules />} />
              <Route path="Assignments" element={<Assignments />} />
              <Route path="Assignments/:aid" element={<AssignmentEditor />} />
              <Route path="People" element={<h2>People</h2>} />
            </Routes>
          </td>
        </tr>
        </tbody>
      </table>
    </div>
  );
}

// export default function Courses() {
//   return (
//     <div id="wd-courses">
//       <h2>Course 1234</h2>
//     </div>
// );}

// import CourseNavigation from "./Navigation";
// import Modules from "./Modules";
// import { Navigate, Route, Routes } from "react-router";
// export default function Courses() {
//   return (
//     <div id="wd-courses">
//       <h2>Course 1234</h2>
//        <hr />
//       <table>
//         <tr>
//           <td valign="top">
//             <CourseNavigation />
//           </td>
//           <td valign="top">
//             <Routes>
//               <Route path="/" element={<Navigate to="Home" />} />
//               <Route path="Home" element={<h2>Home</h2>} />
//               <Route path="Modules" element={<Modules />} />
//               <Route path="Assignments" element={<h2>Assignments</h2>} />
//               <Route path="Assignments/:aid" element={<h2>Assignment Editor</h2>} />
//               <Route path="People" element={<h2>People</h2>} />
//             </Routes>
//           </td>
//         </tr>
//       </table>

//     </div>
// );}
