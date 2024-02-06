import { Link } from "react-router-dom";

export default function Home() {
  return (
    <>
      <h1>my home page</h1>
      <p>
        Go to <Link to="/products">Products Page</Link>
      </p>
    </>
  );
}
