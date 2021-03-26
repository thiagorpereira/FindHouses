import React from 'react';
import { StatusBar } from 'react-native';
import { SectionView, SectionText, SectionImage } from './styles'
import SplashLogo from '../../assets/img/SevenHousesLogo.png'


export const SplashScreen = () => {
  return (
    <SectionView>
      <StatusBar translucent backgroundColor="transparent" />
      <SectionImage source={SplashLogo} resizeMode="contain" />
    </SectionView>
  )
}