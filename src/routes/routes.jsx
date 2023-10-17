import { createBrowserRouter } from "react-router-dom";
import LandingPage from "../pages/LandingPage";
import PropertiesPage from "../pages/PropertiesPage";
import LoginPage from "../pages/LoginPage";
import SignupPage from "../pages/SignupPage";
import ProfileViewPage from "../pages/ProfileViewPage";
import Draft from "../pages/Draft";
import ShowPropertyPage from "../pages/ShowPropertyPage";
import NewPropertyPage from "../pages/NewPropertyPage";


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
        element: <NewPropertyPage/>,
      },
      {
        path: "/profile-view",
        element: <ProfileViewPage />,
      },
      {
        path: "/draft",
        element: <Draft />,
      },
    ],
  },
]);

export default router;
