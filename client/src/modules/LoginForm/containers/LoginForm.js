import store from 'redux/store';
import { withFormik } from 'formik';

import LoginForm from '../components/LoginForm';

import validateForm from 'utils/validation';
import { showNotification } from 'utils/helpers';

import { userActions } from 'redux/actions';

export default withFormik({
  enableReinitialize: true,
  mapPropsToValues: () => ({
    email: '',
    password: '',
  }),
  validate: values => {
    const errors = {};

    validateForm({ isAuth: true, values, errors });

    return errors;
  },

  handleSubmit: async (values, { setSubmitting }) => {
    try {
      const { data } = await store.dispatch(userActions.fetchUserLogin(values));
      const { token } = await data;

      window.axios.defaults.headers.common['token'] = token;
      window.localStorage['token'] = token;

      // await store.dispatch(userActions.fetchUserData());
      await store.dispatch(userActions.setIsAuth(true));

      setSubmitting(false);
    } catch (error) {
      showNotification({
        title: 'Ошибка при авторизации',
        text: error.response.data.message,
        type: 'error',
      });
      setSubmitting(false);
    }
  },

  displayName: 'LoginForm',
})(LoginForm);
