import { useState } from "react";
import Datepicker from "react-tailwindcss-datepicker";
import PropTypes from "prop-types";
import {
  HiArrowPath,
  HiOutlineShare,
  HiOutlineEnvelope,
  HiOutlineArrowDownTray,
  HiEllipsisVertical,
} from "react-icons/hi2";

const DashboardTopBar = () => {
  const [dateValue, setDateValue] = useState({
    startDate: new Date(),
    endDate: new Date(),
  });

  const handleDatePickerValueChange = (newValue) => {
    console.log("newValue:", newValue);
    setDateValue(newValue);
    // updateDashboardPeriod(newValue);
  };
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
      <div className="">
        <Datepicker
          containerClassName="w-72 "
          value={dateValue}
          theme={"light"}
          inputClassName="input input-bordered w-72"
          popoverDirection={"down"}
          toggleClassName="invisible"
          onChange={handleDatePickerValueChange}
          showShortcuts={true}
          primaryColor={"white"}
        />
        {/* <SelectBox 
              options={periodOptions}
              labelTitle="Period"
              placeholder="Select date range"
              containerStyle="w-72"
              labelStyle="hidden"
              defaultValue="TODAY"
              updateFormValue={updateSelectBoxValue}
          /> */}
      </div>
      <div className="text-right ">
        <button className="btn btn-ghost btn-sm normal-case">
          <HiArrowPath className="w-4 h-5 mr-2" />
          Refresh Data
        </button>
        <button className="btn btn-ghost btn-sm normal-case  ml-2">
          <HiOutlineShare className="w-4 h-5 mr-2" />
          Share
        </button>

        <div className="dropdown dropdown-bottom dropdown-end  ml-2">
          <label
            tabIndex={0}
            className="btn btn-ghost btn-sm normal-case btn-square"
          >
            <HiEllipsisVertical className="w-5 h-5" />
          </label>
          <ul
            tabIndex={0}
            className="dropdown-content menu menu-compact p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <a>
                <HiOutlineEnvelope className="w-4" />
                Email Digests
              </a>
            </li>
            <li>
              <a>
                <HiOutlineArrowDownTray className="w-4" />
                Download
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

DashboardTopBar.propTypes = {
  updateDashboardPeriod: PropTypes.func,
};

export default DashboardTopBar;
