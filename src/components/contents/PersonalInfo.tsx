import React, { useEffect, useState } from 'react';
import { flushSync } from 'react-dom';
import useInput from "../../hooks/useInput";
import Button from "../common/Button";
import { currentProps } from '../../model/ProgressContents.mdoel';

interface PersonalInfoProps extends currentProps
{

};

const PersonalInfo = ({ currentStep, setCurrentStep }: PersonalInfoProps) => {
  const [inputName, setChangeInputName] = useInput('');
  const [inputAddress, setChangeInputAddress] = useInput('');
  const [inputPhone, setChangeInputPhone] = useInput('');
  const [validation, setValidation] = useState({
    name: true,
    address: true,
    phone: true,
  });
  const onClick = () => {
    setValidation({
      name: inputName.trim() !== '',
      address: inputAddress.trim() !== '',
      phone: inputPhone.trim() !== '',
    });
    if(inputName.trim() !== '' && inputAddress.trim() !== '' && inputPhone.trim() !== '') {
      setCurrentStep(currentStep+1)
    }
  }

  return (
    <>
      <ul className="inputBox">
        <li>
          <label>
            <div>Name</div>
            {!validation.name && <div className="inputCheckText">This field is required</div>}
          </label>
          <input type="text" value={inputName} onChange={setChangeInputName} className="inputForm"></input>
        </li>
        <li>
          <label>
            <div>Email</div>
            {!validation.address && <div className="inputCheckText">This field is required</div>}
          </label>
          <input type="email" value={inputAddress} onChange={setChangeInputAddress} className="inputForm"></input>
        </li>
        <li>
          <label>
            <div>Phone</div>
            {!validation.phone && <div className="inputCheckText">This field is required</div>}
          </label>
          <input type="text" value={inputPhone} onChange={setChangeInputPhone} className="inputForm" placeholder="e.g +1 234 567 890"></input>
        </li>
      </ul>
      <Button onClick={onClick} isNext={true} />
    </>
  );
};

export default PersonalInfo;
