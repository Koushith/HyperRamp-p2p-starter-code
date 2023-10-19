import {Image, View} from 'react-native';
import Text from '../text/text.component';
import Minted from '../../assets/icons/minted.png';
import User from '../../assets/icons/user.png';
import Hamburger from '../../assets/icons/hamburger.png';

import React from 'react';
import styled from 'styled-components/native';

const HeaderContainer = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

const LeftIconContainer = styled.View`
  gap: 8px;
  flex-direction: row;
`;

const WalletContainer = styled.View`
  background-color: #3a393e;
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 10px 11px;
  gap: 8px;
  border-radius: 100px;
`;
const TopMenu = () => {
  return (
    <HeaderContainer>
      <LeftIconContainer>
        <Image source={Minted} />
        <Image source={Hamburger} />
      </LeftIconContainer>
      <WalletContainer>
        <Image source={User} />
        <Text variant="body" style={{textTransform: 'uppercase'}}>
          Connect Wallet
        </Text>
      </WalletContainer>
    </HeaderContainer>
  );
};

export default TopMenu;
