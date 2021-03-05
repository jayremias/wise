import React, { InputHTMLAttributes, LegacyRef} from 'react';
import { useForm } from 'react-hook-form';

import { Container, Error } from './style';

interface IProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  inputRef?: LegacyRef<HTMLInputElement> | undefined;
  label?: string | undefined;
  error: string | undefined;
}

const Input: React.FC<IProps> = ({name, label, inputRef, error, ...rest }) => {

  return (
    <Container hasError={!!error}>
      {label && <label htmlFor="mail">{label}</label>}
      <input ref={inputRef} name={name} aria-label={label} {...rest} />
      { error && (<Error>{ error }</Error>) }
    </Container>
  )
}

export default Input;
