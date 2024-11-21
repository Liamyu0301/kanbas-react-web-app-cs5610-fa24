import { createSlice, PayloadAction } from "@reduxjs/toolkit";
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
  enrollments: [] as any,
};

const enrollmentsSlice = createSlice({
  name: "enrollments",
  initialState,
  reducers: {
    // 添加 setEnrollments 以初始化或更新用户的注册信息
    setEnrollments: (state, action: PayloadAction<Enrollment[]>) => {
      state.enrollments = action.payload;
    },

    enrollInCourse: (state, action) => {
      const { user, course } = action.payload;
      const exists = state.enrollments.some(
        (enrollment) =>
          enrollment.user === user && enrollment.course === course
      );
      if (!exists) {
        const newEnrollment: Enrollment = {
          _id: new Date().getTime().toString(),
          user: user,
          course: course,
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

export const { enrollInCourse, unenrollFromCourse, setEnrollments } = enrollmentsSlice.actions;
export default enrollmentsSlice.reducer;