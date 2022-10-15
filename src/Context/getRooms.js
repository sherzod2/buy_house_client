import { createContext, useState, useEffect } from "react";

const Context = createContext();

function Provider({ children }) {
  const [rooms, setRooms] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:7777/room/`)
      .then((res) => res.json())
      .then((rooms) => setRooms(rooms));
  }, []);
  return (
    <Context.Provider value={{ rooms, setRooms }}>{children}</Context.Provider>
  );
}

export { Context, Provider };
