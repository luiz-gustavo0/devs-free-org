import styled, { css } from 'styled-components';

export const Wrapper = styled.form`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    max-width: 60rem;
    margin-bottom: 6rem;

    label {
      font-size: ${theme.font.sizes.xlarge};
      margin-top: ${theme.spacings.large};
      margin-bottom: ${theme.spacings.small};
    }

    @media (max-width: 768px) {
      max-width: 100%;

      label {
        font-size: ${theme.font.sizes.medium};
      }
    }
  `}
`;

export const InputContainer = styled.div`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    width: 100%;
    border: 1px solid ${theme.colors.white50};
    background: transparent;
    border-radius: 0.4rem;

    input {
      flex: 1;
      background: ${theme.colors.mainBg};

      color: ${theme.colors.gray};
      border-top-left-radius: 0.4rem;
      border-bottom-left-radius: 0.4rem;
      padding: ${theme.spacings.xsmall};
      font-size: ${theme.font.sizes.xlarge};
      border: 0;
      outline: none;
    }

    button {
      background: transparent;

      border-top-right-radius: 0.4rem;
      border-bottom-right-radius: 0.4rem;
      border: 0;
      padding: ${theme.spacings.xsmall};
      cursor: pointer;

      svg {
        color: ${theme.colors.gray};
      }
    }

    @media (max-width: 768px) {
      input,
      button {
        padding: ${theme.spacings.xxsmall};
        font-size: ${theme.font.sizes.medium};
      }

      button {
        > svg {
          width: 14px;
          height: 14px;
        }
      }
    }
  `}
`;
