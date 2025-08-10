import { useState, useEffect } from "react";
import { useParams } from "react-router";
import PeopleTable from "../Courses/People/Table";
import * as client from "./client";
import { FormControl } from "react-bootstrap";
import { FaPlus } from "react-icons/fa";
export default function Users() {
 const [users, setUsers] = useState<any[]>([]);
 const [role, setRole] = useState("");
 // eslint-disable-next-line @typescript-eslint/no-unused-vars
 const [name, setName] = useState("");
 const createUser = async () => {
    try {
        console.log("Creating user...");
    //     const timestamp = Date.now();
    //   const random = Math.floor(Math.random() * 10000);
    //   const uniqueId = `${timestamp}-${random}`;
    // const random = Math.floor(Math.random() * 1000);
    const user = await client.createUser({
      firstName: "New",
      lastName: `User${users.length + 1}`,
      username: `user_${Date.now()}`,
      password: "password123",
      email: `email${users.length + 1}@neu.edu`,
      section: "S101",
      role: "STUDENT",
    });

    // const user = await client.createUser(newUser);
    console.log("Created user response:", user);
    
    setUsers([...users, user]);}catch (e) { console.log(e); }
    console.log("Updated users array");
  };

  const filterUsersByName = async (name: string) => {
    setName(name);
    if (name) {
      const users = await client.findUsersByPartialName(name);
      setUsers(users);
    } else {
      fetchUsers();
    }
  };

  const filterUsersByRole = async (role: string) => {
    setRole(role);
    if (role) {
      const users = await client.findUsersByRole(role);
      setUsers(users);
    } else {
      fetchUsers();
    }
  };

 const { uid } = useParams();
 const fetchUsers = async () => {
   const users = await client.findAllUsers();
   setUsers(users);
 };
 useEffect(() => {
   fetchUsers();
 }, [uid]);
 return (
   <div>
    <button onClick={createUser} className="float-end btn btn-danger wd-add-people">
        <FaPlus className="me-2" />
        Users
      </button>
     <h3>Users</h3>
     <FormControl onChange={(e) => filterUsersByName(e.target.value)} placeholder="Search people"
             className="float-start w-25 me-2 wd-filter-by-name" />
     <select value={role} onChange={(e) =>filterUsersByRole(e.target.value)}
              className="form-select float-start w-25 wd-select-role" >
        <option value="">All Roles</option>    <option value="STUDENT">Students</option>
        <option value="TA">Assistants</option> <option value="FACULTY">Faculty</option>
        <option value="ADMIN">Administrators</option>
      </select>
     <PeopleTable users={users} />
   </div>
);}
