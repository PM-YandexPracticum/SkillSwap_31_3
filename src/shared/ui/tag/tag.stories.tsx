import { Meta, StoryObj } from '@storybook/react';
import { Tag } from './tag';

type Story = StoryObj<typeof Tag>;

const meta: Meta<typeof Tag> = {
  tags: ['autodocs'],
  title: 'Tag',
  component: Tag,
  argTypes: {
    textColor: { control: 'color' },
    backgroundColor: { control: 'color' }
  }
};

export const First: Story = {
  args: {
    text: 'Первый тег',
    textColor: 'text',
    backgroundColor: 'background'
  }
};

export const Second: Story = {
  args: {
    text: 'Второй тег',
    textColor: 'text',
    backgroundColor: 'background'
  }
};

export const Third: Story = {
  args: {
    text: 'Третий тег',
    textColor: 'text',
    backgroundColor: 'background'
  }
};

export const Fourth: Story = {
  args: {
    text: 'Четвёртый тег',
    textColor: 'text',
    backgroundColor: 'background'
  }
};

export default meta;
