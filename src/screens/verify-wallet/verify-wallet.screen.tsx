import styled from 'styled-components/native';
import Screen from '../../components/screen/screen.component';
import Spacer from '../../components/spacer/spacer.component';
import Text from '../../components/text/text.component';
import MetaMask from '../../assets/icons/metamask.png';
import Rainbow from '../../assets/icons/rainbow.png';
import WalletConnect from '../../assets/icons/wallet-connect.png';
import Coinbase from '../../assets/icons/coinbase.png';
import Check from '../../assets/icons/check-circle.png';
import {Alert, Image, Pressable, ScrollView, View} from 'react-native';
import RequestCard from '../request/components/request-card/request-card.component';
import Button from '../../components/button/button.component';
import Binance from '../../assets/icons/binance.png';
import {useState} from 'react';
import {useNavigation} from '@react-navigation/native';
const ConnectWalletCard = styled.View`
  background-color: #3a393e;
  border-radius: 16px;
  padding: 16px;
`;

const WalletsContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
  margin-top: 40px;
`;

const SelectedContainer = styled.View`
  background-color: #3a393e;
  border-radius: 16px;
  padding: 16px;
`;

const CardContainer = styled.View`
  border: 1px solid #cecdd6;
  border-radius: 12px;
`;

const ChainSelected = () => {
  return (
    <SelectedContainer>
      <Text variant="caption">Step 1/2 </Text>
      <Spacer vertical={4} />
      <Text variant="Subheading">Connect Wallet </Text>
      <Spacer vertical={10} />
      <CardContainer>
        <View style={{padding: 16}}>
          <View style={{flexDirection: 'row', alignItems: 'center', gap: 8}}>
            <Image
              source={MetaMask}
              width={24}
              height={24}
              style={{width: 26, height: 26}}
            />
            <Text variant="caption">Meta Mask</Text>
          </View>
          <Spacer vertical={10} />

          <Text variant="subheading">Wallet Connected</Text>
          <Spacer vertical={2} />
          <Text variant="caption">koushith.eth</Text>
        </View>
        <Spacer vertical={2} />
        <View
          style={{
            flexDirection: 'row',
            gap: 4,
            backgroundColor: '#707BF7',
            padding: 8,
            borderBottomLeftRadius: 12,
            borderBottomRightRadius: 12,
          }}>
          <Image source={Check} />
          <Text variant="caption">Wallet Connected</Text>
        </View>
      </CardContainer>
    </SelectedContainer>
  );
};

const ChainVerified = () => {
  return (
    <SelectedContainer>
      <Text variant="caption">Step 2/2 </Text>
      <Spacer vertical={4} />
      <Text variant="Subheading">Verify your identity with a claim </Text>
      <Spacer vertical={4} />
      <Text variant="caption">
        We use APIs to verify information. Rest assured that no data is stored
        or visible to us
      </Text>
      <Spacer vertical={10} />
      <CardContainer>
        <View style={{padding: 16}}>
          <View style={{flexDirection: 'row', alignItems: 'center', gap: 8}}>
            <Image
              source={Coinbase}
              width={24}
              height={24}
              style={{width: 26, height: 26}}
            />
            <Text variant="caption">Coinbase</Text>
          </View>
          <Spacer vertical={10} />

          <Text variant="subheading">
            Identity verification approved Bobbie Loah
          </Text>
          <Spacer vertical={2} />
          <Text variant="caption">koushith.eth</Text>
        </View>
        <Spacer vertical={2} />
        <View
          style={{
            flexDirection: 'row',
            gap: 4,
            backgroundColor: '#707BF7',
            padding: 8,
            borderBottomLeftRadius: 12,
            borderBottomRightRadius: 12,
          }}>
          <Image source={Check} />
          <Text variant="caption">
            Encrypted Apr 19. Signed by 1 blind witnesses
          </Text>
        </View>
      </CardContainer>
    </SelectedContainer>
  );
};

export const VerifyWallet = () => {
  const [step, setStep] = useState(0);
  const navigator = useNavigation();
  return (
    <Screen>
      <ScrollView>
        <Spacer vertical={10} />
        <Text variant="heading">
          Before you proceed, begin with these steps
        </Text>
        <Spacer vertical={8} />
        {/* st-1 */}
        {/* <ConnectWalletCard>
          <Text variant="caption">Step 1/2 </Text>
          <Spacer vertical={4} />
          <Text variant="Subheading">Connect Wallet </Text>
          <WalletsContainer>
            <View style={{alignItems: 'center', justifyContent: 'center'}}>
              <Image source={MetaMask} />
              <Spacer vertical={2} />
              <Text variant="caption">Meta Mask</Text>
            </View>
            <View style={{alignItems: 'center', justifyContent: 'center'}}>
              <Image source={Rainbow} />
              <Spacer vertical={2} />
              <Text variant="caption">Rainbow</Text>
            </View>
            <View style={{alignItems: 'center', justifyContent: 'center'}}>
              <Image source={WalletConnect} />
              <Spacer vertical={2} />
              <Text variant="caption">Wallet Connect</Text>
            </View>
            <View style={{alignItems: 'center', justifyContent: 'center'}}>
              <Image source={Coinbase} />
              <Spacer vertical={2} />
              <Text variant="caption">CoinBase</Text>
            </View>
          </WalletsContainer>
        </ConnectWalletCard> */}
        {/* <Spacer vertical={2} /> */}
        {/* before */}

        <Spacer vertical={16} />
        {/* TODO: Make it reusable- move this below commented code to new one */}

        {/* st- 1 */}
        {step === 0 && (
          <>
            <ConnectWalletCard>
              <Text variant="caption">Step 1/2 </Text>
              <Spacer vertical={4} />
              <Text variant="Subheading">Connect Wallet </Text>
              <WalletsContainer>
                <Pressable
                  style={{alignItems: 'center', justifyContent: 'center'}}
                  onPress={() => {
                    // alert('pressed');
                    navigator.navigate('Wallet');
                  }}>
                  <Image source={MetaMask} />
                  <Spacer vertical={2} />
                  <Text variant="caption">Meta Mask</Text>
                </Pressable>
                <View style={{alignItems: 'center', justifyContent: 'center'}}>
                  <Image source={Rainbow} />
                  <Spacer vertical={2} />
                  <Text variant="caption">Rainbow</Text>
                </View>
                <View style={{alignItems: 'center', justifyContent: 'center'}}>
                  <Image source={WalletConnect} />
                  <Spacer vertical={2} />
                  <Text variant="caption">Wallet Connect</Text>
                </View>
                <View style={{alignItems: 'center', justifyContent: 'center'}}>
                  <Image source={Coinbase} />
                  <Spacer vertical={2} />
                  <Text variant="caption">CoinBase</Text>
                </View>
              </WalletsContainer>
            </ConnectWalletCard>
            <Spacer vertical={8} />
            <ConnectWalletCard>
              <Text variant="caption">Step 2/2 </Text>
              <Spacer vertical={4} />
              <Text variant="Subheading">
                Verify your identity with a claim{' '}
              </Text>
              <Spacer vertical={18} />
              <View style={{flexDirection: 'row', gap: 18}}>
                <View style={{alignItems: 'center', justifyContent: 'center'}}>
                  <Image source={Binance} />
                  <Spacer vertical={2} />
                  <Text variant="caption">Binance</Text>
                </View>

                <View style={{alignItems: 'center', justifyContent: 'center'}}>
                  <Image source={Coinbase} />
                  <Spacer vertical={2} />
                  <Text variant="caption">CoinBase</Text>
                </View>
              </View>
            </ConnectWalletCard>
          </>
        )}

        {/* show after press */}
        {step === 1 && (
          <>
            <ChainSelected />
            <Spacer vertical={8} />
            <ChainVerified />
          </>
        )}
        {/* end */}
        <Spacer vertical={10} />
        <Button
          type="primary"
          text="Proceed"
          onPress={() => {
            setStep(step => step + 1);
            if (step >= 1) {
              navigator.navigate('Home');
            }
          }}
        />
      </ScrollView>
    </Screen>
  );
};
