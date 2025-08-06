import { useState } from "react";
import { FormControl } from "react-bootstrap";

// import React, { useState } from "react";
const REMOTE_SERVER = import.meta.env.VITE_REMOTE_SERVER;
export default function WorkingWithObjects() {
  const [assignment, setAssignment] = useState({
    id: 1, title: "NodeJS Assignment",
    description: "Create a NodeJS server with ExpressJS",
    due: "2021-10-10", completed: false, score: 0,
  });

  const [module, setModule] = useState({
    id: "MOD123",
    name: "Introduction to React",
    description: "Learn the fundamentals of React development",
    course: "CS5610"
  });
   const ASSIGNMENT_API_URL = `${REMOTE_SERVER}/lab5/assignment`
   const MODULE_API_URL = `${REMOTE_SERVER}/lab5/module`;
    return (
    <div id="wd-working-with-objects">
      <h3>Working With Objects</h3>
      <h4>Retrieving Objects</h4>
      <a id="wd-retrieve-assignments" className="btn btn-primary"
         href={`${REMOTE_SERVER}/lab5/assignment`}>
        Get Assignment
      </a><hr/>
      <h4>Retrieving Properties</h4>
      <a id="wd-retrieve-assignment-title" className="btn btn-primary"
         href={`${REMOTE_SERVER}/lab5/assignment/title`}>
        Get Title
      </a><hr/>
      <h4>Modifying Properties</h4>
      <a id="wd-update-assignment-title"
         className="btn btn-primary float-end"
         href={`${ASSIGNMENT_API_URL}/title/${assignment.title}`}>
        Update Title
      </a>
      <FormControl className="w-75" id="wd-assignment-title"
        defaultValue={assignment.title} onChange={(e) =>
          setAssignment({ ...assignment, title: e.target.value })}/>
      <hr />
            {/* Assignment Score */}
      <a id="wd-update-assignment-score"
         className="btn btn-primary float-end"
         href={`${ASSIGNMENT_API_URL}/score/${assignment.score}`}>
        Update Score
      </a>
      <FormControl className="w-75" id="wd-assignment-score"
        type="number"
        defaultValue={assignment.score} onChange={(e) =>
          setAssignment({ ...assignment, score: parseInt(e.target.value) || 0 })}/>
      <hr />

      {/* Assignment Completed */}
      <a id="wd-update-assignment-completed"
         className="btn btn-primary float-end"
         href={`${ASSIGNMENT_API_URL}/completed/${assignment.completed}`}>
        Update Completed
      </a>
      <div className="form-check w-75">
        <input
          type="checkbox"
          className="form-check-input"
          id="wd-assignment-completed"
          checked={assignment.completed}
          onChange={(e) => setAssignment({ ...assignment, completed: e.target.checked })}
        />
        <label className="form-check-label" htmlFor="wd-assignment-completed">
          Assignment Completed
        </label>
      </div>
      <hr />

      {/* Module Section */}
      <h4>Working With Modules</h4>
      <a id="wd-retrieve-modules" className="btn btn-primary"
         href={`${REMOTE_SERVER}/lab5/module`}>
        Get Module
      </a><hr/>

      <a id="wd-retrieve-module-name" className="btn btn-primary"
         href={`${REMOTE_SERVER}/lab5/module/name`}>
        Get Module Name
      </a><hr/>

      {/* Module Name Editing */}
      <a id="wd-update-module-name"
         className="btn btn-primary float-end"
         href={`${MODULE_API_URL}/name/${module.name}`}>
        Update Module Name
      </a>
      <FormControl className="w-75" id="wd-module-name"
        defaultValue={module.name} onChange={(e) =>
          setModule({ ...module, name: e.target.value })}/>
      <hr />

      {/* Module Description Editing */}
      <a id="wd-update-module-description"
         className="btn btn-primary float-end"
         href={`${MODULE_API_URL}/description/${module.description}`}>
        Update Module Description
      </a>
      <FormControl className="w-75" id="wd-module-description"
        as="textarea"
        rows={3}
        defaultValue={module.description} onChange={(e) =>
          setModule({ ...module, description: e.target.value })}/>
      <hr />


    </div>
);}
