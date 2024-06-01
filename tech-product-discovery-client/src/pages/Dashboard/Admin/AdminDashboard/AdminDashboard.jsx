import AmountStats from "./Components/AmountStats";
import BarChart from "./Components/BarChart";
import DashboardTopBar from "./Components/DashboardTopBar";
import LineChart from "./Components/LineChart";
import PageStats from "./Components/PageStats";

const AdminDashboard = () => {
  return (
    <>
      {/** ---------------------- Select Period Content ------------------------- */}
      {/* <DashboardTopBar updateDashboardPeriod={updateDashboardPeriod} /> */}
      <DashboardTopBar />

      {/** ---------------------- Different stats content 1 ------------------------- */}
      {/* <div className="grid lg:grid-cols-4 mt-2 md:grid-cols-2 grid-cols-1 gap-6">
      {statsData.map((d, k) => {
        return <DashboardStats key={k} {...d} colorIndex={k} />;
      })}
    </div> */}

      {/** ---------------------- Different charts ------------------------- */}
      <div className="grid lg:grid-cols-2 mt-4 grid-cols-1 gap-6">
        <LineChart />
        <BarChart />
      </div>

      {/** ---------------------- Different stats content 2 ------------------------- */}

      <div className="grid lg:grid-cols-2 mt-10 grid-cols-1 gap-6">
        <PageStats />
        <AmountStats />
      </div>

      {/** ---------------------- User source channels table  ------------------------- */}

      {/* <div className="grid lg:grid-cols-2 mt-4 grid-cols-1 gap-6">
      <UserChannels />
      <DoughnutChart />
    </div> */}
    </>
  );
};

export default AdminDashboard;
