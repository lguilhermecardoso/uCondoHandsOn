import React from 'react';
import {Modal as ReactModal, StyleSheet, Text, View} from 'react-native';

import * as S from './styles';

import Trash from '../../assets/trash.svg';
import {useOccurrencies} from '../../contexts/occurrenciesContext';

interface ModalProps {
  visible: boolean;
  onRequestClose: () => void;
  onClose: (state: boolean) => void;
  item: any;
}

export function Modal({visible, onRequestClose, onClose, item}: ModalProps) {
  const {occurrencies, setOccurrencies} = useOccurrencies();

  function handleDeleteOccurrence() {
    const filteredOccurrencies = occurrencies.filter(
      oc => oc.code !== item.code,
    );
    console.log(filteredOccurrencies);
    setOccurrencies(filteredOccurrencies);
    onClose(false);
  }

  return (
    <View style={styles.centeredView}>
      <ReactModal
        animationType="slide"
        transparent={true}
        visible={visible}
        onRequestClose={onRequestClose}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Trash />
            <S.TitleModalText>Deseja excluir a conta</S.TitleModalText>
            <S.SubTitleModalText>{`${item.code} - ${item.name}`}</S.SubTitleModalText>
            <S.ModalFooterArea>
              <S.CancelButton>
                <S.CancelButtonText onPress={() => onClose(false)}>
                  Não!
                </S.CancelButtonText>
              </S.CancelButton>
              <S.ConfirmButton onPress={handleDeleteOccurrence}>
                <Text style={styles.textStyle}>Com certeza</Text>
              </S.ConfirmButton>
            </S.ModalFooterArea>
          </View>
        </View>
      </ReactModal>
    </View>
  );
}

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: '#F194FF',
  },
  buttonClose: {
    backgroundColor: '#2196F3',
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
  },
});
