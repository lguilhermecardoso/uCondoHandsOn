import React from 'react';
import {Text} from 'react-native';
import SearchIcon from '../../assets/searchIcon.svg';
import * as S from './styles';

interface InputPros {
  icon?: boolean;
}

export function Input({icon}: InputPros) {
  return (
    <S.InputContainer>
      <S.InputContent>
        {!icon && <SearchIcon />}
        <Text>Input</Text>
      </S.InputContent>
    </S.InputContainer>
  );
}
