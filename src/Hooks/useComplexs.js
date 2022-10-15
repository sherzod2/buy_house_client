import { useContext } from "react";
import { Context } from "../Context/getComplexs";

const useComplexs = () => {
  const { complexs, setComplexs } = useContext(Context);

  return { complexs, setComplexs };
};

export default useComplexs;
