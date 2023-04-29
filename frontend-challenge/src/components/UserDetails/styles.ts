import styled, { css } from 'styled-components';

export const Wrapper = styled.div`
  ${({ theme }) => css`
    margin-top: ${theme.spacings.xxsmall};
  `}
`;

export const Avatar = styled.img`
  ${({ theme }) => css`
    width: 10rem;
    height: 10rem;
    object-fit: cover;
    object-position: center;
    border: 4px solid ${theme.colors.primary};
  `}
`;

export const Text = styled.span`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.small};

    a {
      display: block;
      width: max-content;
      font-size: ${theme.font.sizes.medium};
      color: ${theme.colors.primary};
      text-decoration: none;
      margin-top: ${theme.spacings.xxsmall};
      border-bottom: 1px solid transparent;

      transition: all 300ms ease-in-out;

      &:hover {
        border-bottom-color: ${theme.colors.primary};
      }
    }
  `}
`;
