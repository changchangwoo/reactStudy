import React from "react";

interface ButtonProps {
  onClick : ()=> void;
  isNext: boolean;
}
const Button = ({ isNext, onClick }: ButtonProps) => {
  if (isNext) {
    return <button className="ButtonStyle" onClick={onClick}>Next Step</button>;
  } else {
    return <button className="ButtonStyle back" onClick={onClick}>Go Back</button>;
  }
};

export default Button;
