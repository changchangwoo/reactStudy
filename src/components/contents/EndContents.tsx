import React from "react";
import {
  IEndContentsData,
  currentProps,
} from "../../model/ProgressContents.mdoel";
import thankyouIcon from "../../assets/imgs/icon-thank-you.svg";

const EndContentsData: IEndContentsData = {
  title: "Thank You!",
  descript: `Thanks for confirming your subscription! We hope you have fun using our platform. if you ever need supooert, pleases fell free to email us at support@loremgaiming.com`,
};

const EndContents = () => {
  return (
    <div className="endContentsContainer">
      <img src={thankyouIcon}></img>
      <h1>{EndContentsData.title}</h1>
      <h2>{EndContentsData.descript}</h2>
    </div>
  );
};

export default EndContents;
