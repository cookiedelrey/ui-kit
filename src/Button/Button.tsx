import * as React from "react";
import "./Button.css";
import { LargeIcon } from "../icons/LargeIcon";
import { SmallIcon } from "../icons/SmallIcon";
import { MediumIcon } from "../icons/MediumIcon";

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
  hasIcon?: boolean;
}

export const Button: React.FC<ButtonProps> = ({ children, color, size, variant, disabled, hasIcon, ...props }) => {
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
  
  
  let icon = null;
  if (size === ButtonSize.small) {
    icon = <SmallIcon/>;
  } else if (size === ButtonSize.medium) {
    icon = <MediumIcon/>;
  } else if (size === ButtonSize.large) {
    icon = <LargeIcon />
    ;
  }
  
  if(!hasIcon){
    icon = null
  }
  if (!children && icon){
    rootClasses.push('only-icon')
    if(size === ButtonSize.large){
      rootClasses.push('only-icon-large')
    }
    if(size === ButtonSize.medium){
      rootClasses.push('only-icon-medium')
    }
    if(size === ButtonSize.small){
      rootClasses.push('only-icon-small')
    }
  }

  if(children && icon){
    rootClasses.push('icon-right')
    if(size === ButtonSize.large){
      rootClasses.push('icon-right-large')
    }
    if(size === ButtonSize.medium){
      rootClasses.push('icon-right-medium')
    }
    if(size === ButtonSize.small){
      rootClasses.push('icon-right-small')
    }
  }

  if(variant === 'skeleton'){
    if(hasIcon && size === ButtonSize.large){
     return <button disabled={disabled} {...props} className={rootClasses.join(' ')} style={{}}>
      {children ? <span className="skeleton-btn-inner-large-with-icon"></span> : null}
      <span className="icon-skeleton-large"></span>
      </button>
    }
    if(hasIcon && size === ButtonSize.medium){
     return <button disabled={disabled} {...props} className={rootClasses.join(' ')} style={{}}>
      {children ? <span className="skeleton-btn-inner-medium-with-icon"></span> : null}
      <span className="icon-skeleton-medium"></span>
      </button>
    }
    if(hasIcon && size === ButtonSize.small){
      return <button disabled={disabled} {...props} className={rootClasses.join(' ')} style={{}}>
      {children ? <span className="skeleton-btn-inner-small-with-icon"></span> : null}
       <span className="icon-skeleton-small"></span>
       </button>
     }

     if(!hasIcon && size === ButtonSize.large){
      return <button disabled={disabled} {...props} className={rootClasses.join(' ')} style={{}}>
      <span className="skeleton-btn-inner-large"></span>
      </button>
     }

     if(!hasIcon && size === ButtonSize.medium){
      return <button disabled={disabled} {...props} className={rootClasses.join(' ')} style={{}}>
      <span className="skeleton-btn-inner-medium"></span>
      </button>
     }
     if(!hasIcon && size === ButtonSize.small){
      return <button disabled={disabled} {...props} className={rootClasses.join(' ')} style={{}}>
      <span className="skeleton-btn-inner-small"></span>
      </button>
     }
  }

  return (
    <button disabled={disabled} {...props} className={rootClasses.join(' ')} style={{}}>
    {children && <span>{children}</span>}
    {icon && (<span>{icon}</span>)}
    </button>
  );
};

export default Button;
