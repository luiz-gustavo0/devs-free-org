import { useQuery } from 'react-query';

import { api } from '../api';

export type User = {
  username: string;
  avatar: string;
  profile: string;
};

export type Repository = {
  user: User;
  name: string;
  description: string;
  stars: number;
  language?: string;
  license?: {
    name: string;
  };
  forks: number;
  issues: number;
  watchers: number;
  visibility: string;
  topics?: string[];
  createdAt: string;
  updatedAt: string;
  homepage?: string;
  url: string;
};

type UseRepoProps = {
  usename: string;
  repositoryName: string;
  enabled: boolean;
};

export const getRepository = async (
  usename: string,
  repositoryName: string
): Promise<Repository> => {
  const { data } = await api.get(`/repos/${usename}/${repositoryName}`);

  console.log(data);

  const repository: Repository = {
    user: {
      username: data?.owner?.login,
      avatar: data?.owner?.avatar_url,
      profile: data?.owner?.html_url,
    },
    name: data?.name,
    description: data?.description,
    stars: data?.stargazers_count,
    language: data?.language,
    license: {
      name: data?.license?.name,
    },
    forks: data?.forks_count,
    issues: data?.open_issues_count,
    watchers: data?.watchers,
    visibility: data?.visibility,
    topics: data?.topics,
    createdAt: data?.created_at,
    updatedAt: data?.updated_at,
    homepage: data?.homepage,
    url: data?.html_url,
  };

  return repository;
};

export const useRepo = ({ usename, repositoryName, enabled }: UseRepoProps) => {
  return useQuery(
    [`repo-${repositoryName}`, usename],
    () => getRepository(usename, repositoryName),
    {
      enabled,
    }
  );
};
