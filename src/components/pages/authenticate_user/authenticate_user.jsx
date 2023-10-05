import { Navigate, Outlet } from "react-router-dom";
import { useSelector } from "react-redux";

const AuthenticateUser = () => {
  const token = useSelector((state) => state.user.userData.token);

  if (!token) {
    return <Navigate to="/" />;
  } else {
    return <Outlet/>;
  }
};

export default AuthenticateUser;
