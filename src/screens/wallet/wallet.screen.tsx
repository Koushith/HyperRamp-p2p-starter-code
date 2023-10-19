import {ScrollView} from 'react-native';
import Text from '../../components/text/text.component';
import Button from '../../components/button/button.component';

import styled from 'styled-components/native';
import Input from '../../components/input/input.component';
import Spacer from '../../components/spacer/spacer.component';

const AddnewBankContainer = styled.View`
  flex: 1;
  background-color: #232325;
`;

const FormContainer = styled.View`
  padding: 24px;
`;

const AddNewWallet = () => {
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
            <Text variant="heading">Add new wallet</Text>

            <Spacer vertical={20} />
            <Input
              label="Select Chain"
              placeholder="Select Chain"
              value="Polygon"
            />

            <Spacer vertical={10} />
            <Input
              label="Wallet Address"
              placeholder="Enter Wallet Address"
              value="0x0x23445ebwbrwkdnkrlnmk"
            />
            <Spacer vertical={10} />
            <Input
              label="Label (Optional)"
              placeholder=""
              value="My Main Wallet"
            />
            <Spacer vertical={15} />
            {/* <Text variant="heading">Scan QR Code</Text> */}

            <Spacer vertical={15} />
            <Text variant="caption" style={{textAlign: 'center'}}>
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

export default AddNewWallet;
