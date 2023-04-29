import { FormEvent, useEffect, useState } from 'react';
import { GoMarkGithub } from 'react-icons/go';
import styled, { css, useTheme } from 'styled-components';
import { PacmanLoader } from 'react-spinners';

import {
  getItemSessionStorage,
  setItemSessionStorage,
} from '@/utils/sessionStorage';
import { useRepos } from '@/services/hooks/useRepos';

import { Button, Container, Form, ListRepos } from '@/components';
import Head from 'next/head';

type SessionStorageData = {
  username: string;
  page: number;
};

export default function Home() {
  const [username, setUsername] = useState('');
  const [inputValue, setInputValue] = useState('');
  const [page, setPage] = useState(1);
  const { colors } = useTheme();

  const { data, isLoading, error } = useRepos({
    username,
    page,
  });

  useEffect(() => {
    const storagedData =
      getItemSessionStorage<SessionStorageData>('@session-data');
    if (storagedData) {
      setInputValue(storagedData.username);
      setUsername(storagedData.username);
      setPage(storagedData.page);
    }
  }, []);

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!inputValue) {
      return;
    }

    setItemSessionStorage('@session-data', { username: inputValue, page });
    setPage(1);
    setUsername(inputValue.trim());
  };

  const handleNextPage = () => {
    if (data?.hasNextPage) {
      setItemSessionStorage('@session-data', { username, page: page + 1 });
      setPage((prev) => prev + 1);
    }
  };

  const handlePreviousPage = () => {
    if (data?.hasPreviousPage) {
      setItemSessionStorage('@session-data', { username, page: page - 1 });
      setPage((prev) => prev - 1);
    }
  };

  return (
    <>
      <Head>
        <title>Github Repos</title>
      </Head>
      <Container>
        <GoMarkGithub size={90} color={colors.primary} />
        <Form
          inputValue={inputValue}
          onChange={setInputValue}
          onSubmit={handleSubmit}
        />
        {isLoading && <PacmanLoader color={colors.primary} loading size={12} />}
        {!!error && <Text>Opss! Ocorreu um erro. Tente novamente.</Text>}
        <Section>
          {data?.repos.length === 0 ? (
            <Text>Não encontramos nenhum repositório para este usuário.</Text>
          ) : (
            <ListRepos repos={data?.repos} />
          )}

          {!!data?.repos.length && (
            <ButtonsContainer>
              <Button
                disabled={!data?.hasPreviousPage}
                onClick={handlePreviousPage}
              >
                Anterior
              </Button>
              <Button disabled={!data?.hasNextPage} onClick={handleNextPage}>
                Próxima
              </Button>
            </ButtonsContainer>
          )}
        </Section>
      </Container>
    </>
  );
}

const Text = styled.p`
  ${({ theme }) => css`
    text-align: center;
    font-size: ${theme.font.sizes.medium};
  `}
`;

const Section = styled.section`
  width: 100%;
`;

const ButtonsContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
