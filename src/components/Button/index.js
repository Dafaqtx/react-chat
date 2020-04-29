import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

import { Button as BaseButton } from 'antd'

import './Button.scss'

const Button = (props) => (
  <BaseButton
    {...props}
    className={classNames('Button', props.className, {
      'Button--large': props.size === 'large',
    })}
  />
)

Button.propTypes = {
  className: PropTypes.string,
}

export default Button
