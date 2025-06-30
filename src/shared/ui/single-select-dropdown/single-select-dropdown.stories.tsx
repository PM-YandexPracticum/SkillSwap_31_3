import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { SingleSelectDropdownUI } from './single-select-dropdown';

type Story = StoryObj<typeof SingleSelectDropdownUI>;

const meta: Meta<typeof SingleSelectDropdownUI> = {
  tags: ['autodocs'],
  title: 'SingleSelectDropdown',
  component: SingleSelectDropdownUI
};

export const Dropdown: Story = {
  args: {
    options: [
      "Не указан",
      "Мужской",
      "Женский"
    ],
    placeholder: "Не указан",
    label: "Пол",
  }
};

export default meta;