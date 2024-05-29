import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div>
      <h1>Error page</h1>
      <p>something is wrong</p>
      <Link to="/">Go back to home?</Link>
    </div>
  );
};

export default ErrorPage;
