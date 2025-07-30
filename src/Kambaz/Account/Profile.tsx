import { Button, Form } from "react-bootstrap";
import {  useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setCurrentUser } from "./reducer";

export default function Profile() {
  const [profile, setProfile] = useState<any>({});
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { currentUser } = useSelector((state: any) => state.accountReducer);
  const fetchProfile = () => {
    if (!currentUser) return navigate("/Kambaz/Account/Signin");
    setProfile(currentUser);
  };
  const signout = () => {
    dispatch(setCurrentUser(null));
    navigate("/Kambaz/Account/Signin");
  };
  useEffect(() => { fetchProfile(); }, []);
  return (
    <div id="wd-profile-screen">
      <h1>Profile</h1>
      {profile && (
        <div>
      <Form.Control
        defaultValue={profile.username}
        id="wd-profile-username"
        // defaultValue="alice"
        placeholder="username"
        className="mb-2"
        onChange={(e) => setProfile({ ...profile, username:  e.target.value })}
      />
      <Form.Control
        defaultValue={profile.password}
        id="wd-profile-password"
        // defaultValue="123"
        type="password"
        placeholder="password"
        className="mb-2"
        onChange={(e) => setProfile({ ...profile, password:  e.target.value })}
      />
      <Form.Control
        defaultValue={profile.firstName}
        id="wd-firstname"
        // defaultValue="Alice"
        placeholder="First Name"
        className="mb-2"
        onChange={(e) => setProfile({ ...profile, firstName: e.target.value })}
      />
      <Form.Control
        defaultValue={profile.lastName}
        id="wd-lastname"
        // defaultValue="Wonderland"
        placeholder="Last Name"
        className="mb-2"
        onChange={(e) => setProfile({ ...profile, lastName:  e.target.value })}
      />
      <Form.Control
        defaultValue={profile.dob}
        id="wd-dob"
        // defaultValue="2000-01-01"
        onChange={(e) => setProfile({ ...profile, dob: e.target.value })}
        type="date"
        className="mb-2"
      />
      <Form.Control
        defaultValue={profile.email}
        id="wd-email"
        // defaultValue="alice@wonderland"
        type="email"
        placeholder="Email"
        className="mb-2"
        onChange={ (e) => setProfile({ ...profile, email: e.target.value })}
      />
      <Form.Select onChange={(e) => setProfile({ ...profile, role:  e.target.value })}
        id="wd-role" defaultValue="FACULTY" className="mb-3">
        <option value="USER">User</option>
        <option value="ADMIN">Admin</option>
        <option value="FACULTY">Faculty</option>
        <option value="STUDENT">Student</option>
      </Form.Select>
      <Button onClick={signout} className="w-100 mb-2" id="wd-signout-btn">
            Sign out
          </Button>
      {/* <Link
        id="wd-signout-btn"
        to="/Kambaz/Account/Signin"
        className="btn btn-danger w-100"
      >
        Sign out
      </Link> */}
      </div>
      )}
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
