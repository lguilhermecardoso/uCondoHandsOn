import React from 'react';
import * as S from './styles';

interface ContentProps {
  children: React.ReactNode;
}

export function Content({children}: ContentProps) {
  return (
    <S.Container>
      <S.Content>{children}</S.Content>
    </S.Container>
  );
}
