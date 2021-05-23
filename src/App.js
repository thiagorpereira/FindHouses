import React from 'react';
import { ThemeProvider } from 'styled-components';
/* import { HomeScreen, SplashScreen } from './screens'; */
import { HomeScreen } from './screens';
import { theme } from './styles/theme';
import StoryBook from '../storybook';

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      {/* <HomeScreen /> */}
      {/*       <SplashScreen /> */}
      <StoryBook />
    </ThemeProvider>
  );
};

export default App;
