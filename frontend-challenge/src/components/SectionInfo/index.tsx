import * as S from './styles';

type SectionInfoProps = {
  title: string;
  children: React.ReactNode;
  icon?: React.ReactNode;
};

export const SectionInfo = ({ children, icon, title }: SectionInfoProps) => {
  return (
    <S.Wrapper>
      <S.Heading>
        {icon}
        {title}
      </S.Heading>
      {children}
    </S.Wrapper>
  );
};
