import styled, { css } from 'styled-components';

export const Wrapper = styled.li`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: ${theme.spacings.small};
    border: 1px solid ${theme.colors.white50};
    border-radius: 0.4rem;
    height: 20rem;
    color: ${theme.colors.gray};
  `}
`;

export const Header = styled.header`
  ${({ theme }) => css`
    display: flex;
    align-items: baseline;
    gap: ${theme.spacings.xsmall};

    strong {
      font-size: ${theme.font.sizes.xlarge};
      display: -webkit-box;
      -webkit-box-orient: vertical;
      -moz-box-orient: vertical;
      -webkit-line-clamp: 1;
      white-space: pre-wrap;
      overflow: hidden;
    }

    @media (max-width: 768px) {
      strong {
        font-size: ${theme.font.sizes.large};
      }
    }
  `}
`;

export const Description = styled.p`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.small};
    line-height: ${theme.font.sizes.xlarge};
    margin-top: ${theme.spacings.xsmall};
    margin-bottom: ${theme.spacings.medium};
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -moz-box-orient: vertical;
    -webkit-line-clamp: 2;
    white-space: pre-wrap;
    overflow: hidden;
  `}
`;

export const Footer = styled.footer`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    justify-content: space-between;

    > div {
      display: flex;
      gap: 0.8rem;
    }

    svg {
      color: ${theme.colors.secondry};
    }

    span {
      font-size: 1.4rem;
    }

    a {
      display: block;
      padding: ${theme.spacings.xxsmall};
      color: ${theme.colors.primary};
      font-size: ${theme.font.sizes.small};
      transition: all 0.3s ease;
      border: 1px solid transparent;

      &:hover {
        border-color: ${theme.colors.primary};
        border-radius: 0.4rem;
      }
    }
  `}
`;
