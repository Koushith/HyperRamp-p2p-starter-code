import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {SplashScreen} from '../screens';
import OnBoarding from '../screens/onboarding/onboarding.screen';
import HomeScreen from '../screens/home/home.screen';
import ReceiveScreen from '../screens/request/receive/receive.screen';
import AddNewBank from '../screens/bank/new-bank.screen';
import AddNewWallet from '../screens/wallet/wallet.screen';

const Stack = createNativeStackNavigator();

export const Navigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Splash">
        <Stack.Screen name="Splash" component={SplashScreen} />
        <Stack.Screen name="Onboarding" component={OnBoarding} />
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Recieve" component={ReceiveScreen} />
        <Stack.Screen name="Bank" component={AddNewBank} />
        <Stack.Screen name="Wallet" component={AddNewWallet} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
