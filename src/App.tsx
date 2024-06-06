import { useState } from "react";
import "./App.css";
import ProgressController from "./components/ProgressController";
import ProgressContents from "./components/ProgressContents";
import PersonalInfo from "./components/contents/PersonalInfo";
import SelectPlan from "./components/contents/SelectPlan";
import AddOns from "./components/contents/AddOns";
import Summary from "./components/contents/Summary";
import { ItitleData } from "./model/ProgressContents.mdoel";


const titleData: ItitleData[] = [
  {
    id: 1,
    title: "Personal info",
    descript: "Please provide your name, email, address, and phone number"
  },
  {
    id: 2,
    title: "Select your plan",
    descript: "You have the option of monthly or yearly billing"
  },
  {
    id: 3,
    title: "Pick add-ons",
    descript: "Add-ons enhance your gaming experience"
  },
  {
    id: 4,
    title: "Finishing up",
    descript: "Double-check everything looks OK before confirming"
  }
];

function App() {
  const [currentStep, setCurrentStep] = useState<number>(1);

  const renderContent = () => {
    switch (currentStep) {
      case 1:
        return (
          <PersonalInfo
            currentStep={currentStep}
            setCurrentStep={setCurrentStep}
          />
        );
      case 2:
        return (
          <SelectPlan
            currentStep={currentStep}
            setCurrentStep={setCurrentStep}
          />
        );
      case 3:
        return (
          <AddOns
            currentStep={currentStep}
            setCurrentStep={setCurrentStep}
          />
        );
      case 4:
        return <Summary />;
      default:
        return (
          <PersonalInfo
            currentStep={currentStep}
            setCurrentStep={setCurrentStep}
          />
        );
    }
  };

  return (
    <div className="appContainer">
      <div className="progressContainer">
        <ProgressController
          currentStep={currentStep}
          setCurrentStep={setCurrentStep}
        />
        <ProgressContents
          title={titleData.find(data => data.id === currentStep)?.title || ""}
          subTitle={titleData.find(data => data.id === currentStep)?.descript || ""}
        >
          {renderContent()}
        </ProgressContents>
      </div>
    </div>
  );
}

export default App;
