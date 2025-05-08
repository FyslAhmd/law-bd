import { createBrowserRouter } from "react-router";
import Root from "../root/Root";
import Home from "../pages/Home";
import LawyerDetails from "../pages/LawyerDetails";
import Bookings from "../pages/Bookings";
import ErrorPage from "../components/Error404/ErrorPage";
import Blogs from "../pages/Blogs";
import Loading from "../components/Loading";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      {
        index: true,
        path: "/",
        Component: Home,
        loader: () => fetch("/data.json"),
        hydrateFallbackElement: <Loading></Loading>,
      },
      {
        path: "/details/:id",
        Component: LawyerDetails,
        loader: () => fetch("/data.json"),
        hydrateFallbackElement: <Loading></Loading>,
      },
      {
        path: "/bookings",
        Component: Bookings,
        loader: () => fetch("/data.json"),
        hydrateFallbackElement: <Loading></Loading>,
      },
      {
        path: "/blogs",
        Component: Blogs,
        loader: () => fetch("/question.json"),
        hydrateFallbackElement: <Loading></Loading>,
      },
    ],
  },
  {
    path: "*",
    Component: ErrorPage,
  },
]);
