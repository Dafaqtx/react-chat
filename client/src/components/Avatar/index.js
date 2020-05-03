import React from 'react';
import PropTypes from 'prop-types';

import './Avatar.scss';

const Avatar = ({ src, user }) => {
  const firstNameChar = user.fullName.slice(0, 1);

  const getRandomColor = () => {
    const letters = '0123456789ABCDEF';
    let color = '';

    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return `#${color}`;
  };

  return (
    <div className="Avatar">
      {src ? (
        <img src={src} alt="Avatar" />
      ) : (
        <div className="Avatar__empty" style={{ background: getRandomColor() }}>
          {firstNameChar}
        </div>
      )}
    </div>
  );
};

Avatar.propTypes = {
  src: PropTypes.string,
};

export default Avatar;
