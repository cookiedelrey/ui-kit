import React, { FC } from "react";
import largeIcon from '../assets/largeIcon.svg';
import mediumIcon from '../assets/mediumIcon.svg';
import smallIcon from '../assets/smallIcon.svg';
import './OnlyIconButton.css'


enum ButtonSize {
  large = "large",
  small = "small",
  medium = "medium",
}

enum ButtonType {
  primary = "primary",
  primaryInverse = "primaryInverse",
  secondary = "secondary",
  tertiary = "tertiary",
  ghost = "ghost",
  warning = "warning",
  skeleton = "skeleton",
}

export interface ButtonProps {
  color?: string;
  size: ButtonSize;
  variant: ButtonType;
  disabled?: Boolean;
}
const OnlyIconButton: FC<ButtonProps> = ({ color, size, variant, disabled, ...props }) => {
    const rootClasses = ["iconButton"];
      if (variant === ButtonType.primary) {
        rootClasses.push('primary')
      }
      if (variant === ButtonType.primaryInverse) {
        rootClasses.push('primaryInverse')
      }
      if (variant === ButtonType.secondary) {
        rootClasses.push('secondary')
      }
      if (variant === ButtonType.tertiary) {
        rootClasses.push('tertiary')
      }
      if (variant === ButtonType.ghost) {
        rootClasses.push('ghost')
      }
      if (variant === ButtonType.warning) {
        rootClasses.push('warning')
      }
      if (variant === ButtonType.skeleton) {
        rootClasses.push('skeleton')
      }
  return <button {...props} className={rootClasses.join(' ')} style={{}}>
    {size === ButtonSize.small && (
        <img src={smallIcon} alt=""/>
      )}
      {size === ButtonSize.medium && (
        <img src={mediumIcon} alt=""/>
      )}
      {size === ButtonSize.large && (
        <img src={largeIcon} alt=""/>
      )}
    </button>;
};

export default OnlyIconButton;
