import { Link } from "../my-react-router/my-react-router";

export default function Profile() {
  return (
    <>
      <span style={{ marginBottom: "1.5rem" }}>
        <span className="text-red">Profile</span> page!
      </span>
      <div className="navbar">
        <Link to="/main">Main</Link>
        <Link to="/">Home</Link>
      </div>
    </>
  );
}
