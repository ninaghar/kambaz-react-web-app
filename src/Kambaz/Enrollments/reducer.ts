import { createSlice } from "@reduxjs/toolkit";
// import { enrollments } from "../Database";

// create reducer's initial state with
// default enrollments copied from database
const initialState = {
  // enrollments: enrollments,
  enrollments: [],
};

const enrollmentsSlice = createSlice({
  name: "enrollments",
  initialState,
  reducers: {
    setEnrollments: (state, action) => {
      state.enrollments = action.payload;
    },
    enrollUser: (state, { payload: { userId, courseId } }) => {
      const newEnrollment = {
        _id: new Date().getTime().toString(),
        user: userId,
        course: courseId,
      };
      state.enrollments = [...state.enrollments, newEnrollment] as any;
    },
    unenrollUser: (state, { payload: { userId, courseId } }) => {
      state.enrollments = state.enrollments.filter(
        (enrollment: any) =>
          !(enrollment.user === userId && enrollment.course === courseId)
      ) as any;
    },
  },
});
// create slice
// const enrollmentsSlice = createSlice({
//   // name the slice
//   name: "enrollments",
//   // set initial state
//   initialState,
//   // declare reducer functions
//   reducers: {
//     setEnrollments: (state, action) => {
//       state.enrollments = action.payload;
//     },
//     enrollUser: (state, { payload: { userId, courseId } }) => {
//       // Check if enrollment already exists
//       const existingEnrollment = state.enrollments.find(
//         (e: any) => e.user === userId && e.course === courseId
//       );
      
//       // Only add if doesn't exist
//       if (!existingEnrollment) {
//         state.enrollments = [
//           ...state.enrollments,
//           { user: userId, course: courseId }
//         ] as any;
//       }
//     },

//     unenrollUser: (state, { payload: { userId, courseId } }) => {
//       // Remove enrollment
//       state.enrollments = state.enrollments.filter(
//         (e: any) => !(e.user === userId && e.course === courseId)
//       );
//     },

//     setEnrollments: (state, { payload: enrollments }) => {
//       state.enrollments = enrollments;
//     },
//   },
// });

// export all reducer functions
export const { 
  enrollUser, 
  unenrollUser, 
  setEnrollments 
} = enrollmentsSlice.actions;

// export reducer
export default enrollmentsSlice.reducer;