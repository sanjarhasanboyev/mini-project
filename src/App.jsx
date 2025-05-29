import { RouterProvider } from "react-router-dom";
import Groups from "./components/Groups";
import router from "./routing/router";

function App() {
  return <RouterProvider router={router} />;
}

export default App;
