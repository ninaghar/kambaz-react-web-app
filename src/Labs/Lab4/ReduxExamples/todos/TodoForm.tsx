import { Button, FormControl, ListGroup } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { addTodo, updateTodo, setTodo } from "./todosReducer";

export default function TodoForm() {
  const { todo } = useSelector((state: any) => state.todosReducer);
  const dispatch = useDispatch();
  return (
    <ListGroup.Item>
      <div className="d-flex align-items-center">
        <FormControl 
          value={todo.title}
          onChange={(e) => dispatch(setTodo({ ...todo, title: e.target.value }))}
          placeholder="Enter todo title"
          className="me-2"
        />
        <Button 
          onClick={() => dispatch(updateTodo(todo))}
          id="wd-update-todo-click"
          variant="warning"
          className="me-2"
        > 
          Update 
        </Button>
        <Button 
          onClick={() => dispatch(addTodo(todo))}
          id="wd-add-todo-click"
          variant="success"
          
        > 
          Add 
        </Button>
        
      </div>
    </ListGroup.Item>
  );
}
// import { Button, FormControl, ListGroup } from "react-bootstrap";

// export default function TodoForm({ todo, setTodo, addTodo, updateTodo }: {
//   todo: { id: string; title: string };
//   setTodo: (todo: { id: string; title: string }) => void;
//   addTodo: (todo: { id: string; title: string }) => void;
//   updateTodo: (todo: { id: string; title: string }) => void;
// }) {
//   return (
//     <ListGroup.Item>
//         <FormControl value={todo.title}
//         onChange={ (e) => setTodo({ ...todo, title: e.target.value }) }
//         placeholder="Enter todo title"
//         className="mt-2"
//         />
//       <Button onClick={() => addTodo(todo)}
//               id="wd-add-todo-click"
//               variant="success"
//               className="me-2"
//               > Add </Button>
//       <Button onClick={() => updateTodo(todo)}
//               id="wd-update-todo-click"
//               variant="warning"
//               className="me-2"
//               > Update </Button>
      
//     </ListGroup.Item>
// );}
