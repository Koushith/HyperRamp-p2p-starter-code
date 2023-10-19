import {TouchableOpacity, View, useWindowDimensions} from 'react-native';
import React from 'react';
import Card from '../../../../components/card/card.component';
import Text from '../../../../components/text/text.component';
import styled from 'styled-components/native';
import AntIcon from 'react-native-vector-icons/AntDesign';
import Spacer from '../../../../components/spacer/spacer.component';
import Button from '../../../../components/button/button.component';

interface RequestCardProps {
  type: 'awaiting' | 'completed' | 'expired';
  sell: number;
  receive: number;
  varient?: 'mini' | 'full';
  date?: string;
  depositAccount?: string;
}

const Head = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

const Icon = styled(AntIcon)`
  font-size: 16px;
  color: ${({theme}) => theme.colors.white};
`;

const Middle = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;
const SellContent = styled.View`
  align-items: flex-start;
  padding: 20px 0;
  flex: 1;
`;

const ReceiveContainer = styled.View`
  flex-direction: row;
  flex: 1;
`;

const ReceiveContent = styled.View`
  align-items: flex-start;
  padding: 20px 0;
`;

const Seperator = styled.View`
  background-color: #fcfcfc;
  height: 100%;
  width: 2px;
  margin-left: 18px;
`;

const HorizontalSeperator = styled.View`
  background-color: #cecdd6;
  height: 1px;
  margin: 18px 0;
`;

const Footer = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

const ShareButton = styled(Button)<{width: number}>`
  width: ${({width}) => `${width}px`};
  position: absolute;
  bottom: -20px;
  align-self: center;
`;

const AWAITING_COLOR = '#E5D4C0';
const COMPLETED_COLOR = '#75E4B3';
const EXPIRED_COLOR = '#E84855';
const GREY = '#CECDD6';

const RequestCard: React.FC<RequestCardProps> = (props: RequestCardProps) => {
  const {type, varient = 'mini', sell, receive, date, depositAccount} = props;

  const {width} = useWindowDimensions();

  return (
    <>
      <Card>
        <Head>
          <>
            {type === 'awaiting' && (
              <Text variant="subheading" color={AWAITING_COLOR}>
                Awaiting
              </Text>
            )}
            {type === 'completed' && (
              <Text variant="subheading" color={COMPLETED_COLOR}>
                Completed
              </Text>
            )}
            {type === 'expired' && (
              <Text variant="subheading" color={EXPIRED_COLOR}>
                Expired
              </Text>
            )}
          </>
          {varient === 'mini' && (
            <TouchableOpacity onPress={() => {}}>
              <Icon name="right" />
            </TouchableOpacity>
          )}
        </Head>
        <Spacer vertical={10} />
        <Middle>
          <SellContent>
            <Text variant="subheading">Sell</Text>
            <Text variant="button">{sell}</Text>
          </SellContent>
          <ReceiveContainer>
            <Seperator />
            <ReceiveContent>
              <Text variant="subheading">Receive</Text>
              <Text variant="button">{receive}</Text>
            </ReceiveContent>
          </ReceiveContainer>
        </Middle>
        <HorizontalSeperator />
        <Text variant="body" color={GREY}>
          On Ethereum Chain
        </Text>
        <HorizontalSeperator />
        <Footer>
          <Text variant="body" color={GREY}>
            Deposit into
          </Text>
          <Text variant="body" color={GREY}></Text>
        </Footer>
        {varient === 'full' && <Spacer vertical={16} />}
        {varient === 'full' && (
          <ShareButton
            type="primary"
            text="Share Link"
            width={width / 2}
            onPress={() => {}}
          />
        )}
      </Card>
      {varient === 'full' && <Spacer vertical={24} />}
    </>
  );
};

export default RequestCard;
