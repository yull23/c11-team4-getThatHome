import { createBrowserRouter } from "react-router-dom";
import LandingPage from "../pages/LandingPage";

const router = createBrowserRouter([
  {
    errorElement: <div>Error</div>,
    children: [
      {
        path: "/",
        element: <LandingPage />,
      },
    ],
  },
]);

export default router;
