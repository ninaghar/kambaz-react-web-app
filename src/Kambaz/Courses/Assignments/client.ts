import axios from "axios";
const axiosWithCredentials = axios.create({ withCredentials: true });

export const REMOTE_SERVER = import.meta.env.VITE_REMOTE_SERVER;
export const ASSIGNMENTS_API = `${REMOTE_SERVER}/api/assignments`;
export const COURSES_API = `${REMOTE_SERVER}/api/courses`;

export const findAssignmentsForCourse = async (courseId: string) => {
  const response = await axiosWithCredentials.get(
    `${COURSES_API}/${courseId}/assignments`
  );
  return response.data;
};

export const createAssignment = async (courseId: string, assignment: any) => {
  const response = await axiosWithCredentials.post(
    `${COURSES_API}/${courseId}/assignments`,
    assignment
  );
  return response.data;
};

export const updateAssignment = async (assignmentId: string, assignment: any) => {
  const response = await axiosWithCredentials.put(
    `${ASSIGNMENTS_API}/${assignmentId}`,
    assignment
  );
  return response.data;
};

export const deleteAssignment = async (assignmentId: string) => {
  const response = await axiosWithCredentials.delete(
    `${ASSIGNMENTS_API}/${assignmentId}`
  );
  return response.data;
};

export const findAssignmentById = async (assignmentId: string) => {
  const response = await axiosWithCredentials.get(`${ASSIGNMENTS_API}/${assignmentId}`);
  return response.data;
};


// import axios from "axios";
// const axiosWithCredentials = axios.create({ withCredentials: true });

// const REMOTE_SERVER = import.meta.env.VITE_REMOTE_SERVER;
// const COURSES_API = `${REMOTE_SERVER}/api/courses`;
// const ASSIGNMENTS_API = `${REMOTE_SERVER}/api/assignments`;

// // Course-specific assignment operations
// export const findAssignmentsForCourse = async (courseId: string) => {
//   const response = await axiosWithCredentials.get(`${COURSES_API}/${courseId}/assignments`);
//   return response.data;
// };

// export const createAssignmentForCourse = async (courseId: string, assignment: any) => {
//   const response = await axiosWithCredentials.post(`${COURSES_API}/${courseId}/assignments`, assignment);
//   return response.data;
// };

// // Individual assignment operations
// export const deleteAssignment = async (assignmentId: string) => {
//   const response = await axiosWithCredentials.delete(`${ASSIGNMENTS_API}/${assignmentId}`);
//   return response.data;
// };

// // export const updateAssignment = async (assignment: any) => {
// //   const { data } = await axiosWithCredentials.put(`${ASSIGNMENTS_API}/${assignment._id}`, assignment);
// //   return data;
// // };

// export const updateAssignment = async (assignmentId: string, assignment: any) => {
//   console.log("Client: Updating assignment:", assignmentId);
//   console.log("Client: Update data:", assignment);
//   const response = await axiosWithCredentials.put(`${ASSIGNMENTS_API}/${assignmentId}`, assignment);
//   console.log("Client: Assignment updated");
//   return response.data;
// };

// export const findAssignmentById = async (assignmentId: string) => {
//   const response = await axiosWithCredentials.get(`${ASSIGNMENTS_API}/${assignmentId}`);
//   return response.data;
// };

// // Create assignment for a course
// export const createAssignment = async (courseId: string, assignment: any) => {
//   console.log("Client: Creating assignment for course:", courseId);
//   console.log("Client: Assignment data:", assignment);
//   try {
//     const response = await axiosWithCredentials.post(`${COURSES_API}/${courseId}/assignments`, assignment);
//     console.log("Client: Created assignment:", response.data._id);
//     return response.data;
//   } catch (error) {
//     console.error("Client: Error creating assignment:", error);
//     throw error;
//   }
// };