import { useNavigate } from "react-router-dom";

function NotFound() {
  const navigate = useNavigate();

  return (
    <div style={{ textAlign: "center", marginTop: "80px" }}>
      <h1>404 😢</h1>

      <h2>Page Not Found</h2>

      <p>
        Oops! The page you are looking for doesn't exist.
      </p>

      <button onClick={() => navigate("/")}>
        🏠 Back to Home
      </button>
    </div>
  );
}

export default NotFound;