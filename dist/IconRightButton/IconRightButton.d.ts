import React, { FC } from "react";
import "./IconRightButton.css";
declare enum ButtonSize {
    large = "large",
    small = "small",
    medium = "medium"
}
declare enum ButtonType {
    primary = "primary",
    primaryInverse = "primaryInverse",
    secondary = "secondary",
    tertiary = "tertiary",
    ghost = "ghost",
    warning = "warning",
    skeleton = "skeleton"
}
export interface ButtonProps {
    color?: string;
    children: React.ReactNode;
    size: ButtonSize;
    variant: ButtonType;
    disabled?: Boolean;
}
declare const IconRightButton: FC<ButtonProps>;
export default IconRightButton;
