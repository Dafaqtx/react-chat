import LoginForm from '../components/LoginForm';
import validateForm from 'utils/validation';
import { withFormik } from 'formik';

export default withFormik({
  enableReinitialize: true,
  mapPropsToValues: () => ({
    name: '',
    password: '',
  }),
  validate: values => {
    const errors = {};

    validateForm({ isAuth: true, values, errors });

    return errors;
  },

  handleSubmit: (values, { setSubmitting }) => {
    setTimeout(() => {
      alert(JSON.stringify(values, null, 2));
      setSubmitting(false);
    }, 1000);
  },

  displayName: 'LoginForm',
})(LoginForm);
