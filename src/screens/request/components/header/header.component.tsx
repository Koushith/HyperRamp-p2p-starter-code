import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import styled from 'styled-components/native';
import AntIcon from 'react-native-vector-icons/AntDesign';

interface HeaderProps {
  actionType?: 'back' | 'quit';
  onPress?: () => void;
}

const Icon = styled(AntIcon)`
  font-size: 18px;
  color: ${({theme}) => theme.colors.white};
`;

const Base = styled.View``;

const Header: React.FC<HeaderProps> = (props: HeaderProps) => {
  const {actionType = 'back', onPress} = props;

  return (
    <Base>
      <TouchableOpacity onPress={onPress}>
        {actionType === 'back' && <Icon name="left" />}
        {actionType === 'quit' && <Icon name="close" />}
      </TouchableOpacity>
    </Base>
  );
};

export default Header;
