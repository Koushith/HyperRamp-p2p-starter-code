import React from 'react';
import Screen from '../../../components/screen/screen.component';
import Header from '../components/header/header.component';
import Spacer from '../../../components/spacer/spacer.component';
import styled from 'styled-components/native';
import Text from '../../../components/text/text.component';
import RequestCard from '../components/request-card/request-card.component';
import TransferInfo from '../components/transfer-info/transfer-info.component';
import {ScrollView} from 'react-native';
import Button from '../../../components/button/button.component';

const SenderContainer = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

const SenderInfo = styled.View`
  flex-direction: row;
  align-items: center;
`;

interface AcceptedRequestProps {}

const AcceptedRequestScreen: React.FC<AcceptedRequestProps> = (
  props: AcceptedRequestProps,
) => {
  const {} = props;

  const sender = 'BOBBIELOAH.ETH';

  return (
    <Screen>
      <Header actionType="quit" />
      <Spacer vertical={12} />
      <SenderContainer>
        <SenderInfo>
          <Text variant="subheading">FROM</Text>
          <Spacer horizontal={4} />
          <Text underline variant="subheading">
            {sender}
          </Text>
        </SenderInfo>
        <Text variant="subheading" color="#96C9AA">
          IDENTITY VERIFIED
        </Text>
      </SenderContainer>
      <Spacer vertical={12} />
      <Text variant="heading">"You have received a request to transfer"</Text>
      <Spacer vertical={16} />
      <ScrollView showsVerticalScrollIndicator={false}>
        <RequestCard
          logo
          label="REQUEST"
          firstLabel="YOU BUY"
          secondLabel="YOU SEND"
          sell={1.5}
          receive={2976.64}
        />
        <Spacer vertical={12} />
        <TransferInfo
          amount={100}
          bankName="Bank of America"
          accountNumber={203040302010}
          sortCode={1000}
          swiftCode="CHASUSU3XXX"
        />
      </ScrollView>
      <Spacer vertical={16} />
      <Button fit type="primary" text="I have transferred" />
    </Screen>
  );
};

export default AcceptedRequestScreen;
