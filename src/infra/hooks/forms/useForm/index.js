import { useState, useEffect } from 'react';

const useForm = ({ initialValues, onSubmit }) => {
  const [values, setValues] = useState(initialValues);

  const [isFormDisabled, setIsFormDisabled] = useState(true);

  useEffect(() => {
    if (values.usuario.length > 0) {
      setIsFormDisabled(false);
    } else {
      setIsFormDisabled(true);
    }
  }, [values]);
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
    isFormDisabled,
  };
};

export default useForm;
