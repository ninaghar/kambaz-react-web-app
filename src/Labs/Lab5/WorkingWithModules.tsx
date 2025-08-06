import { useState } from "react";
import { FormControl } from "react-bootstrap";

const REMOTE_SERVER = import.meta.env.VITE_REMOTE_SERVER;

export default function WorkingWithModules() {
  const [module, _setModule] = useState({
    id: "",
    name: "",
    description: "",
    course: ""
  });
  const [moduleName, setModuleName] = useState("");
  const [moduleDescription, setModuleDescription] = useState("");

  return (
    <div id="wd-working-with-modules">
      <h3>Working With Modules</h3>
      
      {/* Get Module Links */}
      <div className="mb-3">
        <a 
          className="btn btn-primary me-2"
          id="wd-get-module"
          href={`${REMOTE_SERVER}/lab5/module`}
        >
          Get Module
        </a>
        
        <a 
          className="btn btn-secondary me-2"
          id="wd-get-module-name"
          href={`${REMOTE_SERVER}/lab5/module/name`}
        >
          Get Module Name
        </a>
      </div>

      {/* Module Name Editing */}
      <div className="mb-3">
        <h5>Edit Module Name</h5>
        <FormControl
          className="mb-2"
          value={moduleName}
          onChange={(e) => setModuleName(e.target.value)}
          placeholder="Enter new module name"
          id="wd-module-name-input"
        />
        <a 
          className="btn btn-warning"
          id="wd-update-module-name"
          href={`${REMOTE_SERVER}/lab5/module/name/${moduleName}`}
        >
          Update Module Name
        </a>
      </div>

      {/* Module Description Editing */}
      <div className="mb-3">
        <h5>Edit Module Description</h5>
        <FormControl
          as="textarea"
          rows={3}
          className="mb-2"
          value={moduleDescription}
          onChange={(e) => setModuleDescription(e.target.value)}
          placeholder="Enter new module description"
          id="wd-module-description-input"
        />
        <a 
          className="btn btn-info"
          id="wd-update-module-description"
          href={`${REMOTE_SERVER}/lab5/module/description/${moduleDescription}`}
        >
          Update Module Description
        </a>
      </div>

      {/* Display Current Module */}
      <div className="mb-3">
        <h5>Current Module Object:</h5>
        <pre id="wd-module-object">
          {JSON.stringify(module, null, 2)}
        </pre>
      </div>

      <hr />
    </div>
  );
}