import { currentProps } from "../../model/ProgressContents.mdoel";
import Button from "../common/Button";
import useChecked from "../../hooks/useChecked";
import { useContext, useEffect } from "react";
import { isYearContext } from "../context/IsYearContext.ts";

interface AddOnsProps extends currentProps {}

const addOnsContents = [
  {
    id: 1,
    title: "Online service",
    descript: "Access to multiplayer games",
    monthPrice: 1,
    yearPrice: 20,
  },
  {
    id: 2,
    title: "Larger storage",
    descript: "Extra 1TB of cloud save",
    monthPrice: 1,
    yearPrice: 20,
  },
  {
    id: 3,
    title: "Customizable Profile",
    descript: "Custom theme on your profile",
    monthPrice: 1,
    yearPrice: 20,
  },
];

const AddOns = ({ currentStep, setCurrentStep }: AddOnsProps) => {
  const [checkedItem, handleCheck, setCheckedItem] = useChecked({});
  const { isYear } = useContext(isYearContext);

  const handleNext = () => {
    if (checkedItem.length > 0) {
      const selectAddons = checkedItem
        .map((id) => {
          const content = addOnsContents.find((item) => item.id === id);
          if (content)
            return {
              id: content.id,
              title: content.title,
              price: isYear ? content.yearPrice: content.monthPrice
            };
          else return null;
        })
        .filter((item) => item !== null);
      sessionStorage.setItem("AddOns", JSON.stringify(selectAddons));
      setCurrentStep(currentStep + 1);
    }
  };
  useEffect(() => {
    const sessionData = sessionStorage.getItem(AddOns.name);
    if (sessionData) {
      const parseData = JSON.parse(sessionData);
      setCheckedItem(parseData.map((item: any) => item.id));
    }
  }, []);

  const handlePrev = () => {
    setCurrentStep(currentStep - 1);
  };
  return (
    <>
      <ul className="addonsContainer">
        {addOnsContents.map((item) => (
          <li
            key={item.id}
            className={checkedItem.includes(item.id) ? "checkedList" : ""}
            onClick={() => handleCheck(item.id)}
          >
            <input
              className="addOnChecker"
              type="checkbox"
              onChange={() => handleCheck(item.id)}
              checked={checkedItem.includes(item.id)}
            />
            <div className="descriptBox">
              <h1>{item.title}</h1>
              <h2>{item.descript}</h2>
            </div>
            <div className="priceBox">{isYear ? `+$${item.yearPrice}/yr`:`+$${item.monthPrice}/mo`}</div>
          </li>
        ))}
      </ul>
      <Button onClick={handleNext} isNext={true} />
      <Button onClick={handlePrev} isNext={false} />
    </>
  );
};

export default AddOns;
