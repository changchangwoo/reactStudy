import { useContext, useEffect, useState } from "react";
import arcadeIcon from "../../assets/imgs/icon-arcade.svg";
import advancedIcon from "../../assets/imgs/icon-advanced.svg";
import proIcon from "../../assets/imgs/icon-pro.svg";
import { IPlanBox, currentProps } from "../../model/ProgressContents.mdoel";
import Button from "../common/Button";
import useChecked from "../../hooks/useChecked";
import { isYearContext } from "../context/IsYearContext.ts";

interface SelectPlanProps extends currentProps {}
const planBoxContents: IPlanBox[] = [
  {
    id: 0,
    title: "Arcade",
    monthPrice: 9,
    yearPrice: 30,
    src: arcadeIcon,
  },
  {
    id: 1,
    title: "Advanced",
    monthPrice: 12,
    yearPrice: 50,
    src: advancedIcon,
  },
  {
    id: 2,
    title: "Pro",
    monthPrice: 18,
    yearPrice: 60,
    src: proIcon,
  },
];

const SelectPlan = ({ currentStep, setCurrentStep }: SelectPlanProps) => {
  const [checkedItem, handleCheck, setCheckedItem] = useChecked({limit : 1});
  const {isYear, setIsYear} = useContext(isYearContext);
  useEffect(()=>{
    const sessionData = sessionStorage.getItem(SelectPlan.name)
    if(sessionData) {
      const parseData = JSON.parse(sessionData);
      setCheckedItem([parseData.id])  
    }
  }, [])

  const handleNext = () => {
    if (checkedItem.length > 0) {
      const selectedPlan = planBoxContents.find((item) => item.id === checkedItem[0]);
  
      if (selectedPlan) {
        const selectPlanData = {
          id : selectedPlan.id,
          title : selectedPlan.title,
          price : isYear ? selectedPlan.yearPrice : selectedPlan.monthPrice
        }
  
        sessionStorage.setItem(SelectPlan.name, JSON.stringify(selectPlanData));
      }
    }
  
    setCurrentStep(currentStep + 1);
  };
  const handlePrev = () => {
    setCurrentStep(currentStep - 1);
  };

  return (
    <>
      <div className="planContainer">
        <ul className="planBoxContainer">
          {planBoxContents.map((item) => (
            <li
              className={
                checkedItem.includes(item.id) ? "planBox checked" : "planBox"
              }
              key={item.id}
              onClick={() => handleCheck(item.id)}
            >
              <img src={item.src} alt={item.title} />
              <h1>{item.title}</h1>
              <h2>
                {isYear ? `$${item.yearPrice}/yr` : `$${item.monthPrice}/mo`}
              </h2>
              {isYear && <h3> 2months free</h3>}
            </li>
          ))}
        </ul>
        <div className="planToggle">
          <h1>Monthly</h1>
          <label>
            <input
              className="planSwitch"
              role="switch"
              type="checkbox"
              checked={isYear}
              onChange={()=>setIsYear(!isYear)}
            />
          </label>
          <h1>Yearly</h1>
        </div>
      </div>
      <Button onClick={handleNext} isNext={true} />
      <Button onClick={handlePrev} isNext={false} />
    </>
  );
};

export default SelectPlan;
