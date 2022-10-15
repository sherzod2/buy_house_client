import { useContext } from "react";
import { Context } from "../Context/getCompanies";

const useCompanies = () => {
  const { companies, setCompanies } = useContext(Context);

  return { companies, setCompanies };
};

export default useCompanies;
