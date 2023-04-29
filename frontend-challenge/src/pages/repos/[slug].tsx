import Link from 'next/link';
import { useRouter } from 'next/router';
import styled, { css } from 'styled-components';
import {
  GoBook,
  GoPerson,
  GoPencil,
  GoLinkExternal,
  GoFile,
  GoLink,
} from 'react-icons/go';
import { HiArrowLongLeft } from 'react-icons/hi2';

import { useRepo } from '@/services/hooks/useRepo';
import { formatDate } from '@/utils/format-date';
import { formatNumber } from '@/utils/format-number';

import { Container, Loading, SectionInfo, UserDetails } from '@/components';
import Head from 'next/head';

export default function RepoDetails() {
  const router = useRouter();
  const { slug, user } = router.query;
  const { data, isLoading, error } = useRepo({
    usename: `${user}`,
    repositoryName: `${slug}`,
    enabled: router.isReady,
  });

  if (isLoading) {
    return <Loading fullPage />;
  }

  return (
    <>
      <Head>
        <title>Github Repos - {slug}</title>
      </Head>
      <Wrapper>
        <LinkWrapper>
          <Link href='/'>
            <HiArrowLongLeft />
            Voltar
          </Link>
        </LinkWrapper>
        {error || !data ? (
          <Text>Ocorreu um erro ao buscar os dados do repositório.</Text>
        ) : (
          <Content>
            <Heading>
              <span>{data?.name}</span>
              <LinkWrapper>
                <Link href={data?.url}>
                  <GoLinkExternal size={18} />
                </Link>
              </LinkWrapper>
            </Heading>
            <SectionInfo title='Descrição' icon={<GoBook />}>
              <Text>{data?.description}</Text>
            </SectionInfo>
            <SectionInfo title='HomePage' icon={<GoLink />}>
              <LinkWrapper>
                {data?.homepage && (
                  <Link href={data?.homepage}>{data?.homepage}</Link>
                )}
              </LinkWrapper>
            </SectionInfo>
            <SectionInfo title='Informações Gerais' icon={<GoPencil />}>
              <List>
                <li>
                  <Text>Estrelas: {formatNumber(data?.stars)}</Text>
                </li>
                <li>
                  <Text>Forks: {formatNumber(data?.forks)}</Text>
                </li>
                <li>
                  <Text>Problemas: {formatNumber(data?.issues)}</Text>
                </li>
                <li>
                  <Text>Observadores: {formatNumber(data?.watchers)}</Text>
                </li>
                <li>
                  <Text>Tópicos: {data?.topics?.join(' - ')}</Text>
                </li>
                <li>
                  <Text>Criado em: {formatDate(data?.createdAt)}</Text>
                </li>
                <li>
                  <Text>Atualizado em: {formatDate(data?.updatedAt)}</Text>
                </li>
              </List>
            </SectionInfo>
            <SectionInfo title='Licença' icon={<GoFile />}>
              <Text>{data?.license?.name}</Text>
            </SectionInfo>
            <SectionInfo title='Criado por' icon={<GoPerson />}>
              <UserDetails user={data?.user} />
            </SectionInfo>
          </Content>
        )}
      </Wrapper>
    </>
  );
}

const Wrapper = styled(Container)`
  align-items: flex-start;
  justify-content: flex-start;
`;

const Heading = styled.h1`
  ${({ theme }) => css`
    font-size: 3.2rem;
    padding-bottom: ${theme.spacings.small};
    border-bottom: 1px solid ${theme.colors.white50};
    display: flex;
    align-items: center;
    gap: ${theme.spacings.xxsmall};

    @media (max-width: 510px) {
      font-size: ${theme.font.sizes.xlarge};
    }
  `}
`;

const Text = styled.p`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.medium};

    @media (max-width: 510px) {
      font-size: ${theme.font.sizes.small};
    }
  `}
`;

const Content = styled.section`
  ${({ theme }) => css`
    width: 100%;
    border: 1px solid ${theme.colors.white50};
    border-radius: 0.4rem;
    padding: ${theme.spacings.small};
    margin-top: ${theme.spacings.xsmall};
    display: flex;
    flex-direction: column;
    gap: ${theme.spacings.small};
  `}
`;

const List = styled.ul`
  ${({ theme }) => css`
    padding: ${theme.spacings.xxsmall} ${theme.spacings.medium};

    li {
      font-size: ${theme.font.sizes.small};
    }

    li:not(:last-child) {
      margin-bottom: ${theme.spacings.xsmall};
    }
  `}
`;

const LinkWrapper = styled.span`
  align-self: flex-start;
  ${({ theme }) => css`
    a {
      display: flex;
      align-items: center;
      gap: 0.4rem;
      width: max-content;
      font-size: ${theme.font.sizes.small};
      color: ${theme.colors.primary};
      border: 1px solid transparent;
      transition: all 300ms ease;

      &:hover {
        border-bottom-color: ${theme.colors.primary};
      }
    }
  `}
`;
