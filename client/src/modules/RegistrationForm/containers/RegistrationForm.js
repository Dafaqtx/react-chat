import store from 'redux/store';
import { withFormik } from 'formik';

import RegistrationForm from '../components/RegistrationForm';
import validateForm from 'utils/validation';
import { showNotification } from 'utils/helpers';

import { userActions } from 'redux/actions';

export default withFormik({
  enableReinitialize: true,
  mapPropsToValues: () => ({
    email: '',
    fullName: '',
    password: '',
    confirmation: '',
  }),
  validate: values => {
    const errors = {};
    validateForm({ isAuth: false, values, errors });
    return errors;
  },

  handleSubmit: (values, { props, setSubmitting, setFieldError }) => {
    store
      .dispatch(userActions.fetchUserRegister(values))
      .then(() => {
        // props.history.push('/registration/verify');
        setSubmitting(false);
      })
      .catch(({ response: { data } }) => {
        const errorTitle = data.message;
        const errorText = Array.from(data.errors)
          .map(error => error.msg)
          .join(', \n');

        console.log(errorText);

        for (const error of Array.from(data.errors)) {
          setFieldError(error.param, error.msg);
        }

        showNotification({
          title: errorTitle,
          text: errorText,
          type: 'error',
          duration: 5000,
        });
        setSubmitting(false);
      });
  },

  displayName: 'RegistrationForm',
})(RegistrationForm);
