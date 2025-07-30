import { configureStore } from "@reduxjs/toolkit";
import modulesReducer from "./Courses/Modules/reducer";
import accountReducer from "./Account/reducer";

import coursesReducer from "./Courses/reducer";
// Update the path below if 'Assignments/reducer' is actually under './Courses/Assignments/reducer'
import assignmentsReducer from "./Courses/Assignments/reducer";
import enrollmentsReducer from "./Enrollments/reducer";

const store = configureStore({
  reducer: {
    modulesReducer,
    accountReducer,
    assignmentsReducer,
    coursesReducer,
    enrollmentsReducer, 
  },
});
export default store;