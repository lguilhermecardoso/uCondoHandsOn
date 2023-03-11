import styled from 'styled-components/native';

export const InputContainer = styled.View`
  background-color: ${({theme}) => theme.COLORS.WHITE};
  height: 56px;
  border-radius: 100px;
  justify-content: center;
  padding: 18px 24px;
`;

export const InputContent = styled.View`
  flex-direction: row;
`;
