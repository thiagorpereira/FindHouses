import React from 'react';
import { InputLabel } from '../../atoms/Text';
import { InputContainer, InputText } from './styles';

export const Input = ({ label, placeholder }) => {
  return (
    <InputContainer>
      <InputLabel>{label}</InputLabel>
      <InputText placeholder={placeholder} placeholderTextColor="white" />
    </InputContainer>
  );
};
