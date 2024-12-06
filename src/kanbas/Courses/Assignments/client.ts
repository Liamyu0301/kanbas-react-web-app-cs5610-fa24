import axios from "axios";
const REMOTE_SERVER = process.env.REACT_APP_REMOTE_SERVER;
const COURSES_API = `${REMOTE_SERVER}/api/courses`; 

export const deleteAssignment = async (assignmentId: string, courseId: string) => {
  const response = await axios.delete(`${COURSES_API}/${courseId}/assignments/${assignmentId}`);
  return response.data;
};

export const updateAssignment = async (assignment: any) => {
  const response = await axios.put(
    `${COURSES_API}/${assignment.course}/assignments/${assignment._id}`,
    assignment
  );
  return response.data;
};