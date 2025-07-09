import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';

import { InputDateUI } from './InputDate';

const meta: Meta = {
  title: 'InputDate',
  component: InputDateUI,
  tags: ['autodocs']
};

export default meta;

type Story = StoryObj<typeof meta>;

export const inputDate: Story = {
  render: (args) => <InputDateUI date={new Date('2013-04-27')} {...args} />
};
