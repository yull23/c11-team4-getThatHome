import { RouterProvider } from "react-router-dom";
import router from "./routes/routes";
import ContainerPage from "./components/Containers/ContainerPage";

function App() {
  return (
    <ContainerPage>
      <RouterProvider router={router} />
    </ContainerPage>
  );
}

export default App;
