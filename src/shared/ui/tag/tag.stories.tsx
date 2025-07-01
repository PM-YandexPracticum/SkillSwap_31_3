import { Meta, StoryObj } from '@storybook/react';
import { Tag } from './tag';

type Story = StoryObj<typeof Tag>;

const meta: Meta<typeof Tag> = {
  tags: ['autodocs'],
  title: 'Tag',
  component: Tag
};

export const First: Story = {
  args: {
    text: 'Бизнес-план'
  }
};

export const Second: Story = {
  args: {
    text: 'Игра на барабанах'
  }
};

export const Third: Story = {
  args: {
    text: 'Английский язык'
  }
};

export const Fourth: Story = {
  args: {
    text: 'Реставрация мебели'
  }
};

export default meta;
