// src/components/ui/Button.tsx
import { forwardRef } from 'react';
import type { ReactNode, ButtonHTMLAttributes } from 'react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  children: ReactNode;
  as?: 'button' | 'a';
  href?: string;
  target?: string;
  rel?: string;
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ variant = 'primary', size = 'md', children, className = '', as: Tag = 'button', href, target, rel, ...props }, ref) => {
    const base = 'inline-flex items-center gap-2 font-medium rounded-full transition-all duration-200 cursor-pointer select-none';

    const variants = {
      primary: 'bg-accent-blue text-white hover:bg-blue-500 active:scale-[0.98]',
      outline: 'border border-border-medium text-text-primary hover:border-accent-blue hover:text-accent-blue active:scale-[0.98]',
      ghost: 'text-text-secondary hover:text-text-primary active:scale-[0.98]',
    };

    const sizes = {
      sm: 'px-4 py-2 text-sm',
      md: 'px-5 py-2.5 text-sm',
      lg: 'px-7 py-3.5 text-base',
    };

    const classes = `${base} ${variants[variant]} ${sizes[size]} ${className}`;

    if (Tag === 'a' || href) {
      return (
        <a href={href} target={target} rel={rel} className={classes}>
          {children}
        </a>
      );
    }

    return (
      <button ref={ref} className={classes} {...props}>
        {children}
      </button>
    );
  }
);

Button.displayName = 'Button';

