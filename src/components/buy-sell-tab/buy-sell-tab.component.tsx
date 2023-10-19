import {Image, View} from 'react-native';
import Text from '../text/text.component';
import Buy from '../../assets/icons/buy.png';
import Sell from '../../assets/icons/sell.png';
import styled from 'styled-components/native';

const BuySellContainer = styled.View`
  display: flex;
  flex-direction: row;
  /* justify-content: space-evenly; */
`;

const TabGroup = styled.View`
  flex-direction: row-reverse;
  align-items: center;
  gap: 4px;
  margin-left: 106px;
`;

export const BuySellTab = () => {
  return (
    <BuySellContainer>
      <TabGroup>
        <Image source={Sell} />
        <Text variant="button" style={{color: '#FCFCFC', fontWeight: '600'}}>
          {' '}
          Sell
        </Text>
      </TabGroup>
      <TabGroup>
        <Image source={Buy} />
        <Text variant="body" style={{color: '#CECDD6', fontWeight: '600'}}>
          {' '}
          Buy
        </Text>
      </TabGroup>
    </BuySellContainer>
  );
};
