import { createBrowserRouter } from "react-router-dom";
// CONSTANTS
import { routes } from "./routes";
// COMPONENTS
import SearchScreen from "../pages/SearchScreen/SearchScreen";
import Layout from "../shared/Layout/Layout";
import NotFound from "../shared/NotFound/NotFound";
// RESOLVERS

const Router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: routes.home,
        element: <SearchScreen />,
      },
    ],
  },
  {
    path: "*",
    element: <NotFound />,
  },
]);

export default Router;
