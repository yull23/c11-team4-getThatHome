import { createBrowserRouter } from "react-router-dom";
import LandingPage from "../pages/LandingPage";
import PropertiesPage from "../pages/PropertiesPage";
import LoginPage from "../pages/LoginPage";
import SignupPage from "../pages/SignupPage";
import NewPropertyPage from "../pages/NewPropertyPage";
import ProfileViewPage from "../pages/ProfileViewPage";
import Draft from "../pages/Draft";
import ShowPropertyPage from "../pages/ShowPropertyPage";
import Home from "../pages/Home";
import ProfilePropertiesPage from "../pages/ProfilePropertiesPage";

const router = createBrowserRouter([
  {
    errorElement: <div>Error</div>,
    path: "/",
    element: <Home />,
    children: [
      {
        index: true,
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
      },
      {
        path: "/profile",
        element: <ProfilePropertiesPage />,
        children: [
          {
            path: "/profile/active",
            element: <div>hi</div>,
          },
          {
            path: "/profile/closed",
            element: <div>hi</div>,
          },
          {
            path: "/profile/favorites",
            element: <div>hi</div>,
          },
          {
            path: "/profile/contacted",
            element: <div>hi</div>,
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
