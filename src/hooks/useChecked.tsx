import React, { SetStateAction, useState } from 'react';

type ReturnValue = [number[], (id: number) => void, React.Dispatch<React.SetStateAction<number[]>>]; // 반환 값의 타입 지정

const useChecked = (): ReturnValue => {
    const [checkedItem, setCheckedItem] = useState<number[]>([]);
    
    const handleCheck = (id: number) => {
        if (checkedItem.includes(id))
            setCheckedItem(checkedItem.filter((item) => item !== id));
        else 
            setCheckedItem([...checkedItem, id]);
    };
    
    return [checkedItem, handleCheck, setCheckedItem];
};

export default useChecked;
