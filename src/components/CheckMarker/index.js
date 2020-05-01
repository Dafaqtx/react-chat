import React from 'react'
import PropTypes from 'prop-types'
import readedIcon from 'assets/img/readedIcon.svg'
import checkIcon from 'assets/img/checkIcon.svg'

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
