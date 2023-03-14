import React, {useEffect} from 'react';
import SearchIcon from '../../assets/searchIcon.svg';
import {defaultTheme} from '../../theme';
import * as S from './styles';

interface InputPros {
  icon?: boolean;
  onSearch?: string | undefined;
}

export function Input({icon, onSearch}: InputPros) {
  const [text, onChangeText] = React.useState('');

  useEffect(() => {
    if (!text) {
      return;
    }
    onSearch(text);
  }, [text]);

  return (
    <S.InputContainer>
      <S.InputContent>
        {!icon && <SearchIcon />}
        <S.Input
          placeholderTextColor={defaultTheme.COLORS.FONT_COMPLEMENTARY}
          placeholder="Pesquisar conta"
          onChangeText={onChangeText}
          value={text}
          autoCapitalize="none"
        />
      </S.InputContent>
    </S.InputContainer>
  );
}
