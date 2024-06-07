import React, { useState } from 'react'
import { isYearContext } from './IsYearContext.ts'

interface IsYearProviderProps {
    children : React.ReactNode
}

const IsYearProvider = ({children}:IsYearProviderProps) : React.ReactNode=> {
    const [isYear, setIsYear] = useState<boolean>(false);
  return (
    <isYearContext.Provider value={{isYear, setIsYear}}>
        {children}
    </isYearContext.Provider>
  )
}

export default IsYearProvider