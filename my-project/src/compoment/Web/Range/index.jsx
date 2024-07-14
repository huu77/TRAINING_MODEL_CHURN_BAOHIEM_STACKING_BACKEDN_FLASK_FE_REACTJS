import React, { useState } from "react";

const Range = ({name,min,max,getAllValue, setAllValue,type}) => {
  const [value, setValue] = useState(0);

  const handleChange = (e) => {
    const value = e.target.value
    setValue(value);
    switch (type) {
        
        case 'Claim_Amount':
          return  setAllValue({...getAllValue,Claim_Amount:value});
          case 'Premium_Amount_Ratio':
          return  setAllValue({...getAllValue,Premium_Amount_Ratio:value/100});
        default:
          return setAllValue({...getAllValue,BMI:Number(value)})
      }
  };

  return (
    <div className="w-full flex flex-col items-start">
      <label className="mb-2 text-lg  ">{name} {value}</label>
      <input
        type="range"
        min={min}
        max={max}
        value={value}
        className="range"
        onChange={handleChange}
      />
    </div>
  );
};

export default Range;
