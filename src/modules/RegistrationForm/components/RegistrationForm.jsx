import React from 'react'
import { Link } from 'react-router-dom'
import { Form } from 'antd'
import { ExclamationCircleTwoTone } from '@ant-design/icons'
import { Block, Button, Input } from 'components'

const RegistrationForm = () => {
  const onFinish = (values) => {
    console.log(values)
  }

  const success = false

  return (
    <div className="RegistrationForm">
      <div className="Auth__header">
        <h2>Регистрация</h2>
        <p>Для входа в чат, вам необходимо зарегистрироваться</p>
      </div>
      <Block>
        {!success ? (
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
              <Input placeholder="E-mail" size="large" />
            </Form.Item>
            <Form.Item
              name="name"
              rules={[
                {
                  required: true,
                  message: 'Введите ваше имя',
                },
              ]}>
              <Input placeholder="Ваше имя" size="large" />
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
              <Input placeholder="Пароль" size="large" />
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
              <Input placeholder="Повторить пароль" size="large" />
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
        ) : (
          <div className="Auth__success">
            <div>
              <ExclamationCircleTwoTone />
            </div>
            <h2>Подтвердите свой аккаунт</h2>
            <p>На Вашу почту было отправлено письмо со ссылкой для подтверждения аккаунта.</p>
          </div>
        )}
      </Block>
    </div>
  )
}

RegistrationForm.propTypes = {}

export default RegistrationForm
