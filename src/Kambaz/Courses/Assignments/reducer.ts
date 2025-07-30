import { createSlice } from "@reduxjs/toolkit";
import { assignments } from "../../Database";
import { v4 as uuidv4 } from "uuid";

// create reducer's initial state with
// default assignments copied from database
const initialState = {
  assignments: assignments,
};

// create slice
const assignmentsSlice = createSlice({
  // name the slice
  name: "assignments",
  // set initial state
  initialState,
  // declare reducer functions
  reducers: {
    addAssignment: (state, { payload: assignment }) => {
      // new assignment is in action.payload
      const newAssignment: any = {
        _id: uuidv4(),
        title: assignment.title,
        course: assignment.course,
        description: assignment.description || "",
        points: assignment.points || 100,
        dueDate: assignment.dueDate || new Date().toISOString().split('T')[0],
        availableFrom: assignment.availableFrom || new Date().toISOString().split('T')[0],
        availableUntil: assignment.availableUntil || new Date().toISOString().split('T')[0],
        // Support legacy fields for backward compatibility
        due: assignment.dueDate || assignment.due || new Date().toISOString().split('T')[0],
        available: assignment.availableFrom || assignment.available || new Date().toISOString().split('T')[0],
      };
      // update assignments in state adding new assignment
      // at end of array. Override _id with uuid
      state.assignments = [...state.assignments, newAssignment] as any;
    },

    deleteAssignment: (state, { payload: assignmentId }) => {
      // assignment's ID to delete is in action.payload
      // filter out assignment to delete
      state.assignments = state.assignments.filter(
        (a: any) => a._id !== assignmentId
      );
    },

    updateAssignment: (state, { payload: assignment }) => {
      // assignment to update is in action.payload
      // replace assignment whose ID matches action.payload._id
      state.assignments = state.assignments.map((a: any) =>
        a._id === assignment._id ? assignment : a
      ) as any;
    },

    editAssignment: (state, { payload: assignmentId }) => {
      // select the assignment to edit
      state.assignments = state.assignments.map((a: any) =>
        a._id === assignmentId ? { ...a, editing: true } : a
      ) as any;
    },

    setAssignments: (state, { payload: assignments }) => {
      state.assignments = assignments;
    },
  },
});

// export all reducer functions
export const { 
  addAssignment, 
  deleteAssignment, 
  updateAssignment, 
  editAssignment,
  setAssignments 
} = assignmentsSlice.actions;

// export reducer
export default assignmentsSlice.reducer;




// import { createSlice } from "@reduxjs/toolkit";
// import { assignments } from "../../Database";
// import { v4 as uuidv4 } from "uuid";

// const initialState = {
//   assignments: assignments,
// };

// const assignmentsSlice = createSlice({
//   name: "assignments",
//   initialState,
//   reducers: {
//     addAssignment: (state, { payload: assignment }) => {
//       const newAssignment: any = {
//         _id: uuidv4(),
//         title: assignment.title,
//         course: assignment.course,
//         description: assignment.description || "",
//         points: assignment.points || 100,
//         dueDate: assignment.dueDate || new Date().toISOString().split('T')[0],
//         availableFrom: assignment.availableFrom || new Date().toISOString().split('T')[0],
//         availableUntil: assignment.availableUntil || new Date().toISOString().split('T')[0],
//       };
//       state.assignments = [...state.assignments, newAssignment] as any;
//     },
    
//     deleteAssignment: (state, { payload: assignmentId }) => {
//       state.assignments = state.assignments.filter(
//         (a: any) => a._id !== assignmentId
//       );
//     },
    
//     updateAssignment: (state, { payload: assignment }) => {
//       state.assignments = state.assignments.map((a: any) =>
//         a._id === assignment._id ? assignment : a
//       ) as any;
//     },
    
//     editAssignment: (state, { payload: assignmentId }) => {
//       state.assignments = state.assignments.map((a: any) =>
//         a._id === assignmentId ? { ...a, editing: true } : a
//       ) as any;
//     },
    
//     setAssignments: (state, { payload: assignments }) => {
//       state.assignments = assignments;
//     },
//   },
// });

// export const { 
//   addAssignment, 
//   deleteAssignment, 
//   updateAssignment, 
//   editAssignment,
//   setAssignments 
// } = assignmentsSlice.actions;

// export default assignmentsSlice.reducer;