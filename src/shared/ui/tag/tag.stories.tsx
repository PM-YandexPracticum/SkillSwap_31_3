import { Meta, StoryObj } from '@storybook/react';
import { Tag } from './tag';

type Story = StoryObj<typeof Tag>;

const meta: Meta<typeof Tag> = {
  tags: ['autodocs'],
  title: 'Components/Tag',
  component: Tag,
  argTypes: {
    textColor: { control: 'color' },
    backgroundColor: { control: 'color' },
    category: {
      control: 'select',
      options: ['1', '2', '3', '4', '5', '6']
    },
    skillId: {
      control: 'select',
      options: [
        '7',
        '8',
        '9',
        '10',
        '11',
        '12',
        '13',
        '14', // Business
        '15',
        '16',
        '17',
        '18',
        '19',
        '20',
        '21', // Languages
        '22',
        '23',
        '24',
        '25',
        '26',
        '27', // Home
        '28',
        '29',
        '30',
        '31',
        '32',
        '33',
        '34',
        '35', // Creative
        '36',
        '37',
        '38',
        '39',
        '40',
        '41', // Education
        '42',
        '43',
        '44',
        '45',
        '46',
        '47',
        '48', // Health
      ]
    }
  }
};

export default meta;

export const Default: Story = {
  args: {
    text: 'Default Tag'
  }
};

export const BusinessTag: Story = {
  args: {
    text: 'Бизнес-план',
    category: '1'
  }
};

export const LanguageTag: Story = {
  args: {
    text: 'Английский язык',
    category: '2'
  }
};

export const HomeTag: Story = {
  args: {
    text: 'Реставрация мебели',
    category: '3'
  }
};

export const BusinessSkillTag: Story = {
  args: {
    text: 'Управление проектами',
    skillId: '7'
  }
};

export const LanguageSkillTag: Story = {
  args: {
    text: 'Французский язык',
    skillId: '16'
  }
};

export const HomeSkillTag: Story = {
  args: {
    text: 'Интерьер дизайн',
    skillId: '22'
  }
};
