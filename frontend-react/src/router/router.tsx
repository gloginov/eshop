import {createBrowserRouter} from "react-router-dom";
import MainPage from "../pages/Main.tsx";
import ErrorPage from "../components/error/error-page.tsx";

const Router = createBrowserRouter([
  {
    path: "/",
    element: <MainPage />,
    errorElement: <ErrorPage />
  }
]);

export default Router;
