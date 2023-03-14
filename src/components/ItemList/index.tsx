import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import TrashIcon from '../../assets/trashIcon.svg';
import {useModal} from '../../contexts/modalContext';
import {Modal} from '../Modal';

import * as S from './style';

export function ItemList({item}) {
  const {modalOpen, setModalOpen, onClose} = useModal();
  return (
    <>
      <S.Container>
        <S.Content>
          <S.ItemContent>
            <S.ItemText typeOfOccurrency={item.type}>
              {item.code} - {item.name}
            </S.ItemText>
            <TouchableOpacity onPress={() => setModalOpen(true)}>
              <TrashIcon />
            </TouchableOpacity>
          </S.ItemContent>
        </S.Content>
      </S.Container>
      {item.childrens.length > 0 && (
        <>
          {item.childrens.map(child => (
            <S.Container>
              <S.Content>
                <S.ItemContent>
                  <S.ItemText typeOfOccurrency={item.type}>
                    {child.code} - {child.name}
                  </S.ItemText>
                  <TouchableOpacity onPress={() => setModalOpen(true)}>
                    <TrashIcon />
                  </TouchableOpacity>
                </S.ItemContent>
              </S.Content>
            </S.Container>
          ))}
        </>
      )}
      <S.ModalArea>
        <Modal
          visible={modalOpen}
          onClose={setModalOpen}
          onRequestClose={onClose}
          item={item}
        />
      </S.ModalArea>
    </>
  );
}
