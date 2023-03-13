import React from 'react';
import {ThemeProvider} from 'styled-components/native';
import {defaultTheme} from './src/theme';
import {StatusBar} from 'react-native';
import {Routes} from './src/routes';
import {ModalProvider} from './src/contexts/modalContext';
import {OcurrencyProvider} from './src/contexts/occurrenciesContext';

function App(): JSX.Element {
  return (
    <>
      <ModalProvider>
        <OcurrencyProvider>
          <ThemeProvider theme={defaultTheme}>
            <StatusBar
              barStyle="light-content"
              backgroundColor={defaultTheme.COLORS.PRIMARY}
            />
            <Routes />
          </ThemeProvider>
        </OcurrencyProvider>
      </ModalProvider>
    </>
  );
}

export default App;
