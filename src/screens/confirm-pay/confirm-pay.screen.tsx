/**
 * Note -  please reuse the components from Recieve request page. this is for demi purpose
 */

import React from 'react';
import {ImageBackground, StyleSheet, Pressable} from 'react-native';
import Confirm from '../../assets/onboarding/confirm.png';
import {useNavigation} from '@react-navigation/native';

export const ConfirmScreen = () => {
  const navigate = useNavigation();
  return (
    <ImageBackground source={Confirm} style={styles.backgroundImage}>
      <Pressable
        style={styles.container}
        onPress={() => navigate.navigate('Success')}
      />
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    width: '100%',
    height: '100%',
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
