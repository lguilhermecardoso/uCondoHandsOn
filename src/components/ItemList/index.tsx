import React from 'react';
import {Text, TouchableOpacity} from 'react-native';
import TrashIcon from '../../assets/trashIcon.svg';

import * as S from './style';

export function ItemList() {
  return (
    <S.Container>
      <S.Content>
        <S.ItemContent>
          <Text>1 - Receitas</Text>
          <TouchableOpacity onPress={() => console.log('press')}>
            <TrashIcon />
          </TouchableOpacity>
        </S.ItemContent>
      </S.Content>
    </S.Container>
  );
}
