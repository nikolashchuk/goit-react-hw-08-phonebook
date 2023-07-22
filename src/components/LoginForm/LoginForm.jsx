import { useDispatch } from 'react-redux';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as yup from 'yup';
import Button from '@mui/material/Button';

import { logIn } from 'redux/auth/authOperations';

let schema = yup.object().shape({
  email: yup.string().email().required(),
  password: yup.string().required(),
});

const initialValues = {
  email: '',
  password: '',
};

export default function LoginForm() {
  const dispatch = useDispatch();

  const handleSubmit = (values, { resetForm }) => {
    dispatch(logIn(values));
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
          Email
          <Field name="email" type="email" required />
          <ErrorMessage name="email" component="div" />
        </label>

        <label>
          Password
          <Field name="password" type="password" required />
          <ErrorMessage name="password" component="div" />
        </label>

        <Button type="submit">Login</Button>
      </Form>
    </Formik>
  );
}
