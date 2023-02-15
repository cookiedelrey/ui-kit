import React, { FC } from "react";
import "./Button.css";
export declare enum ButtonSize {
    large = "large",
    small = "small",
    medium = "medium"
}
export declare enum ButtonType {
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
export declare const Button: FC<ButtonProps>;
export default Button;
