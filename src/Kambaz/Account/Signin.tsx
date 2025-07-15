import { Form } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function Signin() {
  return (
    <div id="wd-signin-screen">
      <h1>Sign in</h1>
      <Form.Control id="wd-username"
             placeholder="username"
             className="mb-2"/>
      <Form.Control id="wd-password"
             placeholder="password" type="password"
             className="mb-2"/>
      <Link id="wd-signin-btn"
            to="/Kambaz/Account/Profile"
            className="btn btn-primary w-100 mb-2">
            Sign in </Link>
      <Link id="wd-signup-link" to="/Kambaz/Account/Signup">Sign up</Link>
    </div> );}


// export default function Signin() {
//   return (
//     <div id="wd-signin-screen">
//       <h3>Sign in</h3>
//       <input placeholder="username" className="wd-username" /> <br />
//       <input placeholder="password" type="password" className="wd-password" /> <br />
//       <Link  id="wd-signin-btn" to="/Kambaz/Dashboard"> Sign in </Link> <br />
//       {/* to="/Kambaz/Account/Profile"  */}
//       <Link  to="/Kambaz/Account/Signup"  id="wd-signup-link">Sign up</Link>
//     </div>
// );}
