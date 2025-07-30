import { useState } from "react";
import { Button } from "react-bootstrap";

export default function Counter() {
  const [count, setCount] = useState(7);
  console.log(count);
  
  return (
    <div id="wd-counter-use-state">
      <h2>Counter: {count}</h2>
      
      <Button
        onClick={() => setCount(count + 1)}
        id="wd-counter-up-click"
        variant="success"  // GREEN
        className="me-2"   // Right margin for spacing
      >
        Up
      </Button>
      
      <Button
        onClick={() => setCount(count - 1)}
        id="wd-counter-down-click"
        variant="danger"   // RED
      >
        Down
      </Button>
      
      <hr/>
    </div>
  );
}
// import  { useState } from "react";
// export default function Counter() {
// //   let count = 7;
//   const [count, setCount] = useState(7);
//   console.log(count);
//   return (
//     <div id="wd-counter-use-state">
//       <h2>Counter: {count}</h2>
//       <button
//         onClick={() => setCount(count + 1)}
//         id="wd-counter-up-click">Up</button>
//       <button
//         onClick={() => setCount(count - 1)}
//         id="wd-counter-down-click">Down</button>
// <hr/></div>);}