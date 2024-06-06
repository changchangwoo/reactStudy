import { useState } from "react";
import arcadeIcon from "../../assets/imgs/icon-arcade.svg";
import advancedIcon from "../../assets/imgs/icon-advanced.svg";
import proIcon from "../../assets/imgs/icon-pro.svg";
import { IPlanBox, currentProps } from "../../model/ProgressContents.mdoel";
import Button from "../common/Button";
import useChecked from "../../hooks/useChecked";

interface SelectPlanProps extends currentProps {
}
const planBoxContents: IPlanBox[] = [
  {
    id: 1,
    title: "Arcade",
    monthPrice: 9,
    yearPrice: 30,
    src: arcadeIcon,
  },
  {
    id: 2,
    title: "Advanced",
    monthPrice: 12,
    yearPrice: 50,
    src: advancedIcon,
  },
  {
    id: 3,
    title: "Pro",
    monthPrice: 18,
    yearPrice: 60,
    src: proIcon,
  },
];

const SelectPlan = ({currentStep, setCurrentStep} : SelectPlanProps) => {
  const [checkedItem, handleCheck] = useChecked();

  const [isToggled, setIsToggled] = useState<boolean>(false);
  const handleToggle = () => {
    setIsToggled(!isToggled);
  };
  const handleNext = () => {
    if(checkedItem.length === 0) return
    else setCurrentStep(currentStep+1)
  }
  const handlePrev = () => {
    setCurrentStep(currentStep-1);
  }
  return (
    <>
    <div className="planContainer">
      <ul className="planBoxContainer">
        {planBoxContents.map((item) => (
          <li
            className={checkedItem.includes(item.id) ? "planBox checked" : "planBox"}
            key={item.id}
            onClick={() => handleCheck(item.id)}
          >
            <img src={item.src} alt={item.title} />
            <h1>{item.title}</h1>
            <h2>
              {isToggled
                ? `$${item.yearPrice}/yr`
                : `$${item.monthPrice}/mo`}
            </h2>
            {isToggled && <h3> 2months free</h3>}
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
            checked={isToggled}
            onChange={handleToggle}
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
