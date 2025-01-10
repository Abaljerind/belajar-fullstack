import { useRouteError } from "react-router-dom";

function ErrorPage() {
  const error = useRouteError();

  return (
    <div>
      <h1>Ups, ada Error!!!</h1>
      <p>Something went wrong.</p>
      {error && (
        <div>
          <p>Error Details:</p>
          <p>{error.status}</p>
          <p>{error.statusText}</p>
          <p>{error.data}</p>
        </div>
      )}
    </div>
  );
}

export default ErrorPage;
