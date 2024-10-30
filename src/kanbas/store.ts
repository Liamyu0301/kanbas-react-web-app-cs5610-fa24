import { configureStore }
  from "@reduxjs/toolkit";
import modulesReducer
  from "./Courses/Modules/reducer";
import accountReducer from "./Account/reducer";
import enrollmentsReducer from "./enrollment/reducer";
import assignmentsReducer from "./Courses/Assignments/reducer";
const store = configureStore({
  reducer: {
    modulesReducer,
    accountReducer,
    enrollmentsReducer,
    assignmentsReducer
  },
});
export default store;