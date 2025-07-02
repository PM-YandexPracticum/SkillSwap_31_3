import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import SecureInput from './passwordString';

const meta: Meta<typeof SecureInput> = {
  title: 'Components/SecureInput',
  component: SecureInput,
  argTypes: {
    color: { control: 'color' },
    error: { control: 'text' },
    placeholder: { control: 'text' },
    security: { control: 'boolean' }
  }
};

export default meta;

export const Default: StoryObj<typeof SecureInput> = {
  args: {
    placeholder: 'Введите ваш пароль',
    security: true,
    color: '#333',
    error: ''
  }
};

export const WithError: StoryObj<typeof SecureInput> = {
  args: {
    placeholder: 'Введите ваш пароль',
    security: true,
    color: '#333',
    error: 'Пароль должен содержать не менее 8 латинских букв без спецсимволов'
  }
};
