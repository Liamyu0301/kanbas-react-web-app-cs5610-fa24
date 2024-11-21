import axios from "axios";
const REMOTE_SERVER = process.env.REACT_APP_REMOTE_SERVER;
const ENROLLMENTS_API = `${REMOTE_SERVER}/api/enrollments`;
export const findAllEnrollments = async () => {
    const response = await axios.get(ENROLLMENTS_API);
    return response.data;
};
// client.js
export const enrollStudentInCourse = async (studentId:string, courseId:string) => {
    console.log("Sending POST to enroll with data:", {
      user: studentId,
      course: courseId,
    });
    const response = await axios.post(ENROLLMENTS_API, {
      user: studentId,
      course: courseId,
    });
    return response.data;
  };
  
export const unenrollStudentFromCourse = async (studentId:string, courseId:string) => {
    const response = await axios.delete(ENROLLMENTS_API, {
      data: {
        user: studentId,
        course: courseId,
      },
    });
    return response.data;
  };

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