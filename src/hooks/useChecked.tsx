import React, { SetStateAction, useState } from "react";

type ReturnValue = [
  number[],
  (id: number) => void,
  React.Dispatch<React.SetStateAction<number[]>>
];
interface Options {
  limit?: number;
}
const useChecked = ({ limit }: Options): ReturnValue => {
  const [checkedItem, setCheckedItem] = useState<number[]>([]);
  const handleCheck = (id: number) => {
    if (checkedItem.includes(id)) {
      setCheckedItem(checkedItem.filter((item) => item !== id));
    } else {
      if(limit && checkedItem.length >= limit) return
      setCheckedItem([...checkedItem, id]);
    }
  };

  return [checkedItem, handleCheck, setCheckedItem];
};

export default useChecked;
