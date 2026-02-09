import { forwardRef, type ButtonHTMLAttributes, type AnchorHTMLAttributes } from 'react';
import { cn } from '@/lib/utils';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary';
  size?: 'sm' | 'md' | 'lg';
  as?: 'button' | 'a';
  href?: string;
}

const Button = forwardRef<HTMLButtonElement & HTMLAnchorElement, ButtonProps>(
  ({ className, variant = 'primary', size = 'md', as = 'button', href, children, ...props }, ref) => {
    const baseStyles = cn(
      // Base styles
      'inline-flex items-center justify-center gap-2 font-medium rounded-xl transition-all',
      'focus:outline-none focus:ring-2 focus:ring-offset-2',
      'disabled:opacity-70 disabled:cursor-not-allowed',

      // Variants
      variant === 'primary' && [
        'text-white',
        'bg-gradient-to-r from-brand-pink to-brand-peach',
        'border-b-6 border-brand-pink-dark',
        'hover:translate-y-[-2px]',
        'hover:shadow-lg hover:shadow-brand-pink/40',
      ],
      variant === 'secondary' && [
        'text-white',
        'bg-transparent',
        'border-2 border-brand-pink',
        'hover:bg-gradient-to-r hover:from-brand-pink/20 hover:to-brand-peach/20',
        'hover:translate-y-[-2px]',
      ],

      // Sizes
      size === 'sm' && 'px-4 py-2 m3-label-small',
      size === 'md' && 'px-6 py-3 text-base',
      size === 'lg' && 'px-8 py-4 m3-label-large',

      className
    );

    if (as === 'a' && href) {
      return (
        <a
          ref={ref as any}
          href={href}
          className={baseStyles}
          {...(props as AnchorHTMLAttributes<HTMLAnchorElement>)}
        >
          {children}
        </a>
      );
    }

    return (
      <button
        ref={ref as any}
        className={baseStyles}
        {...props}
      >
        {children}
      </button>
    );
  }
);

Button.displayName = 'Button';

export { Button };
