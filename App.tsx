import React from 'react';
import {ThemeProvider} from 'styled-components/native';
import theme from './src/theme/theme';
import HomeScreen from './src/screens/home/home.screen';
import OnBoarding from './src/screens/onboarding/onboarding.screen';
import SplashScreen from './src/screens/splash/splash.screen';
import AddNewBank from './src/screens/bank/new-bank.screen';
import AddNewWallet from './src/screens/wallet/wallet.screen';

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import ReceiveScreen from './src/screens/request/receive/receive.screen';
import {VerifyWallet} from './src/screens';

const Stack = createNativeStackNavigator();

const App: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Splash">
          <Stack.Screen
            name="Splash"
            component={SplashScreen}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="Onboarding"
            component={OnBoarding}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="Home"
            component={HomeScreen}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="Receive"
            component={ReceiveScreen}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="Bank"
            component={AddNewBank}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="Wallet"
            component={AddNewWallet}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="verifyWallet"
            component={VerifyWallet}
            options={{headerShown: false}}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </ThemeProvider>
  );
};

export default App;
