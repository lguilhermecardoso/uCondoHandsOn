import React from 'react';
import {Text, TouchableOpacity} from 'react-native';
import TrashIcon from '../../assets/trashIcon.svg';
import {useModal} from '../../contexts/modalContext';

import * as S from './style';

export function ItemList() {
  const {setModalOpen} = useModal();
  return (
    <>
      <S.Container>
        <S.Content>
          <S.ItemContent>
            <Text>1 - Receitas</Text>
            <TouchableOpacity onPress={() => setModalOpen(true)}>
              <TrashIcon />
            </TouchableOpacity>
          </S.ItemContent>
        </S.Content>
      </S.Container>
    </>
  );
}
