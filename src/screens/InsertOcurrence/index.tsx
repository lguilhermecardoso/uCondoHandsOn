import React from 'react';
import {Content} from '../../components/Content';
import {Header} from '../../components/Header';
import {SelectInput} from '../../components/SelectInput';

import * as S from './styles';
export function InsertOcurrence() {
  return (
    <>
      <Header />
      <Content>
        <S.Container>
          <S.Content>
            <S.Label>Conta pai</S.Label>
            <SelectInput />
            <S.Label>Código</S.Label>
            <S.OcurrenceInput placeholder="Insira o código" />
            <S.Label>Nome</S.Label>
            <S.OcurrenceInput placeholder="Insira o nome" />
            <S.Label>Tipo</S.Label>
            <SelectInput />
            <S.Label>Aceita lancamentos</S.Label>
            <SelectInput />
          </S.Content>
        </S.Container>
      </Content>
    </>
  );
}
