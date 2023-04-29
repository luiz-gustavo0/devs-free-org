import React from 'react';
import { PacmanLoader } from 'react-spinners';
import { useTheme } from 'styled-components';

import * as S from './styles';

type LoadingProps = {
  fullPage: boolean;
  color?: string;
  size?: number;
};

export const Loading = ({ color, fullPage, size }: LoadingProps) => {
  const { colors } = useTheme();
  return (
    <>
      {fullPage ? (
        <S.Wrapper>
          <PacmanLoader size={size} color={color || colors.primary} loading />
        </S.Wrapper>
      ) : (
        <PacmanLoader size={size} color={color || colors.primary} loading />
      )}
    </>
  );
};
