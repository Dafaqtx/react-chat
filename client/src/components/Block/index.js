import React from 'react';
import classNames from 'classnames';

import './Block.scss';

const Block = ({ children, className }) => <div className={classNames('Block', className)}>{children}</div>;

export default Block;
