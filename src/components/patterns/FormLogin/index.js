import React, { useState } from 'react';
import { Button } from '../../commons/Button';
import TextField from '../../forms/TextField';

const useForm = ({ initialValues }) => {
  const [values, setValues] = useState(initialValues);
  return {
    values,
    handleSubmit(e) {
      e.preventDefault();
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
  const initialValues = {
    usuario: '',
    senha: '',
  };
  const form = useForm({
    initialValues,
  });
  return (
    <form id="formCadastro" action="/app/profile" onSubmit={form.handleSubmit}>
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
