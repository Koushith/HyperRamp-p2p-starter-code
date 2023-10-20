import React from 'react';
import {TextProps} from 'react-native';
import styled from 'styled-components/native';

interface TextComponentProps extends TextProps {
  variant?: 'heading' | 'body' | 'subheading' | 'button' | 'caption';
  color?: string;
  underline?: boolean;
}

const BaseText = styled.Text<TextComponentProps>`
  font-size: ${({theme, variant}) => {
    switch (variant) {
      case 'body':
        return theme.fontSizes.md;
      case 'heading':
        return theme.fontSizes.xxl;
      case 'subheading':
        return theme.fontSizes.md;
      case 'button':
        return theme.fontSizes.lg;
      case 'caption':
        return theme.fontSizes.sm;
      default:
        return theme.fontSizes.md;
    }
  }};
  font-weight: ${({variant}) => 500};
  color: ${({theme, color}) => color ?? theme.colors.text};
  text-decoration-line: ${({theme, underline}) =>
    underline ? 'underline' : underline};
`;

const Text: React.FC<TextComponentProps> = ({children, ...rest}) => {
  return <BaseText {...rest}>{children}</BaseText>;
};

export default Text;
