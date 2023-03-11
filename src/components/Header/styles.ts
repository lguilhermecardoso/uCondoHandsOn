import styled from 'styled-components/native';

export const Container = styled.View`
  background-color: ${({theme}) => theme.COLORS.PRIMARY};
  height: 30%;
`;

export const Content = styled.View`
  padding: 22px;
`;

export const HeaderTop = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;

export const Title = styled.Text`
  font-size: 22px;
  color: ${({theme}) => theme.COLORS.BACKGROUND};
  font-weight: bold;
`;
