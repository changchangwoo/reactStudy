import React from "react";
import Button from "../common/Button";

const Summary = () => {
  const handleNext = () => {

  }
  const handlePrev = () => {
    
  }
  return (
    <>
      <div className="summaryContainer">
        <div className="topBox">
          <p>
            <h1>Arcade(Yearly)</h1>
            <h2>Change</h2>
          </p>
        </div>
        <hr />

        <ul>
          <li>
            <h2>Online service</h2>
            <h3>+$10/yr</h3>
          </li>
          <li>
            <h2>Larger storage</h2>
            <h3>+$20/yr</h3>
          </li>
        </ul>
      </div>
      <div className="priceBox">
        <div>
          <h2>Total (per year)</h2>
          <h1>$120/yr</h1>
        </div>
      </div>
      <Button onClick={handleNext} isNext={true} />
      <Button onClick={handlePrev} isNext={false} />
    </>
  );
};

export default Summary;
