import { IoEllipsisVertical } from "react-icons/io5";
import GreenCheckmark from "./GreenCheckmark";
import { FaTrash } from "react-icons/fa6";
export default function ListControlButtons({ 
   
  assignmentTitle,
  onDelete 
}: {
  
  assignmentTitle?: string;
  onDelete?: () => void;
}) {

  const handleDeleteClick = () => {
    if (onDelete && assignmentTitle) {
      const confirmed = window.confirm(
        `Are you sure you want to remove the assignment "${assignmentTitle}"?\n\nThis action cannot be undone.`
      );
      
      if (confirmed) {
        onDelete();
      }
    }
  };
  return (
    <div className="float-end">
      {onDelete && (
        <FaTrash 
          onClick={handleDeleteClick} 
          className="text-danger me-2" 
          style={{ cursor: "pointer" }}
          title="Delete Assignment"
        />
      )}
      <GreenCheckmark />
      <IoEllipsisVertical className="fs-4" />
    </div> );}