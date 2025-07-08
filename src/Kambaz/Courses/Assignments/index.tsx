export default function Assignments() {
  return (
    
    <div id="wd-assignments">
       <div>
      <input
        placeholder="Search for Assignments"
        id="wd-search-assignment"
      />
     
        <button id="wd-add-assignment-group">+ Group</button>
        <button id="wd-add-assignment">+ Assignment</button>
      </div>

      <h3 id="wd-assignments-title">
        ASSIGNMENTS 40% of Total{" "}
        <button aria-label="Add Assignment Group">+</button>
      </h3>

      <ul id="wd-assignment-list">
        <li className="wd-assignment-list-item">
          <a
            href="#/Kambaz/Courses/1234/Assignments/123"
            className="wd-assignment-link"
          >
            A1 - ENV + HTML
          </a>
          <div>
                Multiple Modules | <strong>Not available</strong> until May 6 at 12:00am | <strong>Due</strong> May 13 at 11:59pm | 100 pts
            </div>
        </li>
        <li className="wd-assignment-list-item">
            <a
            href="#/Kambaz/Courses/1234/Assignments/123"
            className="wd-assignment-link"
          >
            A2 - CSS + BOOTSTRAP
          </a>
          <div>
                Multiple Modules | <strong>Not available</strong> until May 13 at 12:00am | <strong>Due</strong> May 20 at 11:59pm | 100 pts
            </div>
          {/* You can add more assignments here */}
        </li>
         <li className="wd-assignment-list-item">
            <a
            href="#/Kambaz/Courses/1234/Assignments/123"
            className="wd-assignment-link"
          >
            A3 - JAVASCRIPT + REACT
          </a>
          <div>
                Multiple Modules | <strong>Not available</strong> until May 20 at 12:00am | <strong>Due</strong> May 27 at 11:59pm | 100 pts
            </div>
          {/* You can add more assignments here */}
        </li>
      </ul>
    </div>
  );
}


// export default function Assignments() {
//   return (
//     <div id="wd-assignments">
      
//     </div>
// );}

{/* <input placeholder="Search for Assignments"
             id="wd-search-assignment" />
      <button id="wd-add-assignment-group">+ Group</button>
      <button id="wd-add-assignment">+ Assignment</button>
      <h3 id="wd-assignments-title">
        ASSIGNMENTS 40% of Total <button>+</button> </h3>
      <ul id="wd-assignment-list">
        <li className="wd-assignment-list-item">
          <a href="#/Kambaz/Courses/1234/Assignments/123"
             className="wd-assignment-link" >
            A1 - ENV + HTML
          </a> </li>
        <li className="wd-assignment-list-item">
          
        </li>
      </ul> */}