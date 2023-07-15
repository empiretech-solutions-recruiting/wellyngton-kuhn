import { Navigate, Outlet } from "react-router-dom";
import { useAppSelector } from "redux/reduxHooks";

export default function ProtectedRoutes() {
  const { accessToken } = useAppSelector((state) => state.user);

  if (accessToken) {
    return <Outlet />;
  }

  return <Navigate to="./login" />;
}
