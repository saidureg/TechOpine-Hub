/** Icons are imported separatly to reduce build time */
import { IoDocumentTextOutline } from "react-icons/io5";
import { AiOutlineSecurityScan } from "react-icons/ai";
import { LiaUserCogSolid } from "react-icons/lia";
import { CiDiscount1 } from "react-icons/ci";
import { MdOutlineBugReport } from "react-icons/md";
import {
  HiOutlineSquares2X2,
  HiOutlineTableCells,
  HiOutlineWallet,
  HiOutlineCodeBracketSquare,
  HiOutlineDocument,
  HiOutlineExclamationTriangle,
  HiOutlineCalendarDays,
  HiOutlineArrowRightOnRectangle,
  HiOutlineUser,
  HiOutlineCog6Tooth,
  HiOutlineDocumentDuplicate,
  HiOutlineBolt,
  HiOutlineChartBar,
  HiOutlineCurrencyDollar,
  HiOutlineKey,
  HiOutlineUsers,
  HiOutlineInboxArrowDown,
} from "react-icons/hi2";

const iconClasses = `h-6 w-6`;
const submenuIconClasses = `h-5 w-5`;

const routes = [
  {
    path: "/admin/dashboard",
    icon: <HiOutlineSquares2X2 className={iconClasses} />,
    name: "Dashboard",
  },
  {
    path: "/admin/leads", // url
    icon: <HiOutlineInboxArrowDown className={iconClasses} />, // icon component
    name: "Leads", // name that appear in Sidebar
  },
  {
    path: "/admin/transactions", // url
    icon: <HiOutlineCurrencyDollar className={iconClasses} />, // icon component
    name: "Transactions", // name that appear in Sidebar
  },
  {
    path: "/admin/analytics", // url
    icon: <HiOutlineChartBar className={iconClasses} />, // icon component
    name: "Analytics", // name that appear in Sidebar
  },
  {
    path: "/admin/integration", // url
    icon: <HiOutlineBolt className={iconClasses} />, // icon component
    name: "Integration", // name that appear in Sidebar
  },
  {
    path: "/admin/users", // url
    icon: <LiaUserCogSolid className={iconClasses} />, // icon component
    name: "Users", // name that appear in Sidebar
  },
  {
    path: "/admin/coupons", // url
    icon: <CiDiscount1 className={iconClasses} />, // icon component
    name: "Coupons", // name that appear in Sidebar
  },
  {
    path: "/admin/reports",
    icon: <MdOutlineBugReport />,
    name: "Reports",
  },
  {
    path: "/admin/calendar", // url
    icon: <HiOutlineCalendarDays className={iconClasses} />, // icon component
    name: "Calendar", // name that appear in Sidebar
  },
  {
    path: "/admin/pages", // url
    icon: <HiOutlineDocumentDuplicate className={iconClasses} />, // icon component
    name: "Pages", // name that appear in Sidebar
  },

  {
    path: "", //no url needed as this has submenu
    icon: <AiOutlineSecurityScan className={`${iconClasses} inline`} />, // icon component
    name: "Authentication", // name that appear in Sidebar
    submenu: [
      {
        path: "/login",
        icon: <HiOutlineArrowRightOnRectangle className={submenuIconClasses} />,
        name: "Login",
      },
      {
        path: "/register", //url
        icon: <HiOutlineUser className={submenuIconClasses} />, // icon component
        name: "Register", // name that appear in Sidebar
      },
      {
        path: "/forgot-password",
        icon: <HiOutlineKey className={submenuIconClasses} />,
        name: "Forgot Password",
      },
      {
        path: "/admin/blank",
        icon: <HiOutlineDocument className={submenuIconClasses} />,
        name: "Blank Page",
      },
      {
        path: "/admin/404",
        icon: <HiOutlineExclamationTriangle className={submenuIconClasses} />,
        name: "404",
      },
    ],
  },
  {
    path: "", //no url needed as this has submenu
    icon: <HiOutlineCog6Tooth className={`${iconClasses} inline`} />, // icon component
    name: "Settings", // name that appear in Sidebar
    submenu: [
      {
        path: "/admin/settings-profile", //url
        icon: <HiOutlineUser className={submenuIconClasses} />, // icon component
        name: "Profile", // name that appear in Sidebar
      },
      {
        path: "/admin/settings-billing",
        icon: <HiOutlineWallet className={submenuIconClasses} />,
        name: "Billing",
      },
      {
        path: "/admin/settings-team", // url
        icon: <HiOutlineUsers className={submenuIconClasses} />, // icon component
        name: "Team Members", // name that appear in Sidebar
      },
    ],
  },
  {
    path: "", //no url needed as this has submenu
    icon: <IoDocumentTextOutline className={`${iconClasses} inline`} />, // icon component
    name: "Documentation", // name that appear in Sidebar
    submenu: [
      {
        path: "/admin/getting-started", // url
        icon: <IoDocumentTextOutline className={submenuIconClasses} />, // icon component
        name: "Getting Started", // name that appear in Sidebar
      },
      {
        path: "/admin/features",
        icon: <HiOutlineTableCells className={submenuIconClasses} />,
        name: "Features",
      },
      {
        path: "/admin/components",
        icon: <HiOutlineCodeBracketSquare className={submenuIconClasses} />,
        name: "Components",
      },
    ],
  },
];

export default routes;
