import React, { useState } from "react";
import { ListGroup, Button, FormControl } from "react-bootstrap";
import TodoForm from "./TodoForm";
import TodoItem from "./TodoItem";
import { useSelector } from "react-redux";

export default function TodoList() {
  // create todos array state variable
  // initialize with 2 todo objects
    const { todos } = useSelector((state: any) => state.todosReducer);
//   const [todos, setTodos] = useState([
//     { id: "1", title: "Learn React" },
//     { id: "2", title: "Learn Node" }
//   ]);
  
//   // create todo state variable object
//   const [todo, setTodo] = useState({ id: "-1", title: "Learn Mongo" });
  
//   // event handler to add new todo
//   const addTodo = (todo: any) => {
//     // spread existing todos, append new todo,
//     // override id
//     const newTodos = [ ...todos, { ...todo,
//       id: new Date().getTime().toString() }];
//     // update todos
//     setTodos(newTodos);
//     // clear the todo
//     setTodo({id: "-1", title: ""});
//   };
  
  // event handler to remove
  // todo by their ID
//   const deleteTodo = (id: string) => {
//     const newTodos = todos.filter((todo) => todo.id !== id);
//     setTodos(newTodos);
//   };
  
  // event handler to
  // update todo by
  // replacing todo
  // by their ID
//   const updateTodo = (todo: any) => {
//     const newTodos = todos.map((item) =>
//       (item.id === todo.id ? todo : item));
//     setTodos(newTodos);
//     setTodo({id: "-1", title: ""});
//   };
  
  return (
    <div>
      <h2>Todo List</h2>
      <ListGroup>
        <TodoForm />
        {todos.map((todo: any) => (
          <TodoItem todo={todo} />
        ))}
        {/* <TodoForm
          todo={todo}
          setTodo={setTodo}
          addTodo={addTodo}
          updateTodo={updateTodo}/>
        {todos.map((todo) => (
          <TodoItem
            key={todo.id} 
            todo={todo}
            deleteTodo={deleteTodo}
            setTodo={setTodo} />
        ))} */}

        {/* <ListGroup.Item>

          <Button onClick={() => addTodo(todo)}
                  id="wd-add-todo-click" 
                  className="me-2"> 
            Add 
          </Button>
          <Button onClick={() => updateTodo(todo)}
                  id="wd-update-todo-click"
                  className="me-2"> 
            Update 
          </Button>
          <FormControl 
            value={todo.title}
            onChange={(e) => setTodo({ 
              ...todo, // copy old values first
              title: e.target.value // for every keystroke update the todo's title
            })}
            placeholder="Enter todo title"
            className="mt-2"
          />
        </ListGroup.Item>
        {todos.map((todoItem) => (
          <ListGroup.Item key={todoItem.id}>
            <Button onClick={() => deleteTodo(todoItem.id)}
                    id="wd-delete-todo-click"
                    variant="danger"
                    size="sm"
                    className="me-2"> 
              Delete 
            </Button>
            <Button onClick={() => setTodo(todoItem)}
                    id="wd-set-todo-click"
                    variant="warning"
                    size="sm"
                    className="me-2"> 
              Edit 
            </Button>
            {todoItem.title}
          </ListGroup.Item>
        ))} */}
      </ListGroup>
      <hr/>
    </div>
  );
}