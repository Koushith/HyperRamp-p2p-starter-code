import React from 'react';
import {TextInput} from 'react-native';
import styled from 'styled-components/native';

const StyledTextInput = styled(TextInput)`
  padding: 10px;
  border: none;
  background: #3a393e;
  border-radius: 5px;
  margin: 5px;
  color: #cecdd6;
  font-size: 14px;
`;

const Label = styled.Text`
  color: #cecdd6;
  font-size: 14px;
  margin-left: 4px;
  margin-bottom: 5px;
`;

interface InputProps {
  placeholder: string;
  value: string;
  onChangeText: (text: string) => void;
  secureTextEntry?: boolean;
  keyboardType?:
    | 'default'
    | 'numeric'
    | 'email-address'
    | 'phone-pad'
    | 'number-pad';
  label?: string;
}

const Input: React.FC<InputProps> = ({
  placeholder,
  value,
  onChangeText,
  secureTextEntry,
  keyboardType,
  label,
}) => {
  return (
    <>
      {label && <Label>{label}</Label>}
      <StyledTextInput
        placeholder={placeholder}
        value={value}
        onChangeText={onChangeText}
        secureTextEntry={secureTextEntry}
        keyboardType={keyboardType}
      />
    </>
  );
};

export default Input;
