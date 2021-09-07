import React, { useState } from 'react';
import { useRouter } from 'next/router';
import { Button } from '../../commons/Button';
import TextField from '../../forms/TextField';

const useForm = ({ initialValues, onSubmit }) => {
  const [values, setValues] = useState(initialValues);
  return {
    values,
    handleSubmit(e) {
      e.preventDefault();
      onSubmit(values);
    },
    handleChange(e) {
      const fieldName = e.target.getAttribute('name');
      const { value } = e.target;
      setValues((currentValues) => ({
        ...currentValues,
        [fieldName]: value,
      }));
    },
  };
};
const FormLogin = () => {
  const router = useRouter();
  const initialValues = {
    usuario: '',
    senha: '',
  };
  const form = useForm({
    initialValues,
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
      router.push('app/profile');
    },
  });
  return (
    <form id="formCadastro" onSubmit={form.handleSubmit}>
      <TextField
        placeholder="Usuário"
        name="usuario"
        value={form.values.usuario}
        onChange={form.handleChange}
      />
      <TextField
        placeholder="Senha"
        name="senha"
        type="password"
        value={form.values.senha}
        onChange={form.handleChange}
      />

      <Button
        type="submit"
        variant="primary.main"
        margin={{
          xs: '0 auto',
          md: 'initial',
        }}
        fullWidth
      >
        Entrar
      </Button>
    </form>
  );
};

export default FormLogin;