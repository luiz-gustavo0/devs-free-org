import React, { ButtonHTMLAttributes } from 'react';

import * as S from './styles';

type ButtonProps = {
  color?: string;
  children?: React.ReactNode;
} & ButtonHTMLAttributes<HTMLButtonElement>;

export const Button = ({ color, children, ...props }: ButtonProps) => {
  return <S.Wrapper {...props}>{children}</S.Wrapper>;
};
