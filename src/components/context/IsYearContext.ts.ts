import React, { createContext } from 'react';

export const isYearContext = createContext<{
  isYear: boolean;
  setIsYear: React.Dispatch<React.SetStateAction<boolean>>;
}>({
  isYear: false,
  setIsYear: () => {}
});