import { useState, useCallback, ChangeEventHandler, SetStateAction } from "react";

type ReturnValue = [string, ChangeEventHandler<HTMLInputElement>, React.Dispatch<React.SetStateAction<string>>];

const useInput = (initValue: string): ReturnValue => {
  const [value, setter] = useState<string>(initValue);
  const handler = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setter(e.target.value);
  }, []);
  return [value, handler, setter];
};

export default useInput;
