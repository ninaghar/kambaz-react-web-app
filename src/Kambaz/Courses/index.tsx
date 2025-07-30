import Modules from "./Modules";
import CourseNavigation from "./Navigation";
import Home from "./Home";
import Assignments from "./Assignments";
import PeopleTable from "./People/Table";

// import PeopleTable from "./Assignments";
import { courses } from "../Database";
import AssignmentEditor from "./Assignments/Editor";
import { Navigate, Route, Routes, useParams, useLocation } from "react-router";
import { FaAlignJustify } from "react-icons/fa6";
import { useSelector } from "react-redux";
export default function Courses(
  // { courses }: { courses: any[]; }
) {
    const { courseId } = useParams(); 
    // const { cid } = useParams();
      // Get courses from Redux store instead of props
  const { courses } = useSelector((state: any) => state.coursesReducer);
  
  // Find the current course
  const course = courses.find((course: any) => course._id === courseId);
  // const course = courses.find((course) => course._id === courseId);
  const { pathname } = useLocation();
    return (
    <div id="wd-courses">
      <h2 className="text-danger">
      <FaAlignJustify className="me-4 fs-4 mb-1" />
      {course && course.name} &gt; {pathname.split("/")[4]}
</h2>
      <hr />
      {/* <table>
        <tbody>
        <tr>
          <td valign="top"> */}
          <div className="d-flex">
             <div className="d-none d-md-block">
            <CourseNavigation />
            </div>
          {/* </td> */}
          {/* <td valign="top"> */}
           <div className="flex-fill">
            <Routes>
              <Route path="/" element={<Navigate to="Home" />} />
              <Route path="Home" element={<Home />} />
              <Route path="Modules" element={<Modules />} />
              <Route path="Piazza" element={<h2>Piazza </h2>} />
              <Route path="Zoom" element={<h2>Zoom </h2>} />
              <Route path="Assignments" element={<Assignments />} />
              <Route path="Assignments/new/Editor" element={<AssignmentEditor />} />
              <Route path="Assignments/:aid" element={<AssignmentEditor />} />
              <Route path="Quizzes" element={<h2>Quizzes </h2>} />
              <Route path="Grades" element={<h2>Grades </h2>} />
              <Route path="People" element={<PeopleTable />} />
            </Routes>
             </div> </div>
          {/* </td>
        </tr>
        </tbody>
      </table> */}
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
