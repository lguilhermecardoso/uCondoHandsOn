import styled from 'styled-components/native';

export const Container = styled.View`
  background-color: ${({theme}) => theme.COLORS.BACKGROUND};
  flex: 1;
  border-top-right-radius: 24px;
  border-top-left-radius: 24px;
  margin-top: -24px;
`;

export const Content = styled.View`
  padding: 18px 28px;
`;
