import {Image, View} from 'react-native';
import Splash from '../../assets/onboarding/splash.png';
export const SplashScreen = () => {
  return (
    <View>
      <Image source={Splash} style={{width: '100%'}} />
    </View>
  );
};
