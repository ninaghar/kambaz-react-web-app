import { useEffect, useState } from "react";
import { FaUserCircle } from "react-icons/fa";
import { IoCloseSharp } from "react-icons/io5";
import { useParams, useNavigate } from "react-router";
// import { Link } from "react-router-dom";
import * as client from "../../Account/client";
import { FaPencil } from "react-icons/fa6";
import { FaCheck } from "react-icons/fa";
import { FormControl } from "react-bootstrap";

export default function PeopleDetails() {
  const { uid } = useParams();
  const [user, setUser] = useState<any>({});
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [role, setRole] = useState("");
  const [editing, setEditing] = useState(false);

  const navigate = useNavigate();

  // Handle Enter key press for saving
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      e.preventDefault();
      e.stopPropagation();
      saveUser();
    }
  };

  const saveUser = async () => {
    const [firstName, lastName] = name.split(" ");
    const updatedUser = { 
      ...user, 
      firstName, 
      lastName,
      email: email || user.email,
      role: role || user.role
    };
    await client.updateUser(updatedUser);
    setUser(updatedUser);
    setEditing(false);
    // Remove navigate(-1) to stay on the same page
  };

  const startEditing = () => {
    setName(`${user.firstName} ${user.lastName}`);
    setEmail(user.email || "");
    setRole(user.role || "");
    setEditing(true);
  };

  const deleteUser = async (uid: string) => {
    await client.deleteUser(uid);
    navigate(-1);
  };

  const fetchUser = async () => {
    if (!uid) return;
    const user = await client.findUserById(uid);
    setUser(user);
  };

  useEffect(() => {
    if (uid) fetchUser();
  }, [uid]);

  // Add global keydown listener when editing
  useEffect(() => {
    const handleGlobalKeyDown = (e: KeyboardEvent) => {
      if (editing && e.key === "Enter") {
        e.preventDefault();
        e.stopPropagation();
        saveUser();
      }
      if (editing && e.key === "Escape") {
        e.preventDefault();
        setEditing(false);
        setName("");
        setEmail("");
        setRole("");
      }
    };

    if (editing) {
      document.addEventListener("keydown", handleGlobalKeyDown, true); // Use capture phase
    }

    return () => {
      document.removeEventListener("keydown", handleGlobalKeyDown, true);
    };
  }, [editing, name, email, role, user]);

  if (!uid) return null;

  return (
    <div className="wd-people-details position-fixed top-0 end-0 bottom-0 bg-white p-4 shadow w-25">
      <button onClick={() => navigate(-1)} className="btn position-fixed end-0 top-0 wd-close-details">
        <IoCloseSharp className="fs-1" />
      </button>
      <div className="text-center mt-2">
        <FaUserCircle className="text-secondary me-2 fs-1" />
      </div>
      <hr />

      {/* Name Section */}
      <div className="text-danger fs-4 mb-3">
        {!editing && (
          <FaPencil 
            onClick={startEditing}
            className="float-end fs-5 mt-2 wd-edit" 
            style={{ cursor: "pointer" }}
          />
        )}
        {editing && (
          <FaCheck 
            onClick={saveUser}
            className="float-end fs-5 mt-2 me-2 wd-save" 
            style={{ cursor: "pointer" }}
          />
        )}
        {!editing && (
          <div 
            className="wd-name"
            onClick={startEditing}
            style={{ cursor: "pointer" }}
          >
            {user.firstName} {user.lastName}
          </div>
        )}
        {editing && (
          <FormControl 
            className="w-75 wd-edit-name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder="First Last"
            autoFocus
          />
        )}
      </div>

      {/* Email Section */}
      <div className="mb-3">
        <b>Email:</b>
        {!editing && (
          <span 
            className="wd-email ms-2"
            onClick={startEditing}
            style={{ cursor: "pointer", textDecoration: "underline" }}
          >
            {user.email || "No email provided"}
          </span>
        )}
        {editing && (
          <FormControl 
            type="email"
            className="mt-1 wd-edit-email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder="user@example.com"
          />
        )}
      </div>

      {/* Role Section */}
      <div className="mb-3">
        <b>Roles:</b>
        {!editing && (
          <span 
            className="wd-roles ms-2"
            onClick={startEditing}
            style={{ cursor: "pointer", textDecoration: "underline" }}
          >
            {user.role || "No role assigned"}
          </span>
        )}
        {editing && (
          <select 
            value={role} 
            onChange={(e) => setRole(e.target.value)}
            className="form-select mt-1 wd-edit-role"
            onKeyDown={handleKeyDown}
          >
            <option value="">Select Role</option>
            <option value="STUDENT">Students</option>
            <option value="TA">Assistants</option>
            <option value="FACULTY">Faculty</option>
            <option value="ADMIN">Administrators</option>
          </select>
        )}
      </div>

      {/* Read-only fields */}
      <b>Login ID:</b> <span className="wd-login-id">{user.loginId}</span> <br />
      <b>Section:</b> <span className="wd-section">{user.section}</span> <br />
      <b>Total Activity:</b> <span className="wd-total-activity">{user.totalActivity}</span>

      <hr />

      {editing && (
        <div className="mb-3">
          <button 
            className="btn btn-success me-2" 
            onClick={(e) => {
              e.preventDefault();
              saveUser();
            }}
          >
            Save Changes
          </button>
          <button 
            className="btn btn-secondary" 
            onClick={() => {
              setEditing(false);
              setName("");
              setEmail("");
              setRole("");
            }}
          >
            Cancel Edit
          </button>
        </div>
      )}

      {!editing && (
        <>
          <button 
            onClick={() => deleteUser(uid)} 
            className="btn btn-danger float-end wd-delete"
          > 
            Delete 
          </button>
          <button 
            onClick={() => navigate(-1)}
            className="btn btn-secondary float-start me-2 wd-cancel"
          > 
            Cancel 
          </button>
        </>
      )}
    </div>
  );
}



// import { useEffect, useState } from "react";
// import { FaUserCircle } from "react-icons/fa";
// import { IoCloseSharp } from "react-icons/io5";
// import { useParams, useNavigate } from "react-router";
// import { Link } from "react-router-dom";
// import * as client from "../../Account/client";
// import { FaPencil } from "react-icons/fa6";
// import { FaCheck } from "react-icons/fa";
// import { FormControl } from "react-bootstrap";

// export default function PeopleDetails() {
//   const { uid } = useParams();
//   const [user, setUser] = useState<any>({});
//   const [name, setName] = useState("");
//   const [email, setEmail] = useState("");
//   const [role, setRole] = useState("");
//   const [editing, setEditing] = useState(false);

//   const navigate = useNavigate();

//   const saveUser = async () => {
//     const [firstName, lastName] = name.split(" ");
//     const updatedUser = { 
//       ...user, 
//       firstName, 
//       lastName,
//       email: email || user.email,
//       role: role || user.role
//     };
//     await client.updateUser(updatedUser);
//     setUser(updatedUser);
//     setEditing(false);
//     navigate(-1);
//   };

//   const startEditing = () => {
//     setName(`${user.firstName} ${user.lastName}`);
//     setEmail(user.email || "");
//     setRole(user.role || "");
//     setEditing(true);
//   };

//   const deleteUser = async (uid: string) => {
//     await client.deleteUser(uid);
//     navigate(-1);
//   };

//   const fetchUser = async () => {
//     if (!uid) return;
//     const user = await client.findUserById(uid);
//     setUser(user);
//   };

//   useEffect(() => {
//     if (uid) fetchUser();
//   }, [uid]);

//   if (!uid) return null;

//   return (
//     <div className="wd-people-details position-fixed top-0 end-0 bottom-0 bg-white p-4 shadow w-25">
//       <button onClick={() => navigate(-1)} className="btn position-fixed end-0 top-0 wd-close-details">
//         <IoCloseSharp className="fs-1" />
//       </button>
//       <div className="text-center mt-2">
//         <FaUserCircle className="text-secondary me-2 fs-1" />
//       </div>
//       <hr />

//       {/* Name Section */}
//       <div className="text-danger fs-4 mb-3">
//         {!editing && (
//           <FaPencil 
//             onClick={startEditing}
//             className="float-end fs-5 mt-2 wd-edit" 
//             style={{ cursor: "pointer" }}
//           />
//         )}
//         {editing && (
//           <FaCheck 
//             onClick={saveUser}
//             className="float-end fs-5 mt-2 me-2 wd-save" 
//             style={{ cursor: "pointer" }}
//           />
//         )}
//         {!editing && (
//           <div 
//             className="wd-name"
//             onClick={startEditing}
//             style={{ cursor: "pointer" }}
//           >
//             {user.firstName} {user.lastName}
//           </div>
//         )}
//         {editing && (
//           <FormControl 
//             className="w-75 wd-edit-name"
//             value={name}
//             onChange={(e) => setName(e.target.value)}
//             onKeyDown={(e) => {
//               if (e.key === "Enter") { saveUser(); }
//             }}
//             placeholder="First Last"
//           />
//         )}
//       </div>

//       {/* Email Section */}
//       <div className="mb-3">
//         <b>Email:</b>
//         {!editing && (
//           <span 
//             className="wd-email ms-2"
//             onClick={startEditing}
//             style={{ cursor: "pointer", textDecoration: "underline" }}
//           >
//             {user.email || "No email provided"}
//           </span>
//         )}
//         {editing && (
//           <FormControl 
//             type="email"
//             className="mt-1 wd-edit-email"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//             onKeyDown={(e) => {
//               if (e.key === "Enter") { saveUser(); }
//             }}
//             placeholder="user@example.com"
//           />
//         )}
//       </div>

//       {/* Role Section */}
//       <div className="mb-3">
//         <b>Roles:</b>
//         {!editing && (
//           <span 
//             className="wd-roles ms-2"
//             onClick={startEditing}
//             style={{ cursor: "pointer", textDecoration: "underline" }}
//           >
//             {user.role || "No role assigned"}
//           </span>
//         )}
//         {editing && (
//           <select 
//             value={role} 
//             onChange={(e) => setRole(e.target.value)}
//             className="form-select mt-1 wd-edit-role"
//             onKeyDown={(e) => {
//               if (e.key === "Enter") { saveUser(); }
//             }}
//           >
//             <option value="">Select Role</option>
//             <option value="STUDENT">Students</option>
//             <option value="TA">Assistants</option>
//             <option value="FACULTY">Faculty</option>
//             <option value="ADMIN">Administrators</option>
//           </select>
//         )}
//       </div>

//       {/* Read-only fields */}
//       <b>Login ID:</b> <span className="wd-login-id">{user.loginId}</span> <br />
//       <b>Section:</b> <span className="wd-section">{user.section}</span> <br />
//       <b>Total Activity:</b> <span className="wd-total-activity">{user.totalActivity}</span>

//       <hr />

//       {editing && (
//         <div className="mb-3">
//           <button 
//             className="btn btn-success me-2" 
//             onClick={saveUser}
//           >
//             Save Changes
//           </button>
//           <button 
//             className="btn btn-secondary" 
//             onClick={() => {
//               setEditing(false);
//               setName("");
//               setEmail("");
//               setRole("");
//             }}
//           >
//             Cancel Edit
//           </button>
//         </div>
//       )}

//       {!editing && (
//         <>
//           <button 
//             onClick={() => deleteUser(uid)} 
//             className="btn btn-danger float-end wd-delete"
//           > 
//             Delete 
//           </button>
//           <button 
//             onClick={() => navigate(-1)}
//             className="btn btn-secondary float-start me-2 wd-cancel"
//           > 
//             Cancel 
//           </button>
//         </>
//       )}
//     </div>
//   );
// }






// import { useEffect, useState } from "react";
// import { FaUserCircle } from "react-icons/fa";
// import { IoCloseSharp } from "react-icons/io5";
// import { useParams, useNavigate } from "react-router";
// import { Link } from "react-router-dom";
// import * as client from "../../Account/client";
// import { FaPencil } from "react-icons/fa6";
// import { FaCheck} from "react-icons/fa";
// import { FormControl } from "react-bootstrap";
// export default function PeopleDetails() {
//   const { uid} = useParams();
//   const [user, setUser] = useState<any>({});
//   const [name, setName] = useState("");
//   const [editing, setEditing] = useState(false);
//   const saveUser = async () => {
//     const [firstName, lastName] = name.split(" ");
//     const updatedUser = { ...user, firstName, lastName };
//     await client.updateUser(updatedUser);
//     setUser(updatedUser);
//     setEditing(false);
//     navigate(-1);
//   };

//   const navigate = useNavigate();
//   const deleteUser = async (uid: string) => {
//     await client.deleteUser(uid);
//     navigate(-1);
//   };

//   const fetchUser = async () => {
//     if (!uid) return;
//     const user = await client.findUserById(uid);
//     setUser(user);
//   };
//   useEffect(() => {
//     if (uid) fetchUser();
//   }, [uid]);
//   if (!uid) return null;
//   return (
//     <div className="wd-people-details position-fixed top-0 end-0 bottom-0 bg-white p-4 shadow w-25">
//       <button onClick={() => navigate(-1)} className="btn position-fixed end-0 top-0 wd-close-details">
//         <IoCloseSharp className="fs-1" /> </button>
//       <div className="text-center mt-2"> <FaUserCircle className="text-secondary me-2 fs-1" /> </div><hr />
//       {/* <div className="text-danger fs-4 wd-name"> {user.firstName} {user.lastName} </div> */}
//       <div className="text-danger fs-4">
//         {!editing && (
//           <FaPencil onClick={() => setEditing(true)}
//               className="float-end fs-5 mt-2 wd-edit" /> )}
//         {editing && (
//           <FaCheck onClick={() => saveUser()}
//               className="float-end fs-5 mt-2 me-2 wd-save" /> )}
//         {!editing && (
//           <div className="wd-name"
//                onClick={() => setEditing(true)}>
//             {user.firstName} {user.lastName}</div>)}
//         {user && editing && (
//           <FormControl className="w-50 wd-edit-name"
//             defaultValue={`${user.firstName} ${user.lastName}`}
//             onChange={(e) => setName(e.target.value)}
//             onKeyDown={(e) => {
//               if (e.key === "Enter") { saveUser(); }}}/>)}
//       </div>
//       <b>Roles:</b>           <span className="wd-roles">         {user.role}         </span> <br />
//       <b>Login ID:</b>        <span className="wd-login-id">      {user.loginId}      </span> <br />
//       <b>Section:</b>         <span className="wd-section">       {user.section}      </span> <br />
//       <b>Total Activity:</b>  <span className="wd-total-activity">{user.totalActivity}</span> 
//       <hr />
//       <button onClick={() => deleteUser(uid)} className="btn btn-danger float-end wd-delete" > Delete </button>
//       <button onClick={() => navigate(-1)}
//               className="btn btn-secondary float-start float-end me-2 wd-cancel" > Cancel </button>
//       </div> ); }