import PropTypes from "prop-types";
import useAuth from "../../hooks/useAuth";
import UpdatedNameProfile from "./UpdatedNameProfile";

const UpdatedProfile = ({ setIsOpen }) => {
  const { user } = useAuth();

  return (
    <div>
      <div className="flex flex-col justify-center items-center gap-1">
        <label tabIndex={0} className="avatar rounded-full">
          <div className="w-[100px] ">
            <img
              className="w-full rounded-full bg-white cursor-pointer"
              src={user?.photoURL}
            />
          </div>
        </label>
        <h3 className="text-xl font-medium my-4">{user?.displayName}</h3>
      </div>
      <UpdatedNameProfile setIsOpen={setIsOpen} />
    </div>
  );
};

UpdatedProfile.propTypes = {
  setIsOpen: PropTypes.func,
};

export default UpdatedProfile;
