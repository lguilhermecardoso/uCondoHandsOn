import styled from 'styled-components/native';

export const ModalFooterArea = styled.View`
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 24px;
  margin-top: 16px;
`;

export const TitleModalText = styled.Text`
  font-size: 15px;
  line-height: 25px;
  margin-top: 15px;
  font-weight: 400;
  color: ${({theme}) => theme.COLORS.FONT_SECONDARY};
`;

export const SubTitleModalText = styled.Text`
  font-size: 15px;
  line-height: 25px;
  font-weight: bold;
  color: ${({theme}) => theme.COLORS.FONT_INFORMATION};
`;

export const CancelButton = styled.TouchableOpacity``;
export const ConfirmButton = styled.TouchableOpacity`
  background: ${({theme}) => theme.COLORS.WARNING};
  padding: 10px;
  border-radius: 20px;
  font-size: 15px;
`;

export const CancelButtonText = styled.Text`
  color: ${({theme}) => theme.COLORS.WARNING};
  font-size: 15px;
`;
