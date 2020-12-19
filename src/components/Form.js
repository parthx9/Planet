import React from "react";
import { FirstOption, groupedOptions } from "./data";
import Select from 'react-select';
import  {FormWrapper} from "./styles/Formstyles"

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
    <div >
      
      <FormWrapper >
        <h4>Select your Major</h4>
        <Select
          defaultValue={FirstOption[0]}
          options={groupedOptions}
          formatGroupLabel={formatGroupLabel}
          onChange={inputMajor}
        />
      </FormWrapper>
      
        
    </div>
  );
}
