import React from 'react';
import { StoryFn, Meta } from '@storybook/react';
import Header from './Header';
import { TUser } from './types';

export default {
  title: 'SkillSwap/Header',
  component: Header,
  argTypes: {
    isLoggedIn: { control: 'boolean' },
    data: { control: 'object' },
    isFormOpen: { control: 'boolean' },
    onCloseForm: { action: 'closedForm' }
  }
} as Meta<typeof Header>;

const Template: StoryFn<typeof Header> = (args) => <Header {...args} />;

const mockUser: TUser = {
  _id: '2',
  name: 'Анна',
  city: 'Казань',
  age: '26',
  gender: 'female',
  image: '25d1a77020008b9e3f08babd1f67f01cdb8f89d6.jpg',
  skillName: 'Английский язык',
  skillId: '15',
  skillWants: ['12', '42', '23', '5'],
  like: 89,
  cratedAt: '2024-12-29'
};

export const LoggedIn: StoryFn<typeof Header> = () => (
  <Header isLoggedIn data={mockUser} />
);

export const LoggedOut: StoryFn<typeof Header> = () => (
  <Header isLoggedIn={false} />
);

export const FormOpen: StoryFn<typeof Header> = () => (
  <Header isLoggedIn isFormOpen onCloseForm={() => {}} />
);
