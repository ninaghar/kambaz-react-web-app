import { createSlice } from "@reduxjs/toolkit";
import { courses } from "../Database";
import { v4 as uuidv4 } from "uuid";

// create reducer's initial state with
// default courses copied from database
const initialState = {
  courses: courses,
};

// create slice
const coursesSlice = createSlice({
  // name the slice
  name: "courses",
  // set initial state
  initialState,
  // declare reducer functions
  reducers: {
    addCourse: (state, { payload: course }) => {
      // new course is in action.payload
      const newCourse: any = {
        _id: uuidv4(),
        name: course.name,
        number: course.number,
        startDate: course.startDate,
        endDate: course.endDate,
        description: course.description,
        image: course.image || "/images/reactjs.jpg",
      };
      // update courses in state adding new course
      // at end of array. Override _id with uuid
      state.courses = [...state.courses, newCourse] as any;
    },

    deleteCourse: (state, { payload: courseId }) => {
      // course's ID to delete is in action.payload
      // filter out course to delete
      state.courses = state.courses.filter(
        (c: any) => c._id !== courseId
      );
    },

    updateCourse: (state, { payload: course }) => {
      // course to update is in action.payload
      // replace course whose ID matches action.payload._id
      state.courses = state.courses.map((c: any) =>
        c._id === course._id ? course : c
      ) as any;
    },

    editCourse: (state, { payload: courseId }) => {
      // select the course to edit
      state.courses = state.courses.map((c: any) =>
        c._id === courseId ? { ...c, editing: true } : c
      ) as any;
    },

    setCourses: (state, { payload: courses }) => {
      state.courses = courses;
    },
  },
});

// export all reducer functions
export const { 
  addCourse, 
  deleteCourse, 
  updateCourse, 
  editCourse,
  setCourses 
} = coursesSlice.actions;

// export reducer
export default coursesSlice.reducer;