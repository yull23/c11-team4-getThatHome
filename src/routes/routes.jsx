import { createBrowserRouter } from "react-router-dom";
import LandingPage from "../pages/LandingPage";
import PropertiesPage from "../pages/PropertiesPage";
import ShowPropertyPage from "../pages/SearchPage";
import LoginPage from "../pages/LoginPage";
import SignupPage from "../pages/SignupPage";
import NewPropertyPage from "../pages/NewPropertyPage";
import ProfileViewPage from "../pages/ProfileViewPage";
import Draft from "../pages/Draft";

const router = createBrowserRouter([
  {
    errorElement: <div>Error</div>,
    children: [
      {
        path: "/",
        element: <LandingPage />,
      },
      {
        path: "/properties",
        element: <PropertiesPage />,
      },
      {
        path: "/properties/:id",
        element: <ShowPropertyPage />,
      },
      {
        path: "/login",
        element: <LoginPage />,
      },
      {
        path: "/signup",
        element: <SignupPage />,
      },
      {
        path: "/new-property",
        element: <NewPropertyPage />,
      },
      {
        path: "/profile-view",
        element: <ProfileViewPage />,

        children: [
          {
            path: "/favorite",
            element: <NewPropertyPage />,
          },
          {
            path: "/contact",
            element: <NewPropertyPage />,
          },
        ],
      },
      {
        path: "/draft",
        element: <Draft />,
      },
    ],
  },
]);

export default router;
