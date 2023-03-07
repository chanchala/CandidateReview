import classNames from 'classnames';
import React from 'react';
import styles from './Button.module.scss';

interface ButtonProperties {
  onClick: (...args: any[]) => void;
  children: React.ReactElement | string;
  type?: 'primary' | 'secondary' | 'info';
}
const Button: React.FC<ButtonProperties> = (props: ButtonProperties) => {
  const { onClick, children: title, type } = props;
  const buttonClass = classNames(styles.btn, {
    [styles.primaryBtn]: type === 'primary',
    [styles.secondaryBtn]: type === 'secondary',
    [styles.infoBtn]: type === 'info',
  });
  return (
    <button className={buttonClass} onClick={onClick}>
      {title}
    </button>
  );
};

export default Button;
