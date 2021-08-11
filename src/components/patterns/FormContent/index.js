import React, { useState } from 'react';
import { Button } from '../../commons/Button';
import TextField from '../../forms/TextField';
import Text from '../../foundation/Text';

const FormContent = () => {
  const [userInfo, setUserInfo] = useState({
    usuario: '',
    email: '',
  });

  const handleChange = (e) => {
    const fieldName = e.target.getAttribute('name');

    setUserInfo({
      ...userInfo,
      [fieldName]: e.target.value,
    });
  };

  const isFormValid = userInfo.usuario.length === 0 || userInfo.email.length === 0;
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <form onSubmit={handleSubmit}>
      <Text variant="title" tag="h1" color="tertiary.main">
        Pronto para saber da vida dos outros?
      </Text>

      <Text variant="paragraph1" tag="p" color="tertiary.light" marginBottom="32px">
        Você está a um passo de saber tudo que está rolando no bairro, complete seu cadastro agora!
      </Text>
      <div>
        <TextField
          placeholder="Email"
          name="email"
          value={userInfo.email}
          onChange={handleChange}
        />
      </div>
      <div>
        <TextField
          placeholder="Usuario"
          name="usuario"
          value={userInfo.usuario}
          onChange={handleChange}
        />
      </div>
      <Button
        variant="primary.main"
        type="submit"
        disabled={isFormValid}
        fullWidth
      >
        Cadastrar
      </Button>
    </form>
  );
};
export default FormContent;
