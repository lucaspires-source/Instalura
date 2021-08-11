import React, { useState } from 'react';
import { Button } from '../../commons/Button';

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
      <div>
        <input
          placeholder="Email"
          name="email"
          value={userInfo.email}
          onChange={handleChange}
        />
      </div>
      <div>
        <input
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
