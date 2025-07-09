import React, { useState } from 'react';
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
  render: (args) => {
    const [value, setValue] = useState('');

    return (
      <SecureInput
        {...args}
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
    );
  },
  args: {
    placeholder: 'Введите ваш пароль',
    security: true,
    color: '#333',
    error: ''
  }
};

export const WithError: StoryObj<typeof SecureInput> = {
  render: (args) => {
    const [value, setValue] = useState('');

    return (
      <SecureInput
        {...args}
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
    );
  },
  args: {
    placeholder: 'Введите ваш пароль',
    security: true,
    color: '#333',
    error: 'Пароль должен содержать не менее 8 латинских букв без спецсимволов'
  }
};
