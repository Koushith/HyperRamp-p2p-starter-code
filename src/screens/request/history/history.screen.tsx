import {ScrollView, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import Screen from '../../../components/screen/screen.component';
import Header from '../components/header/header.component';
import RequestCard from '../components/request-card/request-card.component';
import Spacer from '../../../components/spacer/spacer.component';
import styled from 'styled-components/native';
import Tab from '../components/tab/tab.component';
import Text from '../../../components/text/text.component';

const TAB_ITEMS = ['All', 'Completed', 'Pending', 'Expired'];

const TabContainer = styled.View`
  flex-direction: row;
`;

const RequestHistoryScreen = () => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  return (
    <Screen>
      <Header actionType="quit" />
      <Spacer vertical={16} />
      <Text variant="heading">Request History</Text>
      <Spacer vertical={12} />
      <TabContainer>
        {TAB_ITEMS.map((tab, index) => {
          return (
            <Tab
              key={tab}
              label={tab}
              index={index}
              isSelected={index === currentIndex}
              onPress={() => setCurrentIndex(index)}
            />
          );
        })}
      </TabContainer>
      <Spacer vertical={16} />
      <ScrollView>
        <RequestCard type="awaiting" receive={2944.56} sell={1.5} />
        <Spacer vertical={12} />
        <RequestCard type="completed" receive={2944.56} sell={1.5} />
        <Spacer vertical={12} />
        <RequestCard type="expired" receive={2944.56} sell={1.5} />
      </ScrollView>
    </Screen>
  );
};

export default RequestHistoryScreen;
