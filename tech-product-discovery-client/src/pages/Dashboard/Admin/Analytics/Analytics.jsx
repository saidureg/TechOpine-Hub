import Datepicker from "react-tailwindcss-datepicker";
import { useState } from "react";
import StackBarChart from "./Components/StackBarChart";
import BarChart from "./Components/BarChart";
import DoughnutChart from "./Components/DoughnutChart";
import PieChart from "./Components/PieChart";
import ScatterChart from "./Components/ScatterChart";

const Analytics = () => {
  const [dateValue, setDateValue] = useState({
    startDate: new Date(),
    endDate: new Date(),
  });

  const handleDatePickerValueChange = (newValue) => {
    console.log("newValue:", newValue);
    setDateValue(newValue);
  };
  return (
    <>
      <Datepicker
        containerClassName="w-72"
        value={dateValue}
        theme={"light"}
        inputClassName="input input-bordered w-72"
        popoverDirection={"down"}
        toggleClassName="invisible"
        onChange={handleDatePickerValueChange}
        showShortcuts={true}
        primaryColor={"white"}
      />
      {/** ---------------------- Different charts ------------------------- */}
      <div className="grid lg:grid-cols-2 mt-0 grid-cols-1 gap-6">
        <StackBarChart />
        <BarChart />
      </div>

      <div className="grid lg:grid-cols-2 mt-4 grid-cols-1 gap-6">
        <DoughnutChart />
        <PieChart />
      </div>

      <div className="grid lg:grid-cols-2 mt-4 grid-cols-1 gap-6">
        <ScatterChart />
        {/* <LineChart /> */}
      </div>
    </>
  );
};

export default Analytics;
