import React, { useState } from 'react';
import { Button } from '../../commons/Button';
import TextField from '../../forms/TextField';
import Text from '../../foundation/Text';

const FormContent = () => {
  const [userInfo, setUserInfo] = useState({
    usuario: '',
    nome: '',
  });

  const handleChange = (e) => {
    const fieldName = e.target.getAttribute('name');

    setUserInfo({
      ...userInfo,
      [fieldName]: e.target.value,
    });
  };

  const isFormValid = userInfo.usuario.length === 0 || userInfo.nome.length === 0;
  const handleSubmit = (e) => {
    const userDTO = {
      username: userInfo.usuario,
      name: userInfo.nome,
    };
    e.preventDefault();
    fetch('https://instalura-api.vercel.app/api/users', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(userDTO),
    })
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
        throw new Error('Nao foi possivel cadastrar o usuario agora ');
      })
      .then((respostaConvertidaEmObjeto) => {
        console.log(respostaConvertidaEmObjeto);
      })
      .catch((error) => {
        console.error(error);
      });
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
          name="nome"
          value={userInfo.nome}
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
