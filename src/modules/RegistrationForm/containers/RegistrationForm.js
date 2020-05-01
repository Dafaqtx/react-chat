import RegistrationForm from '../components/RegistrationForm'
import validateForm from 'utils/validation'
import { withFormik } from 'formik'

export default withFormik({
  enableReinitialize: true,
  mapPropsToValues: () => ({
    email: '',
    name: '',
    password: '',
    confirmation: '',
  }),
  validate: values => {
    const errors = {}

    validateForm({ isAuth: false, values, errors })

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
