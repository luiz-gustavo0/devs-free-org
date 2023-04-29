import styled, { css } from 'styled-components';

export const Wrapper = styled.ul`
  ${({ theme }) => css`
    width: 100%;
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(30rem, 1fr));
    grid-gap: ${theme.spacings.xsmall};
    list-style: none;
    margin-bottom: ${theme.spacings.large};
  `}
`;
