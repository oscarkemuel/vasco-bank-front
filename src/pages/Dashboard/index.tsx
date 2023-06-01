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
      <Link to="/investments">Investimentos</Link><br/>
      <Link to="/financing">Financiamento</Link><br/>
      <Link to="/insurance">Seguro</Link><br/>
      <Link to="/creditCard">Cartão de Crédito</Link><br/>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
}