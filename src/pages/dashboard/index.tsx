import BrazilMap from "../../components/BrazilMap";
import { useAppSelector } from "redux/reduxHooks";

export default function Dashboard() {
  const { accessToken, user } = useAppSelector((state) => state.user);

  return (
    <div>
      <h1>Olá {user.name}</h1>
      {/* <BrazilMap /> */}
    </div>
  );
}
