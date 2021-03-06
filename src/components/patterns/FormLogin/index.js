import React from 'react';
import { useRouter } from 'next/router';
import * as yup from 'yup';
import { Button } from '../../commons/Button';
import TextField from '../../forms/TextField';
import useForm from '../../../infra/hooks/forms/useForm';
import { loginService } from '../../../services/login/loginService';

const loginSchema = yup.object().shape({
  usuario: yup
    .string()
    .required('"Usuario" é obrigatório')
    .min(2, 'Preencha ao menos 2 caracteres'),
  senha: yup
    .string()
    .required('"Senha" é obrigatória')
    .min(6, 'Sua senha precisa ter ao menos 6 caracteres'),
});

// eslint-disable-next-line react/prop-types
const FormLogin = ({ onSubmit }) => {
  const router = useRouter();
  const initialValues = {
    usuario: '',
    senha: '',
  };

  const form = useForm({
    initialValues,
    onSubmit: (values) => {
      form.setIsFormDisabled(true);
      loginService.login({
        username: values.usuario,
        password: values.senha,
      })
        .then(() => {
          router.push('/app/profile');
        })
        .catch((err) => {
          console.error(err);
        })
        .finally(() => {
          form.setIsFormDisabled(false);
        });
    },
    async validateSchema(values) {
      return loginSchema.validate(values, {
        abortEarly: false,
      });
    },
  });
  return (
    <form id="formCadastro" onSubmit={onSubmit || form.handleSubmit}>
      <TextField
        placeholder="Usuário"
        name="usuario"
        value={form.values.usuario}
        onChange={form.handleChange}
        onBlur={form.handleBlur}
        error={form.errors.usuario}
        isTouched={form.touched.usuario}
      />
      <TextField
        placeholder="Senha"
        name="senha"
        type="password"
        value={form.values.senha}
        onChange={form.handleChange}
        onBlur={form.handleBlur}
        error={form.errors.senha}
        isTouched={form.touched.senha}
      />

      <Button
        type="submit"
        variant="primary.main"
        margin={{
          xs: '0 auto',
          md: 'initial',
        }}
        fullWidth
        disabled={form.isFormDisabled}
      >
        Entrar
      </Button>
    </form>
  );
};

export default FormLogin;
