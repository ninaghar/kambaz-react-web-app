import { useSelector } from "react-redux";
import { Navigate, useParams } from "react-router-dom";

export default function ProtectedCourseRoute({ children }: { children: any }) {
  const { cid } = useParams();
  const { currentUser } = useSelector((state: any) => state.accountReducer);
  const { enrollments } = useSelector((state: any) => state.enrollmentsReducer);

  // Check if user is signed in
  if (!currentUser) {
    return <Navigate to="/Kambaz/Account/Signin" />;
  }

  // Check if user is faculty (faculty can access any course)
  if (currentUser.role === "FACULTY") {
    return children;
  }

  // Check if user is enrolled in this course
  const isEnrolled = enrollments.some(
    (enrollment: any) =>
      enrollment.user === currentUser._id && enrollment.course === cid
  );

  if (isEnrolled) {
    return children;
  } else {
    // Redirect to dashboard if not enrolled
    return <Navigate to="/Kambaz/Dashboard" />;
  }
}