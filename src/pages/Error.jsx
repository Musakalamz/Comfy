import { useRouteError } from "react-router-dom";

function Error() {
  const error = useRouteError();
  console.log(error);

  if (error.status === 404) {
    return <h2>SORRY</h2>;
  }

  return (
    <div>
      <h3>Something went wrong</h3>
    </div>
  );
}

export default Error;
