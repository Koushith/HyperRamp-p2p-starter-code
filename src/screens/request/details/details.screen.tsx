import {ScrollView} from 'react-native';
import React from 'react';
import Screen from '../../../components/screen/screen.component';
import Header from '../components/header/header.component';
import Spacer from '../../../components/spacer/spacer.component';
import Text from '../../../components/text/text.component';
import RequestCard from '../components/request-card/request-card.component';
import MatIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import styled from 'styled-components/native';

const ClipboardBox = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 12px;
  border-radius: 8px;
  background-color: ${({theme}) => theme.colors.base};
`;

const Copy = styled.TouchableOpacity``;

const Icon = styled(MatIcon)`
  color: ${({theme}) => theme.colors.white};
  font-size: ${({theme}) => theme.fontSizes.lg};
`;

const RequestDetailsScreen = () => {
  const onCopy = () => {
    // Clipboard.setString('hello world');
  };

  const onShare = () => {
    // const options = {};
    // Share.open(options)
    //   .then(res => {
    //     console.log(res);
    //   })
    //   .catch(err => {
    //     err && console.log(err);
    //   });
  };

  return (
    <Screen>
      <Header actionType="back" />
      <Spacer vertical={16} />
      <Text variant="heading">Request Details</Text>
      <Spacer vertical={12} />
      <ScrollView>
        <RequestCard
          varient="full"
          type="awaiting"
          receive={2944.56}
          sell={1.5}
          onShare={onShare}
        />
        <Spacer vertical={8} />
        <Text variant="button">Copy to clipboard</Text>
        <Spacer vertical={8} />
        <ClipboardBox>
          <Text>hyperramp.com/8712931</Text>
          <Copy onPress={onCopy}>
            <Icon name="content-copy" />
          </Copy>
        </ClipboardBox>
      </ScrollView>
    </Screen>
  );
};

export default RequestDetailsScreen;
