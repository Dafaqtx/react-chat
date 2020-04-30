import React from 'react'
import { Link } from 'react-router-dom'
import { Form } from 'antd'
import { Block, Button, Input } from 'components'

const LoginForm = () => {
  const onFinish = (values) => {
    console.log(values)
  }

  return (
    <div>
      <div className="Auth__header">
        <h2>Войти в аккаунт</h2>
        <p>Пожалуйста, войдите в аккаунт </p>
      </div>
      <Block>
        <Form name="normal_login" className="login-form" onFinish={onFinish}>
          <Form.Item
            name="username"
            rules={[
              {
                required: true,
                message: 'Введите имя',
              },
            ]}>
            <Input placeholder="Имя" size="large" />
          </Form.Item>
          <Form.Item
            name="password"
            rules={[
              {
                required: true,
                message: 'Введите пароль',
              },
            ]}>
            <Input type="password" placeholder="Пароль" size="large" />
          </Form.Item>

          <Form.Item>
            <Button type="primary" htmlType="submit" size="large">
              Войти
            </Button>
          </Form.Item>

          <Link className="Auth__registration-link" to="/registration">
            Зарегистрироваться
          </Link>
        </Form>
      </Block>
    </div>
  )
}

LoginForm.propTypes = {}

export default LoginForm
