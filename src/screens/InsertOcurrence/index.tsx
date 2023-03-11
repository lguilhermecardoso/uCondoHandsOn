import React from 'react';
import {Text} from 'react-native';
import {Content} from '../../components/Content';
import {Header} from '../../components/Header';

import * as S from './styles';
export function InsertOcurrence() {
  return (
    <>
      <Header />
      <Content>
        <S.Container>
          <S.Content>
            <Text>InsertIcurrence</Text>
          </S.Content>
        </S.Container>
      </Content>
    </>
  );
}
