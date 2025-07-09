import type { Meta, StoryObj } from '@storybook/react';

import { InputDateUI } from './InputDate';

const meta: Meta<typeof InputDateUI> = {
  title: 'InputDate',
  component: InputDateUI,
  tags: ['autodocs']
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    selectedDate: new Date('1998-05-26'),
    onChange: (date) => {}
  }
};
