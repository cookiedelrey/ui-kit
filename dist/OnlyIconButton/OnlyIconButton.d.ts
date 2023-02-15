import { FC } from "react";
import './OnlyIconButton.css';
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
    size: ButtonSize;
    variant: ButtonType;
    disabled?: Boolean;
}
declare const OnlyIconButton: FC<ButtonProps>;
export default OnlyIconButton;
