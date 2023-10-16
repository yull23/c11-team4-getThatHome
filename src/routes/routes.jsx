import { createBrowserRouter } from "react-router-dom";
import LandingPage from "../pages/LandingPage";
import PropertiesPage from "../pages/PropertiesPage";
import LoginPage from "../pages/LoginPage";
import SignupPage from "../pages/SignupPage";
import NewPropertyPage from "../pages/NewPropertyPage";
import Draft from "../pages/Draft";
import ShowPropertyPage from "../pages/ShowPropertyPage";
import Home from "../pages/Home";
import ProfilePropertiesPage from "../pages/ProfilePropertiesPage";
import CardPanel from "../components/CardPanel/CardPanel";
import SignupHomePage from "../pages/SignupHomePage";

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
        path: "/signup-home",
        element: <SignupHomePage />,
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
        path: "/profile",
        element: <ProfilePropertiesPage />,
        children: [
          {
            path: "/profile/active",
            element: <CardPanel fromUser={true} />,
          },
          {
            path: "/profile/closed",
            element: <CardPanel fromUser={true} />,
          },
          {
            path: "/profile/favorites",
            element: <CardPanel fromUser={true} />,
          },
          {
            path: "/profile/contacted",
            element: <CardPanel fromUser={true} />,
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
