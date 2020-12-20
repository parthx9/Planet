import React from "react";
import { FirstOption, groupedOptions } from "./data";
import Select from 'react-select';

const formatGroupLabel = (data) => (
  <div className='groupStyles'>
    <span>{data.label}</span>
    <span className='groupBadgeStyles'>{data.options.length}</span>
  </div>
);

export default function Form({ setSubject }) {
  const selectMajor = (e) => {
    setSubject(e.core);
  };
  return (
    <div className='container'>
      <div className='form-area'>
        <h4>Select your Major</h4>
          <Select
            defaultValue={FirstOption[0]}
            options={groupedOptions}
            formatGroupLabel={formatGroupLabel}
            onChange={selectMajor}
          />  
      </div>
    </div>
  );
}
