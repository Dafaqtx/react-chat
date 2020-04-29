import React from 'react'
import { Link } from 'react-router-dom'
import { Form } from 'antd'
import { UserOutlined, LockOutlined } from '@ant-design/icons'
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
            <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Ваше имя" size="large" />
          </Form.Item>
          <Form.Item
            name="password"
            rules={[
              {
                required: true,
                message: 'Введите пароль',
              },
            ]}>
            <Input
              prefix={<LockOutlined className="site-form-item-icon" />}
              type="password"
              placeholder="Ваш пароль"
              size="large"
            />
          </Form.Item>

          <Form.Item>
            <Button type="primary" htmlType="submit" size="large">
              Войти в аккаунт
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
