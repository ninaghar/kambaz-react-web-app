import { Link, useLocation } from "react-router-dom";
import { ListGroup } from "react-bootstrap";
import { FaRegCircleUser, FaInbox } from "react-icons/fa6";
import { AiOutlineDashboard } from "react-icons/ai";
import { IoCalendarOutline } from "react-icons/io5";
import { LiaBookSolid, LiaCogSolid } from "react-icons/lia";

export default function KambazNavigation() {
  const location = useLocation();

  const isAccount = location.pathname.startsWith("/Kambaz/Account");
  const isDashboard = location.pathname.startsWith("/Kambaz/Dashboard");
  const isCourses = location.pathname.startsWith("/Kambaz/Courses");
  const isCalendar = location.pathname.startsWith("/Kambaz/Calendar");
  const isInbox = location.pathname.startsWith("/Kambaz/Inbox");
  const isLabs = location.pathname.startsWith("/Labs");

  return (
    <ListGroup
      id="wd-kambaz-navigation"
      style={{ width: 120 }}
      className="rounded-0 position-fixed bottom-0 top-0 d-none d-md-block bg-black z-2"
    >
      <ListGroup.Item
        id="wd-neu-link"
        target="_blank"
        action
        href="https://www.northeastern.edu/"
        className="bg-black border-0 text-center"
      >
        <img src="/images/NEU.png" width="75px" />
      </ListGroup.Item>

      <ListGroup.Item
        to="/Kambaz/Account"
        as={Link}
        className={`text-center border-0 ${isAccount ? "bg-white text-danger" : "bg-black text-white"}`}
      >
        <FaRegCircleUser className="fs-1 text-white" />
        <br />
        Account
      </ListGroup.Item>

      <ListGroup.Item
        to="/Kambaz/Dashboard"
        as={Link}
        className={`text-center border-0 ${isDashboard ? "bg-white text-danger" : "bg-black text-white"}`}
      >
        <AiOutlineDashboard className="fs-1 text-danger" />
        <br />
        Dashboard
      </ListGroup.Item>

      <ListGroup.Item
        to="/Kambaz/Courses/1234/Home"
        as={Link}
        className={`text-center border-0 ${isCourses ? "bg-white text-danger" : "bg-black text-white"}`}
      >
        <LiaBookSolid className="fs-1 text-danger" />
        <br />
        Courses
      </ListGroup.Item>

      <ListGroup.Item
        to="/Kambaz/Calendar"
        as={Link}
        className={`text-center border-0 ${isCalendar ? "bg-white text-danger" : "bg-black text-white"}`}
      >
        <IoCalendarOutline className="fs-1 text-danger" />
        <br />
        Calendar
      </ListGroup.Item>

      <ListGroup.Item
        to="/Kambaz/Inbox"
        as={Link}
        className={`text-center border-0 ${isInbox ? "bg-white text-danger" : "bg-black text-white"}`}
      >
        <FaInbox className="fs-1 text-danger" />
        <br />
        Inbox
      </ListGroup.Item>

      <ListGroup.Item
        to="/Labs"
        as={Link}
        className={`text-center border-0 ${isLabs ? "bg-white text-danger" : "bg-black text-white"}`}
      >
        <LiaCogSolid className="fs-1 text-danger" />
        <br />
        Labs
      </ListGroup.Item>
    </ListGroup>
  );
}

// import { Link, useLocation } from "react-router-dom";
// import { ListGroup } from "react-bootstrap";
// import { FaRegCircleUser, FaInbox } from "react-icons/fa6";
// import { AiOutlineDashboard } from "react-icons/ai";
// import { IoCalendarOutline } from "react-icons/io5";
// import { LiaBookSolid, LiaCogSolid } from "react-icons/lia";

// export default function KambazNavigation() {
//   const location = useLocation();

//   const isAccount = location.pathname.startsWith("/Kambaz/Account");
//   const isDashboard = location.pathname.startsWith("/Kambaz/Dashboard");
//   const isCourses = location.pathname.startsWith("/Kambaz/Courses");
//   const isCalendar = location.pathname.startsWith("/Kambaz/Calendar");
//   const isInbox = location.pathname.startsWith("/Kambaz/Inbox");
//   const isLabs = location.pathname.startsWith("/Labs");

//   return (
//     <ListGroup
//       id="wd-kambaz-navigation"
//       style={{ width: 120 }}
//       className="rounded-0 position-fixed bottom-0 top-0 d-none d-md-block bg-black z-2"
//     >
//       <ListGroup.Item
//         id="wd-neu-link"
//         target="_blank"
//         action
//         href="https://www.northeastern.edu/"
//         className="bg-black border-0 text-center"
//       >
//         <img src="/images/NEU.png" width="75px" />
//       </ListGroup.Item>

//       <ListGroup.Item
//         to="/Kambaz/Account"
//         as={Link}
//         className={`text-center border-0 ${isAccount ? "bg-white text-danger" : "bg-black text-white"}`}
//       >
//         <FaRegCircleUser className={`fs-1 ${isAccount ? "text-danger" : "text-white"}`} />
//         <br />
//         Account
//       </ListGroup.Item>

//       <ListGroup.Item
//         to="/Kambaz/Dashboard"
//         as={Link}
//         className={`text-center border-0 ${isDashboard ? "bg-white text-danger" : "bg-black text-white"}`}
//       >
//         <AiOutlineDashboard className={`fs-1 ${isDashboard ? "text-danger" : "text-white"}`} />
//         <br />
//         Dashboard
//       </ListGroup.Item>

//       <ListGroup.Item
//         to="/Kambaz/Courses/1234/Home"
//         as={Link}
//         className={`text-center border-0 ${isCourses ? "bg-white text-danger" : "bg-black text-white"}`}
//       >
//         <LiaBookSolid className={`fs-1 ${isCourses ? "text-danger" : "text-white"}`} />
//         <br />
//         Courses
//       </ListGroup.Item>

//       <ListGroup.Item
//         to="/Kambaz/Calendar"
//         as={Link}
//         className={`text-center border-0 ${isCalendar ? "bg-white text-danger" : "bg-black text-white"}`}
//       >
//         <IoCalendarOutline className={`fs-1 ${isCalendar ? "text-danger" : "text-white"}`} />
//         <br />
//         Calendar
//       </ListGroup.Item>

//       <ListGroup.Item
//         to="/Kambaz/Inbox"
//         as={Link}
//         className={`text-center border-0 ${isInbox ? "bg-white text-danger" : "bg-black text-white"}`}
//       >
//         <FaInbox className={`fs-1 ${isInbox ? "text-danger" : "text-white"}`} />
//         <br />
//         Inbox
//       </ListGroup.Item>

//       <ListGroup.Item
//         to="/Labs"
//         as={Link}
//         className={`text-center border-0 ${isLabs ? "bg-white text-danger" : "bg-black text-white"}`}
//       >
//         <LiaCogSolid className={`fs-1 ${isLabs ? "text-danger" : "text-white"}`} />
//         <br />
//         Labs
//       </ListGroup.Item>
//     </ListGroup>
//   );
// }

// import { Link } from "react-router-dom";

// // import { IoCalendar } from "react-icons/io5";
// import { AiOutlineDashboard } from "react-icons/ai";
// import { useLocation } from "react-router-dom";

// import { IoCalendarOutline } from "react-icons/io5";
// import { LiaBookSolid, LiaCogSolid } from "react-icons/lia";
// import { FaInbox, FaRegCircleUser } from "react-icons/fa6";
// import { ListGroup } from "react-bootstrap";
// export default function KambazNavigation() {
//   const location = useLocation();

//  return (
//   <ListGroup id="wd-kambaz-navigation" style={{ width: 120 }} 
//        className="rounded-0 position-fixed
//        bottom-0 top-0 d-none d-md-block bg-black z-2">
//     <ListGroup.Item id="wd-neu-link" target="_blank" action
//        href="https://www.northeastern.edu/"
//        className="bg-black border-0 text-center">
//        <img src="/images/NEU.png" width="75px" /></ListGroup.Item>
//     <ListGroup.Item to="/Kambaz/Account" as={Link}
//        className="text-center border-0 bg-black text-white">
//        <FaRegCircleUser className="fs-1 text text-white" /><br />
//        Account </ListGroup.Item>
//     <ListGroup.Item to="/Kambaz/Dashboard" as={Link}
//        className={`text-center border-0 ${location.pathname.includes("/Kambaz/Dashboard") ? "bg-white text-danger" : "bg-black text-white"}`}>
//        <AiOutlineDashboard className={`fs-1 ${location.pathname.includes("/Kambaz/Dashboard") ? "text-danger" : "text-white"}`} /><br />
//        Dashboard </ListGroup.Item>
       
//     <ListGroup.Item to="/Kambaz/Courses/1234/Home" as={Link}
//        className={`text-center border-0 ${location.pathname.includes("/Kambaz/Courses") ? "bg-white text-danger" : "bg-black text-white"}`}>
//        <LiaBookSolid className={`fs-1 ${location.pathname.includes("/Kambaz/Courses") ? "text-danger" : "text-white"}`} /><br />
//        Courses </ListGroup.Item>
//        {/* complete styling the rest of the links */}
//        <ListGroup.Item to="/Kambaz/Calendar" as={Link}
//        className="text-white
//                   bg-black text-center border-0">
//        <IoCalendarOutline className="fs-1 text-danger" /><br />
//        Calendar </ListGroup.Item>

//        <ListGroup.Item to="/Kambaz/Inbox" as={Link}
//        className="text-white
//                   bg-black text-center border-0">
//        <FaInbox className="fs-1 text-danger" /><br />
//        Inbox </ListGroup.Item>

//        <ListGroup.Item to="/Labs" as={Link}
//        className="text-white
//                   bg-black text-center border-0">
//        <LiaCogSolid className="fs-1 text-danger" /><br />
//        Labs </ListGroup.Item>
//   </ListGroup>);}


// export default function AccountNavigation() {
//   return (
//     <div id="wd-account-navigation">
//         <a href="https://www.northeastern.edu/" id="wd-neu-link" target="_blank">Northeastern</a><br/>
//         <Link to="/Kambaz/Account" id="wd-account-link">Account</Link><br/>
//         <Link to="/Kambaz/Dashboard" id="wd-dashboard-link">Dashboard</Link><br/>
//         <Link to="/Kambaz/Courses/1234/Home" id="wd-course-link">Courses</Link><br/>
//         <Link to="/Kambaz/Calendar" id="wd-calendar-link">Calendar</Link><br/>
//         <Link to="/Kambaz/Inbox" id="wd-inbox-link">Inbox</Link><br/>
//         <Link to="/Labs" id="wd-labs-link">Labs</Link><br/>
//       {/* <Link to={`/Kambaz/Account/Signin`}  > Signin  </Link> <br/>
//       <Link to={`/Kambaz/Account/Signup`}  > Signup  </Link> <br/>
//       <Link to={`/Kambaz/Account/Profile`} > Profile </Link> <br/> */}
//     </div>
// );}
