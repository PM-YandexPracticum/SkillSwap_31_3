import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { Button } from '../button/button'; // путь к твоему компоненту

const meta: Meta<typeof Button> = {
  title: 'Button', // как будет отображаться в меню Storybook
  component: Button,
  argTypes: {
    onClick: { action: 'clicked' },
    color: { control: 'color' },
    size: { control: 'radio', options: ['small', 'medium', 'large'] },
    variant: { control: 'radio', options: ['primary', 'secondary', 'tertiary'] },
    disabled: { control: 'boolean' },
    isPressed: { control: 'boolean' },
    hover: { control: 'boolean' }
  }
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Primary: Story = {
  args: {
    label: 'Primary Button',
    variant: 'primary',
    size: 'medium',
    onClick: () => alert('Primary clicked')
  }
};

export const Secondary: Story = {
  args: {
    label: 'Secondary Button',
    variant: 'secondary',
    size: 'medium',
    onClick: () => alert('Secondary clicked')
  }
};

export const Tertiary: Story = {
  args: {
    label: 'Tertiary Button',
    variant: 'tertiary',
    size: 'medium',
    onClick: () => alert('Tertiary clicked')
  }
};
