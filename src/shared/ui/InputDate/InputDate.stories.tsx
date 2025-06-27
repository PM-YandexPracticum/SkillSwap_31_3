import type { Meta, StoryObj } from '@storybook/react';

import { InputDateUI } from './InputDate';

const meta: Meta = {
  title: 'components/InputDate',
  component: InputDateUI,
  tags: ['autodocs']
};

export default meta;

type Story = StoryObj<typeof meta>;

export const inputDate: Story = {
  render: InputDateUI
};
