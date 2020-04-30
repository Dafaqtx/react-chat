import { withFormik } from 'formik'
import RegistrationForm from '../components/RegistrationForm'

export default withFormik({
  validate: (values) => {
    let errors = {}

    if (!values.email) {
      errors.email = 'Введите E-mail '
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
      errors.email = 'Неверный почтовый адрес'
    }

    if (!values.name) {
      errors.name = 'Введите имя'
    }

    if (!values.password) {
      errors.password = 'Введите пароль'
    } else if (!/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{6,}$/.test(values.password)) {
      errors.password = 'Пароль должен быть сложным'
    }

    if (!values.confirmation) {
      errors.confirmation = 'Повторите пароль'
    } else if (values.password !== values.confirmation) {
      errors.confirmation = 'Пароли должны совпадать'
    }

    return errors
  },

  handleSubmit: (values, { setSubmitting }) => {
    setTimeout(() => {
      alert(JSON.stringify(values, null, 2))
      setSubmitting(false)
    }, 1000)
  },

  displayName: 'RegistrationForm',
})(RegistrationForm)
