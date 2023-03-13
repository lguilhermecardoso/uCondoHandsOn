import styled from 'styled-components/native';

export const Container = styled.View`
  margin: 12px 0 0 0;
`;

export const Content = styled.View`
  padding: 16px;
  background-color: ${({theme}) => theme.COLORS.WHITE};
  border-radius: 16px;
`;

export const ItemContent = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;

export const ItemText = styled.Text`
  color: ${({typeOfOccurrency, theme}) =>
    typeOfOccurrency === 'receitas'
      ? theme.COLORS.SECONDARY
      : theme.COLORS.TIERTIARY};
`;
