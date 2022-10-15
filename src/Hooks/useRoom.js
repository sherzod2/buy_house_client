import { useContext } from "react";
import { Context } from "../Context/getRoom";

const useRoom = () => {
  const { room, setRoom, roomId, setRoomId } = useContext(Context);

  return { room, setRoom, roomId, setRoomId };
};

export default useRoom;
