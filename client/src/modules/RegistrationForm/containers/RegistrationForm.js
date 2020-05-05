import { compose } from 'redux';
import { connect } from 'react-redux';
import { withFormik } from 'formik';

import RegistrationForm from '../components/RegistrationForm';
import validateForm from 'utils/validation';
import { showNotification } from 'utils/helpers';

import { userActions } from 'redux/actions';

export default compose(
  connect(null, () => ({
    setUserRegistration: values =>
      userActions.setUserRegistration.request(values),
  })),
  withFormik({
    enableReinitialize: true,
    mapPropsToValues: () => ({
      email: '',
      fullName: '',
      password: '',
      confirmation: '',
    }),
    validate: values => {
      const errors = {};
      // validateForm({ isAuth: false, values, errors });
      return errors;
    },

    handleSubmit: async (values, { props, setSubmitting, setFieldError }) => {
      try {
        await props.setUserRegistration(values);
        // props.history.push('/registration/verify');
        setSubmitting(false);
      } catch ({ data }) {
        const errorTitle = data.message;
        const errorText = Array.from(data.errors)
          .map(error => error.msg)
          .join(', \n');

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
      }
    },

    displayName: 'RegistrationForm',
  })
)(RegistrationForm);
