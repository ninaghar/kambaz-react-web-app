import { Link } from "react-router-dom";
export default function AccountNavigation() {
  return (
    <div id="wd-account-navigation">
        <a href="https://www.northeastern.edu/" id="wd-neu-link" target="_blank">Northeastern</a><br/>
        <Link to="/Kambaz/Account" id="wd-account-link">Account</Link><br/>
        <Link to="/Kambaz/Dashboard" id="wd-dashboard-link">Dashboard</Link><br/>
        <Link to="/Kambaz/Courses/1234/Home" id="wd-course-link">Courses</Link><br/>
        <Link to="/Kambaz/Calendar" id="wd-calendar-link">Calendar</Link><br/>
        <Link to="/Kambaz/Inbox" id="wd-inbox-link">Inbox</Link><br/>
        <Link to="/Labs" id="wd-labs-link">Labs</Link><br/>
      {/* <Link to={`/Kambaz/Account/Signin`}  > Signin  </Link> <br/>
      <Link to={`/Kambaz/Account/Signup`}  > Signup  </Link> <br/>
      <Link to={`/Kambaz/Account/Profile`} > Profile </Link> <br/> */}
    </div>
);}
