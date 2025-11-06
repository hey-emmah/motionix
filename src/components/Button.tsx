import React from 'react';
import { StyledButton } from './Button.styles';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'solid' | 'outline';
  size?: 'sm' | 'md' | 'lg';
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ children, variant = 'solid', size = 'md', className = '', ...props }, ref) => {
    return (
      <StyledButton ref={ref} variant={variant} size={size} className={className} {...props}>
        {children}
      </StyledButton>
    );
  }
);

Button.displayName = 'Button';
