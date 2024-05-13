import useAuth from "../../hooks/useAuth";
import PropTypes from "prop-types";
import { toast } from "react-toastify";
import useAxiosSecure from "../../hooks/useAxiosSecure";

const UpdatedNameProfile = ({ setIsOpen }) => {
  const axiosSecure = useAxiosSecure();
  const { user, updatedUserProfile, setLoading } = useAuth();
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
    const updatedUserInfo = {
      name,
      photoURL,
    };

    axiosSecure
      .patch(`/users/${user.email}`, updatedUserInfo)
      .then((res) => {
        if (res.data.modifiedCount) {
          updatedUserProfile(name, photoURL)
            .then(() => {
              toast.success("Profile updated successfully", {
                autoClose: 1000,
              });
              onCancel();
              setLoading(false);
            })
            .catch((error) => {
              toast.error("Profile not updated", {
                autoClose: 1000,
              });
              console.log(error);
            });
        } else {
          toast.error("Profile not updated", {
            autoClose: 2000,
          });
        }
      })
      .catch((error) => {
        console.log(error);
        toast.error("Profile not updated", {
          autoClose: 1000,
        });
      });
  };
  return (
    <div>
      <h3 className="text-xl font-medium py-2">
        Update Name & Profile Picture
      </h3>
      <p className="text-sm text-gray-400 pb-5">
        Use this form to update your Profile
      </p>
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
    </div>
  );
};

UpdatedNameProfile.propTypes = {
  setIsOpen: PropTypes.func,
};

export default UpdatedNameProfile;
