import styled, { css } from 'styled-components';

export const Wrapper = styled.div``;

export const Heading = styled.h3`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.xlarge};
    line-height: ${theme.font.sizes.xxlarge};
    display: flex;
    align-items: center;
    gap: 1rem;
    @media (max-width: 510px) {
      font-size: ${theme.font.sizes.large};
    }
  `}
`;
