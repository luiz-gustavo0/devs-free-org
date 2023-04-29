import { useQuery } from 'react-query';

import { api } from '../api';
import { Repository } from './useRepo';

type FetchRespositoriesResponse = {
  repos: Repository[];
  hasNextPage: boolean;
  hasPreviousPage: boolean;
};

export const fetchRepositories = async (
  username: string,
  page = 1
): Promise<FetchRespositoriesResponse> => {
  const { data, headers } = await api.get(`/users/${username}/repos`, {
    params: {
      page,
      per_page: 12,
    },
  });
  const linHeader: string = headers.link;

  const hasPreviousPage = linHeader?.includes(`rel=\"prev\"`);
  const hasNextPage = linHeader?.includes(`rel=\"next\"`);

  console.log(data);

  const repos: Repository[] = data.map((item) => ({
    name: item.name,
    description: item.description,
    stars: item.stargazers_count,
    user: {
      username: item.owner.login,
      avatar: item.owner.avatar_url,
      profile: item.owner.html_url,
      url: item.owner.url,
    },
    language: item.language,
    licence: item.license,
    forks: item.forks_count,
    issues: item.open_issues_count,
    url: item.html_url,
    watchers: item.watchers_count,
    visibility: item.visibility,
    topics: item.topics,
    createdAt: item.created_at,
    updatedAt: item.updated_at,
    homepage: item.homepage,
  }));

  return {
    repos,
    hasNextPage,
    hasPreviousPage,
  };
};

export const useRepos = ({
  username,
  page,
}: {
  username: string;
  page?: number;
}) => {
  return useQuery(
    [`repos-${username}`, page],
    () => fetchRepositories(username, page),
    {
      enabled: !!username,
    }
  );
};
