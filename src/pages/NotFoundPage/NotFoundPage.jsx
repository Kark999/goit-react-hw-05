import { Link } from "react-router-dom";

const NotFoundPage = () => {
  return (
    <div>
      <h1>Page you visited not found!</h1>
      <Link to={"/"}>Go Home</Link>
    </div>
  );
};

export default NotFoundPage;
