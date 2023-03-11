import React from 'react';
import {FlatList} from 'react-native';
import {Content} from '../../components/Content';
import {Header} from '../../components/Header';
import {ItemList} from '../../components/ItemList';

import * as S from './styles';

export function Home() {
  return (
    <>
      <Header showSearch />
      <Content>
        <S.Container>
          <S.HomeInformation>
            <S.Title>Listagem</S.Title>
            <S.TextCounter>27 registros</S.TextCounter>
          </S.HomeInformation>
          <FlatList
            showsVerticalScrollIndicator={false}
            data={[0, 1, 2, 3, 4, 5, 6, 7]}
            renderItem={({item}) => <ItemList />}
            keyExtractor={item => item}
          />
        </S.Container>
      </Content>
    </>
  );
}
