import React from 'react'
import { Link } from 'react-router-dom'
import { Form } from 'antd'
import { UserOutlined, LockOutlined, MailOutlined } from '@ant-design/icons'
import { Block, Button, Input } from 'components'

const RegistrationForm = () => {
  const onFinish = (values) => {
    console.log(values)
  }

  return (
    <div>
      <div className="Auth__header">
        <h2>Регистрация</h2>
        <p>Для входа в чат, вам необходимо зарегистрироваться</p>
      </div>
      <Block>
        <Form name="normal_login" className="login-form" onFinish={onFinish}>
          <Form.Item
            name="email"
            rules={[
              {
                required: true,
                message: 'Введите почту',
              },
            ]}
            type="email">
            <Input prefix={<MailOutlined className="site-form-item-icon" />} placeholder="E-mail" size="large" />
          </Form.Item>
          <Form.Item
            name="name"
            rules={[
              {
                required: true,
                message: 'Введите ваше имя',
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
            ]}
            type="password">
            <Input prefix={<LockOutlined className="site-form-item-icon" />} placeholder="Пароль" size="large" />
          </Form.Item>
          <Form.Item
            name="password"
            rules={[
              {
                required: true,
                message: 'Введите пароль',
              },
            ]}
            type="password">
            <Input
              prefix={<LockOutlined className="site-form-item-icon" />}
              placeholder="Повторить пароль"
              size="large"
            />
          </Form.Item>

          <Form.Item>
            <Button type="primary" htmlType="submit" size="large">
              Зарегистрироваться
            </Button>
          </Form.Item>

          <Link className="Auth__registration-link" to="/login">
            Войти в аккаунт
          </Link>
        </Form>
      </Block>
    </div>
  )
}

RegistrationForm.propTypes = {}

export default RegistrationForm
