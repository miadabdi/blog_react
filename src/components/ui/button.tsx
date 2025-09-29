import type { ButtonHTMLAttributes } from 'react';
import { forwardRef } from 'react';
import './button.css';

export type ButtonVariant = 'default' | 'ghost' | 'outline';
export type ButtonSize = 'sm' | 'md' | 'lg';

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: ButtonVariant;
  size?: ButtonSize;
};

const variantClassMap: Record<ButtonVariant, string> = {
  default: 'app-button--default',
  ghost: 'app-button--ghost',
  outline: 'app-button--outline',
};

const sizeClassMap: Record<ButtonSize, string> = {
  sm: 'app-button--sm',
  md: 'app-button--md',
  lg: 'app-button--lg',
};

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ variant = 'default', size = 'md', className = '', type = 'button', ...rest }, ref) => {
    const classes = [
      'app-button',
      variantClassMap[variant] ?? variantClassMap.default,
      sizeClassMap[size] ?? sizeClassMap.md,
      className,
    ]
      .filter(Boolean)
      .join(' ');

    return <button ref={ref} type={type} className={classes} {...rest} />;
  },
);

Button.displayName = 'Button';

export default Button;
