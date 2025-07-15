// export default function CourseStatus() {
//   return (
//     <div id="wd-course-status">
//       <h2>Course Status</h2>
//       <button>Unpublish</button> <button>Publish</button>
//       <br />
//       <br />
//       <button>Import Existing Content</button>
//       <br />
//       <button>Import from Commons</button>
//       <br />
//       <button>Choose Home Page</button>
//       <br />
//       <button>View Course Stream</button>
//       <br />
//       <button>New Announcement</button>
//       <br />
//       <button>New Analytics</button>
//       <br />
//       {/* Complete on your own 
//       Import Existing Content
//       Import from Commons
//       Choose Home Page
//       View Course Stream
//       New Announcement
//       New Analytics
//       View Course Notifications
//       */}
//       <button>View Course Notifications</button>
//     </div> );}


import { MdDoNotDisturbAlt } from "react-icons/md";
import { FaCheckCircle } from "react-icons/fa";
import { BiImport } from "react-icons/bi";
import { BsBarChartLineFill } from "react-icons/bs";
import { LiaFileImportSolid } from "react-icons/lia";
import { FaBullhorn } from "react-icons/fa";
import { FaHome } from "react-icons/fa";


import { GoBell } from "react-icons/go";
import { Button } from "react-bootstrap";
{/* Find more icons */}
export default function CourseStatus() {
 return (
   <div id="wd-course-status" style={{ width: "350px" }}>
     <h2>Course Status</h2>
     <div className="d-flex">
       <div className="w-50 pe-1">
         <Button variant="secondary" size="lg" className="w-100 text-nowrap ">
           <MdDoNotDisturbAlt className="me-2 fs-5" /> Unpublish </Button> </div>
       <div className="w-50">
         <Button variant="success" size="lg" className="w-100">
           <FaCheckCircle className="me-2 fs-5" /> Publish </Button> </div>
     </div>
     <br />
     <Button variant="secondary" size="lg" className="w-100 mt-1 text-start">
       <BiImport className="me-2 fs-5" /> Import Existing Content </Button>
     <Button variant="secondary" size="lg" className="w-100 mt-1 text-start">
       <LiaFileImportSolid className="me-2 fs-5" /> Import from Commons </Button>
       <Button variant="secondary" size="lg" className="w-100 mt-1 text-start">
       <FaHome className="me-2 fs-5" /> Choose Home Page </Button>
       <Button variant="secondary" size="lg" className="w-100 mt-1 text-start">
       <BsBarChartLineFill className="me-2 fs-5" /> View Course Stream </Button>
        <Button variant="secondary" size="lg" className="w-100 mt-1 text-start">
       <FaBullhorn className="me-2 fs-5" /> New Announcement </Button>
        <Button variant="secondary" size="lg" className="w-100 mt-1 text-start">
       <BsBarChartLineFill className="me-2 fs-5" /> New Analytics </Button>
       <Button variant="secondary" size="lg" className="w-100 mt-1 text-start">
       <GoBell className="me-2 fs-5" /> View Course Notifications </Button>
     {/* Complete the rest of the buttons */}
   </div> );}