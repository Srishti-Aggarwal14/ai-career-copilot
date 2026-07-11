import { useNavigate } from "react-router-dom";

function Demo() {
  const navigate = useNavigate();

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>useNavigate Demo</h1>

      <button onClick={() => navigate("/resume")}>
        Go to Resume
      </button>
    </div>
  );
}

export default Demo;