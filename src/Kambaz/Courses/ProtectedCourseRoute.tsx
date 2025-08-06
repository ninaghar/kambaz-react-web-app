import { useSelector, useDispatch } from "react-redux";
import { Navigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { setEnrollments } from "../Enrollments/reducer";
import * as enrollmentClient from "../Enrollments/client";

export default function ProtectedCourseRoute({ children }: { children: any }) {
  const { courseId } = useParams();
  const dispatch = useDispatch();
  const { currentUser } = useSelector((state: any) => state.accountReducer);
  const { enrollments } = useSelector((state: any) => state.enrollmentsReducer);
  const [loading, setLoading] = useState(true);

  // Fetch enrollments if not already loaded
  useEffect(() => {
    const fetchEnrollments = async () => {
      if (currentUser && enrollments.length === 0) {
        try {
          console.log("🔍 Fetching enrollments for user:", currentUser._id);
          const userEnrollments = await enrollmentClient.findMyEnrollments();
          console.log("📝 Received enrollments:", userEnrollments);
          dispatch(setEnrollments(userEnrollments));
        } catch (error) {
          console.error("Error fetching enrollments:", error);
        }
      }
      setLoading(false);
    };

    if (currentUser) {
      fetchEnrollments();
    } else {
      setLoading(false);
    }
  }, [currentUser, dispatch, enrollments.length]);

  // DEBUG LOGGING
  console.log("=== PROTECTED ROUTE DEBUG ===");
  console.log(" Course ID from URL:", courseId);
  console.log(" Current User:", currentUser);
  console.log(" All Enrollments:", enrollments);
  console.log(" Loading state:", loading);
  
  if (currentUser) {
    console.log(" User ID:", currentUser._id);
    console.log(" User Role:", currentUser.role);
    
    // Check each enrollment
    enrollments.forEach((enrollment: { _id: any; user: any; course: string | undefined; }, index: any) => {
      console.log(`Enrollment ${index}:`, {
        enrollmentId: enrollment._id,
        userId: enrollment.user,
        courseId: enrollment.course,
        matchesCurrentUser: enrollment.user === currentUser._id,
        matchesCurrentCourse: enrollment.course === courseId,
        bothMatch: enrollment.user === currentUser._id && enrollment.course === courseId
      });
    });
  }
  console.log("=============================");

  // Check if user is signed in
  if (!currentUser) {
    console.log(" No current user, redirecting to signin");
    return <Navigate to="/Kambaz/Account/Signin" />;
  }

  // Show loading while fetching enrollments
  if (loading) {
    console.log(" Still loading enrollments...");
    return <div>Loading...</div>;
  }

  // Check if user is faculty (faculty can access any course)
  if (currentUser.role === "FACULTY") {
    console.log("user is faculty, allowing access");
    return children;
  }

  // Check if user is enrolled in this course
  const isEnrolled = enrollments.some(
    (enrollment: any) => {
      const userMatch = enrollment.user === currentUser._id;
      const courseMatch = enrollment.course === courseId;
      console.log(` Checking enrollment:`, {
        enrollmentUserId: enrollment.user,
        currentUserId: currentUser._id,
        userMatch,
        enrollmentCourseId: enrollment.course,
        currentCourseId: courseId,
        courseMatch,
        overallMatch: userMatch && courseMatch
      });
      return userMatch && courseMatch;
    }
  );

  console.log("🎯 Final enrollment check result:", isEnrolled);

  if (isEnrolled) {
    console.log(" User is enrolled, allowing access");
    return children;
  } else {
    console.log(" User is NOT enrolled, redirecting to dashboard");
    return <Navigate to="/Kambaz/Dashboard" />;
  }
}







// import { useSelector, useDispatch } from "react-redux";
// import { Navigate, useParams } from "react-router-dom";
// import { useEffect, useState } from "react";
// import { setEnrollments } from "../Enrollments/reducer";
// import * as enrollmentClient from "../Enrollments/client";

// export default function ProtectedCourseRoute({ children }: { children: any }) {
//   const { cid } = useParams();
//   const dispatch = useDispatch();
//   const { currentUser } = useSelector((state: any) => state.accountReducer);
//   const { enrollments } = useSelector((state: any) => state.enrollmentsReducer);
//   const [loading, setLoading] = useState(true);

//   // Fetch enrollments if not already loaded
//   useEffect(() => {
//     const fetchEnrollments = async () => {
//       if (currentUser && enrollments.length === 0) {
//         try {
//           const userEnrollments = await enrollmentClient.findMyEnrollments();
//           dispatch(setEnrollments(userEnrollments));
//         } catch (error) {
//           console.error("Error fetching enrollments:", error);
//         }
//       }
//       setLoading(false);
//     };

//     if (currentUser) {
//       fetchEnrollments();
//     } else {
//       setLoading(false);
//     }
//   }, [currentUser, dispatch, enrollments.length]);

//   // Check if user is signed in
//   if (!currentUser) {
//     return <Navigate to="/Kambaz/Account/Signin" />;
//   }

//   // Show loading while fetching enrollments
//   if (loading) {
//     return <div>Loading...</div>;
//   }

//   // Check if user is faculty (faculty can access any course)
//   if (currentUser.role === "FACULTY") {
//     return children;
//   }

//   // Check if user is enrolled in this course
//   const isEnrolled = enrollments.some(
//     (enrollment: any) =>
//       enrollment.user === currentUser._id && enrollment.course === cid
//   );

//   if (isEnrolled) {
//     return children;
//   } else {
//     // Redirect to dashboard if not enrolled
//     return <Navigate to="/Kambaz/Dashboard" />;
//   }
// }



// import { useSelector } from "react-redux";
// import { Navigate, useParams } from "react-router-dom";

// export default function ProtectedCourseRoute({ children }: { children: any }) {
//   const { cid } = useParams();
//   const { currentUser } = useSelector((state: any) => state.accountReducer);
//   const { enrollments } = useSelector((state: any) => state.enrollmentsReducer);

//   // Check if user is signed in
//   if (!currentUser) {
//     return <Navigate to="/Kambaz/Account/Signin" />;
//   }

//   // Check if user is faculty (faculty can access any course)
//   if (currentUser.role === "FACULTY") {
//     return children;
//   }

//   // Check if user is enrolled in this course
//   const isEnrolled = enrollments.some(
//     (enrollment: any) =>
//       enrollment.user === currentUser._id && enrollment.course === cid
//   );

//   if (isEnrolled) {
//     return children;
//   } else {
//     // Redirect to dashboard if not enrolled
//     return <Navigate to="/Kambaz/Dashboard" />;
//   }
// }