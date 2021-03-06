import React from 'react';
import { Link } from 'react-router-dom';
import { Form } from 'antd';
import { ExclamationCircleTwoTone } from '@ant-design/icons';
import { validateField } from 'utils/helpers';

import { Block, Button, Input } from 'components';

const RegistrationForm = ({
  values,
  touched,
  errors,
  isSubmitting,
  handleChange,
  handleBlur,
  handleSubmit,
}) => {
  const success = false;

  return (
    <div className="RegistrationForm">
      <div className="Auth__header">
        <h2>Регистрация</h2>
        <p>Для входа в чат, вам необходимо зарегистрироваться</p>
      </div>
      <Block>
        {!success ? (
          <Form onFinish={handleSubmit} initialValues={values}>
            <Form.Item
              name="email"
              validateStatus={validateField('email', touched, errors)}
              help={touched.email ? errors.email : null}
              hasFeedback>
              <Input
                type="email"
                placeholder="E-mail"
                size="large"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.email}
              />
            </Form.Item>
            <Form.Item
              name="fullName"
              validateStatus={validateField('fullName', touched, errors)}
              help={touched.fullName ? errors.fullName : null}
              hasFeedback>
              <Input
                type="text"
                placeholder="Ваше имя"
                size="large"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.fullName}
              />
            </Form.Item>
            <Form.Item
              name="password"
              validateStatus={validateField('password', touched, errors)}
              help={touched.password ? errors.password : null}
              hasFeedback>
              <Input
                placeholder="Пароль"
                size="large"
                type="password"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.password}
              />
            </Form.Item>
            <Form.Item
              name="confirmation"
              validateStatus={validateField('confirmation', touched, errors)}
              help={touched.confirmation ? errors.confirmation : null}
              hasFeedback>
              <Input
                placeholder="Повторить пароль"
                size="large"
                type="password"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.confirmation}
              />
            </Form.Item>
            <Form.Item>
              <Button
                type="primary"
                htmlType="submit"
                size="large"
                disabled={isSubmitting}>
                Зарегистрироваться
              </Button>
            </Form.Item>

            <Link className="Auth__registration-link" to="/login">
              Войти в аккаунт
            </Link>
          </Form>
        ) : (
          <div className="Auth__success">
            <div>
              <ExclamationCircleTwoTone />
            </div>
            <h2>Подтвердите свой аккаунт</h2>
            <p>
              На Вашу почту было отправлено письмо со ссылкой для подтверждения
              аккаунта.
            </p>
          </div>
        )}
      </Block>
    </div>
  );
};

export default RegistrationForm;
