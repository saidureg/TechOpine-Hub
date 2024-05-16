import {
  EmailAuthProvider,
  reauthenticateWithCredential,
  updatePassword,
} from "firebase/auth";
import useAuth from "../../hooks/useAuth";
import { toast } from "react-toastify";
import PropTypes from "prop-types";

const UpdatedPassword = ({ setIsUpdatePassword, isUpdatePassword }) => {
  const { user, setLoading } = useAuth();
  const onCancel = () => {
    setIsUpdatePassword(!isUpdatePassword);
    setLoading(false);
  };

  const handleUpdatePassword = (e) => {
    e.preventDefault();
    const form = e.target;
    const currentPassword = form.current_password.value;
    const newPassword = form.new_password.value;
    const confirmPassword = form.confirm_password.value;

    if (newPassword !== confirmPassword) {
      toast.error("Passwords do not match", {
        autoClose: 1000,
      });
    } else {
      onCancel();
      reauthenticateWithCredential(
        user,
        EmailAuthProvider.credential(user.email, currentPassword)
      )
        .then(() => {
          updatePassword(user, newPassword)
            .then(() => {
              toast.success("Password updated successfully", {
                autoClose: 1000,
              });
              setLoading(false);
            })
            .catch((error) => {
              toast.error("Password not updated", {
                autoClose: 1000,
              });
              console.log(error);
            });
        })
        .catch((error) => {
          toast.error("Invalid Current Password", {
            autoClose: 1000,
          });
          console.log(error);
        });
    }
  };

  return (
    <div>
      <p className="text-sm text-gray-400 pb-5">
        Use this form to update your Password
      </p>
      <form onSubmit={handleUpdatePassword} className="flex flex-col space-y-4">
        <input
          type="password"
          placeholder="Current Password"
          name="current_password"
          className="border p-2 rounded-lg"
        />
        <input
          type="password"
          placeholder="New Password"
          name="new_password"
          className="border p-2 rounded-lg"
        />
        <input
          type="password"
          placeholder="Confirm Password"
          name="confirm_password"
          className="border p-2 rounded-lg"
        />

        <p className="text-xs text-gray-400 py-1">
          You need this email to log into your account
        </p>

        <button
          type="submit"
          className="bg-[#F43F5E] px-7 py-1 rounded-lg text-white cursor-pointer hover:bg-[#af4053]"
        >
          Update Password
        </button>
      </form>
    </div>
  );
};

UpdatedPassword.propTypes = {
  setIsUpdatePassword: PropTypes.func,
  isUpdatePassword: PropTypes.bool,
};

export default UpdatedPassword;
