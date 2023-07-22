import { useDispatch } from 'react-redux';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as yup from 'yup';
import Button from '@mui/material/Button';

import { register } from 'redux/auth/authOperations';

let schema = yup.object().shape({
  name: yup.string().required(),
  email: yup.string().email().required(),
  password: yup.string().required(),
});

const initialValues = {
  name: '',
  email: '',
  password: '',
};

export default function RegisterForm() {
  const dispatch = useDispatch();

  const handleSubmit = (values, { resetForm }) => {
    dispatch(register(values));
    resetForm();
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={schema}
    >
      <Form>
        <label>
          UserName
          <Field name="name" type="text" required />
          <ErrorMessage name="name" component="div" />
        </label>

        <label>
          Email
          <Field name="email" type="email" required />
          <ErrorMessage name="email" component="div" />
        </label>

        <label>
          Password
          <Field name="password" type="password" required />
          <ErrorMessage name="password" component="div" />
        </label>

        <Button type="submit">Register</Button>
      </Form>
    </Formik>
  );
}
