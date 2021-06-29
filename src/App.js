import 'react-native-gesture-handler';
import React from 'react';
import { ThemeProvider } from 'styled-components';
import { StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
/* import { HomeScreen, SplashScreen } from './screens'; */
import { Navigator } from './routes';
import { theme } from './styles/theme';
/* import StoryBook from '../storybook'; */

const App = () => {
  return (
    <NavigationContainer>
      <ThemeProvider theme={theme}>
        <StatusBar translucent backgroundColor={theme.colors.backgroundDark} />
        <Navigator />
        {/*       <SplashScreen /> */}
        {/*   <StoryBook /> */}
      </ThemeProvider>
    </NavigationContainer>
  );
};

export default App;
