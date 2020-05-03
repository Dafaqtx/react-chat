const isEmail = value => /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value);
const isStrongPassword = value =>
  /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{6,}$/.test(value);
const isPassConfirmed = (password, confirmation) => password === confirmation;

export default ({ isAuth, values, errors }) => {
  const rules = {
    email: value => {
      if (!value) {
        errors.email = 'Введите E-mail ';
      } else if (!isEmail(value)) {
        errors.email = 'Неверный почтовый адрес';
      }
    },
    name: value => {
      if (!value) {
        errors.name = 'Введите имя';
      }
    },
    password: value => {
      if (!value) {
        errors.password = 'Введите пароль';
      } else if (!isStrongPassword(value)) {
        errors.password = isAuth
          ? 'Неверный пароль'
          : 'Пароль должен быть сложным';
      }
    },
    confirmation: value => {
      if (!value) {
        errors.confirmation = 'Повторите пароль';
      } else if (!isPassConfirmed(values.password, value)) {
        errors.confirmation = 'Пароли должны совпадать';
      }
    },
  };

  Object.keys(values).forEach(key => rules[key] && rules[key](values[key]));
};
