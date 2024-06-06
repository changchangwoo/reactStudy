import React from "react";

interface ProgressControllerProps {
  setCurrentStep: (step: number) => void;
  currentStep: number;
}

const progressContents = ["YOUR INFO", "SELECT PLAN", "ADD-ONS", "SUMMARY"];

const ProgressController = ({ currentStep, setCurrentStep }: ProgressControllerProps) => {
  const onClickStep = (e: React.MouseEvent<HTMLDivElement>) => {
    const step = Number(e.currentTarget.textContent);
    setCurrentStep(step);
  };

  return (
    <div className="progressControllerContainer">
      <ul>
        {progressContents.map((item, index) => (
          <li key={index + 1}>
            <div
              className={`progressStep ${currentStep === index + 1 ? "active" : ""}`}
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
