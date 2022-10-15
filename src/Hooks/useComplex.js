import { useContext } from "react";
import { Context } from "../Context/getComplex";

const useComplex = () => {
  const { complex, setComplex, complexId, setComplexId } = useContext(Context);

  return { complex, setComplex, complexId, setComplexId };
};

export default useComplex;
