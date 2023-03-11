import React from 'react';
import {ThemeProvider} from 'styled-components/native';
import {defaultTheme} from './src/theme';
import {StatusBar} from 'react-native';
import {Routes} from './src/routes';

function App(): JSX.Element {
  return (
    <>
      <ThemeProvider theme={defaultTheme}>
        <StatusBar
          barStyle="light-content"
          backgroundColor={defaultTheme.COLORS.PRIMARY}
        />
        <Routes />
      </ThemeProvider>
    </>
  );
}

export default App;
