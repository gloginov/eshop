import { useRouteError } from "react-router-dom";

const ErrorPage = () => {
  const error = useRouteError();

  return (
    <div className="error-page">
      <h1>Oops!</h1>
      <h3>{error.statusText || error.message}</h3>
    </div>
  )
}

export default ErrorPage;