import React from 'react';
import DownIcon from '../../assets/downIcon.svg';

import * as S from './styles';

export function SelectInput({
  list,
  defaultText,
  disabled = false,
  handleChange,
}) {
  return (
    <S.SelectDropdownContainer>
      <S.SelectStyled
        disabled={disabled}
        data={list}
        onSelect={selectedItem => {
          handleChange(selectedItem);
        }}
        defaultButtonText={defaultText}
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
