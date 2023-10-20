import {TouchableOpacity, View, useWindowDimensions} from 'react-native';
import React from 'react';
import Card from '../../../../components/card/card.component';
import Text from '../../../../components/text/text.component';
import styled from 'styled-components/native';
import AntIcon from 'react-native-vector-icons/AntDesign';
import Spacer from '../../../../components/spacer/spacer.component';
import Button from '../../../../components/button/button.component';

interface RequestCardProps {
  type?: 'awaiting' | 'completed' | 'expired';
  label?: string;
  sell: number;
  receive: number;
  varient?: 'mini' | 'full';
  date?: string;
  depositAccount?: string;
  onShare?: () => void;
  logo?: boolean;
  theme?: 'default' | 'primary';
  timestamp?: string;
  ethValue?: string;
  firstLabel?: string;
  secondLabel?: string;
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

const Logo = styled.Image`
  height: 90px;
  width: 90px;
  position: absolute;
  top: -16px;
  right: -18px;
`;

const EthValuePanel = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

const Requote = styled.View`
  flex-direction: row;
  align-items: center;
`;

const RequoteIcon = styled(AntIcon)`
  color: ${({theme}) => theme.colors.white};
  margin-right: 6px;
`;

const AWAITING_COLOR = '#E5D4C0';
const COMPLETED_COLOR = '#75E4B3';
const EXPIRED_COLOR = '#E84855';
const GREY = '#CECDD6';
const WHITE = '#fff';
const PRIMARY_COLOR = '#707BF7';

const RequestCard: React.FC<RequestCardProps> = (props: RequestCardProps) => {
  const {
    type,
    label,
    varient = 'mini',
    sell,
    receive,
    date,
    depositAccount,
    onShare,
    logo,
    theme = 'default',
    firstLabel,
    secondLabel,
  } = props;

  const {width} = useWindowDimensions();

  return (
    <>
      <Card color={theme === 'primary' ? PRIMARY_COLOR : undefined}>
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
            {label && (
              <Text variant="subheading" color={WHITE}>
                {label}
              </Text>
            )}
          </>
          {varient === 'mini' && !logo && (
            <TouchableOpacity onPress={() => {}}>
              <Icon name="right" />
            </TouchableOpacity>
          )}
        </Head>
        <Spacer vertical={10} />
        <Middle>
          <SellContent>
            <Text variant="subheading">{firstLabel ?? 'Sell'}</Text>
            <Text variant="button">{sell}</Text>
          </SellContent>
          <ReceiveContainer>
            <Seperator />
            <ReceiveContent>
              <Text variant="subheading">{secondLabel ?? 'Receive'}</Text>
              <Text variant="button">{receive}</Text>
            </ReceiveContent>
          </ReceiveContainer>
        </Middle>
        {theme === 'default' && (
          <>
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
          </>
        )}
        {theme === 'primary' && (
          <EthValuePanel>
            <Text variant="caption">{'1 ETH = 2,085.96 USD'}</Text>
            <Requote>
              <RequoteIcon name="clockcircleo" />
              <Text variant="caption">{'Requoting in 10s'}</Text>
            </Requote>
          </EthValuePanel>
        )}
        {varient === 'full' && <Spacer vertical={16} />}
        {varient === 'full' && (
          <ShareButton
            type="primary"
            text="Share Link"
            width={width / 2}
            onPress={onShare}
          />
        )}
        {logo && (
          <Logo
            source={
              theme === 'primary'
                ? require('../../../../assets/logos/logo-dark.png')
                : require('../../../../assets/logos/logo-light.png')
            }
          />
        )}
      </Card>
      {varient === 'full' && <Spacer vertical={24} />}
    </>
  );
};

export default RequestCard;
