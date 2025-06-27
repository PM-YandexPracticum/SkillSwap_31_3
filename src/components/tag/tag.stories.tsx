import { Meta, StoryObj } from '@storybook/react';
import { Tag } from './tag';

type Story = StoryObj<typeof Tag>;

const meta: Meta<typeof Tag> = {
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
    textColor: '#000',
    backgroundColor: '#ccc'
  }
};

export const Second: Story = {
  args: {
    text: 'Второй тег',
    textColor: '#152',
    backgroundColor: '#fc506a'
  }
};

export const Third: Story = {
  args: {
    text: 'Третий тег',
    textColor: '#a90000',
    backgroundColor: '#03fff7'
  }
};

export const Fourth: Story = {
  args: {
    text: 'Четвёртый тег',
    textColor: '#6016ff',
    backgroundColor: '#1cff00'
  }
};

export default meta;
