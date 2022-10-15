import { createContext, useState, useEffect } from "react";

const Context = createContext();

function Provider({ children }) {
  const [companies, setCompanies] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:7777/company/`)
      .then((res) => res.json())
      .then((companies) => setCompanies(companies));
  }, []);
  return (
    <Context.Provider value={{ companies, setCompanies }}>
      {children}
    </Context.Provider>
  );
}

export { Context, Provider };
