import 'bootstrap/dist/css/bootstrap.min.css';
import "./styles.css";
import { Routes, Route, Navigate } from "react-router";
import Account from "./Account";
import Dashboard from "./Dashboard";
import KambazNavigation from "./Navigation";
import Courses from "./Courses";
import Session from "./Account/Session";
// import * as client from "./Courses/client";
import * as userClient from "./Account/client";
import * as courseClient from "./Courses/client";
import ProtectedRoute from './Account/ProtectedRoute';
import ProtectedCourseRoute from './Courses/ProtectedCourseRoute';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

export default function Kambaz() {
  const [courses, setCourses] = useState<any[]>([]);
  const [course, setCourse] = useState<any>({});
  const { currentUser } = useSelector((state: any) => state.accountReducer);

  // State for all courses (when showing all courses)
  const [allCourses, setAllCourses] = useState<any[]>([]);

  // Fetch user's enrolled courses from server
  // const fetchCourses = async () => {
  //   try {
  //     const courses = await userClient.findMyCourses();
  //     setCourses(courses);
  //   } catch (error) {
  //     console.error(error);
  //   }
  // };
  const fetchCourses = async () => {
  try {
    // First verify we have a valid session
    await userClient.profile(); // This will throw if not authenticated
    const courses = await userClient.findMyCourses();
    setCourses(courses);
  } catch (error) {
    console.log("User not authenticated, can't fetch courses");
    setCourses([]); // Clear courses if not authenticated
  }
};

  // Fetch all courses from server
  const fetchAllCourses = async () => {
    try {
      const courses = await courseClient.fetchAllCourses();
      setAllCourses(courses);
    } catch (error) {
      console.error(error);
    }
  };

  // Create new course - as specified in assignment
  const addNewCourse = async () => {
    const newCourse = await userClient.createCourse(course);
    setCourses([...courses, newCourse]);
  };

  // Delete course - as specified in assignment  
  const deleteCourse = async (courseId: string) => {
    await courseClient.deleteCourse(courseId);
    setCourses(courses.filter((course) => course._id !== courseId));
  };

  // Update course - as specified in assignment
  const updateCourse = async () => {
    await courseClient.updateCourse(course);
    setCourses(courses.map((c) => {
      if (c._id === course._id) { 
        return course; 
      } else { 
        return c; 
      }
    }));
  };

  // useEffect(() => {
  //   if (currentUser) {
  //     fetchCourses();
  //   }
  // }, [currentUser]);
  useEffect(() => {
  if (currentUser) {
    console.log("Current user exists, fetching courses...");
    fetchCourses();
  } else {
    console.log("No current user, clearing courses");
    setCourses([]);
  }
}, [currentUser]);

  return (
    <Session>
      <div id="wd-kambaz">
        <KambazNavigation />
        <div className='wd-main-content-offset p-3'>
          <Routes>
            <Route path="/" element={<Navigate to="Account" />} />
            <Route path="/Account/*" element={<Account />} />
            <Route path="/Dashboard" element={
              <ProtectedRoute>
                <Dashboard 
                  courses={courses}
                  allCourses={allCourses}
                  course={course}
                  setCourse={setCourse}
                  addNewCourse={addNewCourse}
                  deleteCourse={deleteCourse}
                  updateCourse={updateCourse}
                  fetchAllCourses={fetchAllCourses}
                  fetchCourses={fetchCourses}
                />
              </ProtectedRoute>
            } />
            <Route path="/Courses/:courseId/*" element={
              <ProtectedCourseRoute>
                <Courses />
              </ProtectedCourseRoute>
            } />
            <Route path="/Calendar" element={<h1>Calendar</h1>} />
            <Route path="/Inbox" element={<h1>Inbox</h1>} />
          </Routes>
        </div>
      </div>
    </Session>
  );
}





// import 'bootstrap/dist/css/bootstrap.min.css';
// import "./styles.css";
// import { Routes, Route, Navigate } from "react-router";
// import Account from "./Account";
// import Dashboard from "./Dashboard";
// import KambazNavigation from "./Navigation";
// import Courses from "./Courses";
// import Session from "./Account/Session";
// import * as client from "./Courses/client";
// import * as userClient from "./Account/client";
// import * as courseClient from "./Courses/client";
// import ProtectedRoute from './Account/ProtectedRoute';
// import ProtectedCourseRoute from './Courses/ProtectedCourseRoute';
// import { useEffect, useState } from 'react';
// import { useSelector } from 'react-redux';

// export default function Kambaz() {
//   const [courses, setCourses] = useState<any[]>([]);
//   const [course, setCourse] = useState<any>({});
//   const { currentUser } = useSelector((state: any) => state.accountReducer);

//   // Fetch user's enrolled courses from server
//   const fetchCourses = async () => {
//     try {
//       const courses = await userClient.findMyCourses();
//       setCourses(courses);
//     } catch (error) {
//       console.error(error);
//     }
//   };

//   // Create new course - as specified in assignment
//   const addNewCourse = async () => {
//     const newCourse = await userClient.createCourse(course);
//     setCourses([...courses, newCourse]);
//   };

//   // Delete course - as specified in assignment  
//   const deleteCourse = async (courseId: string) => {
//     const status = await courseClient.deleteCourse(courseId);
//     setCourses(courses.filter((course) => course._id !== courseId));
//   };

  
//   // Update course - as specified in assignment
//   const updateCourse = async () => {
//     await courseClient.updateCourse(course);
//     setCourses(courses.map((c) => {
//       if (c._id === course._id) { 
//         return course; 
//       } else { 
//         return c; 
//       }
//     }));
//   };

//   useEffect(() => {
//     fetchCourses();
//   }, [currentUser]);

//   return (
//     <Session>
//       <div id="wd-kambaz">
//         <KambazNavigation />
//         <div className='wd-main-content-offset p-3'>
//           <Routes>
//             <Route path="/" element={<Navigate to="Account" />} />
//             <Route path="/Account/*" element={<Account />} />
//             <Route path="/Dashboard" element={
//               <ProtectedRoute>
//                 <Dashboard 
//                   courses={courses}
//                   course={course}
//                   setCourse={setCourse}
//                   addNewCourse={addNewCourse}
//                   deleteCourse={deleteCourse}
//                   updateCourse={updateCourse}
//                 />
//               </ProtectedRoute>
//             } />
//             <Route path="/Courses/:courseId/*" element={
//               <ProtectedCourseRoute>
//                 <Courses />
//               </ProtectedCourseRoute>
//             } />
//             <Route path="/Calendar" element={<h1>Calendar</h1>} />
//             <Route path="/Inbox" element={<h1>Inbox</h1>} />
//           </Routes>
//         </div>
//       </div>
//     </Session>
//   );
// }

// import 'bootstrap/dist/css/bootstrap.min.css';
// import "./styles.css";
// import { Routes, Route, Navigate } from "react-router";
// import Account from "./Account";
// import Dashboard from "./Dashboard";
// import KambazNavigation from "./Navigation";
// import Courses from "./Courses";
// import Session from "./Account/Session";
// import * as client from "./Courses/client";
// import * as userClient from "./Account/client";
// import * as courseClient from "./Courses/client";
// import ProtectedRoute from './Account/ProtectedRoute';
// import ProtectedCourseRoute from './Courses/ProtectedCourseRoute';
// import { useEffect, useState } from 'react';
// import { useSelector } from 'react-redux';

// export default function Kambaz() {
//   const [courses, setCourses] = useState<any[]>([]);
//   const { currentUser } = useSelector((state: any) => state.accountReducer);

//   // Fetch user's enrolled courses
//   const fetchCourses = async () => {
//     try {
//       const courses = await userClient.findMyCourses();
//       setCourses(courses);
//     } catch (error) {
//       console.error(error);
//     }
//   };

//   // Create a new course and enroll current user
//   const addNewCourse = async (courseData: any) => {
//     try {
//       const newCourse = await userClient.createCourse(courseData);
//       setCourses([...courses, newCourse]);
//       return newCourse;
//     } catch (error) {
//       console.error("Error creating course:", error);
//       throw error;
//     }
//   };

//   // Delete a course and remove from state
//   const deleteCourse = async (courseId: string) => {
//     try {
//       const status = await courseClient.deleteCourse(courseId);
//       setCourses(courses.filter((course) => course._id !== courseId));
//       return status;
//     } catch (error) {
//       console.error("Error deleting course:", error);
//       throw error;
//     }
//   };

//   useEffect(() => {
//     fetchCourses();
//   }, [currentUser]);

//   return (
//     <Session>
//       <div id="wd-kambaz">
//         <KambazNavigation />
//         <div className='wd-main-content-offset p-3'>
//           <Routes>
//             <Route path="/" element={<Navigate to="Account" />} />
//             <Route path="/Account/*" element={<Account />} />
//             <Route path="/Dashboard" element={
//               <ProtectedRoute>
//                 <Dashboard 
//                   courses={courses}
//                   addNewCourse={addNewCourse}
//                   deleteCourse={deleteCourse}
//                   fetchCourses={fetchCourses}
//                 />
//               </ProtectedRoute>
//             } />
//             <Route path="/Courses/:courseId/*" element={
//               <ProtectedCourseRoute>
//                 <Courses />
//               </ProtectedCourseRoute>
//             } />
//             <Route path="/Calendar" element={<h1>Calendar</h1>} />
//             <Route path="/Inbox" element={<h1>Inbox</h1>} />
//           </Routes>
//         </div>
//       </div>
//     </Session>
//   );
// }




// import 'bootstrap/dist/css/bootstrap.min.css';
// import "./styles.css";
// // import { Navigate, Route, Routes } from 'react-router-dom';
// // import { FaAlignJustify } from 'react-icons/fa';
// import { Routes, Route, Navigate } from "react-router";
// import Account from "./Account";
// import Dashboard from "./Dashboard";
// import KambazNavigation from "./Navigation";
// import Courses from "./Courses";
// import Session from "./Account/Session";
// import * as client from "./Courses/client";
// import * as userClient from "./Account/client";
// import * as courseClient from "./Courses/client";
// // import * as db from "./Database";
// // import { useState } from "react";
// // import { v4 as uuidv4 } from "uuid";
// import ProtectedRoute from './Account/ProtectedRoute';
// // import { useSelector } from 'react-redux';
// import ProtectedCourseRoute from './Courses/ProtectedCourseRoute';
// import { useEffect, useState } from 'react';
// import { useSelector } from 'react-redux';

// export default function Kambaz() {


  
// const [courses, setCourses] = useState<any[]>([]);
//   const { currentUser } = useSelector((state: any) => state.accountReducer);
//   const fetchCourses = async () => {
//     try {
//       const courses = await userClient.findMyCourses();
//       setCourses(courses);
//     } catch (error) {
//       console.error(error);
//     }
//   };
//   useEffect(() => {
//     fetchCourses();
//   }, [currentUser]);

//   const deleteCourse = async (courseId: string) => {
//     const status = await courseClient.deleteCourse(courseId);
//     setCourses(courses.filter((course) => course._id !== courseId));
// };}


//   return (
//     <Session>
//     <div id="wd-kambaz">
//       {/* <h1>Kambaz</h1> */}
//       {/* <table> */}
//         {/* <tbody>
//         <tr>
//           <td valign="top"> */}
           
//             <KambazNavigation />
//             <div className='wd-main-content-offset p-3'>
//           {/* </td>
//           <td valign="top"> */}
          
//       <Routes>
//         <Route path="/" element={<Navigate to="Account" />} />
//         <Route path="/Account/*" element={<Account />} />
//         <Route path="/Dashboard" element={
//           <ProtectedRoute>
//             <Dashboard   />
//           </ProtectedRoute>} />
//         <Route path="/Courses/:courseId/*" element={<ProtectedCourseRoute>
//           <Courses />
//           </ProtectedCourseRoute>} />
//         <Route path="/Calendar" element={<h1>Calendar</h1>} />
//         <Route path="/Inbox" element={<h1>Inbox</h1>} />
//       </Routes>
//       </div>
//       {/* </td>
//         </tr>
//         </tbody> 
//       </table> */}
//     </div>
//     </Session>
// );}


// import { Routes, Route, Navigate } from "react-router";
// import Account from "./Account";
// import Dashboard from "./Dashboard";
// import KambazNavigation from "./Navigation";

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
