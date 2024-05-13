import PropTypes from "prop-types";
import useAuth from "../../hooks/useAuth";
import UpdatedNameProfile from "./UpdatedNameProfile";
import { MdArrowForwardIos } from "react-icons/md";
import Modal from "../Shared/Modal/Modal";
import { useState } from "react";
import UpdatedEmail from "./UpdatedEmail";
// import UpdatedEmailWithVerify from "./UpdatedEmailWithVerify";

const UpdatedProfile = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isUpdateEmail, setIsUpdateEmail] = useState(false);
  const { user } = useAuth();

  const handleUpdateProfile = () => {
    setIsOpen(!isOpen);
    // onCancel();
  };

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
      <div className="bg-base-200 divide-y-2 rounded-lg">
        <button
          onClick={handleUpdateProfile}
          className=" px-3 py-3 rounded-lg font-semibold cursor-pointer hover:bg-base-100 flex justify-between w-full"
        >
          Name & Profile picture
          <MdArrowForwardIos className="text-xl" />
        </button>
        <Modal
          isOpen={isOpen}
          setIsOpen={setIsOpen}
          title=""
          titleStyle="text-xl font-medium leading-6 text-gray-900 text-center mb-4"
        >
          {/* <UpdatedProfile isOpen={isOpen} setIsOpen={setIsOpen} /> */}
          <UpdatedNameProfile setIsOpen={setIsOpen} />
        </Modal>
        <button
          onClick={() => setIsUpdateEmail(!isUpdateEmail)}
          className=" px-3 py-3 rounded-lg font-semibold cursor-pointer hover:bg-base-100 flex justify-between w-full"
        >
          Email
          <MdArrowForwardIos className="text-xl" />
          <Modal
            isOpen={isUpdateEmail}
            setIsOpen={setIsUpdateEmail}
            title=""
            titleStyle="text-xl font-medium leading-6 text-gray-900 text-center mb-4"
          >
            <UpdatedEmail setIsUpdateEmail={setIsUpdateEmail} />
            {/* <UpdatedEmailWithVerify setIsUpdateEmail={setIsUpdateEmail} /> */}
          </Modal>
        </button>
      </div>
    </div>
  );
};

UpdatedProfile.propTypes = {
  setIsOpen: PropTypes.func,
  onCancel: PropTypes.func,
};

export default UpdatedProfile;
