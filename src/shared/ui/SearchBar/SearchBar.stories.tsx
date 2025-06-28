import type { Meta, StoryObj } from '@storybook/react';
import SearchBar from './search-bar';

const meta: Meta<typeof SearchBar> = {
  title: 'SearchBar',
  component: SearchBar,
  tags: ['autodocs'],
  argTypes: {
    placeholder: { control: 'text' },
    submit: { action: 'submit' },
    color: { control: 'color', description: 'Цвет текста' },
    backgroundColor: { control: 'color', description: 'Цвет фона' },
    placeholderColor: { control: 'color', description: 'Цвет плейсхолдера' },
    size: { control: { type: 'select', options: ['small', 'medium', 'large'] } }
  }
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    placeholder: 'Искать навык',
    submit: (text: string) => {}
  }
};

export const WithText: Story = {
  args: {
    placeholder: 'Искать навык',
    searchText: 'React'
  }
};

export const CustomColor: Story = {
  args: {
    placeholder: 'Искать навык',
    color: 'orange'
  }
};

export const CustomBackgroundColor: Story = {
  args: {
    placeholder: 'Искать навык',
    backgroundColor: 'yellow'
  }
};

export const CustomPlaceholderColor: Story = {
  args: {
    placeholder: 'Искать навык',
    placeholderColor: 'pink'
  }
};

export const CustomSize: Story = {
  args: {
    placeholder: 'Искать навык',
    size: 'large'
  }
};
