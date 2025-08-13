import axios from "axios";

const REMOTE_SERVER = import.meta.env.VITE_REMOTE_SERVER;
const axiosWithCredentials = axios.create({ withCredentials: true });

// Get all enrollments
export const findAllEnrollments = async () => {
  const response = await axiosWithCredentials.get(`${REMOTE_SERVER}/api/enrollments`);
  return response.data;
};

// Get enrollments for current user
//   app.get("/api/users/:userId/enrollments", (req, res) => {
//     const { userId } = req.params;
//     const enrollments = enrollmentsDao.findEnrollmentsForUser(userId);
//     res.json(enrollments);
//   });

export const findMyEnrollments = async (userId: string) => {
  const response = await axiosWithCredentials.get(`${REMOTE_SERVER}/api/users/$userId/enrollments`);
  return response.data;
};

// Get enrollments for a specific course
export const findEnrollmentsForCourse = async (courseId: string) => {
  const response = await axiosWithCredentials.get(`${REMOTE_SERVER}/api/courses/${courseId}/enrollments`);
  return response.data;
};

// Enroll current user in a course
export const enrollInCourse = async (courseId: string) => {
  const response = await axiosWithCredentials.post(`${REMOTE_SERVER}/api/users/current/courses/${courseId}`);
  return response.data;
};

// Unenroll current user from a course
export const unenrollFromCourse = async (courseId: string) => {
  const response = await axiosWithCredentials.delete(`${REMOTE_SERVER}/api/users/current/courses/${courseId}`);
  return response.data;
};

// Enroll specific user in course (for admin use)
export const enrollUserInCourse = async (userId: string, courseId: string) => {
  const response = await axiosWithCredentials.post(`${REMOTE_SERVER}/api/users/${userId}/courses/${courseId}`);
  return response.data;
};

// Unenroll specific user from course (for admin use)
export const unenrollUserFromCourse = async (userId: string, courseId: string) => {
  const response = await axiosWithCredentials.delete(`${REMOTE_SERVER}/api/users/${userId}/courses/${courseId}`);
  return response.data;
};