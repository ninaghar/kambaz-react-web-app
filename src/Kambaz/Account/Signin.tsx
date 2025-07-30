import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { setCurrentUser } from "./reducer";
import { useDispatch } from "react-redux";
import * as db from "../Database";


import { Button, Form } from "react-bootstrap";
// import { Link } from "react-router-dom";

export default function Signin() {
  const [credentials, setCredentials] = useState<any>({});
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const signin = () => {
    const user = db.users.find(
      (u: any) => u.username === credentials.username && u.password === credentials.password);
    if (!user) return;
    dispatch(setCurrentUser(user));
    navigate("/Kambaz/Dashboard");
  };

  return (
    <div id="wd-signin-screen">
      <h1>Sign in</h1>
      <Form.Control defaultValue={credentials.username}
             onChange={(e) => setCredentials({ ...credentials, username: e.target.value })}
             id="wd-username"
             placeholder="username"
             className="mb-2"/>
      <Form.Control defaultValue={credentials.password}
             onChange={(e) => setCredentials({ ...credentials, password: e.target.value })}
             id="wd-password"
             placeholder="password" type="password"
             className="mb-2"/>
      {/* <Link id="wd-signin-btn"
            to="/Kambaz/Account/Profile"
            className="btn btn-primary w-100 mb-2">
            Sign in </Link> */}
      <Button onClick={signin} id="wd-signin-btn" className="w-100" > Sign in </Button>
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
