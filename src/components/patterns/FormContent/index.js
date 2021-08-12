import React, { useState } from 'react';
import { Lottie } from '@crello/react-lottie';
import { Button } from '../../commons/Button';
import TextField from '../../forms/TextField';
import Text from '../../foundation/Text';
import errorAnimation from './animations/error.json';
import successAnimation from './animations/sucess.json';
import { Box } from '../../foundation/layout/Box';

const formStates = {
  DEFAULT: 'DEFAULT',
  LOADING: 'LOADING',
  DONE: 'DONE',
  ERROR: 'ERROR',
};

const FormContent = () => {
  const [isFormSubmited, setIsFormSubmited] = useState(false);
  const [submissionStatus, setSubmissionStatus] = useState(formStates.DEFAULT);
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
    setIsFormSubmited(true);
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
      .then((resObj) => {
        console.log(resObj);
        setSubmissionStatus(formStates.DONE);
      })
      .catch((error) => {
        setSubmissionStatus(formStates.ERROR);
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
      {
        isFormSubmited && submissionStatus === formStates.DONE && (
          <Box display="flex" justifyContent="center">
            <Lottie
              width="150px"
              height="150px"
              config={{ animationData: successAnimation, loop: false, autoplay: true }}
            />
            {/* https://lottiefiles.com/43920-success-alert-icon */}
          </Box>
        )
      }
      {
        isFormSubmited && submissionStatus === formStates.ERROR && (
          <Box display="flex" justifyContent="center">
            <Lottie
              width="150px"
              height="150px"
              config={{ animationData: errorAnimation, loop: false, autoplay: true }}
            />
            {/* https://lottiefiles.com/13865-sign-for-error-flat-style */}
          </Box>
        )
      }

    </form>
  );
};
export default FormContent;
