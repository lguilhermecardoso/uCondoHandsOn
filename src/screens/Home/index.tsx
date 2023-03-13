import React, {useEffect, useState} from 'react';
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
  const [filterOccurencies, setFilterOccurencies] = useState([]);

  function handleSearchInput(value) {
    if (value.length < 2) {
      setFilterOccurencies([]);
      return;
    }
    let filterOccurrencies = occurrencies.filter(oc => {
      return oc.name.toLowerCase().search(value.toLowerCase()) !== -1;
    });

    setFilterOccurencies(filterOccurrencies);
  }

  return (
    <>
      <Header title="Plano de Contas" showSearch onSearch={handleSearchInput} />
      <Content>
        <S.Container>
          <S.HomeInformation>
            {occurrencies.length > 0 && (
              <>
                <S.Title>Listagem {filterOccurencies.length}</S.Title>
                <S.TextCounter>{occurrencies.length} registros</S.TextCounter>
              </>
            )}
          </S.HomeInformation>
          {filterOccurencies.length > 0 ? (
            <>
              <FlatList
                showsVerticalScrollIndicator={false}
                data={filterOccurencies}
                renderItem={({item}) => <ItemList item={item} />}
                keyExtractor={item => item.code}
                ListEmptyComponent={() => <Text>Nenhuma conta cadastrada</Text>}
              />
            </>
          ) : (
            <FlatList
              showsVerticalScrollIndicator={false}
              data={occurrencies}
              renderItem={({item}) => <ItemList item={item} />}
              keyExtractor={item => item.code}
              ListEmptyComponent={() => <Text>Nenhuma conta cadastrada</Text>}
            />
          )}
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
