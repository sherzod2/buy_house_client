import { useContext } from "react";
import { Context } from "../Context/getRooms";

const useRooms = () => {
  const { rooms, setRooms } = useContext(Context);

  return { rooms, setRooms };
};

export default useRooms;
