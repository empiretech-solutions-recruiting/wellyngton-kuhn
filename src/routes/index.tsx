import { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import ProtectedRoutes from "./ProtectedRoutes";

const Home = lazy(() => import("pages/home"));
const Dashboard = lazy(() => import("pages/dashboard"));
const Login = lazy(() => import("pages/login"));

export default function RoutesFile() {
  return (
    <Suspense fallback={""}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="login" element={<Login />} />

        <Route path="/" element={<ProtectedRoutes />}>
          <Route path="dashboard" element={<Dashboard />} />
        </Route>
      </Routes>
    </Suspense>
  );
}
