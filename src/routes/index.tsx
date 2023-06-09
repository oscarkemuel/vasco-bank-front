import { Route, Routes } from "react-router-dom";
import { Home } from "../pages/Home";
import { Login } from "../pages/Login";
import PrivateRoute from "../components/PrivateRoute";
import { Dashboard } from "../pages/Dashboard";
import { Investments } from "../pages/Investments";
import { Financing } from "../pages/Financing";
import { Insurance } from "../pages/Insurance";
import { CreditCard } from "../pages/CreditCard";
import { Transfer } from "../pages/Transfer";
import { CurrentAccount } from "../pages/CurrentAccount";
import { Register } from "../pages/Register";
import { Profile } from "../pages/Profile";
import { NotFound } from "../pages/NotFound";

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route element={<PrivateRoute />}>
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/current-account" element={<CurrentAccount />} />
        <Route path="/transfer" element={<Transfer />} />
        <Route path="/investments" element={<Investments />} />
        <Route path="/financing" element={<Financing />} />
        <Route path="/insurance" element={<Insurance />} />
        <Route path="/creditCard" element={<CreditCard />} />
      </Route>
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};
