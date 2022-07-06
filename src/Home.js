import { Link } from "react-router-dom";
const Home = () => {
  return (
    <>
      <h1> Homepage</h1>
      <Link to="/login">
        <button>Login Page</button>
      </Link>
    </>
  );
};

export default Home;
