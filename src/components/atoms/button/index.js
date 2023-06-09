import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import './_button.scss';

const Button = ({ children, variant, size, className, ...rest }) => {
  const classes = classNames(
    'btn',
    `btn-${variant}`,
    `btn-${size}`,
    className
  );
  return (
    <button className={classes} {...rest}>
      {children}
    </button>
  );
};

Button.propTypes = {
  children: PropTypes.node.isRequired,
  variant: PropTypes.oneOf(['primary', 'secondary', 'success', 'danger', 'warning', 'info', 'light', 'dark','custom']),
  size: PropTypes.oneOf(['sm', 'md', 'lg']),
  className: PropTypes.string,
};

Button.defaultProps = {
  variant: 'primary',
  size: 'md',
};

export default Button;
