import React from 'react';
import {SafeAreaView, TouchableOpacity} from 'react-native';
import {Input} from '../Input';
import * as S from './styles';

import PlusIcon from '../../assets/plusIcon.svg';
import BackIcon from '../../assets/backIcon.svg';
import {useNavigation} from '@react-navigation/native';

interface HaaderProps {
  showSearch?: boolean;
}
export function Header({showSearch}: HaaderProps) {
  const navigator = useNavigation();
  return (
    <S.Container>
      <SafeAreaView>
        <S.Content>
          <S.HeaderTop>
            <S.TitleArea>
              <TouchableOpacity onPress={() => navigator.goBack()}>
                <BackIcon />
              </TouchableOpacity>
              <S.Title>Plano de Contas</S.Title>
            </S.TitleArea>
            <TouchableOpacity
              onPress={() => navigator.navigate('InsertOcurrence')}>
              <PlusIcon />
            </TouchableOpacity>
          </S.HeaderTop>
          {showSearch && (
            <S.InputArea>
              <Input />
            </S.InputArea>
          )}
        </S.Content>
      </SafeAreaView>
    </S.Container>
  );
}
