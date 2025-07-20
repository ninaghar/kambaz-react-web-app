import { Link, useLocation, useParams } from "react-router-dom";

export default function CourseNavigation() {
  const { pathname } = useLocation();
  const { courseId } = useParams(); // assumes route path is /Kambaz/Courses/:cid/:screen

  const links = [
    "Home",
    "Modules",
    "Piazza",
    "Zoom",
    "Assignments",
    "Quizzes",
    "Grades",
    "People",
  ];

  const getClass = (link: string) =>
    `list-group-item border-0 ${
      pathname.includes(link) ? "active" : "text-danger"
    }`;

  return (
    <div id="wd-courses-navigation" className="list-group wd fs-5 rounded-0">
      {links.map((link) => (
        <Link
          key={link}
          to={`/Kambaz/Courses/${courseId}/${link}`}
          className={getClass(link)}
          id={`wd-course-${link.toLowerCase()}-link`}
        >
          {link}
        </Link>
      ))}
    </div>
  );
}



// import { Link, useLocation } from "react-router-dom";

// export default function CourseNavigation() {
//   const { pathname } = useLocation();

//   const getClass = (path: string) =>
//     `list-group-item border-0 ${
//       pathname.includes(path) ? "active" : "text-danger"
//     }`;

//   return (
//     <div id="wd-courses-navigation" className="list-group wd fs-5 rounded-0">
//       <Link
//         to="/Kambaz/Courses/1234/Home"
//         id="wd-course-home-link"
//         className={getClass("/Home")}
//       >
//         Home
//       </Link>
//       <Link
//         to="/Kambaz/Courses/1234/Modules"
//         id="wd-course-modules-link"
//         className={getClass("/Modules")}
//       >
//         Modules
//       </Link>
//       <Link
//         to="/Kambaz/Courses/1234/Piazza"
//         id="wd-course-piazza-link"
//         className={getClass("/Piazza")}
//       >
//         Piazza
//       </Link>
//       <Link
//         to="/Kambaz/Courses/1234/Zoom"
//         id="wd-course-zoom-link"
//         className={getClass("/Zoom")}
//       >
//         Zoom
//       </Link>
//       <Link
//         to="/Kambaz/Courses/1234/Assignments"
//         id="wd-course-assignments-link"
//         className={getClass("/Assignments")}
//       >
//         Assignments
//       </Link>
//       <Link
//         to="/Kambaz/Courses/1234/Quizzes"
//         id="wd-course-quizzes-link"
//         className={getClass("/Quizzes")}
//       >
//         Quizzes
//       </Link>
//       <Link
//         to="/Kambaz/Courses/1234/People"
//         id="wd-course-people-link"
//         className={getClass("/People")}
//       >
//         People
//       </Link>
//     </div>
//   );
// }

// import { Link, useLocation } from "react-router-dom";
// export default function CourseNavigation() {
//   const { pathname } = useLocation();

//   const isActive = (path: string) => pathname.includes(path) ? "active" : "";

//   return (
//     <div id="wd-courses-navigation" className="list-group wd fs-5 rounded-0">
//       <Link to="/Kambaz/Courses/1234/Home"
//         id="wd-course-home-link"
//         className={`list-group-item border-0 ${isActive("/Home")}`}>
//         Home
//       </Link>
//       <Link to="/Kambaz/Courses/1234/Modules"
//         id="wd-course-modules-link"
//         className={`list-group-item text-danger border-0 ${isActive("/Modules")}`}>
//         Modules
//       </Link>
//       <Link to="/Kambaz/Courses/1234/Piazza"
//         id="wd-course-piazza-link"
//         className={`list-group-item text-danger border-0 ${isActive("/Piazza")}`}>
//         Piazza
//       </Link>
//       <Link to="/Kambaz/Courses/1234/Zoom"
//         id="wd-course-zoom-link"
//         className={`list-group-item text-danger border-0 ${isActive("/Zoom")}`}>
//         Zoom
//       </Link>
//       <Link to="/Kambaz/Courses/1234/Assignments"
//         id="wd-course-assignments-link"
//         className={`list-group-item text-danger border-0 ${isActive("/Assignments")}`}>
//         Assignments
//       </Link>
//       <Link to="/Kambaz/Courses/1234/Quizzes"
//         id="wd-course-quizzes-link"
//         className={`list-group-item text-danger border-0 ${isActive("/Quizzes")}`}>
//         Quizzes
//       </Link>
//       <Link to="/Kambaz/Courses/1234/People"
//         id="wd-course-people-link"
//         className={`list-group-item text-danger border-0 ${isActive("/People")}`}>
//         People
//       </Link>
//     </div>
//   );
// }

// import { Link } from "react-router-dom";
// import "../styles.css";
// export default function CourseNavigation() {
//   return (
//     <div id="wd-courses-navigation" className="wd list-group fs-5 rounded-0">
//       <Link to="/Kambaz/Courses/1234/Home" id="wd-course-home-link" className="list-group-item active border border-0"> Home </Link>
//       <Link to="/Kambaz/Courses/1234/Modules" id="wd-course-modules-link" className="list-group-item text-danger border border-0"> Modules </Link>
//       <Link to="/Kambaz/Courses/1234/Piazza" id="wd-course-piazza-link" className="list-group-item text-danger border border-0"> Piazza </Link>
//       <Link to="/Kambaz/Courses/1234/Zoom" id="wd-course-zoom-link" className="list-group-item text-danger border border-0"> Zoom </Link>
//       <Link to="/Kambaz/Courses/1234/Assignments" id="wd-course-quizzes-link" className="list-group-item text-danger border border-0"> Assignments </Link>
//       <Link to="/Kambaz/Courses/1234/Quizzes" id="wd-course-assignments-link" className="list-group-item text-danger border border-0"> Quizzes </Link>
//       <Link to="/Kambaz/Courses/1234/Grades" id="wd-course-grades-link" className="list-group-item text-danger border border-0"> Grades </Link>
//       <Link to="/Kambaz/Courses/1234/People" id="wd-course-people-link" className="list-group-item text-danger border border-0"> People </Link>
//     </div>
//   );}
