import React, { useState } from "react";
import { currentProps } from "../../model/ProgressContents.mdoel";
import Button from "../common/Button";
import useChecked from "../../hooks/useChecked";

interface AddOnsProps extends currentProps {}

const addOnsContents = [
  {
    id: 1,
    title: "Online service",
    descript: "Access to multiplayer games",
    price: 1,
  },
  {
    id: 2,
    title: "Larger storage",
    descript: "Extra 1TB of cloud save",
    price: 2,
  },
  {
    id: 3,
    title: "Customizable Profile",
    descript: "Custom theme on your profile",
    price: 2,
  },
];

const AddOns = ({ currentStep, setCurrentStep }: AddOnsProps) => {
  const [checkedItem, handleCheck] = useChecked();

  const handleNext = () => {
    setCurrentStep(currentStep+1)
  }
  const handlePrev = () => {
    setCurrentStep(currentStep-1);
  }
  return (
    <>
    <ul className="addonsContainer">
      {addOnsContents.map((item) => (
        <li key={item.id} className={checkedItem.includes(item.id) ? "checkedList": ""}>
          <input className="addOnChecker" 
          type="checkbox"
          onChange={()=>handleCheck(item.id)}
          />
          <div className="descriptBox">
            <h1>{item.title}</h1>
            <h2>{item.descript}</h2>
          </div>
          <div className="priceBox">+${item.price}mo</div>
        </li>
      ))}
    </ul>
    <Button onClick={handleNext} isNext={true} />
    <Button onClick={handlePrev} isNext={false} />
    </>
  );
};

export default AddOns;
