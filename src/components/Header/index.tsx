import React from 'react';
import {SafeAreaView, TouchableOpacity} from 'react-native';
import {Input} from '../Input';
import * as S from './styles';

import PlusIcon from '../../assets/plusIcon.svg';
import BackIcon from '../../assets/backIcon.svg';

export function Header() {
  return (
    <S.Container>
      <SafeAreaView>
        <S.Content>
          <S.HeaderTop>
            <S.TitleArea>
              <TouchableOpacity onPress={() => console.log('Pressed')}>
                <BackIcon />
              </TouchableOpacity>
              <S.Title>Plano de Contas</S.Title>
            </S.TitleArea>
            <TouchableOpacity onPress={() => console.log('Pressed')}>
              <PlusIcon />
            </TouchableOpacity>
          </S.HeaderTop>
          <Input />
        </S.Content>
      </SafeAreaView>
    </S.Container>
  );
}
