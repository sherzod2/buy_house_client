import { useContext } from "react";
import { Context } from "../Context/getBank";

const useBank = () => {
  const { bank, setDuration, roomId, setBank } = useContext(Context);

  return { bank, setDuration, roomId, setBank };
};

export default useBank;
