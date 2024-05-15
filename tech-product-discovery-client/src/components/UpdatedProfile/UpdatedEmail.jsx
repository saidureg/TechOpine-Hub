import PropTypes from "prop-types";
import useAuth from "../../hooks/useAuth";
import {
  EmailAuthProvider,
  reauthenticateWithCredential,
  updateEmail,
} from "firebase/auth";
import { auth } from "../../firebase/firebase.config";
import { toast } from "react-toastify";
import useAxiosSecure from "../../hooks/useAxiosSecure";

const UpdatedEmail = ({ setIsUpdateEmail }) => {
  const axiosSecure = useAxiosSecure();
  const { user, setLoading } = useAuth();
  const onCancel = () => {
    setIsUpdateEmail(false);
    setLoading(false);
  };

  const reauthenticate = (currentPassword) => {
    const user = auth.currentUser;
    const credential = EmailAuthProvider.credential(
      user.email,
      currentPassword
    );
    return reauthenticateWithCredential(user, credential);
  };

  const UpdatedUserEmail = async (email, currentPassword) => {
    setLoading(true);
    try {
      await reauthenticate(currentPassword);
      const res = await axiosSecure.patch(`/users/${user.email}`, {
        email,
      });
      if (res.data.modifiedCount) {
        await updateEmail(auth.currentUser, email);
        toast.success("Email updated successfully", {
          autoClose: 1000,
        });
        setLoading(false);
      } else {
        toast.error("Email not updated", {
          autoClose: 1000,
        });
      }
    } catch (error) {
      console.error("Error updating email:", error);
      toast.error("Email not updated", {
        autoClose: 1000,
      });
      setLoading(false);
      throw error; // Rethrow the error to be caught by the caller
    }
  };

  const handleUpdateEmail = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const currentPassword = form.password.value;
    onCancel();
    UpdatedUserEmail(email, currentPassword)
      .then(() => {
        // console.log("Email updated successfully");
      })
      .catch((error) => {
        toast.error("Email not updated", {
          autoClose: 1000,
        });
        console.log(error);
      });
  };
  return (
    <div>
      <p className="text-sm text-gray-400 pb-5">
        Use this form to update your Email
      </p>
      <form onSubmit={handleUpdateEmail} className="flex flex-col space-y-4">
        <input
          type="email"
          placeholder="Email Address"
          name="email"
          className="border p-2 rounded-lg"
        />
        <input
          type="password"
          placeholder="Current Password"
          name="password"
          className="border p-2 rounded-lg"
        />
        <p className="text-xs text-gray-400 py-1">
          You need this email to log into your account
        </p>

        <button
          type="submit"
          className="bg-[#F43F5E] px-7 py-1 rounded-lg text-white cursor-pointer hover:bg-[#af4053]"
        >
          Update Email
        </button>
      </form>
    </div>
  );
};

UpdatedEmail.propTypes = {
  setIsUpdateEmail: PropTypes.func,
};

export default UpdatedEmail;
