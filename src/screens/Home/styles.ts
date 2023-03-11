import styled from 'styled-components/native';

export const Container = styled.View`
  padding-bottom: 40px;
`;

export const HomeInformation = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;

export const Title = styled.Text`
  color: ${({theme}) => theme.COLORS.FONT_INFORMATION};
  font-size: 20px;
`;

export const TextCounter = styled.Text`
  color: ${({theme}) => theme.COLORS.FONT_COMPLEMENTARY};
  font-size: 15px;
`;
