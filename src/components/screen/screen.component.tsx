import {View, Text} from 'react-native';
import React from 'react';
import styled from 'styled-components/native';

const Layout = styled.SafeAreaView`
  flex: 1;
  background-color: ${({theme}) => theme.colors.greyBg};
  padding: 28px 16px;
`;
interface ScreenProps {
  children: React.ReactNode;
}

const Screen: React.FC<ScreenProps> = (props: ScreenProps) => {
  const {children} = props;

  return <Layout>{children}</Layout>;
};

export default Screen;
