import {Image, View} from 'react-native';
import styled from 'styled-components/native';
import Text from '../text/text.component';
import ChevronDown from '../../assets/icons/chevron-down.png';
import Preview from '../../assets/icons/preview.png';
import Spacer from '../spacer/spacer.component';
import Button from '../button/button.component';

const SellTabContainer = styled.View`
  margin-bottom: 8px;
`;

const TokenContainer = styled.View`
  border-radius: 100px;
  background-color: #3a393e;
  padding: 16px;
  width: 120px;
  align-items: center;
  flex-direction: row;
  gap: 4px;
  justify-content: center;
  margin-bottom: 10px;
`;

const RecieveInfo = styled.View`
  border-radius: 10px;
  background-color: #3a393e;
  padding: 16px;

  align-items: center;
  flex-direction: row;
  gap: 4px;
  justify-content: space-between;
  margin-bottom: 10px;
`;

const InputCard = styled.View`
  border-radius: 10px;
  background-color: #3a393e;
  padding: 16px;

  align-items: center;
  flex-direction: column;
  /* gap: 4px; */
  /* justify-content: space-between; */
  margin-bottom: 10px;
`;

export const SellTab = () => {
  return (
    <SellTabContainer>
      <TokenContainer>
        <Text variant="body">Etherium</Text>
        <Image source={ChevronDown} />
      </TokenContainer>

      <InputCard>
        <View
          style={{
            justifyContent: 'space-between',
            flexDirection: 'row',
            width: '100%',
          }}>
          <Text variant="caption">I WANT TO Sell ETH </Text>
          <View style={{flexDirection: 'row'}}>
            <Text variant="caption">USD </Text>
            <Image source={ChevronDown} />
          </View>
        </View>
        <Spacer vertical={30} />
        <View
          style={{
            justifyContent: 'space-between',
            flexDirection: 'row',
            width: '100%',
          }}>
          <Text variant="caption" style={{color: '#CECDD6', fontSize: 12}}>
            Balance 2.5 ETH{' '}
          </Text>
          <View style={{flexDirection: 'row'}}>
            <Text variant="heading">1.5 </Text>
          </View>
        </View>
      </InputCard>
      <Spacer vertical={4} />
      <RecieveInfo>
        <Text variant="caption">I WANT TO RECEIVE IT IN </Text>
        <View style={{flexDirection: 'row'}}>
          <Text variant="caption">USD </Text>
          <Image source={ChevronDown} />
        </View>
      </RecieveInfo>
      <Spacer vertical={4} />
      <Image source={Preview} style={{width: '100%'}} />
      <Spacer vertical={8} />
      <Text variant="caption" style={{color: '#FCFCFC'}}>
        Conversions provided by Chainlink. HyperRamp charges 1% for every
        request. This is inclusive in the total receive rate.
      </Text>
      <Spacer vertical={8} />
      <Button type="primary" text="Create Request" />
    </SellTabContainer>
  );
};
