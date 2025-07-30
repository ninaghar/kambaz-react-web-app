import { useState } from "react";
import { Button, ListGroup } from "react-bootstrap";

export default function ArrayStateVariable() {
  const [array, setArray] = useState([1, 2, 3, 4, 5]);
  
  const addElement = () => {
    setArray([...array, Math.floor(Math.random() * 100)]);
  };
  
  const deleteElement = (index: number) => {
    setArray(array.filter((_, i) => i !== index));
  };

  return (
    <div id="wd-array-state-variables">
      <h2>Array State Variable</h2>
      
      <Button 
        onClick={addElement}
        variant="success"  // This makes it GREEN
        className="mb-3"
      >
        Add Element
      </Button>
      
      <ListGroup>
        {array.map((item, index) => (
          <ListGroup.Item key={index}>
            <div className="d-flex justify-content-between align-items-center">
              <span>{item}</span>
              <Button 
                onClick={() => deleteElement(index)}
                variant="danger"  // This makes it RED
                size="sm"
              >
                Delete
              </Button>
            </div>
          </ListGroup.Item>
        ))}
      </ListGroup>
      
      <hr/>
    </div>
  );
}
// import  { useState } from "react";
// export default function ArrayStateVariable() {
//  const [array, setArray] = useState([1, 2, 3, 4, 5]);
//  const addElement = () => {
//    setArray([...array, Math.floor(Math.random() * 100)]);
//  };
// //  const deleteElement = (index: number) => {
// //    setArray(array.filter((item, i) => i !== index));
// //  };
//     const deleteElement = (index: number) => {
//     setArray(array.filter((_, i) => i !== index));
//     };

//  return (
//   <div id="wd-array-state-variables">
//    <h2>Array State Variable</h2>
//    <button onClick={addElement}>Add Element</button>
//    <ul>
//     {array.map((item, index) => (
//      <li key={index}> {item}
//       <button onClick={() => deleteElement(index)}>
//        Delete</button>
//      </li>))}
//    </ul><hr/></div>);}