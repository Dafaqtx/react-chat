import React from 'react'
import { Link } from 'react-router-dom'
import { Form } from 'antd'

import { Block, Button, Input } from 'components'

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
            name="name"
            validateStatus={!touched.name ? '' : errors.name ? 'error' : 'success'}
            help={touched.name ? errors.name : null}
            hasFeedback
           >
            <Input placeholder="Имя" size="large"  onChange={handleChange}
                onBlur={handleBlur}
                value={values.name}/>
          </Form.Item>
          <Form.Item
            name="password"
            validateStatus={!touched.password ? '' : errors.name ? 'error' : 'success'}
            help={touched.password ? errors.password : null}
            hasFeedback
            >
            <Input type="password" placeholder="Пароль" size="large" onChange={handleChange}
                onBlur={handleBlur}
                value={values.password} />
          </Form.Item>

          <Form.Item>
            <Button type="primary" htmlType="submit" size="large" disabled={isSubmitting}>
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
