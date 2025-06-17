import styles from './Button.module.css';
import type {ComponentProps} from "react";

interface IButtonProps extends ComponentProps<'button'> {
  className?: string;
}

function Button({ className = '', ...delegated } : IButtonProps) {
  return (
    <button
      {...delegated}
      className={`${styles.button} ${className}`}
    />
  );
}

export default Button;
