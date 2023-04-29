import { Repository } from '@/hooks/useRepo';
import { CardRepo } from '../CardRepo';

import * as S from './styles';

type ListReposProps = {
  repos: Repository[] | undefined;
};

export const ListRepos = ({ repos }: ListReposProps) => {
  return (
    <S.Wrapper>
      {repos?.map((item) => (
        <CardRepo
          key={item.name}
          description={item.description}
          name={item.name}
          stars={item.stars}
          user={item.user.username}
        />
      ))}
    </S.Wrapper>
  );
};
