import React from 'react';
import {SafeAreaView} from 'react-native';
import {Input} from '../Input';
import * as S from './styles';

export function Header() {
  return (
    <S.Container>
      <SafeAreaView>
        <S.Content>
          <S.HeaderTop>
            <S.Title>Plano de Contas</S.Title>
            <S.Title>+</S.Title>
          </S.HeaderTop>
          <Input />
        </S.Content>
      </SafeAreaView>
    </S.Container>
  );
}
