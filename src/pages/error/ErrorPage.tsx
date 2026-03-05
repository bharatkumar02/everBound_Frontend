import { useRouteError, isRouteErrorResponse } from "react-router";
import { Link } from "react-router";

export default function ErrorPage() {
  let error = useRouteError();
  if (isRouteErrorResponse(error)) {
    return (
      <>
        <h1 className="bg-red-500">
          {error.status} {error.statusText}
        </h1>
        <p className="text-xl">{error.data}</p>
        <Link to="..">Back</Link>
      </>
    );
  } else if (error instanceof Error) {
    return (
      <div>
        <h1>Error</h1>
        <p>{error.message}</p>
        <p>The stack trace is:</p>
        <pre>{error.stack}</pre>
        <Link to="..">Back</Link>
      </div>
    );
  } else {
    <Link to="..">Back</Link>;
    return (
      <>
        <h1>Page Not Found</h1>{" "}
      </>
    );
  }
}
