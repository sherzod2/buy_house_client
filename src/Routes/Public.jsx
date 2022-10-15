import { useNavigate, Outlet, useLocation } from "react-router-dom";
import useToken from "../Hooks/useToken";

const Public = () => {
  const { token } = useToken();
  const { pathname } = useLocation();
  const navigate = useNavigate();
  if (token && pathname === "/login") return navigate("/admin/companies");
  return <Outlet />;
};

export default Public;
