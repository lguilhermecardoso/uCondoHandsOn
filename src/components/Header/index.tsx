import React from 'react';
import {SafeAreaView, TouchableOpacity} from 'react-native';
import {Input} from '../Input';
import * as S from './styles';

import PlusIcon from '../../assets/plusIcon.svg';
import BackIcon from '../../assets/backIcon.svg';
import CheckIcon from '../../assets/checkIcon.svg';
import {useNavigation} from '@react-navigation/native';

interface HaaderProps {
  title: string;
  showSearch?: boolean;
  showBackButton?: boolean;
  onSave?(): void;
}
export function Header({
  showSearch,
  title,
  showBackButton,
  onSave,
}: HaaderProps) {
  const navigator = useNavigation();
  return (
    <S.Container>
      <SafeAreaView>
        <S.Content>
          <S.HeaderTop>
            <S.TitleArea>
              {!!showBackButton && (
                <TouchableOpacity onPress={() => navigator.goBack()}>
                  <BackIcon />
                </TouchableOpacity>
              )}
              <S.Title>{title}</S.Title>
            </S.TitleArea>
            {onSave ? (
              <>
                <TouchableOpacity onPress={onSave}>
                  <CheckIcon />
                </TouchableOpacity>
              </>
            ) : (
              <TouchableOpacity
                onPress={() => navigator.navigate('InsertOccurrence')}>
                <PlusIcon />
              </TouchableOpacity>
            )}
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
