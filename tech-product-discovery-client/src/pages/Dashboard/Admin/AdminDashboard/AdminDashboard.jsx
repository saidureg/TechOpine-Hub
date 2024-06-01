import AmountStats from "./Components/AmountStats";
import BarChart from "./Components/BarChart";
import DashboardStats from "./Components/DashboardStats";
import DashboardTopBar from "./Components/DashboardTopBar";
import LineChart from "./Components/LineChart";
import PageStats from "./Components/PageStats";
import {
  HiOutlineUserGroup,
  HiOutlineCreditCard,
  HiOutlineCircleStack,
  HiOutlineUsers,
} from "react-icons/hi2";

const AdminDashboard = () => {
  const statsData = [
    {
      title: "New Users",
      value: "34.7k",
      icon: <HiOutlineUserGroup className="w-8 h-8" />,
      description: "↗︎ 2300 (22%)",
    },
    {
      title: "Total Sales",
      value: "$34,545",
      icon: <HiOutlineCreditCard className="w-8 h-8" />,
      description: "Current month",
    },
    {
      title: "Pending Leads",
      value: "450",
      icon: <HiOutlineCircleStack className="w-8 h-8" />,
      description: "50 in hot leads",
    },
    {
      title: "Active Users",
      value: "5.6k",
      icon: <HiOutlineUsers className="w-8 h-8" />,
      description: "↙ 300 (18%)",
    },
  ];
  return (
    <>
      {/** ---------------------- Select Period Content ------------------------- */}
      {/* <DashboardTopBar updateDashboardPeriod={updateDashboardPeriod} /> */}
      <DashboardTopBar />

      {/** ---------------------- Different stats content 1 ------------------------- */}
      <div className="grid lg:grid-cols-4 mt-2 md:grid-cols-2 grid-cols-1 gap-6">
        {statsData.map((d, k) => {
          return <DashboardStats key={k} {...d} colorIndex={k} />;
        })}
      </div>

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
