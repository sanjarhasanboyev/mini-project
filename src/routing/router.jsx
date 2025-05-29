import { createBrowserRouter } from "react-router-dom";
import Groups from "../components/Groups";
import AboutStudent from "../components/AboutStudent";

const router = createBrowserRouter([
  {
    path: "/group",
    element: <Groups />,
  },
  {
    path: "/profile/:id",
    element: <AboutStudent />,
  },
]);

export default router;
