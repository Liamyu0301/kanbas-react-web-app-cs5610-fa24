import { createSlice } from "@reduxjs/toolkit";
import { enrollments as initialEnrollments } from "../Database";

interface Enrollment {
  _id: string;
  user: string;
  course: string;
}

interface EnrollmentState {
  enrollments: Enrollment[];
}

const initialState: EnrollmentState = {
  enrollments: [...initialEnrollments],
};

const enrollmentsSlice = createSlice({
  name: "enrollments",
  initialState,
  reducers: {
    enrollInCourse: (state, action) => {
      const { userId, courseId } = action.payload;
      const exists = state.enrollments.some(
        (enrollment) =>
          enrollment.user === userId && enrollment.course === courseId
      );
      if (!exists) {
        const newEnrollment: Enrollment = {
          _id: new Date().getTime().toString(),
          user: userId,
          course: courseId,
        };
        state.enrollments.push(newEnrollment);
      }
    },
    unenrollFromCourse: (state, action) => {
      const { userId, courseId } = action.payload;
      state.enrollments = state.enrollments.filter(
        (enrollment) =>
          !(enrollment.user === userId && enrollment.course === courseId)
      );
    },
  },
});

export const { enrollInCourse, unenrollFromCourse } = enrollmentsSlice.actions;
export default enrollmentsSlice.reducer;
