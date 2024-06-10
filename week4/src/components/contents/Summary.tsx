import React, { useContext, useEffect, useState } from "react";
import Button from "../common/Button";
import { isYearContext } from "../context/IsYearContext.ts";
import { currentProps } from "../../model/ProgressContents.mdoel.ts";

interface SummaryProps extends currentProps {}

interface addOnsData {
  title: string;
  price: number;
}

const Summary = ({ currentStep, setCurrentStep }: SummaryProps) => {
  const { isYear } = useContext(isYearContext);
  const [addOnsData, setAddOnsData] = useState<addOnsData[] | null>(null);
  const [selectPlanData, setSelectPlanData] = useState<addOnsData | null>(null);
  const YearMonthCheck = isYear ? "/yr" : "/mo";
  const handleNext = () => {
    setCurrentStep(currentStep + 1);
  };

  const handlePrev = () => {
    setCurrentStep(currentStep - 1);
  };

  const handleChange = () => {
    setCurrentStep(2);
  };

  useEffect(() => {
    const addOns = sessionStorage.getItem("AddOns");
    const selectPlan = sessionStorage.getItem("SelectPlan");

    if (addOns) {
      const parseAddOnsData = JSON.parse(addOns)
      setAddOnsData(parseAddOnsData);
    }

    if (selectPlan) {
      const parseSelectPlan = JSON.parse(selectPlan)
      setSelectPlanData(parseSelectPlan);
    }
  }, []);

  return (
    <>
      <div className="summaryContainer">
        <div className="topBox">
          <div>
            <h1>
              {selectPlanData &&
                `${selectPlanData.title} (${isYear ? "Yearly" : "/Monthly"})`}
            </h1>
            <h2 onClick={handleChange}>Change</h2>
          </div>
          <div className="topPrice">
            {selectPlanData && `$${selectPlanData.price}${YearMonthCheck}`}
          </div>
        </div>
        <hr />
        <ul>
          {addOnsData &&
            addOnsData.map((item) => (
              <li>
                <h2>{item.title}</h2>
                <h3>{`$${item.price}${YearMonthCheck}`}</h3>
              </li>
            ))}
        </ul>
      </div>
      <div className="priceBox">
        <div>
          <h2>{`Total (per ${isYear ? 'year' : 'month'})`}</h2>
          <h1>{`$${(Array.isArray(addOnsData) && (selectPlanData)) 
            && addOnsData.reduce((acc, item) => acc + item.price, 0)+selectPlanData.price} 
            ${YearMonthCheck}`}
            </h1>
        </div>
      </div>
      <Button onClick={handleNext} isNext={true} />
      <Button onClick={handlePrev} isNext={false} />
    </>
  );
};

export default Summary;
