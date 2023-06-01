import { Route, Routes } from "react-router-dom";
import { Home } from "../pages/Home";
import { Login } from "../pages/Login";
import PrivateRoute from "../components/PrivateRoute";
import { Dashboard } from "../pages/Dashboard";
import { Investments } from "../pages/Investments";
import { Financing } from "../pages/Financing";
import { Insurance } from "../pages/Insurance";
import { CreditCard } from "../pages/CreditCard";

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route
        path="/dashboard"
        element={
          <PrivateRoute>
            <Dashboard />
          </PrivateRoute>
        }
      />
      <Route
        path="/investments"
        element={
          <PrivateRoute>
            <Investments />
          </PrivateRoute>
        }
      />
      <Route
        path="/financing"
        element={
          <PrivateRoute>
            <Financing />
          </PrivateRoute>
        }
      />
      <Route
        path="/insurance"
        element={
          <PrivateRoute>
            <Insurance />
          </PrivateRoute>
        }
      />
      <Route
        path="/creditCard"
        element={
          <PrivateRoute>
            <CreditCard />
          </PrivateRoute>
        }
      />
      <Route path="*" element={<h1>Not Found</h1>} />
    </Routes>
  );
};
