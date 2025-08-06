import { useState } from "react";
import { FormControl } from "react-bootstrap";

const REMOTE_SERVER = import.meta.env.VITE_REMOTE_SERVER;

export default function WorkingWithArrays() {
  const [todo, setTodo] = useState({
    id: "1",
    title: "NodeJS Assignment",
    description: "Create a NodeJS server with ExpressJS",
    due: "2021-09-09",
    completed: false,
  });

  const API = `${REMOTE_SERVER}/lab5/todos`;

  return (
    <div id="wd-working-with-arrays">
      <h3>Working with Arrays</h3>
      
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
      <a id="wd-delete-todo" className="btn btn-primary float-end" 
         href={`${API}/${todo.id}/delete`}>
        Delete Todo with ID = {todo.id}
      </a>
      <FormControl 
        defaultValue={todo.id} 
        className="w-50" 
        onChange={(e) => setTodo({ ...todo, id: e.target.value })}
      />
      <hr/>

      <h3>Updating an Item in an Array</h3>
      <a href={`${API}/${todo.id}/title/${todo.title}`} 
         className="btn btn-primary float-end">
        Update Todo
      </a>
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
    </div>
  );
}


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
