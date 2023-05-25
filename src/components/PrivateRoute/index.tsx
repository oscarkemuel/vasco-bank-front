import { useEffect } from "react";
import { APP_ROUTES } from "../../constants/appRoutes";
import { useAuth } from "../../contexts/AuthContext";
import { useNavigate } from "react-router-dom";

type PrivateRouteProps = {
  children: React.ReactNode;
}

const PrivateRoute = ({children}: PrivateRouteProps) => {
  const { userIsLogged, isLoading } = useAuth()
  const navigate = useNavigate()

  useEffect(() => {
    function verifyUserIsLogged() {
      if (!userIsLogged && !isLoading) {
        return navigate(APP_ROUTES.public.login)
      }
    }

    verifyUserIsLogged()
  }, [userIsLogged, isLoading, navigate])

  return (
    <>
      {(!userIsLogged && isLoading) && <h1>Carregando..</h1>}
      {(userIsLogged && !isLoading) && children}
    </>
  )
}

export default PrivateRoute