import { withFormik } from 'formik'
import LoginForm from '../components/LoginForm'

export default withFormik({
  validate: (values) => {
    let errors = {}

    if (!values.name) {
      errors.name = 'Введите имя'
    }

    if (!values.password) {
      errors.password = 'Введите пароль'
    }

    return errors
  },

  handleSubmit: (values, { setSubmitting }) => {
    setTimeout(() => {
      alert(JSON.stringify(values, null, 2))
      setSubmitting(false)
    }, 1000)
  },

  displayName: 'LoginForm',
})(LoginForm)
