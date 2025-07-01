import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { DropdownUI } from './dropdown';

type Story = StoryObj<typeof DropdownUI>;

const meta: Meta<typeof DropdownUI> = {
  tags: ['autodocs'],
  title: 'Dropdown',
  component: DropdownUI
};

export const Dropdown: Story = {
  args: {
    values: ['Не указан', 'Мужской', 'Женский'],
    placeholder: 'Не указан',
    label: 'Пол'
  }
};

export default meta;
