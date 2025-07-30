import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { Link } from "react-router-dom";
import { addCourse, deleteCourse, updateCourse, editCourse } from "../Courses/reducer";
import { useDispatch, useSelector } from "react-redux";
import { enrollUser, unenrollUser } from "../Enrollments/reducer";

import { Button, Card, Col, FormControl, Row } from "react-bootstrap";
import type { ReactElement, JSXElementConstructor, ReactNode, ReactPortal } from "react";

export default function Dashboard() {
  const dispatch = useDispatch();
  const { courses } = useSelector((state: any) => state.coursesReducer);
  const { currentUser } = useSelector((state: any) => state.accountReducer);
  const { enrollments } = useSelector((state: any) => state.enrollmentsReducer);

  const [course, setCourse] = useState<any>({
    _id: "0", 
    name: "New Course", 
    number: "New Number",
    startDate: "2023-09-10", 
    endDate: "2023-12-15",
    image: "/images/reactjs.jpg", 
    description: "New Description"
  });

  // State to toggle between enrolled courses and all courses
  const [showAllCourses, setShowAllCourses] = useState(false);

  // Helper function to check if user is enrolled
  const isEnrolled = (courseId: string) => {
    if (!currentUser) return false;
    return enrollments.some(
      (enrollment: any) =>
        enrollment.user === currentUser._id && enrollment.course === courseId
    );
  };

  // Event handlers using Redux actions
  const addNewCourse = () => {
    dispatch(addCourse(course));
    // Reset the form
    setCourse({
      _id: "0", 
      name: "New Course", 
      number: "New Number",
      startDate: "2023-09-10", 
      endDate: "2023-12-15",
      image: "/images/reactjs.jpg", 
      description: "New Description"
    });
  };

  const deleteCourseHandler = (courseId: string) => {
    dispatch(deleteCourse(courseId));
  };

  const updateCourseHandler = () => {
    dispatch(updateCourse(course));
  };

  const editCourseHandler = (courseToEdit: any) => {
    setCourse(courseToEdit);
  };

  // Enrollment handlers
  const handleEnroll = (courseId: string) => {
    if (currentUser) {
      dispatch(enrollUser({ userId: currentUser._id, courseId }));
    }
  };

  const handleUnenroll = (courseId: string) => {
    if (currentUser) {
      dispatch(unenrollUser({ userId: currentUser._id, courseId }));
    }
  };

  // Filter courses based on showAllCourses toggle
  const displayedCourses = showAllCourses 
    ? courses 
    : courses.filter((courseItem: any) => isEnrolled(courseItem._id));

  // Check if current user is faculty
  const isFaculty = currentUser && currentUser.role === "FACULTY";

  if (!currentUser) {
    return <div>Please sign in to view dashboard</div>;
  }

  return (
    <div id="wd-dashboard">
      <div className="d-flex justify-content-between align-items-center">
        <h1 id="wd-dashboard-title">Dashboard</h1>
        
        {/* Enrollments toggle button */}
        <button 
          className="btn btn-primary"
          onClick={() => setShowAllCourses(!showAllCourses)}
          id="wd-enrollments-btn"
        >
          {showAllCourses ? "My Courses" : "All Courses"}
        </button>
      </div>
      <hr />

      {/* Only show course creation form for faculty */}
      {isFaculty && (
        <>
          <h5>New Course
            <button className="btn btn-primary float-end"
                    id="wd-add-new-course-click"
                    onClick={addNewCourse}> Add </button>
            <button className="btn btn-warning float-end me-2"
                    onClick={updateCourseHandler} id="wd-update-course-click">
            Update
            </button>
          </h5>
          <br />
          <FormControl value={course.name} className="mb-2" 
            onChange={(e) => setCourse({ ...course, name: e.target.value })}/>
          <FormControl as="textarea" value={course.description} rows={3}
            onChange={(e) => setCourse({ ...course, description: e.target.value })} />
          <hr />
        </>
      )}

      <h2 id="wd-dashboard-published">
        {showAllCourses ? `All Courses (${courses.length})` : `Enrolled Courses (${displayedCourses.length})`}
      </h2> 
      <hr />
      
      <div id="wd-dashboard-courses">
        <Row xs={1} md={5} className="g-4">
          {displayedCourses.map((courseItem: any) => (
            <Col key={courseItem._id} className="wd-dashboard-course" style={{ width: "300px" }}>
              <Card>
                <Card.Img src={courseItem.image || "/images/reactjs.jpg"} variant="top" width="100%" height={160} />
                <Card.Body className="card-body">
                  <Card.Title className="wd-dashboard-course-title text-nowrap overflow-hidden">
                    {courseItem.name}
                  </Card.Title>
                  <Card.Text className="wd-dashboard-course-description overflow-hidden" style={{ height: "100px" }}>
                    {courseItem.description}
                  </Card.Text>
                  
                  {/* Course action buttons */}
                  <div className="d-flex justify-content-between align-items-center mb-2">
                    {/* Go button - only show if enrolled */}
                    {isEnrolled(courseItem._id) && (
                      <Link to={`/Kambaz/Courses/${courseItem._id}/Home`} className="btn btn-primary">
                        Go
                      </Link>
                    )}
                    
                    {/* Enroll/Unenroll buttons */}
                    <div>
                      {isEnrolled(courseItem._id) ? (
                        <button 
                          onClick={(event) => {
                            event.preventDefault();
                            handleUnenroll(courseItem._id);
                          }}
                          className="btn btn-danger btn-sm"
                          id="wd-unenroll-course-click"
                        >
                          Unenroll
                        </button>
                      ) : (
                        <button 
                          onClick={(event) => {
                            event.preventDefault();
                            handleEnroll(courseItem._id);
                          }}
                          className="btn btn-success btn-sm"
                          id="wd-enroll-course-click"
                        >
                          Enroll
                        </button>
                      )}
                    </div>
                  </div>
                  
                  {/* Faculty-only buttons */}
                  {isFaculty && (
                    <div>
                      <button 
                        onClick={(event) => {
                          event.preventDefault();
                          deleteCourseHandler(courseItem._id);
                        }} 
                        className="btn btn-danger btn-sm float-end"
                        id="wd-delete-course-click"
                      >
                        Delete
                      </button>
                      <button 
                        id="wd-edit-course-click"
                        onClick={(event) => {
                          event.preventDefault();
                          editCourseHandler(courseItem);
                        }}
                        className="btn btn-warning btn-sm float-end me-2"
                      >
                        Edit
                      </button>
                    </div>
                  )}
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </div>
    </div>
  );
}

// import React, { useState } from "react";
// import { v4 as uuidv4 } from "uuid";
// import { Link } from "react-router-dom";
// // import courseData from "../Database/courses.json";
// import * as db from "../Database";
// // import { addCourse, deleteCourse, updateCourse, editCourse } from "./Courses/reducer";
// // FIX: Update the import path to the correct reducer file location
// import { addCourse, deleteCourse, updateCourse, editCourse } from "../Courses/reducer";
// import { useDispatch, useSelector } from "react-redux";
// import { enrollUser, unenrollUser } from "../Enrollments/reducer";
// // import * as db from "./Database";

// import { Button, Card, Col, FormControl, Row } from "react-bootstrap";
// import type { ReactElement, JSXElementConstructor, ReactNode, ReactPortal } from "react";
// export default function Dashboard(
//   // { courses, course, setCourse, addNewCourse,
//   // deleteCourse, updateCourse }: {
//   // courses: any[]; course: any; setCourse: (course: any) => void;
//   // addNewCourse: () => void; deleteCourse: (course: any) => void;
//   // updateCourse: () => void; }
// ) {
//   const dispatch = useDispatch();
//   const { courses } = useSelector((state: any) => state.coursesReducer);
//   const { currentUser } = useSelector((state: any) => state.accountReducer);
//   const { enrollments } = useSelector((state: any) => state.enrollmentsReducer);
//   // console.log("Current user:", currentUser);
//   // const { enrollments } = db;

//   const [course, setCourse] = useState<any>({
//     _id: "0", 
//     name: "New Course", 
//     number: "New Number",
//     startDate: "2023-09-10", 
//     endDate: "2023-12-15",
//     image: "/images/reactjs.jpg", 
//     description: "New Description"
//   });

//   // State to toggle between enrolled courses and all courses
//   const [showAllCourses, setShowAllCourses] = useState(false);

//   // Helper function to check if user is enrolled
//   const isEnrolled = (courseId: string) => {
//     if (!currentUser) return false;
//     return enrollments.some(
//       (enrollment: any) =>
//         enrollment.user === currentUser._id && enrollment.course === courseId
//     );
//   };

//   // Event handlers using Redux actions
//   const addNewCourse = () => {
//     dispatch(addCourse(course));
//     // Reset the form
//     setCourse({
//       _id: "0", 
//       name: "New Course", 
//       number: "New Number",
//       startDate: "2023-09-10", 
//       endDate: "2023-12-15",
//       image: "/images/reactjs.jpg", 
//       description: "New Description"
//     });
//   };

//   const deleteCourseHandler = (courseId: string) => {
//     dispatch(deleteCourse(courseId));
//   };

//   const updateCourseHandler = () => {
//     dispatch(updateCourse(course));
//   };

//   const editCourseHandler = (courseToEdit: any) => {
//     setCourse(courseToEdit);
//   };

//   // Enrollment handlers
//   const handleEnroll = (courseId: string) => {
//     if (currentUser) {
//       dispatch(enrollUser({ userId: currentUser._id, courseId }));
//     }
//   };

//   const handleUnenroll = (courseId: string) => {
//     if (currentUser) {
//       dispatch(unenrollUser({ userId: currentUser._id, courseId }));
//     }
//   };

//   // Filter courses based on showAllCourses toggle
//   const displayedCourses = showAllCourses 
//     ? courses 
//     : courses.filter((courseItem: any) => isEnrolled(courseItem._id));

//   // Check if current user is faculty
//   const isFaculty = currentUser && currentUser.role === "FACULTY";

//   // Filter courses for enrolled user
//   // const { enrollments } = db;
//   // const enrolledCourses = currentUser ? courses.filter((courseItem: any) =>
//   //   enrollments.some(
//   //     (enrollment: any) =>
//   //       enrollment.user === currentUser._id &&
//   //       enrollment.course === courseItem._id
//   //   )) : courses;

//   if (!currentUser) {
//     return <div>Please sign in to view dashboard</div>;
//   }

//   return (
//     <div id="wd-dashboard">
//       <h1 id="wd-dashboard-title">Dashboard</h1> <hr />

//       <button 
//           className="btn btn-primary"
//           onClick={() => setShowAllCourses(!showAllCourses)}
//           id="wd-enrollments-btn"
//         >
//           {showAllCourses ? "My Courses" : "All Courses"}
//         </button>
//       {isFaculty && (
//         <>
//       <h5>New Course
//           <button className="btn btn-primary float-end"
//                   id="wd-add-new-course-click"
//                   onClick={addNewCourse} > Add </button>
//           <button className="btn btn-warning float-end me-2"
//                   onClick={updateCourseHandler} id="wd-update-course-click">
//           Update
//         </button>
//       </h5>
//       <br />
//       <FormControl value={course.name} className="mb-2" 
//       onChange={(e) => setCourse({ ...course, name: e.target.value }) }/>
//       <FormControl as="textarea" value={course.description} rows={3}
//        onChange={(e) => setCourse({ ...course, description: e.target.value }) } />
//       <hr />
//       </>
//     )}

// {/* Published Courses ({courses.length}) */}
//       <h2 id="wd-dashboard-published">
//         {showAllCourses ? `All Courses (${courses.length})` : `Enrolled Courses (${displayedCourses.length})`}
//         </h2> 
//         <hr />
//       <div id="wd-dashboard-courses">
//         <Row xs={1} md={5} className="g-4">
//           {courses
//           .filter((course: { _id: string; }) =>
//           enrollments.some(
//           (enrollment) =>
//           enrollment.user === currentUser._id &&
//           enrollment.course === course._id
//          ))
//           .map((course: { _id: any; name: string | number | bigint | boolean | ReactElement<unknown, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | Promise<string | number | bigint | boolean | ReactPortal | ReactElement<unknown, string | JSXElementConstructor<any>> | Iterable<ReactNode> | null | undefined> | null | undefined; description: string | number | bigint | boolean | ReactElement<unknown, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | Promise<string | number | bigint | boolean | ReactPortal | ReactElement<unknown, string | JSXElementConstructor<any>> | Iterable<ReactNode> | null | undefined> | null | undefined; }) => (
//             <Col className="wd-dashboard-course" style={{ width: "300px" }}>
//               <Card>
//                 <Link to={`/Kambaz/Courses/${course._id}/Home`}
//                       className="wd-dashboard-course-link text-decoration-none text-dark" >
//                   <Card.Img src="/images/reactjs.jpg" variant="top" width="100%" height={160} />
//                   <Card.Body className="card-body">
//                     <Card.Title className="wd-dashboard-course-title text-nowrap overflow-hidden">
//                       {course.name} </Card.Title>
//                     <Card.Text className="wd-dashboard-course-description overflow-hidden" style={{ height: "100px" }}>
//                       {course.description} </Card.Text>
//                     <Button variant="primary"> Go </Button>
                     

//                     <button onClick={(event) => {
//                       event.preventDefault();
//                       deleteCourseHandler(course._id);
//                     }} className="btn btn-danger float-end"
//                     id="wd-delete-course-click">
//                     Delete
//                     </button>

//                     <button 
//                       id="wd-edit-course-click"
//                       onClick={(event) => {
//                         event.preventDefault();
//                         editCourseHandler(course);
//                       }}
//                       className="btn btn-warning me-2 float-end" >
//                       Edit
//                     </button>


//                   </Card.Body>
//                 </Link>
//               </Card>
//             </Col>
//           ))}
//         </Row>
//       </div>
//     </div>);}





  // const [courses, setCourses] = useState<any[]>(db.courses);
  // // const course: any = {
  // const [course, setCourse] = useState<any>({
  //   _id: "0", name: "New Course", number: "New Number",
  //   startDate: "2023-09-10", endDate: "2023-12-15",
  //   image: "/images/reactjs.jpg", description: "New Description"
  // });
  // const addNewCourse = () => {
  //   const newCourse = { ...course, _id: uuidv4() };
  //   setCourses([...courses, newCourse ]);
  // };
  // const deleteCourse = (courseId: string) => {
  //   setCourses(courses.filter((course) => course._id !== courseId));
  // };

  // const updateCourse = () => {
  //   setCourses(
  //     courses.map((c) => {
  //       if (c._id === course._id) {
  //         return course;
  //       } else {
  //         return c;
  //       }
  //     })
  //   );
  // };


  // const courses = courseData;








// import { Card, Button } from "react-bootstrap";
// import { Link } from "react-router-dom";

// export default function Dashboard() {
//   const courses = [
//     { id: "1234", title: "CS1234 React JS", image: "/images/reactjs.jpg", desc: "Full Stack Software Development" },
//     { id: "2345", title: "CS2345 Node JS", image: "/images/nodejs.jpg", desc: "Server-side Web Programming" },
//     { id: "3456", title: "CS3456 Python", image: "/images/python.jpg", desc: "Intro to Data Analysis" },
//     { id: "4567", title: "CS4567 Machine Learning", image: "/images/machine-learning.jpg", desc: "AI & Predictive Modeling" },
//     { id: "5678", title: "CS5678 Databases", image: "/images/database.jpg", desc: "Relational DBs & SQL" },
//     { id: "6789", title: "CS6789 DevOps", image: "/images/devops.jpg", desc: "CI/CD and Cloud Practices" },
//     { id: "7890", title: "CS7890 Cybersecurity", image: "/images/security.jpg", desc: "Ethical Hacking & Defense" },
//   ];

//   return (
//     <div id="wd-dashboard" className="p-4">
//       <h1 id="wd-dashboard-title">Dashboard</h1>
//       <hr />
//       <h2 id="wd-dashboard-published">Published Courses ({courses.length})</h2>
//       <hr />

//       <div
//         id="wd-dashboard-courses"
//         className="d-flex flex-wrap justify-content-start gap-4"
//         style={{ rowGap: "40px" }}
//       >
//         {courses.map((course) => (
//           <div key={course.id} style={{ width: "270px" }}>
//             <Card className="shadow-sm h-100">
//               <Link
//                 to={`/Kambaz/Courses/1234/Home`}
//                 className="text-decoration-none text-dark"
//               >
//                 <Card.Img variant="top" src={course.image} height={160} />
//                 <Card.Body>
//                   <Card.Title className="text-nowrap overflow-hidden">
//                     {course.title}
//                   </Card.Title>
//                   <Card.Text
//                     className="overflow-hidden"
//                     style={{ height: "100px" }}
//                   >
//                     {course.desc}
//                   </Card.Text>
//                   <Button variant="primary">Go</Button>
//                 </Card.Body>
//               </Link>
//             </Card>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

// import { Card, Row, Col, Button } from "react-bootstrap";
// import { Link } from "react-router-dom";

// export default function Dashboard() {
//   const courses = [
//     { id: "1234", title: "CS1234 React JS", image: "/images/reactjs.jpg", desc: "Full Stack Software Development" },
//     { id: "2345", title: "CS2345 Node JS", image: "/images/nodejs.jpg", desc: "Server-side Web Programming" },
//     { id: "3456", title: "CS3456 Python", image: "/images/python.jpg", desc: "Intro to Data Analysis" },
//     { id: "4567", title: "CS4567 Machine Learning", image: "/images/machine-learning.jpg", desc: "AI & Predictive Modeling" },
//     { id: "5678", title: "CS5678 Databases", image: "/images/database.jpg", desc: "Relational DBs & SQL" },
//     { id: "6789", title: "CS6789 DevOps", image: "/images/devops.jpg", desc: "CI/CD and Cloud Practices" },
//     { id: "7890", title: "CS7890 Cybersecurity", image: "/images/security.jpg", desc: "Ethical Hacking & Defense" },
//   ];

//   return (
//     <div id="wd-dashboard" className="p-4">
//       <h1 id="wd-dashboard-title">Dashboard</h1>
//       <hr />
//       <h2 id="wd-dashboard-published">Published Courses ({courses.length})</h2>
//       <hr />
//       <div id="wd-dashboard-courses">
//         <Row className="g-4">
//           {courses.map((course) => (
//             <Col
//               key={course.id}
//               xs={12}
//               sm={6}
//               md={4}
//               lg={3}
//               xl={3}
//               className="d-flex justify-content-center"
//             >
//               <Card style={{ width: "270px", minHeight: "360px" }} className="shadow-sm">
//                 <Link
//                   to={`/Kambaz/Courses/${course.id}/Home`}
//                   className="text-decoration-none text-dark"
//                 >
//                   <Card.Img variant="top" src={course.image} height={160} />
//                   <Card.Body>
//                     <Card.Title className="text-nowrap overflow-hidden">{course.title}</Card.Title>
//                     <Card.Text
//                       className="overflow-hidden"
//                       style={{ height: "100px" }}
//                     >
//                       {course.desc}
//                     </Card.Text>
//                     <Button variant="primary">Go</Button>
//                   </Card.Body>
//                 </Link>
//               </Card>
//             </Col>
//           ))}
//         </Row>
//       </div>
//     </div>
//   );
// }



// import { Row, Col, Card, Button } from 'react-bootstrap';
// import { Link } from 'react-router-dom';

// export default function Dashboard() {
//   return (
//     <div id="wd-dashboard">
//       <h1 id="wd-dashboard-title">Dashboard</h1>
//       <hr />
//       <h2 id="wd-dashboard-published">Published Courses (12)</h2>
//       <hr />
//       <div id="wd-dashboard-courses">
//         <Row xs={1} md={4} className="g-4">
//           {/* 1 */}
//           <Col className="wd-dashboard-course" style={{ width: '300px' }}>
//             <Card>
//               <Link
//                 to="/Kambaz/Courses/1234/Home"
//                 className="wd-dashboard-course-link text-decoration-none text-dark"
//               >
//                 <Card.Img variant="top" src="/images/reactjs.jpg" height={160} />
//                 <Card.Body>
//                   <Card.Title className="wd-dashboard-course-title text-nowrap overflow-hidden">
//                     CS1234 React JS
//                   </Card.Title>
//                   <Card.Text className="wd-dashboard-course-description overflow-hidden" style={{ height: '100px' }}>
//                     Full Stack Software Development
//                   </Card.Text>
//                   <Button variant="primary">Go</Button>
//                 </Card.Body>
//               </Link>
//             </Card>
//           </Col>

//           {/* 2 */}
//           <Col style={{ width: '300px' }}>
//             <Card>
//               <Link to="/Kambaz/Courses/2345/Home" className="text-decoration-none text-dark">
//                 <Card.Img variant="top" src="/images/nodejs.jpg" height={160} />
//                 <Card.Body>
//                   <Card.Title>CS2345 Node JS</Card.Title>
//                   <Card.Text>Server-side Web Programming</Card.Text>
//                   <Button variant="primary">Go</Button>
//                 </Card.Body>
//               </Link>
//             </Card>
//           </Col>

//           {/* 3 */}
//           <Col style={{ width: '300px' }}>
//             <Card>
//               <Link to="/Kambaz/Courses/3456/Home" className="text-decoration-none text-dark">
//                 <Card.Img variant="top" src="/images/python.jpg" height={160} />
//                 <Card.Body>
//                   <Card.Title>CS3456 Python</Card.Title>
//                   <Card.Text>Intro to Data Analysis</Card.Text>
//                   <Button variant="primary">Go</Button>
//                 </Card.Body>
//               </Link>
//             </Card>
//           </Col>

//           {/* 4 */}
//           <Col style={{ width: '300px' }}>
//             <Card>
//               <Link to="/Kambaz/Courses/4567/Home" className="text-decoration-none text-dark">
//                 <Card.Img variant="top" src="/images/machine-learning.jpg" height={160} />
//                 <Card.Body>
//                   <Card.Title>CS4567 Machine Learning</Card.Title>
//                   <Card.Text>AI & Predictive Modeling</Card.Text>
//                   <Button variant="primary">Go</Button>
//                 </Card.Body>
//               </Link>
//             </Card>
//           </Col>

//           {/* 5 */}
//           <Col style={{ width: '300px' }}>
//             <Card>
//               <Link to="/Kambaz/Courses/5678/Home" className="text-decoration-none text-dark">
//                 <Card.Img variant="top" src="/images/database.jpg" height={160} />
//                 <Card.Body>
//                   <Card.Title>CS5678 Database Systems</Card.Title>
//                   <Card.Text>Relational DBs & SQL</Card.Text>
//                   <Button variant="primary">Go</Button>
//                 </Card.Body>
//               </Link>
//             </Card>
//           </Col>

//           {/* 6 */}
//           <Col style={{ width: '300px' }}>
//             <Card>
//               <Link to="/Kambaz/Courses/6789/Home" className="text-decoration-none text-dark">
//                 <Card.Img variant="top" src="/images/devops.jpg" height={160} />
//                 <Card.Body>
//                   <Card.Title>CS6789 DevOps</Card.Title>
//                   <Card.Text>CI/CD and Cloud Practices</Card.Text>
//                   <Button variant="primary">Go</Button>
//                 </Card.Body>
//               </Link>
//             </Card>
//           </Col>

//           {/* 7 */}
//           <Col style={{ width: '300px' }}>
//             <Card>
//               <Link to="/Kambaz/Courses/7890/Home" className="text-decoration-none text-dark">
//                 <Card.Img variant="top" src="/images/security.jpg" height={160} />
//                 <Card.Body>
//                   <Card.Title>CS7890 Cybersecurity</Card.Title>
//                   <Card.Text>Ethical Hacking & Defense</Card.Text>
//                   <Button variant="primary">Go</Button>
//                 </Card.Body>
//               </Link>
//             </Card>
//           </Col>

//           {/* 8 */}
//           <Col style={{ width: '300px' }}>
//             <Card>
//               <Link to="/Kambaz/Courses/8901/Home" className="text-decoration-none text-dark">
//                 <Card.Img variant="top" src="/images/html.jpg" height={160} />
//                 <Card.Body>
//                   <Card.Title>CS8901 HTML & CSS</Card.Title>
//                   <Card.Text>Frontend Web Design</Card.Text>
//                   <Button variant="primary">Go</Button>
//                 </Card.Body>
//               </Link>
//             </Card>
//           </Col>

//           {/* 9 */}
//           <Col style={{ width: '300px' }}>
//             <Card>
//               <Link to="/Kambaz/Courses/9012/Home" className="text-decoration-none text-dark">
//                 <Card.Img variant="top" src="/images/javascript.jpg" height={160} />
//                 <Card.Body>
//                   <Card.Title>CS9012 JavaScript</Card.Title>
//                   <Card.Text>Dynamic Client-Side Programming</Card.Text>
//                   <Button variant="primary">Go</Button>
//                 </Card.Body>
//               </Link>
//             </Card>
//           </Col>

//           {/* 10 */}
//           <Col style={{ width: '300px' }}>
//             <Card>
//               <Link to="/Kambaz/Courses/1011/Home" className="text-decoration-none text-dark">
//                 <Card.Img variant="top" src="/images/typescript.jpg" height={160} />
//                 <Card.Body>
//                   <Card.Title>CS1011 TypeScript</Card.Title>
//                   <Card.Text>Typed Superset of JavaScript</Card.Text>
//                   <Button variant="primary">Go</Button>
//                 </Card.Body>
//               </Link>
//             </Card>
//           </Col>

//           {/* 11 */}
//           <Col style={{ width: '300px' }}>
//             <Card>
//               <Link to="/Kambaz/Courses/1112/Home" className="text-decoration-none text-dark">
//                 <Card.Img variant="top" src="/images/java.jpg" height={160} />
//                 <Card.Body>
//                   <Card.Title>CS1112 Java</Card.Title>
//                   <Card.Text>Object-Oriented Programming</Card.Text>
//                   <Button variant="primary">Go</Button>
//                 </Card.Body>
//               </Link>
//             </Card>
//           </Col>

//           {/* 12 */}
//           <Col style={{ width: '300px' }}>
//             <Card>
//               <Link to="/Kambaz/Courses/1213/Home" className="text-decoration-none text-dark">
//                 <Card.Img variant="top" src="/images/cpp.jpg" height={160} />
//                 <Card.Body>
//                   <Card.Title>CS1213 C++</Card.Title>
//                   <Card.Text>Systems Programming</Card.Text>
//                   <Button variant="primary">Go</Button>
//                 </Card.Body>
//               </Link>
//             </Card>
//           </Col>
//         </Row>
//       </div>
//     </div>
//   );
// }



// import { Button, Card, Col, Row } from "react-bootstrap";
// import { Link } from "react-router-dom";

// export default function Dashboard() {
//   return (
//     <div id="wd-dashboard">
//  <h1 id="wd-dashboard-title">Dashboard</h1> <hr />
//  <h2 id="wd-dashboard-published">Published Courses (12)</h2> <hr />
//  <div id="wd-dashboard-courses">
//   <Row xs={1} md={5} className="g-4">
//    <Col className="wd-dashboard-course" style={{ width: "300px" }}>
//     <Card>
//      <Link to="/Kambaz/Courses/1234/Home"
//            className="wd-dashboard-course-link text-decoration-none text-dark">
//       <Card.Img variant="top" src="/images/reactjs.jpg" width="100%" height={160}/>
//       <Card.Body>
//        <Card.Title className="wd-dashboard-course-title text-nowrap overflow-hidden">CS1234 React JS</Card.Title>
//        <Card.Text  className="wd-dashboard-course-description overflow-hidden" style={{ height: "100px" }}>
//         Full Stack software developer</Card.Text>
//        <Button variant="primary">Go</Button>
//       </Card.Body>
//      </Link>
//     </Card>
//    </Col>
//    <Col className="wd-dashboard-course" style={{ width: "300px" }}> Another course </Col>
//    <Col className="wd-dashboard-course" style={{ width: "300px" }}> Another course </Col>
//   </Row>
// </div></div>

//

    // <div id="wd-dashboard">
    //   <h1 id="wd-dashboard-title">Dashboard</h1>
    //   <hr />
    //   <h2 id="wd-dashboard-published">Published Courses (7)</h2>
    //   <hr />
    //   <div id="wd-dashboard-courses">
    //     <div className="wd-dashboard-course">
    //       <Link to="/Kambaz/Courses/1234/Home" className="wd-dashboard-course-link">
    //         <img src="/images/reactjs.jpg" width={200} />
    //         <div>
    //           <h5>CS1234 React JS</h5>
    //           <p className="wd-dashboard-course-title">Full Stack Software Development</p>
    //           <button>Go</button>
    //         </div>
    //       </Link>
    //     </div>

    //     <div className="wd-dashboard-course">
    //       <Link to="/Kambaz/Courses/2345/Home" className="wd-dashboard-course-link">
    //         <img src="/images/nodejs.jpg" width={200} />
    //         <div>
    //           <h5>CS2345 Node JS</h5>
    //           <p className="wd-dashboard-course-title">Server-side Web Programming</p>
    //           <button>Go</button>
    //         </div>
    //       </Link>
    //     </div>

    //     <div className="wd-dashboard-course">
    //       <Link to="/Kambaz/Courses/3456/Home" className="wd-dashboard-course-link">
    //         <img src="/images/python.jpg" width={200} />
    //         <div>
    //           <h5>CS3456 Python for Data Science</h5>
    //           <p className="wd-dashboard-course-title">Intro to Data Analysis</p>
    //           <button>Go</button>
    //         </div>
    //       </Link>
    //     </div>

    //     <div className="wd-dashboard-course">
    //       <Link to="/Kambaz/Courses/4567/Home" className="wd-dashboard-course-link">
    //         <img src="/images/machine-learning.jpg" width={200} />
    //         <div>
    //           <h5>CS4567 Machine Learning</h5>
    //           <p className="wd-dashboard-course-title">AI & Predictive Modeling</p>
    //           <button>Go</button>
    //         </div>
    //       </Link>
    //     </div>

    //     <div className="wd-dashboard-course">
    //       <Link to="/Kambaz/Courses/5678/Home" className="wd-dashboard-course-link">
    //         <img src="/images/database.jpg" width={200} />
    //         <div>
    //           <h5>CS5678 Database Systems</h5>
    //           <p className="wd-dashboard-course-title">Relational DBs & SQL</p>
    //           <button>Go</button>
    //         </div>
    //       </Link>
    //     </div>

    //     <div className="wd-dashboard-course">
    //       <Link to="/Kambaz/Courses/6789/Home" className="wd-dashboard-course-link">
    //         <img src="/images/devops.jpg" width={200} />
    //         <div>
    //           <h5>CS6789 DevOps</h5>
    //           <p className="wd-dashboard-course-title">CI/CD and Cloud Practices</p>
    //           <button>Go</button>
    //         </div>
    //       </Link>
    //     </div>

    //     <div className="wd-dashboard-course">
    //       <Link to="/Kambaz/Courses/7890/Home" className="wd-dashboard-course-link">
    //         <img src="/images/security.jpg" width={200} />
    //         <div>
    //           <h5>CS7890 Cybersecurity</h5>
    //           <p className="wd-dashboard-course-title">Ethical Hacking & Defense</p>
    //           <button>Go</button>
    //         </div>
    //       </Link>
    //     </div>
    //   </div>
    // </div>
//   );
// }
