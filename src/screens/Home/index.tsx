import React from 'react';
import styled from 'styled-components/native';
import {Header} from '../../components/Header';

const StyledText = styled.Text`
  font-size: 16px;
  color: ${props => props.theme.COLORS.PRIMARY};
`;

export function Home() {
  return (
    <>
      <Header />
      <StyledText>Minha HOME</StyledText>
    </>
  );
}
