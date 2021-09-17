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
    .min(8, 'Sua senha precisa ter ao menos 8 caracteres'),
});

const FormLogin = () => {
  const router = useRouter();
  const initialValues = {
    usuario: '',
    senha: '',
  };

  const form = useForm({
    initialValues,
    onSubmit: (values) => {
      loginService.login({
        username: values.usuario,
        password: values.senha,
      })
        .then(() => {
          router.push('/app/profile');
        });
    },
    async validateSchema(values) {
      return loginSchema.validate(values, {
        abortEarly: false,
      });
    },
  });
  return (
    <form id="formCadastro" onSubmit={form.handleSubmit}>
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
        error={form.errors.usuario}
        isTouched={form.touched.usuario}
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
      <pre>
        {JSON.stringify(form.touched, null, 4)}
      </pre>
    </form>
  );
};

export default FormLogin;
