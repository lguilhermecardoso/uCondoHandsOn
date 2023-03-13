import React from 'react';
import DownIcon from '../../assets/downIcon.svg';

import * as S from './styles';

const mockAccounts = ['1 - Receitas', '2 - Despesas'];
export function SelectInput() {
  return (
    <S.SelectDropdownContainer>
      <S.SelectStyled
        data={mockAccounts}
        onSelect={(selectedItem, index) => {
          console.log(selectedItem, index);
        }}
        defaultButtonText={'Selecione a conta pai'}
        renderDropdownIcon={() => {
          return <DownIcon />;
        }}
        buttonTextAfterSelection={selectedItem => {
          return selectedItem;
        }}
        rowTextForSelection={item => {
          return item;
        }}
      />
    </S.SelectDropdownContainer>
  );
}
