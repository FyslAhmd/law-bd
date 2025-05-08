import { createBrowserRouter } from "react-router";
import Root from "../root/Root";
import Home from "../pages/Home";
import LawyerDetails from "../pages/LawyerDetails";
import Bookings from "../pages/Bookings";
import ErrorPage from "../components/Error404/ErrorPage";

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
        hydrateFallbackElement: (
          <h1 className="text-2xl text-center font-bold mt-20">Loading...</h1>
        ),
      },
      {
        path: "/details/:id",
        Component: LawyerDetails,
        loader: () => fetch("/data.json"),
        hydrateFallbackElement: (
          <h1 className="text-2xl text-center font-bold mt-20">Loading...</h1>
        ),
        errorElement: <h1>this is error</h1>
      },
      {
        path: "/bookings",
        Component: Bookings,
        loader: () => fetch("/data.json"),
        hydrateFallbackElement: (
          <h1 className="text-2xl text-center font-bold mt-20">Loading...</h1>
        ),
      },
      {
        path: "/blogs",
        element: <h1>this is blogs</h1>,
      },
    ],
  },
  {
    path: "*",
    Component: ErrorPage,
  },
]);
