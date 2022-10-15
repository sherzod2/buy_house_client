import { createContext, useState, useEffect } from "react";
import useRoom from "../Hooks/useRoom";

const Context = createContext();

function Provider({ children }) {
  const [bank, setBank] = useState([]);
  const [duration, setDuration] = useState("");
  const { roomId } = useRoom();

  useEffect(() => {
    fetch(`http://localhost:7777/bank?room_id=${roomId}&duration=${duration}`)
      .then((res) => res.json())
      .then((bank) => setBank(bank));
  }, [roomId, duration]);

  return (
    <Context.Provider value={{ bank, setBank, setDuration, roomId }}>
      {children}
    </Context.Provider>
  );
}

export { Context, Provider };
