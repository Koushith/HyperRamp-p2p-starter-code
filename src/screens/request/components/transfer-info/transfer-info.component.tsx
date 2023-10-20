import React from 'react';
import Card from '../../../../components/card/card.component';
import Text from '../../../../components/text/text.component';
import Spacer from '../../../../components/spacer/spacer.component';
import styled from 'styled-components/native';
import MatIcon from 'react-native-vector-icons/MaterialCommunityIcons';

interface TransferInfoProps {
  amount?: number;
  bankName?: string;
  accountNumber?: number | string;
  sortCode?: number;
  swiftCode?: string;
}

const Item = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin: 10px 0%;
`;

const Value = styled.View`
  flex-direction: row;
  align-items: center;
`;

const Icon = styled(MatIcon)`
  color: ${({theme}) => theme.colors.white};
  font-size: 18px;
`;

const TransferInfo: React.FC<TransferInfoProps> = (
  props: TransferInfoProps,
) => {
  const {amount, bankName, accountNumber, sortCode, swiftCode} = props;

  return (
    <Card>
      <Text variant="subheading">Transfer Information</Text>
      <Spacer vertical={8} />
      <Item>
        <Text variant="subheading">Amount</Text>
        <Value>
          <Text variant="subheading">{amount}</Text>
          <Spacer horizontal={4} />
          <Icon name="content-copy" onPress={() => {}} />
        </Value>
      </Item>

      <Item>
        <Text variant="subheading">Name of Bank</Text>
        <Value>
          <Text variant="subheading">{bankName}</Text>
          <Spacer horizontal={4} />
          <Icon name="content-copy" onPress={() => {}} />
        </Value>
      </Item>

      <Item>
        <Text variant="subheading">Account Number</Text>
        <Value>
          <Text variant="subheading">{accountNumber}</Text>
          <Spacer horizontal={4} />
          <Icon name="content-copy" onPress={() => {}} />
        </Value>
      </Item>

      <Item>
        <Text variant="subheading">Sort Code</Text>
        <Value>
          <Text variant="subheading">{sortCode}</Text>
          <Spacer horizontal={4} />
          <Icon name="content-copy" onPress={() => {}} />
        </Value>
      </Item>

      <Item>
        <Text variant="subheading">Swift Code</Text>
        <Value>
          <Text variant="subheading">{swiftCode}</Text>
          <Spacer horizontal={4} />
          <Icon name="content-copy" onPress={() => {}} />
        </Value>
      </Item>
    </Card>
  );
};

export default TransferInfo;
