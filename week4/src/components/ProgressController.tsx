import React from "react";
import { titleData } from "../App";
import { ItitleData } from "../model/ProgressContents.mdoel";

interface ProgressControllerProps {
  setCurrentStep: (step: number) => void;
  currentStep: number;
}

const progressContents: string[] = [
  "YOUR INFO",
  "SELECT PLAN",
  "ADD-ONS",
  "SUMMARY",
];

const ProgressController = ({
  currentStep,
  setCurrentStep,
}: ProgressControllerProps) => {
  const onClickStep = (e: React.MouseEvent<HTMLDivElement>) => {
    const step = Number(e.currentTarget.textContent);
    const stepSession = titleData.find((item: ItitleData) => {
      return item.id === step;
    })?.sessionKey;
    if (stepSession && sessionStorage.getItem(stepSession)) {
      setCurrentStep(step);
    }
  };

  return (
    <div className="progressControllerContainer">
      <ul>
        {progressContents.map((item, index) => (
          <li key={index + 1}>
            <div
              className={`progressStep ${
                currentStep === index + 1 ? "active" : ""
              }`}
              onClick={onClickStep}
            >
              {index + 1}
            </div>
            <div className="progressInfo">
              <h1>STEP {index + 1}</h1>
              <h2>{item}</h2>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProgressController;
