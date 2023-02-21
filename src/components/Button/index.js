import styles from './Button.module.scss';
import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';

const cx = classNames.bind(styles);
function Button({
  to,
  href,
  onClick,
  rounded = false,
  primary = false,
  outline = false,
  text = false,
  disabled = false,
  small = false,
  medium = false,
  large = false,
  className,
  children,
  leftIcon,
  rightIcon,

  ...passProps
}) {
  let Comp = 'button';

  const classes = cx('wrapper', {
    primary,
    outline,
    text,
    disabled,
    rounded,
    [className]: className,
    small,
    medium,
    large,
  });
  const props = { onClick, ...passProps };

  // Remove event listener when btn is disabled
  if (disabled) {
    Object.keys(props).forEach((propsKey) => {
      if (propsKey.startsWith('on') && typeof props[propsKey] === 'function') {
        delete props[propsKey];
      }
    });
  }

  if (to) {
    props.to = to;
    Comp = Link;
  } else if (href) {
    props.href = href;
    Comp = 'a';
  }
  return (
    <Comp className={classes} {...props}>
      {leftIcon && <span className={cx('icon')}>{leftIcon}</span>}
      <span className={cx('title')}>{children}</span>
      {rightIcon && <span className={cx('icon')}>{rightIcon}</span>}
    </Comp>
  );
}

export default Button;
