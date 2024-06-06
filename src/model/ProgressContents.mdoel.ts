export interface currentProps {
  setCurrentStep: React.Dispatch<React.SetStateAction<number>>;
  currentStep: number;
}

export interface IPlanBox {
  id: number;
  title: string;
  monthPrice: number;
  yearPrice: number;
  src: string;
}

export interface IAddOns {
  id: number;
  title: string;
  descript: string;
  price: number;
}

export interface ItitleData {
  id: number;
  title: string;
  descript: string;
}
