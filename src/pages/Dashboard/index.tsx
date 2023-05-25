import { useAuth } from "../../contexts/AuthContext";

export function Dashboard() {
  const { logOut } = useAuth();

  function handleLogout() {
    logOut();
  }

  return (
    <div>
      <h1>Dashboard</h1>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
}