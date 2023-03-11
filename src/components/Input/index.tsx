import React from 'react';
import SearchIcon from '../../assets/searchIcon.svg';
import * as S from './styles';

interface InputPros {
  icon?: boolean;
}

export function Input({icon}: InputPros) {
  const [text, onChangeText] = React.useState('');

  return (
    <S.InputContainer>
      <S.InputContent>
        {!icon && <SearchIcon />}
        <S.Input
          placeholder="Pesquisar conta"
          onChangeText={onChangeText}
          value={text}
          autoCapitalize="none"
        />
      </S.InputContent>
    </S.InputContainer>
  );
}
