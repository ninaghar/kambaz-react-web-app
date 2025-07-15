import 'bootstrap/dist/css/bootstrap.min.css';
import "./styles.css";
// import { Navigate, Route, Routes } from 'react-router-dom';
// import { FaAlignJustify } from 'react-icons/fa';
import { Routes, Route, Navigate } from "react-router";
import Account from "./Account";
import Dashboard from "./Dashboard";
import KambazNavigation from "./Navigation";
import Courses from "./Courses";
export default function Kambaz() {
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
        <Route path="/Dashboard" element={<Dashboard />} />
        <Route path="/Courses/:courseId/*" element={<Courses />} />
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
