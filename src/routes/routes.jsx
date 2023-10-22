import { createBrowserRouter } from "react-router-dom";
import LandingPage from "../pages/LandingPage";
import PropertiesPage from "../pages/PropertiesPage";
import LoginPage from "../pages/LoginPage";
import SignupPage from "../pages/SignupPage";
import NewPropertyPage from "../pages/NewPropertyPage";
import ShowPropertyPage from "../pages/ShowPropertyPage";
import Home from "../pages/Home";
import ProfilePropertiesPage from "../pages/ProfilePropertiesPage";
import SignupHomePage from "../pages/SignupHomePage";
import {
  loaderPropertiesActive,
  loaderPropertiesClosed,
  loaderPropertiesContacted,
  loaderPropertiesFavorites,
} from "./functions/loaders-functions";
import {
  PropertiesActive,
  PropertiesClosed,
  PropertiesContacted,
  PropertiesFavorites,
} from "../components/ProfileComponents/ProfileComponents";
import {
  favoriteProperties,
  indexProperties,
  listBestPrice,
  propertiesContacted,
  showProperty,
} from "../services/properties-services";
import { loaderHome } from "./functions/loader-session-services";

const router = createBrowserRouter([
  {
    errorElement: <div>Error</div>,
    path: "/",
    loader: loaderHome,
    element: <Home />,
    children: [
      {
        index: true,
        // loader: loaderHome,

        loader: listBestPrice,
        element: <LandingPage />,
      },
      {
        path: "/properties",
        loader: indexProperties,
        element: <PropertiesPage />,
      },
      {
        path: "/properties/:id",
        loader: showProperty,
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
            loader: loaderPropertiesActive,
            element: <PropertiesActive />,
          },
          {
            path: "/profile/closed",
            loader: loaderPropertiesClosed,
            element: <PropertiesClosed />,
          },
          {
            path: "/profile/favorites",
            loader: favoriteProperties,
            element: <PropertiesFavorites />,
          },
          {
            path: "/profile/contacted",
            loader: propertiesContacted,
            element: <PropertiesContacted />,
          },
        ],
      },
    ],
  },
]);

export default router;
