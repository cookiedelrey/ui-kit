import * as React from "react";
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Button, ButtonProps, ButtonSize, ButtonType } from '../Button/Button';
import { LargeIcon } from "../icons/LargeIcon";

export default {
title: 'Button',
component: Button,
argTypes: {
color: {
control: { type: 'color' },
},
size: {
options: Object.values(ButtonSize),
control: { type: 'select' },
},
variant: {
options: Object.values(ButtonType),
control: {
type: 'inline-radio',
},
},
disabled: {
control: {
type: 'boolean',
},
},
hasIcon: {
control: {
type: 'boolean',
},
},
},

} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args}>
</Button>;

export const Primary = Template.bind({});
Primary.args = {
children: "Primary",
variant: ButtonType.primary,
};

export const PrimaryInverse = Template.bind({});
PrimaryInverse.args = {
children: "Primary Inverse",
variant: ButtonType.primaryInverse,
};

export const Secondary = Template.bind({});
Secondary.args = {
children: "Secondary",
variant: ButtonType.secondary,
};

export const Tertiary = Template.bind({});
Tertiary.args = {
children: "Tertiary",
variant: ButtonType.tertiary,
};

export const Ghost = Template.bind({});
Ghost.args = {
children: "Ghost",
variant: ButtonType.ghost,
};

export const Warning = Template.bind({});
Warning.args = {
children: "Warning",
variant: ButtonType.warning,
};

export const Skeleton = Template.bind({});
Skeleton.args = {
children: "Skeleton",
variant: ButtonType.skeleton,
};