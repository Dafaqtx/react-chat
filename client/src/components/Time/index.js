import React from 'react';
import PropTypes from 'prop-types';
import { formatDistance, format, isToday } from 'date-fns/';
import ruLocale from 'date-fns/locale/ru';

const Time = ({ value, addSuffix, includeSeconds, isFormatted }) => {
  const parsetDate = Date.parse(value);

  const getFormattedDate = date => {
    if (isToday(date)) {
      return format(date, 'HH:mm');
    } else {
      return format(date, 'd.MM.Y');
    }
  };
  const date = formatDistance(parsetDate, new Date(), {
    addSuffix,
    locale: ruLocale,
    includeSeconds,
  });

  return (
    <span className="Time">{isFormatted ? getFormattedDate(parsetDate) : date}</span>
  );
};

Time.propTypes = {
  value: PropTypes.oneOfType([PropTypes.instanceOf(Date), PropTypes.number, PropTypes.string])
    .isRequired,
  addSuffix: PropTypes.bool,
  includeSeconds: PropTypes.bool,
  isFormatted: PropTypes.bool,
};

Time.defaultProps = {
  addSuffix: true,
  includeSeconds: true,
  isFormatted: false,
};

export default Time;
