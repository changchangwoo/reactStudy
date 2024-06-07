import React, { useContext, useEffect } from "react";
import Button from "../common/Button";
import { currentProps } from "../../model/ProgressContents.mdoel";
import { isYearContext } from "../context/IsYearContext.ts";

interface SummaryProps extends currentProps {

}

const Summary = ({ currentStep, setCurrentStep } : SummaryProps) => {
  const {isYear} = useContext(isYearContext);

  const handleNext = () => {
    setCurrentStep(currentStep+1)
  }
  const handlePrev = () => {
    setCurrentStep(currentStep-1)
  }

useEffect(()=>{
  sessionStorage.getItem()
}, [])
  return (
    <>
      <div className="summaryContainer">
        <div className="topBox">
          <div>
            <h1>Arcade(Yearly)</h1>
            <h2>Change</h2>
          </div>
        </div>
        <hr />

        <ul>
          <li>
            <h2>Online service</h2>
            <h3>+$10/yr</h3>
          </li>
          <li>
            <h2>Larger storage</h2>
            <h3>+$20/yr</h3>
          </li>
        </ul>
      </div>
      <div className="priceBox">
        <div>
          <h2>Total (per year)</h2>
          <h1>$120/yr</h1>
        </div>
      </div>
      <Button onClick={handleNext} isNext={true} />
      <Button onClick={handlePrev} isNext={false} />
    </>
  );
};

export default Summary;
