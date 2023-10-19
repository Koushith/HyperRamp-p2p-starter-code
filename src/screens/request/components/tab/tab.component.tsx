import {TouchableOpacityProps} from 'react-native';
import React from 'react';
import styled from 'styled-components/native';
import Text from '../../../../components/text/text.component';

interface TabProps extends TouchableOpacityProps {
  label: string;
  index: number;
  isSelected: boolean;
}

const Base = styled.TouchableOpacity<TabProps>`
  background-color: ${({theme, isSelected}) =>
    isSelected ? theme.colors.primary : theme.colors.base};
  border-radius: 12px;
  padding: 8px 12px;
  margin-left: ${({index}) => (index === 0 ? 0 : '12px')};
`;

const Tab: React.FC<TabProps> = (props: TabProps) => {
  return (
    <Base {...props}>
      <Text>{props.label}</Text>
    </Base>
  );
};

export default Tab;
