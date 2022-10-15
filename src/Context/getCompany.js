import { createContext, useState, useEffect } from "react";

const Context = createContext();

function Provider({ children }) {
  const [company, setCompany] = useState([]);
  const [companyId, setCompanyId] = useState("");

  useEffect(() => {
    fetch(`http://localhost:7777/company/id/${companyId}`)
      .then((res) => res.json())
      .then((company) => setCompany(company));
  }, [companyId]);

  return (
    <Context.Provider value={{ company, setCompany, setCompanyId, companyId }}>
      {children}
    </Context.Provider>
  );
}

export { Context, Provider };
