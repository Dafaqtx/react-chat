import React from 'react'
import { Route } from 'react-router-dom'

import { LoginForm } from 'modules'

import './Auth.scss'

const Auth = () => {
  return (
    <section className="Auth">
      <div className="Auth__content">
        <Route exact path="/" component={LoginForm} />
        <Route exact path="/registration" render={() => 'Registration'} />
      </div>
    </section>
  )
}

export default Auth
