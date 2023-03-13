import styled from 'styled-components/native';

export const Container = styled.View``;

export const Content = styled.View``;

export const Label = styled.Text`
  margin-top: 6px;
  margin-left: 6px;
  font-size: 15px;
  color: ${({theme}) => theme.COLORS.FONT_SECONDARY};
  line-height: 22px;
  font-weight: 500;
`;

export const OccurrenceInput = styled.TextInput`
  margin-top: 6px;
  background-color: ${({theme}) => theme.COLORS.WHITE};
  padding: 16px;
  border-radius: 10px;
`;
