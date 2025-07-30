import { Button, ListGroup } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { deleteTodo, setTodo } from "./todosReducer";

type Todo = {
  id: string;
  title: string;
};

interface TodoItemProps {
  todo: Todo;
}

export default function TodoItem({ todo }: TodoItemProps) {
  const dispatch = useDispatch();
  
  return (
    <ListGroup.Item>
      <div className="d-flex justify-content-between align-items-center">
        <span>{todo.title}</span>
        <div>
          <Button 
            onClick={() => dispatch(setTodo(todo))}
            id="wd-set-todo-click"
            variant="primary"
            size="sm"
            className="me-2"
          > 
            Edit 
          </Button>
          <Button 
            onClick={() => dispatch(deleteTodo(todo.id))}
            id="wd-delete-todo-click"
            variant="danger"
            size="sm"
          >
            Delete 
          </Button>
        </div>
      </div>
    </ListGroup.Item>
  );
}
// import { Button, ListGroup } from "react-bootstrap";
// import { useDispatch } from "react-redux";
// import { deleteTodo, setTodo } from "./todosReducer";

// type Todo = {
//   id: string;
//   title: string;
// };

// export default function TodoItem({ todo }: { todo: Todo }) {
//     const dispatch = useDispatch();
//     return (
//     <ListGroup.Item>
//       <div className="d-flex justify-content-between align-items-center">
//         <span>{todo.title}</span>
//         <div>
//           <Button 
//             onClick={() => dispatch(setTodo(todo))}
//             id="wd-set-todo-click"
//             variant="primary"
//             size="sm"
//             className="me-2"
//           > 
//             Edit 
//           </Button>
//           <Button 
//             onClick={() => dispatch(deleteTodo(todo.id))}
//             id="wd-delete-todo-click"
//             variant="danger"
//             size="sm"
//           >
//             Delete 
//           </Button>
//         </div>
//       </div>
//     </ListGroup.Item>
//   );
// }


// import { Button, ListGroup } from "react-bootstrap";

// export default function TodoItem({ todo, deleteTodo, setTodo }: {
//   todo: { id: string; title: string };
//   deleteTodo: (id: string) => void;
//   setTodo: (todo: { id: string; title: string }) => void;
// }) {
//   return (
//     <ListGroup.Item key={todo.id}>
//         {todo.title}
//         <Button onClick={() => setTodo(todo)}
//               id="wd-set-todo-click"
//               variant="primary"
//               size="sm"
//               className="me-2"
//               > Edit 
//               </Button>
//       <Button onClick={() => deleteTodo(todo.id)}
//               id="wd-delete-todo-click"
//               variant="danger"
//               size="sm"
//               className="me-2">
//                  Delete 
//                  </Button>
      
         
//        </ListGroup.Item>);}