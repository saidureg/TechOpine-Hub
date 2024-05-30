import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import Home from "../pages/Home/Home/Home";
import ErrorPage from "../pages/ErrorPage";
import Product from "../pages/Product/Product";
import Contact from "../pages/Contact/Contact";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import PrivateRoute from "./PrivateRoute";
import Dashboard from "../layout/Dashboard";
import AddProduct from "../pages/Dashboard/User/AddProduct";
import ProductDetails from "../pages/Product/ProductDetails/ProductDetails";
import ReviewForm from "../pages/Product/ProductDetails/Review/ReviewForm";
import ReportForm from "../pages/Product/ProductDetails/ReportForm/ReportForm";
import MyProduct from "../pages/Dashboard/User/MyProduct/MyProduct";
import UpdatedProduct from "../pages/Dashboard/User/UpdatedProduct/UpdatedProduct";
import UserProfile from "../pages/Dashboard/User/Profile/UserProfile";
import ProductReview from "../pages/Dashboard/Moderator/ProductReview/ProductReview";
import FeaturesDetails from "../pages/Home/FeaturedProduct/FeaturesDetails";
import ReportedProduct from "../pages/Dashboard/Moderator/ReportedProduct/ReportedProduct";
import ManageUsers from "../pages/Dashboard/Admin/ManageUsers/ManageUsers";
import Statistics from "../pages/Dashboard/Admin/Statistics/Statistics";
import ModeratorRoute from "./ModeratorRoute";
import AdminRoute from "./AdminRoute";
import CouponForm from "../pages/Dashboard/Admin/ManageCoupons/CouponForm";
import ManageCoupons from "../pages/Dashboard/Admin/ManageCoupons/ManageCoupons";
import UpdateCoupon from "../pages/Dashboard/Admin/ManageCoupons/UpdateCoupon";
import ViewCoupon from "../pages/Dashboard/Admin/ManageCoupons/ViewCoupon";
import Payment from "../pages/Dashboard/User/Payment/Payment";
import Settings from "../pages/Dashboard/Settings/Settings";
import Layout from "../containers/Layout";
import AdminDashboard from "../pages/Dashboard/Admin/AdminDashboard/AdminDashboard";
import Transactions from "../pages/Dashboard/Admin/Transactions/Transactions";
import Leads from "../pages/Dashboard/Admin/Leads/Leads";
import Analytics from "../pages/Dashboard/Admin/Analytics/Analytics";
import Integration from "../pages/Dashboard/Admin/Integration/Integration";

const Router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/product",
        element: <Product />,
      },
      {
        path: "/productDetails/:id",
        element: (
          <PrivateRoute>
            <ProductDetails />
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(`http://localhost:5000/products/${params.id}`),
      },
      {
        path: "/featuresDetails/:id",
        element: (
          <PrivateRoute>
            <FeaturesDetails />
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(`http://localhost:5000/features/${params.id}`),
      },
      {
        path: "/review/:id",
        element: (
          <PrivateRoute>
            <ReviewForm />
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(`http://localhost:5000/products/${params.id}`),
      },
      {
        path: "/report/:id",
        element: (
          <PrivateRoute>
            <ReportForm />
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(`http://localhost:5000/products/${params.id}`),
      },
      {
        path: "/contact",
        element: <Contact />,
      },
    ],
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "dashboard",
    element: (
      <PrivateRoute>
        <Dashboard />
      </PrivateRoute>
    ),
    children: [
      {
        path: "settings",
        element: <Settings />,
      },
      // for user
      {
        path: "userProfile",
        element: <UserProfile />,
      },
      {
        path: "payment",
        element: <Payment />,
      },
      {
        path: "addProduct",
        element: <AddProduct />,
      },
      {
        path: "myProduct",
        element: <MyProduct />,
      },
      {
        path: "updatedProduct/:id",
        element: <UpdatedProduct />,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/products/${params.id}`),
      },

      // for Moderator
      {
        path: "moderatorProfile",
        element: (
          <ModeratorRoute>
            {" "}
            <UserProfile />{" "}
          </ModeratorRoute>
        ),
      },
      {
        path: "productReview",
        element: (
          <ModeratorRoute>
            <ProductReview />
          </ModeratorRoute>
        ),
      },
      {
        path: "reported",
        element: (
          <ModeratorRoute>
            <ReportedProduct />
          </ModeratorRoute>
        ),
      },
      // for Admin
      {
        path: "adminProfile",
        element: (
          <AdminRoute>
            {" "}
            <UserProfile />{" "}
          </AdminRoute>
        ),
      },
      {
        path: "statistics",
        element: (
          <AdminRoute>
            <Statistics />
          </AdminRoute>
        ),
      },
      {
        path: "manageUsers",
        element: (
          <AdminRoute>
            <ManageUsers />
          </AdminRoute>
        ),
      },
      {
        path: "manageCoupons",
        element: (
          <AdminRoute>
            <ManageCoupons />
          </AdminRoute>
        ),
      },
      {
        path: "addCoupons",
        element: (
          <AdminRoute>
            <CouponForm />
          </AdminRoute>
        ),
      },
      {
        path: "updatedCoupon/:id",
        element: (
          <AdminRoute>
            <UpdateCoupon />
          </AdminRoute>
        ),
        loader: ({ params }) =>
          fetch(`http://localhost:5000/coupon/${params.id}`),
      },
      {
        path: "viewCoupon/:id",
        element: (
          <AdminRoute>
            <ViewCoupon />
          </AdminRoute>
        ),
        loader: ({ params }) =>
          fetch(`http://localhost:5000/coupon/${params.id}`),
      },
    ],
  },
  {
    path: "admin",
    element: (
      <PrivateRoute>
        <Layout />
      </PrivateRoute>
    ),
    children: [
      {
        path: "dashboard",
        element: (
          <AdminRoute>
            <AdminDashboard />
          </AdminRoute>
        ),
      },
      {
        path: "leads",
        element: (
          <AdminRoute>
            <Leads />
          </AdminRoute>
        ),
      },
      {
        path: "transactions",
        element: (
          <AdminRoute>
            <Transactions />
          </AdminRoute>
        ),
      },
      {
        path: "analytics",
        element: (
          <AdminRoute>
            <Analytics />
          </AdminRoute>
        ),
      },
      {
        path: "integration",
        element: (
          <AdminRoute>
            <Integration />
          </AdminRoute>
        ),
      },
      {
        path: "users",
        element: (
          <AdminRoute>
            <ManageUsers />
          </AdminRoute>
        ),
      },
    ],
  },
]);

export default Router;
