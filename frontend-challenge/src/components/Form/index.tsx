import { GoSearch } from 'react-icons/go';

import * as S from './styles';
import { FormEvent } from 'react';

type FormProps = {
  onSubmit: (event: FormEvent<HTMLFormElement>) => void;
  inputValue: string;
  onChange: (value: string) => void;
};

export const Form = ({ inputValue, onChange, onSubmit }: FormProps) => {
  return (
    <S.Wrapper onSubmit={onSubmit}>
      <label htmlFor='username'>
        Insira o nome do usuário para visualizar a lista de repositórios
      </label>
      <S.InputContainer>
        <input
          type='text'
          name='username'
          id='username'
          value={inputValue}
          onChange={(e) => onChange(e.target.value)}
          required
        />
        <button type='submit'>
          <GoSearch size={20} />
        </button>
      </S.InputContainer>
    </S.Wrapper>
  );
};
