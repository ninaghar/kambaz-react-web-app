export default function Modules() {
  return (
    <div>
      {/* Implement Collapse All button, View Progress button, etc. */}
      <ul id="wd-modules">
{/* <input
        placeholder="Search for Assignments"
        id="wd-search-assignment"
      /> */}
      <div>
        <button id="wd-collapse-all">Collapse All</button>
        <button id="wd-view-progess">View Progress</button>
        <select id="wd-module-publish">
        <option value="PUBLISHALL">Publish All</option>
        </select>
        <button id="wd-plus-module">+ Module</button>
            </div>

        <ul className="wd-modules">
        <li className="wd-module">
            <div className="wd-title">Week 1, Lecture 1 - Course Introduction, Syllabus, Agenda</div>
            <ul className="wd-lessons">
            <li className="wd-lesson">
                <span className="wd-title">LEARNING OBJECTIVES</span>
                <ul className="wd-content">
                <li className="wd-content-item">Introduction to the course</li>
                <li className="wd-content-item">Learn what is Web Development</li>
                </ul>
            </li>
            <li className="wd-lesson">
                <span className="wd-title">READING</span>
                <ul className="wd-content">
                <li className="wd-content-item">Full Stack Developer - Chapter 1 - Introduction</li>
                <li className="wd-content-item">Full Stack Developer - Chapter 2 - Creating UIs</li>
                </ul>
            </li>
            <li className="wd-lesson">
                <span className="wd-title">SLIDES</span>
                <ul className="wd-content">
                <li className="wd-content-item">Introduction to Web Development</li>
                <li className="wd-content-item">Creating an HTTP server with Node.js</li>
                <li className="wd-content-item">Creating a React Application</li>
                </ul>
            </li>
            </ul>
        </li>

        <li className="wd-module">
            <div className="wd-title">Week 1, Lecture 2 - Formatting User Interfaces with HTML</div>
            <ul className="wd-lessons">
            <li className="wd-lesson">
                <span className="wd-title">LEARNING OBJECTIVES</span>
                <ul className="wd-content">
                <li className="wd-content-item">Learn how to create user interfaces with HTML</li>
                </ul>
            </li>
            <li className="wd-lesson">
                <span className="wd-title">SLIDES</span>
                <ul className="wd-content">
                <li className="wd-content-item">Deploy the assignment to Netlify</li>
                <li className="wd-content-item">Introduction to HTML and the DOM</li>
                <li className="wd-content-item">Formatting Web content with Headings</li>
                <li className="wd-content-item">Formatting content with Lists and Tables</li>
                </ul>
            </li>
            </ul>
        </li>

        <li className="wd-module">
            <div className="wd-title">Week 2</div>
        </li>

        <li className="wd-module">
            <div className="wd-title">Week 3</div>
        </li>
        </ul>

        {/* <li className="wd-module">
          <div className="wd-title">Week 1</div>
          <ul className="wd-lessons">
            <li className="wd-lesson">
              <span className="wd-title">LEARNING OBJECTIVES</span>
              <ul className="wd-content">
                <li className="wd-content-item">Introduction to the course</li>
                <li className="wd-content-item">Learn what is Web Development</li>
              </ul>
            </li>
          </ul>
        </li>
        <li className="wd-module">
          <div className="wd-title">Week 2</div>
        </li>
        <li className="wd-module">
          <div className="wd-title">Week 3</div>
        </li> */}
      </ul>
    </div>
);}



// /*  src/Kambaz/Courses/Modules/index.tsx  */
// import React, { useState } from "react";
// import { Link } from "react-router-dom";

// /* ----‑‑ Optional: the two sidebars that already exist ‑‑---- */
// import KambazNav from "../../Navigation";          // adjust the path if different
// import CourseNav from "../Navigation";             // adjust the path if different

// export default function Modules() {
//   /* Simple “collapse all / expand all” state */
//   const [collapsed, setCollapsed] = useState(false);

//   const toggleAll = () => setCollapsed(!collapsed);

//   return ( 
//     <div id="wd-modules-screen" className="d-flex">
//       {/* ---------- Column 1: Global Kambaz navigation ---------- */}
//       <aside className="wd-kambaz-nav col-2">
//         <KambazNav />
//       </aside>

//       {/* ---------- Column 2: Course‑specific navigation ---------- */}
//       <aside className="wd-course-nav col-2">
//         <CourseNav />
//       </aside>

//       {/* ---------- Column 3: Modules list ---------- */}
//       <main className="wd-modules col-8">
//         <header className="d-flex justify-content-end gap-2 mb-2">
//           <button
//             onClick={toggleAll}
//             className="btn btn-secondary btn-sm"
//             id="wd-collapse-all"
//           >
//             {collapsed ? "Expand All" : "Collapse All"}
//           </button>
//           <button className="btn btn-secondary btn-sm" id="wd-view-progress">
//             View Progress
//           </button>
//         </header>

//         <ul id="wd-modules" className="list-unstyled">
//           {/* ---------- Module 1 ---------- */}
//           <li className="wd-module border rounded mb-3">
//             <div className="wd-title p-2 bg-light fw-bold">
//               <span>Week 1 – Getting Started</span>
//               {/* tiny “+” or “–” indicator */}
//               <span className="float-end">{collapsed ? "+" : "–"}</span>
//             </div>

//             {/* Hide / show the inner UL based on collapsed state */}
//             {!collapsed && (
//               <ul className="wd-lessons list-unstyled m-0">
//                 <li className="wd-lesson border-top p-2">
//                   <span className="fw-semibold">LEARNING OBJECTIVES</span>
//                   <ul className="wd-content list-unstyled ms-3">
//                     <li className="wd-content-item">Course overview</li>
//                     <li className="wd-content-item">
//                       What is full‑stack web development?
//                     </li>
//                   </ul>
//                 </li>

//                 <li className="wd-lesson border-top p-2">
//                   <span className="fw-semibold">SLIDES &amp; READING</span>
//                   <ul className="wd-content list-unstyled ms-3">
//                     <li className="wd-content-item">
//                       <Link to="#">Lecture 1 slides (PDF)</Link>
//                     </li>
//                     <li className="wd-content-item">
//                       <Link to="#">MDN: How the Web Works</Link>
//                     </li>
//                   </ul>
//                 </li>

//                 <li className="wd-lesson border-top p-2">
//                   <span className="fw-semibold">ASSIGNMENTS</span>
//                   <ul className="wd-content list-unstyled ms-3">
//                     <li className="wd-content-item">
//                       <Link to="#">Set up your dev environment</Link>
//                     </li>
//                   </ul>
//                 </li>
//               </ul>
//             )}
//           </li>

//           {/* ---------- Module 2 ---------- */}
//           <li className="wd-module border rounded mb-3">
//             <div className="wd-title p-2 bg-light fw-bold">
//               <span>Week 2 – HTML & CSS Basics</span>
//               <span className="float-end">{collapsed ? "+" : "–"}</span>
//             </div>
//             {!collapsed && (
//               <ul className="wd-lessons list-unstyled m-0">
//                 <li className="wd-lesson border-top p-2">
//                   <span className="fw-semibold">LEARNING OBJECTIVES</span>
//                   <ul className="wd-content list-unstyled ms-3">
//                     <li className="wd-content-item">HTML semantics</li>
//                     <li className="wd-content-item">Flexbox & Grid</li>
//                   </ul>
//                 </li>
//                 <li className="wd-lesson border-top p-2">
//                   <span className="fw-semibold">SLIDES &amp; READING</span>
//                   <ul className="wd-content list-unstyled ms-3">
//                     <li className="wd-content-item">
//                       <Link to="#">Lecture 2 slides (PDF)</Link>
//                     </li>
//                     <li className="wd-content-item">
//                       <Link to="#">CSS Flexbox Guide</Link>
//                     </li>
//                   </ul>
//                 </li>
//               </ul>
//             )}
//           </li>

//           {/* ---------- Module 3 ---------- */}
//           <li className="wd-module border rounded mb-3">
//             <div className="wd-title p-2 bg-light fw-bold">
//               <span>Week 3 – JavaScript Fundamentals</span>
//               <span className="float-end">{collapsed ? "+" : "–"}</span>
//             </div>
//             {!collapsed && (
//               <ul className="wd-lessons list-unstyled m-0">
//                 <li className="wd-lesson border-top p-2">
//                   <span className="fw-semibold">LEARNING OBJECTIVES</span>
//                   <ul className="wd-content list-unstyled ms-3">
//                     <li className="wd-content-item">Variables, scope, and hoisting</li>
//                     <li className="wd-content-item">
//                       DOM manipulation &amp; events
//                     </li>
//                   </ul>
//                 </li>
//                 <li className="wd-lesson border-top p-2">
//                   <span className="fw-semibold">SLIDES &amp; READING</span>
//                   <ul className="wd-content list-unstyled ms-3">
//                     <li className="wd-content-item">
//                       <Link to="#">Lecture 3 slides (PDF)</Link>
//                     </li>
//                     <li className="wd-content-item">
//                       <Link to="#">Eloquent JS Ch 2</Link>
//                     </li>
//                   </ul>
//                 </li>
//                 <li className="wd-lesson border-top p-2">
//                   <span className="fw-semibold">ASSIGNMENTS</span>
//                   <ul className="wd-content list-unstyled ms-3">
//                     <li className="wd-content-item">
//                       <Link to="#">JS exercise 1: FizzBuzz</Link>
//                     </li>
//                   </ul>
//                 </li>
//               </ul>
//             )}
//           </li>
//         </ul>
//       </main>
//     </div>
//   );
// }
