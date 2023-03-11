import styled from 'styled-components/native';
import {Input} from '../Input';

export const Container = styled.View`
  background-color: ${({theme}) => theme.COLORS.PRIMARY};
`;

export const Content = styled.View`
  padding: 22px;
`;

export const HeaderTop = styled.View`
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 25px;
`;

export const Title = styled.Text`
  font-size: 22px;
  color: ${({theme}) => theme.COLORS.BACKGROUND};
  font-weight: bold;
`;

export const TitleArea = styled.View`
  flex-direction: row;
`;

export const InputArea = styled.View`
  margin-bottom: 32px;
`;
