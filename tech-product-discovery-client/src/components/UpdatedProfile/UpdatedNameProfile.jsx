import useAuth from "../../hooks/useAuth";
import PropTypes from "prop-types";

const UpdatedNameProfile = ({ setIsOpen }) => {
  const { updatedUserProfile, setLoading } = useAuth();
  const onCancel = () => {
    setIsOpen(false);
    setLoading(false);
  };
  const handleUpdateProfile = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const photoURL = form.photoURL.value;
    console.log(name, photoURL);
    updatedUserProfile(name, photoURL)
      .then(() => {
        console.log("User updated successfully");
        onCancel();
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <form onSubmit={handleUpdateProfile} className="flex flex-col space-y-4">
      <input
        type="text"
        placeholder="Name"
        name="name"
        className="border p-2 rounded-lg"
      />
      <input
        type="text"
        name="photoURL"
        placeholder="Photo URL"
        className="border p-2 rounded-lg"
      />

      <button
        type="submit"
        className="bg-[#F43F5E] px-7 py-1 rounded-lg text-white cursor-pointer hover:bg-[#af4053]"
      >
        Update Profile
      </button>
    </form>
  );
};

UpdatedNameProfile.propTypes = {
  setIsOpen: PropTypes.func,
};

export default UpdatedNameProfile;
