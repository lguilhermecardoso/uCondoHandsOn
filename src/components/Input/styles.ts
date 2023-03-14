import styled from 'styled-components/native';

export const InputContainer = styled.View`
  background-color: ${({theme}) => theme.COLORS.WHITE};
  height: 56px;
  border-radius: 100px;
  justify-content: center;
  align-items: center;
  padding: 18px 24px;
`;

export const InputContent = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const Input = styled.TextInput`
  padding-left: 20px;

  width: 100%;
  height: 56px;
  color: green;
`;
