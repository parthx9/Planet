import React from "react";
import { ScienceOptions, groupedOptions } from "./data";
import Select from 'react-select';

const formatGroupLabel = (data) => (
  <div className='groupStyles'>
    <span>{data.label}</span>
    <span className='groupBadgeStyles'>{data.options.length}</span>
  </div>
);

export default function Form(props) {
  const inputMajor = (e) => {
    props.setInputText(e.core);
  };
  return (
    <div>
        <Select
          defaultValue={ScienceOptions[1]}
          options={groupedOptions}
          formatGroupLabel={formatGroupLabel}
          onChange={inputMajor}
        />
    </div>
  );
}
