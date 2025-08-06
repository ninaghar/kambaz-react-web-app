import { useState } from "react";
import { FormControl } from "react-bootstrap";
import * as client from "./client";
import 'bootstrap/dist/css/bootstrap.min.css';

const REMOTE_SERVER = import.meta.env.VITE_REMOTE_SERVER;

export default function WorkingWithArrays() {
  const [todos, setTodos] = useState<any[]>([]);
  const [todo, setTodo] = useState({
    id: "1",
    title: "NodeJS Assignment",
    description: "Create a NodeJS server with ExpressJS",
    due: "2021-09-09",
    completed: false,
  });

  const API = `${REMOTE_SERVER}/lab5/todos`;
//   const [errorMessage, setErrorMessage] = useState<string | null>(null);

  // Test the error display first
//   const testErrorDisplay = () => {
//     setErrorMessage(" This is a test error message! If you see this, error display is working.");
//   };

//   const clearError = () => {
//     setErrorMessage(null);
//   };

  // Your existing updateTodo and deleteTodo with better error handling
//   const updateTodo = async (todo: any) => {
//     try {
//       console.log("Attempting to update todo:", todo);
//       await client.updateTodo(todo);
//       setTodos(todos.map((t) => (t.id === todo.id ? todo : t)));
//       setErrorMessage(null); // Clear any previous errors
//       console.log(" Update successful");
//     } catch (error: any) {
//       console.log(" Update failed:", error);
//       const message = error.response?.data?.message || `Unable to update Todo with ID ${todo.id}`;
//       setErrorMessage(message);
//     }
//   };

//   const deleteTodo = async (todo: any) => {
//     try {
//       console.log("Attempting to delete todo:", todo);
//       await client.deleteTodo(todo);
//       const newTodos = todos.filter((t) => t.id !== todo.id);
//       setTodos(newTodos);
//       setErrorMessage(null); // Clear any previous errors
//       console.log("Delete successful");
//     } catch (error: any) {
//       console.log(" Delete failed:", error);
//       const message = error.response?.data?.message || `Unable to delete Todo with ID ${todo.id}`;
//       setErrorMessage(message);
//     }
//   };

//   const fetchTodos = async () => {
//     try {
//       const fetchedTodos = await client.fetchTodos();
//       setTodos(fetchedTodos);
//       setErrorMessage(null);
//     } catch (error: any) {
//       console.log("Error fetching todos:", error);
//       setErrorMessage("Error fetching todos");
//     }
//   };

  return (
    <div id="wd-working-with-arrays">
        
      <h3>Working with Arrays</h3>
      {/* <div className="alert alert-danger">This is a test alert</div> */}
      {/* ERROR MESSAGE DISPLAY - This is the key part! */}
      {/* {errorMessage && (
        <div id="wd-todo-error-message" className="alert alert-danger mb-2 mt-2">
          {errorMessage}
        </div>
      )} */}

      {/* Test buttons */}
      {/* <div className="mb-3">
        <button className="btn btn-warning me-2" onClick={testErrorDisplay}>
          🧪 Test Error Display
        </button>
        <button className="btn btn-secondary me-2" onClick={clearError}>
          Clear Error
        </button>
        <button className="btn btn-info" onClick={fetchTodos}>
          Load Todos
        </button>
      </div> */}
      <hr/>
      
      <h4>Retrieving Arrays</h4>
      <a id="wd-retrieve-todos" className="btn btn-primary" href={API}>
        Get Todos
      </a>
      <hr/>

      <h4>Retrieving an Item from an Array by ID</h4>
      <a id="wd-retrieve-todo-by-id" className="btn btn-primary float-end" 
         href={`${API}/${todo.id}`}>
        Get Todo by ID
      </a>
      <FormControl 
        id="wd-todo-id" 
        defaultValue={todo.id} 
        className="w-50"
        onChange={(e) => setTodo({ ...todo, id: e.target.value })} 
      />
      <hr />

      <h3>Filtering Array Items</h3>
      <a id="wd-retrieve-completed-todos" className="btn btn-primary"
         href={`${API}?completed=true`}>
        Get Completed Todos
      </a>
      <hr/>

      <h3>Creating new Items in an Array</h3>
      <a id="wd-create-todo" className="btn btn-primary"
         href={`${API}/create`}>
        Create Todo
      </a>
      <hr/>

      <h3>Deleting from an Array</h3>
      <a id="wd-delete-todo" className="btn btn-primary float-end me-2" 
         href={`${API}/${todo.id}/delete`}>
        Delete Todo with ID = {todo.id}
      </a>
      {/* ASYNC DELETE BUTTON FOR ERROR TESTING */}
      {/* <button id="wd-delete-todo-async" className="btn btn-danger float-end" 
              onClick={() => deleteTodo(todo)}>
        Delete Todo (Test Errors)
      </button> */}
      <FormControl 
        defaultValue={todo.id} 
        className="w-50" 
        onChange={(e) => setTodo({ ...todo, id: e.target.value })}
      />
      <hr/>

      <h3>Updating an Item in an Array</h3>
      <a href={`${API}/${todo.id}/title/${todo.title}`} 
         className="btn btn-primary float-end me-2">
        Update Todo
      </a>
      {/* ASYNC UPDATE BUTTON FOR ERROR TESTING */}
      {/* <button id="wd-update-todo-async" className="btn btn-warning float-end"
              onClick={() => updateTodo(todo)}>
        Update Todo (Test Errors)
      </button> */}
      <FormControl 
        defaultValue={todo.id} 
        className="w-25 float-start me-2"
        onChange={(e) => setTodo({ ...todo, id: e.target.value })}
      />
      <FormControl 
        defaultValue={todo.title} 
        className="w-50 float-start"
        onChange={(e) => setTodo({ ...todo, title: e.target.value })}
      />
      <br /><br /><hr />

      <h4>Updating Todo Completed Status</h4>
      <a id="wd-update-todo-completed" className="btn btn-primary float-end"
         href={`${API}/${todo.id}/completed/${todo.completed}`}>
        Update Completed
      </a>
      <div className="form-check w-75">
        <input
          type="checkbox"
          className="form-check-input"
          id="wd-todo-completed"
          checked={todo.completed}
          onChange={(e) => setTodo({ ...todo, completed: e.target.checked })}
        />
        <label className="form-check-label" htmlFor="wd-todo-completed">
          Todo Completed
        </label>
      </div>
      <hr/>

      <h4>Updating Todo Description</h4>
      <a id="wd-update-todo-description" className="btn btn-primary float-end"
         href={`${API}/${todo.id}/description/${todo.description}`}>
        Update Description
      </a>
      <FormControl 
        className="w-75" 
        id="wd-todo-description"
        as="textarea"
        rows={3}
        defaultValue={todo.description}
        onChange={(e) => setTodo({ ...todo, description: e.target.value })}
      />
      <hr/>

      {/* Show loaded todos */}
      {todos.length > 0 && (
        <div>
          <h4>Loaded Todos</h4>
          <ul>
            {todos.map((t) => (
              <li key={t.id}>ID: {t.id} - {t.title}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}






// import { useState } from "react";
// import { FormControl } from "react-bootstrap";
// import * as client from "./client";

// const REMOTE_SERVER = import.meta.env.VITE_REMOTE_SERVER;

// export default function WorkingWithArrays() {
//   const [todos, setTodos] = useState<any[]>([]);
//   const [todo, setTodo] = useState({
//     id: "1",
//     title: "NodeJS Assignment",
//     description: "Create a NodeJS server with ExpressJS",
//     due: "2021-09-09",
//     completed: false,
//   });

//   const API = `${REMOTE_SERVER}/lab5/todos`;
//   const [errorMessage, setErrorMessage] = useState(null);

//   // Fetch all todos
//   const fetchTodos = async () => {
//     try {
//       const todos = await client.fetchTodos();
//       setTodos(todos);
//       setErrorMessage(null);
//     } catch (error: any) {
//       console.log(error);
//       setErrorMessage(error.response?.data?.message || "Error fetching todos");
//     }
//   };

//   // Create a new todo
//   const createTodo = async () => {
//     try {
//       const newTodo = await client.createTodo();
//       setTodos([...todos, newTodo]);
//       setErrorMessage(null);
//     } catch (error: any) {
//       console.log(error);
//       setErrorMessage(error.response?.data?.message || "Error creating todo");
//     }
//   };

//   // Update todo with error handling
//   const updateTodo = async (todo: any) => {
//     try {
//       await client.updateTodo(todo);
//       setTodos(todos.map((t) => (t.id === todo.id ? todo : t)));
//       setErrorMessage(null); // Clear any previous errors
//     } catch (error: any) {
//       setErrorMessage(error.response.data.message);
//     }
//   };

//   // Delete todo with error handling
//   const deleteTodo = async (todo: any) => {
//     try {
//       await client.deleteTodo(todo);
//       const newTodos = todos.filter((t) => t.id !== todo.id);
//       setTodos(newTodos);
//       setErrorMessage(null); // Clear any previous errors
//     } catch (error: any) {
//       console.log(error);
//       setErrorMessage(error.response.data.message);
//     }
//   };

//   return (
//     <div id="wd-working-with-arrays">
//       <h3>Working with Arrays</h3>
      
//       {/* ERROR MESSAGE DISPLAY */}
//       {errorMessage && (
//         <div id="wd-todo-error-message" className="alert alert-danger mb-2 mt-2">
//           {errorMessage}
//         </div>
//       )}
      
//       <h4>Retrieving Arrays</h4>
//       <a id="wd-retrieve-todos" className="btn btn-primary me-2" href={API}>
//         Get Todos
//       </a>
//       {/* Add async button for testing */}
//       <button id="wd-retrieve-todos-async" className="btn btn-success" onClick={fetchTodos}>
//         Get Todos Async
//       </button>
//       <hr/>

//       <h4>Retrieving an Item from an Array by ID</h4>
//       <a id="wd-retrieve-todo-by-id" className="btn btn-primary float-end" 
//          href={`${API}/${todo.id}`}>
//         Get Todo by ID
//       </a>
//       <FormControl 
//         id="wd-todo-id" 
//         defaultValue={todo.id} 
//         className="w-50"
//         onChange={(e) => setTodo({ ...todo, id: e.target.value })} 
//       />
//       <hr />

//       <h3>Filtering Array Items</h3>
//       <a id="wd-retrieve-completed-todos" className="btn btn-primary"
//          href={`${API}?completed=true`}>
//         Get Completed Todos
//       </a>
//       <hr/>

//       <h3>Creating new Items in an Array</h3>
//       <a id="wd-create-todo" className="btn btn-primary me-2"
//          href={`${API}/create`}>
//         Create Todo
//       </a>
//       {/* Add async button for testing */}
//       <button id="wd-create-todo-async" className="btn btn-success" onClick={createTodo}>
//         Create Todo Async
//       </button>
//       <hr/>

//       <h3>Deleting from an Array</h3>
//       <a id="wd-delete-todo" className="btn btn-primary float-end me-2" 
//          href={`${API}/${todo.id}/delete`}>
//         Delete Todo with ID = {todo.id}
//       </a>
//       {/* Add async button for testing errors */}
//       <button id="wd-delete-todo-async" className="btn btn-danger float-end" 
//               onClick={() => deleteTodo(todo)}>
//         Delete Todo Async
//       </button>
//       <FormControl 
//         defaultValue={todo.id} 
//         className="w-50" 
//         onChange={(e) => setTodo({ ...todo, id: e.target.value })}
//       />
//       <hr/>

//       <h3>Updating an Item in an Array</h3>
//       <a href={`${API}/${todo.id}/title/${todo.title}`} 
//          className="btn btn-primary float-end me-2">
//         Update Todo
//       </a>
//       {/* Add async button for testing errors */}
//       <button id="wd-update-todo-async" className="btn btn-warning float-end"
//               onClick={() => updateTodo(todo)}>
//         Update Todo Async
//       </button>
//       <FormControl 
//         defaultValue={todo.id} 
//         className="w-25 float-start me-2"
//         onChange={(e) => setTodo({ ...todo, id: e.target.value })}
//       />
//       <FormControl 
//         defaultValue={todo.title} 
//         className="w-50 float-start"
//         onChange={(e) => setTodo({ ...todo, title: e.target.value })}
//       />
//       <br /><br /><hr />

//       <h4>Updating Todo Completed Status</h4>
//       <a id="wd-update-todo-completed" className="btn btn-primary float-end"
//          href={`${API}/${todo.id}/completed/${todo.completed}`}>
//         Update Completed
//       </a>
//       <div className="form-check w-75">
//         <input
//           type="checkbox"
//           className="form-check-input"
//           id="wd-todo-completed"
//           checked={todo.completed}
//           onChange={(e) => setTodo({ ...todo, completed: e.target.checked })}
//         />
//         <label className="form-check-label" htmlFor="wd-todo-completed">
//           Todo Completed
//         </label>
//       </div>
//       <hr/>

//       <h4>Updating Todo Description</h4>
//       <a id="wd-update-todo-description" className="btn btn-primary float-end"
//          href={`${API}/${todo.id}/description/${todo.description}`}>
//         Update Description
//       </a>
//       <FormControl 
//         className="w-75" 
//         id="wd-todo-description"
//         as="textarea"
//         rows={3}
//         defaultValue={todo.description}
//         onChange={(e) => setTodo({ ...todo, description: e.target.value })}
//       />
//       <hr/>

//       {/* DISPLAY CURRENT TODOS FOR TESTING */}
//       <h4>Current Todos</h4>
//       <ul className="list-group">
//         {todos.map((todoItem) => (
//           <li key={todoItem.id} className="list-group-item d-flex justify-content-between align-items-center">
//             <div>
//               <strong>{todoItem.title}</strong> - {todoItem.description}
//               <br />
//               <small>ID: {todoItem.id} | Completed: {todoItem.completed ? "Yes" : "No"}</small>
//             </div>
//             <div>
//               <button 
//                 className="btn btn-warning btn-sm me-2" 
//                 onClick={() => updateTodo(todoItem)}
//               >
//                 Update
//               </button>
//               <button 
//                 className="btn btn-danger btn-sm" 
//                 onClick={() => deleteTodo(todoItem)}
//               >
//                 Delete
//               </button>
//             </div>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// }






// import { useState } from "react";
// import { FormControl } from "react-bootstrap";
// import * as client from "./client";

// const REMOTE_SERVER = import.meta.env.VITE_REMOTE_SERVER;

// export default function WorkingWithArrays() {
//     const [todos, setTodos] = useState<any[]>([]);
//     const [todo, setTodo] = useState({
//     id: "1",
//     title: "NodeJS Assignment",
//     description: "Create a NodeJS server with ExpressJS",
//     due: "2021-09-09",
//     completed: false,
//   });

//   const API = `${REMOTE_SERVER}/lab5/todos`;
// const [errorMessage, setErrorMessage] = useState(null);
//   const updateTodo = async (todo: any) => {
//     try {
//       await client.updateTodo(todo);
//       setTodos(todos.map((t) => (t.id === todo.id ? todo : t)));
//     } catch (error: any) {
//       setErrorMessage(error.response.data.message);
//     }
//   };
//   const deleteTodo = async (todo: any) => {
//     try {
//       await client.deleteTodo(todo);
//       const newTodos = todos.filter((t) => t.id !== todo.id);
//       setTodos(newTodos);
//     } catch (error: any) {
//       console.log(error);
//       setErrorMessage(error.response.data.message);
//     }  };


  

//   return (
//     <div id="wd-working-with-arrays">
//       <h3>Working with Arrays</h3>
//       {/* ERROR MESSAGE DISPLAY - ADD THIS */}
//       {errorMessage && (
//         <div id="wd-todo-error-message" className="alert alert-danger mb-2 mt-2">
//           {errorMessage}
//         </div>
//       )}

//       <h4>Retrieving Arrays</h4>
//       <a id="wd-retrieve-todos" className="btn btn-primary" href={API}>
//         Get Todos
//       </a>
//       <hr/>

//       <h4>Retrieving an Item from an Array by ID</h4>
//       <a id="wd-retrieve-todo-by-id" className="btn btn-primary float-end" 
//          href={`${API}/${todo.id}`}>
//         Get Todo by ID
//       </a>
//       <FormControl 
//         id="wd-todo-id" 
//         defaultValue={todo.id} 
//         className="w-50"
//         onChange={(e) => setTodo({ ...todo, id: e.target.value })} 
//       />
//       <hr />

//       <h3>Filtering Array Items</h3>
//       <a id="wd-retrieve-completed-todos" className="btn btn-primary"
//          href={`${API}?completed=true`}>
//         Get Completed Todos
//       </a>
//       <hr/>

//       <h3>Creating new Items in an Array</h3>
//       <a id="wd-create-todo" className="btn btn-primary"
//          href={`${API}/create`}>
//         Create Todo
//       </a>
//       <hr/>

//       <h3>Deleting from an Array</h3>
//       <a id="wd-delete-todo" className="btn btn-primary float-end" 
//          href={`${API}/${todo.id}/delete`}>
//         Delete Todo with ID = {todo.id}
//       </a>
//       <FormControl 
//         defaultValue={todo.id} 
//         className="w-50" 
//         onChange={(e) => setTodo({ ...todo, id: e.target.value })}
//       />
//       <hr/>

//       <h3>Updating an Item in an Array</h3>
//       <a href={`${API}/${todo.id}/title/${todo.title}`} 
//          className="btn btn-primary float-end">
//         Update Todo
//       </a>
//       <FormControl 
//         defaultValue={todo.id} 
//         className="w-25 float-start me-2"
//         onChange={(e) => setTodo({ ...todo, id: e.target.value })}
//       />
//       <FormControl 
//         defaultValue={todo.title} 
//         className="w-50 float-start"
//         onChange={(e) => setTodo({ ...todo, title: e.target.value })}
//       />
//       <br /><br /><hr />

//       <h4>Updating Todo Completed Status</h4>
//       <a id="wd-update-todo-completed" className="btn btn-primary float-end"
//          href={`${API}/${todo.id}/completed/${todo.completed}`}>
//         Update Completed
//       </a>
//       <div className="form-check w-75">
//         <input
//           type="checkbox"
//           className="form-check-input"
//           id="wd-todo-completed"
//           checked={todo.completed}
//           onChange={(e) => setTodo({ ...todo, completed: e.target.checked })}
//         />
//         <label className="form-check-label" htmlFor="wd-todo-completed">
//           Todo Completed
//         </label>
//       </div>
//       <hr/>

//       <h4>Updating Todo Description</h4>
//       <a id="wd-update-todo-description" className="btn btn-primary float-end"
//          href={`${API}/${todo.id}/description/${todo.description}`}>
//         Update Description
//       </a>
//       <FormControl 
//         className="w-75" 
//         id="wd-todo-description"
//         as="textarea"
//         rows={3}
//         defaultValue={todo.description}
//         onChange={(e) => setTodo({ ...todo, description: e.target.value })}
//       />
//       <hr/>
//     </div>
//   );
// }


// import { useState } from "react";
// import { FormControl } from "react-bootstrap";
// import * as client from "./client";

// const REMOTE_SERVER = import.meta.env.VITE_REMOTE_SERVER;

// export default function WorkingWithArrays() {
//   const [errorMessage, setErrorMessage] = useState<string | null>(null);  
  
//   // Fixed: Changed from single todo object to todo state for form inputs
//   const [todo, setTodo] = useState({
//     id: "1",
//     title: "NodeJS Assignment",
//     description: "Create a NodeJS server with ExpressJS",
//     due: "2021-09-09",
//     completed: false,
//   });

//   // Added: todos array state for managing the list of todos
//   const [todos, setTodos] = useState<any[]>([]);

//   const API = `${REMOTE_SERVER}/lab5/todos`;

//   const updateTodo = async (todoToUpdate: any) => {
//     try {
//       await client.updateTodo(todoToUpdate);
//       setTodos(todos.map((t) => (t.id === todoToUpdate.id ? todoToUpdate : t)));
//     } catch (error: any) {
//       setErrorMessage(error.response.data.message);
//     }
//   };

//   const deleteTodo = async (todoToDelete: any) => {
//     try {
//       await client.deleteTodo(todoToDelete);
//       const newTodos = todos.filter((t) => t.id !== todoToDelete.id);
//       setTodos(newTodos);
//     } catch (error: any) {
//       console.log(error);
//       setErrorMessage(error.response.data.message);
//     }
//   };

//   return (
//     <div id="wd-working-with-arrays">
//       <h3>Working with Arrays</h3>
      
//       {/* Error Message Display */}
//       {errorMessage && (
//         <div className="alert alert-danger" role="alert">
//           {errorMessage}
//         </div>
//       )}

//       <h4>Retrieving Arrays</h4>
//       <a id="wd-retrieve-todos" className="btn btn-primary" href={API}>
//         Get Todos
//       </a>
//       <hr/>

//       <h4>Retrieving an Item from an Array by ID</h4>
//       <a id="wd-retrieve-todo-by-id" className="btn btn-primary float-end" 
//          href={`${API}/${todo.id}`}>
//         Get Todo by ID
//       </a>
//       <FormControl 
//         id="wd-todo-id" 
//         defaultValue={todo.id} 
//         className="w-50"
//         onChange={(e) => setTodo({ ...todo, id: e.target.value })} 
//       />
//       <hr />

//       <h3>Filtering Array Items</h3>
//       <a id="wd-retrieve-completed-todos" className="btn btn-primary"
//          href={`${API}?completed=true`}>
//         Get Completed Todos
//       </a>
//       <hr/>

//       <h3>Creating new Items in an Array</h3>
//       <a id="wd-create-todo" className="btn btn-primary"
//          href={`${API}/create`}>
//         Create Todo
//       </a>
//       <hr/>

//       <h3>Deleting from an Array</h3>
//       <a id="wd-delete-todo" className="btn btn-primary float-end" 
//          href={`${API}/${todo.id}/delete`}>
//         Delete Todo with ID = {todo.id}
//       </a>
//       <FormControl 
//         defaultValue={todo.id} 
//         className="w-50" 
//         onChange={(e) => setTodo({ ...todo, id: e.target.value })}
//       />
//       <hr/>

//       <h3>Updating an Item in an Array</h3>
//       <a href={`${API}/${todo.id}/title/${todo.title}`} 
//          className="btn btn-primary float-end">
//         Update Todo
//       </a>
//       <FormControl 
//         defaultValue={todo.id} 
//         className="w-25 float-start me-2"
//         onChange={(e) => setTodo({ ...todo, id: e.target.value })}
//       />
//       <FormControl 
//         defaultValue={todo.title} 
//         className="w-50 float-start"
//         onChange={(e) => setTodo({ ...todo, title: e.target.value })}
//       />
//       <br /><br /><hr />

//       {/* Updating Todo Completed Status */}
//       <h4>Updating Todo Completed Status</h4>
//       <a id="wd-update-todo-completed" className="btn btn-primary float-end"
//          href={`${API}/${todo.id}/completed/${todo.completed}`}>
//         Update Completed
//       </a>
//       <div className="form-check w-75">
//         <input
//           type="checkbox"
//           className="form-check-input"
//           id="wd-todo-completed"
//           checked={todo.completed}
//           onChange={(e) => setTodo({ ...todo, completed: e.target.checked })}
//         />
//         <label className="form-check-label" htmlFor="wd-todo-completed">
//           Todo Completed
//         </label>
//       </div>
//       <hr/>

//       {/* Updating Todo Description */}
//       <h4>Updating Todo Description</h4>
//       <a id="wd-update-todo-description" className="btn btn-primary float-end"
//          href={`${API}/${todo.id}/description/${todo.description}`}>
//         Update Description
//       </a>
//       <FormControl 
//         className="w-75" 
//         id="wd-todo-description"
//         as="textarea"
//         rows={3}
//         defaultValue={todo.description}
//         onChange={(e) => setTodo({ ...todo, description: e.target.value })}
//       />
//       <hr/>
//     </div>
//   );
// }

// const editTodo = (todo: any) => {
//     const updatedTodos = todos.map(
//       (t) => t.id === todo.id ? { ...todo, editing: true } : t );
//     setTodos(updatedTodos);
//   };
//   const updateTodo = async (todo: any) => {
//     await client.updateTodo(todo);
//     setTodos(todos.map((t) => (t.id === todo.id ? todo : t)));
//   };


// import  { useState } from "react";
// import { FormControl } from "react-bootstrap";

// const REMOTE_SERVER = import.meta.env.VITE_REMOTE_SERVER;
// export default function WorkingWithArrays() {
//     const [errorMessage, setErrorMessage] = useState(null);  
//     const [todo, setTodo] = useState({
//     id: "1",
//     title: "NodeJS Assignment",
//     description: "Create a NodeJS server with ExpressJS",
//     due: "2021-09-09",
//     completed: false,
// });
//   const API = `${REMOTE_SERVER}/lab5/todos`;

// //   const updateTodo = async (todo: any) => {
// //     try {
// //       await client.updateTodo(todo);
// //       setTodos(todos.map((t) => (t.id === todo.id ? todo : t)));
// //     } catch (error: any) {
// //       setErrorMessage(error.response.data.message);
// //     }
// //   };
// // const deleteTodo = async (todo: any) => {
// //     try {
// //       await client.deleteTodo(todo);
// //       const newTodos = todos.filter((t) => t.id !== todo.id);
// //       setTodos(newTodos);
// //     } catch (error: any) {
// //       console.log(error);
// //       setErrorMessage(error.response.data.message);
// //     }  };  
  

//   return (
//     <div id="wd-working-with-arrays">
//       <h3>Working with Arrays</h3>
//       <h4>Retrieving Arrays</h4>
//       <a id="wd-retrieve-todos" className="btn btn-primary" href={API}>
//         Get Todos </a><hr/>
//        <h4>Retrieving an Item from an Array by ID</h4>
//       <a id="wd-retrieve-todo-by-id" className="btn btn-primary float-end" href={`${API}/${todo.id}`}>
//         Get Todo by ID
//       </a>
//       <FormControl id="wd-todo-id" defaultValue={todo.id} className="w-50"
//         onChange={(e) => setTodo({ ...todo, id: e.target.value })} />
//       <hr />
//         <h3>Filtering Array Items</h3>
//         <a id="wd-retrieve-completed-todos" className="btn btn-primary"
//             href={`${API}?completed=true`}>
//             Get Completed Todos
//         </a><hr/>
//         <h3>Creating new Items in an Array</h3>
//         <a id="wd-retrieve-completed-todos" className="btn btn-primary"
//             href={`${API}/create`}>
//             Create Todo
//         </a><hr/>
//         <h3>Deleting from an Array</h3>
//         <a id="wd-retrieve-completed-todos" className="btn btn-primary float-end" href={`${API}/${todo.id}/delete`}>
//             Delete Todo with ID = {todo.id} </a>
//         <FormControl defaultValue={todo.id} className="w-50" onChange={(e) => setTodo({ ...todo, id: e.target.value })}/><hr/>
//         <h3>Updating an Item in an Array</h3>
//       <a href={`${API}/${todo.id}/title/${todo.title}`} className="btn btn-primary float-end">
//         Update Todo</a>
//       <FormControl defaultValue={todo.id} className="w-25 float-start me-2"
//         onChange={(e) => setTodo({ ...todo, id: e.target.value })}/>
//       <FormControl defaultValue={todo.title} className="w-50 float-start"
//              onChange={(e) => setTodo({ ...todo, title: e.target.value }) }/>
//       <br /><br /><hr />

//        {/* NEW SECTION: Updating Todo Completed Status */}
//       <h4>Updating Todo Completed Status</h4>
//       <a id="wd-update-todo-completed" className="btn btn-primary float-end"
//          href={`${API}/${todo.id}/completed/${todo.completed}`}>
//         Update Completed
//       </a>
//       <div className="form-check w-75">
//         <input
//           type="checkbox"
//           className="form-check-input"
//           id="wd-todo-completed"
//           checked={todo.completed}
//           onChange={(e) => setTodo({ ...todo, completed: e.target.checked })}
//         />
//         <label className="form-check-label" htmlFor="wd-todo-completed">
//           Todo Completed
//         </label>
//       </div>
//       <hr/>

//       {/* NEW SECTION: Updating Todo Description */}
//       <h4>Updating Todo Description</h4>
//       <a id="wd-update-todo-description" className="btn btn-primary float-end"
//          href={`${API}/${todo.id}/description/${todo.description}`}>
//         Update Description
//       </a>
//       <FormControl className="w-75" id="wd-todo-description"
//         as="textarea"
//         rows={3}
//         defaultValue={todo.description}
//         onChange={(e) => setTodo({ ...todo, description: e.target.value })}/>
//       <hr/>
//     </div>
// );}
