import {View, Text, ViewProps} from 'react-native';
import React from 'react';
import styled from 'styled-components/native';

const Base = styled.View<CardProps>`
  background-color: ${({theme, color}) => color ?? theme.colors.base};
  border-radius: 8px;
  padding: 16px;
`;

interface CardProps extends ViewProps {
  children: React.ReactNode;
  color?: string;
}

const Card: React.FC<CardProps> = (props: CardProps) => {
  const {children, ...rest} = props;

  return <Base {...rest}>{children}</Base>;
};

export default Card;
