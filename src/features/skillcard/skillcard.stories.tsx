import { Meta, StoryObj } from '@storybook/react';
import { SkillCard } from './skillcard';
import { TUser } from '@app/styles/typs';

type Story = StoryObj<typeof SkillCard>;

const mockUser: TUser = {
  _id: '1',
  name: 'Иван Иванов',
  city: 'Москва',
  age: '28',
  gender: 'male',
  image: 'avatar1.jpg',
  skillName: 'Управление проектами',
  skillId: '7',
  skillWants: ['15', '28', '22'],
  like: 5,
  cratedAt: '2023-01-15'
};

const mockWantsToLearnSkills = [
  { name: 'Английский язык', parent_id: '2' },
  { name: 'Графический дизайн', parent_id: '4' },
  { name: 'Фотография', parent_id: '4' },
  { name: 'Кулинария', parent_id: '3' }
];

const meta: Meta<typeof SkillCard> = {
  tags: ['autodocs'],
  title: 'Components/SkillCard',
  component: SkillCard,
  argTypes: {
    isLiked: { control: 'boolean' },
    onLikeToggle: { action: 'liked' },
    onDetailsClick: { action: 'details clicked' },
    wantsToLearnSkills: {
      control: {
        type: 'object'
      }
    }
  }
};

export default meta;

export const Default: Story = {
  args: {
    data: mockUser,
    wantsToLearnSkills: mockWantsToLearnSkills
  }
};

export const LikedCard: Story = {
  args: {
    data: mockUser,
    isLiked: true,
    wantsToLearnSkills: mockWantsToLearnSkills
  }
};

export const FemaleUser: Story = {
  args: {
    data: {
      ...mockUser,
      _id: '2',
      name: 'Мария Петрова',
      gender: 'female',
      age: '32',
      city: 'Санкт-Петербург',
      image: 'avatar2.jpg',
      skillName: 'Графический дизайн',
      skillId: '29',
      skillWants: ['7', '36']
    },
    wantsToLearnSkills: [
      { name: 'Управление проектами', parent_id: '1' },
      { name: 'Обучение детей', parent_id: '5' }
    ]
  }
};

export const ManySkills: Story = {
  args: {
    data: {
      ...mockUser,
      _id: '3',
      skillName: 'Кулинария',
      skillId: '25',
      skillWants: ['15', '16', '17', '18', '19']
    },
    wantsToLearnSkills: [
      { name: 'Английский язык', parent_id: '2' },
      { name: 'Испанский язык', parent_id: '2' },
      { name: 'Французский язык', parent_id: '2' },
      { name: 'Немецкий язык', parent_id: '2' }
    ]
  }
};

export const YoungUser: Story = {
  args: {
    data: {
      ...mockUser,
      _id: '4',
      name: 'Алексей Смирнов',
      age: '19',
      skillName: 'Программирование',
      skillId: '36',
      skillWants: ['42', '43']
    },
    wantsToLearnSkills: [
      { name: 'Фитнес', parent_id: '6' },
      { name: 'Здоровое питание', parent_id: '6' }
    ]
  }
};

export const WithoutAdditionalSkills: Story = {
  args: {
    data: {
      ...mockUser,
      _id: '5',
      skillWants: []
    },
    wantsToLearnSkills: []
  }
};