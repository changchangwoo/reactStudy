import React, { useEffect, useState } from 'react'
import { isYearContext } from './IsYearContext.ts'

interface IsYearProviderProps {
    children : React.ReactNode
}

const IsYearProvider = ({children}:IsYearProviderProps) : React.ReactNode=> {
    const [isYear, setIsYear] = useState<boolean>(false);

    useEffect(()=>{
      const addOns = sessionStorage.getItem("AddOns");
      const selectPlan = sessionStorage.getItem("SelectPlan");
      if(addOns) {
        sessionStorage.removeItem("AddOns")
      }
      if(selectPlan) {
        sessionStorage.removeItem("SelectPlan")
      }
    }, [isYear])
  return (
    <isYearContext.Provider value={{isYear, setIsYear}}>
        {children}
    </isYearContext.Provider>
  )
}

export default IsYearProvider