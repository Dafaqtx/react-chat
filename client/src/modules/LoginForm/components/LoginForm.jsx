import React from 'react';
import { Link } from 'react-router-dom';
import { Form } from 'antd';
import { validateField } from 'utils/helpers';

import { Block, Button, Input } from 'components';

const LoginForm = ({
  values,
  touched,
  errors,
  isSubmitting,
  handleChange,
  handleBlur,
  handleSubmit,
}) => {
  return (
    <div>
      <div className="Auth__header">
        <h2>Войти в аккаунт</h2>
        <p>Пожалуйста, войдите в аккаунт </p>
      </div>
      <Block>
        <Form onFinish={handleSubmit}>
          <Form.Item
            name="email"
            validateStatus={validateField('email', touched, errors)}
            help={touched.email ? errors.email : null}
            hasFeedback>
            <Input
              placeholder="E-mail"
              size="large"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.email}
            />
          </Form.Item>
          <Form.Item
            name="password"
            validateStatus={validateField('password', touched, errors)}
            help={touched.password ? errors.password : null}
            hasFeedback>
            <Input
              type="password"
              placeholder="Пароль"
              size="large"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.password}
            />
          </Form.Item>

          <Form.Item>
            <Button
              type="primary"
              htmlType="submit"
              size="large"
              disabled={isSubmitting}>
              Войти
            </Button>
          </Form.Item>

          <Link className="Auth__registration-link" to="/registration">
            Зарегистрироваться
          </Link>
        </Form>
      </Block>
    </div>
  );
};

LoginForm.propTypes = {};

export default LoginForm;
