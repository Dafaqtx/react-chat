import { useHistory } from 'react-router-dom';
import store from 'redux/store';
import { withFormik } from 'formik';
import get from 'lodash/get';

import RegistrationForm from '../components/RegistrationForm';
import validateForm from 'utils/validation';
import { showNotification } from 'utils/helpers';

import { userActions } from 'redux/actions';

export default withFormik({
  enableReinitialize: true,
  mapPropsToValues: () => ({
    email: '',
    name: '',
    password: '',
    confirmation: '',
  }),
  validate: values => {
    const errors = {};
    // validateForm({ isAuth: false, values, errors });
    return errors;
  },

  handleSubmit: (values, { setSubmitting }) => {
    store
      .dispatch(userActions.fetchUserRegister(values))
      .then(() => {
        useHistory().push('/signup/verify');
        setSubmitting(false);
      })
      .catch(err => {
        console.log('err', err);
        // if (get(err, 'response.data.message.errmsg', '').indexOf('dup') >= 0) {
        //   showNotification({
        //     title: 'Ошибка',
        //     text: 'Аккаунт с такой почтой уже создан.',
        //     type: 'error',
        //     duration: 5000,
        //   });
        // } else {
        //   showNotification({
        //     title: 'Ошибка',
        //     text: 'Возникла серверная ошибка при регистрации. Повторите позже.',
        //     type: 'error',
        //     duration: 5000,
        //   });
        // }
        setSubmitting(false);
      });
  },

  displayName: 'RegistrationForm',
})(RegistrationForm);
