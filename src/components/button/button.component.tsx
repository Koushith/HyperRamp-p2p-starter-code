import React from 'react';
import {TouchableOpacityProps} from 'react-native';
import styled from 'styled-components/native';
import Text from '../text/text.component';

interface ButtonProps extends TouchableOpacityProps {
  type: 'primary' | 'text' | 'icon';
  text?: string;
  icon?: React.ReactNode;
}

const BaseButton = styled.TouchableOpacity<ButtonProps>`
  padding: 12px 18px;
  border-radius: 12px;
  align-items: center;
  justify-content: center;
  background-color: ${({type, theme}) =>
    type === 'primary'
      ? theme.colors.primary
      : type === 'icon'
      ? theme.colors.base
      : 'transparent'};
`;

const Button: React.FC<ButtonProps> = ({type, text, icon, ...rest}) => {
  return (
    <BaseButton type={type} {...rest}>
      {icon && type === 'icon' ? icon : null}
      {text && <Text variant="button">{text}</Text>}
    </BaseButton>
  );
};

export default Button;
