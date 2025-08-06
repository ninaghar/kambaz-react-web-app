import { FaPencil } from "react-icons/fa6";
import { TiDelete } from "react-icons/ti";
import { FaPlusCircle } from "react-icons/fa";
import { FaTrash } from "react-icons/fa";
import { useState, useEffect } from "react";
import * as client from "./client";
import { FormControl, ListGroup } from "react-bootstrap";

export default function WorkingWithArraysAsynchronously() {
  const [todos, setTodos] = useState<any[]>([]);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const fetchTodos = async () => {
    try {
      const todos = await client.fetchTodos();
      setTodos(todos);
      setErrorMessage(null); // Clear errors on success
    } catch (error: any) {
      console.log("Error fetching todos:", error);
      setErrorMessage(error.response?.data?.message || "Error fetching todos");
    }
  };

  const createTodo = async () => {
    try {
      const todos = await client.createTodo();
      setTodos(todos);
      setErrorMessage(null);
    } catch (error: any) {
      console.log("Error creating todo:", error);
      setErrorMessage(error.response?.data?.message || "Error creating todo");
    }
  };

  const postTodo = async () => {
    try {
      const newTodo = await client.postTodo({ 
        title: "New Posted Todo", 
        completed: false 
      });
      setTodos([...todos, newTodo]);
      setErrorMessage(null);
    } catch (error: any) {
      console.log("Error posting todo:", error);
      setErrorMessage(error.response?.data?.message || "Error posting todo");
    }
  };

  const removeTodo = async (todo: any) => {
    try {
      const updatedTodos = await client.removeTodo(todo);
      setTodos(updatedTodos);
      setErrorMessage(null);
    } catch (error: any) {
      console.log("Error removing todo:", error);
      setErrorMessage(error.response?.data?.message || "Error removing todo");
    }
  };

  const deleteTodo = async (todo: any) => {
    try {
      console.log(" Attempting to delete todo:", todo);
      await client.deleteTodo(todo);
      const newTodos = todos.filter((t) => t.id !== todo.id);
      setTodos(newTodos);
      setErrorMessage(null);
      console.log("Delete successful");
    } catch (error: any) {
      console.log(" Delete failed:", error);
      const message = error.response?.data?.message || `Unable to delete Todo with ID ${todo.id}`;
      setErrorMessage(message);
    }
  };

  const editTodo = (todo: any) => {
    const updatedTodos = todos.map(
      (t) => t.id === todo.id ? { ...todo, editing: true } : t
    );
    setTodos(updatedTodos);
  };

  const updateTodo = async (todo: any) => {
    try {
      console.log("🔄 Attempting to update todo:", todo);
      await client.updateTodo(todo);
      setTodos(todos.map((t) => (t.id === todo.id ? todo : t)));
      setErrorMessage(null);
      console.log(" Update successful");
    } catch (error: any) {
      console.log(" Update failed:", error);
      const message = error.response?.data?.message || `Unable to update Todo with ID ${todo.id}`;
      setErrorMessage(message);
    }
  };

  // Test function to verify error display works
//   const testError = () => {
//     setErrorMessage(" Test Error: This proves error display is working!");
//   };

  useEffect(() => {
    fetchTodos();
  }, []);

  return (
    <div id="wd-asynchronous-arrays">
      <h3>Working with Arrays Asynchronously</h3>
      
      {/* ERROR MESSAGE DISPLAY */}
      {errorMessage && (
        <div id="wd-todo-error-message" className="alert alert-danger mb-2 mt-2">
          {errorMessage}
        </div>
      )}

      {/* Test Button */}
      {/* <button className="btn btn-warning mb-3" onClick={testError}>
         Test Error Display
      </button> */}

      <h4>
        Todos
        <FaPlusCircle 
          onClick={createTodo} 
          className="text-success float-end fs-3"
          id="wd-create-todo" 
        />
        <FaPlusCircle 
          onClick={postTodo} 
          className="text-primary float-end fs-3 me-3" 
          id="wd-post-todo" 
        />
      </h4>

      <ListGroup>
        {todos.map((todo) => (
          <ListGroup.Item key={todo.id}>
            <FaTrash 
              onClick={() => removeTodo(todo)}
              className="text-danger float-end mt-1" 
              id="wd-remove-todo"
            />
            <TiDelete 
              onClick={() => deleteTodo(todo)} 
              className="text-danger float-end me-2 fs-3" 
              id="wd-delete-todo" 
            />
            <FaPencil 
              onClick={() => editTodo(todo)} 
              className="text-primary float-end me-2 mt-1" 
            />
            
            <input 
              type="checkbox" 
              className="form-check-input me-2 float-start"
              defaultChecked={todo.completed}
              onChange={(e) => updateTodo({ ...todo, completed: e.target.checked })} 
            />
            
            {!todo.editing ? (
              <span style={{ textDecoration: todo.completed ? "line-through" : "none" }}>
                {todo.title}
              </span>
            ) : (
              <FormControl 
                className="w-50 float-start" 
                defaultValue={todo.title}
                onKeyDown={(e) => {
                  if (e.key === "Enter") {
                    updateTodo({ ...todo, editing: false });
                  }
                }}
                onChange={(e) => updateTodo({ ...todo, title: e.target.value })}
              />
            )}
          </ListGroup.Item>
        ))}
      </ListGroup>
      <hr />

      {/* Debug info */}
      {/* <div className="mt-3">
        <p><strong>Current Error State:</strong> {errorMessage || "No error"}</p>
        <p><strong>Todos Count:</strong> {todos.length}</p>
      </div> */}
    </div>
  );
}

// import { FaPencil } from "react-icons/fa6";
// import { TiDelete } from "react-icons/ti";
// import { FaPlusCircle } from "react-icons/fa";
// import { FaTrash } from "react-icons/fa";
// import { useState, useEffect } from "react";
// import * as client from "./client";
// import { FormControl, ListGroup } from "react-bootstrap";

// export default function WorkingWithArraysAsynchronously() {
//   const [todos, setTodos] = useState<any[]>([]);
//   const [errorMessage, setErrorMessage] = useState<string | null>(null);

//   const fetchTodos = async () => {
//     const todos = await client.fetchTodos();
//     setTodos(todos);
//   };

//   const createTodo = async () => {
//     const todos = await client.createTodo();
//     setTodos(todos);
//   };

//   const postTodo = async () => {
//     const newTodo = await client.postTodo({ 
//       title: "New Posted Todo", 
//       completed: false 
//     });
//     setTodos([...todos, newTodo]);
//   };

//   const removeTodo = async (todo: any) => {
//     const updatedTodos = await client.removeTodo(todo);
//     setTodos(updatedTodos);
//   };

//   const deleteTodo = async (todo: any) => {
//     try {
//       await client.deleteTodo(todo);
//       const newTodos = todos.filter((t) => t.id !== todo.id);
//       setTodos(newTodos);
//     } catch (error: any) {
//       console.log(error);
//       setErrorMessage(error.response.data.message);
//     }
//   };

//   const editTodo = (todo: any) => {
//     const updatedTodos = todos.map(
//       (t) => t.id === todo.id ? { ...todo, editing: true } : t
//     );
//     setTodos(updatedTodos);
//   };

//   const updateTodo = async (todo: any) => {
//     try {
//       await client.updateTodo(todo);
//       setTodos(todos.map((t) => (t.id === todo.id ? todo : t)));
//     } catch (error: any) {
//       setErrorMessage(error.response.data.message);
//     }
//   };

//   useEffect(() => {
//     fetchTodos();
//   }, []);

//   return (
//     <div id="wd-asynchronous-arrays">
//       <h3>Working with Arrays Asynchronously</h3>
      
//       {/* Error Message Display */}
//       {errorMessage && (
//         <div id="wd-todo-error-message" className="alert alert-danger mb-2 mt-2">
//           {errorMessage}
//         </div>
//       )}

//       <h4>
//         Todos
//         <FaPlusCircle 
//           onClick={createTodo} 
//           className="text-success float-end fs-3"
//           id="wd-create-todo" 
//         />
//         <FaPlusCircle 
//           onClick={postTodo} 
//           className="text-primary float-end fs-3 me-3" 
//           id="wd-post-todo" 
//         />
//       </h4>

//       <ListGroup>
//         {todos.map((todo) => (
//           <ListGroup.Item key={todo.id}>
//             <FaTrash 
//               onClick={() => removeTodo(todo)}
//               className="text-danger float-end mt-1" 
//               id="wd-remove-todo"
//             />
//             <TiDelete 
//               onClick={() => deleteTodo(todo)} 
//               className="text-danger float-end me-2 fs-3" 
//               id="wd-delete-todo" 
//             />
//             <FaPencil 
//               onClick={() => editTodo(todo)} 
//               className="text-primary float-end me-2 mt-1" 
//             />
            
//             <input 
//               type="checkbox" 
//               className="form-check-input me-2 float-start"
//               defaultChecked={todo.completed}
//               onChange={(e) => updateTodo({ ...todo, completed: e.target.checked })} 
//             />
            
//             {!todo.editing ? (
//               <span style={{ textDecoration: todo.completed ? "line-through" : "none" }}>
//                 {todo.title}
//               </span>
//             ) : (
//               <FormControl 
//                 className="w-50 float-start" 
//                 defaultValue={todo.title}
//                 onKeyDown={(e) => {
//                   if (e.key === "Enter") {
//                     updateTodo({ ...todo, editing: false });
//                   }
//                 }}
//                 onChange={(e) => updateTodo({ ...todo, title: e.target.value })}
//               />
//             )}
//           </ListGroup.Item>
//         ))}
//       </ListGroup>
//       <hr />
//     </div>
//   );
// }




// import { FaPencil } from "react-icons/fa6";
// import { TiDelete } from "react-icons/ti";
// import { FaPlusCircle } from "react-icons/fa";
// import { useState, useEffect } from "react";
// import * as client from "./client";
// import { FormControl, ListGroup } from "react-bootstrap";
// import { FaTrash } from "react-icons/fa";
// export default function WorkingWithArraysAsynchronously() {
//   const [todos, setTodos] = useState<any[]>([]);
//   const createTodo = async () => {
//     const todos = await client.createTodo();
//     setTodos(todos);
//   };
//     const postTodo = async () => {
//         const newTodo = await client.postTodo({ title: "New Posted Todo", completed: false, });
//         setTodos([...todos, newTodo]);
//     };

//   const fetchTodos = async () => {
//     const todos = await client.fetchTodos();
//     setTodos(todos);
//   };
//   useEffect(() => {
//     fetchTodos();
//   }, []);
//   const removeTodo = async (todo: any) => {
//     const updatedTodos = await client.removeTodo(todo);
//     setTodos(updatedTodos);
//   };

//   const deleteTodo = async (todo: any) => {
//     await client.deleteTodo(todo);
//     const newTodos = todos.filter((t) => t.id !== todo.id);
//     setTodos(newTodos);
//   };

//   const editTodo = (todo: any) => {
//     const updatedTodos = todos.map(
//       (t) => t.id === todo.id ? { ...todo, editing: true } : t );
//     setTodos(updatedTodos);
//   };
//   const updateTodo = async (todo: any) => {
//     await client.updateTodo(todo);
//     setTodos(todos.map((t) => (t.id === todo.id ? todo : t)));
//   };


//   return (
//     <div id="wd-asynchronous-arrays">
//       <h3>Working with Arrays Asynchronously</h3>
//       <h4>Todos
//         <FaPlusCircle onClick={createTodo} className="text-success float-end fs-3"
//                          id="wd-create-todo" />
//         <FaPlusCircle onClick={postTodo}   className="text-primary float-end fs-3 me-3" id="wd-post-todo"   />
//       </h4>
//       <ListGroup>
//         {todos.map((todo) => (
//           <ListGroup.Item key={todo.id}>
            
//             <FaTrash onClick={() => removeTodo(todo)}
//                      className="text-danger float-end mt-1" id="wd-remove-todo"/>
//             <TiDelete onClick={() => deleteTodo(todo)} className="text-danger float-end me-2 fs-3" id="wd-delete-todo" />  
//             <FaPencil onClick={() => editTodo(todo)} className="text-primary float-end me-2 mt-1" />       
//             <input type="checkbox" className="form-check-input me-2 float-start"
//                    defaultChecked={todo.completed}
//                    onChange={(e) => updateTodo({ ...todo, completed: e.target.checked }) } />
//               {!todo.editing ? ( todo.title ) : (
//                 <FormControl className="w-50 float-start" defaultValue={todo.title}
//                   onKeyDown={(e) => {
//                     if (e.key === "Enter") {
//                       updateTodo({ ...todo, editing: false });
//                     }
//                   }}
//                   onChange={(e) =>
//                     updateTodo({ ...todo, title: e.target.value })
//                   }
//                 />
//               )}

//             {/* <span style={{ textDecoration: todo.completed ? "line-through" : "none" }}>
//               {todo.title}
//             </span> */}
//           </ListGroup.Item>
//         ))}
//       </ListGroup> <hr />
//     </div>
// );}
