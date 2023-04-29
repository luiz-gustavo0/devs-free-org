import styled, { css } from 'styled-components';

export const Container = styled.div`
  ${({ theme }) => css`
    width: 100%;
    min-height: 100vh;
    max-width: ${theme.grid.container};
    margin-left: auto;
    margin-right: auto;
    padding: ${theme.grid.gutter} calc(${theme.grid.gutter} / 2);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  `}
`;
