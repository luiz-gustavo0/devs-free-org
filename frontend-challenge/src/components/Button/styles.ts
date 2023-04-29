import styled, { css } from 'styled-components';

export const Wrapper = styled.button`
  ${({ theme }) => css`
    padding: ${theme.spacings.xxsmall} ${theme.spacings.xsmall};
    background: ${theme.colors.primary};
    color: ${theme.colors.white};
    border-radius: 0.4rem;
    font-size: ${theme.font.sizes.medium};
    border: 0;
    cursor: pointer;
    transition: filter 0.3s ease;

    &:hover {
      filter: brightness(0.8);
    }

    &:disabled {
      filter: brightness(0.4);
      cursor: not-allowed;
    }
  `}
`;
