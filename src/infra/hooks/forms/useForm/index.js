import { useState, useEffect } from 'react';

const useForm = ({ initialValues, onSubmit, validateSchema }) => {
  const [values, setValues] = useState(initialValues);

  const [isFormDisabled, setIsFormDisabled] = useState(true);
  const [errors, setErrors] = useState({});
  const [touched, setTouchedFields] = useState({});

  async function validateValues(currentValues) {
    try {
      await validateSchema(currentValues);
      setErrors({});
      setIsFormDisabled(false);
    } catch (err) {
      const formatedErrors = err.inner.reduce((errorObjectAcc, currentError) => {
        const fieldName = currentError.path;
        const errorMessage = currentError.message;
        return {
          ...errorObjectAcc,
          [fieldName]: errorMessage,
        };
      }, {});
      setErrors(formatedErrors);
      setIsFormDisabled(true);
    }
  }
  useEffect(() => {
    validateValues();
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
    errors,
    touched,
    setIsFormDisabled,
    handleBlur(e) {
      const fieldName = e.target.getAttribute('name');

      setTouchedFields({
        ...touched,
        [fieldName]: true, // usuario: true, senha: true ...
      });
    },
  };
};

export default useForm;
