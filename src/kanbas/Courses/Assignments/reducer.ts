import { createSlice } from "@reduxjs/toolkit";
import { assignments } from "../../Database";

const initialState = {
    assignments: assignments,
};

const assignmentsSlice = createSlice({
    name: "assignments",
    initialState,
    reducers: {
        addAssignment: (state, { payload }) => {
            const newAssignment = {
                ...payload,
                _id: new Date().getTime().toString(),
            };
            state.assignments.push(newAssignment);
        },
        deleteAssignment: (state, { payload }) => {
            state.assignments = state.assignments.filter(
                (assignment) => assignment._id !== payload
            );
        },
        updateAssignment: (state, { payload }) => {
            state.assignments = state.assignments.map((assignment) =>
                assignment._id === payload._id ? payload : assignment
            );
        },
    },
});

export const { addAssignment, deleteAssignment, updateAssignment } = assignmentsSlice.actions;
export default assignmentsSlice.reducer;