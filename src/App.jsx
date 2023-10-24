import { RouterProvider } from "react-router-dom";
import router from "./routes/routes";
import { ProfilePage } from "./pages/ProfilePage";

function App() {
  return <RouterProvider router={router} />;
  //return <ProfilePage/>
}

export default App;
