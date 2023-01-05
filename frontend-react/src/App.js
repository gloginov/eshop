import { RouterProvider } from "react-router-dom"
import Router from "./router/router.tsx"
import './scss/style.scss'; // base styles

function App() {
  return (
    <RouterProvider router={Router} />
  );
}

export default App;
