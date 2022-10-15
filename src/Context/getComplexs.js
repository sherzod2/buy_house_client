import { createContext, useState, useEffect } from "react";

const Context = createContext();

function Provider({ children }) {
  const [complexs, setComplexs] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:7777/complex/`)
      .then((res) => res.json())
      .then((complexs) => setComplexs(complexs));
  }, []);

  return (
    <Context.Provider value={{ complexs, setComplexs }}>
      {children}
    </Context.Provider>
  );
}

export { Context, Provider };
