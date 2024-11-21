import { createSlice } from "@reduxjs/toolkit";


// Initial State
const initialState = {
  enrollments: [] as any[],
};

const enrollmentsSlice = createSlice({
    name: "enrollments",
    initialState,
    reducers: {
      setEnrollments: (state: any, action) => {
        state.enrollments = action.payload;
    },
      enrollInCourse: (state: any, { payload: enrollment }) => {
        console.log("Reducer received ENROLL_IN_COURSE with payload:", enrollment);
        state.enrollments = [...state.enrollments, enrollment] as any;
    },
      unenrollFromCourse: (state, { payload: { userId, courseId } }) => {
        state.enrollments = state.enrollments.filter(
          (enrollment) =>
            !(enrollment.user === userId && enrollment.course === courseId)
        );
      },
    },
  });
  
  export const { enrollInCourse, unenrollFromCourse,setEnrollments } = enrollmentsSlice.actions;
  export default enrollmentsSlice.reducer;