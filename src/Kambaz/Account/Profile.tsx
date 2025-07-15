import { Form } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function Profile() {
  return (
    <div id="wd-profile-screen">
      <h1>Profile</h1>
      <Form.Control
        id="wd-profile-username"
        defaultValue="alice"
        placeholder="username"
        className="mb-2"
      />
      <Form.Control
        id="wd-profile-password"
        defaultValue="123"
        type="password"
        placeholder="password"
        className="mb-2"
      />
      <Form.Control
        id="wd-firstname"
        defaultValue="Alice"
        placeholder="First Name"
        className="mb-2"
      />
      <Form.Control
        id="wd-lastname"
        defaultValue="Wonderland"
        placeholder="Last Name"
        className="mb-2"
      />
      <Form.Control
        id="wd-dob"
        defaultValue="2000-01-01"
        type="date"
        className="mb-2"
      />
      <Form.Control
        id="wd-email"
        defaultValue="alice@wonderland"
        type="email"
        placeholder="Email"
        className="mb-2"
      />
      <Form.Select id="wd-role" defaultValue="FACULTY" className="mb-3">
        <option value="USER">User</option>
        <option value="ADMIN">Admin</option>
        <option value="FACULTY">Faculty</option>
        <option value="STUDENT">Student</option>
      </Form.Select>
      <Link
        id="wd-signout-btn"
        to="/Kambaz/Account/Signin"
        className="btn btn-danger w-100"
      >
        Sign out
      </Link>
    </div>
  );
}



// import { Link } from "react-router-dom";
// export default function Profile() {
//   return (
//     <div id="wd-profile-screen">
//       <h3>Profile</h3>
//       <input defaultValue="alice" placeholder="username" className="wd-username"/><br/>
//       <input defaultValue="123"   placeholder="password" type="password"
//              className="wd-password" /><br/>
//       <input defaultValue="Alice" placeholder="First Name" id="wd-firstname" /><br/>
//       <input defaultValue="Wonderland" placeholder="Last Name" id="wd-lastname" /><br/>
//       <input defaultValue="2000-01-01" type="date" id="wd-dob" /><br/>
//       <input defaultValue="alice@wonderland" type="email" id="wd-email" /><br/>
//       <select defaultValue="FACULTY" id="wd-role">
//         <option value="USER">User</option>       <option value="ADMIN">Admin</option>
//         <option value="FACULTY">Faculty</option> <option value="STUDENT">Student</option>
//       </select><br/>
//       <Link to="/Kambaz/Account/Signin" >Sign out</Link>
//     </div>
// );}
