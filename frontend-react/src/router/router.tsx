import {createBrowserRouter} from "react-router-dom";
import MainPage from "../pages/Main.tsx";
import CatalogPage from "../pages/Catalog.tsx";
import ErrorPage from "../components/error/error-page.tsx";

const Router = createBrowserRouter([
  {
    path: "/",
    element: <MainPage />,
    errorElement: <ErrorPage />,
    // children: [
    //   {
    //     path: '/catalog',
    //     element: <CatalogPage />
    //   }
    // ]
  },
  {
    path: '/catalog',
    element: <CatalogPage />
  }
]);

export default Router;
