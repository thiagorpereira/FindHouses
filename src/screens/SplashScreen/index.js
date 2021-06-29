import React, { useEffect } from 'react';
import { StatusBar } from 'react-native';
import { SectionView, SectionText, SectionImage } from './styles';
import SplashLogo from '../../assets/img/SevenHousesLogo.png';
import { useNavigation } from '@react-navigation/native';

export const SplashScreen = () => {
  const navigator = useNavigation();

  const goToHomeScreen = () => {
    setTimeout(() => {
      navigator.navigate('Home');
    }, 3000);
  };

  useEffect(() => {
    goToHomeScreen();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <SectionView>
      <StatusBar translucent backgroundColor="transparent" />
      <SectionImage source={SplashLogo} resizeMode="contain" />
    </SectionView>
  );
};
