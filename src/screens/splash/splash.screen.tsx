import {Image, View} from 'react-native';
import Splash from '../../assets/onboarding/splash.png';
import {useEffect} from 'react';
import {useNavigation} from '@react-navigation/native';
const SplashScreen = () => {
  const navigate = useNavigation();
  useEffect(() => {
    const id = setTimeout(() => {
      navigate.navigate('Onboarding');
    }, 3000);
    return () => clearTimeout(id);
  }, []);
  return (
    <View>
      <Image source={Splash} style={{width: '100%'}} />
    </View>
  );
};

export default SplashScreen;
