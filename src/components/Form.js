import React from "react";
import { ScienceOptions, groupedOptions } from "./data";
import Select from 'react-select';

const groupStyles = {
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
};
const groupBadgeStyles = {
  backgroundColor: "#EBECF0",
  borderRadius: "2em",
  color: "#172B4D",
  display: "inline-block",
  fontSize: 12,
  fontWeight: "normal",
  lineHeight: "1",
  minWidth: 1,
  padding: "0.16666666666667em 0.5em",
  textAlign: "center",
};

const formatGroupLabel = (data) => (
  <div style={groupStyles}>
    <span>{data.label}</span>
    <span style={groupBadgeStyles}>{data.options.length}</span>
  </div>
);

export default function Form(props) {
  const inputMajor = (e) => {
    //console.log(e.core);
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
