import React from 'react'
import { Route } from 'react-router-dom'

import { LoginForm, RegistrationForm } from 'modules'

import './Auth.scss'

const Auth = () => {
  return (
    <section className="Auth">
      <div className="Auth__content">
        <Route exact path={['/', '/login']} component={LoginForm} />
        <Route exact path="/registration" component={RegistrationForm} />
      </div>
    </section>
  )
}

export default Auth
