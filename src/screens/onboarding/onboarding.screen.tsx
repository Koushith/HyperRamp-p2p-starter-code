import {View, FlatList, useWindowDimensions} from 'react-native';
import React, {useState} from 'react';
import Screen from '../../components/screen/screen.component';
import styled from 'styled-components/native';
import BaseCard from '../../components/card/card.component';
import Spacer from '../../components/spacer/spacer.component';
import Text from '../../components/text/text.component';
import Button from '../../components/button/button.component';

const Logo = styled.Image`
  width: 50px;
  height: 50px;
  align-self: center;
`;

const Image = styled.Image`
  height: 250px;
  width: 250px;
  align-self: center;
`;

const Card = styled(BaseCard)<{width: number}>`
  width: ${({width}) => `${width - 32}px`};
  justify-content: center;
`;

const IndicatorContainer = styled.View`
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin-top: 16px;
`;

const Indicator = styled.View<{activePage: boolean}>`
  width: 20px;
  height: 4px;
  border-radius: 4px;
  margin: 4px;
  background-color: ${({theme, activePage}) =>
    activePage ? theme.colors.white : theme.colors.base};
`;

const DATA = [
  {
    heading: 'Fuss Free P2P transfers',
    subHeading:
      'With Reclaim Protocol and the usage of zk proofs, parties will only receive their transactions once the amount has been securely verified. This proof generation is completely trustless and privacy preserving.',
    image: require('../../assets/onboarding/on1.png'),
  },
  {
    heading: 'Prove yourself privately',
    subHeading:
      'HyperRamp can generate the proof for any data on any website without needing any change from the said website. This puts the user in control of their data. ',
    image: require('../../assets/onboarding/on2.png'),
  },
  {
    heading: 'Fast, easy and secure',
    subHeading:
      'With HyperRamp, you can now easily request money to other parties with link. Once the other party has transferred, Hyper Ramp will automatically verify and release the amount to both parties.',
    image: require('../../assets/onboarding/on3.png'),
  },
];

interface OnBoardingProps {}

const OnBoarding: React.FC<OnBoardingProps> = (props: OnBoardingProps) => {
  const {width} = useWindowDimensions();
  const [currentPage, setCurrentPage] = useState<number>(0);

  return (
    <Screen>
      <Logo source={require('../../assets/logos/logo-light.png')} />
      <View style={{height: 16}} />
      <FlatList
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        data={DATA}
        onScroll={event => {
          const contentOffset = event.nativeEvent.contentOffset.x;
          const currentIndex = Math.floor(contentOffset / (width / 1.5));
          setCurrentPage(currentIndex);
        }}
        renderItem={({item, index}) => {
          return (
            <Card width={width}>
              <Image source={item.image} />
              <Spacer vertical={24} />
              <Text variant="heading">{item.heading}</Text>
              <Spacer vertical={16} />
              <Text variant="body">{item.subHeading}</Text>
            </Card>
          );
        }}
      />
      <IndicatorContainer>
        {DATA.map((item, index) => (
          <Indicator key={index} activePage={currentPage === index} />
        ))}
      </IndicatorContainer>
      <Spacer vertical={20} />
      <Button type="primary" text="Start" />
    </Screen>
  );
};

export default OnBoarding;
