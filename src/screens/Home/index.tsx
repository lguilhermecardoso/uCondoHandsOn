import React from 'react';
import {FlatList, Text} from 'react-native';
import {Content} from '../../components/Content';
import {Header} from '../../components/Header';
import {ItemList} from '../../components/ItemList';
import {Modal} from '../../components/Modal';
import {useModal} from '../../contexts/modalContext';
import {useOccurrencies} from '../../contexts/occurrenciesContext';

import * as S from './styles';

export function Home() {
  const {modalOpen, setModalOpen, onClose} = useModal();
  const {occurrencies} = useOccurrencies();
  return (
    <>
      <Header title="Plano de Contas" showSearch />
      <Content>
        <S.Container>
          <S.HomeInformation>
            {occurrencies.length > 0 && (
              <>
                <S.Title>Listagem</S.Title>
                <S.TextCounter>{occurrencies.length} registros</S.TextCounter>
              </>
            )}
          </S.HomeInformation>
          <FlatList
            showsVerticalScrollIndicator={false}
            data={occurrencies}
            renderItem={({item}) => <ItemList item={item} />}
            keyExtractor={item => item.code}
            ListEmptyComponent={() => <Text>Nenhuma conta cadastrada</Text>}
          />
        </S.Container>
        <Modal
          visible={modalOpen}
          onClose={setModalOpen}
          onRequestClose={onClose}
        />
      </Content>
    </>
  );
}
