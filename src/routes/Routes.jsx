import { createBrowserRouter } from "react-router";
import Root from "../root/Root";
import Home from "../pages/Home";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    errorElement: (
      <div className="text-3xl font-bold text-center">Error Page</div>
    ),
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
        path: "/bookings",
        element: <h1>this is bookings</h1>,
      },
      {
        path: "/blogs",
        element: <h1>this is blogs</h1>,
      },
    ],
  },
]);
