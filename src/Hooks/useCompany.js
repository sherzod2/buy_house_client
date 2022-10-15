import { useContext } from "react";
import { Context } from "../Context/getCompany";

const useCompany = () => {
  const { company, setCompany, companyId, setCompanyId } = useContext(Context);

  return { company, setCompany, companyId, setCompanyId };
};

export default useCompany;
