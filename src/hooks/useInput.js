import { useState } from "react";

export const useInput = () => {
  const [inputs, setInputs] = useState(false);

  const handler = (e) => {
    setInputs((inputs = !inputs));
  };
  return [inputs, handler, setInputs];
};
export default useInput;
