import { createSlice } from "@reduxjs/toolkit";
import { enrollments } from "../Database";

// create reducer's initial state with
// default enrollments copied from database
const initialState = {
  enrollments: enrollments,
};

// create slice
const enrollmentsSlice = createSlice({
  // name the slice
  name: "enrollments",
  // set initial state
  initialState,
  // declare reducer functions
  reducers: {
    enrollUser: (state, { payload: { userId, courseId } }) => {
      // Check if enrollment already exists
      const existingEnrollment = state.enrollments.find(
        (e: any) => e.user === userId && e.course === courseId
      );
      
      // Only add if doesn't exist
      if (!existingEnrollment) {
        state.enrollments = [
          ...state.enrollments,
          { user: userId, course: courseId }
        ] as any;
      }
    },

    unenrollUser: (state, { payload: { userId, courseId } }) => {
      // Remove enrollment
      state.enrollments = state.enrollments.filter(
        (e: any) => !(e.user === userId && e.course === courseId)
      );
    },

    setEnrollments: (state, { payload: enrollments }) => {
      state.enrollments = enrollments;
    },
  },
});

// export all reducer functions
export const { 
  enrollUser, 
  unenrollUser, 
  setEnrollments 
} = enrollmentsSlice.actions;

// export reducer
export default enrollmentsSlice.reducer;