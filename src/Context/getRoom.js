import { createContext, useState, useEffect } from "react";

const Context = createContext();

function Provider({ children }) {
  const [room, setRoom] = useState([]);
  const [roomId, setRoomId] = useState("");

  useEffect(() => {
    fetch(`http://localhost:7777/room/id/${roomId}`)
      .then((res) => res.json())
      .then((room) => setRoom(room));
  }, [roomId]);

  return (
    <Context.Provider value={{ room, setRoom, setRoomId, roomId }}>
      {children}
    </Context.Provider>
  );
}

export { Context, Provider };
