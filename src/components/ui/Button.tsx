import React from 'react';
import { LucideIcon } from 'lucide-react';

interface ButtonProps {
  children: React.ReactNode;
  variant?: 'default' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  onClick?: () => void;
  iconName?: string;
  iconPosition?: 'left' | 'right';
  className?: string;
  disabled?: boolean;
}

const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'default',
  size = 'md',
  onClick,
  iconName,
  iconPosition = 'left',
  className = '',
  disabled = false
}) => {
  const baseClasses = 'inline-flex items-center justify-center font-medium transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed';
  
  const variantClasses = {
    default: 'bg-gold text-black hover:bg-gold-light shadow-lg hover:shadow-xl',
    outline: 'border-2 border-current bg-transparent hover:bg-current hover:text-black'
  };
  
  const sizeClasses = {
    sm: 'px-4 py-2 text-sm rounded-md',
    md: 'px-6 py-3 text-base rounded-lg',
    lg: 'px-8 py-4 text-lg rounded-lg'
  };

  const classes = `${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${className}`;

  return (
    <button
      className={classes}
      onClick={onClick}
      disabled={disabled}
    >
      {iconName && iconPosition === 'left' && (
        <span className="mr-2">
          {/* Icon placeholder - you can replace with actual icon component */}
          <div className="w-5 h-5 bg-current rounded-full opacity-80"></div>
        </span>
      )}
      {children}
      {iconName && iconPosition === 'right' && (
        <span className="ml-2">
          {/* Icon placeholder - you can replace with actual icon component */}
          <div className="w-5 h-5 bg-current rounded-full opacity-80"></div>
        </span>
      )}
    </button>
  );
};

export default Button;
