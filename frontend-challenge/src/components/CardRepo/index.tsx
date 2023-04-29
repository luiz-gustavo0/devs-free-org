import { GoRepo, GoStar } from 'react-icons/go';
import * as S from './styles';
import Link from 'next/link';

type CardRepoProps = {
  name: string;
  description: string;
  stars: number;
  user: string;
};

export const CardRepo = ({ description, name, stars, user }: CardRepoProps) => {
  return (
    <S.Wrapper>
      <S.Header>
        <GoRepo size={18} />
        <strong title={name}>{name}</strong>
      </S.Header>
      <S.Description>{description}</S.Description>
      <S.Footer>
        <div>
          <GoStar size={18} />
          <span>{stars}</span>
        </div>
        <Link href={`/repos/${name}?user=${user}`}>Ver detalhes</Link>
      </S.Footer>
    </S.Wrapper>
  );
};
