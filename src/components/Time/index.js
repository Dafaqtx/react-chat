import React from 'react'
import PropTypes from 'prop-types'
import formatDistance from 'date-fns/formatDistance'
import ruLocale from 'date-fns/locale/ru'

const Time = ({ value, addSuffix, includeSeconds }) => {
  const date = formatDistance(value, new Date(), {
    addSuffix,
    locale: ruLocale,
    includeSeconds,
  })

  return <span className="Time">{date}</span>
}

Time.propTypes = {
  value: PropTypes.number.isRequired,
  addSuffix: PropTypes.bool,
  includeSeconds: PropTypes.bool,
}

Time.defaultProps = {
  addSuffix: true,
  includeSeconds: true,
}

export default Time
