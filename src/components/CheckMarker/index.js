import React from 'react'
import PropTypes from 'prop-types'
import { readedIcon, checkIcon } from 'assets/icons'

const CheckMarker = ({ checked }) => {
  return (
    <div className="CheckMarker">
      <img src={checked ? readedIcon : checkIcon} alt="Статус" />
    </div>
  )
}

CheckMarker.propTypes = {
  checked: PropTypes.bool,
}

CheckMarker.defaultProps = {
  checked: false,
}

export default CheckMarker
