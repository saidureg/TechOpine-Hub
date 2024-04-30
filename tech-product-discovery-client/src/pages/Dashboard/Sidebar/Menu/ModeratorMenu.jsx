import { FaUser } from "react-icons/fa";
import MenuItem from "../MenuItem";
import { MdReport, MdReviews } from "react-icons/md";

const ModeratorMenu = () => {
  return (
    <>
      <MenuItem
        icon={FaUser}
        label="Profile"
        address="/dashboard/moderatorProfile"
      />
      <MenuItem
        icon={MdReviews}
        label="Product Review"
        address="productReview"
      />
      <MenuItem icon={MdReport} label="Reported" address="reported" />
    </>
  );
};

export default ModeratorMenu;
