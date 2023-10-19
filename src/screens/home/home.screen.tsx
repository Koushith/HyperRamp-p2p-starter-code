import {View, Text, Image} from 'react-native';
import React from 'react';
import Screen from '../../components/screen/screen.component';
import RequestCard from '../request/components/request-card/request-card.component';
import Header from '../request/components/header/header.component';
import TopMenu from '../../components/top-menu/top-menu.component';
import {BuySellTab, SellTab} from '../../components';
import Spacer from '../../components/spacer/spacer.component';

const HomeScreen: React.FunctionComponent = () => {
  return (
    <Screen>
      <TopMenu />
      <Spacer vertical={20} />
      <BuySellTab />
      <Spacer vertical={20} />
      <SellTab />
      {/* <RequestCard receive={2944.56} sell={1.5} type={'awaiting'} /> */}

      {/* <RequestCard type="awaiting" sell={15} receive={29764} varient={'full'} /> */}
    </Screen>
  );
};

export default HomeScreen;
