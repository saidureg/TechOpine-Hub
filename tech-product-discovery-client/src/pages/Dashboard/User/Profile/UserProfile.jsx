import { Helmet } from "react-helmet-async";
import useAuth from "../../../../hooks/useAuth";
import usePayment from "../../../../hooks/usePayment";
import useAdmin from "../../../../hooks/useAdmin";
import useModerator from "../../../../hooks/useModerator";
import Modal from "../../../../components/Shared/Modal/Modal";
import { useState } from "react";
import UpdatedProfile from "../../../../components/UpdatedProfile/UpdatedProfile";
import UpdatedPassword from "../../../../components/UpdatedProfile/UpdatedPassword";

const UserProfile = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isUpdatePassword, setIsUpdatePassword] = useState(false);
  const { user } = useAuth();
  const [payments] = usePayment();
  const [isAdmin] = useAdmin();
  const [isModerator] = useModerator();

  // const onCancel = () => {
  //   setIsOpen(false);
  // };

  const handleUpdateProfile = () => {
    setIsOpen(!isOpen);
    // onCancel();
  };

  return (
    <div className="flex justify-center items-center lg:h-screen">
      <Helmet>
        <title>Dashboard | Profile</title>
      </Helmet>
      <div className="bg-white shadow-lg rounded-2xl lg:w-3/5">
        <img
          alt="profile"
          src="https://wallpapercave.com/wp/wp10784415.jpg"
          className="w-full mb-4 rounded-t-lg h-36"
        />
        <div className="flex flex-col items-center justify-center p-4 -mt-16">
          <a href="#" className="relative block">
            <img
              alt="profile"
              src={user?.photoURL}
              className="mx-auto object-cover rounded-full h-24 w-24  border-2 border-white "
            />
          </a>
          {isAdmin ? (
            <p className="p-2 px-4 text-xs text-white bg-blue-500 rounded-full">
              Admin
            </p>
          ) : isModerator ? (
            <p className="p-2 px-4 text-xs text-white bg-green-500 rounded-full">
              Moderator
            </p>
          ) : payments.length > 0 ? (
            <p className="p-2 px-4 text-xs text-white bg-pink-500 rounded-full">
              Subscription Member
            </p>
          ) : (
            ""
          )}

          <div className="w-full p-2 mt-4 rounded-lg">
            <div className="flex flex-col lg:flex-row flex-wrap items-center justify-between text-sm text-gray-600 ">
              <p className="flex flex-col">
                Name
                <span className="font-bold text-black ">
                  {user?.displayName}
                </span>
              </p>
              <p className="flex flex-col">
                Email
                <span className="font-bold text-black ">{user?.email}</span>
              </p>
              <div>
                <button
                  onClick={handleUpdateProfile}
                  className="bg-[#F43F5E] px-10 py-1 rounded-lg text-white cursor-pointer hover:bg-[#af4053] block mb-1"
                >
                  Edit My Profile
                </button>
                <Modal
                  isOpen={isOpen}
                  setIsOpen={setIsOpen}
                  title=""
                  titleStyle="text-xl font-medium leading-6 text-gray-900 text-center mb-4"
                >
                  {/* <UpdatedProfile setIsOpen={setIsOpen} /> */}
                  <UpdatedProfile />
                </Modal>
                <button
                  onClick={() => setIsUpdatePassword(!isUpdatePassword)}
                  className="bg-[#F43F5E] px-7 py-1 rounded-lg text-white cursor-pointer hover:bg-[#af4053]"
                >
                  Change Password
                </button>
                <Modal
                  isOpen={isUpdatePassword}
                  setIsOpen={setIsUpdatePassword}
                  title="Change Password"
                  titleStyle="text-xl font-medium leading-6 text-gray-900 text-center mb-4"
                >
                  <UpdatedPassword
                    setIsUpdatePassword={setIsUpdatePassword}
                    isUpdatePassword={isUpdatePassword}
                  />
                </Modal>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
