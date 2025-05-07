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
            path: '/',
            Component: Home
        },
        {
            path: '/bookings',
            element: <h1>this is bookings</h1>
        },
        {
            path: '/blogs',
            element: <h1>this is blogs</h1>
        },
    ]
  },
]);
