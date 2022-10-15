import { createContext, useState, useEffect } from "react";

const Context = createContext();

function Provider({ children }) {
  const [complex, setComplex] = useState([]);
  const [complexId, setComplexId] = useState("");

  useEffect(() => {
    fetch(`http://localhost:7777/complex/id/${complexId}`)
      .then((res) => res.json())
      .then((complex) => setComplex(complex));
  }, [complexId]);

  return (
    <Context.Provider value={{ complex, setComplex, setComplexId, complexId }}>
      {children}
    </Context.Provider>
  );
}

export { Context, Provider };
