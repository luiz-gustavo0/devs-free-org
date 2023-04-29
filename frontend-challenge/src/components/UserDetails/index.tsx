import Link from 'next/link';

import { User } from '@/services/hooks/useRepo';
import * as S from './styles';

type UserDetailsProps = {
  user?: User;
};

export const UserDetails = ({ user }: UserDetailsProps) => {
  return (
    <S.Wrapper>
      <S.Avatar src={user?.avatar} />
      <S.Text>
        {user && (
          <Link href={user?.profile} target='_blank'>
            {user?.username}
          </Link>
        )}
      </S.Text>
    </S.Wrapper>
  );
};
