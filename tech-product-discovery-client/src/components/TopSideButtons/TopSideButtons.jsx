import { toast } from "react-toastify";

const TopSideButtons = () => {
  const addNewTeamMember = () => {
    toast.success(`Add New Team Member`);
  };
  return (
    <div className="inline-block float-right">
      <button
        className="btn px-6 btn-sm normal-case btn-primary"
        onClick={() => addNewTeamMember()}
      >
        Invite New
      </button>
    </div>
  );
};

export default TopSideButtons;
