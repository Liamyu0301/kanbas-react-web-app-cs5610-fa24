import axios from "axios";
const REMOTE_SERVER =
  process.env.REACT_APP_REMOTE_SERVER || "http://localhost:3000";
const ENROLLMENTS_API = `${REMOTE_SERVER}/api/enrollments`;

export const getUserEnrollments = async (userId: string) => {
  const response = await axios.get(`${ENROLLMENTS_API}/${userId}`);
  return response.data;
};

export const enrollInCourse = async (userId: string, courseId: string) => {
  const response = await axios.post(ENROLLMENTS_API, { userId, courseId });
  return response.data;
};

export const unenrollFromCourse = async (userId: string, courseId: string) => {
  const response = await axios.delete(ENROLLMENTS_API, {
    data: { userId, courseId },
  });
  return response.data;
};

export const enrollments = async () => {
  const response = await axios.get(ENROLLMENTS_API); 
  return response.data;
};