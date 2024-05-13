import PropTypes from "prop-types";
import useAuth from "../../hooks/useAuth";
import {
  EmailAuthProvider,
  reauthenticateWithCredential,
  sendEmailVerification,
  updateEmail,
} from "firebase/auth";
import { auth } from "../../firebase/firebase.config";

const UpdatedEmailWithVerify = ({ setIsUpdateEmail }) => {
  const { setLoading } = useAuth();

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
      await sendEmailVerification(auth.currentUser);
      await updateEmail(auth.currentUser, email);
      setLoading(false);
      console.log("Email updated successfully");
    } catch (error) {
      console.error("Error updating email:", error);
      setLoading(false);
      throw error; // Rethrow the error to be caught by the caller
    }
  };

  const handleUpdateEmail = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const currentPassword = form.password.value; // Get the current password from the form
    onCancel();
    UpdatedUserEmail(email, currentPassword)
      .then(() => {
        console.log("Email updated successfully");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div>
      <h3 className="text-xl font-medium py-2">Update Email Address</h3>
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

UpdatedEmailWithVerify.propTypes = {
  setIsUpdateEmail: PropTypes.func,
};

export default UpdatedEmailWithVerify;
