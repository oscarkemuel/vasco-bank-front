import { Link } from "react-router-dom";
import { useAuth } from "../../contexts/AuthContext";

export function Dashboard() {
  const { logOut } = useAuth();

  function handleLogout() {
    logOut();
  }

  return (
    <div>
      <h1>Dashboard</h1>

      <Link to="/current-account">Conta</Link><br />

      <button onClick={handleLogout}>Logout</button>
    </div>
  );
}