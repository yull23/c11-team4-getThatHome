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
  PropertiesActive,
  PropertiesClosed,
  PropertiesContacted,
  PropertiesFavorites,
} from "../components/ProfileComponents/ProfileComponents";
import {
  favoriteProperties,
  indexProperties,
  listBestPrice,
  myProperty,
  propertiesContacted,
  showProperty,
} from "../services/properties-services";
import { ProfilePage } from "../pages/ProfilePage";

import NewPropertyRent from "../components/NewPropertyComponents/NewPropertyRent";
import NewPropertySale from "../components/NewPropertyComponents/NewPropertySale";
import { loaderProfile } from "./functions/loader-profile";

const router = createBrowserRouter([
  {
    errorElement: <div>Error</div>,
    path: "/",
    element: <Home />,
    children: [
      {
        index: true,
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
        // path: "/new-property",
        element: <NewPropertyPage />,
        children: [
          {
            path: "/new-property/rent",
            element: <NewPropertyRent />,
          },
          {
            path: "/new-property/sale",
            element: <NewPropertySale />,
          },
        ],
      },
      {
        path: "/profile",
        loader: loaderProfile,
        element: <ProfilePage />,
      },
      {
        //path: "/profile",
        element: <ProfilePropertiesPage />,
        children: [
          {
            path: "/profile/active",
            loader: myProperty,
            element: <PropertiesActive />,
          },
          {
            path: "/profile/closed",
            loader: myProperty,
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
