import { useState, useEffect } from "react";
import { useParams } from "react-router";
import PeopleTable from "./Table";
import * as coursesClient from "../client";

export default function People() {
  const { courseId } = useParams(); // Get course ID from URL
  const [users, setUsers] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  const fetchUsersForCourse = async () => {
    if (!courseId) return;
    
    try {
      console.log("Fetching users for course:", courseId);
      setLoading(true);
      const courseUsers = await coursesClient.findUsersForCourse(courseId);
      console.log("Found course users:", courseUsers);
      setUsers(courseUsers);
    } catch (error) {
      console.error("Error fetching users for course:", error);
      setUsers([]);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchUsersForCourse();
  }, [courseId]);

  if (loading) {
    return <div>Loading course students...</div>;
  }

  return (
    <div>
      <h3>People ({users.length})</h3>
      <PeopleTable users={users} />
    </div>
  );
}