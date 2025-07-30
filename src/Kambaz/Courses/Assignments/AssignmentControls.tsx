import { Button, Form } from "react-bootstrap";
import { FaPlus } from "react-icons/fa6";
import { FaSearch } from "react-icons/fa";
import { useState } from "react";

export default function AssignmentControls({ 
  handleAddAssignment 
}: {
  handleAddAssignment: () => void;
}) {
  const [searchTerm, setSearchTerm] = useState("");
  return (
    <div className="d-flex justify-content-between align-items-center mb-3" id="wd-assignment-controls">
      {/* Search input styled like Bootstrap */}
      {/* <Form.Control
        type="text"
        placeholder="Search for Assignments"
        id="wd-search-assignment"
        className="me-2"
        style={{ maxWidth: "300px" }}
      /> */}
      <div className="position-relative" style={{ maxWidth: "300px" }}>
      <FaSearch
        className="position-absolute top-50 translate-middle-y text-muted"
        style={{ left: "10px" }}
      />
      <Form.Control
        type="text"
        placeholder="Search..."
        id="wd-search-assignment"
        className="ps-5"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      </div>
      {/* <InputGroup className="mb-3" style={{ maxWidth: "300px" }}>
      <InputGroup.Text id="wd-search-icon">
        <FaSearch />
      </InputGroup.Text>
      <Form.Control
        type="text"
        placeholder="Search for Assignments"
        id="wd-search-assignment"
        aria-label="Search for Assignments"
        aria-describedby="wd-search-icon"
      />
    </InputGroup> */}

      {/* Buttons grouped on the right */}
      <div className="d-flex gap-2">
        <Button
          variant="secondary"
          id="wd-add-assignment-group"
          className="text-nowrap"
        >
          <FaPlus className="me-2" />
          Group
        </Button>
        <Button
          variant="danger"
          id="wd-add-assignment"
          className="text-nowrap"
          onClick={handleAddAssignment}
        >
          <FaPlus className="me-2" />
          Assignment
        </Button>
      </div>
    </div>
  );
}
