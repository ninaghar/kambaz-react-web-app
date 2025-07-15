import { IoEllipsisVertical } from "react-icons/io5";
import { FaPlus } from "react-icons/fa6";
import { Badge } from "react-bootstrap";

export default function AssignmentControlButtons() {
  return (
    <div className="float-end d-flex align-items-center gap-2">
      {/* Oval badge with text */}
      <Badge
        bg="light"
        text="dark"
        pill
        className="px-3 py-2 border border-dark"
        style={{ fontSize: "0.9rem" }}
      >
        40% of Total
      </Badge>

      {/* Plus icon */}
      <FaPlus className="fs-4 text-dark" />

      {/* Ellipsis icon */}
      <IoEllipsisVertical className="fs-4 text-dark" />
    </div>
  );
}
