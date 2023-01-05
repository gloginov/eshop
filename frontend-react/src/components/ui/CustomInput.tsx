import React from 'react';
import { Input } from 'antd';

interface InputTypes {
  placeholder?: String,
  value?: String
}

const onClick = (e) => {

}

const onChange = (e) => {

}

const CustomInput: React.FC = (props: InputTypes) => {
  const { placeholder, value } = props;

  return (
    <div className="customField customInput">
      <Input
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        onClick={onClick}
      />
      <span className="customField-error"></span>
    </div>
  )
};

export default CustomInput;