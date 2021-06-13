import React from 'react';
import InputMask from 'react-input-mask';
import { OutlinedTextFieldProps } from '@material-ui/core';
import TextFieldStyled from 'ui/components/inputs/TextField/TextField';

interface TextFieldMaskProps extends OutlinedTextFieldProps {
  mask: string;
}

const TextFieldMask: React.FC<TextFieldMaskProps> = ({
  mask,
  ...props
}) => {
  return (
    <InputMask mask={mask}>
      {() => {
        return <TextFieldStyled {...props} />;
      }}
    </InputMask>
  );
};

export default TextFieldMask;
