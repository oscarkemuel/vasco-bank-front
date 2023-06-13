import { Route, Routes } from "react-router-dom";
import { Home } from "../pages/Home";
import { Login } from "../pages/Login";
import PrivateRoute from "../components/PrivateRoute";
import { Dashboard } from "../pages/Dashboard";
import { CurrentAccount } from "../pages/CurrentAccount";
import { Transfer } from "../pages/Transfer";

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route element={<PrivateRoute />}>
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/current-account" element={<CurrentAccount />} />
        <Route path="/transfer" element={<Transfer />} />
      </Route>
      <Route path="*" element={<h1>Not Found</h1>} />
    </Routes>
  );
};
