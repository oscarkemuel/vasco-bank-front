import { createContext, useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import api from "../services/api";
import { APP_ROUTES } from "../constants/appRoutes";

interface ILoginData {
  email: string;
  password: string;
}

interface AuthContextData {
  login: (data: ILoginData) => void;
  logOut: () => void;
  token: string;
  userIsLogged: boolean;
  isLoading: boolean;
}

interface AuthProviderProps {
  children: React.ReactNode;
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

export function AuthProvider({ children }: AuthProviderProps) {
  const navigate = useNavigate();
  const [token, setToken] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  const userIsLogged = !!token;

  async function login(data: ILoginData) {
    api.auth
      .login(data)
      .then(async (response) => {
        const { token } = response.data;

        setToken(response.data.token);
        localStorage.setItem("@vasco-bank:token", token);
        navigate(APP_ROUTES.private.dashboard.home);
      })
      .catch(() => {
        toast.error("Ocorreu algum problema ao tentar logar");
      })
      .finally(() => {
        setIsLoading(false);
      });
  }

  function logOut() {
    setToken("");
    localStorage.removeItem("@vasco-bank:token");
    navigate("/login");
  }

  useEffect(() => {
    async function getTokenStoraged() {
      const userToken = localStorage.getItem("@vasco-bank:token");

      if (userToken) {
        setToken(userToken);
      }

      setIsLoading(false);
    }

    getTokenStoraged();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <AuthContext.Provider
      value={{
        login,
        logOut,
        token,
        userIsLogged,
        isLoading
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

// eslint-disable-next-line react-refresh/only-export-components
export function useAuth() {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error("useAuth must be used within a AuthProvider");
  }

  return context;
}
