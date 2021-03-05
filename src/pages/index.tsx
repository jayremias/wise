import React, { useCallback, useState } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { toast } from 'react-nextjs-toast';

import { Container, Content, Background } from '../styles/pages/index';

import Input from '../components/Input';
import Button from '../components/Button';
import api from '../services/apiClient';

interface IFormInputs {
  email: string;
  password: string;
}

const schema = yup.object({
  email: yup.string().required('Campo obrigatório;').email('Digite um e-mail válido;'),
  password: yup.string().min(6, 'A senha deve conter pelo menos 6 caracteres;').required('Campo obrigatório;'),
});

export default function Home() {

  const [loading, setLoading] = useState(false);

  const { handleSubmit, register, errors } = useForm<IFormInputs>({
    resolver: yupResolver(schema),
    mode: 'onBlur',
  });

  const onSubmit = useCallback(async data => {

    if(data.email != 'johndoe@example.com', data.password != 123456) {
      toast.notify('E-mail ou Senha inválidos', {
        type: 'error',
        title: 'Ops...'
      });
      return
    }

    try {
      setLoading(true);
      const response = await api.post('session', data);
      const {token, user} = response.data;
      //TODO: store auth data

      toast.notify('Login realizado com successo!', {
        type: 'success',
        title: 'Bem vindo!'
      });
    } catch (error) {
      toast.notify('Ops, houve uma falha ao executar o login', {
        type: 'error',
        title: 'Ops...'
      });
    }
    setLoading(false);
  }, []);

  return (
    <Container>
      <Background/>
      <Content>
        <form onSubmit={handleSubmit(onSubmit)}>
          <h1>Olá, seja bem-vindo!</h1>
          <strong>Para acessar a plataforma,
            faça seu login
          </strong>
          <Input error={errors.email?.message} name="email" inputRef={register} label="E-mail" placeholder="user.name@mail.com" />
          <Input error={errors.password?.message} name="password" inputRef={register} label="Senha" type="password" placeholder="******" />
          <Button type="submit">{ loading ? 'Enviando...' : 'Entrar'}</Button>
          <span>Esqueceu seu login e senha?</span>
          <span>Clique <a href="#">aqui</a></span>
        </form>
      </Content>
    </Container>
  )
}
