import {ScrollView, View} from 'react-native';
import Text from '../../components/text/text.component';
import {useRef} from 'react';
import Button from '../../components/button/button.component';
import RBSheet from 'react-native-raw-bottom-sheet';

import styled from 'styled-components/native';
import Input from '../../components/input/input.component';
import Screen from '../../components/screen/screen.component';
import Spacer from '../../components/spacer/spacer.component';

const AddnewBankContainer = styled.View`
  flex: 1;
  background-color: #232325;
`;

const FormContainer = styled.View`
  padding: 24px;
`;

const AddNewBank = () => {
  const refRBSheet = useRef();
  return (
    // <View
    //   style={{
    //     flex: 1,
    //     justifyContent: 'center',
    //     alignItems: 'center',
    //     backgroundColor: '#000',
    //   }}>
    //   <Button text="ADD NEW " onPress={() => refRBSheet.current.open()} />

    //   <RBSheet
    //     ref={refRBSheet}
    //     closeOnDragDown={true}
    //     closeOnPressMask={false}
    //     customStyles={{
    //       wrapper: {
    //         backgroundColor: '#232325',
    //       },
    //       draggableIcon: {
    //         backgroundColor: '#232325',
    //       },
    //     }}>
    //     <View style={{backgroundColor: '#232325', flex: 1}}>
    //       <Text variant="body">Add new bank account</Text>
    //     </View>
    //   </RBSheet>
    // </View>
    <>
      <AddnewBankContainer>
        <ScrollView>
          <FormContainer>
            <Text variant="heading">Add new Bank</Text>
            <Spacer vertical={20} />
            <Input
              label="Select Bank"
              placeholder="Select Bank"
              value="Bank of America"
            />
            <Spacer vertical={10} />
            <Input
              label="Account Number"
              placeholder="Select Bank"
              value="06652553667360"
            />
            <Spacer vertical={10} />
            <Input label="Sort Code" placeholder="Select Bank" value="543213" />
            <Spacer vertical={10} />
            <Input
              label="Swift Code"
              placeholder="Select Bank"
              value="IBSB000N"
            />
            <Spacer vertical={10} />
            <Input label="Label (Optional)" placeholder="" value="Quick Swap" />

            <Spacer vertical={15} />
            <Text variant="caption">
              Please ensure all your details are accurate before adding
            </Text>
            <Spacer vertical={10} />
            <Button type={'primary'} text="Add" />
          </FormContainer>
        </ScrollView>
      </AddnewBankContainer>
    </>
  );
};

export default AddNewBank;
