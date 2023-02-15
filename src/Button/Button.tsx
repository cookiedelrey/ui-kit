import React, { FC } from "react";
import "./Button.css";

export enum ButtonSize {
  large = 'large',
  small = 'small',
  medium = 'medium',
}

export enum ButtonType {
  primary = 'primary',
  primaryInverse = 'primaryInverse',
  secondary = 'secondary',
  tertiary = 'tertiary',
  ghost = 'ghost',
  warning = 'warning',
  skeleton = 'skeleton',
}

export interface ButtonProps {
  color: string;
  children: React.ReactNode;
  size: ButtonSize;
  variant: ButtonType;
  disabled: boolean;
}

export const Button: FC<ButtonProps> = ({ children, color, size, variant, disabled, ...props }) => {
  const rootClasses = ["button"];
  
  
  if (size === ButtonSize.small) {
    rootClasses.push('small-btn')
  }
  if (size === ButtonSize.medium) {
    rootClasses.push('medium-btn')
  }
  if (size === ButtonSize.large) {
    rootClasses.push('large-btn')
  }
  if (variant === ButtonType.primary) {
    rootClasses.push('primary')
    if (disabled) {
      rootClasses.push('primary-disabled')
    }
  }
  if (variant === ButtonType.primaryInverse) {
    rootClasses.push('primaryInverse')
    if (disabled) {
      rootClasses.push('primaryInverse-disabled')
    }
  }
  if (variant === ButtonType.secondary) {
    rootClasses.push('secondary')
    if (disabled) {
      rootClasses.push('secondary-disabled')
    }
  }
  if (variant === ButtonType.tertiary) {
    rootClasses.push('tertiary')
    if (disabled) {
      rootClasses.push('tertiary-disabled')
    }
  }
  if (variant === ButtonType.ghost) {
    rootClasses.push('ghost')
    if (disabled) {
      rootClasses.push('ghost-disabled')
    }
  }
  if (variant === ButtonType.warning) {
    rootClasses.push('warning')
    if (disabled) {
      rootClasses.push('warning-disabled')
    }
  }
  if (variant === ButtonType.skeleton) {
    rootClasses.push('skeleton')
    if (disabled) {
      rootClasses.push('skeleton-disabled')
    }
  }
  return (
    <button disabled={disabled} {...props} className={rootClasses.join(' ')} style={{}}>
      {children}
    </button>
  );
};

export default Button;
