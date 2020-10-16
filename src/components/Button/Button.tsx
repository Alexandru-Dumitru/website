import React, { ReactElement } from 'react';
import './Button.css';
import { Link } from 'react-router-dom';

interface Props {
  children: any;
  type?: any;
  onClick?: any;
  buttonStyle?: any;
  buttonSize?: any;
  className?:any;
}
const STYLES = ['btn--primary', 'btn--outline'];
const SIZES = ['btn--medium', 'btn--large'];

function Button({
  children,
  type,
  onClick,
  buttonStyle,
  buttonSize,
  className,
}: Props): ReactElement {
  const checkButtonStyle = STYLES.includes(buttonStyle)
    ? buttonStyle
    : STYLES[0];

  const checkButtonSize = SIZES.includes(buttonSize) ? buttonSize : SIZES[0];
  return (
    <Link to="/sign-up" className="btn-mobile">
      <button
        className={`btn ${checkButtonStyle} ${checkButtonSize}`}
        onClick={onClick}
        type={type}
      >
        {children}
      </button>
    </Link>
  );
}

export default Button;
