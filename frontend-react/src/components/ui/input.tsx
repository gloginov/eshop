import React from 'react';
import { Input } from 'antd';

interface InputTypes {
  placeholder?: String,
  value?: String
}

const onClick = (e) => {

}

const Input: React.FC = (props: InputTypes) => {
  return (
    <Input
      placeholder="Basic usage"
      onClick={onClick}
    />
  )
};

export default Input;