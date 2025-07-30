import 'bootstrap/dist/css/bootstrap.min.css';
import "./styles.css";
// import { Navigate, Route, Routes } from 'react-router-dom';
// import { FaAlignJustify } from 'react-icons/fa';
import { Routes, Route, Navigate } from "react-router";
import Account from "./Account";
import Dashboard from "./Dashboard";
import KambazNavigation from "./Navigation";
import Courses from "./Courses";

// import * as db from "./Database";
// import { useState } from "react";
// import { v4 as uuidv4 } from "uuid";
import ProtectedRoute from './Account/ProtectedRoute';
// import { useSelector } from 'react-redux';
import ProtectedCourseRoute from './Courses/ProtectedCourseRoute';

export default function Kambaz() {

 // Use Redux courses, but also maintain local state for course and handlers
//  const { courses } = useSelector((state: any) => state.coursesReducer);
//  const [course, setCourse] = useState<any>({
//    _id: "1234", name: "New Course", number: "New Number",
//    startDate: "2023-09-10", endDate: "2023-12-15", description: "New Description",
//  });

//  // These handlers are placeholders; adapt as needed for your Redux setup
//  const addNewCourse = () => {
//    // Implement your add logic here, e.g., dispatch an action
//    // For now, just log
//    console.log("Add new course", course);
//  };

//  const deleteCourse = (courseId: any) => {
//    // Implement your delete logic here, e.g., dispatch an action
//    console.log("Delete course", courseId);
//  };

//  const updateCourse = () => {
//    // Implement your update logic here, e.g., dispatch an action
//    console.log("Update course", course);
//  };
  


  return (
    <div id="wd-kambaz">
      {/* <h1>Kambaz</h1> */}
      {/* <table> */}
        {/* <tbody>
        <tr>
          <td valign="top"> */}
           
            <KambazNavigation />
            <div className='wd-main-content-offset p-3'>
          {/* </td>
          <td valign="top"> */}
          
      <Routes>
        <Route path="/" element={<Navigate to="Account" />} />
        <Route path="/Account/*" element={<Account />} />
        <Route path="/Dashboard" element={
          <ProtectedRoute>
            <Dashboard   />
          </ProtectedRoute>} />
        <Route path="/Courses/:courseId/*" element={<ProtectedCourseRoute>
          <Courses />
          </ProtectedCourseRoute>} />
        <Route path="/Calendar" element={<h1>Calendar</h1>} />
        <Route path="/Inbox" element={<h1>Inbox</h1>} />
      </Routes>
      </div>
      {/* </td>
        </tr>
        </tbody> 
      </table> */}
    </div>
);}


// import { Routes, Route, Navigate } from "react-router";
// import Account from "./Account";
// import Dashboard from "./Dashboard";
// import KambazNavigation from "./Navigation";

// export default function Kambaz() {
//   return (
//     <div id="wd-kambaz">
//       {/* <h1>Kambaz</h1> */}
//       <table>
//         <tr>
//           <td valign="top">
//             <KambazNavigation />
//           </td>
//           <td valign="top">
//             <Routes>
//                 <Route path="/" element={<Navigate to="Account" />} />
//                 <Route path="/Account/*" element={<Account />} />
//                 <Route path="/Dashboard" element={<Dashboard />} />
//             </Routes>
//             </td>
//         </tr>
//       </table>
//     </div>
// );}
